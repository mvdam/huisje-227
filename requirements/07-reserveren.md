# Feature Area: Reserveren (Reservation)

## User Stories

| ID | User Story | Source |
|----|-----------|--------|
| US-060 | As a visitor, I want to fill out a reservation form with my details and preferred dates, so that I can book the holiday house | [Reserveren.tsx](../src/pages/Reserveren.tsx) |

## Functional Requirements

| ID | Requirement | Source |
|----|------------|--------|
| FR-090 | The page shall display a hero section with heading "Reserveren" and breadcrumb trail (Home > Reserveren) | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-091 | The page shall display a reservation form with fields: Naam (Name), Telefoon (Phone), E-mail, Aankomst (Check In), Vertrek (Check Out), Volwassenen (Adults), Kinderen (Children), and Opmerkingen (Notes) | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-092 | All form labels shall be in Dutch | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-093 | The date fields shall use accessible native or React date controls, prevent departure before arrival and use ISO dates internally for reliable availability checks | Modern replacement for [Home.tsx](../src/pages/Home.tsx) |
| FR-094 | The adults and children selects shall have actual `value` attributes (not empty strings) | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-095 | The form shall submit to a real backend endpoint or email service. Until a backend is introduced, the UI shall clearly identify the form as a non-sending prototype and shall not claim that a request was sent | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-096 | The submit button shall be labeled in Dutch ("Reserveer nu") | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-097 | The page shall display the real property contact information alongside the form | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-098 | The page shall display an availability overview showing which weeks are already booked and which are available | [reservations.md](../website-content/reservations.md) |
| FR-099 | When the user selects a date range, the system shall indicate whether the selected dates are available or conflict with existing reservations | [reservations.md](../website-content/reservations.md) |

## Observations

- The reservation page is unmodified from the template:
  - All labels are in English ("Name", "Phone", "Date Check In", "Date Check Out", "Adults", "Children", "Notes").
  - Submit button says "Reserve Now".
  - Contact info shows template placeholder address in New York: "98 West 21th Street, Suite 721 New York NY 10016".
  - Testimonials section is lorem ipsum in English.
  - CTA says "A Best Place To Stay. Reserve Now!"

## Deferred Requirements

- **FR-095 backend submission** — deferred by product decision on 2 September 2026. The reservation UI, validation and availability check remain in scope; production delivery and a genuine sent confirmation do not.
