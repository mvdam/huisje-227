# Feature Area: Footer (All Pages)

## User Stories

| ID     | User Story                                                                                                           | Source                                       |
| ------ | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| US-070 | As a visitor, I want to find contact information in the footer, so that I can reach the property owner from any page | [Footer.tsx](../src/components/Footer.tsx)  |
| US-071 | As a visitor, I want to subscribe to a newsletter, so that I can stay informed about availability and offers         | [Footer.tsx](../src/components/Footer.tsx) |
| US-072 | As a visitor, I want to access the property's social media profiles, so that I can follow them for updates           | [Footer.tsx](../src/components/Footer.tsx) |

## Functional Requirements

| ID     | Requirement                                                                                                                                                                                    | Source                                                |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| FR-100 | The footer shall display the property address: Bongerdlaan 3, 1747 CA Tuitjenhorn, Noord-Holland                                                                                               | [Footer.tsx](../src/components/Footer.tsx)           |
| FR-101 | The footer shall display real phone numbers: park reception 022-6391481, and/or owner contact numbers Nikki (0653308199) / Martin (0651190382)                                                 | [booking-info.md](../website-content/booking-info.md) |
| FR-102 | The footer shall display a real email address (replace template placeholder "info@domain.com")                                                                                                 | [Footer.tsx](../src/components/Footer.tsx)                |
| FR-103 | The footer shall include a newsletter subscription form with an email input and submit button                                                                                                  | [Footer.tsx](../src/components/Footer.tsx)          |
| FR-104 | The newsletter form shall submit to a real email marketing service or backend. Until that integration exists, the UI shall clearly state that subscription is unavailable and shall not claim that the visitor subscribed | [Footer.tsx](../src/components/Footer.tsx) |
| FR-105 | The footer shall display social media links with real URLs (currently all link to `#`)                                                                                                         | [Footer.tsx](../src/components/Footer.tsx)          |
| FR-106 | The footer link columns shall contain relevant links in Dutch (replace English template links "About Us", "Terms & Conditions", "Privacy Policy", "Rooms", "The Rooms & Suites", "Restaurant") | [Footer.tsx](../src/components/Footer.tsx)            |
| FR-107 | The footer shall display the Colorlib attribution as required by the CC BY 3.0 license                                                                                                         | [Footer.tsx](../src/components/Footer.tsx)          |
| FR-108 | The footer shall be consistent across all React routes                                                                                                                                          | [Footer.tsx](../src/components/Footer.tsx)            |

## Observations

- The homepage footer has been partially customized (real address added), but phone and email remain as template placeholders.
- Sub-page footers still show the full template address: "198 West 21th Street, Suite 721 New York NY 10016".
- Footer quick links ("About Us", "Terms & Conditions", etc.) are English and link to `#` — either localize and link to real pages, or remove.
- Social media icons shown: TripAdvisor, Facebook, Twitter, LinkedIn, Vimeo — determine which are actually used.

## Deferred Requirements

- **FR-104 newsletter integration** — deferred by product decision on 2 September 2026. The newsletter UI may remain visible as a prototype, but it may not show a successful subscription.
