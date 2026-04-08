# US-016: Amenities by Category

**As a** visitor,
**I want to** browse detailed amenities organized by category (house, park, surroundings),
**so that** I know what facilities are available.

## Source

- [index.html](../../html/index.html#L522-L756)

## Feature Area

[Homepage](../02-homepage.md)

## Acceptance Criteria

- A tabbed interface displays three categories: "Het huisje", "Het park", "De omgeving"
- "Het huisje" tab is active by default
- "Het huisje" lists amenities for: Woonkamer, Keuken, Slaapkamer 1, Slaapkamer 2, Badkamer, Tuin & Schuur
- "Het park" lists facilities sourced from `website-content/park-facilities.md`: Zwembaden (binnen/buiten), Adventure Golf, Pumptrackbaan, Fietsverhuur, Jeu de Boulesbaan, Restaurants (Het Klokhuis, Wafelien, CaraHoedje Pizza, CaraHoedje Snack), Animatie, Binnenspeeltuin (Holle Bolle Boom), Parkshop/Supermarkt, Speeleiland, Visvijver, Tienerlounge
- "De omgeving" lists nearby attractions sourced from `website-content/surroundings-info.md`, organized by category:
  - Ontdekken: Vlindorado, Museum Broekerveiling, Land van Fluwel, Zeeaquarium, Van Blanckendaell Park, Tuinderij de Marlequi, Sprookjeswonderland, Dierenpark Hoenderdaell
  - Actieve uitjes: SKEEF waterskiën, Urban Trickz, Wandelen/fietsen in Schoorl/Petten, SkagaVenture
  - Gezellig: Bioscoop, Overdekt winkelen, Steden (Alkmaar, Hoorn, Schagen), Kaasmarkt Alkmaar, Strandwandeling Petten
- All tab labels, headings, and descriptions are in Dutch
- Text is readable (white on dark overlay background)

## Related Requirements

- [FR-031](../02-homepage.md) — Tabbed interface with three tabs
- [FR-032](../02-homepage.md) — "Het huisje" tab content
- [FR-033](../02-homepage.md) — "Het park" tab content
- [FR-034](../02-homepage.md) — "De omgeving" tab content
- [FR-035](../02-homepage.md) — White text styling on dark overlay

## Status

- [x] Implemented — 2026-04-08
