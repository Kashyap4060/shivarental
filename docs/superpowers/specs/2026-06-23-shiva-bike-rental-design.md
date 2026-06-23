# Shiva Bike Rental — Design Specification

**Date:** 2026-06-23
**Status:** Approved
**Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS · Framer Motion

---

## 1. Business Context

- **Business name:** Shiva Bike Rental
- **Location:** Gokarna, Karnataka, India
- **Phone / WhatsApp:** +91 99865 96949
- **Booking model:** WhatsApp inquiry — no online payment, no database
- **Goal:** Generate rental inquiries and bookings via WhatsApp and phone calls

---

## 2. Architecture Decision

**Static Next.js (App Router) — no database, no CMS.**

- All vehicle data, pricing, reviews, and FAQs stored in TypeScript config files under `src/data/`
- Pages are statically generated at build time (`generateStaticParams` where needed)
- Adding a new vehicle = edit `src/data/vehicles.ts` + create a folder under `public/images/fleet/[slug]/`
- Deployed to Vercel (free tier sufficient)

---

## 3. Design System

### 3.1 Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#2563EB` | CTAs, links, active states, highlights |
| Deep Blue | `#1D4ED8` | Hover states, nav active |
| Near Black | `#0F172A` | Body text, nav background |
| White | `#FFFFFF` | Page background, card surfaces |
| Ice Blue | `#F0F9FF` | Section alternating background |
| Blue Tint | `#DBEAFE` | Badges, chips, vehicle type tags |
| Muted Text | `#64748B` | Secondary copy, specs, meta |
| Border | `#E2E8F0` | Card borders, dividers |
| WhatsApp | `#25D366` | WhatsApp buttons exclusively |
| Accent CTA | `#EA580C` | Urgency / promotional highlights |
| Destructive | `#DC2626` | Error states |

### 3.2 Typography

- **Heading font:** Poppins (weights: 600, 700, 800) — Google Fonts
- **Body font:** Inter (weights: 400, 500, 600) — Google Fonts
- **Type scale:** 12 / 14 / 16 / 18 / 20 / 24 / 32 / 40 / 48 / 64px
- **Line height:** 1.5 body, 1.1–1.2 headings
- **Price display:** `font-variant-numeric: tabular-nums` on all price figures
- **Minimum body size:** 16px (prevents iOS auto-zoom)

### 3.3 Spacing

4/8dp rhythm throughout. Section vertical padding: 64px desktop / 48px mobile.

### 3.4 Border Radius

- Cards: `rounded-2xl` (16px)
- Buttons: `rounded-xl` (12px)
- Inputs: `rounded-lg` (8px)
- Badges/chips: `rounded-full`

### 3.5 Shadows

- Card default: `shadow-sm`
- Card hover: `shadow-lg`
- Nav scrolled: `shadow-md`
- WhatsApp button: `0 4px 20px rgba(37,211,102,0.4)`

---

## 4. Image Strategy

### 4.1 Background Images

- **Source:** 14 Gokarna landscape JPEGs in `public/images/backgrounds/`
- **Hero:** Each page uses a specific assigned background image (index 0 = homepage hero, index 1 = fleet, etc.) — assignment defined in `src/data/images.ts`. No runtime randomness (avoids SSR hydration mismatch).
- **Rendering:** Next.js `<Image>` component with `fill` + `object-cover`, `priority` on hero
- **Overlay:** `bg-black/50` gradient overlay for text contrast on hero

### 4.2 Fleet Images

```
public/images/fleet/
  honda-activa/          ← owner drops honda-activa.jpg here
  tvs-jupiter/
  suzuki-access-125/
  royal-enfield-classic-350/
  ktm-duke-200/
  bajaj-pulsar-220/
```

- Each folder contains the vehicle's primary image (filename = `[slug].jpg` or `[slug].webp`)
- Fallback: blue gradient placeholder card if no image present
- Images are loaded via `src={/images/fleet/${vehicle.slug}/${vehicle.slug}.jpg}`

---

## 5. Data Configuration

### 5.1 Vehicle Schema (`src/data/vehicles.ts`)

```typescript
export interface Vehicle {
  slug: string          // matches folder name under public/images/fleet/
  name: string
  type: 'scooty' | 'bike'
  brand: string
  engine: string        // e.g. "110cc"
  mileage: string       // e.g. "45 km/l"
  priceDay: number      // in ₹
  priceWeek: number
  priceMonth: number
  deposit: number
  featured: boolean     // show on homepage Featured Vehicles section
  available: boolean
  description?: string
}
```

**Initial fleet (6 vehicles):**

