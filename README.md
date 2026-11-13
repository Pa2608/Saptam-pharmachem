README File: Saptam Pharmachem Website
Here's a comprehensive README that any AI tool (v0, Cursor, Claude, ChatGPT, Copilot, Bolt, Lovable, etc.) can read and fully understand the project — pages, content, design system, and structure.

markdown
# Saptam Pharmachem — Website Project README

## 1. Project Overview
A marketing + inquiry website for **Saptam Pharmachem**, a pharmaceutical trading
and distribution company based in Idar, Gujarat, India. The site positions the
company as a trusted B2B supplier of pharmaceutical raw materials — APIs,
excipients, vitamins, amino acids, sweeteners, and common chemicals — to
pharmaceutical manufacturers, distributors, and healthcare businesses across India.

**Goal:** Build trust, showcase the product catalog, and drive inquiries/quotes.

**Audience:** B2B buyers — procurement heads, pharma manufacturers, distributors,
and formulators.

**Site type:** Multi-page static marketing site with inquiry form.

---

## 2. Brand & Company Facts (source of truth — do NOT invent)

- **Company name:** Saptam Pharmachem (display: "SAPTAM PHARMACHEM")
- **Tagline:** "India's premier pharmaceutical trader, supplying a wide range of
  essential materials with unwavering quality and strategic efficiency,
  fostering innovation and delivering exceptional value."
- **Location:** Shop No-5, First Floor, Shanti Residency, Valasana Road,
  Idar, Gujarat - 383430, India
- **Email:** saptampharmachem@gmail.com
- **Phones:**
  - +91 93282 34921 — Mihir Patel
  - +91 93280 69909 — Savan Patel
  - +91 92653 40900 — Masum Patel
- **Social:** Facebook, Instagram, LinkedIn (links TBD — use `#` placeholders)
- **Copyright:** © 2025 Saptam Pharmachem, All rights reserved.
- **Design credit:** Designed by D-ICON IT SOLUTION
- **Stats:** 10+ Years Experience · 500+ Happy Clients · 25+ Employees · 500 MT Products Sold

---

## 3. Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **UI components:** shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Clean sans-serif (e.g., Inter or Geist) — use `next/font`
- **Animations:** Subtle fade-in / slide-up on scroll (use Intersection Observer or Framer Motion)
- **Form handling:** react-hook-form + zod validation
- **Language:** TypeScript preferred

---

## 4. Design System

### Color palette
| Token            | Value      | Usage                              |
|------------------|------------|------------------------------------|
| Primary          | `#0F766E`  | Buttons, links, headings accents   |
| Primary hover    | `#115E59`  | Button hover states                |
| Accent           | `#0EA5E9`  | Secondary highlights, icons        |
| Background       | `#FFFFFF`  | Page background                    |
| Surface          | `#F8FAFC`  | Section alt backgrounds, cards     |
| Border           | `#E2E8F0`  | Card borders, dividers             |
| Text primary     | `#0F172A`  | Body headings                      |
| Text secondary   | `#475569`  | Body copy, captions                |
| Success          | `#16A34A`  | Form success                       |
| Error            | `#DC2626`  | Form errors                        |

### Typography
- Headings: bold, tight tracking, `text-3xl`–`text-5xl`
- Body: `text-base` / `text-lg`, `leading-relaxed`, color `#475569`
- Max content width: `max-w-7xl` centered with `px-4 md:px-8`

### Shapes & spacing
- Rounded corners: `rounded-lg` / `rounded-xl` for cards, `rounded-md` for buttons
- Cards: white bg, `border border-slate-200`, soft shadow, hover lift
- Section vertical padding: `py-16 md:py-24`
- Generous whitespace throughout

### Imagery
- Placeholder pharma/lab imagery: production lines, pills, lab coats,
  chemical storage tanks, sterile conditions, powders
- Use `next/image` with `alt` text
- Hero images with subtle dark/teal overlay for text legibility

---

## 5. Site Structure (5 pages)

