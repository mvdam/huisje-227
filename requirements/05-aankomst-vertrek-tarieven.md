# Feature Area: Aankomst & Vertrek / Tarieven & Voorwaarden (About Page)

## User Stories

| ID     | User Story                                                                                                                                    | Source                                                                       |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| US-040 | As a visitor, I want to see arrival and departure information, so that I know the check-in/check-out procedures                               | [Home.tsx](../src/pages/Home.tsx)                                         |
| US-041 | As a visitor, I want to see rates, deposit information, and booking conditions, so that I can understand the costs and terms before reserving | [Home.tsx](../src/pages/Home.tsx), [Home.tsx](../src/pages/Home.tsx) |

## Functional Requirements

| ID     | Requirement                                                                                                                                                                                                                                          | Source                                                            | Status |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------ |
| FR-070 | The system shall provide a page with arrival and departure information: check-in maandag na 12:00, check-out maandag voor 10:00, sleutelkluisje procedure, parkeercode voor slagboom, receptie telefoonnummer als fallback                           | [booking-info.md](../website-content/booking-info.md)             | ✅     |
| FR-071 | The system shall provide a page (or section) with rate/tariff information: €1300 per week, and deposit: €300 borg teruggestort binnen 5 dagen na vertrek                                                                                             | [booking-info.md](../website-content/booking-info.md)             | ✅     |
| FR-072 | The system shall display booking conditions: 20% aanbetaling bij boeking, restbedrag 6 weken voor aankomst, eindschoonmaak door huurder of €50 extra, gegevens reizigers vereist (naam, geboortedatum, zwemdiploma), max 6 weken verhuur per seizoen | [booking-info.md](../website-content/booking-info.md)             | ✅     |
| FR-073 | Each section shall have a hero with breadcrumb trail (Home > Aankomst & Vertrek, or Home > Tarieven & Voorwaarden)                                                                                                                                   | Based on site pattern in [AankomstVertrek.tsx](../src/pages/AankomstVertrek.tsx) | ✅     |
| FR-074 | All page content, headings, breadcrumbs, labels, and descriptions shall be in Dutch                                                                                                                                                                  | [AankomstVertrek.tsx](../src/pages/AankomstVertrek.tsx)                                  | ✅     |
| FR-075 | The page shall state linen policy: bedlinnen en keukenlinnen zelf meenemen, dekbedden en kussens zijn aanwezig                                                                                                                                       | [booking-info.md](../website-content/booking-info.md)             | ✅     |
| FR-076 | The page shall display the WiFi network name and explain where booked guests can securely find the password; access credentials shall not be published on the public website | [booking-info.md](../website-content/booking-info.md) | ✅ |
| FR-077 | The page shall state swimming band policy: bandjes voor zwembad en binnenspeeltuin zijn inbegrepen, verloren bandje kost €20                                                                                                                         | [booking-info.md](../website-content/booking-info.md)             | ✅     |

## Implementation Notes

- De informatie is geïmplementeerd in twee afzonderlijke React-routes: `/aankomst-vertrek` en `/tarieven`.
- De actuele inhoud is afkomstig uit `website-content/arrival-departure.md` en `website-content/rates.md`.
