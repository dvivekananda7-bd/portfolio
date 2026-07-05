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
    summary:
      "Scaling a global mentorship programme from 68 to 600+ professionals across 101 countries.",
    overview:
      "A communications campaign built to grow and sustain Futurenation's global mentorship programme, connecting Bangladeshi students with international professional mentors.",
    challenge:
      "The mentorship programme needed to grow far beyond its founding cohort while keeping every mentor and mentee engaged across 101 countries and time zones.",
    process:
      "Designed the communication and coordination workplan, managed mentor onboarding communications, and ran the ongoing content calendar that kept mentors and mentees connected.",
    outcome:
      "Grew the programme from 68 to 600+ international professionals across 101 countries.",
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
    overview:
      "A storytelling initiative collecting and publishing first-person impact stories from students, mentors, and volunteers across the Futurenation network.",
    challenge:
      "Turning a large, geographically scattered participant base into a coherent, publishable body of impact stories.",
    process:
      "Built the story-collection workflow, interviewed participants, and produced written and video content aligned with UNDP communication standards.",
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
    overview:
      "End-to-end content design and production for the Futurenation Learning Management System, supporting training-of-trainers and skills-dissemination programming.",
    challenge:
      "Learning content needed to be produced at volume and quality for 50+ workshop and training sessions.",
    process:
      "Designed and managed the content production workflow for the LMS, coordinating with trainers and technical teams to turn curriculum into finished course material.",
    outcome:
      "Supported 50+ orientation, skills-dissemination, and Training of Trainers sessions with finished course content.",
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
    summary:
      "A COVID-era short film inspired by Kafka's Metamorphosis, officially selected at three international festivals.",
    overview:
      "Prologue is an independent short film revolving around the life of a graduate student struggling to survive COVID-19 reality, inspired by Franz Kafka's Metamorphosis and written and directed as a first solo project.",
    challenge:
      "Telling an isolating, interior story on a first-time director's budget while keeping it visually and emotionally distinct.",
    process:
      "Wrote and directed the film drawing inspiration from Franz Kafka's Metamorphosis, translating a literary sense of alienation into a contemporary pandemic setting.",
    outcome:
      "Nominated for Tareq Shahriar's Best Indie Short Film award, with official screenings at the Serbia International Film Festival, JIFF, and IIUSFF.",
    gallery: [],
    videos: [
      {
        title: "Prologue",
        url: "https://www.youtube.com/results?search_query=prologue+vivek+anup",
      },
    ],
  },
  {
    slug: "jolpai-ronger-adhar",
    title: "Jolpai Ronger Adhar",
    category: "Short Film",
    year: "2020",
    client: "Royalscreen Entertainment",
    tools: ["Screenwriting", "Assistant Direction", "Editing"],
    summary:
      "A psycho-drama exploring a protagonist's unconscious mind and a traumatic, unspoken history.",
    overview:
      "Jolpai Ronger Adhar is a psycho-drama film exploring the surface of the unconscious mind through a protagonist's hallucinations.",
    challenge:
      "Structuring a hallucination-driven narrative so an audience could follow a fractured psychological state without losing the emotional throughline.",
    process:
      "Worked as scriptwriter, assistant director, and editor, shaping the film's structure across writing, production, and post-production.",
    outcome: "Completed as an official teaser release under Royalscreen Entertainment.",
    gallery: [],
    videos: [
      {
        title: "Jolpai Ronger Adhar — Official Teaser",
        url: "https://www.youtube.com/results?search_query=jolpai+ronger+adhar+official+teaser",
      },
    ],
  },
  {
    slug: "pran-rfl-campaigns",
    title: "PRAN-RFL Commercial Campaigns",
    category: "Commercial Production",
    year: "2018",
    client: "PRAN-RFL Group",
    tools: ["Production Supervision", "Campaign Design", "Directing"],
    summary: "50+ nationwide brand and advertising campaigns for Bangladesh's largest FMCG group.",
    overview:
      "As Assistant Director, led production on nationwide TVC and advertising campaigns for PRAN-RFL Group's portfolio of FMCG brands.",
    challenge:
      "Delivering broadcast-quality commercial content at high volume across dozens of distinct product lines.",
    process:
      "Led market research, coordinated production teams and technical crews, and ran PPMs, budgeting, and planning through pre- and post-production for each campaign.",
    outcome:
      "Created more than 50 nationwide brand and advertising campaigns, including work for RFL, PRAN Frooto, PRAN Chinigura Rice, Wonder Cake, Good Luck Stationery, and more.",
    gallery: [],
    videos: [
      {
        title: "RFL Bucket | TVC | Desher Balti, Dosher Balti",
        url: "https://www.youtube.com/results?search_query=RFL+Bucket+TVC+Desher+Balti",
      },
      {
        title: "PRAN Frooto | ফল মুখ প্রতিদিন",
        url: "https://www.youtube.com/results?search_query=PRAN+Frooto+TVC",
      },
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
    overview:
      "Books and More started in 2023 as a book content creation channel, giving its audience a glimpse of the world hidden beneath the pages and promoting a lifestyle where books are central.",
    challenge:
      "Making book content feel current and shareable across formats — long-form, shorts, and reels — for a general audience.",
    process:
      "Regularly shooting and producing content across book reviews, storytelling, facts and fictions, book cafe reviews, interviews, geopolitics and maps, and daily vlogs.",
    outcome: "Grew to 3.6K+ subscribers with individual videos reaching 160K+ views.",
    gallery: [],
    videos: [
      {
        title: "Books and More with Athai",
        url: "https://www.youtube.com/results?search_query=books+and+more+with+athai",
      },
    ],
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
