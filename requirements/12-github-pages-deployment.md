# Feature Area: GitHub Pages Deployment

De React-applicatie moet automatisch worden gebouwd en gepubliceerd via GitHub Pages. De bestaande workflow in `.github/workflows/static.yml` wordt hiervoor aangepast; de verouderde statische HTML-map is geen deploymentbron meer.

## User Stories

| ID | User Story | Source |
| --- | --- | --- |
| US-099 | Als eigenaar wil ik dat de React-app automatisch via GitHub Actions naar GitHub Pages wordt gepubliceerd, zodat de publieke website altijd uit de actuele productiebuild bestaat | [static.yml](../.github/workflows/static.yml) |

## Functional Requirements — Build

| ID | Requirement | Source |
| --- | --- | --- |
| FR-D-001 | De bestaande GitHub Pages-workflow in `.github/workflows/static.yml` moet worden aangepast en behouden als deploymentworkflow | [static.yml](../.github/workflows/static.yml) |
| FR-D-002 | De workflow moet bij iedere push naar `main` en via handmatige `workflow_dispatch` kunnen worden gestart | [static.yml](../.github/workflows/static.yml) |
| FR-D-003 | De workflow moet een ondersteunde Node.js-versie configureren en de vastgelegde npm-dependencies reproduceerbaar installeren met `npm ci` | [package.json](../package.json), [package-lock.json](../package-lock.json) |
| FR-D-004 | De workflow moet de React-productiebuild genereren met `npm run build` | [package.json](../package.json) |
| FR-D-005 | Een mislukte dependency-installatie of productiebuild moet de deployment stoppen | [static.yml](../.github/workflows/static.yml) |

## Functional Requirements — Deployment

| ID | Requirement | Source |
| --- | --- | --- |
| FR-D-006 | Alleen de gegenereerde React-buildmap `build/` mag als GitHub Pages-artifact worden geüpload; `html/` en de volledige repository mogen niet worden gepubliceerd | [static.yml](../.github/workflows/static.yml) |
| FR-D-007 | De workflow moet het Pages-artifact met de officiële GitHub Pages Actions publiceren naar de `github-pages` environment | [static.yml](../.github/workflows/static.yml) |
| FR-D-008 | De gebouwde applicatie moet vanaf de GitHub Pages-project-URL laden met werkende assets en client-side routes | [App.tsx](../src/App.tsx), [package.json](../package.json) |
| FR-D-009 | De workflow moet uitsluitend de minimaal benodigde tokenrechten gebruiken: `contents: read`, `pages: write` en `id-token: write` | [static.yml](../.github/workflows/static.yml) |

## Status

- [ ] Nog te implementeren

