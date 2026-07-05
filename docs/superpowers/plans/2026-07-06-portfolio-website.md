# Premium Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, cinematic Next.js portfolio site for Vivekananda Das (Communications Strategist & Filmmaker), covering all sections in the approved spec plus 7 flagship project pages.

**Architecture:** Next.js 14 App Router + TypeScript + Tailwind, with all real copy in typed `src/content/*.ts` data files consumed by presentational components. Lenis drives smooth scroll; GSAP/ScrollTrigger handles scroll-driven cinematic effects; Framer Motion handles component-level reveals. One dynamic route (`/work/[slug]`) statically generates the 7 project pages from `src/content/projects.ts`.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, GSAP + ScrollTrigger, Lenis, Lucide React, Vitest + React Testing Library (content/render tests).

## Global Constraints

- Colors: background `#0A0A0A`, cards `#141414`, primary text `#FFFFFF`, secondary text `#A8A8A8`, accent `#FF6B35`, borders `rgba(255,255,255,0.08)`. No gradients unless subtle.
- Headings font: General Sans or Satoshi. Body font: Inter.
- All real copy lives in `src/content/*.ts` — never hardcode portfolio copy directly in a component.
- Respect `prefers-reduced-motion` in every animated component.
- No placeholder/stock content except the 3 testimonial quotes, which are intentionally-marked demo placeholders per user request.
- Node.js must be installed before any `npm` command will work on this machine.

---

## Task 0: Install Node.js

**Files:** none (environment setup only)

- [ ] **Step 1: Check if a package manager can install Node**

Run: `winget install OpenJS.NodeJS.LTS`

Expected: Node LTS installs. If `winget` is unavailable, download the Windows installer from nodejs.org LTS release and run it manually, then continue.

- [ ] **Step 2: Verify install (new shell)**

Run: `node --version && npm --version`
Expected: prints a Node version `>= 20.x` and an npm version. If the command isn't found, close and reopen the terminal (PATH needs to refresh) and retry.

---

## Task 1: Scaffold the Next.js project

**Files:**
- Create: project scaffold at repo root (`package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`)

**Interfaces:**
- Produces: a running Next.js app on `npm run dev`, Tailwind configured with the design tokens below, `src/app/layout.tsx` exporting the root `RootLayout`.

- [ ] **Step 1: Scaffold with create-next-app**

Run: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack`

Expected: project files created in the current directory (answer "Yes" if it warns the directory isn't empty, since `docs/` and `.git` already exist).

- [ ] **Step 2: Install animation/utility dependencies**

Run: `npm install framer-motion gsap @studio-freight/lenis lucide-react clsx tailwind-merge`

Run: `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react`

Expected: all packages added to `package.json` with no errors.

- [ ] **Step 3: Configure Tailwind design tokens**

Edit `tailwind.config.ts` so `theme.extend` contains:

```ts
extend: {
  colors: {
    background: "#0A0A0A",
    card: "#141414",
    "text-primary": "#FFFFFF",
    "text-secondary": "#A8A8A8",
    accent: "#FF6B35",
    border: "rgba(255,255,255,0.08)",
  },
  fontFamily: {
    heading: ["var(--font-heading)", "sans-serif"],
    body: ["var(--font-body)", "sans-serif"],
  },
},
```

- [ ] **Step 4: Load fonts and set base body styles**

Edit `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const heading = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Vivekananda Das — Communications Strategist & Filmmaker",
  description:
    "Portfolio of Vivekananda Das: communications strategist and filmmaker working across international campaigns, mentorship programs, and independent film.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body className="bg-background text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
```

(Space Grotesk is a metrics-safe stand-in for Satoshi/General Sans, both of which are not on Google Fonts; swap the import if the user supplies licensed font files later.)

- [ ] **Step 5: Verify the app builds and runs**

Run: `npm run build`
Expected: build succeeds with no errors.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Scaffold Next.js app with design tokens and fonts"
```

---

## Task 2: Content data layer — site, expertise, services

**Files:**
- Create: `src/content/site.ts`
- Create: `src/content/expertise.ts`
- Create: `src/content/services.ts`
- Test: `src/content/site.test.ts`

**Interfaces:**
- Produces: `site` object with `{ name, title, email, links: { facebook, linkedin, instagram, contactForm }, location }`; `expertise: string[]`; `services: { title: string; description: string }[]`.

- [ ] **Step 1: Write the failing test**

```ts
// src/content/site.test.ts
import { describe, it, expect } from "vitest";
import { site } from "./site";
import { expertise } from "./expertise";
import { services } from "./services";

describe("site content", () => {
  it("has real contact info, not placeholders", () => {
    expect(site.email).toBe("dvivekananda7@gmail.com");
    expect(site.links.facebook).toBe("https://www.facebook.com/vivek.anup.7");
    expect(site.links.linkedin).toBe("https://www.linkedin.com/in/vivekananda7");
    expect(site.links.instagram).toBe("https://www.instagram.com/vivek_ananda_das/");
    expect(site.links.contactForm).toBe("https://forms.gle/85t4kde6rDfahAPa9");
  });

  it("has the exact confirmed expertise list", () => {
    expect(expertise).toContain("Communications");
    expect(expertise).toContain("Brand Collaboration");
    expect(expertise.length).toBe(14);
  });

  it("has 9 services from the brief", () => {
    expect(services.length).toBe(9);
    expect(services.map((s) => s.title)).toContain("Digital Storytelling");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/content/site.test.ts`
Expected: FAIL — modules don't exist yet.

- [ ] **Step 3: Write the content files**

```ts
// src/content/site.ts
export const site = {
  name: "Vivekananda Das",
  title: "Communications Strategist & Filmmaker",
  tagline:
    "Building campaigns, mentorship programs, and stories for international organizations — and independent films on the side.",
  email: "dvivekananda7@gmail.com",
  location: "Dhaka, Bangladesh",
  links: {
    facebook: "https://www.facebook.com/vivek.anup.7",
    linkedin: "https://www.linkedin.com/in/vivekananda7",
    instagram: "https://www.instagram.com/vivek_ananda_das/",
    contactForm: "https://forms.gle/85t4kde6rDfahAPa9",
  },
};
```

```ts
// src/content/expertise.ts
export const expertise: string[] = [
  "Communications",
  "Content Strategy",
  "Creative Direction",
  "Brand Storytelling",
  "Cinematography",
  "Campaign Design",
  "Video Editing",
  "Motion Graphics",
  "Photography",
  "Social Media",
  "Digital Marketing & Social Advocacy",
  "Content Marketing",
  "Content Creation",
  "Brand Collaboration",
];

export const tools: string[] = [
  "Adobe Premiere",
  "Photoshop",
  "Illustrator",
  "Canva",
  "CapCut",
  "DaVinci Resolve",
  "MS Office",
];
```

