# US-071: Newsletter Subscription

**As a** visitor,
**I want to** subscribe to a newsletter,
**so that** I can stay informed about availability and offers.

## Source

- [index.html](../../html/index.html#L1013-L1024)

## Feature Area

[Footer](../08-footer.md)

## Acceptance Criteria

- A newsletter subscription form is displayed in the footer
- The form has an email input field and a submit button
- All labels, placeholder text, and button text are in Dutch
- When an integration is available, the form submits to a real email marketing service or backend from every page
- Until then, the UI clearly states that subscription is unavailable and never shows a successful subscription

## Related Requirements

- [FR-103](../08-footer.md) — Newsletter form UI
- [FR-104](../08-footer.md) — Newsletter form backend

## Status

- [x] Newsletter UI implemented — 2026-07-03
- [x] Integration-unavailable message implemented — 2026-09-02
- [ ] Newsletter integration deferred by product decision — 2026-09-02
