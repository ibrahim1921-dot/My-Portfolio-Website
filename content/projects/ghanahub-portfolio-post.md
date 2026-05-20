---
title: "GhanaHub"
description: "Cross-platform mobile app delivering local news, real-time weather, and a community forum for Ghanaian users."
excerpt: "A Ghana-first mobile experience delivering real-time news, city weather, and a community forum — built with React Native and Expo."
image: "https://images.unsplash.com/photo-1630386226447-af0a955c1009?w=800&q=80"
category: "Mobile"
technologies: ["React Native", "Expo", "TypeScript", "Axios", "AsyncStorage"]
githubUrl: "https://github.com/ibrahim1921-dot/RN-GhanaHub"
featured: true
date: "2026-05-20"
---

# GhanaHub

A cross-platform mobile app built for Ghanaians — bringing together local news, real-time weather, and a community forum in one polished, offline-aware experience.

## Overview

Most mobile apps are built for everyone, which often means they feel right for no one in particular. GhanaHub was built specifically for Ghanaian users, with a Ghana flag-inspired green design, weather data for five Ghanaian cities, and a news feed filtered for Ghanaian content. The challenge was weaving four distinct features — news, weather, community, and profile — into a single coherent experience that feels native on both iOS and Android.

## What's Inside

- **Live Ghana news feed** — articles pulled from NewsAPI with a debounced search bar and a full in-app WebView reader so users never leave the app
- **Real-time weather for 5 cities** — Accra, Kumasi, Tamale, Cape Coast, and Takoradi fetched in parallel from Open-Meteo, with WMO weather code mapping to human-readable conditions and colour-coded gradient cards
- **Community forum** — posts grouped by author in a `SectionList`, swipeable to delete, with a slide-up modal for new posts, character limits, and category tagging
- **Persistent user profile** — name, email, and settings survive app restarts via AsyncStorage, with an avatar colour deterministically derived from the user's name so it is always consistent
- **Animated onboarding carousel** — three slides with interpolated background colour transitions, icon scale animations, haptic feedback, and pill-style progress dots
- **File-based routing** — the entire navigation tree is declared in the `app/` directory using Expo Router, mirroring Next.js App Router conventions

## Tech Stack

- **React Native 0.81 + Expo 54** with the New Architecture enabled
- **Expo Router** for file-based, type-safe navigation
- **TypeScript** in strict mode across every screen, component, hook, and utility
- **Axios** with four pre-configured instances — one per external API — so auth headers and base URLs are set once and never repeated
- **AsyncStorage** behind a thin wrapper that silently absorbs storage errors
- **Open-Meteo API** for free, no-key-required weather data
- **NewsAPI** for Ghana-focused article search and discovery
- **Expo Haptics** for tactile feedback during onboarding

## Why This Project Matters

GhanaHub pushed me beyond feature completeness and into the discipline of writing a codebase that others — or a future me — could comfortably work in. During a refactor pass I extracted duplicated avatar colour logic scattered across four files into a single `utils/avatar.ts`, moved every AsyncStorage key string into a typed `constants/storageKeys.ts` so a typo becomes a compile error rather than a silent data miss, and consolidated a copy-pasted email validation regex that had drifted between the login and edit-profile screens. None of those changes were visible to users, but they are the kind of decisions that determine whether a codebase stays healthy as it grows. Building a real product for a specific cultural context also reminded me that the best apps feel like they were made *for* their users, not just *at* them.
