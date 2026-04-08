# US-030: Park Information

**As a** visitor,
**I want to** see information about the park and its activities,
**so that** I know what the resort offers beyond the house.

## Source

- [events.html](../../html/events.html#L84-L190)

## Feature Area

[Het Park](../04-het-park.md)

## Acceptance Criteria

- The page displays a hero section with heading "Het Park" and breadcrumb (Home > Het Park)
- Real park activity content is shown, sourced from `website-content/park-facilities.md`, covering all facility areas:
  - **Zwembaden**: binnenzwembad (peuterbad, glijbanen, normaal zwembad) en buitenzwembad (waterpark, trechterglijbaan, spetter-/spatbad, ligweiden)
  - **Adventure Golf**: mini-golfbaan, €7,50 per persoon via receptie
  - **Pumptrackbaan**: grote en kleine baan, steppen/fietsen/skaten, BMX/stuntstep te huur (€10/dag)
  - **Fietsverhuur**: stadsfietsen, e-bikes, bakfietsen, kinderfietsen, BMX, stuntstep, skelters, bolderkar — met prijslijst
  - **Jeu de Boulesbaan**: 3 overdekte banen, boules bij receptie
  - **Restaurants**: Restaurant Het Klokhuis, Pannenkoekenhuis Wafelien, CaraHoedje Pizza, CaraHoedje Snack
  - **Animatie**: gericht op 0-10 jaar, sport & spel, theater/shows, Bongerd-app
  - **Binnenspeeltuin (Holle Bolle Boom)**: klimtoestellen, glijbanen, ballenbak, baby/peuterhoek, arcade
  - **Parkshop/Supermarkt**: versgebakken broodjes, koffie to-go, streekproducten
  - **Overig**: speeleiland, speelstrand, visvijver, speelkasteel, tienerlounge
- All page content, headings, and descriptions are in Dutch
- No English template blog post or travel content is present
- No irrelevant pagination is displayed

## Related Requirements

- [FR-060](../04-het-park.md) — Hero section and breadcrumb
- [FR-061](../04-het-park.md) — Real park activity content
- [FR-062](../04-het-park.md) — Remove template pagination

## Status

- [x] Implemented — 2026-04-08
