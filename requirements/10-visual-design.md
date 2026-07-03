# Feature Area: Visual Design (Buitenleven)

The website uses the "Buitenleven" design system — a modern, light, muted-color aesthetic grounded in the natural world of a Noord-Holland holiday park. The design uses warm sand backgrounds, moss green primary color, clay accent for CTAs, DM Serif Display + Inter typography, and ultra-responsive fluid scaling.

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
| FR-VD-001 | All interactive UI elements (cards, buttons, navigation items) shall use standard card shadows (`3px 3px 9px`) to create subtle depth                         | All pages |
| FR-VD-002 | Input fields, textareas, and select elements shall use a 1px solid border with subtle inset shadow to visually indicate editable areas                        | All pages |
| FR-VD-003 | All UI components (cards, buttons, inputs, modals, image containers) shall use rounded corners with a border-radius of 15px                                   | All pages |
| FR-VD-004 | Buttons and interactive cards shall transition to a deeper shadow on hover (`7px 7px 14px`) with a subtle press effect on active, using 200–300ms transitions | All pages |
| FR-VD-005 | Card shadows shall be single-direction (top-left to bottom-right) to create a natural light source effect                                                     | All pages |

## Functional Requirements — Capfun Brand Color Palette

| ID        | Requirement                                                                                                                                                                                                                               | Source    |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-VD-010 | The site shall define the brand color palette using CSS custom properties on `:root`, including: background base (`#fffaf0`), surface (`#ffffff`), primary (`#5c8200`), primary light (`#9acd32`), secondary (`#212934`), and text colors | All pages |
| FR-VD-011 | The background base color shall be a warm cream (`#fffaf0`) to create a clean, light foundation for the card-based design                                                                                                                 | All pages |
| FR-VD-012 | The primary accent color shall be Capfun green (`#5c8200`) used for buttons, links, and interactive highlights, matching the park's branding                                                                                              | All pages |
| FR-VD-013 | Text colors shall use dark blue-gray (`#212934`) for primary text and medium gray (`#4a4e57`) for secondary text to ensure readability on cream/white backgrounds                                                                         | All pages |

## Functional Requirements — Contrast & Readability

| ID        | Requirement                                                                                                                                                    | Source    |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-VD-020 | All text shall meet WCAG 2.1 AA contrast ratio requirements: minimum 4.5:1 for normal text and 3:1 for large text (18px+ or 14px+ bold) against its background | All pages |
| FR-VD-021 | Text overlaid on images or gradient backgrounds shall use a semi-transparent overlay (`rgba(33,41,52,0.7)`) to guarantee the minimum contrast ratio is met     | All pages |
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
| FR-VD-041 | Photography shall be displayed prominently with generous spacing, soft rounded frames (15px radius), and subtle card shadow depth                        | All pages |
| FR-VD-042 | Typography shall use the Poppins font for headings and Open Sans for body text, providing a clean and modern font pairing                                | All pages |
| FR-VD-043 | Whitespace (padding and margin) shall be generous throughout the layout to create an open, airy feel that supports the holiday ambiance                  | All pages |

## Observations

- The color palette is derived from the official Capfun de Bongerd website (bongerd.nl) — primary green, cream backgrounds, dark footer.
- Card shadows use a standard single-direction approach rather than neumorphic dual-direction shadows.
- WCAG AA compliance (FR-VD-020) is ensured with the darker primary green (#5c8200) achieving ~4.8:1 contrast on cream backgrounds.
