# La Esperanza Mexican Restaurant & Bar

A complete, responsive restaurant website for the Cordova family's La Esperanza
in Lindenwold, New Jersey.

## Experience

- Home page with signature dishes, family story, hours, and direct calls to action
- Searchable, category-based menu
- Family history and heritage gallery
- Catering overview with a prefilled email inquiry flow
- Visit page with hours, phone reservations, directions, and embedded map
- Responsive navigation, accessible landmarks, structured restaurant data, and
  social sharing metadata

The visual system draws from La Esperanza's recognizable pink-and-blue restaurant
exterior and its original house mark. A new house-and-sun brand mark and custom
food imagery are included under `public/images/`.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

## Quality checks

```bash
npm run lint
npm test
```

## Project structure

- `app/site.ts` — central business details, links, hours, and menu content
- `app/components/` — shared navigation, footer, menu, and catering components
- `app/menu/` — full menu experience
- `app/story/` — Cordova family story
- `app/catering/` — catering information and inquiry flow
- `app/visit/` — location, hours, reservations, and directions
- `public/images/` — brand, food, and historical imagery

Built from the supplied `restaurant-site-template` as the structural reference
and adapted to the Sites runtime.
