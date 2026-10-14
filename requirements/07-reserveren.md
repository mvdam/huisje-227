# Feature Area: Reserveren (Reservation)

## User Stories

| ID | User Story | Source |
|----|-----------|--------|
| US-102 | As an owner, I want to maintain reservations per year in one JSON file, so that availability can be updated without editing React code | [US-102](user-stories/US-102-central-reservation-data.md) |
| US-103 | As a visitor, I want to select a configured year and check availability from the same data, so that the overview and date feedback agree | [US-103](user-stories/US-103-yearly-availability.md) |
| US-104 | As an owner, I want central seasonal pricing so visitors see the total for their selected stay | [US-104](user-stories/US-104-central-pricing.md) |
| US-060 | As a visitor, I want to fill out a reservation form with my details and preferred dates, so that I can book the holiday house | [Reserveren.tsx](../src/pages/Reserveren.tsx) |

## Functional Requirements

| ID | Requirement | Source |
|----|------------|--------|
| FR-090 | The page shall display a hero section with heading "Reserveren" and breadcrumb trail (Home > Reserveren) | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-091 | The page shall display a reservation form with fields: Naam (Name), Telefoon (Phone), E-mail, Aankomst (Check In), Vertrek (Check Out), Volwassenen (Adults), Kinderen (Children), Baby, and Opmerkingen (Notes) | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-092 | All form labels shall be in Dutch | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-093 | The date fields shall use accessible native or React date controls, prevent departure before arrival and use ISO dates internally for reliable availability checks | Modern replacement for [Home.tsx](../src/pages/Home.tsx) |
| FR-094 | The adults and children selects shall have actual `value` attributes (not empty strings) | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-095 | The form shall submit to a real backend endpoint or email service. Until a backend is introduced, the UI shall clearly identify the form as a non-sending prototype and shall not claim that a request was sent | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-096 | The submit button shall be labeled in Dutch ("Reserveer nu") | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-097 | The page shall display the real property contact information alongside the form | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-098 | The page shall display an availability overview for the selected configured year, showing remaining booked and available periods from the central JSON source; expired periods and years without remaining periods shall be hidden | [Central reservation data](15-central-reservation-data.md) |
| FR-099 | When the user selects a date range, the system shall use the central JSON source to indicate availability, conflicts, or unavailable season data | [Central reservation data](15-central-reservation-data.md) |

## Arrival and Departure Policy

The reservation page shall state that arrival is on Saturday after 12:00 and departure is on Saturday before 10:00, consistent with [FR-070](05-aankomst-vertrek-tarieven.md). This is displayed policy; date controls retain their existing validation behavior.

## Reservation and Pricing Behavior

- [FR-RES-009](15-central-reservation-data.md): available periods are visibly clickable, keyboard-accessible buttons that fill both arrival and departure dates and indicate selection. Booked periods remain visible but disabled.
- [FR-RES-010](15-central-reservation-data.md): periods ending on or before today in local time are hidden. Years with no remaining periods are omitted; if none remain, show an empty message instead of a selector or calendar.
- [FR-PRICE-001–006](16-central-pricing.md): central seasonal pricing supplies the selected stay’s total. Before a valid selection there is no price summary; the reservation page does not explain seasonal rules or percentages. Date changes recalculate the total, with deposit and optional cleaning identified separately.

## Current Implementation

The reservation page uses Dutch labels, real property contact details, central JSON availability and seasonal pricing. The form remains a non-sending prototype, as described below.

## Deferred Requirements

- **FR-095 backend submission** — deferred by product decision on 2 September 2026. The reservation UI, validation and availability check remain in scope; production delivery and a genuine sent confirmation do not.
