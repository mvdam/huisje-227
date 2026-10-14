---
id: "US-102"
title: "Maintain reservations in central JSON"
status: "accepted"
implements_fr:
  - "FR-RES-001"
  - "FR-RES-002"
  - "FR-RES-003"
  - "FR-RES-008"
focus_track: "quality"
---

# US-102: Maintain reservations in central JSON

**As an** owner,
**I want to** maintain season dates and reserved periods for each year in one JSON file,
**so that** I can publish availability updates without changing React code.

## Acceptance Criteria

- **AC-1:** One JSON file exposes a `years` object with year keys and `seasonStart`, `seasonEnd`, and `reservedPeriods` for each configured year.
- **AC-2:** Dates are valid ISO calendar dates, with start before end; reserved periods contain `start` and `end`.
- **AC-3:** Confirmed 2026 data is preserved during migration. The 2027 season is configured from `2027-04-02` to `2027-10-17` (exclusive end), with no known reservations initially. Markdown headings alone do not publish availability.
- **AC-4:** Adding or updating a configured year requires editing JSON only, with no React data-list changes.
- **AC-5:** Owner documentation includes the data shape and explains that a build and deployment publish changes.

## Related Requirements

- [FR-RES-001](../15-central-reservation-data.md)
- [FR-RES-002](../15-central-reservation-data.md)
- [FR-RES-003](../15-central-reservation-data.md)
- [FR-RES-008](../15-central-reservation-data.md)

## Feature Area

[Central Reservation Data](../15-central-reservation-data.md), [Reserveren](../07-reserveren.md)
