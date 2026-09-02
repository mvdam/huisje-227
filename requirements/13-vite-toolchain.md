# Feature Area: Vite Toolchain

De onderhouden Vite-toolchain vervangt Create React App voor ontwikkeling, tests en productiebuilds. De migratie mag het zichtbare of functionele gedrag van de website niet veranderen.

## User Stories

| ID | User Story | Source |
| --- | --- | --- |
| US-100 | Als beheerder wil ik een actuele en onderhoudbare frontendtoolchain, zodat dependencies veilig kunnen worden bijgewerkt en de website reproduceerbaar blijft bouwen | [package.json](../package.json) |

## Functional Requirements

| ID | Requirement | Source |
| --- | --- | --- |
| FR-B-001 | Ontwikkeling en productiebuilds moeten Vite gebruiken zonder afhankelijkheid van `react-scripts` | [package.json](../package.json), [vite.config.ts](../vite.config.ts) |
| FR-B-002 | Componenttests moeten met Vitest, jsdom en React Testing Library worden uitgevoerd | [vite.config.ts](../vite.config.ts), [setupTests.ts](../src/setupTests.ts) |
| FR-B-003 | De toolchain moet onder Node.js 24 werken | [static.yml](../.github/workflows/static.yml), [package.json](../package.json) |
| FR-B-004 | De Vite-basepath moet zowel het eigen domein als een eventueel GitHub Pages-projectpad ondersteunen | [vite.config.ts](../vite.config.ts), [publicAsset.ts](../src/utils/publicAsset.ts) |
| FR-B-005 | De productiebuild moet naar `dist/` schrijven en het custom-domainbestand en alle publieke assets bevatten | [vite.config.ts](../vite.config.ts), [CNAME](../public/CNAME) |
| FR-B-006 | De bestaande regressietests en TypeScript-controle moeten slagen zonder functionele of visuele wijzigingen | [package.json](../package.json) |
| FR-B-007 | De directe dependencyboom mag na de migratie geen bekende npm-auditkwetsbaarheden bevatten | [package-lock.json](../package-lock.json) |

## Status

- [x] Geïmplementeerd en geverifieerd — 2026-09-02