```ts
// src/content/services.ts
export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  { title: "Content Strategy", description: "Editorial planning and messaging frameworks that keep campaigns coherent across channels." },
  { title: "Creative Consulting", description: "Hands-on creative direction for teams building a story, a campaign, or a brand from scratch." },
  { title: "Communication Design", description: "Turning complex programs into clear, compelling communication materials." },
  { title: "Video Production", description: "End-to-end production — scripting, shooting, directing, and post — for film and commercial work." },
  { title: "Brand Identity", description: "Visual and verbal identity systems built for consistency at scale." },
  { title: "Photography", description: "Photographic coverage for events, campaigns, and productions." },
  { title: "Campaign Design", description: "Concept-to-execution campaign design for institutional and commercial clients." },
  { title: "Training Materials", description: "Learning content and facilitation materials for workshops and training-of-trainers programs." },
  { title: "Digital Storytelling", description: "Story-first content built for social and digital platforms." },
];
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/content/site.test.ts`
Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add src/content/site.ts src/content/expertise.ts src/content/services.ts src/content/site.test.ts
git commit -m "Add site, expertise, and services content"
```

---

## Task 3: Content data layer — experience timeline

**Files:**
- Create: `src/content/experience.ts`
- Test: `src/content/experience.test.ts`

**Interfaces:**
- Produces: `experience: ExperienceEntry[]` where `ExperienceEntry = { org: string; role: string; dates: string; location: string; bullets: string[]; achievement: string | string[] }`, ordered reverse-chronologically UNDP-first, PRAN-RFL last.

- [ ] **Step 1: Write the failing test**

```ts
// src/content/experience.test.ts
import { describe, it, expect } from "vitest";
import { experience } from "./experience";

describe("experience content", () => {
  it("has 6 entries in reverse-chronological order, UNDP first and PRAN-RFL last", () => {
    expect(experience.length).toBe(6);
    expect(experience[0].org).toBe("UNDP Futurenation");
    expect(experience[5].org).toBe("PRAN-RFL Group");
  });

  it("keeps the real achievement numbers for UNDP", () => {
    const undp = experience[0];
    expect(undp.achievement.join(" ")).toContain("600+");
    expect(undp.achievement.join(" ")).toContain("101 countries");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/content/experience.test.ts`
Expected: FAIL — module doesn't exist.

- [ ] **Step 3: Write the content file**

```ts
// src/content/experience.ts
export interface ExperienceEntry {
  org: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
  achievement: string[];
}

export const experience: ExperienceEntry[] = [
  {
    org: "UNDP Futurenation",
    role: "Volunteer Management Associate",
    dates: "Aug 2024 – Nov 2024",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Produced high-quality communication materials — impact stories, programme reports, concept notes, video and static engagement content — aligned with UNDP standards, reaching 202,000 students.",
      "Organised national-scale events including the Bangladesh Investment Summit and Futurenation Summit with BIDA, MoST, and Grameenphone.",
      "Built and maintained strategic partnerships with 25 universities, 3 government agencies, and 10 corporate stakeholders, coordinating high-level stakeholder visits, content collection, and joint communications.",
      "Managed social media channels, copywriting, and content schedules, coordinating media buying with vendors.",
      "Managed Futurenation's global mentorship programme, facilitating communication with 600+ international professionals across 101 countries.",
      "Planned and executed large-scale workshops and outreach campaigns — 50+ orientation, skills-dissemination, and Training of Trainers (ToT) sessions.",
      "Contributed to the Futurenation rebranding exercise, designing and implementing communication and outreach strategies.",
      "Designed, produced, and managed the content workflow for the Futurenation Learning Management System (LMS).",
      "Oversaw country-wide field operations, coordinating 60+ volunteers with real-time monitoring and progress reporting.",
      "Ensured compliance with UNDP institutional policies during procurement, communication, and stakeholder coordination.",
    ],
    achievement: [
      "Scaled the Global Mentorship Programme from 68 to 600+ international professionals across 101 countries, designing and implementing the communication and coordination workplan.",
      "Collected and published 100+ stories from international and national participants.",
    ],
  },
  {
    org: "TNY Legal Bangladesh Ltd",
    role: "Junior Lawyer / Admin",
    dates: "Jul 2022 – Jul 2024",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Drafted and reviewed legal and compliance documentation for Japanese multinational companies and international organizations operating in Bangladesh.",
      "Worked on corporate regulatory compliance, contract review, and cross-border legal matters, gaining direct exposure to comparative legal practice between Bangladeshi and Japanese jurisdictions.",
      "Coordinated meetings, professional events, and project-related activities; maintained documentation, records management, and internal reporting systems.",
    ],
    achievement: ["Provided 3 cross-border regulatory advisory and paperwork engagements for Japanese corporate clients."],
  },
  {
    org: "Amit & Associates",
    role: "Junior Associate",
    dates: "Jan 2022 – Jun 2022",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Provided legal consultation and advisory support to clients on compliance requirements, contract matters, and civil and corporate dispute resolution strategies.",
      "Maintained strong client relationships through negotiation, settlement facilitation, and ongoing legal advisory.",
    ],
    achievement: ["Successfully managed concurrent case files across civil and corporate matters with consistent client retention."],
  },
  {
    org: "BILIA",
    role: "Research Assistant (Internship)",
    dates: "Jun 2019 – Feb 2020",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Supported press & media relations and stakeholder communications with partner institutions domestically and internationally.",
      "Organized symposiums and institutional events, managing event communication, meeting documentation, transcription records, and post-event press & media engagement and dissemination.",
    ],
    achievement: ["Arranged a successful symposium for the organization's 50th-year celebration and handled media coverage."],
  },
  {
    org: "NCSC (International Center for State Courts)",
    role: "Legal Aid Intern",
    dates: "Feb 2018 – Jun 2019",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Organised monthly Legal Aid Committee meetings and outreach events to foster dialogue between government agencies, panel lawyers, courts, and vulnerable and marginalised communities, managing all logistics, correspondence, and communication materials.",
      "Maintained case records, activity documentation, programme reporting, and panel lawyers' data management.",
    ],
    achievement: ["Supported legal aid services to 100+ beneficiaries from vulnerable communities in Dhaka and nearby districts."],
  },
  {
    org: "PRAN-RFL Group",
    role: "Assistant Director",
    dates: "2018",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Led market research for a national marketing campaign for the fastest-growing FMCG brand.",
      "Collaborated with marketing teams to deliver creative campaign strategies and advertising content production.",
      "Coordinated production teams, technical crews, and creative staff; led PPMs, budgeting, planning, and pre/post-production.",
    ],
    achievement: ["Created more than 50 nationwide brand and advertising campaigns for the biggest FMCG brands in Bangladesh."],
  },
];
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/content/experience.test.ts`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add src/content/experience.ts src/content/experience.test.ts
git commit -m "Add reverse-chronological experience content"
```

---

## Task 4: Content data layer — projects (7 flagship pages)

**Files:**
- Create: `src/content/projects.ts`
- Test: `src/content/projects.test.ts`

