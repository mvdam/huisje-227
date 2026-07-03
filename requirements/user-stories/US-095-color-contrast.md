# US-095: Color Contrast & Visual Accessibility

**As a** visitor with low vision,
**I want to** have all text and meaningful UI elements displayed with sufficient contrast,
**so that** I can read content and identify interactive elements without difficulty.

## Feature Area

[Accessibility](../11-accessibility.md)

## Acceptance Criteria

- All normal text (< 18px) meets a minimum contrast ratio of 4.5:1 against its background
- All large text (18px+ or 14px+ bold) meets a minimum contrast ratio of 3:1 against its background
- Non-text UI elements (icons, form field borders, button outlines) have at least 3:1 contrast against adjacent colors
- Text overlaid on images uses a semi-transparent overlay or text-shadow to ensure readability
- All informational images have descriptive `alt` text in Dutch; decorative images use `alt=""`
- Color is never the sole means of conveying information (e.g., errors also have text/icon indicators)

## Related Requirements

- [FR-A-001](../11-accessibility.md) — WCAG AA text contrast
- [FR-A-002](../11-accessibility.md) — Non-text element contrast
- [FR-A-003](../11-accessibility.md) — Text on image overlays
- [FR-A-004](../11-accessibility.md) — Image alt text
- [FR-A-005](../11-accessibility.md) — No color-only information

## Status

- [x] Implemented — 2026-07-03