| Slug | Name | Type | Price/Day |
|------|------|------|-----------|
| `honda-activa` | Honda Activa | Scooty | ₹299 |
| `tvs-jupiter` | TVS Jupiter | Scooty | ₹279 |
| `suzuki-access-125` | Suzuki Access 125 | Scooty | ₹319 |
| `royal-enfield-classic-350` | Royal Enfield Classic 350 | Bike | ₹799 |
| `ktm-duke-200` | KTM Duke 200 | Bike | ₹699 |
| `bajaj-pulsar-220` | Bajaj Pulsar 220 | Bike | ₹499 |

### 5.2 Other Data Files

- `src/data/reviews.ts` — customer testimonials (name, city, rating, text, date)
- `src/data/faqs.ts` — FAQ items (question, answer)
- `src/data/pricing.ts` — package descriptions (Daily/Weekly/Monthly)

---

## 6. Pages

### 6.1 Homepage (`/`)

Sections in order:

1. **Hero** — full-bleed Gokarna photo, dark overlay, centered headline + sub, Book Now + WhatsApp CTAs, floating search card below
2. **Search/Booking Widget** — Pickup location, Pickup date, Return date, Vehicle type (Scooty/Bike), Search button (scrolls to fleet)
3. **Featured Vehicles** — compact grid (2 cols mobile / 3 cols tablet / 3 cols desktop), `featured: true` vehicles only
4. **Why Choose Us** — 6 feature icons (Instant Booking, Affordable Pricing, Sanitized Vehicles, Roadside Assistance, Helmet Included, Flexible Plans) + "No Hidden Charges" trust badge
5. **Rental Packages** — 3 cards: Daily / Weekly (popular badge) / Monthly, price range, WhatsApp CTA on each
6. **Customer Reviews** — carousel (auto-scroll 4s), star ratings, name + city, swipe on mobile
7. **FAQ** — accordion with 4 initial questions, smooth expand/collapse animation
8. **Contact Section** — Google Maps embed (Gokarna), phone, WhatsApp link, email, address

### 6.2 Fleet Page (`/fleet`)

- Filter bar: Vehicle Type (All / Scooty / Bike), Brand (All / Honda / TVS / Suzuki / Royal Enfield / KTM / Bajaj), Price range
- Full vehicle catalog grid (same card style as homepage)
- Filters update visible cards client-side (no page reload)
- Each card: vehicle photo, name, type badge, engine, mileage, price/day, WhatsApp book button

### 6.3 Pricing Page (`/pricing`)

- Pricing table: rows = vehicles, columns = Daily / Weekly / Monthly / Deposit
- "No Hidden Charges" highlighted banner
- Deposit information section
- WhatsApp inquiry CTA

### 6.4 About Page (`/about`)

- Hero banner (Gokarna landscape)
- Company introduction
- Mission & vision
- Trust stats (e.g. 500+ happy customers, 6 vehicles, 5 years in Gokarna)
- Team section (optional — placeholders if no photos)

### 6.5 Contact Page (`/contact`)

- Inquiry form (Name, Phone, Email, Message, Vehicle Interest dropdown) — submits via WhatsApp deep link
- Phone + WhatsApp direct links
- Google Maps embed
- Address, working hours

---

## 7. Global Components

### 7.1 Navigation (Sticky)

- Desktop: Logo left, nav links center, "Book Now" button right
- Mobile: Logo left, hamburger right → slide-in drawer
- Behavior: transparent at top, `bg-white/95 backdrop-blur shadow-md` after 60px scroll
- Active link: underline + blue color

### 7.2 Floating WhatsApp Button

- Position: `fixed bottom-6 right-6 z-50`
- Style: 56px circle, WhatsApp green `#25D366`, WhatsApp icon (Lucide or SVG)
- Animation: scale pulse `1 → 1.08 → 1` on a 2s infinite loop
- On click: opens `https://wa.me/919986596949?text=Hi%2C%20I%27m%20interested%20in%20renting%20a%20bike%2Fscooty.%20Please%20share%20the%20available%20options.`
- Visible on ALL pages

### 7.3 Mobile Sticky "Book Now" Bar

- Position: `fixed bottom-0 left-0 right-0 z-40` — visible only on mobile (`md:hidden`)
- Contains: "Book Now" (blue, links to `/fleet`) + WhatsApp icon button
- Adds `pb-20` to page content to avoid overlap
- Hides when floating WhatsApp button would overlap (staggered positioning)

### 7.4 Footer

- Logo + tagline
- Page links (Home, Fleet, Pricing, About, Contact)
- Contact info (phone, WhatsApp, address, email — placeholder used until owner provides real email)
- Copyright

