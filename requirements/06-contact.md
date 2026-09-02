# Feature Area: Contact

## User Stories

| ID     | User Story                                                                                                            | Source                                         |
| ------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| US-050 | As a visitor, I want to send a message to the property owner, so that I can ask questions or make inquiries           | [Contact.tsx](../src/pages/Contact.tsx)  |
| US-051 | As a visitor, I want to see the property's contact details (address, phone, email), so that I can reach them directly | [Contact.tsx](../src/pages/Contact.tsx) |

## Functional Requirements

| ID     | Requirement                                                                                                                                                                                                 | Source                                                                                                |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| FR-080 | The page shall display a hero section with heading "Contact" and breadcrumb trail (Home > Contact)                                                                                                          | [Contact.tsx](../src/pages/Contact.tsx)                                                          |
| FR-081 | The page shall display a contact form with fields: Naam (Name), Telefoon (Phone), E-mail, and Bericht (Message)                                                                                             | [Contact.tsx](../src/pages/Contact.tsx)                                                         |
| FR-082 | The contact form shall submit to a real backend endpoint. Until a backend is introduced, the UI shall clearly state that online sending is unavailable and shall not claim that a message was sent | [Contact.tsx](../src/pages/Contact.tsx) |
| FR-083 | The form submit button shall be labeled in Dutch ("Verstuur bericht")                                                                                                                                       | [Contact.tsx](../src/pages/Contact.tsx)                                                             |
| FR-084 | All form labels shall be in Dutch                                                                                                                                                                           | [Contact.tsx](../src/pages/Contact.tsx)                                                         |
| FR-085 | The page shall display real contact information: address (Bongerdlaan 3, 1747 CA Tuitjenhorn), park phone (022-6391481), contact persons Nikki (0653308199) and Martin (0651190382), and real email address | [Contact.tsx](../src/pages/Contact.tsx), [booking-info.md](../website-content/booking-info.md) |
| FR-086 | The page shall display an OpenStreetMap embed showing the location of Capfun De Bongerd (coordinates: 52.7363, 4.7740)                                                                                      | New requirement                                                                                       |

## Observations

- The entire contact page is unmodified from the template:
  - Form labels are in English ("Name", "Phone", "Write Message", "Send Message").
  - Contact info shows template placeholder: "98 West 21th Street, Suite 721 New York NY 10016", "(+1) 234 4567 8910", "info@domain.com".
- The testimonials section on this page is completely unmodified (English heading "People Says", lorem ipsum reviews).
- The CTA section is English: "A Best Place To Stay. Reserve Now!".

## Deferred Requirements

- **FR-082 backend submission** — deferred by product decision on 2 September 2026. The local form UI and validation remain in scope; production delivery and a genuine sent confirmation do not.
