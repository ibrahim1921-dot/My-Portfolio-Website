---
title: "Moving BundleHub Off Render: A Weekend With Oracle Cloud"
category: "DevOps"
readTime: "9 min read"
excerpt: "Render's free tier was putting my backend to sleep and waking it up 50 seconds late. Here's how I ended up on a free Oracle VM instead, and everything that went wrong along the way."
image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80"
date: "2026-09-09"
tags: ["oracle-cloud", "devops", "nodejs", "infrastructure", "bundlehub"]
---

## The Problem

BundleHub is a mobile data reseller platform I built under Abdul-Sobur Enterprise — customers buy MTN, Telecel, and AirtelTigo bundles through it, and behind the scenes a BullMQ queue handles the actual delivery jobs against the network providers. I had the backend running on Render's free tier, and for a while that was fine.

Then I started noticing something annoying: the first request after any period of inactivity was taking 50 seconds or more to respond. Render's free web services spin down when nothing's hit them for a while, and spinning back up isn't instant. For a normal API that's mildly annoying. For BundleHub it's worse than that, because BullMQ needs a process that's actually alive to pull jobs off the queue. A sleeping server doesn't just respond slowly — it stops processing deliveries entirely until something wakes it up.

I went looking through the GitHub Student Developer Pack to see if anything in there could help.

## Chasing a Free Tier That Wasn't There Anymore

My first instinct was DigitalOcean — I remembered the pack used to include a decent credit, enough to run a small always-on droplet. I got as far as looking for it before finding out DigitalOcean had actually pulled out of the Student Pack earlier in the year, and any leftover credit balances expired at the end of July. So that door was already closed by the time I went looking.

Azure was still in the pack with $100 in credit, which would have worked, but I didn't want to be on a clock. What actually caught my attention was Oracle Cloud's Always Free tier — not a trial, not a credit that runs out, an actual permanent free ARM VM. One OCPU, 6GB of RAM (they used to give 2/12, apparently, before cutting it down — still plenty for what I needed). No expiry date. That was the one.

## Setting Up the Instance

This is where I learned that "free" doesn't mean "frictionless."

Creating the VM itself was the easy part — pick the Ampere A1 shape, Ubuntu 24.04, upload an SSH key, done. What ate my afternoon was the networking. Oracle splits this into layers that don't map cleanly onto anything I'd used before:

- A **VCN** is the whole virtual network, like your own private slice of the internet.
- A **subnet** lives inside the VCN and is either public or private.
- A **VNIC** is the actual interface card attached to your instance, sitting inside that subnet.

I had the "assign a public IPv4 address" toggle refuse to turn on no matter what I did, even after selecting a public subnet like the warning message told me to. Turns out this is a known quirk with the quick-create flow — creating a brand new VCN and subnet inline during instance creation doesn't always finish provisioning the internet gateway and route table before the wizard checks whether your subnet actually qualifies as public. The toggle stays locked because, from its point of view, you haven't actually got a public subnet yet, even though you clearly picked "create new public subnet" two seconds ago.

I burned a good hour fighting that toggle before giving up on it entirely. The fix was to just create the instance without a public IP, then go into the instance's VNIC afterward and assign one manually from there — same result, different door.

## The Firewall You Don't See Coming

Once I had a public IP and had opened ports 80 and 443 in Oracle's Security List, I still couldn't reach anything. curl just hung and timed out. I spent a while assuming it was a DNS problem, then a Caddy problem, before finding the actual culprit: Ubuntu ships on Oracle's images with **iptables rules that block everything except SSH by default**, completely independent of whatever the Security List allows.

So there are two firewalls. One lives outside your VM entirely, at the cloud infrastructure level. The other lives inside the VM's own operating system. Opening a port in one does nothing for the other. Nobody warns you about this in the console UI — you just have to know, or spend an evening finding out the hard way like I did.

```bash
sudo iptables -I INPUT 4 -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 5 -p tcp --dport 443 -j ACCEPT
sudo apt install -y iptables-persistent
sudo netfilter-persistent save
```

The moment I added those rules, Caddy's certificate request went through on the next restart and I finally had HTTPS working.

## Wiring the Backend Together

The actual application setup was refreshingly boring by comparison — Node 22, clone the repo over HTTPS with a personal access token since GitHub dropped password auth for git years ago, `npm install`, and a Prisma build against my existing Neon Postgres database, which was still holding all the same data Render had been talking to.

Caddy handles the reverse proxy and TLS certificate in about four lines of config:

```
api.bundlehubgh.me {
    reverse_proxy localhost:4000
}
```

That's genuinely the whole thing. Point a domain's A record at your server's IP, tell Caddy which local port to forward to, and it goes and gets a real Let's Encrypt certificate on its own the moment it can prove ownership over port 80.

PM2 keeps the actual Node process alive and restarts it if it ever crashes. I hit one more gremlin here — PM2 kept reporting the process as "online" while nothing was actually listening on port 4000, and the logs showed zero environment variables being injected. Running the app directly with `node dist/index.js` worked fine, which told me PM2 was starting the process from the wrong working directory and missing the `.env` file entirely. Adding `--cwd` explicitly fixed it:

```bash
pm2 start dist/index.js --name bundlehub-api --cwd /home/ubuntu/DataCenter
```

Small flag, cost me way more debugging time than it should have.

## What I Actually Learned

The honest version: everything that went wrong here was a permissions or defaults problem, not a hard technical one. Oracle's Security List is genuinely simple once you understand it's separate from iptables. The public IP toggle bug isn't documented anywhere obvious, but the workaround is a two-minute detour once you know it exists. None of this required deep networking knowledge — it required patience and a willingness to read error logs line by line instead of guessing.

I also came away with a better mental model of what platforms like Render or Vercel are actually doing for you. Every layer I configured by hand this weekend — DNS, reverse proxy, TLS, process management, firewall rules on two separate levels — those platforms handle invisibly behind a dashboard. There's real value in knowing what's underneath that abstraction, especially the day something breaks and the dashboard doesn't explain why.

## Where It Stands Now

BundleHub's backend runs on a persistent VM with no spin-down, no cold starts, and the BullMQ delivery worker stays alive continuously instead of waiting for a request to wake it up. I did a full reboot test to make sure PM2 and Caddy would both come back up on their own after an actual restart, since Oracle does occasional maintenance on these instances — and they did, no manual intervention needed.

Total cost: zero. Total time: a weekend I didn't fully get back. Worth it? Given that Render's downtime was actively costing me delivery reliability, yes — without much hesitation.

---
*If you're setting up something similar and want to compare notes on the Oracle networking quirks, feel free to reach out through the contact page.*