# Feature Area: Visual Design (Neumorphic Redesign)

The website shall adopt a neumorphic design language with a muted, holiday-appropriate color palette. The design must be mobile-friendly, modern, and ensure strong text contrast for readability.

## User Stories

| ID     | User Story                                                                                                                         | Source    |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------- |
| US-090 | As a visitor, I want the website to have a modern neumorphic design, so that it feels contemporary and visually appealing          | All pages |
| US-091 | As a mobile visitor, I want the website to be fully responsive and touch-friendly, so that I can browse comfortably on any device  | All pages |
| US-092 | As a visitor, I want the website to evoke a holiday atmosphere with a modern aesthetic, so that I feel inspired to book a vacation | All pages |
| US-093 | As a visitor, I want the site to use a muted color palette, so that the design feels calm and sophisticated                        | All pages |
| US-094 | As a visitor, I want all text to have sufficient contrast against backgrounds, so that content is always easily readable           | All pages |

## Functional Requirements — Neumorphic Design Language

| ID        | Requirement                                                                                                                                                             | Source    |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-VD-001 | All interactive UI elements (cards, buttons, form fields, navigation items) shall use neumorphic styling with soft outer shadows to create a raised/embossed appearance | All pages |
| FR-VD-002 | Input fields, textareas, and select elements shall use inset (pressed/debossed) neumorphic shadows to visually indicate editable areas                                  | All pages |
| FR-VD-003 | All UI components (cards, buttons, inputs, modals, image containers) shall use rounded corners with a minimum border-radius of 12px                                     | All pages |
| FR-VD-004 | Buttons and interactive cards shall transition between raised and pressed neumorphic states on hover and active, using smooth CSS transitions (200–300ms)               | All pages |
| FR-VD-005 | The neumorphic shadow style shall use a consistent light source direction (top-left) across all components, with a light shadow offset and a dark shadow offset         | All pages |

## Functional Requirements — Muted Color Palette

| ID        | Requirement                                                                                                                                                                                                    | Source    |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-VD-010 | The site shall define a muted color palette using CSS custom properties (variables) on `:root`, including: background base, surface, primary accent, secondary accent, text primary, and text secondary colors | All pages |
| FR-VD-011 | The background base color shall be a soft warm neutral (e.g., muted sand or light warm gray) to support the neumorphic shadow effect and evoke a holiday atmosphere                                            | All pages |
| FR-VD-012 | Accent colors shall be muted, warm-toned hues (e.g., dusty sage, soft terracotta, muted ocean blue) that convey a relaxed holiday vibe without appearing saturated or loud                                     | All pages |
| FR-VD-013 | The color palette shall avoid pure black (`#000`) and pure white (`#fff`); use off-black and off-white tones instead to maintain the soft neumorphic aesthetic                                                 | All pages |

## Functional Requirements — Contrast & Readability

| ID        | Requirement                                                                                                                                                    | Source    |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-VD-020 | All text shall meet WCAG 2.1 AA contrast ratio requirements: minimum 4.5:1 for normal text and 3:1 for large text (18px+ or 14px+ bold) against its background | All pages |
| FR-VD-021 | Text overlaid on images or gradient backgrounds shall use a semi-transparent overlay or text-shadow to guarantee the minimum contrast ratio is met             | All pages |
| FR-VD-022 | Interactive elements (links, buttons) shall have a distinguishable visual state (not relying on color alone) for hover, focus, and active states               | All pages |

## Functional Requirements — Mobile-Friendly & Responsive

| ID        | Requirement                                                                                                                                       | Source    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-VD-030 | The layout shall be mobile-first and responsive, adapting fluidly across breakpoints: mobile (<576px), tablet (576px–991px), and desktop (≥992px) | All pages |
| FR-VD-031 | All touch targets (buttons, links, form controls) shall have a minimum size of 44×44px to ensure comfortable tapping on mobile devices            | All pages |
| FR-VD-032 | Typography shall use fluid sizing (e.g., `clamp()`) so that headings and body text scale smoothly between mobile and desktop viewports            | All pages |
| FR-VD-033 | Horizontal scrolling shall not occur at any supported viewport width; all content shall fit within the viewport                                   | All pages |
| FR-VD-034 | Neumorphic shadows shall be scaled down on smaller viewports to avoid oversized shadow effects on compact screens                                 | All pages |

## Functional Requirements — Holiday Vibe & Modern Aesthetic

| ID        | Requirement                                                                                                                                                       | Source    |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-VD-040 | The overall visual tone shall balance a relaxed, holiday-inspired atmosphere with a clean, modern design — avoiding overly playful or kitschy aesthetics          | All pages |
| FR-VD-041 | Photography shall be displayed prominently with generous spacing, soft rounded frames, and subtle neumorphic depth to reinforce the holiday theme                 | All pages |
| FR-VD-042 | Typography shall use a modern, legible font pairing: a clean sans-serif for headings and a readable sans-serif or humanist font for body text                     | All pages |
| FR-VD-043 | Whitespace (padding and margin) shall be generous throughout the layout to create an open, airy feel that supports both the neumorphic style and holiday ambiance | All pages |

## Observations

- Neumorphic design works best with a single dominant background color for the shadow illusion — the chosen muted base color must be consistent across sections.
- Neumorphic inputs can be harder to distinguish as interactive; FR-VD-002 addresses this with inset shadows, but usability testing is recommended.
- WCAG AA compliance (FR-VD-020) may constrain the muted palette — contrast checks should be performed for every text/background combination during implementation.
