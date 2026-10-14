# Feature Area: Central Pricing

## User Stories

- [US-104: Configure rental pricing and see a stay total](user-stories/US-104-central-pricing.md)

## Functional Requirements

| ID | Requirement | Source |
| --- | --- | --- |
| FR-PRICE-001 | `website-content/pricing.json` shall define the central weekly rental rate and currency, initially EUR 1400, an off-peak multiplier of 0.75, and yearly summer-holiday boundaries | [pricing.json](../website-content/pricing.json) |
| FR-PRICE-002 | The rates page shall display summer and off-peak weekly rates from the central configuration. The reservation form shall show only the selected stay’s total and night count, without explaining seasonal pricing or percentages; before a complete valid selection it shall display no price summary | [US-104](user-stories/US-104-central-pricing.md) |
| FR-PRICE-003 | A valid arrival/departure selection with configured holiday dates for every included year shall display the total rental price and night count, updating for calendar clicks and manual edits; incomplete, invalid or non-increasing ranges shall not display a total | [US-104](user-stories/US-104-central-pricing.md) |
| FR-PRICE-004 | The rental total shall sum the applicable nightly rates: full weekly rate ÷ 7 during the combined Dutch summer holiday and 75% of that rate outside it, rounded once to cents and unaffected by daylight-saving transitions | [US-104](user-stories/US-104-central-pricing.md) |
| FR-PRICE-005 | Prices shall use Dutch euro formatting and clearly state that the refundable deposit and optional cleaning are separate; availability feedback shall remain visible independently | [US-104](user-stories/US-104-central-pricing.md) |
| FR-PRICE-006 | Full-price summer dates shall span the earliest start through the latest end across Noord, Midden and Zuid, sourced from official dates. The JSON end is exclusive. Missing yearly holiday data shall show a contact message instead of a guessed total | [US-104](user-stories/US-104-central-pricing.md) |

## Sources

[Official school holiday dates 2026–2030, Article 6](https://zoek.officielebekendmakingen.nl/stcrt-2024-19237.html).

## Traceability

FR-PRICE-001–006 → [US-104](user-stories/US-104-central-pricing.md).
