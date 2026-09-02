---
id: "US-100"
title: "Onderhoudbare Vite-toolchain"
status: "implemented"
implements_fr:
  - "FR-B-001"
  - "FR-B-002"
  - "FR-B-003"
  - "FR-B-004"
  - "FR-B-005"
  - "FR-B-006"
  - "FR-B-007"
focus_track: "quality"
---

# US-100: Onderhoudbare Vite-toolchain

**Als** beheerder,
**wil ik** de React-app met Vite en Vitest ontwikkelen, testen en bouwen,
**zodat** de toolchain actueel, veilig en onderhoudbaar blijft.

## Acceptatiecriteria

- **AC-1:** `react-scripts` en de overige ongebruikte CRA-runtimebestanden zijn verwijderd.
- **AC-2:** `npm start` en `npm run dev` starten Vite; `npm run build` voert TypeScript en de Vite-productiebuild uit.
- **AC-3:** `npm test` voert de bestaande tests uit met Vitest en jsdom.
- **AC-4:** De GitHub Pages-workflow gebruikt Node.js 24 en uploadt uitsluitend `dist/`.
- **AC-5:** Custom-domain- en projectpadbuilds genereren correcte asset-URL's.
- **AC-6:** De bestaande 12 regressietests en productiebuild slagen.
- **AC-7:** `npm audit` rapporteert geen bekende kwetsbaarheden.
- **AC-8:** De website behoudt dezelfde routes, inhoud, styling en toegankelijkheid.

## Wijzigingsniveau

- 🔴 Complex — vervanging van build-, test- en deploymenttoolchain met gewijzigde dependencies en outputstructuur.

## Status

- [x] Geïmplementeerd en geverifieerd — 2026-09-02

