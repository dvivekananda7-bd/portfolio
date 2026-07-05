# Premium Interactive Portfolio Website — Design Spec

Date: 2026-07-06

## Summary

Convert Vivekananda Das's Canva portfolio + resume into a premium, cinematic,
agency-grade personal website. Single-person practice spanning two threads:
communications/campaign strategy (UNDP Futurenation, legal-sector work) and
independent filmmaking (short films, commercial production, content channel).
The site presents these as one coherent creative-professional story, not two
separate portfolios.

## Source of truth for content

- Canva portfolio (24 slides, scraped 2026-07-06): bio, education, co-curricular,
  cinematography narrative, project descriptions (Prologue, Jolpai Ronger Adhar,
  Books and More), PRAN-RFL commercial credits, contact info.
- Resume text supplied directly by user in chat (2026-07-06): 6 work experience
  entries with bullets/achievements (UNDP, TNY Legal, Amit & Associates, BILIA,
  NCSC, PRAN-RFL).
- Corrections supplied by user after first content-mapping draft (see "Content
  decisions" below) — these override anything inferred from the raw scrape.

## Tech stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion (component-level reveals/transitions)
- GSAP + ScrollTrigger (scroll-driven cinematic effects: parallax, pinned
  sections, mask reveals)
- Lenis (smooth scroll), coordinated with GSAP/Framer via one `ScrollProvider`
- Shadcn UI primitives where useful (forms, dialogs) — most UI is custom to hit
  the editorial/cinematic look
- Lucide icons
- Deployed as a standard Next.js app; no custom backend — contact form links out
  to an existing Google Form

Node.js is not currently installed on the build machine; installing it is the
first implementation step.

## Content architecture

All real copy lives in typed content files under `src/content/` (e.g.
`experience.ts`, `projects.ts`, `expertise.ts`, `achievements.ts`,
`testimonials.ts`, `site.ts`). Components read from these files — no copy
hardcoded into JSX. This keeps future edits (e.g. swapping in real
testimonials) a data change, not a code change.

## Routing

- `/` — single scrolling home containing all sections below
- `/work/[slug]` — one page per flagship project (7 total), statically
  generated via `generateStaticParams`
- Standard Next.js metadata API for per-page SEO, OG tags, JSON-LD

## Content decisions (final, as confirmed by user)

### Hero
Headline: "Vivekananda Das — Communications Strategist & Filmmaker." Subline
frames campaigns/storytelling across institutions and screens. No mention of
law background here. CTAs: "View Portfolio" (scrolls to Work), "Let's Talk"
(scrolls to Contact). Mouse scroll indicator.

### About
Bio centers the communications/content journey (5+ years building campaigns,
mentorship programs, stories for international organizations) alongside the
independent filmmaking practice. Law degree is factual-only, kept out of the
About narrative — it may appear in a quiet Education strip (LL.B./LL.M.,
Dhaka University; Amrita Lal College; Udayan Secondary School) but is not
framed as an "unconventional pivot" story anywhere on the site.
Core values: creativity, precision, storytelling that travels across formats.

### Experience (reverse-chronological, exact order confirmed by user)
1. UNDP Futurenation — Volunteer Management Associate (01/08/2024–05/11/2024)
2. TNY Legal Bangladesh Ltd — Junior Lawyer/Admin (03/07/2022–31/07/2024)
3. Amit & Associates — Junior Associate (02/01/2022–30/06/2022)
4. BILIA — Research Assistant (Internship) (01/06/2019–27/02/2020)
5. NCSC — Legal Aid Intern (04/02/2018–30/06/2019)
6. PRAN-RFL Group — Assistant Director (earliest; exact end date not given)

Each card expands on hover to reveal the full bullet list + achievement line
supplied by the user for that role. Dates as given by the user; if any prove
inconsistent when the user reviews the live site, dates are a content-file
edit, not a rebuild.

### "Where I've Worked" strip (new section, distinct from flagship projects)
A credibility band (logos/wordmarks) for UNDP, BILIA, TNY Legal, Amit &
Associates, NCSC, PRAN-RFL — gives weight to the legal/institutional side
without needing full case studies for each.

### Featured Work — 7 flagship project pages
1. Futurenation Mentorship Campaign (UNDP) — assets/links to be supplied by user
2. Futurenation Impact Stories (UNDP) — assets/links to be supplied by user
3. Futurenation Course/LMS Production (UNDP) — assets/links to be supplied by user
4. Prologue (short film) — content already gathered: Kafka's Metamorphosis
   influence, COVID-era grad-student narrative, Tareq Shahriar best indie
   short film nomination, official screenings at Serbia International Film
   Festival, JIFF, IIUSFF
5. Jolpai Ronger Adhar (short film) — psycho-drama; user's roles: scriptwriter,
   assistant director, editor
6. PRAN-RFL Commercial Campaigns — Assistant Director role; 50+ nationwide
   brand/advertising campaigns (VISION, RFL, PRAN sub-brands, Wonder Cake,
   Good Luck Stationery, etc.)
7. Books and More (content channel) — book-content YouTube channel since 2023
   ("Books and More with Athai"); content pillars: book review, storytelling,
   facts and fictions, "Koto Ojana Re", book cafe review, interviews,
   geopolitics and maps, daily vlogs, shorts

Each project page: Hero Image, Overview, Challenge, Process, Outcome, Gallery,
Videos (where available), Deliverables, Client, Tools Used, Related Projects,
Next Project navigation — per the original brief. Where Futurenation asset
links aren't yet supplied, the page ships with the real text content already
known and a clearly marked placeholder region for media, not fabricated
imagery.

### Expertise (exact list confirmed by user)
Communications, Content Strategy, Creative Direction, Brand Storytelling,
Cinematography, Campaign Design, Video Editing, Motion Graphics, Photography,
Social Media, Digital Marketing & Social Advocacy, Content Marketing, Content
Creation, Brand Collaboration. Displayed as an elegant tag/grid treatment, not
progress bars. Software list (Premiere, Photoshop, Illustrator, Canva,
CapCut, DaVinci Resolve, MS Office) shown separately as tools, not skills.

### Services
Content Strategy, Creative Consulting, Communication Design, Video Production,
Brand Identity, Photography, Campaign Design, Training Materials, Digital
Storytelling — per original brief, all defensible against actual work history.

### Achievements (animated stats)
From UNDP: 600+ international mentors, 101 countries, 200K+ students reached,
100+ stories produced, 50+ workshops.
From filmmaking/creative practice: festival selections for Prologue (3:
Serbia International Film Festival, JIFF, IIUSFF), Books and More channel
(3.6K+ subscribers, individual videos reaching 160K+ views), social handles
mentioned as reach indicators (Instagram, Facebook).

### Testimonials
3 clearly-editable demo quotes for initial launch, attributed to Nishita
Sanaul, Athai Das, and Jyotish Talukder (3 of the 5 names the user provided;
Nafiz Reza and Debashis Roy held in reserve for the user to add later). Quote
content themes: creativity, professionalism, attention to detail, delivering
under pressure/deadlines — tied to Futurenation/UNDP and production work
contexts. Each quote is marked in the content file with a comment noting it's
a placeholder for the user to replace with the real quote text.

### Contact / Footer
- Email: dvivekananda7@gmail.com
- Facebook: https://www.facebook.com/vivek.anup.7
- LinkedIn: https://www.linkedin.com/in/vivekananda7
- Instagram: https://www.instagram.com/vivek_ananda_das/
- Contact form CTA links out to Google Form: https://forms.gle/85t4kde6rDfahAPa9
- Location: Dhaka, Bangladesh
- Floating contact button per original brief

## Visual system

- Background #0A0A0A, cards #141414, primary text #FFFFFF, secondary text
  #A8A8A8, accent #FF6B35, borders rgba(255,255,255,0.08). No gradients unless
  subtle.
- Headings: General Sans or Satoshi; body: Inter. Large bold editorial
  typography, generous whitespace.
- Motion language: smooth scroll (Lenis), parallax, fade-in, scale, image
  reveal, text reveal, mask reveal, sticky/pinned sections, stagger — all
  restrained and purposeful, never gratuitous. Reduced-motion media query
  respected throughout.

## Images/assets

Per user's choice, initial pass pulls what's usable from the Canva design and
linked YouTube video thumbnails (already identified during scraping: Prologue,
Jolpai Ronger Adhar, Books and More videos, PRAN-RFL TVC videos). Futurenation
project assets are pending links from the user. Where no usable image exists,
sections ship with a clearly-marked placeholder rather than a fabricated stock
photo.

## Non-functional requirements

- SEO: per-page metadata, Open Graph, Twitter Cards, JSON-LD, robots.txt,
  sitemap.xml, image optimization, lazy loading. Target 95+ Lighthouse.
- Accessibility: keyboard navigation, ARIA labels, semantic HTML, proper
  contrast against the dark palette, screen-reader support, reduced-motion
  support.
- Responsive: desktop-first with a fully considered tablet and mobile
  experience; animations scaled back/simplified on mobile for performance.

## Out of scope for this build

- Custom backend/email server for the contact form (using the existing Google
  Form instead)
- CMS/admin UI for editing content (content files are the editing surface)
- Real testimonial quotes beyond the 3 demo placeholders (user will supply
  later)
- Full case-study assets for the 3 Futurenation projects until the user
  supplies links/media