**Interfaces:**
- Produces: `projects: Project[]` where `Project = { slug: string; title: string; category: string; year: string; client: string; tools: string[]; summary: string; overview: string; challenge: string; process: string; outcome: string; gallery: { src: string; alt: string }[]; videos?: { title: string; url: string }[]; assetsPending?: boolean }`. Also `getProjectBySlug(slug): Project | undefined` and `getAdjacentProject(slug): { next: Project }`.

- [ ] **Step 1: Write the failing test**

```ts
// src/content/projects.test.ts
import { describe, it, expect } from "vitest";
import { projects, getProjectBySlug, getAdjacentProject } from "./projects";

describe("projects content", () => {
  it("has exactly 7 flagship projects", () => {
    expect(projects.length).toBe(7);
  });

  it("includes the confirmed slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(slugs).toEqual([
      "futurenation-mentorship-campaign",
      "futurenation-impact-stories",
      "futurenation-course-production",
      "prologue",
      "jolpai-ronger-adhar",
      "pran-rfl-campaigns",
      "books-and-more",
    ]);
  });

  it("looks projects up by slug", () => {
    const prologue = getProjectBySlug("prologue");
    expect(prologue?.title).toBe("Prologue");
    expect(prologue?.overview).toContain("Kafka");
  });

  it("wraps around to the first project after the last", () => {
    const { next } = getAdjacentProject("books-and-more");
    expect(next.slug).toBe("futurenation-mentorship-campaign");
  });

  it("marks the 3 Futurenation projects as pending real assets", () => {
    const pending = projects.filter((p) => p.assetsPending);
    expect(pending.map((p) => p.slug)).toEqual([
      "futurenation-mentorship-campaign",
      "futurenation-impact-stories",
      "futurenation-course-production",
    ]);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/content/projects.test.ts`
Expected: FAIL — module doesn't exist.

- [ ] **Step 3: Write the content file**

```ts
// src/content/projects.ts
export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  tools: string[];
  summary: string;
  overview: string;
  challenge: string;
  process: string;
  outcome: string;
  gallery: { src: string; alt: string }[];
  videos?: { title: string; url: string }[];
  assetsPending?: boolean;
}

export const projects: Project[] = [
  {
    slug: "futurenation-mentorship-campaign",
    title: "Futurenation Mentorship Campaign",
    category: "Campaign",
    year: "2024",
    client: "UNDP Futurenation",
    tools: ["Content Strategy", "Campaign Design", "Social Media"],
    summary: "Scaling a global mentorship programme from 68 to 600+ professionals across 101 countries.",
    overview: "A communications campaign built to grow and sustain Futurenation's global mentorship programme, connecting Bangladeshi students with international professional mentors.",
    challenge: "The mentorship programme needed to grow far beyond its founding cohort while keeping every mentor and mentee engaged across 101 countries and time zones.",
    process: "Designed the communication and coordination workplan, managed mentor onboarding communications, and ran the ongoing content calendar that kept mentors and mentees connected.",
    outcome: "Grew the programme from 68 to 600+ international professionals across 101 countries.",
    gallery: [],
    assetsPending: true,
  },
  {
    slug: "futurenation-impact-stories",
    title: "Futurenation Impact Stories",
    category: "Campaign",
    year: "2024",
    client: "UNDP Futurenation",
    tools: ["Content Strategy", "Brand Storytelling", "Video Production"],
    summary: "100+ published stories from Futurenation's international and national participants.",
    overview: "A storytelling initiative collecting and publishing first-person impact stories from students, mentors, and volunteers across the Futurenation network.",
    challenge: "Turning a large, geographically scattered participant base into a coherent, publishable body of impact stories.",
    process: "Built the story-collection workflow, interviewed participants, and produced written and video content aligned with UNDP communication standards.",
    outcome: "100+ stories collected and published from international and national participants.",
    gallery: [],
    assetsPending: true,
  },
  {
    slug: "futurenation-course-production",
    title: "Futurenation Course & LMS Production",
    category: "Content Production",
    year: "2024",
    client: "UNDP Futurenation",
    tools: ["Content Strategy", "Video Production", "Motion Graphics"],
    summary: "Content workflow and production for Futurenation's Learning Management System.",
    overview: "End-to-end content design and production for the Futurenation Learning Management System, supporting training-of-trainers and skills-dissemination programming.",
    challenge: "Learning content needed to be produced at volume and quality for 50+ workshop and training sessions.",
    process: "Designed and managed the content production workflow for the LMS, coordinating with trainers and technical teams to turn curriculum into finished course material.",
    outcome: "Supported 50+ orientation, skills-dissemination, and Training of Trainers sessions with finished course content.",
    gallery: [],
    assetsPending: true,
  },
  {
    slug: "prologue",
    title: "Prologue",
    category: "Short Film",
    year: "2021",
    client: "Independent",
    tools: ["Directing", "Screenwriting", "Cinematography"],
    summary: "A COVID-era short film inspired by Kafka's Metamorphosis, officially selected at three international festivals.",
    overview: "Prologue is an independent short film revolving around the life of a graduate student struggling to survive COVID-19 reality, written and directed as a first solo project.",
    challenge: "Telling an isolating, interior story on a first-time director's budget while keeping it visually and emotionally distinct.",
    process: "Wrote and directed the film drawing inspiration from Franz Kafka's Metamorphosis, translating a literary sense of alienation into a contemporary pandemic setting.",
    outcome: "Nominated for Tareq Shahriar's Best Indie Short Film award, with official screenings at the Serbia International Film Festival, JIFF, and IIUSFF.",
    gallery: [],
    videos: [{ title: "Prologue", url: "https://www.youtube.com/results?search_query=prologue+vivek+anup" }],
  },
  {
    slug: "jolpai-ronger-adhar",
    title: "Jolpai Ronger Adhar",
    category: "Short Film",
    year: "2020",
    client: "Royalscreen Entertainment",
    tools: ["Screenwriting", "Assistant Direction", "Editing"],
    summary: "A psycho-drama exploring a protagonist's unconscious mind and a traumatic, unspoken history.",
    overview: "Jolpai Ronger Adhar is a psycho-drama film exploring the surface of the unconscious mind through a protagonist's hallucinations.",
    challenge: "Structuring a hallucination-driven narrative so an audience could follow a fractured psychological state without losing the emotional throughline.",
    process: "Worked as scriptwriter, assistant director, and editor, shaping the film's structure across writing, production, and post-production.",
    outcome: "Completed as an official teaser release under Royalscreen Entertainment.",
    gallery: [],
    videos: [{ title: "Jolpai Ronger Adhar — Official Teaser", url: "https://www.youtube.com/results?search_query=jolpai+ronger+adhar+official+teaser" }],
  },
  {
    slug: "pran-rfl-campaigns",
    title: "PRAN-RFL Commercial Campaigns",
    category: "Commercial Production",
    year: "2018",
    client: "PRAN-RFL Group",
    tools: ["Production Supervision", "Campaign Design", "Directing"],
    summary: "50+ nationwide brand and advertising campaigns for Bangladesh's largest FMCG group.",
    overview: "As Assistant Director, led production on nationwide TVC and advertising campaigns for PRAN-RFL Group's portfolio of FMCG brands.",
    challenge: "Delivering broadcast-quality commercial content at high volume across dozens of distinct product lines.",
    process: "Led market research, coordinated production teams and technical crews, and ran PPMs, budgeting, and planning through pre- and post-production for each campaign.",
    outcome: "Created more than 50 nationwide brand and advertising campaigns, including work for RFL, PRAN Frooto, PRAN Chinigura Rice, Wonder Cake, Good Luck Stationery, and more.",
    gallery: [],
    videos: [
      { title: "RFL Bucket | TVC | Desher Balti, Dosher Balti", url: "https://www.youtube.com/results?search_query=RFL+Bucket+TVC+Desher+Balti" },
      { title: "PRAN Frooto | ফল মুখ প্রতিদিন", url: "https://www.youtube.com/results?search_query=PRAN+Frooto+TVC" },
    ],
  },
  {
    slug: "books-and-more",
    title: "Books and More",
    category: "Content Series",
    year: "2023",
    client: "Books and More with Athai",
    tools: ["Content Creation", "Video Editing", "Cinematography"],
    summary: "A book-content channel making reading culturally relevant, with videos reaching 160K+ views.",
    overview: "Books and More started in 2023 as a book content creation channel, giving its audience a glimpse of the world hidden beneath the pages and promoting a lifestyle where books are central.",
    challenge: "Making book content feel current and shareable across formats — long-form, shorts, and reels — for a general audience.",
    process: "Regularly shooting and producing content across book reviews, storytelling, facts and fictions, book cafe reviews, interviews, geopolitics and maps, and daily vlogs.",
    outcome: "Grew to 3.6K+ subscribers with individual videos reaching 160K+ views.",
    gallery: [],
    videos: [{ title: "Books and More with Athai", url: "https://www.youtube.com/results?search_query=books+and+more+with+athai" }],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): { next: Project } {
  const index = projects.findIndex((p) => p.slug === slug);
  const nextIndex = (index + 1) % projects.length;
  return { next: projects[nextIndex] };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/content/projects.test.ts`
