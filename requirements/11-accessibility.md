# Feature Area: Accessibility

The website shall be accessible to all visitors, including those with visual impairments, motor disabilities, or those using assistive technologies. This covers color contrast, keyboard navigation, and responsive design.

## User Stories

| ID     | User Story                                                                                                                                         | Source    |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| US-095 | As a visitor with low vision, I want all text and images to have sufficient contrast, so that I can read content without difficulty                | All pages |
| US-096 | As a visitor who uses a keyboard, I want to navigate the entire website without a mouse, so that I can access all content and interactive elements | All pages |
| US-097 | As a mobile visitor, I want the website to be fully responsive, so that I can use it comfortably on any screen size without horizontal scrolling   | All pages |

## Functional Requirements — Color Contrast

| ID       | Requirement                                                                                                                                          | Source    |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-A-001 | All text shall meet WCAG 2.1 AA contrast ratio requirements: minimum 4.5:1 for normal text and 3:1 for large text (18px+ or 14px+ bold)              | All pages |
| FR-A-002 | All non-text UI elements (icons, borders, form field outlines) that convey meaning shall have a minimum contrast ratio of 3:1 against the background | All pages |
| FR-A-003 | Text overlaid on images shall use a semi-transparent overlay or text-shadow to guarantee the minimum contrast ratio is met                           | All pages |
| FR-A-004 | Images that convey information shall have descriptive alt text in Dutch; decorative images shall use `alt=""`                                        | All pages |
| FR-A-005 | The site shall not rely on color alone to convey information (e.g., error states, active navigation, form validation)                                | All pages |

## Functional Requirements — Keyboard Navigation

| ID       | Requirement                                                                                                                                                                     | Source    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-A-010 | All interactive elements (links, buttons, form fields, tabs, modals) shall be reachable and operable using only the keyboard (Tab, Shift+Tab, Enter, Space, Escape, Arrow keys) | All pages |
| FR-A-011 | A visible focus indicator shall be displayed on the currently focused element, with sufficient contrast (minimum 3:1 against adjacent colors)                                   | All pages |
| FR-A-012 | Focus order shall follow a logical reading order (top-to-bottom, left-to-right) and match the visual layout                                                                     | All pages |
| FR-A-013 | Modal dialogs (e.g., lightbox, video player) shall trap focus within the dialog while open and return focus to the triggering element on close                                  | All pages |
| FR-A-014 | Skip navigation: a "skip to main content" link shall be available as the first focusable element on each page                                                                   | All pages |

## Functional Requirements — Responsive Design

| ID       | Requirement                                                                                                         | Source    |
| -------- | ------------------------------------------------------------------------------------------------------------------- | --------- |
| FR-A-020 | The layout shall be responsive and usable across viewports from 320px to 2560px wide without horizontal scrolling   | All pages |
| FR-A-021 | All touch targets (buttons, links, form controls) shall have a minimum size of 44×44px on mobile devices            | All pages |
| FR-A-022 | Content shall reflow into a single column on narrow viewports (<576px) without loss of information or functionality | All pages |
| FR-A-023 | Images and media shall scale proportionally and not overflow their containers at any viewport width                 | All pages |
| FR-A-024 | Text shall remain readable without zooming on mobile devices; base font size shall be at least 16px                 | All pages |
