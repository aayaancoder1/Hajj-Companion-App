# Hajj Companion — Product Vision & System Definition

## Overview

**Hajj Companion** is a mobile-first Progressive Web App (PWA) designed to act as a calm, intelligent, emotionally supportive digital companion during Hajj and Umrah.

The application is initially built for a single real-world user:  
an Indian Muslim pilgrim performing Hajj.

The product prioritizes:

- clarity over complexity
- calmness over feature overload
- usefulness over gimmicks
- reliability over experimentation

### This is NOT intended to be:

- a social platform
- a travel booking app
- a generic Islamic utility app
- a Google Maps replacement
- a chatbot-first experience

Instead, the app is designed to reduce:

- confusion
- anxiety
- uncertainty
- navigation stress
- logistical overwhelm

during one of the most physically and emotionally intense journeys in the world.

---

# Core Philosophy

The product should feel like:

> “a calm digital companion during Hajj”

NOT:

> “a dashboard full of features”.

The app must feel:

- emotionally warm
- trustworthy
- spiritually respectful
- modern
- lightweight
- grounded
- dependable

The user experience should reduce cognitive load during:

- exhaustion
- crowds
- heat
- stress
- unfamiliar environments

Every feature must answer:

> “Does this reduce uncertainty or stress?”

If not, it should not exist.

---

# Platform & Technical Direction

## Platform

- Mobile-first PWA
- Android-focused
- Installable through browser
- Offline-capable
- Optimized for Chrome

## Stack

- React
- Vite
- TailwindCSS
- Service Worker for offline support
- Local storage persistence
- No heavy backend initially

## Architecture Style

- modular
- reusable
- lightweight
- maintainable
- offline-first

---

# Core Product Areas

## 1. Home Experience

The Home screen acts as the emotional and informational anchor of the app.

### Purpose

- immediate clarity
- reassurance
- situational awareness

### The Home screen should display:

- current prayer
- next prayer countdown
- current city state (Makkah / Madinah)
- smart Kaaba crowd recommendation
- current crowd intensity
- quick shortcuts
- offline status
- contextual guidance

### The experience should feel:

- peaceful
- intelligent
- non-overwhelming

---

## 2. Prayer Timing System

The app contains a dedicated prayer timing experience.

### Features

- toggle between Makkah and Madinah
- local persistence of selected city
- accurate Haram prayer timings
- next prayer countdown
- clean visual hierarchy

### Behavior

- the selected city should persist between sessions
- the app should reopen in the previously selected state

This is implemented using local storage persistence.

---

## 3. Smart Crowd Guidance System

One of the core features of the app is intelligent Kaaba crowd guidance.

### Purpose

Help the user determine:

- when to visit the Haram
- when crowd levels are likely manageable
- when not to attempt Tawaf or Kaaba access

### This is NOT fake “AI prediction”

The system should instead use:

- known crowd behavior patterns
- prayer proximity
- time-of-day heuristics
- day-specific trends
- contextual guidance

### Outputs may include:

- “Crowds are currently heavy”
- “Best opportunity expected after Isha”
- “Pre-Fajr hours are currently favorable”

### The feature should feel:

- trustworthy
- grounded
- practical

NOT:

- exaggerated
- overly technical
- hype-driven

---

## 4. Haram Guide & Interactive Mosque Maps

The app includes a simplified interactive illustrated map system for:

- Masjid al-Haram
- Masjid an-Nabawi

### This is NOT a Google Maps clone

### The maps should:

- be simplified
- visually clean
- vector/illustrated
- optimized for mobile
- lightweight
- partially offline-capable

### Map layers may include:

- gates
- escalators
- elevators
- wheelchair ramps
- washrooms
- zamzam stations
- quiet areas
- medical centers
- entrances/exits

### Interactions

- tappable points
- contextual overlays
- quick details
- category filters

### GPS

- approximate user location support
- contextual “You are near Gate X” guidance

### Goal

Orientation and reassurance,  
NOT turn-by-turn navigation.

---

## 5. Ritual Guidance System

The Rituals section acts as a structured journey assistant.

### It provides:

- day-by-day Hajj flow
- Mina guidance
- Arafat guidance
- Muzdalifah guidance
- Jamarat guidance
- Tawaf guidance
- contextual duas
- checklists
- ritual sequencing

### The UX should:

- reduce uncertainty
- provide calm structure
- avoid information overload

### The interface should feel:

- focused
- grounded
- timeline-driven

---

## 6. Nearby Essentials System

The Nearby section provides curated nearby places.

### This is NOT a discovery feed

The system focuses on:

- usefulness
- proximity
- simplicity

### Possible categories

- restaurants
- pharmacies
- shuttle pickup points
- hotels
- essentials

### Each item may include:

- walking distance
- short notes
- quick actions
- external Google Maps launch

Nearby places are sorted:

> nearest → farthest

### Navigation Philosophy

The application intentionally relies on Google Maps externally for:

- full navigation
- routing
- transportation guidance

The app itself should remain lightweight.

---

## 7. Emergency & Reliability Layer

The Emergency section is one of the most important parts of the product.

### Purpose

Provide immediate clarity during stress situations.

### Features may include:

- hotel details
- Arabic hotel address
- emergency contacts
- medical information
- support instructions
- lost-person guidance
- “I’m okay” quick action

### This section must function:

- reliably
- quickly
- offline when possible

### The experience should feel:

- dependable
- serious
- calming

---

## 8. AI Assistance Escape Hatch

The app includes a persistent floating AI assistance button.

### Purpose

Provide intelligent fallback support for situations outside the app’s scope.

### Behavior

- floating circular button
- bottom-right corner
- always accessible
- opens Google AI Mode directly inside Chrome

### The app does NOT contain:

- an internal chatbot
- conversational AI UI
- a custom AI assistant system

### Instead, the AI shortcut acts as:

- external intelligent assistance
- lightweight escalation path

### The feature should feel:

- integrated
- subtle
- practical

NOT:

- flashy
- intrusive
- “AI-first”

---

# Offline-First Philosophy

Offline reliability is a major requirement.

The app should cache:

- prayer timings
- map assets
- ritual guides
- emergency information
- core UI assets

Connectivity in Hajj environments may be inconsistent.

The app must continue functioning gracefully during:

- weak internet
- crowded networks
- intermittent signal loss

---

# Design Direction

The UI should feel:

- calm
- premium
- emotionally warm
- spacious
- spiritually respectful

### Avoid:

- corporate dashboard aesthetics
- crypto UI patterns
- excessive animations
- noisy interfaces
- dark cyberpunk visuals

### Visual direction:

- warm ivory backgrounds
- muted green accents
- soft gold highlights
- rounded cards
- smooth transitions
- elegant typography
- minimal clutter

The application should feel:

> “quietly dependable”.

---

# UX Priorities

The app must prioritize:

1. clarity
2. speed
3. emotional reassurance
4. practical usefulness
5. low cognitive load

### The interface should never feel:

- chaotic
- overengineered
- experimental

The experience should feel stable and intentional.

---

# Product Identity

Hajj Companion is ultimately:

- a navigation aid
- a ritual assistant
- a situational awareness tool
- an emotional reassurance layer

It is designed to quietly support the pilgrim throughout the journey.

The product succeeds when:

- the user feels less lost
- less uncertain
- and more at peace.