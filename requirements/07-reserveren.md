# Feature Area: Reserveren (Reservation)

## User Stories

| ID | User Story | Source |
|----|-----------|--------|
| US-060 | As a visitor, I want to fill out a reservation form with my details and preferred dates, so that I can book the holiday house | [reservation.html](../html/reservation.html#L89-L168) |

## Functional Requirements

| ID | Requirement | Source |
|----|------------|--------|
| FR-090 | The page shall display a hero section with heading "Reserveren" and breadcrumb trail (Home > Reserveren) | [reservation.html](../html/reservation.html#L71-L79) |
| FR-091 | The page shall display a reservation form with fields: Naam (Name), Telefoon (Phone), E-mail, Aankomst (Check In), Vertrek (Check Out), Volwassenen (Adults), Kinderen (Children), and Opmerkingen (Notes) | [reservation.html](../html/reservation.html#L92-L161) |
| FR-092 | All form labels shall be in Dutch | [reservation.html](../html/reservation.html#L94-L157) |
| FR-093 | The date fields shall use the datepicker with format `d MM, yyyy` and autoclose | [main.js](../html/js/main.js#L163-L166) |
| FR-094 | The adults and children selects shall have actual `value` attributes (not empty strings) | [reservation.html](../html/reservation.html#L127-L147) |
| FR-095 | The form shall submit to a real backend endpoint or email service (currently `action="#"`) | [reservation.html](../html/reservation.html#L92) |
| FR-096 | The submit button shall be labeled in Dutch ("Reserveer nu") | [reservation.html](../html/reservation.html#L160) |
| FR-097 | The page shall display the real property contact information alongside the form | [reservation.html](../html/reservation.html#L165-L171) |
| FR-098 | The page shall display an availability overview showing which weeks are already booked and which are available | [reservations.md](../website-content/reservations.md) |
| FR-099 | When the user selects a date range, the system shall indicate whether the selected dates are available or conflict with existing reservations | [reservations.md](../website-content/reservations.md) |

## Observations

- The reservation page is unmodified from the template:
  - All labels are in English ("Name", "Phone", "Date Check In", "Date Check Out", "Adults", "Children", "Notes").
  - Submit button says "Reserve Now".
  - Contact info shows template placeholder address in New York: "98 West 21th Street, Suite 721 New York NY 10016".
  - Testimonials section is lorem ipsum in English.
  - CTA says "A Best Place To Stay. Reserve Now!"
