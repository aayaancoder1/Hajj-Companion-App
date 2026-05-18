# Agent Rules

Before starting any task:
Read:

* PRODUCT_VISION.md
* UX_RULES.md
* FRONTEND_ARCHITECTURE.md

These files are mandatory constraints.

---

# Design Source of Truth

The Stitch MCP server designs are the visual source of truth.

DO NOT:

* redesign screens
* invent new layouts
* change visual direction
* introduce new design systems

Implement the existing designs faithfully.

---

# Architecture Rules

Prefer:

* reusable components
* modular files
* composition
* clean separation of concerns

Avoid:

* duplicated logic
* giant files
* unnecessary abstractions
* overengineering

---

# Styling Rules

Use:

* TailwindCSS
* reusable UI primitives
* consistent spacing
* consistent shadows
* consistent border radius

Avoid:

* random styling changes
* inconsistent spacing systems
* page-specific design languages

---

# State Management Rules

Use:

* lightweight global state
* local state where appropriate
* localStorage persistence where needed

Avoid:

* unnecessary complexity
* deeply nested prop drilling

---

# File Organization

Respect the existing folder structure.

Place code appropriately:

* components → reusable UI
* pages → route screens
* hooks → reusable logic
* services → business logic
* store → global state
* data → static content

---

# Important Constraints

Do NOT:

* introduce backend complexity
* add authentication systems
* add chat systems
* redesign navigation
* replace the PWA architecture
* add unnecessary dependencies

---

# Output Expectations

Generate:

* production-quality code
* maintainable structure
* strongly typed components
* reusable architecture
* mobile-first implementation

The result should feel:

* polished
* intentional
* lightweight
* dependable
