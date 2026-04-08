# Feature Area: Footer (All Pages)

## User Stories

| ID | User Story | Source |
|----|-----------|--------|
| US-070 | As a visitor, I want to find contact information in the footer, so that I can reach the property owner from any page | [index.html](../html/index.html#L993-L1012) |
| US-071 | As a visitor, I want to subscribe to a newsletter, so that I can stay informed about availability and offers | [index.html](../html/index.html#L1013-L1024) |
| US-072 | As a visitor, I want to access the property's social media profiles, so that I can follow them for updates | [index.html](../html/index.html#L1033-L1039) |

## Functional Requirements

| ID | Requirement | Source |
|----|------------|--------|
| FR-100 | The footer shall display the property address: Bongerdlaan 3, 1747 CA Tuitjenhorn, Noord-Holland | [index.html](../html/index.html#L995-L1002) |
| FR-101 | The footer shall display a real phone number (replace template placeholder "(+1) 435 3533") | [index.html](../html/index.html#L1006) |
| FR-102 | The footer shall display a real email address (replace template placeholder "info@domain.com") | [index.html](../html/index.html#L1011) |
| FR-103 | The footer shall include a newsletter subscription form with an email input and submit button | [index.html](../html/index.html#L1015-L1023) |
| FR-104 | The newsletter form shall submit to a real email marketing service or backend | [index.html](../html/index.html#L1016) |
| FR-105 | The footer shall display social media links with real URLs (currently all link to `#`) | [index.html](../html/index.html#L1033-L1039) |
| FR-106 | The footer link columns shall contain relevant links in Dutch (replace English template links "About Us", "Terms & Conditions", "Privacy Policy", "Rooms", "The Rooms & Suites", "Restaurant") | [index.html](../html/index.html#L976-L990) |
| FR-107 | The footer shall display the Colorlib attribution as required by the CC BY 3.0 license | [index.html](../html/index.html#L1027-L1032) |
| FR-108 | The footer shall be consistent across all pages | All HTML files |

## Observations

- The homepage footer has been partially customized (real address added), but phone and email remain as template placeholders.
- Sub-page footers still show the full template address: "198 West 21th Street, Suite 721 New York NY 10016".
- Footer quick links ("About Us", "Terms & Conditions", etc.) are English and link to `#` — either localize and link to real pages, or remove.
- Social media icons shown: TripAdvisor, Facebook, Twitter, LinkedIn, Vimeo — determine which are actually used.
