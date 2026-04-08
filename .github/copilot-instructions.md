# Project Guidelines — Capfun De Bongerd 227

## Project Overview

This is a vacation rental website for a holiday house at Capfun De Bongerd (plot 227) in Tuitjenhorn, Noord-Holland. All user-facing content must be written in Dutch.

## Project Structure

- `html/` — Partially implemented static HTML site based on a Colorlib template. Many pages still contain English template placeholder content that needs to be replaced. This folder will be removed once the implementation is migrated.
- `react-app/` — **Ignore this directory.** Do not read, modify, or reference files in `react-app/`.
- `requirements/` — Functional requirements organized by feature area.
- `requirements/user-stories/` — Individual user story files with acceptance criteria and traceability to source code.
- `src/` — React application source code (Create React App).
- `website-content/` — Contains content about the property, including descriptions, images, and contact info. Use this content to replace template placeholders in the HTML files and to populate the React app.

## Requirements

- Feature-area requirements live in `requirements/*.md` (e.g., `01-navigation.md`, `02-homepage.md`).
- User stories live in `requirements/user-stories/US-*.md`, each with acceptance criteria and links to related functional requirements.
- When implementing a feature, check the corresponding requirements and user stories first.

## Conventions

- All website text, labels, headings, buttons, and alt text must be in Dutch.
- The site is branded as "Capfun De Bongerd 227" — do not use the original template name "Sogo Hotel".
- Template placeholder content (lorem ipsum, English text, fake addresses/names) must not appear in production.
