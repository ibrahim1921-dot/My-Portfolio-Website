---
title: "BundleHub"
description: "A live, self-funded mobile data reseller platform for the Ghanaian market — MVP stage, built with provider routing and background job processing for reliable delivery."
excerpt: "An early-stage, self-funded data bundle marketplace for Ghana — built with Node.js, Next.js, and a background job queue that keeps orders reliable."
image: "https://images.unsplash.com/photo-1561474119-1b76f3a79816?w=800&q=80"
category: "Full-Stack"
technologies: ["Node.js", "TypeScript", "Express", "Next.js", "Prisma", "PostgreSQL", "BullMQ", "Paystack"]
liveUrl: "https://bundlehubgh.me"
featured: true
date: "2026-04-19"
---

# BundleHub

A live, self-funded mobile data reseller platform for the Ghanaian market — currently at MVP stage, letting customers buy mobile data bundles through a single, no-signup checkout, under ITECHNOLOGIES.

## Overview

Founded and built as a live platform selling discounted mobile data bundles to Ghanaian customers. It's self-funded and still early-stage — the MVP is live and processing real transactions, with the architecture built from day one to support more networks and features as the business grows.

## What's Inside

- **No-friction checkout** — no account or signup required. A customer picks a bundle, pays, and receives their data — nothing standing between intent and delivery
- **Multi-network support** — MTN, Telecel, and AirtelTigo bundles are all live, available through a single interface and routed to the correct provider behind the scenes
- **Instant payment via Paystack**, with **SMS delivery confirmation via Arkesel**
- **Reliable background delivery** — a BullMQ job queue handles the actual data delivery to the provider (Remadata) after payment, so a slow or failed provider request doesn't lose the transaction
- **Extensible provider routing** — a routing abstraction layer lets each network plug into the same delivery pipeline without duplicating logic per provider

## Tech Stack

- **Node.js, Express, and TypeScript** for the backend API
- **Next.js** for the frontend, deployed on Vercel
- **PostgreSQL via Neon**, accessed through **Prisma** as the ORM
- **BullMQ** for background job processing — decouples order placement from provider delivery, so a slow or failed provider response doesn't lose the transaction
- **Paystack** for payments, **Remadata** for data provisioning, **Arkesel** for SMS delivery confirmations
- **A provider routing abstraction layer** — MTN, Telecel, and AirtelTigo each route through the same shared delivery pipeline without duplicated logic per network

## Why This Project Matters

In the Ghanaian mobile market, purchasing data often involves USSD codes, account signups, or friction-heavy checkout processes. BundleHub matters because it proves that utility services can be seamless. By stripping away accounts and focusing purely on the transaction—pick a bundle, pay via Paystack, get the data—it prioritizes the user's time.

Building it forced me to think beyond just frontend UI and delve into robust backend architecture. Abstracting provider routing for MTN, Telecel, and AirtelTigo, and ensuring fail-safe deliveries via BullMQ, taught me how to build software where reliability is the core feature.

