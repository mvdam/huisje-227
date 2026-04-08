# US-020: Holiday House Details

**As a** visitor,
**I want to** view detailed information about the holiday house and its rooms,
**so that** I can decide if it suits my needs.

## Source

- [rooms.html](../../html/rooms.html#L80-L300)

## Feature Area

[Het Huisje](../03-het-huisje.md)

## Acceptance Criteria

- The page displays a hero section with heading "Het huisje" and breadcrumb (Home > Het huisje)
- Property-specific descriptions and images are shown (not template hotel room types)
- A check-availability form with Dutch labels is present
- Content describes each area of the property with facility lists sourced from `website-content/accomodation-facilities.md`:
  - **Woonkamer**: hoekbank, eettafel, spelletjes, Smart TV met Chromecast, airco, openslaande deuren
  - **Keuken**: koelkast, 4-pits gaskookplaat, Nespresso, waterkoker, XL Airfryer, servies voor 6-8 personen
  - **Slaapkamer 1**: 2-persoons boxspring (200x140cm), TV met Chromecast, ventilator
  - **Slaapkamer 2**: stapelbed (200x60cm), campingbedje met matras, ladekast
  - **Badkamer**: toilet, douche, spoelbak, spiegelkast
  - **Schuur** (separate section): wasmachine, droger, koelkast met vriesvak, buitenspeelgoed, fietsen en steppen
  - **Tuin**: luxe partytent met loungebank/heater/verlichting, eettafel met 6 stoelen, tuinhaard/vuurkorf, kogel BBQ, grasveldje voor tent

## Related Requirements

- [FR-050](../03-het-huisje.md) — Hero section and breadcrumb
- [FR-051](../03-het-huisje.md) — Check-availability form in Dutch
- [FR-052](../03-het-huisje.md) — Real property content (replace template rooms)
- [FR-053](../03-het-huisje.md) — Replace or remove "Great Offers" section

## Status

- [x] Implemented — 8 April 2026
