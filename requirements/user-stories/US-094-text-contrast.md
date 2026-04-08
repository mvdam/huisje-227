# US-094: Text Contrast & Readability

**As a** visitor,
**I want to** read all text comfortably regardless of the background,
**so that** I can easily consume content without straining my eyes.

## Feature Area

[Visual Design](../10-visual-design.md)

## Acceptance Criteria

- All normal text meets WCAG 2.1 AA minimum contrast ratio of 4.5:1 against its background
- All large text (18px+ or 14px+ bold) meets a minimum contrast ratio of 3:1
- Text overlaid on images uses a semi-transparent overlay or text-shadow to guarantee contrast
- Interactive elements (links, buttons) have distinguishable hover, focus, and active states not relying on color alone
- Contrast ratios are verified for every text/background combination in the muted palette

## Related Requirements

- [FR-VD-020](../10-visual-design.md) — WCAG 2.1 AA contrast compliance
- [FR-VD-021](../10-visual-design.md) — Overlays/shadows for text on images
- [FR-VD-022](../10-visual-design.md) — Distinguishable interactive states

## Status

- [x] Implemented — 2026-04-08
