# Feature Area: Het Huisje (Rooms Page)

## User Stories

| ID     | User Story                                                                                                                         | Source                                    |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| US-020 | As a visitor, I want to view detailed information about the holiday house and its rooms, so that I can decide if it suits my needs | [rooms.html](../html/rooms.html#L80-L300) |

## Functional Requirements

| ID     | Requirement                                                                                                                                                                                                            | Source                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| FR-050 | The page shall display a hero section with heading "Het huisje" and breadcrumb trail (Home > Het huisje)                                                                                                               | [rooms.html](../html/rooms.html#L71-L79)                                    |
| FR-051 | The page shall display a check-availability form identical to the homepage (Aankomst, Vertrek, Volwassenen, Kinderen) with Dutch labels                                                                                | [rooms.html](../html/rooms.html#L88-L130)                                   |
| FR-052 | The page shall display property descriptions and images specific to Capfun De Bongerd 227 (not the template "Single Room $90/night", "Family Room $120/night", "Presidential Room $250/night")                         | [rooms.html](../html/rooms.html#L140-L207)                                  |
| FR-053 | The "Great Offers" section shall be replaced with real property content (e.g., special rates, seasonal offers) or removed                                                                                              | [rooms.html](../html/rooms.html#L210-L244)                                  |
| FR-054 | The page shall list facilities per area: Woonkamer, Keuken, Slaapkamer 1, Slaapkamer 2, Badkamer, Schuur, and Tuin — with detailed items sourced from `website-content/accomodation-facilities.md`                     | [accomodation-facilities.md](../website-content/accomodation-facilities.md) |
| FR-055 | The Schuur shall be presented as a separate section from Tuin, listing: wasmachine, droger, droogrek, bolderkar, koelkast met vriesvak, buitenspeelgoed, diverse fietsen en steppen, extra stoelen, tuingereedschap    | [accomodation-facilities.md](../website-content/accomodation-facilities.md) |
| FR-056 | The Tuin section shall describe: luxe partytent (loungebank, heater, verlichting, wind-/regenbestendig), eettafel met 6 stoelen, parasol, tuinhaard/vuurkorf, kogel BBQ met kolenstarter, grasveldje voor tent (~5x4m) | [accomodation-facilities.md](../website-content/accomodation-facilities.md) |

## Observations

- This page is almost entirely unmodified from the Colorlib "Sogo Hotel" template. All content is in English with hotel-specific room types and USD pricing.
- The page title is still "Sogo Hotel by Colorlib.com".
- Navigation labels are in English.
- The CTA section says "A Best Place To Stay. Reserve Now!" — needs Dutch translation.
