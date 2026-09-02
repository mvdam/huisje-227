# Implementatie-audit — 2 september 2026

## Scope

Deze audit controleert alle onderdelen die in de user stories als geïmplementeerd zijn gemarkeerd. Uitgestelde backendintegraties vallen buiten de conformiteitsclaim. Omdat één geverifieerde recensie beschikbaar is, is conform de requirement een statische recensie getoond; een carrousel wordt pas van toepassing zodra meerdere echte recensies beschikbaar zijn.

## Resultaat

| Onderdeel | User stories | Resultaat | Bewijs |
| --- | --- | --- | --- |
| Navigatie | US-001–US-003 | Voldoet | `Navigation.tsx`, actieve-route- en menu-interactietest |
| Homepage-inhoud | US-010–US-019 | Voldoet | `Home.tsx`, homepage-regressietest, parallax en scroll-reveal met reduced-motion, toegankelijke modals en 33 gecontroleerde galerijbeelden |
| Het huisje | US-020 | Voldoet | `HetHuisje.tsx`, inhoudstest tegen `website-content/accomodation-facilities.md` |
| Het park | US-030 | Voldoet | `HetPark.tsx`, voorzieningen- en prijstest tegen `website-content/park-facilities.md` |
| Aankomst en tarieven | US-040–US-041 | Voldoet | pagina- en inhoudstests; publieke toegangscodes verwijderd en veilig naar de boekingsbevestiging verwezen |
| Contact | US-050–US-051, behalve backendbezorging | Voldoet | formulier-, prototypebericht-, contactgegevens- en kaarttest |
| Reserveren | US-060, behalve backendbezorging | Voldoet | veld-, conflict-, onbekend-jaar- en prototypeberichttest tegen centrale reserveringsdata |
| Footer | US-070–US-072, behalve nieuwsbriefintegratie | Voldoet | contact-, route-, social-link- en prototypeberichttest |
| Nederlandse productie-inhoud | US-080–US-081 | Voldoet | broncontrole en test van routegebonden titel-, beschrijving- en auteurmetadata |
| Buitenleven-design | US-090–US-094 | Voldoet | tokens, typografie, radius-, shadow- en responsive CSS-controle |
| Toegankelijkheid | US-095–US-097 | Voldoet | contrastberekeningen, DOM-tests, modal focus-trap/focus-return, achtergrondisolatie en responsive broncontrole |

## Herstelde afwijkingen

- Normale secundaire tekst, tekstlinks, CTA-achtergronden en betekenisvolle formulierranden voldoen nu aan de toepasselijke WCAG AA-contrastdrempels.
- Oude Poppins-overrides zijn verwijderd; de implementatie gebruikt consequent DM Serif Display en Inter.
- De fotogalerij gebruikt op de vastgelegde grenswaarden één, twee en drie zichtbare items.
- Alle 33 galerijbeelden hebben inhoudelijk beschrijvende Nederlandse alternatieve tekst.
- Sleutel-, slagboom- en wifi-informatie bevat geen zichtbare placeholdercodes of publiek gepubliceerde toegangsgegevens.
- Formuliervelden gebruiken de vereiste zichtbare rand en focusweergave.
- Mobiele footerlinks, primaire acties en overige knoppen hebben een minimale bedieningshoogte van 44px.
- De vaste navigatie heeft een contrastrijke achtergrond en past op een viewport van 320px.
- Parallax en scroll-reveal zijn in React/CSS geïmplementeerd en worden uitgeschakeld bij `prefers-reduced-motion`.
- Video- en afbeeldingsmodals isoleren de achtergrond, blokkeren scroll, houden focus vast en geven focus terug bij sluiten.
- Contact-, reserverings- en nieuwsbriefformulieren communiceren eerlijk dat zonder backend niets wordt verstuurd.
- Reserveringsbeschikbaarheid komt uit één centrale dataset; niet-gepubliceerde jaren worden nooit als vrij aangemerkt.
- Elke route beheert een specifieke Nederlandse titel en beschrijving, met auteurmetadata.

## Uitgesloten openstaande criteria

- Backendbezorging voor contact, reserveren en nieuwsbrief.
- Een carrousel met meerdere recensies is pas van toepassing nadat extra echte recensies beschikbaar zijn.

## Uitvoering

```text
npm test -- --watchAll=false
Test Suites: 2 passed, 2 total
Tests:       12 passed, 12 total
```

```text
npm run build
Compiled successfully.
```

De in-app browser was in deze sessie niet beschikbaar. Responsive en toetsenbordconformiteit zijn daarom gecontroleerd via CSS/DOM-inspectie, componenttests en een succesvolle productiebuild; een aanvullende visuele browserronde blijft aanbevolen bij de volgende releasecontrole.
