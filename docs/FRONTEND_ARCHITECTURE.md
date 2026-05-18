# Frontend Architecture

## Stack

* React
* Vite
* TypeScript
* TailwindCSS
* React Router
* Zustand
* vite-plugin-pwa

---

# Architecture Philosophy

The frontend should be:

* modular
* reusable
* lightweight
* offline-first
* mobile-first

Avoid:

* enterprise complexity
* unnecessary abstractions
* premature optimization

---

# Folder Structure

```txt
src/
├── assets/
├── components/
│   └── ui/
├── pages/
├── layouts/
├── hooks/
├── store/
├── services/
├── routes/
├── data/
├── maps/
├── utils/
├── types/
└── styles/
```

---

# Route Structure

```txt
/
├── home
├── haram-guide
├── rituals
├── nearby
└── emergency
```

---

# Shared Layout Structure

Main structure:

```tsx
<AppShell>
  <PageContent />
  <BottomNavigation />
  <FloatingAIButton />
</AppShell>
```

---

# Shared UI Primitives

Reusable primitives should live in:

```txt
src/components/ui/
```

Examples:

* Button
* Card
* Badge
* BottomSheet
* Modal
* SectionHeader

---

# State Management

Global state examples:

* selected city
* offline status
* ritual phase
* crowd state

Persist important preferences using:

* localStorage

---

# Services Layer

Services contain:

* business logic
* API integrations
* helpers
* calculations

Examples:

* prayer time services
* crowd recommendation engine
* geolocation helpers

Services should remain UI-independent.

---

# Offline Strategy

Cache:

* app shell
* ritual content
* prayer timings
* map assets
* emergency information

The app should degrade gracefully offline.

---

# Map System

The Haram/Nabawi maps:

* are NOT Google Maps clones
* should use lightweight SVG/vector architecture
* should support overlays and markers
* should remain modular

---

# Navigation Philosophy

Google Maps should only be used externally for:

* routing
* outdoor navigation
* transportation

The app itself focuses on:

* orientation
* reassurance
* guidance
