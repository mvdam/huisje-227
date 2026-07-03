# US-096: Keyboard Navigation

**As a** visitor who uses a keyboard,
**I want to** navigate the entire website without a mouse,
**so that** I can access all content and interactive elements using only keyboard controls.

## Feature Area

[Accessibility](../11-accessibility.md)

## Acceptance Criteria

- All interactive elements (links, buttons, form fields, tabs, modal controls) are reachable via Tab / Shift+Tab
- A visible focus indicator is displayed on the focused element with at least 3:1 contrast
- Focus order follows the logical reading order and matches the visual layout
- Modal dialogs (lightbox, video player) trap focus inside while open
- Pressing Escape closes open modals and returns focus to the triggering element
- A "skip to main content" link is available as the first focusable element on each page
- Tabbed interfaces (e.g., amenities tabs) can be operated with Arrow keys
- Carousels can be navigated with Arrow keys when focused

## Related Requirements

- [FR-A-010](../11-accessibility.md) — Keyboard operability
- [FR-A-011](../11-accessibility.md) — Visible focus indicator
- [FR-A-012](../11-accessibility.md) — Logical focus order
- [FR-A-013](../11-accessibility.md) — Focus trapping in modals
- [FR-A-014](../11-accessibility.md) — Skip navigation link

## Status

- [ ] Not implemented
