# Feature Area: Homepage

## User Stories

| ID     | User Story                                                                                                                                                           | Source                                                                            |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| US-010 | As a visitor, I want to see an inviting hero image with the property name when I land on the homepage, so that I get an immediate impression of the holiday property | [Home.tsx](../src/pages/Home.tsx)                                          |
| US-011 | As a visitor, I want to scroll down smoothly to the main content, so that the page flows naturally                                                                   | [Home.tsx](../src/pages/Home.tsx), [Home.tsx](../src/pages/Home.tsx) |
| US-012 | As a visitor, I want to read a welcome introduction and watch a promotional video, so that I get a feel for the holiday property                                     | [Home.tsx](../src/pages/Home.tsx)                                        |
| US-013 | As a visitor, I want to check availability by entering check-in/check-out dates and guest counts, so that I can see if the property is available                     | [Home.tsx](../src/pages/Home.tsx)                                        |
| US-014 | As a visitor, I want to see highlighted features of the property (garden, living room, kitchen), so that I understand what makes it attractive                       | [Home.tsx](../src/pages/Home.tsx)                                        |
| US-015 | As a visitor, I want to browse photos in a carousel and view them full-size in a lightbox, so that I can get a visual impression                                     | [Home.tsx](../src/pages/Home.tsx)                                        |
| US-016 | As a visitor, I want to browse detailed amenities organized by category (house, park, surroundings), so that I know what facilities are available                    | [Home.tsx](../src/pages/Home.tsx)                                        |
| US-017 | As a visitor, I want to read reviews from previous guests, so that I can assess the quality of the property                                                          | [Home.tsx](../src/pages/Home.tsx)                                        |
| US-018 | As a visitor, I want to see highlighted park activities (swimming, playing, dining), so that I understand the leisure options                                        | [Home.tsx](../src/pages/Home.tsx)                                        |
| US-019 | As a visitor, I want a prominent call-to-action to make a reservation, so that I can easily proceed to book                                                          | [Home.tsx](../src/pages/Home.tsx)                                        |

## Functional Requirements

### Hero Section

| ID     | Requirement                                                                                                                                   | Source                                                                            |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| FR-010 | The system shall display a full-width hero section with a background image (`hero_4.jpg`), parallax scrolling (ratio 0.5), and a dark overlay | [Home.tsx](../src/pages/Home.tsx)                                          |
| FR-011 | The hero shall display the tagline "Vakantie begint hier!" and heading "Capfun De Bongerd"                                                    | [Home.tsx](../src/pages/Home.tsx)                                          |
| FR-012 | The hero shall include an animated mouse scroll indicator that smooth-scrolls to the `#next` section                                          | [Home.tsx](../src/pages/Home.tsx), [Home.tsx](../src/pages/Home.tsx) |
| FR-013 | The homepage hero shall use a lightweight React/CSS parallax effect. The implementation shall not depend on the legacy Stellar.js/jQuery plugin and shall disable the effect when `prefers-reduced-motion: reduce` is active | Modern replacement for [Home.tsx](../src/pages/Home.tsx) |

### Availability Check

| ID     | Requirement                                                                                                                                                       | Source                                     |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| FR-014 | The system shall display a check-availability form with fields: Aankomst (check-in date), Vertrek (check-out date), Volwassenen (adults), and Kinderen (children) | [Home.tsx](../src/pages/Home.tsx) |
| FR-015 | The check-in and check-out fields shall use accessible native or React date controls, prevent invalid date ranges and pass ISO-formatted dates to the reservation route | Modern replacement for [Home.tsx](../src/pages/Home.tsx) |
| FR-016 | The adults select shall offer options: 1, 2 (maximum 2 adults)                                                                                                    | [Home.tsx](../src/pages/Home.tsx) |
| FR-017 | The children select shall offer options: 0, 1, 2 (maximum 2 children) and a separate baby field with options: 0, 1                                                | [Home.tsx](../src/pages/Home.tsx) |
| FR-018 | The form shall submit to a real backend or navigate to the reservation page with the selected parameters                                                          | [Home.tsx](../src/pages/Home.tsx)      |
| FR-019 | The submit button shall be labeled "Bekijk beschikbaarheid"                                                                                                       | [Home.tsx](../src/pages/Home.tsx) |