Global layout wraps every page with:
- **Top bar** — phone, email, location
- **Sticky header** — logo, nav (Home · About Us · Our Products · Inquiry · Contact Us),
  "Get a Quote" CTA button, mobile hamburger
- **CTA banner** — company tagline + "Get a Quote" button (before footer)
- **Footer** — company summary, social icons, Quick Links, Contact Details, copyright

### Pages

| Page        | Route       | Purpose                                    |
|-------------|-------------|--------------------------------------------|
| Home        | `/`         | Overview, trust, product teasers, testimonials, FAQ |
| About Us    | `/about`    | Company story, vision/mission/values, quality policy, directors |
| Our Products| `/products` | Full product catalog (APIs + categories)   |
| Inquiry     | `/inquiry`  | Inquiry form                               |
| Contact Us  | `/contact`  | Contact details + optional message form + map |

Each page has a breadcrumb (`Home / <Page>`) and the active nav item is highlighted.

---

## 6. Page Content Specification

### 6.1 Home (`/`)
Sections in order:
1. **Hero** — "Your Trustful Source for Pharmaceutical Excellence" + subheadline + CTAs
   ("Get a Quote", "Explore Products"). Background: pharma production image.
2. **About** — Welcome paragraph (see company description below) + "More About Us" button.
3. **Stats counters** — animated count-up: 10+ / 500+ / 25+ / 500 MT.
4. **Vision, Mission, Core Values** — 3-card grid.
   - Vision: "Our vision is to emerge as the definitive market leader in the
     Pharmaceuticals Industry through our unwavering commitment to delivering
     unparalleled quality ingredients."
   - Mission: "At Saptam Pharmachem, our mission is to deliver exceptional
     pharmaceutical raw materials through uncompromising standards of quality,
     compliance, and dedicated customer service."
   - Core Values: "Quality Excellence, Customer Satisfaction, Expertise and
     Knowledge, Continuous Improvement and Integrity and Accountability."
5. **Products preview** — 6 category cards: API, Excipients, Vitamins,
   Amino Acids, Sweeteners, Chemicals.
6. **Why Choose Us** — 6 features: Collaboration, Accountability, Customer Focus,
   Innovation, Commitment, Cost Effectiveness.
7. **Quality Policy** — 4 pillars: Trusted Sourcing, Regulatory Compliance,
   Rigorous Quality Control, Customer-Centric Approach.
8. **Testimonials** — 3 quotes:
   - Dr. Mehul R. — Pharmaceutical Manufacturer
   - Anjali S. — Procurement Head
   - Krunal M. — Director
9. **FAQ** — accordion (see FAQ section below).

### 6.2 About Us (`/about`)
Sections in order:
1. Hero image: woman in lab coat working with pills on a conveyor belt (goggles + gloves).
2. **About Saptam Pharmachem** — full company description (below) + 3 bullet lines:
   - "We collaborate closely with clients to deliver customized solutions."
   - "Competitive pricing with uncompromised quality is our promise."
   - "We are driven by excellence and guided by strong professional values."
3. **Vision / Mission / Core Values** (same content as Home).
4. **Quality Policy** — heading + 4 pillars (same as Home).
5. **Our Directors** ("Meet With Our Team") — 3 cards:
   - **Mr. Mihir Patel** — Director (Business Development)
   - **Mr. Savan Patel** — Director (Business Development)
   - **Mr. Masum Patel** — Director (Finance & Logistics)
   (Full bios in the content block below.)

### 6.3 Our Products (`/products`)
Sections in order:
1. Breadcrumb + page title + intro line.
2. **Jump navigation** — scrollable category tabs: APIs · Excipients · Sweeteners ·
   Beta-Carotene · Lycopene · Vitamins · Amino Acids · Common Chemicals.
3. **APIs section** — the largest section. Sub-categories shown as cards with
   product name tags/chips (see catalog below).
4. Each subsequent category section (Excipients, Sweeteners, Beta-Carotene,
   Lycopene, Vitamins, Amino Acids, Common Chemicals) as its own card group.
5. Optional client-side search/filter by product name.

