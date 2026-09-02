# Feature Area: Visual Design (Buitenleven)

The website uses the "Buitenleven" design system — a modern, light, muted-color aesthetic grounded in the natural world of a Noord-Holland holiday park. This document is the authoritative visual-design source. The design uses warm sand backgrounds, moss green primary color, clay accent for CTAs, DM Serif Display + Inter typography, and ultra-responsive fluid scaling.

## User Stories

| ID     | User Story                                                                                                                             | Source    |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| US-090 | As a visitor, I want the website to have a modern card-based design matching the Capfun brand, so that it feels professional and fresh | All pages |
| US-091 | As a mobile visitor, I want the website to be fully responsive and touch-friendly, so that I can browse comfortably on any device      | All pages |
| US-092 | As a visitor, I want the website to evoke a holiday atmosphere with a modern aesthetic, so that I feel inspired to book a vacation     | All pages |
| US-093 | As a visitor, I want the site to use the Capfun de Bongerd color palette, so that the design is consistent with the park's brand       | All pages |
| US-094 | As a visitor, I want all text to have sufficient contrast against backgrounds, so that content is always easily readable               | All pages |

## Functional Requirements — Card-Based Design

| ID        | Requirement                                                                                                                                                   | Source    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-VD-001 | Cards and prominent interactive elements shall use the shared shadow tokens to create subtle, consistent depth without making every link appear raised | All pages |
| FR-VD-002 | Input fields, textareas and selects shall use a 1px solid border and a clearly visible focus ring; a resting inset shadow is optional | All pages |
| FR-VD-003 | Components shall use the shared radius scale: 12px for compact controls/media, 16px for cards and 24px for pill-shaped primary actions | All pages |
| FR-VD-004 | Buttons and interactive cards shall use 200–300ms transitions between the shared raised, hover and pressed shadow tokens | All pages |
| FR-VD-005 | Shadows shall be subtle, centered and consistent with the Buitenleven token system | All pages |

## Functional Requirements — Buitenleven Color Palette

| ID        | Requirement                                                                                                                                                                                                                               | Source    |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-VD-010 | The site shall define the Buitenleven palette as CSS custom properties on `:root`: sand background (`#F5F1EC`), white surface (`#FFFFFF`), moss green primary (`#4A7C59`), dark moss (`#365A40`), clay CTA accent (`#C4703E`) and text colors | All pages |
| FR-VD-011 | The background base color shall be warm sand (`#F5F1EC`) with white (`#FFFFFF`) component surfaces | All pages |
| FR-VD-012 | Moss green (`#4A7C59`) shall be used for primary navigation, links and highlights; clay (`#C4703E`) shall be reserved for prominent conversion actions | All pages |
| FR-VD-013 | Text shall use warm charcoal (`#3B3630`) for primary content and an accessible secondary tone derived from the Buitenleven palette | All pages |

## Functional Requirements — Contrast & Readability

| ID        | Requirement                                                                                                                                                    | Source    |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-VD-020 | All text shall meet WCAG 2.1 AA contrast ratio requirements: minimum 4.5:1 for normal text and 3:1 for large text (18px+ or 14px+ bold) against its background | All pages |
| FR-VD-021 | Text overlaid on images or gradient backgrounds shall use a sufficiently dark warm-charcoal overlay (normally `rgba(59,54,48,0.7)` or stronger) to meet the minimum contrast ratio | All pages |
| FR-VD-022 | Interactive elements (links, buttons) shall have a distinguishable visual state (not relying on color alone) for hover, focus, and active states               | All pages |

## Functional Requirements — Mobile-Friendly & Responsive

| ID        | Requirement                                                                                                                                       | Source    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-VD-030 | The layout shall be mobile-first and responsive, adapting fluidly across breakpoints: mobile (<576px), tablet (576px–991px), and desktop (≥992px) | All pages |
| FR-VD-031 | All touch targets (buttons, links, form controls) shall have a minimum size of 44×44px to ensure comfortable tapping on mobile devices            | All pages |
| FR-VD-032 | Typography shall use fluid sizing (e.g., `clamp()`) so that headings and body text scale smoothly between mobile and desktop viewports            | All pages |
| FR-VD-033 | Horizontal scrolling shall not occur at any supported viewport width; all content shall fit within the viewport                                   | All pages |
| FR-VD-034 | Card shadows shall be reduced on smaller viewports to avoid oversized shadow effects on compact screens                                           | All pages |

## Functional Requirements — Holiday Vibe & Modern Aesthetic

| ID        | Requirement                                                                                                                                              | Source    |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-VD-040 | The overall visual tone shall balance a relaxed, holiday-inspired atmosphere with a clean, modern design — avoiding overly playful or kitschy aesthetics | All pages |
| FR-VD-041 | Photography shall be displayed prominently with generous spacing, soft rounded frames from the shared radius scale and subtle card-shadow depth | All pages |
| FR-VD-042 | Typography shall use DM Serif Display for restrained display headings and Inter for body, navigation, forms and utility text | All pages |
| FR-VD-043 | Whitespace (padding and margin) shall be generous throughout the layout to create an open, airy feel that supports the holiday ambiance                  | All pages |

## Observations

- The Buitenleven palette is property-specific and inspired by the natural setting; it is not a literal copy of the park website.
- Historical references to `#fffaf0`, `#5c8200`, Poppins/Open Sans, fixed 15px radii and directional shadows are superseded by the tokens above.
- Color use remains subject to measured WCAG AA compliance; palette membership alone is not proof of sufficient contrast.