### 7.5 Vehicle Card (Compact)

- White card, `rounded-2xl`, `shadow-sm hover:shadow-lg`
- Top: vehicle photo from `public/images/fleet/[slug]/[slug].jpg` (Next.js Image, `aspect-[4/3]`)
- Blue gradient placeholder if image missing
- Type badge (Scooty = blue, Bike = purple)
- Vehicle name (Poppins semibold)
- Engine + mileage (small muted text)
- Price per day (large tabular numeral)
- "Book via WhatsApp" button (green, full-width)
- Hover: `translateY(-4px)` + deeper shadow (200ms ease-out)

---

## 8. WhatsApp Integration

All booking flows use WhatsApp deep links — no form submission to a server.

**Base URL:** `https://wa.me/919986596949`

**Default message:** `Hi, I'm interested in renting a bike/scooty. Please share the available options.`

**Vehicle-specific message:** `Hi, I'd like to book the [Vehicle Name]. Please let me know the availability and confirm my booking.`

**Contact form:** On submit, constructs a WhatsApp message from form fields and opens `wa.me` link in new tab.

---

## 9. SEO

- `metadata` export on every page (title, description, keywords)
- Open Graph tags for social sharing
- `next-sitemap` for `sitemap.xml` and `robots.txt`
- Canonical URLs
- Structured data (LocalBusiness JSON-LD) on homepage and contact page
- Page titles follow pattern: `[Page] | Shiva Bike Rental — Gokarna`

---

## 10. Animations (Framer Motion)

All animations wrapped with `useReducedMotion()` — static fallback when user prefers reduced motion.

| Element | Animation | Duration |
|---------|-----------|----------|
| Hero headline | Fade up + stagger words | 600ms ease-out |
| Hero background | Ken Burns slow zoom (transform scale only) | 20s linear loop |
| Section entrance | Fade + translateY(20px→0) | 500ms ease-out |
| Vehicle cards | Stagger fade up (30ms between each) | 400ms ease-out |
| Vehicle card hover | translateY(-4px) + shadow | 200ms ease-out |
| Why-choose-us icons | Scale 0.8→1 + fade, staggered | 350ms spring |
| FAQ accordion | Height expand + opacity | 250ms ease-out |
| Reviews carousel | Slide horizontal | 300ms ease-out |
| WhatsApp button | Scale pulse (1→1.08→1) | 2s infinite |
| Nav background | Blur + shadow on scroll | 200ms linear |

---

## 11. UX Constraints

- Touch targets: minimum 44×44px on all interactive elements
- No hover-only interactions — all work via click/tap
- No horizontal scroll on any viewport
- Minimum 16px body text (prevents iOS auto-zoom)
- WCAG AA contrast: `#2563EB` on white = 5.9:1 ✓, white on `#0F172A` = 16.7:1 ✓
- SVG icons via Lucide React — no emoji as UI elements
- `scroll-behavior: smooth` on `<html>`
- `touch-action: manipulation` on buttons (removes 300ms tap delay)

---

## 12. File Structure

```
src/
  app/
    layout.tsx              ← root layout (Nav, Footer, WhatsApp button, fonts)
    page.tsx                ← Homepage
    fleet/page.tsx
    pricing/page.tsx
    about/page.tsx
    contact/page.tsx
    globals.css
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      WhatsAppButton.tsx
      MobileBookingBar.tsx
    home/
      HeroSection.tsx
      SearchWidget.tsx
      FeaturedVehicles.tsx
      WhyChooseUs.tsx
      RentalPackages.tsx
      ReviewsCarousel.tsx
      FAQSection.tsx
      ContactSection.tsx
    fleet/
      FleetGrid.tsx
      FleetFilters.tsx
    shared/
      VehicleCard.tsx
      SectionHeader.tsx
      WhatsAppButton.tsx    ← reusable WhatsApp CTA button variant
  data/
    vehicles.ts
    reviews.ts
    faqs.ts
    pricing.ts
  lib/
    whatsapp.ts             ← WhatsApp URL builder utility
    images.ts               ← image path helpers
public/
  images/
    backgrounds/            ← 14 Gokarna landscape JPEGs (existing)
    fleet/
      honda-activa/
      tvs-jupiter/
      suzuki-access-125/
      royal-enfield-classic-350/
      ktm-duke-200/
      bajaj-pulsar-220/
```

---

## 13. Out of Scope (v1)

- Admin panel / CMS
- Online payments
- User accounts / login
- Booking confirmation emails
- Real-time availability tracking
- Database of any kind
