# Feature Area: Template Cleanup (Sogo Hotel → Capfun De Bongerd 227)

This document captures all remaining Colorlib "Sogo Hotel" template defaults that must be replaced with real content for the Capfun De Bongerd 227 property website.

## User Stories

| ID | User Story | Source |
|----|-----------|--------|
| US-080 | As a visitor, I want all pages to be in Dutch with real property information, so that the site feels professional and trustworthy | All HTML files |
| US-081 | As a property owner, I want all placeholder content removed, so that the site represents my actual holiday property | All HTML files |

## Functional Requirements — Page Titles & Branding

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-001 | All page `<title>` elements shall read "Capfun De Bongerd 227" (or page-specific variant) instead of "Sogo Hotel by Colorlib.com" | [rooms.html](../html/rooms.html#L6), [reservation.html](../html/reservation.html#L6), [contact.html](../html/contact.html#L6), [events.html](../html/events.html#L6), [about.html](../html/about.html#L6) |
| FR-TC-002 | All page logos shall display "Capfun De Bongerd 227" instead of "Sogo Hotel" | [rooms.html](../html/rooms.html#L33), [reservation.html](../html/reservation.html#L33), [contact.html](../html/contact.html#L33), [events.html](../html/events.html#L33), [about.html](../html/about.html#L33) |
| FR-TC-003 | SEO meta tags (`description`, `keywords`, `author`) shall be populated with real values on all pages | [index.html](../html/index.html#L14-L16), and all other pages |

## Functional Requirements — Navigation Localization

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-010 | All sub-page navigation menus shall use Dutch labels matching the homepage: Home, Het huisje, Aankomst & Vertrek, Tarieven & Voorwaarden, Het Park, Contact, Reserveren | [rooms.html](../html/rooms.html#L47-L53), [reservation.html](../html/reservation.html#L47-L53), [contact.html](../html/contact.html#L47-L53), [events.html](../html/events.html#L47-L53), [about.html](../html/about.html#L47-L53) |

## Functional Requirements — Content Localization (Per Page)

### rooms.html

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-020 | The hero heading shall read "Het huisje" instead of "Rooms", with breadcrumb "Home > Het huisje" | [rooms.html](../html/rooms.html#L71-L78) |
| FR-TC-021 | The check-availability form labels shall be in Dutch (Aankomst, Vertrek, Volwassenen, Kinderen, Bekijk beschikbaarheid) | [rooms.html](../html/rooms.html#L92-L130) |
| FR-TC-022 | Room cards shall show real property content instead of "Single Room $90/night", "Family Room $120/night", "Presidential Room $250/night" | [rooms.html](../html/rooms.html#L140-L207) |
| FR-TC-023 | The "Great Offers" section shall be replaced with real property content or removed | [rooms.html](../html/rooms.html#L210-L244) |

### events.html (Het Park)

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-030 | The hero heading shall read "Het Park" instead of "Events", with breadcrumb "Home > Het Park" | [events.html](../html/events.html#L71-L78) |
| FR-TC-031 | All blog post cards shall be replaced with real park activity content (waterpark, speeltuin, pumptrack, restaurants, etc.) | [events.html](../html/events.html#L84-L170) |
| FR-TC-032 | The pagination section shall be removed (not applicable for static park info) | [events.html](../html/events.html#L172-L183) |

### about.html (Aankomst & Vertrek / Tarieven & Voorwaarden)

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-040 | The hero heading shall read "Aankomst & Vertrek" (or relevant Dutch heading) instead of "About Us" | [about.html](../html/about.html#L71-L78) |
| FR-TC-041 | The "Welcome!" section shall be replaced with actual arrival/departure information | [about.html](../html/about.html#L89-L103) |
| FR-TC-042 | The "Leadership" section (Will Peters, Jane Williams, Jeffrey Neddery with flip cards) shall be removed entirely | [about.html](../html/about.html#L106-L179) |
| FR-TC-043 | The "Photos" section shall show property-relevant content or be removed if redundant with homepage gallery | [about.html](../html/about.html#L181-L195) |
| FR-TC-044 | Vimeo video link shall be replaced with actual property video or removed | [about.html](../html/about.html#L100) |

### contact.html

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-050 | All form labels shall be in Dutch: Naam, Telefoon, E-mail, Bericht | [contact.html](../html/contact.html#L94-L115) |
| FR-TC-051 | Submit button shall read "Verstuur bericht" instead of "Send Message" | [contact.html](../html/contact.html#L120) |
| FR-TC-052 | Contact info shall show real address (Bongerdlaan 3, 1747 CA Tuitjenhorn), real phone, and real email | [contact.html](../html/contact.html#L129-L135) |

### reservation.html

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-060 | The hero heading shall read "Reserveren" instead of "Reservation Form" | [reservation.html](../html/reservation.html#L71-L78) |
| FR-TC-061 | All form labels shall be in Dutch: Naam, Telefoon, E-mail, Aankomst, Vertrek, Volwassenen, Kinderen, Opmerkingen | [reservation.html](../html/reservation.html#L94-L157) |
| FR-TC-062 | Submit button shall read "Reserveer nu" instead of "Reserve Now" | [reservation.html](../html/reservation.html#L160) |
| FR-TC-063 | Contact info shall show real property details | [reservation.html](../html/reservation.html#L165-L171) |

### All sub-pages — Shared sections

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-070 | All testimonial sections on sub-pages shall contain real Dutch reviews (remove lorem ipsum "People Says" sections) | [contact.html](../html/contact.html#L139-L207), [reservation.html](../html/reservation.html#L176-L244) |
| FR-TC-071 | All CTA sections shall read "Wil je ook van ons huisje gebruik maken?" / "Reserveer nu!" instead of "A Best Place To Stay. Reserve Now!" | [contact.html](../html/contact.html#L214-L224), [reservation.html](../html/reservation.html#L251-L261), [rooms.html](../html/rooms.html#L250-L260), [events.html](../html/events.html#L190-L200) |
| FR-TC-072 | All footer sections shall use the real property address, phone, email, and Dutch link labels | All sub-pages |
| FR-TC-073 | All `alt` attributes with "Free website template" or "Image placeholder" text shall be replaced with descriptive Dutch alt text | Multiple files |

## Summary of Template Placeholder Content

| Item | Current (Template) | Required (Real) |
|------|-------------------|-----------------|
| Page title | "Sogo Hotel by Colorlib.com" | "Capfun De Bongerd 227 - [Page]" |
| Logo text | "Sogo Hotel" | "Capfun De Bongerd 227" |
| Nav labels | English (Rooms, About, Events, etc.) | Dutch (Het huisje, Aankomst & Vertrek, etc.) |
| Address | 98 West 21th Street, New York | Bongerdlaan 3, 1747 CA Tuitjenhorn |
| Phone | (+1) 435 3533 / (+1) 234 4567 8910 | Real Dutch phone number |
| Email | info@domain.com / info@yourdomain.com | Real email address |
| Reviews | Lorem ipsum by "John Doe" / "Jean Smith" | Real guest reviews |
| Room types | Single $90, Family $120, Presidential $250 | Actual property details |
| Events | Travel blog posts from Feb 2018 | Park activities |
| About | Leadership team with flip cards | Arrival/departure & rates info |
| CTA text | "A Best Place To Stay. Reserve Now!" | "Wil je ook van ons huisje gebruik maken?" |
| Alt text | "Free website template", "Image placeholder" | Descriptive Dutch text |
