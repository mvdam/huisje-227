# US-011: Smooth Scroll to Content

**As a** visitor,
**I want to** scroll down smoothly to the main content,
**so that** the page flows naturally.

## Source

- [index.html](../../html/index.html#L93-L97)
- [main.js](../../html/js/main.js#L148-L156)

## Feature Area

[Homepage](../02-homepage.md)

## Acceptance Criteria

- An animated mouse/scroll indicator is shown at the bottom of the hero section
- Clicking the indicator smooth-scrolls to the first content section (`#next`)
- The scroll animation duration is 500ms
- Any visible text associated with the scroll indicator is in Dutch

## Related Requirements

- [FR-012](../02-homepage.md) — Mouse scroll indicator with smooth-scroll
