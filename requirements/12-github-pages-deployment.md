# Feature Area: GitHub Pages Deployment

De React-applicatie moet automatisch worden gebouwd en gepubliceerd via GitHub Pages. De bestaande workflow in `.github/workflows/static.yml` wordt hiervoor gebruikt; uitsluitend de actuele React-productiebuild is een deploymentbron.

## User Stories

| ID | User Story | Source |
| --- | --- | --- |
| US-099 | Als eigenaar wil ik dat de React-app automatisch via GitHub Actions naar GitHub Pages wordt gepubliceerd, zodat de publieke website altijd uit de actuele productiebuild bestaat | [static.yml](../.github/workflows/static.yml) |

## Functional Requirements — Build

| ID | Requirement | Source |
| --- | --- | --- |
| FR-D-001 | De bestaande GitHub Pages-workflow in `.github/workflows/static.yml` moet worden aangepast en behouden als deploymentworkflow | [static.yml](../.github/workflows/static.yml) |
| FR-D-002 | De workflow moet bij iedere push naar `main` en via handmatige `workflow_dispatch` kunnen worden gestart | [static.yml](../.github/workflows/static.yml) |
| FR-D-003 | De workflow moet Node.js 24 configureren en de vastgelegde npm-dependencies reproduceerbaar installeren met `npm ci` | [package.json](../package.json), [package-lock.json](../package-lock.json) |
| FR-D-004 | De workflow moet de Vite-productiebuild genereren met `npm run build` | [package.json](../package.json), [vite.config.ts](../vite.config.ts) |
| FR-D-005 | Een mislukte dependency-installatie of productiebuild moet de deployment stoppen | [static.yml](../.github/workflows/static.yml) |

## Functional Requirements — Deployment

| ID | Requirement | Source |
| --- | --- | --- |
| FR-D-006 | Alleen de gegenereerde React-buildmap `dist/` mag als GitHub Pages-artifact worden geüpload; de broncode en volledige repository mogen niet worden gepubliceerd | [static.yml](../.github/workflows/static.yml) |
| FR-D-007 | De workflow moet het Pages-artifact met de officiële GitHub Pages Actions publiceren naar de `github-pages` environment | [static.yml](../.github/workflows/static.yml) |
| FR-D-008 | De gebouwde applicatie moet op `https://www.vakantieopdebongerd.nl` laden met werkende assets en client-side routes | [CNAME](../public/CNAME), [App.tsx](../src/App.tsx) |
| FR-D-009 | De workflow moet uitsluitend de minimaal benodigde tokenrechten gebruiken: `contents: read`, `pages: write` en `id-token: write` | [static.yml](../.github/workflows/static.yml) |

## Status

- [x] Geïmplementeerd en lokaal geverifieerd — 2026-09-02

## Verificatie

- De bestaande workflow bouwt met Node.js 24, `npm ci` en `npm run build`.
- `VITE_BASE_PATH` wordt gevuld vanuit de door GitHub Pages bepaalde `base_path`.
- Alleen `dist/` wordt met `actions/upload-pages-artifact@v4` aangeboden.
- `dist/404.html` ondersteunt directe navigatie naar client-side routes.
- De workflow-YAML is lokaal geparset en de productiebuild voor het eigen domein is succesvol gegenereerd.
- De daadwerkelijke Pages-publicatie wordt na push door GitHub Actions uitgevoerd en is lokaal niet te verifiëren.
