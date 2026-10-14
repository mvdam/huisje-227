# Feature Area: Central Reservation Data

Availability is maintained in one JSON file and consumed by the website. The Markdown reservation notes remain editorial input; an empty year heading does not establish a season or availability.

## User Stories

| ID | User Story | Source |
| --- | --- | --- |
| US-102 | As an owner, I want to maintain reservations per year in one JSON file, so that I can update availability without editing React code | [US-102](user-stories/US-102-central-reservation-data.md) |
| US-103 | As a visitor, I want to select a year and check availability against the same data as the overview, so that availability information agrees | [US-103](user-stories/US-103-yearly-availability.md) |

## Functional Requirements

| ID | Requirement | Source |
| --- | --- | --- |
| FR-RES-001 | `website-content/reservations.json` shall be the single source of reservation availability, with a top-level `years` object keyed by four-digit year | [reservations.json](../website-content/reservations.json) |
| FR-RES-002 | Each year shall define `seasonStart`, `seasonEnd`, and `reservedPeriods`; each reserved period shall define `start` and `end`. Dates shall use valid ISO calendar dates (`YYYY-MM-DD`) and increasing date ranges | [US-102](user-stories/US-102-central-reservation-data.md) |
| FR-RES-003 | The existing confirmed 2026 season and reserved periods shall be migrated unchanged. The explicitly configured 2027 season shall run from `2027-04-02` to `2027-10-17` (exclusive end), initially with an empty reservation list. Markdown headings alone shall not publish availability | [US-102](user-stories/US-102-central-reservation-data.md) |
| FR-RES-004 | The application shall import the JSON during its build and derive both the reservation overview and date-range checks from it, without duplicate hardcoded season or reservation lists | [US-103](user-stories/US-103-yearly-availability.md) |
| FR-RES-005 | Visitors shall be able to select any configured year with remaining periods in the overview. Among years with remaining periods, the initial selection shall use the arrival-query year when present, otherwise the current or next year, falling back to the latest visible year | [US-103](user-stories/US-103-yearly-availability.md) |
| FR-RES-006 | Arrival dates in unconfigured years or an empty dataset shall produce explicit unknown/unavailable availability feedback; missing configuration shall never imply that dates are free | [US-103](user-stories/US-103-yearly-availability.md) |
| FR-RES-007 | Season and reservation ranges shall include their start and exclude their end. Departure on a reservation start and arrival on its end shall not conflict; stays outside the configured season shall not be reported available | [US-103](user-stories/US-103-yearly-availability.md) |
| FR-RES-008 | Owner documentation shall explain how to edit yearly data and that changes become public after a new build and deployment | [README](../README.md) |
| FR-RES-009 | Available periods shall be clearly identified as clickable, keyboard-accessible buttons. Selecting a period shall fill arrival and departure and show the selected state; booked periods shall be disabled and expired periods hidden | [US-103](user-stories/US-103-yearly-availability.md) |
| FR-RES-010 | The overview shall hide periods whose end date is on or before today in local time and exclude years with no remaining periods. A hidden selected/query year shall fall back to a visible year. When none remain, the year selector and calendar shall be replaced by an explicit empty message | [US-103](user-stories/US-103-yearly-availability.md) |

## Traceability

- FR-RES-001–003 and FR-RES-008 → [US-102](user-stories/US-102-central-reservation-data.md).
- FR-RES-004–007 and FR-RES-009–010 → [US-103](user-stories/US-103-yearly-availability.md).
- Extends [FR-098 and FR-099](07-reserveren.md) and [US-060](user-stories/US-060-reservation-form.md).

## Focus Track

- `quality` — maintainability and consistent availability feedback.
