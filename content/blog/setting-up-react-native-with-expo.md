---
title: "How to Set Up a React Native Project with Expo (2026 Guide)"
category: "Tutorial"
readTime: "10 min read"
excerpt: "A complete, no-fluff walkthrough for setting up a React Native project with Expo — from zero to a running app on your phone in under 15 minutes."
image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"
date: "2026-05-04"
tags: ["react-native", "expo", "typescript", "mobile", "tutorial"]
---

## Why Expo?

Before anything else — why Expo and not bare React Native?

Bare React Native requires you to configure Xcode (macOS only) and Android Studio before you write a single line of app code. Expo abstracts all of that away. You get a real app running on a real device in minutes, with access to device APIs (camera, location, notifications) that would otherwise take hours to configure manually.

For most projects — especially when you are learning, prototyping, or building a production app without custom native modules — Expo is simply the right choice.

---

## Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (v18 or higher) — [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js) or **yarn**
- **Expo Go** app on your phone (available on the App Store and Google Play)

That is genuinely all you need. No Xcode. No Android Studio. No emulator setup.

---

## Step 1 — Create a New Expo Project

Open your terminal and run:

```bash
npx create-expo-app@latest my-app
```

This scaffolds a new project with a clean file structure. When prompted, choose the **default** template — it comes pre-configured with TypeScript, Expo Router, and a sensible folder structure.

Once it finishes, move into the project directory:

```bash
cd my-app
```

---

## Step 2 — Understand the Project Structure

Here is what gets generated and what actually matters:

```
my-app/
├── app/               # Your screens live here (file-based routing)
│   ├── (tabs)/        # Tab navigator screens
│   │   ├── index.tsx  # Home tab
│   │   └── explore.tsx
│   └── _layout.tsx    # Root layout — navigation shell
├── components/        # Reusable UI components
├── constants/         # Theme colours, font sizes, etc.
├── hooks/             # Custom React hooks
├── assets/            # Images, fonts, icons
├── app.json           # Expo app configuration
└── package.json
```

The most important thing to understand here is the `app/` directory. Expo Router uses **file-based routing** — the same concept as Next.js. Every file you create inside `app/` automatically becomes a navigable screen. No manual route registration needed.

---

## Step 3 — Start the Development Server

```bash
npx expo start
```

This starts the Metro bundler and displays a **QR code** in your terminal.

Open the **Expo Go** app on your phone, scan the QR code, and your app loads instantly on your device. Every time you save a file, the app updates in real time — no rebuilds, no waiting.

> **Note:** Your phone and computer must be on the same Wi-Fi network for this to work. If it doesn't connect, press `w` to open the app in a browser instead while you troubleshoot.

You can also press:
- `a` — open on an Android emulator (if configured)
- `i` — open on an iOS simulator (macOS only)
- `r` — reload the app manually

---

## Step 4 — Create Your First Screen

Open `app/index.tsx` (or `app/(tabs)/index.tsx` if using the tabs template) and replace its contents with:

```tsx
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, World!</Text>
      <Text style={styles.subtitle}>My first React Native screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
```

Save the file and your device updates immediately. A few things to note if you are coming from web:

- `View` is the React Native equivalent of a `div`
- `Text` is required for all text — you cannot render a string directly in JSX
- `StyleSheet.create()` is used instead of CSS — styles are JavaScript objects
- **Flexbox is on by default** — every `View` is already a flex container

---

## Step 5 — Add a New Screen and Navigate to It

Create a new file at `app/about.tsx`:

```tsx
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About</Text>
      <Text>This is the about screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
```

That file now exists as a route at `/about`. To navigate to it, use Expo Router's `Link` component or `router` object back in `app/index.tsx`:

```tsx
import { Link } from 'expo-router';

// Inside your JSX:
<Link href="/about">Go to About</Link>
```

Or programmatically:

```tsx
import { router } from 'expo-router';

router.push('/about');
```

No `react-navigation` setup. No stack configuration. Just create a file and link to it.

---

## Step 6 — Configure the Root Layout

The file `app/_layout.tsx` is the navigation shell for your entire app. The default template sets up a stack navigator — open it and you will see something like:

```tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
    </Stack>
  );
}
```

Add a `Stack.Screen` entry for every screen you create to control the header title and other navigation options. If you do not add one, Expo Router will still render the screen — it just uses the filename as the default title.

---

## Step 7 — Add TypeScript Types for Navigation (Optional but Recommended)

Expo Router supports typed routes. To enable them, add this to your `app.json`:

```json
{
  "expo": {
    "experiments": {
      "typedRoutes": true
    }
  }
}
```

Now `href` props and `router.push()` calls will be type-checked against your actual file structure. Typos in route names become compile errors rather than runtime crashes.

---

## Common Gotchas

**Text must always be inside a `<Text>` component.** Forgetting this causes a runtime crash that can confuse beginners. If you see "Text strings must be rendered within a Text component", this is why.

**Styles do not cascade.** Unlike CSS, a style applied to a `View` does not affect its children. Each component is styled independently.

**`flex: 1` is your best friend.** Without it, a `View` will have zero height and nothing will appear. If your screen is blank, the first thing to check is whether your root container has `flex: 1`.

**Hot reload vs. full reload.** Expo's fast refresh handles most changes automatically, but if you add a new package or change `app.json`, you need to restart the server with `npx expo start --clear`.

---

## What to Build Next

Now that your project is running, here are the natural next steps:

- **Add a tab navigator** — create an `app/(tabs)/` folder with an `_layout.tsx` that uses `<Tabs>` from Expo Router
- **Fetch data from an API** — use `useEffect` and `useState` (or TanStack Query) to load remote data
- **Store local data** — try `AsyncStorage` for simple key-value persistence on device
- **Style properly** — explore `NativeWind` if you prefer Tailwind-style utility classes in React Native

---

## Conclusion

Expo has made React Native genuinely approachable. What used to require a full native toolchain setup now takes a single `npx` command and a phone in your pocket. The file-based routing from Expo Router removes one of the biggest friction points for developers coming from Next.js, and TypeScript works out of the box.

The gap between web and mobile development has never been smaller. If you already know React, you are closer to shipping a mobile app than you might think.

---
*Have questions or ran into an issue following this guide? Reach out via the contact page — I am happy to help.*
