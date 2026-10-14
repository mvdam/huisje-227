---
id: "US-104"
title: "Configure rental pricing and see a stay total"
status: "accepted"
implements_fr:
  - "FR-PRICE-001"
  - "FR-PRICE-002"
  - "FR-PRICE-003"
  - "FR-PRICE-004"
  - "FR-PRICE-005"
  - "FR-PRICE-006"
focus_track: "quality"
---

# US-104: Configure rental pricing and see a stay total

**As an** owner, **I want to** configure the weekly price centrally, **so that** visitors see consistent rates and rental totals for their selected dates.

## Acceptance Criteria

- The central JSON defines EUR 1400 per summer week, a 75% off-peak rate, and yearly combined summer dates; it supplies both the rates and reservation pages.
- Before dates are selected, the reservation page shows no price summary. It does not explain seasonal pricing or display discount percentages.
- Selecting a calendar period or editing form dates immediately updates the total and number of nights.
- Seven summer nights cost €1,400; seven nights outside summer cost €1,050. A two-night stay with one night at each rate costs €350.
- Full-price summer dates span all three Dutch regions, using the earliest start and latest end; checkout is excluded. For 2027, the full-price dates run July 10 through September 5 inclusive.
- Missing yearly holiday dates suppress the total and show a contact message.
- Calendar night calculations remain correct across daylight-saving changes.
- Incomplete, invalid, same-day or reversed selections have no total.
- Dutch currency formatting is used; the deposit and optional cleaning are explicitly excluded from the rental total.
- Showing a rental price does not replace booking-conflict or unknown-availability feedback.

## Related Requirements

[FR-PRICE-001–006](../16-central-pricing.md)