### Welcome Section

| ID     | Requirement                                                                                                                 | Source                                     |
| ------ | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| FR-020 | The system shall display a welcome section with heading "Welkom!", descriptive text, a "Lees meer" button, and a video link | [Home.tsx](../src/pages/Home.tsx) |
| FR-021 | The video link shall open `images/bongerd.mp4` in an accessible React modal with focus trapping, Escape-to-close, focus return and `aria-modal="true"` | Modern replacement for [Home.tsx](../src/pages/Home.tsx) |
| FR-022 | The welcome section shall include two images (`food-1.jpg` as an overlapping accent, `img_1.jpg` as the main image)         | [Home.tsx](../src/pages/Home.tsx) |
| FR-023 | The "Lees meer" button shall link to the React route `/het-huisje`                                                   | [Home.tsx](../src/pages/Home.tsx) |

### Property Highlights

| ID     | Requirement                                                                                                                                                                                | Source                                     |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| FR-024 | The system shall display three feature cards in a grid: "Ruime zonnige tuin" (Loungen & BBQ), "Comfortabele woonkamer" (Heerlijk relaxen), and "Ruime keuken" (Van alle gemakken voorzien) | [Home.tsx](../src/pages/Home.tsx) |
| FR-025 | Each feature card shall display a property-specific image, a title, and a subtitle                                                                                                         | [Home.tsx](../src/pages/Home.tsx) |

### Photo Gallery

| ID     | Requirement                                                                                                             | Source                                     |
| ------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| FR-026 | The system shall display a React photo carousel with 33 images (`slider-1.jpeg` through `slider-33.jpeg`) | Modern replacement for [Home.tsx](../src/pages/Home.tsx) |
| FR-027 | The carousel shall autoplay with loop enabled, showing 1 item on mobile, 2 on tablet (600px), and 3 on desktop (1000px) | [Home.tsx](../src/pages/Home.tsx)      |
| FR-028 | Clicking a carousel image shall open it in an accessible React lightbox with previous/next controls, keyboard navigation, focus trapping, Escape-to-close, focus return and `aria-modal="true"` | Modern replacement for [Home.tsx](../src/pages/Home.tsx) |
| FR-029 | The carousel dots (pagination indicators) shall be hidden via CSS                                                       | [Home.tsx](../src/pages/Home.tsx)   |
| FR-030 | The carousel shall pause autoplay on hover                                                                              | [Home.tsx](../src/pages/Home.tsx)          |

### Amenities (Tabbed Content)

| ID     | Requirement                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Source                                                                               |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| FR-031 | The system shall display amenities in a tabbed interface with three tabs: "Het huisje", "Het park", and "De omgeving"                                                                                                                                                                                                                                                                                                                                                   | [Home.tsx](../src/pages/Home.tsx)                                           |
| FR-032 | The "Het huisje" tab (default active) shall list amenities for: Woonkamer, Keuken, Slaapkamer 1, Slaapkamer 2, Badkamer, and Tuin & Schuur                                                                                                                                                                                                                                                                                                                              | [Home.tsx](../src/pages/Home.tsx)                                           |
| FR-033 | The "Het park" tab shall list facilities sourced from `website-content/park-facilities.md`: Zwembaden (binnen/buiten), Adventure Golf, Pumptrackbaan, Fietsverhuur, Jeu de Boulesbaan, Restaurants (Het Klokhuis, Wafelien, CaraHoedje Pizza, CaraHoedje Snack), Animatie, Binnenspeeltuin (Holle Bolle Boom), Parkshop/Supermarkt, and overige voorzieningen (Speeleiland, Visvijver, Tienerlounge)                                                                    | [park-facilities.md](../website-content/park-facilities.md)                          |
| FR-034 | The "De omgeving" tab shall list nearby attractions sourced from `website-content/surroundings-info.md`, organized by category: Ontdekken (Vlindorado, Museum Broekerveiling, Land van Fluwel, Zeeaquarium, Van Blanckendaell Park, Tuinderij de Marlequi, Sprookjeswonderland, Dierenpark Hoenderdaell), Actieve uitjes (SKEEF, Urban Trickz, Wandelen/fietsen Schoorl/Petten, SkagaVenture), Gezellig (Bioscoop, Winkelen, Kaasmarkt Alkmaar, Strandwandeling Petten) | [surroundings-info.md](../website-content/surroundings-info.md)                      |
| FR-035 | Amenity list items and paragraphs within tabs shall be styled with white text on a dark overlay background (`hero_3.jpg`)                                                                                                                                                                                                                                                                                                                                               | [Home.tsx](../src/pages/Home.tsx), [Home.tsx](../src/pages/Home.tsx) |