### 6.4 Inquiry (`/inquiry`)
- Breadcrumb + "Inquiry" title + "Send Us a Message" heading.
- Intro copy (exact): "Please fill out the form with your details, and we'll get back
  to you as soon as possible. Your satisfaction is our priority, and we're committed
  to providing prompt and helpful responses to all inquiries. Thank you for reaching out!"
- **Form fields:** Name, Email, Phone, Subject, Message + Submit.
- Validation, loading state, success confirmation.
- Note: "We typically respond within 24–48 hours."
- Optional sidebar with quick contact info.

### 6.5 Contact Us (`/contact`)
- Breadcrumb + "Contact Us" title + "Let's Get In Touch" heading.
- Intro copy (exact): "Have questions or need assistance? Feel free to reach out to us
  using the details below. Whether it's a quick inquiry or a detailed discussion,
  we'd love to hear from you. Visit us, call us, or drop an email — we're always just
  a message away."
- **3 contact cards:**
  - Call Us: 3 phone numbers (clickable `tel:`)
  - E-Mail Id: saptampharmachem@gmail.com (clickable `mailto:`)
  - Location: full address + "Get Directions" (Google Maps)
- **Optional message form** (same fields as Inquiry).
- **Follow Us On Social Media** — Facebook, Instagram, LinkedIn icon buttons.
- **Optional map embed**.

---

## 7. Full Content Blocks

### 7.1 Company description (Home + About)
"SAPTAM PHARMACHEM is a trusted name in India's pharmaceutical trading industry,
known for delivering reliable access to high-quality raw materials. We specialize in
the distribution of pharmaceutical APIs, polymers, solvents, chemicals, vitamins,
and plant extracts. With a strategically advantageous location, we ensure efficient
supply chain operations across various healthcare sectors. Our commitment lies in
building long-term, value-driven partnerships and supporting innovation in the
pharmaceutical space. At SAPTAM PHARMACHEM, quality, integrity, and customer
satisfaction are at the heart of everything we do."

### 7.2 Directors (About page)
**Mr. Mihir Patel — Director (Business Development)**
"Mr. Mihir leads strategic growth, business expansion, and customer relationship
management. With experience in pharmacy and business, he understands market needs
and develops value-driven solutions. He oversees marketing, purchasing, and customer
relations as a company director. His expertise includes customer demand analysis,
resolving queries and complaints, strengthening partnerships, and supporting the
company's long-term growth."

**Mr. Savan Patel — Director (Business Development)**
"Mr. Savan leads strategic growth, business expansion, and customer relationship
management. With experience in pharmacy and business, he understands market
requirements and develops value-driven solutions. He oversees marketing, purchasing,
and sales as a company director. His expertise includes sales planning, market
research, client communication, business growth, building partnerships, and
supporting the company's long-term growth."

**Mr. Masum Patel — Director (Finance & Logistics)**
"Mr. Masum leads the company's accounts, finance, and logistics operations. He
manages financial relationships between customers and the company while ensuring
accurate accounting synchronization. With a bachelor's degree in Chemical
Engineering, he serves as a company director. His expertise includes financial
planning, logistics management, compliance, operational efficiency, and supporting
the company's sustainable long-term growth."

### 7.3 FAQ (Home page — accordion)
1. **What products does Saptam Pharmachem supply?**
   We supply a wide range of pharmaceutical APIs, chemicals, solvents, polymers,
   vitamins, and herbal extracts sourced from certified manufacturers.
2. **Who can place an order with Saptam Pharmachem?**
   Licensed pharmaceutical manufacturers, distributors, and healthcare businesses.
3. **How do I request a quote or place an order?**
   Use the Inquiry form, email us, or call any of our listed phone numbers.
4. **What is your delivery timeline?**
   Delivery timelines depend on order volume and location; our team confirms
   dispatch schedules at the time of order.

---

## 8. Product Catalog (source of truth — use exactly, fix typos only)