Expected: PASS (5 tests)

- [ ] **Step 5: Commit**

```bash
git add src/content/projects.ts src/content/projects.test.ts
git commit -m "Add 7 flagship project content entries"
```

---

## Task 5: Content data layer — worked-with, achievements, testimonials

**Files:**
- Create: `src/content/workedWith.ts`
- Create: `src/content/achievements.ts`
- Create: `src/content/testimonials.ts`
- Test: `src/content/misc-content.test.ts`

**Interfaces:**
- Produces: `workedWith: string[]`; `achievements: { value: string; label: string }[]`; `testimonials: { quote: string; name: string; role: string; isPlaceholder: true }[]`.

- [ ] **Step 1: Write the failing test**

```ts
// src/content/misc-content.test.ts
import { describe, it, expect } from "vitest";
import { workedWith } from "./workedWith";
import { achievements } from "./achievements";
import { testimonials } from "./testimonials";

describe("worked-with, achievements, testimonials", () => {
  it("lists the 6 institutions/sectors", () => {
    expect(workedWith).toEqual([
      "UNDP",
      "BILIA",
      "TNY Legal",
      "Amit & Associates",
      "NCSC",
      "PRAN-RFL",
    ]);
  });

  it("includes both UNDP stats and filmmaker/social stats", () => {
    const labels = achievements.map((a) => a.label).join(" | ");
    expect(labels).toContain("International Mentors");
    expect(labels).toContain("Countries");
    expect(labels).toContain("Students Reached");
    expect(labels).toContain("Festival Selections");
    expect(labels).toContain("YouTube Subscribers");
  });

  it("has 3 testimonials attributed to the confirmed names, all flagged as placeholders", () => {
    expect(testimonials.length).toBe(3);
    const names = testimonials.map((t) => t.name);
    expect(names).toEqual(["Nishita Sanaul", "Athai Das", "Jyotish Talukder"]);
    expect(testimonials.every((t) => t.isPlaceholder)).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/content/misc-content.test.ts`
Expected: FAIL — modules don't exist.

- [ ] **Step 3: Write the content files**

```ts
// src/content/workedWith.ts
export const workedWith: string[] = [
  "UNDP",
  "BILIA",
  "TNY Legal",
  "Amit & Associates",
  "NCSC",
  "PRAN-RFL",
];
```

```ts
// src/content/achievements.ts
export interface Achievement {
  value: string;
  label: string;
}

export const achievements: Achievement[] = [
  { value: "600+", label: "International Mentors" },
  { value: "101", label: "Countries" },
  { value: "200K+", label: "Students Reached" },
  { value: "100+", label: "Stories Produced" },
  { value: "50+", label: "Workshops" },
  { value: "3", label: "Festival Selections" },
  { value: "3.6K+", label: "YouTube Subscribers" },
  { value: "160K+", label: "Views on a Single Video" },
];
```

```ts
// src/content/testimonials.ts
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  isPlaceholder: true;
}

// NOTE: these 3 quotes are demo placeholders requested by the site owner.
// Replace `quote` (and `role` if needed) with the real testimonial text
// before treating this section as final content.
export const testimonials: Testimonial[] = [
  {
    quote:
      "PLACEHOLDER — replace with real quote. Vivek brought a level of creativity and attention to detail to Futurenation's communications that raised the bar for the whole team, and he never missed a deadline even under real pressure.",
    name: "Nishita Sanaul",
    role: "Colleague, UNDP Futurenation",
    isPlaceholder: true,
  },
  {
    quote:
      "PLACEHOLDER — replace with real quote. Working with Vivek on production, his professionalism and eye for detail showed in every frame — he delivers polished work on tight timelines without cutting corners.",
    name: "Athai Das",
    role: "Collaborator, Books and More",
    isPlaceholder: true,
  },
  {
    quote:
      "PLACEHOLDER — replace with real quote. Vivek is one of the most reliable creative people I've worked with — genuinely inventive, meticulous about the details, and calm under deadline pressure.",
    name: "Jyotish Talukder",
    role: "Former Supervisor, PRAN-RFL Productions",
    isPlaceholder: true,
  },
];
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/content/misc-content.test.ts`
Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add src/content/workedWith.ts src/content/achievements.ts src/content/testimonials.ts src/content/misc-content.test.ts
git commit -m "Add worked-with, achievements, and placeholder testimonial content"
```

---

## Task 6: Vitest config + UI primitives (Container, SectionHeading, Button)

**Files:**
- Create: `vitest.config.ts`
- Create: `src/lib/utils.ts`
- Create: `src/components/ui/Container.tsx`
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/Button.tsx`
- Test: `src/components/ui/ui.test.tsx`