### Testimonials / Reviews

| ID     | Requirement                                                                                                         | Source                                     |
| ------ | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| FR-036 | When at least two real reviews are available, the system shall display them in an accessible React carousel headed "Recensies"; with one review it shall render an honest static review block | Modern replacement for [Home.tsx](../src/pages/Home.tsx) |
| FR-037 | Each review shall display a blockquote with the review text and the guest's name; a rounded author image is optional and may only be used when a real guest photo is available | Modern replacement for [Home.tsx](../src/pages/Home.tsx) |
| FR-038 | A multi-review carousel shall loop, support manual and keyboard navigation, pause on hover/focus, show 1/2/3 items at mobile/tablet/desktop breakpoints and disable autoplay under reduced-motion preferences | Modern replacement for [Home.tsx](../src/pages/Home.tsx) |
| FR-039 | All testimonials shall contain real guest reviews (not placeholder lorem ipsum text)                                | [Home.tsx](../src/pages/Home.tsx) |
| FR-040 | All testimonial author images shall be real guest photos or removed if not available                                | [Home.tsx](../src/pages/Home.tsx) |

### Park Activities

| ID     | Requirement                                                                                                                                        | Source                                     |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| FR-041 | The system shall display three activity cards: "Zwemmen", "Spelen", and "Eten", each with a property-specific image, heading, and descriptive text | [Home.tsx](../src/pages/Home.tsx) |
| FR-042 | The activity cards shall be displayed in a 3-column grid on large screens, 2-column on medium, and full-width on small                             | [Home.tsx](../src/pages/Home.tsx) |

### Call to Action

| ID     | Requirement                                                                                                                                            | Source                                     |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| FR-043 | The system shall display a CTA section with text "Wil je ook van ons huisje gebruik maken?" and a "Reserveer nu!" button linking to `/reserveren` | [Home.tsx](../src/pages/Home.tsx) |
| FR-044 | The CTA section shall use a background image overlay (`hero_4.jpg`)                                                                                    | [Home.tsx](../src/pages/Home.tsx) |

### Animations

| ID     | Requirement                                                                                                        | Source                                |
| ------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| FR-045 | The homepage shall use restrained scroll-triggered entrance animations implemented with React and/or the Intersection Observer API, with an approximately 1000ms duration. Animations shall be disabled when `prefers-reduced-motion: reduce` is active; the legacy AOS dependency is not required | Modern replacement for [Home.tsx](../src/pages/Home.tsx) |

## Observations

- The availability form has `action="#"` and select options have empty `value=""` — no backend integration exists. FR-018 captures the need for a real implementation.
- The "Lees meer" button links to `#` — needs a real target (FR-023).
- Only the first review (Fam. Eshuis) is real; the remaining 5 are lorem ipsum placeholders from the template (FR-039).
- The first testimonial's author image is hidden with `mda-hidden` — indicates the placeholder image was never replaced (FR-040).
- The heading "Recenties" appears to be a typo for "Recensies" (Dutch for "reviews").
