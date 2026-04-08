# Feature Area: Site Navigation

## User Stories

| ID | User Story | Source |
|----|-----------|--------|
| US-001 | As a visitor, I want to navigate between all pages of the site via a menu, so that I can find relevant information about the property | [index.html](../html/index.html#L63-L75) |
| US-002 | As a visitor, I want the current page highlighted in the menu, so that I know where I am on the site | [index.html](../html/index.html#L68) |
| US-003 | As a mobile visitor, I want a hamburger menu toggle, so that I can access navigation on small screens | [index.html](../html/index.html#L57-L61), [main.js](../html/js/main.js#L5-L16) |

## Functional Requirements

| ID | Requirement | Source |
|----|------------|--------|
| FR-001 | The system shall display a navigation menu with links to: Home, Het huisje, Aankomst & Vertrek, Tarieven & Voorwaarden, Het Park, Contact, and Reserveren | [index.html](../html/index.html#L68-L74) |
| FR-002 | The system shall mark the current page's menu item with an `active` class | [index.html](../html/index.html#L68) |
| FR-003 | The system shall show/hide the navigation menu on mobile via a toggle button with fade animation (400ms) | [main.js](../html/js/main.js#L5-L16) |
| FR-004 | The system shall apply a `scrolled` class to the site header when the user scrolls past 200px | [main.js](../html/js/main.js#L174-L183) |
| FR-005 | The site logo shall link to the home page (`index.html`) and display the text "Capfun De Bongerd 227" | [index.html](../html/index.html#L55) |
| FR-006 | The navigation menu shall be consistent across all pages, using the same Dutch labels and link targets | [index.html](../html/index.html#L63-L75) |
| FR-007 | "Aankomst & Vertrek" and "Tarieven & Voorwaarden" shall each link to their own dedicated page (currently both link to `about.html`) | [index.html](../html/index.html#L70-L71) |

## Observations

- Sub-pages still use the original English template navigation labels. See `09-template-cleanup.md` FR-TC-001.
- Both "Aankomst & Vertrek" and "Tarieven & Voorwaarden" point to the same `about.html` — separate pages or sections are needed.
