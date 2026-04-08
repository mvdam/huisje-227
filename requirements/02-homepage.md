# Feature Area: Homepage

## User Stories

| ID     | User Story                                                                                                                                                           | Source                                                                            |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| US-010 | As a visitor, I want to see an inviting hero image with the property name when I land on the homepage, so that I get an immediate impression of the holiday property | [index.html](../html/index.html#L80-L97)                                          |
| US-011 | As a visitor, I want to scroll down smoothly to the main content, so that the page flows naturally                                                                   | [index.html](../html/index.html#L93-L97), [main.js](../html/js/main.js#L148-L156) |
| US-012 | As a visitor, I want to read a welcome introduction and watch a promotional video, so that I get a feel for the holiday property                                     | [index.html](../html/index.html#L159-L193)                                        |
| US-013 | As a visitor, I want to check availability by entering check-in/check-out dates and guest counts, so that I can see if the property is available                     | [index.html](../html/index.html#L101-L156)                                        |
| US-014 | As a visitor, I want to see highlighted features of the property (garden, living room, kitchen), so that I understand what makes it attractive                       | [index.html](../html/index.html#L195-L248)                                        |
| US-015 | As a visitor, I want to browse photos in a carousel and view them full-size in a lightbox, so that I can get a visual impression                                     | [index.html](../html/index.html#L250-L520)                                        |
| US-016 | As a visitor, I want to browse detailed amenities organized by category (house, park, surroundings), so that I know what facilities are available                    | [index.html](../html/index.html#L522-L756)                                        |
| US-017 | As a visitor, I want to read reviews from previous guests, so that I can assess the quality of the property                                                          | [index.html](../html/index.html#L781-L870)                                        |
| US-018 | As a visitor, I want to see highlighted park activities (swimming, playing, dining), so that I understand the leisure options                                        | [index.html](../html/index.html#L872-L948)                                        |
| US-019 | As a visitor, I want a prominent call-to-action to make a reservation, so that I can easily proceed to book                                                          | [index.html](../html/index.html#L950-L971)                                        |

## Functional Requirements

### Hero Section

| ID     | Requirement                                                                                                                                   | Source                                                                            |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| FR-010 | The system shall display a full-width hero section with a background image (`hero_4.jpg`), parallax scrolling (ratio 0.5), and a dark overlay | [index.html](../html/index.html#L80-L83)                                          |
| FR-011 | The hero shall display the tagline "Vakantie begint hier!" and heading "Capfun De Bongerd"                                                    | [index.html](../html/index.html#L89-L91)                                          |
| FR-012 | The hero shall include an animated mouse scroll indicator that smooth-scrolls to the `#next` section                                          | [index.html](../html/index.html#L93-L97), [main.js](../html/js/main.js#L148-L156) |
| FR-013 | The system shall use Stellar.js for parallax background scrolling effects                                                                     | [main.js](../html/js/main.js#L133-L141)                                           |

### Availability Check

| ID     | Requirement                                                                                                                                                       | Source                                     |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| FR-014 | The system shall display a check-availability form with fields: Aankomst (check-in date), Vertrek (check-out date), Volwassenen (adults), and Kinderen (children) | [index.html](../html/index.html#L106-L152) |
| FR-015 | The check-in and check-out date fields shall use a datepicker with format `d MM, yyyy` and autoclose enabled                                                      | [main.js](../html/js/main.js#L163-L166)    |
| FR-016 | The adults select shall offer options: 1, 2, 3, 4+ with actual form values                                                                                        | [index.html](../html/index.html#L129-L134) |
| FR-017 | The children select shall offer options: 1, 2, 3, 4+ with actual form values                                                                                      | [index.html](../html/index.html#L142-L147) |
| FR-018 | The form shall submit to a real backend or navigate to the reservation page with the selected parameters                                                          | [index.html](../html/index.html#L105)      |
| FR-019 | The submit button shall be labeled "Bekijk beschikbaarheid"                                                                                                       | [index.html](../html/index.html#L151-L153) |

### Welcome Section

| ID     | Requirement                                                                                                                 | Source                                     |
| ------ | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| FR-020 | The system shall display a welcome section with heading "Welkom!", descriptive text, a "Lees meer" button, and a video link | [index.html](../html/index.html#L175-L191) |
| FR-021 | The video link shall open `images/bongerd.mp4` in a Fancybox lightbox overlay                                               | [index.html](../html/index.html#L185-L189) |
| FR-022 | The welcome section shall include two images (`food-1.jpg` as an overlapping accent, `img_1.jpg` as the main image)         | [index.html](../html/index.html#L167-L173) |
| FR-023 | The "Lees meer" button shall link to the "Het huisje" page (`rooms.html`)                                                   | [index.html](../html/index.html#L182-L184) |

### Property Highlights

| ID     | Requirement                                                                                                                                                                                | Source                                     |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| FR-024 | The system shall display three feature cards in a grid: "Ruime zonnige tuin" (Loungen & BBQ), "Comfortabele woonkamer" (Heerlijk relaxen), and "Ruime keuken" (Van alle gemakken voorzien) | [index.html](../html/index.html#L210-L247) |
| FR-025 | Each feature card shall display a property-specific image, a title, and a subtitle                                                                                                         | [index.html](../html/index.html#L211-L224) |

### Photo Gallery

| ID     | Requirement                                                                                                             | Source                                     |
| ------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| FR-026 | The system shall display a photo carousel (Owl Carousel) with 33 images (`slider-1.jpeg` through `slider-33.jpeg`)      | [index.html](../html/index.html#L265-L515) |
| FR-027 | The carousel shall autoplay with loop enabled, showing 1 item on mobile, 2 on tablet (600px), and 3 on desktop (1000px) | [main.js](../html/js/main.js#L46-L66)      |
| FR-028 | Clicking a carousel image shall open it in a Fancybox lightbox gallery (grouped by `data-fancybox="images"`)            | [index.html](../html/index.html#L267-L274) |
| FR-029 | The carousel dots (pagination indicators) shall be hidden via CSS                                                       | [index.html](../html/index.html#L46-L48)   |
| FR-030 | The carousel shall pause autoplay on hover                                                                              | [main.js](../html/js/main.js#L52)          |

### Amenities (Tabbed Content)

| ID     | Requirement                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Source                                                                               |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| FR-031 | The system shall display amenities in a tabbed interface with three tabs: "Het huisje", "Het park", and "De omgeving"                                                                                                                                                                                                                                                                                                                                                   | [index.html](../html/index.html#L535-L564)                                           |
| FR-032 | The "Het huisje" tab (default active) shall list amenities for: Woonkamer, Keuken, Slaapkamer 1, Slaapkamer 2, Badkamer, and Tuin & Schuur                                                                                                                                                                                                                                                                                                                              | [index.html](../html/index.html#L573-L651)                                           |
| FR-033 | The "Het park" tab shall list facilities sourced from `website-content/park-facilities.md`: Zwembaden (binnen/buiten), Adventure Golf, Pumptrackbaan, Fietsverhuur, Jeu de Boulesbaan, Restaurants (Het Klokhuis, Wafelien, CaraHoedje Pizza, CaraHoedje Snack), Animatie, Binnenspeeltuin (Holle Bolle Boom), Parkshop/Supermarkt, and overige voorzieningen (Speeleiland, Visvijver, Tienerlounge)                                                                    | [park-facilities.md](../website-content/park-facilities.md)                          |
| FR-034 | The "De omgeving" tab shall list nearby attractions sourced from `website-content/surroundings-info.md`, organized by category: Ontdekken (Vlindorado, Museum Broekerveiling, Land van Fluwel, Zeeaquarium, Van Blanckendaell Park, Tuinderij de Marlequi, Sprookjeswonderland, Dierenpark Hoenderdaell), Actieve uitjes (SKEEF, Urban Trickz, Wandelen/fietsen Schoorl/Petten, SkagaVenture), Gezellig (Bioscoop, Winkelen, Kaasmarkt Alkmaar, Strandwandeling Petten) | [surroundings-info.md](../website-content/surroundings-info.md)                      |
| FR-035 | Amenity list items and paragraphs within tabs shall be styled with white text on a dark overlay background (`hero_3.jpg`)                                                                                                                                                                                                                                                                                                                                               | [index.html](../html/index.html#L49-L52), [index.html](../html/index.html#L524-L525) |

### Testimonials / Reviews

| ID     | Requirement                                                                                                         | Source                                     |
| ------ | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| FR-036 | The system shall display guest reviews ("Recensies") in an Owl Carousel slider                                      | [index.html](../html/index.html#L789-L867) |
| FR-037 | Each review shall display an author image (rounded circle), a blockquote with the review text, and the guest's name | [index.html](../html/index.html#L796-L814) |
| FR-038 | The testimonial carousel shall autoplay, loop, and show 1/2/3 items at 0/600/1000px breakpoints                     | [main.js](../html/js/main.js#L101-L130)    |
| FR-039 | All testimonials shall contain real guest reviews (not placeholder lorem ipsum text)                                | [index.html](../html/index.html#L815-L866) |
| FR-040 | All testimonial author images shall be real guest photos or removed if not available                                | [index.html](../html/index.html#L797-L802) |

### Park Activities

| ID     | Requirement                                                                                                                                        | Source                                     |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| FR-041 | The system shall display three activity cards: "Zwemmen", "Spelen", and "Eten", each with a property-specific image, heading, and descriptive text | [index.html](../html/index.html#L886-L946) |
| FR-042 | The activity cards shall be displayed in a 3-column grid on large screens, 2-column on medium, and full-width on small                             | [index.html](../html/index.html#L886-L888) |

### Call to Action

| ID     | Requirement                                                                                                                                            | Source                                     |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| FR-043 | The system shall display a CTA section with text "Wil je ook van ons huisje gebruik maken?" and a "Reserveer nu!" button linking to `reservation.html` | [index.html](../html/index.html#L958-L968) |
| FR-044 | The CTA section shall use a background image overlay (`hero_4.jpg`)                                                                                    | [index.html](../html/index.html#L951-L953) |

### Animations

| ID     | Requirement                                                                                                        | Source                                |
| ------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| FR-045 | The system shall use AOS (Animate On Scroll) library with 1000ms duration for scroll-triggered entrance animations | [main.js](../html/js/main.js#L38-L40) |

## Observations

- The availability form has `action="#"` and select options have empty `value=""` — no backend integration exists. FR-018 captures the need for a real implementation.
- The "Lees meer" button links to `#` — needs a real target (FR-023).
- Only the first review (Fam. Eshuis) is real; the remaining 5 are lorem ipsum placeholders from the template (FR-039).
- The first testimonial's author image is hidden with `mda-hidden` — indicates the placeholder image was never replaced (FR-040).
- The heading "Recenties" appears to be a typo for "Recensies" (Dutch for "reviews").
