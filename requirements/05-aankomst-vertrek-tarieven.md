# Feature Area: Aankomst & Vertrek / Tarieven & Voorwaarden (About Page)

## User Stories

| ID     | User Story                                                                                                                                    | Source                                                                       |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| US-040 | As a visitor, I want to see arrival and departure information, so that I know the check-in/check-out procedures                               | [index.html](../html/index.html#L70)                                         |
| US-041 | As a visitor, I want to see rates, deposit information, and booking conditions, so that I can understand the costs and terms before reserving | [index.html](../html/index.html#L71), [index.html](../html/index.html#L1-L6) |

## Functional Requirements

| ID     | Requirement                                                                                                                            | Source                                                                    |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| FR-070 | The system shall provide a page with arrival and departure information (check-in/check-out times, directions, key handover procedures) | [index.html](../html/index.html#L70), [index.html](../html/index.html#L3) |
| FR-071 | The system shall provide a page (or section) with rate/tariff information and deposit ("borg") details                                 | [index.html](../html/index.html#L71), [index.html](../html/index.html#L4) |
| FR-072 | The system shall display terms and conditions / booking conditions                                                                     | [index.html](../html/index.html#L71)                                      |
| FR-073 | Each section shall have a hero with breadcrumb trail (Home > Aankomst & Vertrek, or Home > Tarieven & Voorwaarden)                     | Based on site pattern in [about.html](../html/about.html#L63-L75)         |
| FR-074 | All page content, headings, breadcrumbs, labels, and descriptions shall be in Dutch                                                    | [about.html](../html/about.html)                                          |

## Observations

- The TODO comment at the top of `index.html` explicitly lists "Aankomst + Vertrek informatie" and "Tarieven, borg" as pending work.
- `about.html` is completely unmodified from the template — it shows "About Us" with a "Leadership" section containing fake team members (Will Peters, Jane Williams, Jeffrey Neddery) and lorem ipsum text.
- Both nav items currently link to the same `about.html`. Either:
  - Create two separate pages (`aankomst-vertrek.html` and `tarieven.html`), or
  - Use a single page with distinct sections/anchors.
