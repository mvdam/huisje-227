# Feature Area: Template Cleanup (Sogo Hotel → Vakantie op de Bongerd)

This document captures all remaining Colorlib "Sogo Hotel" template defaults that must be replaced with real content for the Vakantie op de Bongerd website.

## User Stories

| ID | User Story | Source |
|----|-----------|--------|
| US-080 | As a visitor, I want all pages to be in Dutch with real property information, so that the site feels professional and trustworthy | All React routes |
| US-081 | As a property owner, I want all placeholder content removed, so that the site represents my actual holiday property | All React routes |

## Functional Requirements — Page Titles & Branding

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-001 | All page `<title>` elements shall use "Vakantie op de Bongerd" with a page-specific variant | [RouteMetadata.tsx](../src/components/RouteMetadata.tsx) |
| FR-TC-002 | The site logo shall display "Vakantie op de Bongerd" instead of "Sogo Hotel" | [Navigation.tsx](../src/components/Navigation.tsx) |
| FR-TC-003 | SEO meta tags (`description`, `keywords`, `author`) shall be populated with real values on all pages | [Home.tsx](../src/pages/Home.tsx), and all other pages |

## Functional Requirements — Navigation Localization

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-010 | All sub-page navigation menus shall use Dutch labels matching the homepage: Home, Het huisje, Aankomst & Vertrek, Tarieven & Voorwaarden, Het Park, Contact, Reserveren | [HetHuisje.tsx](../src/pages/HetHuisje.tsx), [Reserveren.tsx](../src/pages/Reserveren.tsx), [Contact.tsx](../src/pages/Contact.tsx), [HetPark.tsx](../src/pages/HetPark.tsx), [AankomstVertrek.tsx](../src/pages/AankomstVertrek.tsx) |

## Functional Requirements — Content Localization (Per Page)

### Het huisje (`/het-huisje`)

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-020 | The hero heading shall read "Het huisje" instead of "Rooms", with breadcrumb "Home > Het huisje" | [HetHuisje.tsx](../src/pages/HetHuisje.tsx) |
| FR-TC-021 | The check-availability form labels shall be in Dutch (Aankomst, Vertrek, Volwassenen, Kinderen, Bekijk beschikbaarheid) | [HetHuisje.tsx](../src/pages/HetHuisje.tsx) |
| FR-TC-022 | Room cards shall show real property content instead of "Single Room $90/night", "Family Room $120/night", "Presidential Room $250/night" | [HetHuisje.tsx](../src/pages/HetHuisje.tsx) |
| FR-TC-023 | The "Great Offers" section shall be replaced with real property content or removed | [HetHuisje.tsx](../src/pages/HetHuisje.tsx) |

### Het park (`/het-park`)

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-030 | The hero heading shall read "Het Park" instead of "Events", with breadcrumb "Home > Het Park" | [HetPark.tsx](../src/pages/HetPark.tsx) |
| FR-TC-031 | All blog post cards shall be replaced with real park activity content (waterpark, speeltuin, pumptrack, restaurants, etc.) | [HetPark.tsx](../src/pages/HetPark.tsx) |
| FR-TC-032 | The pagination section shall be removed (not applicable for static park info) | [HetPark.tsx](../src/pages/HetPark.tsx) |

### Aankomst & Vertrek en Tarieven & Voorwaarden

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-040 | The hero heading shall read "Aankomst & Vertrek" (or relevant Dutch heading) instead of "About Us" | [AankomstVertrek.tsx](../src/pages/AankomstVertrek.tsx) |
| FR-TC-041 | The "Welcome!" section shall be replaced with actual arrival/departure information | [AankomstVertrek.tsx](../src/pages/AankomstVertrek.tsx) |
| FR-TC-042 | The "Leadership" section (Will Peters, Jane Williams, Jeffrey Neddery with flip cards) shall be removed entirely | [AankomstVertrek.tsx](../src/pages/AankomstVertrek.tsx) |
| FR-TC-043 | The "Photos" section shall show property-relevant content or be removed if redundant with homepage gallery | [AankomstVertrek.tsx](../src/pages/AankomstVertrek.tsx) |
| FR-TC-044 | Vimeo video link shall be replaced with actual property video or removed | [AankomstVertrek.tsx](../src/pages/AankomstVertrek.tsx) |

### Contact (`/contact`)

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-050 | All form labels shall be in Dutch: Naam, Telefoon, E-mail, Bericht | [Contact.tsx](../src/pages/Contact.tsx) |
| FR-TC-051 | Submit button shall read "Verstuur bericht" instead of "Send Message" | [Contact.tsx](../src/pages/Contact.tsx) |
| FR-TC-052 | Contact info shall show real address (Bongerdlaan 3, 1747 CA Tuitjenhorn), real phone, and real email | [Contact.tsx](../src/pages/Contact.tsx) |

### Reserveren (`/reserveren`)

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-060 | The hero heading shall read "Reserveren" instead of "Reservation Form" | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-TC-061 | All form labels shall be in Dutch: Naam, Telefoon, E-mail, Aankomst, Vertrek, Volwassenen, Kinderen, Opmerkingen | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-TC-062 | Submit button shall read "Reserveer nu" instead of "Reserve Now" | [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-TC-063 | Contact info shall show real property details | [Reserveren.tsx](../src/pages/Reserveren.tsx) |

### All sub-pages — Shared sections

| ID | Requirement | Source |
|----|------------|--------|
| FR-TC-070 | All testimonial sections on sub-pages shall contain real Dutch reviews (remove lorem ipsum "People Says" sections) | [Contact.tsx](../src/pages/Contact.tsx), [Reserveren.tsx](../src/pages/Reserveren.tsx) |
| FR-TC-071 | All CTA sections shall read "Wil je ook van ons huisje gebruik maken?" / "Reserveer nu!" instead of "A Best Place To Stay. Reserve Now!" | [Contact.tsx](../src/pages/Contact.tsx), [Reserveren.tsx](../src/pages/Reserveren.tsx), [HetHuisje.tsx](../src/pages/HetHuisje.tsx), [HetPark.tsx](../src/pages/HetPark.tsx) |
| FR-TC-072 | All footer sections shall use the real property address, phone, email, and Dutch link labels | All sub-pages |
| FR-TC-073 | All `alt` attributes with "Free website template" or "Image placeholder" text shall be replaced with descriptive Dutch alt text | Multiple files |

## Summary of Template Placeholder Content

| Item | Current (Template) | Required (Real) |
|------|-------------------|-----------------|
| Page title | "Sogo Hotel by Colorlib.com" | "[Page] | Vakantie op de Bongerd" |
| Logo text | "Sogo Hotel" | "Vakantie op de Bongerd" |
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
