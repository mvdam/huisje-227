# US-091: Mobile-Friendly Responsive Layout

**As a** mobile visitor,
**I want to** browse the website comfortably on any device,
**so that** I can explore the property and make a reservation from my phone or tablet.

## Feature Area

[Visual Design](../10-visual-design.md)

## Acceptance Criteria

- The layout adapts fluidly across mobile (<576px), tablet (576px–991px), and desktop (≥992px) breakpoints
- All touch targets (buttons, links, form controls) are at least 44×44px
- Typography scales smoothly between viewports using fluid sizing
- No horizontal scrolling occurs at any supported viewport width
- Neumorphic shadows are scaled down on smaller screens to avoid oversized effects
- The site is usable and visually coherent on screens as small as 320px wide

## Related Requirements

- [FR-VD-030](../10-visual-design.md) — Mobile-first responsive breakpoints
- [FR-VD-031](../10-visual-design.md) — Minimum 44×44px touch targets
- [FR-VD-032](../10-visual-design.md) — Fluid typography with `clamp()`
- [FR-VD-033](../10-visual-design.md) — No horizontal scrolling
- [FR-VD-034](../10-visual-design.md) — Scaled neumorphic shadows on mobile

## Status

- [x] Implemented — 2026-04-08