### APIs
- **Anti-Malarial:** Lumefantrine, Artemether, Artesunate
- **Anti-Tussive:** Levocloperastine Fendizoate, Levodropropizine, Dextromethorphan
- **Anti-Biotics:** Azithromycin, Ofloxacin, Amoxicillin, Clarithromycin, Doxycycline,
  Levofloxacin, Erythromycin Ethyl Succinate, Tetracycline
- **Anti-Fungal:** Ketoconazole, Fluconazole, Luliconazole, Nystatin
- **Anthelmintics:** Albendazole, Fenbendazole, Ivermectin
- **Tetracyclines:** Doxycycline Hyclate, Tetracycline HCl
- **Anti-Histamines:** Cetirizine HCl, Levocetirizine
- **Anti-Infectives:** Metronidazole, Metronidazole Benzoate
- **Anti-Hyperlipidemic:** Atorvastatin Calcium, Rosuvastatin Calcium
- **Anti-Hypertensive:** Nifedipine, Amlodipine Besylate, Losartan Potassium
- **Cephalosporins:** Cefuroxime Axetil, Cefixime Trihydrate, Cefpodoxime Proxetil
- **Analgesic:** Paracetamol, Mefenamic Acid
- **Mucolytic Agent:** Ambroxol HCl, Bromhexine HCl
- **Anti-Ulceratives:** Omeprazole, Pantoprazole
- **Anti-Retroviral:** Abacavir, Dolutegravir
- **Decongestant:** Phenylephrine
- **Anti-Convulsant:** Gabapentine, Pregabalin
- **Expectorant:** Guaifenesin
- **Anti-Asthmatic:** Terbutaline Sulphate
- **Osmotic Laxative:** Lactulose
- **Anti-Ulcer:** Sucralfate
- **Anti-Bacterial:** Erythromycin Stearate
- **Neuroprotective:** Citicoline
- **Opioid Analgesics:** Tapentadol HCl
- **Hepatic Agents:** UDCA
- **Opioid Antagonists:** Naltrexone HCl
- **Anti-Androgens:** Finasteride
- **Antacids:** Magaldrate
- **Anti-Inflammatory:** Diclofenac Sodium, Diclofenac Potassium, Montelukast Sodium,
  Etoricoxib, Aceclofenac, Ibuprofen
- **Hormones APIs:** Testosterone, Testosterone Enanthate, Testosterone Propionate,
  Testosterone Cypionate, Nandrolone, Nandrolone Decanoate, Nandrolone
  Phenylpropionate, Norethisterone, Norethisterone Enanthate, Norethisterone Acetate

> ⚠️ Data note: the source duplicates the "Anti-Biotics" list; show it once.
> The anthelmintic list was mislabeled "Anti-Biotics" in the source — relabel as
> "Anthelmintics".

### Excipients
PVP K30, HPMC E5/E15/K100M, MCC 101/102

### Sweeteners
Sucralose, Neotame, Aspartame, Acesulfame K

### Beta-Carotene
Beta-Carotene 10% DG, Beta-Carotene 20% DC/AF, Beta-Carotene 30%

### Lycopene
Lycopene 10% DC/AF, Lycopene 10% LF Liquid, Lycopene 10%

### Vitamins
Vitamin A Acetate, Vitamin A Palmitate, Thiamine Mononitrate (B1 Mono),
Thiamine HCl (B1 HCl), Riboflavin (B2), Niacinamide (B3), Pantothenic Acid (B5),
Vitamin E Acetate, Pyridoxine HCl (B6), Biotin (B7), Folic Acid (B9),
Cyanocobalamin (B12), Methylcobalamin (B12), Ascorbic Acid (C),
Vitamin D2/D3, Vitamin K

### Amino Acids
Acetyl L-Carnitine, L-Lysine Acetate, L-Glutamic Acid, L-Glutamine,
L-Glutathione Reduced, L-Cysteine HCl Monohydrate, N-Acetyl-L-Cysteine,
N-Acetyl-L-Tyrosine, L-Arginine, L-Tartrate, L-Glycine, L-Leucine, L-Carnitine,
L-Carnosine, L-Theanine

