---
title: "Your First React Native App: Hello World with Expo"
category: "Tutorial"
readTime: "6 min read"
excerpt: "Every mobile developer remembers the first time their code appeared on a real phone screen. Here is how to get there in React Native with Expo — and what is actually happening when you do."
image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&q=80"
date: "2026-05-12"
tags: ["react-native", "expo", "beginners", "tutorial", "mobile"]
---

## That First Moment

There is a specific feeling you get the first time your code runs on an actual phone. Not a browser tab, not a simulator — a real device that you can hold in your hand and show someone. It is a little ridiculous how good it feels for such a small thing.

This post is about getting you to that moment as fast as possible. We are building a Hello World app in React Native using Expo. We are also going to slow down and talk about *what is actually happening* — because React Native has a few concepts that trip up nearly everyone coming from the web, and I would rather you understand them from the start than copy-paste your way into confusion.

If you have not set up your Expo environment yet, check out my earlier post on [setting up a React Native project with Expo](/blog/setting-up-react-native-with-expo) first. This post picks up from a fresh project.

---

## What You Will Build

By the end of this post, you will have a real app — running on your phone or simulator — that:

- Displays a greeting message on screen
- Has a button that toggles the message when tapped
- Looks clean with some basic styling

Small? Yes. But it covers the three things every React Native app is built on: **components**, **state**, and **styles**.

---

## Step 1 — Bootstrap the Project

Open your terminal and run:

```bash
npx create-expo-app@latest hello-world-app
cd hello-world-app
npx expo start
```

Scan the QR code with Expo Go on your phone (or press `i` for the iOS simulator, `a` for Android). You should see the default Expo welcome screen. That is your baseline — now let us replace it with something we actually wrote.

---

## Step 2 — Open the Right File

In the project, find `app/(tabs)/index.tsx`. This is the home screen. Delete everything inside it. We are starting fresh.

> If your project uses a simpler template without the `(tabs)` folder, look for `app/index.tsx` instead. Either way, the code below is identical.

---

## Step 3 — Write the Hello World Screen

Paste this into the file:

```tsx
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [greeted, setGreeted] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {greeted ? 'Hello, World! 👋' : 'Tap the button below.'}
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => setGreeted(!greeted)}>
        <Text style={styles.buttonText}>
          {greeted ? 'Reset' : 'Say Hello'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 24,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a2e',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
```

Save the file. Your app should update on the device instantly. Tap the button. There it is.

---

## Step 4 — Understand What You Just Wrote

This is the part most tutorials skip. Let us go through the three things that are different from what you are used to on the web.

### View and Text are not div and p

On the web you reach for `<div>` and `<p>` without thinking. In React Native, the building blocks are `View` and `Text`. They map to native UI components on iOS and Android — which is exactly why your app feels native rather than like a web page wrapped in a shell.

One rule you will trip over: **you cannot render raw text outside of a `<Text>` component.** Put a stray string directly inside a `<View>` and React Native will throw a runtime error. It is strict about this, and for good reason — on native platforms, text rendering is handled completely differently from layout.

### StyleSheet.create is not CSS

You write styles as plain JavaScript objects, not CSS strings. There is no cascade, no specificity, no global selectors. A style applied to a `View` does not leak into its children. Every component owns its styles completely.

`StyleSheet.create()` is technically optional — you could pass a plain object directly — but it validates your style keys and provides a minor performance benefit by referencing styles by ID internally. It is worth using.

### TouchableOpacity is a button

React Native does not have a built-in `<button>` element. `TouchableOpacity` is the standard way to make something tappable. It gives you the visual feedback of a slight opacity drop when pressed, which is the interaction pattern users on mobile platforms expect. The `onPress` prop is the equivalent of `onClick`.

---

## Step 5 — The Flex Model

Look at this line in the styles:

```tsx
container: {
  flex: 1,
  ...
}
```

This is essential and you will write it dozens of times. Without `flex: 1`, a `View` has zero height and nothing inside it will appear on screen. In React Native, **flexbox is on by default** for every `View`, but the container still needs a height — and `flex: 1` tells it to fill all available space.

The default flex direction is also `column` (vertical), unlike the web where it is `row`. Keep that in mind when arranging elements side by side — you will need `flexDirection: 'row'` explicitly.

---

## What Is Actually Happening Behind the Scenes

When you run `npx expo start`, Expo launches a JavaScript bundler called **Metro**. Metro compiles your TypeScript and JSX into a single JavaScript bundle. That bundle runs inside a **JavaScript engine** (Hermes, by default) on your device.

But here is the part that makes React Native different from something like Cordova or Ionic: your JavaScript does not render to a WebView. Instead, it talks to a **native bridge** that translates your component tree into real native views — `UIView` on iOS, `android.view.View` on Android. The result is an app with native performance and native feel, driven by JavaScript logic you wrote.

That is why the screen you just built looks and responds exactly like an app you would download from the App Store.

---

## Common Mistakes to Avoid

**Forgetting `flex: 1` on the root container.** Your screen will be blank and you will stare at it for ten minutes wondering what went wrong. Always check this first.

**Nesting plain strings outside `<Text>`.** The error message (`Text strings must be rendered within a Text component`) is clear enough, but it still catches everyone at least once.

**Trying to use CSS units.** There are no `px`, `rem`, or `%` units in React Native styles (with the exception of `'100%'` for width/height in some cases). Numeric values represent density-independent pixels — they scale correctly across screen sizes automatically.

**Expecting CSS transitions.** React Native does not have CSS transitions. Animations are done through the `Animated` API or a library like `react-native-reanimated`. You will not need this for a Hello World app, but it is good to know early.

---

## Where to Go From Here

You have a working app and you understand the fundamentals behind it. Here are the natural next steps in order of difficulty:

- **Add another screen** — create `app/about.tsx` and use `expo-router`'s `Link` component to navigate to it
- **Fetch real data** — swap the static text for data loaded from a public API using `useEffect` and `fetch`
- **Style with NativeWind** — if Tailwind is your comfort zone on the web, `nativewind` brings utility classes to React Native
- **Build for production** — run `eas build` with Expo Application Services to generate a real `.apk` or `.ipa` file

---

## Conclusion

Hello World is not a trivial exercise. It is the first time the gap between "I write code" and "I ship software" collapses into a single moment. Everything after this — the state management, the navigation, the API calls — is just building on top of what you already understand from this small app.

You know what `View`, `Text`, and `TouchableOpacity` are. You know why `flex: 1` matters. You know what Metro is doing in the background. That is a real foundation.

Now go build something slightly more interesting than Hello World.

---
*Got stuck on any of these steps, or want to share what you ended up building? Reach out via the contact page — I genuinely enjoy hearing what people make with this stuff.*
