# US-050: Contact Form

**As a** visitor,
**I want to** send a message to the property owner,
**so that** I can ask questions or make inquiries.

## Source

- [Contact.tsx](../../src/pages/Contact.tsx)

## Feature Area

[Contact](../06-contact.md)

## Acceptance Criteria

- A contact form is displayed with fields: Naam, Telefoon, E-mail, Bericht
- All labels are in Dutch
- The submit button reads "Verstuur bericht"
- When a backend is available, the form submits to a functioning endpoint and confirms successful delivery
- Until then, the form clearly states that online sending is unavailable and never claims that a message was sent

## Related Requirements

- [FR-081](../06-contact.md) — Contact form fields
- [FR-082](../06-contact.md) — Form backend submission
- [FR-083](../06-contact.md) — Dutch submit button label
- [FR-084](../06-contact.md) — Dutch form labels

## Status

- [x] Form UI and validation implemented — 2026-07-03
- [x] Honest non-sending prototype message implemented — 2026-09-02
- [ ] Backend delivery deferred by product decision — 2026-09-02