### Common Chemicals
Citric Acid Anhydrous, Citric Acid Monohydrate, Isopropyl Alcohol, Phosphoric Acid,
Acetone, Hydrochloric Acid, Sulphuric Acid

---

## 9. Component Inventory (reusable)

- `TopBar` — phone, email, location
- `Header` / `Navbar` — logo, nav links, CTA, mobile menu
- `Breadcrumb` — Home / current page
- `PageHero` — title + intro + optional image
- `SectionHeading` — eyebrow + title + subtitle
- `StatCounter` — animated count-up
- `FeatureCard` — icon + title + text
- `ProductCategoryCard` — icon/title + product chips
- `ProductChip` — small rounded tag
- `DirectorCard` — photo + name + title + bio
- `TestimonialCard` — quote + name + role + stars
- `FAQAccordion` — shadcn Accordion
- `CTABanner` — tagline + button
- `ContactCard` — icon + heading + content
- `InquiryForm` — shared between `/inquiry` and `/contact`
- `SocialLinks` — Facebook, Instagram, LinkedIn
- `Footer` — summary + links + contact + copyright
- `MapEmbed` — Google Maps iframe placeholder

---

## 10. Functional Requirements

- Fully responsive: mobile (375px), tablet (768px), desktop (1280px+)
- Sticky header with shrink/shadow on scroll
- Active nav item styling on each page
- Smooth scroll to anchors (Products jump nav)
- Animated stat counters on scroll into view
- Accordion FAQ (single-open or multi-open — either acceptable)
- Form validation (required fields, valid email, phone format)
- Form submit → simulated success message/toast
- All phone numbers `tel:` links; all emails `mailto:` links
- Accessible: semantic HTML, `aria-*` where needed, keyboard navigation,
  alt text on all images, focus-visible rings
- SEO: per-page `<title>` and `<meta description>`, Open Graph tags
- Placeholder social links (`#`) until real URLs provided

---

## 11. Copy Rules & Known Corrections

- Fix spelling errors from the source: **Excellence** (not "Excellance"),
  **Products** (not "Produtcs"), **Clients** (not "clints"), **Dedicated**
  (not "dedicate"), **Amino Acids** (not "Aminoacids").
- Standardize product names in Title Case.
- Use consistent phone formatting in the footer: `+91 93282 34921`,
  `+91 93280 69909`, `+91 92653 40900`.
- Keep brand name as "Saptam Pharmachem" in prose, "SAPTAM PHARMACHEM" in
  display/hero contexts.
- Do not invent certifications, licenses, client names, or claims beyond the
  content in this README.

---

## 12. Deliverables Checklist

- [ ] `/` Home page — all 9 sections
- [ ] `/about` About Us page — all 5 sections incl. 3 directors
- [ ] `/products` Products page — all 8 categories, full catalog, jump nav
- [ ] `/inquiry` Inquiry page — validated form
- [ ] `/contact` Contact page — 3 contact cards, form, social, map
- [ ] Shared `TopBar`, `Header`, `Footer`, `CTABanner` across all pages
- [ ] Mobile responsive on all breakpoints
- [ ] Working form validation + success state
- [ ] SEO metadata per page
- [ ] No typos; content matches this README

---

## 13. Out of Scope (phase 2)

- Real backend form submission / email delivery
- Real product detail pages or downloadable catalog PDFs
- CMS integration
- Authentication / customer portal
- Live chat
- Multi-language support

---

*This README is the single source of truth for AI tools building this site.
If a tool needs to make a decision not covered here, prefer consistency with
the existing brand, the teal/white palette, and the B2B pharma tone.*
This README gives any AI tool everything it needs in one file:

Section 2 — locked-in company facts so it doesn't hallucinate contact details

Section 4 — a concrete design system (exact hex codes, spacing, typography)

Section 5–6 — the full page map and section-by-section spec

Section 7–8 — verbatim content blocks and the complete product catalog

Section 11 — explicit copy corrections so typos don't propagate

Section 12 — a deliverables checklist the tool can self-verify against

Section 13 — scope boundaries
