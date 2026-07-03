# US-060: Reservation Form

**As a** visitor,
**I want to** fill out a reservation form with my details and preferred dates,
**so that** I can book the holiday house.

## Source

- [reservation.html](../../html/reservation.html#L89-L168)

## Feature Area

[Reserveren](../07-reserveren.md)

## Acceptance Criteria

- A reservation form is displayed with fields: Naam, Telefoon, E-mail, Aankomst, Vertrek, Volwassenen, Kinderen, Opmerkingen
- All labels are in Dutch
- Date fields use a datepicker component (format: `d MM, yyyy`)
- Adults and children selects have actual form values
- The submit button reads "Reserveer nu"
- The form submits to a functioning backend/email endpoint
- Real property contact information is displayed alongside the form

## Related Requirements

- [FR-090](../07-reserveren.md) — Hero and breadcrumb
- [FR-091](../07-reserveren.md) — Reservation form fields
- [FR-092](../07-reserveren.md) — Dutch form labels
- [FR-093](../07-reserveren.md) — Datepicker configuration
- [FR-094](../07-reserveren.md) — Select option values
- [FR-095](../07-reserveren.md) — Form backend submission
- [FR-096](../07-reserveren.md) — Dutch submit button label
- [FR-097](../07-reserveren.md) — Real contact info alongside form

## Status

- [x] Implemented — 2026-07-03
