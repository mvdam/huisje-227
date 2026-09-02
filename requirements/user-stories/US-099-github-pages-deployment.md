---
id: "US-099"
title: "React-app publiceren via GitHub Pages"
status: "implemented"
implements_fr:
  - "FR-D-001"
  - "FR-D-002"
  - "FR-D-003"
  - "FR-D-004"
  - "FR-D-005"
  - "FR-D-006"
  - "FR-D-007"
  - "FR-D-008"
  - "FR-D-009"
focus_track: "quality"
---

# US-099: React-app publiceren via GitHub Pages

**Als** eigenaar,
**wil ik** dat de React-app automatisch door GitHub Actions wordt gebouwd en naar GitHub Pages wordt gepubliceerd,
**zodat** de publieke website altijd de actuele, reproduceerbare productiebuild toont.

## Acceptatiecriteria

- **AC-1:** De bestaande workflow `.github/workflows/static.yml` is aangepast; er wordt geen afzonderlijke tweede deploymentworkflow toegevoegd.
- **AC-2:** De workflow start bij een push naar `main` en kan handmatig worden gestart met `workflow_dispatch`.
- **AC-3:** De workflow configureert Node.js 24 en installeert dependencies met `npm ci`.
- **AC-4:** De workflow voert `npm run build` succesvol uit voordat een artifact wordt geüpload.
- **AC-5:** Alleen de gegenereerde map `build/` wordt als Pages-artifact geüpload; de broncode en repository-root worden niet gepubliceerd.
- **AC-6:** De officiële GitHub Pages Actions publiceren het artifact naar de `github-pages` environment.
- **AC-7:** Bij een fout tijdens installatie of build wordt geen nieuwe versie gepubliceerd.
- **AC-8:** De gepubliceerde project-URL laadt de React-app met werkende JavaScript-, CSS-, media- en navigatieroutes.
- **AC-9:** De workflow behoudt uitsluitend de benodigde rechten: `contents: read`, `pages: write` en `id-token: write`.

## Gerelateerde requirements

- [FR-D-001 t/m FR-D-009](../12-github-pages-deployment.md)

## Wijzigingsniveau

- 🟡 Standaard — de wijziging past de bestaande CI/CD-pipeline aan en introduceert nieuw, extern waarneembaar deploymentgedrag zonder applicatiearchitectuur te wijzigen.

## Status

- [x] Geïmplementeerd en lokaal geverifieerd — 2026-09-02

## Verificatie

- `npm test -- --watchAll=false` — 2 suites en 12 tests geslaagd.
- `PUBLIC_URL=/huisje-227 npm run build` — productiebuild succesvol.
- De gegenereerde asset-URL's gebruiken `/huisje-227/` als basispad.
- De workflow-YAML is succesvol lokaal geparset.
- De live deployment blijft afhankelijk van uitvoering van de workflow op GitHub na een push naar `main`.
