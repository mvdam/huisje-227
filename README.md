# Vakantie op de Bongerd

Website voor vakantiehuis 227 op vakantiepark Capfun De Bongerd.

Publieke website: [www.vakantieopdebongerd.nl](https://www.vakantieopdebongerd.nl)

Vibe coded using Github Copilot Agents:

- Project Manager with subagents:
  - Requirement Engineer
  - React Engineer
  - Secure Code Reviewer
  - QA Engineer

De React-app gebruikt Vite en Vitest, wordt met GitHub Actions gebouwd en via GitHub Pages gepubliceerd.

## Reserveringen bijwerken

Beheer beschikbaarheid in `website-content/reservations.json`. Onder `years` staat per jaar een seizoen en een lijst gereserveerde periodes, bijvoorbeeld:

```json
{
  "years": {
    "2026": {
      "seasonStart": "2026-04-01",
      "seasonEnd": "2026-10-01",
      "reservedPeriods": [
        { "start": "2026-07-01", "end": "2026-07-08" }
      ]
    }
  }
}
```

Dit is een voorbeeld van de structuur; behoud de bevestigde datums in het bestand. Gebruik datums in `YYYY-MM-DD`-notatie. De einddatum is exclusief: vertrek op die dag maakt die dag beschikbaar voor een volgende aankomst. Voeg een nieuw jaar pas toe wanneer het seizoen en de reserveringen bekend zijn; een lege lijst betekent dat er in dat seizoen geen reserveringen zijn. Een ontbrekend jaar betekent dat beschikbaarheid onbekend is.

Het jaaroverzicht en de controle van aankomst en vertrek gebruiken hetzelfde JSON-bestand. De JSON wordt bij het bouwen ingelezen. Publiceer wijzigingen via de normale GitHub Actions-build en GitHub Pages-deployment; alleen het bronbestand aanpassen verandert de reeds gepubliceerde website nog niet. `website-content/reservations.md` blijft ruimte voor redactionele notities en wordt niet als beschikbaarheidsbron gebruikt.

## Huurprijs bijwerken

Stel de prijs in via `website-content/pricing.json`: `weeklyRate` is de volledige weekprijs (nu €1400), `offPeakMultiplier` is het aandeel buiten de zomervakantie (nu 0.75, dus €1050 per week), en `currency` is `EUR`. De tarievenpagina en het reserveringsformulier gebruiken deze centrale bron.

Onder `summerHolidays` staat per jaar de gecombineerde Nederlandse zomervakantie: van de eerste vakantiedag in Noord, Midden of Zuid tot en met de laatste vakantiedag van deze regio’s. `start` is inclusief; `end` is exclusief en dus de dag na de laatste vakantiedag. Voor 2027 loopt het volledige tarief van 10 juli tot en met 5 september (`end`: `2027-09-06`). De datums voor 2026–2030 zijn gebaseerd op [de officiële schoolvakantieregeling, artikel 6](https://zoek.officielebekendmakingen.nl/stcrt-2024-19237.html) en [Rijksoverheid 2027](https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/zomervakantie/zomervakantie-2027).

De huurprijs wordt per kalendernacht berekend: weekprijs gedeeld door zeven, met het zomertarief of 75%-tarief van die nacht. Bij een verblijf over een tariefgrens worden beide tarieven gecombineerd; het totaal wordt afgerond op centen. Borg en optionele eindschoonmaak vallen buiten de huurprijs. Voeg voor een nieuw jaar ook de officiële zomervakantiedatums toe; zonder deze datums toont het formulier geen totaal en vraagt het om contact. Wijzigingen worden zichtbaar na bouwen en publiceren.
