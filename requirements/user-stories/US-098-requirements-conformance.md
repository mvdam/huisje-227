---
id: "US-098"
title: "Requirementsconformiteit"
status: "accepted"
implements_fr: []
focus_track: "quality"
---

# US-098: Requirementsconformiteit

**Als** eigenaar,
**wil ik** dat de actuele implementatie aantoonbaar voldoet aan alle requirements die als geïmplementeerd zijn gemarkeerd,
**zodat** de documentatiestatus betrouwbaar is.

## Acceptatiecriteria

- **AC-1:** Elk afgevinkt criterium is tegen de actuele implementatie in `src/` gecontroleerd.
- **AC-2:** Aantoonbare afwijkingen zijn in de implementatie hersteld.
- **AC-3:** Uitgestelde backendintegraties en expliciet openstaande criteria blijven buiten scope.
- **AC-4:** Nederlandse inhoud blijft gebaseerd op de bronnen in `website-content/`.
- **AC-5:** Toegankelijkheid, responsive gedrag en het Buitenleven-design blijven behouden.
- **AC-6:** Gerichte regressietests dekken de herstelde afwijkingen.
- **AC-7:** De volledige testsuite en productiebuild slagen.
- **AC-8:** Requirementstatussen zijn na verificatie bijgewerkt.
- **AC-9:** Er zijn geen nieuwe dependencies toegevoegd.

## Wijzigingsniveau

- 🔴 Complex — cross-cutting controle van pagina's, toegankelijkheid, inhoud, styling en requirements.

## Status

- [x] Geïmplementeerd en geverifieerd — 2026-09-02

## Verificatie

- [Implementatie-audit](../implementation-audit-2026-09-02.md)
- `npm test -- --watchAll=false` — 2 suites, 9 tests geslaagd
- `npm run build` — succesvol