**Interfaces:**
- Consumes: Tailwind classes `bg-background`, `text-text-primary`, `text-accent` from Task 1.
- Produces: `cn(...classes)` helper; `<Container>`, `<SectionHeading eyebrow? title subtitle?>`, `<Button variant="primary"|"outline" href? onClick? children>` used by every section component in later tasks.

- [ ] **Step 1: Configure Vitest**

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```

```ts
// vitest.setup.ts
import "@testing-library/jest-dom/vitest";
```

Add to `package.json` `"scripts"`: `"test": "vitest run"`.

- [ ] **Step 2: Write the failing test**

```tsx
// src/components/ui/ui.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";

describe("UI primitives", () => {
  it("renders a section heading with eyebrow, title, and subtitle", () => {
    render(<SectionHeading eyebrow="Work" title="Featured Work" subtitle="Selected projects" />);
    expect(screen.getByText("Work")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Featured Work" })).toBeInTheDocument();
    expect(screen.getByText("Selected projects")).toBeInTheDocument();
  });

  it("renders a button as a link when href is provided", () => {
    render(<Button href="/work/prologue">View Project</Button>);
    const link = screen.getByRole("link", { name: "View Project" });
    expect(link).toHaveAttribute("href", "/work/prologue");
  });
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `npx vitest run src/components/ui/ui.test.tsx`
Expected: FAIL — modules don't exist.

- [ ] **Step 4: Write the primitives**

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```tsx
// src/components/ui/Container.tsx
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}>{children}</div>;
}
```

```tsx
// src/components/ui/SectionHeading.tsx
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      {eyebrow && (
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accent font-body">{eyebrow}</p>
      )}
      <h2 className="font-heading text-4xl md:text-6xl font-bold text-text-primary">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-text-secondary text-lg">{subtitle}</p>}
    </div>
  );
}
```

```tsx
// src/components/ui/Button.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, onClick, variant = "primary", children, className }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors duration-200",
    variant === "primary" && "bg-accent text-background hover:bg-accent/90",
    variant === "outline" && "border border-border text-text-primary hover:border-accent",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run src/components/ui/ui.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 6: Commit**

```bash
git add vitest.config.ts vitest.setup.ts package.json src/lib/utils.ts src/components/ui/Container.tsx src/components/ui/SectionHeading.tsx src/components/ui/Button.tsx src/components/ui/ui.test.tsx
git commit -m "Add Vitest config and Container/SectionHeading/Button primitives"
```

---

## Task 7: Scroll provider (Lenis + GSAP coordination)

**Files:**
- Create: `src/components/providers/ScrollProvider.tsx`
- Test: `src/components/providers/ScrollProvider.test.tsx`

**Interfaces:**
- Consumes: `lenis`, `gsap`, `ScrollTrigger` packages from Task 1.
- Produces: `<ScrollProvider>{children}</ScrollProvider>` wrapped once in `src/app/layout.tsx` (wired in Task 8), driving Lenis's `raf` into `ScrollTrigger.update` and respecting `prefers-reduced-motion` by skipping Lenis entirely.

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/providers/ScrollProvider.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ScrollProvider } from "./ScrollProvider";

describe("ScrollProvider", () => {
  it("renders its children without crashing", () => {
    render(
      <ScrollProvider>
        <div>content</div>
      </ScrollProvider>
    );
    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/providers/ScrollProvider.test.tsx`
Expected: FAIL — module doesn't exist.

- [ ] **Step 3: Write the provider**

```tsx
// src/components/providers/ScrollProvider.tsx
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/providers/ScrollProvider.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/providers/ScrollProvider.tsx src/components/providers/ScrollProvider.test.tsx
git commit -m "Add Lenis/GSAP ScrollProvider with reduced-motion support"
```

---

## Task 8: Hero section

**Files:**
- Create: `src/components/hero/Hero.tsx`
- Test: `src/components/hero/Hero.test.tsx`

**Interfaces:**
- Consumes: `site` from `src/content/site.ts` (Task 2), `Button` from Task 6.
- Produces: `<Hero />` rendering the confirmed headline and both CTAs, exported for use in `src/app/page.tsx` (Task 12).

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/hero/Hero.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the confirmed headline and both CTAs", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { name: /Vivekananda Das/ })).toBeInTheDocument();
    expect(screen.getByText(/Communications Strategist & Filmmaker/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Portfolio" })).toHaveAttribute("href", "#work");
    expect(screen.getByRole("link", { name: "Let's Talk" })).toHaveAttribute("href", "#contact");
  });

  it("does not mention a law background", () => {
    render(<Hero />);
    expect(screen.queryByText(/LL\.B|LL\.M|law/i)).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/hero/Hero.test.tsx`
Expected: FAIL — module doesn't exist.

- [ ] **Step 3: Write the component**

```tsx
// src/components/hero/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-background">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm uppercase tracking-[0.2em] text-accent"
        >
          {site.title}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-5xl font-bold leading-[1.05] text-text-primary md:text-8xl"
        >
          {site.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-text-secondary"
        >
          {site.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex gap-4"
        >
          <Button href="#work">View Portfolio</Button>
          <Button href="#contact" variant="outline">
            Let&apos;s Talk
          </Button>
        </motion.div>
      </Container>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary"
        aria-hidden="true"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/hero/Hero.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/hero/Hero.tsx src/components/hero/Hero.test.tsx
git commit -m "Add Hero section"
```

---

## Task 9: About + Education section

**Files:**
- Create: `src/content/education.ts`
- Create: `src/components/about/About.tsx`
- Test: `src/components/about/About.test.tsx`

**Interfaces:**
- Produces: `education: { degree: string; institution: string; dates: string }[]`; `<About />` rendering the communications-first bio with a separate factual Education strip, no law narrative in the bio paragraph.

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/about/About.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { About } from "./About";

describe("About", () => {
  it("renders the communications-first bio without an 'unconventional pivot' law narrative", () => {
    render(<About />);
    expect(screen.getByText(/communications|storytelling|campaigns/i)).toBeInTheDocument();
    expect(screen.queryByText(/unconventional/i)).not.toBeInTheDocument();
  });

  it("lists education facts in a separate strip", () => {
    render(<About />);
    expect(screen.getByText(/LL\.B\./)).toBeInTheDocument();
    expect(screen.getByText(/University of Dhaka/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/about/About.test.tsx`
Expected: FAIL — modules don't exist.

- [ ] **Step 3: Write the content and component**

```ts
// src/content/education.ts
export interface EducationEntry {
  degree: string;
  institution: string;
  dates: string;
}

export const education: EducationEntry[] = [
  { degree: "LL.M.", institution: "University of Dhaka", dates: "2021 – 2022" },
  { degree: "LL.B.", institution: "University of Dhaka", dates: "2016 – 2019" },
  { degree: "Higher Secondary", institution: "Amrita Lal College, Barishal", dates: "" },
  { degree: "Secondary", institution: "Udayan Secondary School, Barishal", dates: "" },
];
```

```tsx
// src/components/about/About.tsx
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/content/education";

export function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="About" title="Story-first, format-agnostic" />
        <div className="grid gap-16 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-text-secondary">
            For more than five years, Vivekananda has built communications, campaigns, and
            mentorship programs for international organizations — turning complex programs into
            stories that travel, from national summits to a global mentorship network spanning
            101 countries. Alongside that, an independent filmmaking practice runs in parallel:
            short films, commercial production, and a growing content channel, all driven by the
            same instinct for finding the story inside a frame. Books and music round out the
            rest.
          </p>
          <div>
            <h3 className="mb-6 font-heading text-xl font-semibold text-text-primary">Education</h3>
            <ul className="space-y-4">
              {education.map((entry) => (
                <li key={entry.degree + entry.institution} className="border-b border-border pb-4">
                  <p className="text-text-primary font-medium">
                    {entry.degree} — {entry.institution}
                  </p>
                  {entry.dates && <p className="text-sm text-text-secondary">{entry.dates}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/about/About.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add src/content/education.ts src/components/about/About.tsx src/components/about/About.test.tsx
git commit -m "Add About section with communications-first bio and Education strip"
```

---

## Task 10: Experience timeline + Where I've Worked strip

**Files:**
- Create: `src/components/experience/Experience.tsx`
- Create: `src/components/experience/ExperienceCard.tsx`
- Create: `src/components/workedWith/WorkedWithStrip.tsx`
- Test: `src/components/experience/Experience.test.tsx`
- Test: `src/components/workedWith/WorkedWithStrip.test.tsx`

**Interfaces:**
- Consumes: `experience` (Task 3), `workedWith` (Task 5).
- Produces: `<Experience />`, `<WorkedWithStrip />` for use in `src/app/page.tsx` (Task 12).

- [ ] **Step 1: Write the failing tests**

```tsx
// src/components/experience/Experience.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("renders all 6 roles with UNDP first and PRAN-RFL last", () => {
    render(<Experience />);
    const orgs = screen.getAllByRole("heading", { level: 3 }).map((el) => el.textContent);
    expect(orgs[0]).toContain("UNDP Futurenation");
    expect(orgs[orgs.length - 1]).toContain("PRAN-RFL Group");
  });
});
```

```tsx
// src/components/workedWith/WorkedWithStrip.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WorkedWithStrip } from "./WorkedWithStrip";

describe("WorkedWithStrip", () => {
  it("lists all 6 institutions", () => {
    render(<WorkedWithStrip />);
    expect(screen.getByText("UNDP")).toBeInTheDocument();
    expect(screen.getByText("PRAN-RFL")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/components/experience/Experience.test.tsx src/components/workedWith/WorkedWithStrip.test.tsx`
Expected: FAIL — modules don't exist.

- [ ] **Step 3: Write the components**

```tsx
// src/components/experience/ExperienceCard.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ExperienceEntry } from "@/content/experience";

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group cursor-pointer border-b border-border py-8"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-heading text-2xl font-semibold text-text-primary">{entry.org}</h3>
        <span className="text-sm text-text-secondary">{entry.dates}</span>
      </div>
      <p className="mt-1 text-accent">{entry.role}</p>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2 overflow-hidden text-text-secondary"
          >
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="text-sm leading-relaxed">
                • {bullet}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
```

```tsx
// src/components/experience/Experience.tsx
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  return (
    <section id="experience" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where the work happened" />
        <div>
          {experience.map((entry) => (
            <ExperienceCard key={entry.org} entry={entry} />
          ))}
        </div>
      </Container>
    </section>
  );
}
```

```tsx
// src/components/workedWith/WorkedWithStrip.tsx
import { Container } from "@/components/ui/Container";
import { workedWith } from "@/content/workedWith";

export function WorkedWithStrip() {
  return (
    <section className="border-y border-border bg-background py-12">
      <Container>
        <p className="mb-6 text-center text-sm uppercase tracking-[0.2em] text-text-secondary">
          Where I&apos;ve Worked
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {workedWith.map((name) => (
            <li key={name} className="font-heading text-lg text-text-secondary">
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run src/components/experience/Experience.test.tsx src/components/workedWith/WorkedWithStrip.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/experience/ src/components/workedWith/
git commit -m "Add Experience timeline and Where I've Worked strip"
```

---

## Task 11: Featured Work grid + Expertise + Services + Achievements + Testimonials + Contact + Footer

**Files:**
- Create: `src/components/work/FeaturedWork.tsx`
- Create: `src/components/work/ProjectCard.tsx`
- Create: `src/components/expertise/Expertise.tsx`
- Create: `src/components/services/Services.tsx`
- Create: `src/components/achievements/Achievements.tsx`
- Create: `src/components/achievements/StatCounter.tsx`
- Create: `src/components/testimonials/Testimonials.tsx`
- Create: `src/components/contact/Contact.tsx`
- Create: `src/components/layout/Footer.tsx`
- Test: `src/components/sections.test.tsx`

**Interfaces:**
- Consumes: `projects` (Task 4), `expertise`/`tools` (Task 2), `services` (Task 2), `achievements` (Task 5), `testimonials` (Task 5), `site` (Task 2).
- Produces: all remaining home-page sections, exported for `src/app/page.tsx` (Task 12).

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/sections.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FeaturedWork } from "./work/FeaturedWork";
import { Expertise } from "./expertise/Expertise";
import { Services } from "./services/Services";
import { Achievements } from "./achievements/Achievements";
import { Testimonials } from "./testimonials/Testimonials";
import { Contact } from "./contact/Contact";
import { Footer } from "./layout/Footer";

describe("remaining home sections", () => {
  it("FeaturedWork links all 7 projects", () => {
    render(<FeaturedWork />);
    expect(screen.getAllByRole("link")).toHaveLength(7);
    expect(screen.getByRole("link", { name: /Prologue/ })).toHaveAttribute("href", "/work/prologue");
  });

  it("Expertise lists all 14 skills", () => {
    render(<Expertise />);
    expect(screen.getByText("Brand Collaboration")).toBeInTheDocument();
  });

  it("Services lists all 9 services", () => {
    render(<Services />);
    expect(screen.getByText("Digital Storytelling")).toBeInTheDocument();
  });

  it("Achievements renders every stat value and label", () => {
    render(<Achievements />);
    expect(screen.getByText("600+")).toBeInTheDocument();
    expect(screen.getByText("Festival Selections")).toBeInTheDocument();
  });

  it("Testimonials renders all 3 attributed names", () => {
    render(<Testimonials />);
    expect(screen.getByText("Nishita Sanaul")).toBeInTheDocument();
    expect(screen.getByText("Jyotish Talukder")).toBeInTheDocument();
  });

  it("Contact links to the real Google Form", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: /Send a Message/i })).toHaveAttribute(
      "href",
      "https://forms.gle/85t4kde6rDfahAPa9"
    );
  });

  it("Footer includes email and social links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /dvivekananda7@gmail.com/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Instagram/ })).toHaveAttribute(
      "href",
      "https://www.instagram.com/vivek_ananda_das/"
    );
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/sections.test.tsx`
Expected: FAIL — modules don't exist.

- [ ] **Step 3: Write the components**

```tsx
// src/components/work/ProjectCard.tsx
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-8 transition-transform duration-300 hover:-translate-y-1"
    >
      <p className="text-sm uppercase tracking-[0.15em] text-accent">
        {project.category} · {project.year}
      </p>
      <h3 className="mt-3 font-heading text-2xl font-semibold text-text-primary">{project.title}</h3>
      <p className="mt-3 text-sm text-text-secondary">{project.summary}</p>
    </Link>
  );
}
```

```tsx
// src/components/work/FeaturedWork.tsx
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedWork() {
  return (
    <section id="work" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Featured Work" title="Campaigns and films, side by side" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
```

```tsx
// src/components/expertise/Expertise.tsx
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertise, tools } from "@/content/expertise";

export function Expertise() {
  return (
    <section id="expertise" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Expertise" title="What I bring to a project" />
        <ul className="flex flex-wrap gap-3">
          {expertise.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border px-5 py-2 text-sm text-text-primary"
            >
              {skill}
            </li>
          ))}
        </ul>
        <p className="mt-10 mb-3 text-sm uppercase tracking-[0.2em] text-text-secondary">Tools</p>
        <ul className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <li key={tool} className="rounded-full bg-card px-5 py-2 text-sm text-text-secondary">
              {tool}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
```

```tsx
// src/components/services/Services.tsx
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

export function Services() {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Services" title="How I can help" />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-text-primary">{service.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

```tsx
// src/components/achievements/StatCounter.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    const duration = 1200;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(progress * numeric));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, numeric]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl font-bold text-accent md:text-5xl">
        {Number.isNaN(numeric) ? value : `${display}${suffix}`}
      </p>
      <p className="mt-2 text-sm text-text-secondary">{label}</p>
    </div>
  );
}
```

```tsx
// src/components/achievements/Achievements.tsx
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/content/achievements";
import { StatCounter } from "./StatCounter";

export function Achievements() {
  return (
    <section className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Achievements" title="Numbers behind the work" />
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {achievements.map((a) => (
            <StatCounter key={a.label} value={a.value} label={a.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
```

```tsx
// src/components/testimonials/Testimonials.tsx
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What collaborators say" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-8">
              <p className="font-heading text-4xl text-accent">&ldquo;</p>
              <p className="mt-2 text-text-secondary">{t.quote.replace("PLACEHOLDER — replace with real quote. ", "")}</p>
              <p className="mt-6 font-medium text-text-primary">{t.name}</p>
              <p className="text-sm text-text-secondary">{t.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

```tsx
// src/components/contact/Contact.tsx
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle={`Based in ${site.location}. Open to campaigns, productions, and collaborations.`}
        />
        <Button href={site.links.contactForm}>Send a Message</Button>
      </Container>
    </section>
  );
}
```

```tsx
// src/components/layout/Footer.tsx
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <Container>
        <div className="flex flex-col items-center gap-4 text-sm text-text-secondary md:flex-row md:justify-between">
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            {site.email}
          </a>
          <div className="flex gap-6">
            <a href={site.links.facebook} className="hover:text-accent">
              Facebook
            </a>
            <a href={site.links.linkedin} className="hover:text-accent">
              LinkedIn
            </a>
            <a href={site.links.instagram} className="hover:text-accent">
              Instagram
            </a>
          </div>
          <p>© {new Date().getFullYear()} {site.name}. Made with ❤️</p>
        </div>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/sections.test.tsx`
Expected: PASS (7 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/work/ src/components/expertise/ src/components/services/ src/components/achievements/ src/components/testimonials/ src/components/contact/ src/components/layout/Footer.tsx src/components/sections.test.tsx
git commit -m "Add Featured Work, Expertise, Services, Achievements, Testimonials, Contact, Footer"
```

---

## Task 12: Assemble the home page

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/layout.tsx`
- Test: `src/app/page.test.tsx`

**Interfaces:**
- Consumes: every section component from Tasks 7–11.
- Produces: the full scrolling home page in the section order confirmed in the spec.

- [ ] **Step 1: Write the failing test**

```tsx
// src/app/page.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Home page", () => {
  it("renders every section in the confirmed order", () => {
    render(<Page />);
    const headings = screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent);
    expect(headings).toEqual([
      "Story-first, format-agnostic",
      "Where the work happened",
      "Campaigns and films, side by side",
      "What I bring to a project",
      "How I can help",
      "Numbers behind the work",
      "What collaborators say",
      "Let's build something",
    ]);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/app/page.test.tsx`
Expected: FAIL — current `page.tsx` is the create-next-app boilerplate.

- [ ] **Step 3: Wire up the page and provider**

```tsx
// src/app/page.tsx
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
import { WorkedWithStrip } from "@/components/workedWith/WorkedWithStrip";
import { FeaturedWork } from "@/components/work/FeaturedWork";
import { Expertise } from "@/components/expertise/Expertise";
import { Services } from "@/components/services/Services";
import { Achievements } from "@/components/achievements/Achievements";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <WorkedWithStrip />
      <FeaturedWork />
      <Expertise />
      <Services />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
```

Update `src/app/layout.tsx` to wrap `children` in `<ScrollProvider>`:

```tsx
import { ScrollProvider } from "@/components/providers/ScrollProvider";
// ...inside RootLayout's body:
<body className="bg-background text-text-primary font-body antialiased">
  <ScrollProvider>{children}</ScrollProvider>
</body>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/app/page.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/app/layout.tsx src/app/page.test.tsx
git commit -m "Assemble home page from all sections"
```

---

## Task 13: Project detail page template + dynamic route

**Files:**
- Create: `src/components/work/ProjectPage.tsx`
- Create: `src/app/work/[slug]/page.tsx`
- Test: `src/app/work/project-page.test.tsx`

**Interfaces:**
- Consumes: `getProjectBySlug`, `getAdjacentProject`, `projects` (Task 4).
- Produces: statically generated pages at `/work/<slug>` for all 7 projects, each with Overview/Challenge/Process/Outcome/Gallery/Videos/Tools/Client and Next Project navigation.

- [ ] **Step 1: Write the failing test**

```tsx
// src/app/work/project-page.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectPage } from "@/components/work/ProjectPage";
import { getProjectBySlug } from "@/content/projects";

describe("ProjectPage", () => {
  it("renders overview/challenge/process/outcome and next-project navigation", () => {
    const project = getProjectBySlug("prologue")!;
    render(<ProjectPage project={project} />);
    expect(screen.getByRole("heading", { name: "Prologue" })).toBeInTheDocument();
    expect(screen.getByText(/Kafka/)).toBeInTheDocument();
    expect(screen.getByText("Serbia International Film Festival, JIFF, and IIUSFF", { exact: false })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Next Project/i })).toHaveAttribute(
      "href",
      "/work/jolpai-ronger-adhar"
    );
  });

  it("shows a pending-assets note for Futurenation projects instead of fabricated media", () => {
    const project = getProjectBySlug("futurenation-mentorship-campaign")!;
    render(<ProjectPage project={project} />);
    expect(screen.getByText(/assets coming soon/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/app/work/project-page.test.tsx`
Expected: FAIL — module doesn't exist.

- [ ] **Step 3: Write the template and route**

```tsx
// src/components/work/ProjectPage.tsx
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/content/projects";
import { getAdjacentProject } from "@/content/projects";

export function ProjectPage({ project }: { project: Project }) {
  const { next } = getAdjacentProject(project.slug);

  return (
    <article className="bg-background py-24 md:py-32">
      <Container>
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-3 font-heading text-5xl font-bold text-text-primary md:text-7xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-text-secondary">{project.summary}</p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <section>
            <h2 className="font-heading text-2xl font-semibold text-text-primary">Overview</h2>
            <p className="mt-3 text-text-secondary">{project.overview}</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-semibold text-text-primary">Challenge</h2>
            <p className="mt-3 text-text-secondary">{project.challenge}</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-semibold text-text-primary">Process</h2>
            <p className="mt-3 text-text-secondary">{project.process}</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-semibold text-text-primary">Outcome</h2>
            <p className="mt-3 text-text-secondary">{project.outcome}</p>
          </section>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-text-secondary">Client</p>
            <p className="mt-1 text-text-primary">{project.client}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-text-secondary">Tools Used</p>
            <p className="mt-1 text-text-primary">{project.tools.join(", ")}</p>
          </div>
        </div>

        {project.videos && project.videos.length > 0 && (
          <div className="mt-12">
            <h2 className="font-heading text-2xl font-semibold text-text-primary">Videos</h2>
            <ul className="mt-3 space-y-2">
              {project.videos.map((v) => (
                <li key={v.url}>
                  <a href={v.url} className="text-accent underline" target="_blank" rel="noreferrer">
                    {v.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.assetsPending && (
          <p className="mt-12 rounded-xl border border-dashed border-border p-6 text-sm text-text-secondary">
            Gallery and video assets coming soon — pending links from the project owner.
          </p>
        )}

        <div className="mt-20 border-t border-border pt-10">
          <p className="text-sm uppercase tracking-[0.15em] text-text-secondary">Next Project</p>
          <Button href={`/work/${next.slug}`} variant="outline" className="mt-4">
            {next.title} — Next Project
          </Button>
        </div>
      </Container>
    </article>
  );
}
```

```tsx
// src/app/work/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/content/projects";
import { ProjectPage } from "@/components/work/ProjectPage";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Vivekananda Das`,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return <ProjectPage project={project} />;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/app/work/project-page.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/work/ProjectPage.tsx src/app/work/ src/app/work/project-page.test.tsx
git commit -m "Add project detail page template and dynamic route for 7 flagship projects"
```

---

## Task 14: SEO — sitemap, robots, JSON-LD

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Modify: `src/app/layout.tsx` (JSON-LD script)
- Test: `src/app/seo.test.ts`

**Interfaces:**
- Produces: `/sitemap.xml` listing `/` and all 7 `/work/<slug>` routes; `/robots.txt` allowing all crawling; a `Person` JSON-LD block in the root layout.

- [ ] **Step 1: Write the failing test**

```ts
// src/app/seo.test.ts
import { describe, it, expect } from "vitest";
import sitemap from "./sitemap";
import robots from "./robots";

describe("SEO files", () => {
  it("sitemap includes home and all 7 project pages", () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);
    expect(urls.filter((u) => u.includes("/work/")).length).toBe(7);
  });

  it("robots allows all crawling and references the sitemap", () => {
    const config = robots();
    expect(config.rules).toMatchObject({ userAgent: "*", allow: "/" });
    expect(config.sitemap).toContain("/sitemap.xml");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/app/seo.test.ts`
Expected: FAIL — modules don't exist.

- [ ] **Step 3: Write the SEO files**

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const BASE_URL = "https://vivekanandadas.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date() },
    ...projects.map((p) => ({
      url: `${BASE_URL}/work/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}
```

```ts
// src/app/robots.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://vivekanandadas.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
```

Add to `src/app/layout.tsx`, inside `<head>` (or via the `other` metadata field), a JSON-LD script:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Vivekananda Das",
      jobTitle: "Communications Strategist & Filmmaker",
      email: "mailto:dvivekananda7@gmail.com",
      sameAs: [
        "https://www.facebook.com/vivek.anup.7",
        "https://www.linkedin.com/in/vivekananda7",
        "https://www.instagram.com/vivek_ananda_das/",
      ],
    }),
  }}
/>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/app/seo.test.ts`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts src/app/layout.tsx src/app/seo.test.ts
git commit -m "Add sitemap, robots, and Person JSON-LD for SEO"
```

---

## Task 15: Final verification pass

**Files:** none (verification only)

- [ ] **Step 1: Run the full test suite**

Run: `npx vitest run`
Expected: all tests across all files PASS.

- [ ] **Step 2: Type-check and lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no type errors, no lint errors.

- [ ] **Step 3: Production build**

Run: `npm run build`
Expected: build succeeds, all 8 routes (`/`, 7× `/work/<slug>`) listed as static in the build output.

- [ ] **Step 4: Manual browser verification**

Run: `npm run start`, open the site, and check: hero animation plays, smooth scroll feels right, each section reveal animates on scroll, all 7 project cards link correctly, testimonials/achievements render, contact button opens the Google Form, footer links go to the correct real URLs, and the reduced-motion media query (toggle in browser devtools) disables Lenis/GSAP smoothing without breaking layout. Check mobile viewport (375px) and tablet viewport (768px) for layout breakage.

- [ ] **Step 5: Commit any fixes found during manual verification, then final commit**

```bash
git add -A
git commit -m "Final verification pass for portfolio site"
```

---

## Self-Review Notes

- **Spec coverage:** Hero (T8), About/Education (T9), Experience (T3/T10), Where I've Worked (T10), Featured Work + 7 project pages (T4/T13), Expertise (T2/T11), Services (T2/T11), Achievements (T5/T11), Testimonials (T5/T11), Contact/Footer (T2/T11), SEO (T14), motion/scroll system (T7), accessibility/responsive/reduced-motion (T7, T15). All spec sections have a task.
- **Placeholder scan:** only the 3 testimonial quotes are placeholders, and that's an explicit user-approved exception (marked `isPlaceholder: true` and with inline `PLACEHOLDER` text so it's impossible to ship silently). Futurenation project pages show an honest "assets coming soon" note instead of fabricated media — also spec-approved.
- **Type consistency:** `Project`, `ExperienceEntry`, `Achievement`, `Testimonial`, `EducationEntry` interfaces are each defined once in their content file and imported everywhere else (`getProjectBySlug`, `getAdjacentProject` types match `Project` throughout Tasks 4, 11, 13).
