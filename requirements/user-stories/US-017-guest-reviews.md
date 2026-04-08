# US-017: Guest Reviews

**As a** visitor,
**I want to** read reviews from previous guests,
**so that** I can assess the quality of the property.

## Source

- [index.html](../../html/index.html#L781-L870)

## Feature Area

[Homepage](../02-homepage.md)

## Acceptance Criteria

- Guest reviews ("Recensies") are displayed in a carousel slider
- The section heading is in Dutch ("Recensies")
- Each review shows a blockquote with review text and the guest's name
- Reviews optionally include a guest photo (rounded circle)
- All displayed reviews are real guest reviews in Dutch (no placeholder text)
- The carousel autoplays and is responsive (1/2/3 items at breakpoints)

## Related Requirements

- [FR-036](../02-homepage.md) — Reviews carousel
- [FR-037](../02-homepage.md) — Review card layout
- [FR-038](../02-homepage.md) — Carousel responsive behavior
- [FR-039](../02-homepage.md) — Real guest reviews required
- [FR-040](../02-homepage.md) — Real or removed author images

## Status

- [x] Partially implemented — 2026-04-08
- Only 1 real review (Fam. Eshuis) is displayed as a static blockquote
- Carousel not implemented — only 1 real review exists in source content
- **Blocked**: Additional real guest reviews needed from property owners to build a carousel
