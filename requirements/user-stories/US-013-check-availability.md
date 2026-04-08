# US-013: Check Availability

**As a** visitor,
**I want to** check availability by entering check-in/check-out dates and guest counts,
**so that** I can see if the property is available for my desired period.

## Source

- [index.html](../../html/index.html#L101-L156)

## Feature Area

[Homepage](../02-homepage.md)

## Acceptance Criteria

- A form is displayed with fields: Aankomst (check-in), Vertrek (check-out), Volwassenen (adults), Kinderen (children)
- All form labels are in Dutch
- Date fields use a datepicker component
- Guest count fields offer options 1, 2, 3, 4+
- A "Bekijk beschikbaarheid" button submits the form (Dutch label)
- The form submits to a functioning backend or navigates to the reservation page with parameters

## Related Requirements

- [FR-014](../02-homepage.md) — Availability form fields
- [FR-015](../02-homepage.md) — Datepicker format and behavior
- [FR-016](../02-homepage.md) — Adults select options with values
- [FR-017](../02-homepage.md) — Children select options with values
- [FR-018](../02-homepage.md) — Form submission to backend
- [FR-019](../02-homepage.md) — Submit button label

## Status

- [x] Implemented — 2026-04-08
- Note: Form navigates to /reserveren with query params (no backend)
