# US-041: Rates & Booking Conditions

**As a** visitor,
**I want to** see rates, deposit information, and booking conditions,
**so that** I can understand the costs and terms before reserving.

## Source

- [Tarieven.tsx](../../src/pages/Tarieven.tsx)
- [pricing.json](../../website-content/pricing.json)

## Feature Area

[Aankomst & Vertrek / Tarieven](../05-aankomst-vertrek-tarieven.md)

## Acceptance Criteria

- The page states arrival on Saturday after 12:00 and departure on Saturday before 10:00.

- Rates come from the central pricing JSON: €1,400 per week during the combined Dutch summer holiday and €1,050 per week outside it; the page does not explain percentages or nightly calculation rules
- Deposit ("borg") amount is stated: €300, teruggestort binnen 5 dagen na vertrek
- Payment terms are explained: 20% aanbetaling bij boeking (via Tikkie of contant), restbedrag 6 weken voor aankomst
- Cleaning fee option is stated: eindschoonmaak €50 extra (optioneel)
- Guest data requirements are explained: naam, geboortedatum, en zwemdiploma van alle reizigers
- Maximum rental period is noted (max 6 weken per seizoen, campingvoorwaarden)
- Booking terms and conditions are provided in Dutch
- All content, headings, and labels are in Dutch
- The page has a hero with Dutch heading and breadcrumb trail

## Related Requirements

- [FR-070](../05-aankomst-vertrek-tarieven.md) — Saturday arrival and departure policy

- [FR-071](../05-aankomst-vertrek-tarieven.md) — Rates and deposit details
- [FR-072](../05-aankomst-vertrek-tarieven.md) — Terms and conditions
- [FR-073](../05-aankomst-vertrek-tarieven.md) — Hero and breadcrumb

- [FR-PRICE-001–006](../16-central-pricing.md) — Central seasonal pricing

## Status

- [x] Implemented — 2026-04-08
