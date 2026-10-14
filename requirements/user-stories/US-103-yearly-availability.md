---
id: "US-103"
title: "Browse yearly reservation availability"
status: "accepted"
implements_fr:
  - "FR-RES-004"
  - "FR-RES-005"
  - "FR-RES-006"
  - "FR-RES-007"
  - "FR-RES-009"
  - "FR-RES-010"
focus_track: "quality"
---

# US-103: Browse yearly reservation availability

**As a** visitor,
**I want to** select a configured year and check my preferred dates against the same availability data,
**so that** the overview and date feedback agree.

## Acceptance Criteria
- **AC-1:** The overview offers every configured year with remaining periods and displays its season and reserved periods from the central JSON.
- **AC-2:** Among years with remaining periods, the initial year follows the arrival-query year, otherwise the current or next visible year, otherwise the latest visible year.
- **AC-3:** Availability checks use the requested arrival year even when a different overview year is selected.
- **AC-4:** Unconfigured years and an empty dataset explicitly indicate that availability is unknown; they never appear freely bookable.
- **AC-5:** Both season and reservation ranges include the start and exclude the end; adjacent departures and arrivals do not conflict.
- **AC-6:** A stay extending outside its configured season cannot be reported available.
- **AC-7:** Available periods are keyboard-accessible buttons with an explicit selection hint; selecting one fills arrival and departure, marks the selected period, and updates availability feedback and the total rental price. Editing the dates manually updates the selection indicator and price. Booked periods cannot be selected; expired periods are hidden.
- **AC-8:** Periods ending on or before today (local calendar date) are hidden. Years with no remaining periods are excluded, including when requested by URL; selection falls back to a visible year. If none remain, no year selector or calendar is shown and an explicit empty message is displayed.

## Related Requirements

- [FR-RES-004](../15-central-reservation-data.md)
- [FR-RES-005](../15-central-reservation-data.md)
- [FR-RES-006](../15-central-reservation-data.md)
- [FR-RES-007](../15-central-reservation-data.md)
- [FR-RES-009](../15-central-reservation-data.md)
- [FR-RES-010](../15-central-reservation-data.md)

## Feature Area

[Central Reservation Data](../15-central-reservation-data.md), [Reserveren](../07-reserveren.md)
