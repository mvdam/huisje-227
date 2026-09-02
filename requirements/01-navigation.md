# Feature Area: Site Navigation

## User Stories

| ID | User Story | Source |
|----|-----------|--------|
| US-001 | As a visitor, I want to navigate between all pages of the site via a menu, so that I can find relevant information about the property | [Navigation.tsx](../src/components/Navigation.tsx) |
| US-002 | As a visitor, I want the current page highlighted in the menu, so that I know where I am on the site | [Navigation.tsx](../src/components/Navigation.tsx) |
| US-003 | As a mobile visitor, I want a hamburger menu toggle, so that I can access navigation on small screens | [Navigation.tsx](../src/components/Navigation.tsx), [Navigation.tsx](../src/components/Navigation.tsx) |

## Functional Requirements

| ID | Requirement | Source |
|----|------------|--------|
| FR-001 | The system shall display a navigation menu with links to: Home, Het huisje, Aankomst & Vertrek, Tarieven & Voorwaarden, Het Park, Contact, and Reserveren | [Navigation.tsx](../src/components/Navigation.tsx) |
| FR-002 | The system shall mark the current page's menu item with an `active` class | [Navigation.tsx](../src/components/Navigation.tsx) |
| FR-003 | The system shall show/hide the navigation menu on mobile via a toggle button with fade animation (400ms) | [Navigation.tsx](../src/components/Navigation.tsx) |
| FR-004 | The system shall apply a `scrolled` class to the site header when the user scrolls past 200px | [Navigation.tsx](../src/components/Navigation.tsx) |
| FR-005 | The site logo shall link to the home route (`/`) and display the text "Capfun De Bongerd 227" | [Navigation.tsx](../src/components/Navigation.tsx) |
| FR-006 | The navigation menu shall be consistent across all pages, using the same Dutch labels and link targets | [Navigation.tsx](../src/components/Navigation.tsx) |
| FR-007 | "Aankomst & Vertrek" and "Tarieven & Voorwaarden" shall each link to their own dedicated React route | [Navigation.tsx](../src/components/Navigation.tsx) |

## Observations

- Sub-pages still use the original English template navigation labels. See `09-template-cleanup.md` FR-TC-001.
- "Aankomst & Vertrek" and "Tarieven & Voorwaarden" are implemented as separate React routes.
