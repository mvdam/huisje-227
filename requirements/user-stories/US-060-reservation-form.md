# US-060: Reservation Form

**As a** visitor,
**I want to** fill out a reservation form with my details and preferred dates,
**so that** I can book the holiday house.

## Source

- [Reserveren.tsx](../../src/pages/Reserveren.tsx)

## Feature Area

[Reserveren](../07-reserveren.md)

## Acceptance Criteria

- The page states arrival on Saturday after 12:00 and departure on Saturday before 10:00.

- A reservation form is displayed with fields: Naam, Telefoon, E-mail, Aankomst, Vertrek, Volwassenen, Kinderen, Baby, Opmerkingen
- All labels are in Dutch
- Date fields use accessible native or React date controls, prevent departure before arrival and use ISO dates internally
- Adults and children selects have actual form values
- The submit button reads "Reserveer nu"
- When a backend is available, the form submits to a functioning backend/email endpoint
- Until then, the form clearly identifies itself as a non-sending prototype and never claims that a request was sent
- Real property contact information is displayed alongside the form

- Clicking an available calendar period fills arrival and departure, shows the selected period, and updates the rental total; booked periods cannot be selected.
- Expired periods and years with no remaining periods are hidden from the overview.
- A complete valid date selection displays the total rental price and nights, without seasonal explanations or percentages; manual edits recalculate it. Without yearly holiday data, show a contact message instead of a price.

## Related Requirements

- [FR-070](../05-aankomst-vertrek-tarieven.md) — Saturday arrival and departure policy

- [FR-090](../07-reserveren.md) — Hero and breadcrumb
- [FR-091](../07-reserveren.md) — Reservation form fields
- [FR-092](../07-reserveren.md) — Dutch form labels
- [FR-093](../07-reserveren.md) — Datepicker configuration
- [FR-094](../07-reserveren.md) — Select option values
- [FR-095](../07-reserveren.md) — Form backend submission
- [FR-096](../07-reserveren.md) — Dutch submit button label
- [FR-097](../07-reserveren.md) — Real contact info alongside form

- [FR-098 and FR-099](../07-reserveren.md) — Central availability overview and date checks
- [FR-RES-009 and FR-RES-010](../15-central-reservation-data.md) — Clickable periods and expired-date filtering
- [FR-PRICE-001–006](../16-central-pricing.md) — Central seasonal pricing and selected stay totals

## Status

- [x] Form UI, validation and availability feedback implemented — 2026-07-03
- [x] Honest non-sending prototype message and authoritative reservation data implemented — 2026-09-02
- [ ] Backend delivery deferred by product decision — 2026-09-02
