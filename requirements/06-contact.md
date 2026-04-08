# Feature Area: Contact

## User Stories

| ID     | User Story                                                                                                            | Source                                         |
| ------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| US-050 | As a visitor, I want to send a message to the property owner, so that I can ask questions or make inquiries           | [contact.html](../html/contact.html#L89-L127)  |
| US-051 | As a visitor, I want to see the property's contact details (address, phone, email), so that I can reach them directly | [contact.html](../html/contact.html#L129-L135) |

## Functional Requirements

| ID     | Requirement                                                                                                                                                                                                 | Source                                                                                                |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| FR-080 | The page shall display a hero section with heading "Contact" and breadcrumb trail (Home > Contact)                                                                                                          | [contact.html](../html/contact.html#L63-L75)                                                          |
| FR-081 | The page shall display a contact form with fields: Naam (Name), Telefoon (Phone), E-mail, and Bericht (Message)                                                                                             | [contact.html](../html/contact.html#L92-L121)                                                         |
| FR-082 | The contact form shall submit to a real backend endpoint (currently `action="#"`)                                                                                                                           | [contact.html](../html/contact.html#L92)                                                              |
| FR-083 | The form submit button shall be labeled in Dutch ("Verstuur bericht")                                                                                                                                       | [contact.html](../html/contact.html#L120)                                                             |
| FR-084 | All form labels shall be in Dutch                                                                                                                                                                           | [contact.html](../html/contact.html#L94-L115)                                                         |
| FR-085 | The page shall display real contact information: address (Bongerdlaan 3, 1747 CA Tuitjenhorn), park phone (022-6391481), contact persons Nikki (0653308199) and Martin (0651190382), and real email address | [contact.html](../html/contact.html#L129-L135), [booking-info.md](../website-content/booking-info.md) |

## Observations

- The entire contact page is unmodified from the template:
  - Form labels are in English ("Name", "Phone", "Write Message", "Send Message").
  - Contact info shows template placeholder: "98 West 21th Street, Suite 721 New York NY 10016", "(+1) 234 4567 8910", "info@domain.com".
- The testimonials section on this page is completely unmodified (English heading "People Says", lorem ipsum reviews).
- The CTA section is English: "A Best Place To Stay. Reserve Now!".
