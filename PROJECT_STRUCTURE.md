# Saptam Pharmachem — Project Structure

This guide explains where project code and assets belong. The root
[`README.md`](./README.md) is the source of truth for company facts, page
content, product names, and requirements. This file describes where that
content should live.

## Technology

Follow the stack defined in `README.md`:

- Next.js App Router
- TypeScript
- Tailwind CSS and shadcn/ui
- Lucide React icons
- React Hook Form and Zod for forms

Do not implement this project as standalone HTML pages with vanilla JavaScript;
that would conflict with the specified stack.

## Current workspace

The current project contains the README files and these empty asset folders:

```text
.
├── README.md
├── PROJECT_STRUCTURE.md
├── readme.txt
├── assets/
│   ├── css/
│   │   └── pages/
│   ├── icons/
│   ├── images/
│   │   ├── directors/
│   │   ├── hero/
│   │   └── sections/
│   └── js/
└── partials/
```

The `assets/css/`, `assets/js/`, and `partials/` directories are part of the
existing workspace, but they are not the recommended locations for new
Next.js-specific styles, application logic, or shared React markup. Use the
Next.js structure below as the application is built. Keep or remove the
existing directories as appropriate when implementing; do not duplicate
components or behavior across both approaches.

## Recommended application structure

```text
.
├── README.md
├── PROJECT_STRUCTURE.md
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   ├── inquiry/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── top-bar.tsx
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── cta-banner.tsx
│   ├── forms/
│   │   └── inquiry-form.tsx
│   ├── products/
│   ├── sections/
│   └── ui/
├── lib/
│   └── data/
│       └── products.ts
└── public/
    ├── icons/
    └── images/
        ├── directors/
        ├── hero/
        └── sections/
```

This is the target organization; folders and files that have not yet been
created are illustrative, not claims about the current workspace.

## What belongs where

### `app/`

Use the App Router for pages, shared layout, and global styles:

- `layout.tsx` provides the shared top bar, header, CTA banner, and footer
  around all routes, and defines site-wide metadata.
- `page.tsx` implements the Home page (`/`).
- `about/page.tsx`, `products/page.tsx`, `inquiry/page.tsx`, and
  `contact/page.tsx` implement their respective routes.
- `globals.css` contains Tailwind directives and truly global styles. Prefer
  Tailwind utilities and component-level styles for page-specific presentation.

Set page-specific titles and descriptions using Next.js metadata exports.

### `components/`

Place reusable React components here, grouped by purpose:

- `layout/` — top bar, navigation/header, footer, and CTA banner.
- `forms/` — the inquiry form shared by the Inquiry and Contact pages.
- `products/` — product categories, product chips, and product search/filter
  controls.
- `sections/` — reusable content sections such as stats, testimonials, FAQ,
  quality policy, and director cards.
- `ui/` — shared interface primitives, including shadcn/ui components.

Keep page-specific composition in its route's `page.tsx`; extract a component
when it is reused or has a clear independent responsibility.

### `lib/data/`

Keep structured, reusable content here. `products.ts` should be the canonical
typed product catalog used by the Products page and any product previews. Use
the catalog and exact spellings in `README.md`; do not introduce new products
or company claims.

### `public/`

Put browser-served static files here. Organize photos under `images/` and
standalone SVG icons under `icons/`. Use descriptive image alt text, provide
dimensions where applicable, and lazy-load below-the-fold images. Optimize
large photos before adding them.

### Existing `assets/` and `partials/`

These directories currently exist but are empty. In the Next.js implementation,
put browser-served images and icons in `public/`, shared markup in React
components, and application behavior in React components or hooks. Avoid
adding standalone HTML includes or vanilla-JavaScript page features that
duplicate the Next.js implementation.

## Page-to-route map

| Page | App Router file | Main content |
|---|---|---|
| Home | `app/page.tsx` | Hero, company introduction, stats, product previews, testimonials, FAQ |
| About Us | `app/about/page.tsx` | Company story, vision/mission/values, quality policy, directors |
| Our Products | `app/products/page.tsx` | All product categories, catalog, category navigation, optional search |
| Inquiry | `app/inquiry/page.tsx` | Validated inquiry form and response-time note |
| Contact Us | `app/contact/page.tsx` | Phone, email, address, social links, and optional form/map |

Use shared components for the common page shell and repeatable UI. Link phone
numbers with `tel:` and email addresses with `mailto:`.

## Adding or changing content

| Change | Location |
|---|---|
| Add or correct company facts, copy, FAQs, or product data | Update `README.md` first, then the relevant page or `lib/data/` |
| Add a product or category | `README.md`, `lib/data/products.ts`, and the Products page if its layout needs a change |
| Add a route | Add `app/<route>/page.tsx` and update shared navigation as needed |
| Add a reusable component | The relevant folder under `components/` |
| Add a shared style token or global rule | `app/globals.css` or the Tailwind theme configuration |
| Add a photo or icon | `public/images/` or `public/icons/` |
| Change a form field or validation rule | `components/forms/inquiry-form.tsx` and its Zod schema |

## Conventions

- Use TypeScript and the existing project conventions; prefer descriptive,
  kebab-case filenames for components and utilities.
- Use semantic HTML, accessible labels, keyboard-operable controls, and visible
  focus states.
- Use the colors and copy specified in `README.md`; do not invent credentials,
  certifications, client names, or company claims.
- Keep shared UI consistent across all five routes and make every page
  responsive at mobile, tablet, and desktop sizes.
- Use the README's deliverables checklist and functional requirements when
  validating implementation.
