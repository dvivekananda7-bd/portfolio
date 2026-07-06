export type Sector = "Development" | "Legal" | "Corporate";

export interface ExperienceEntry {
  org: string;
  role: string;
  dates: string;
  location: string;
  sector: Sector;
  bullets: string[];
  achievement: string[];
}

export const experience: ExperienceEntry[] = [
  {
    org: "UNDP Futurenation",
    role: "Volunteer Management Associate",
    sector: "Development",
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
    sector: "Legal",
    dates: "Jul 2022 – Jul 2024",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Drafted and reviewed legal and compliance documentation for Japanese multinational companies and international organizations operating in Bangladesh.",
      "Worked on corporate regulatory compliance, contract review, and cross-border legal matters, gaining direct exposure to comparative legal practice between Bangladeshi and Japanese jurisdictions.",
      "Coordinated meetings, professional events, and project-related activities; maintained documentation, records management, and internal reporting systems.",
    ],
    achievement: [
      "Provided 3 cross-border regulatory advisory and paperwork engagements for Japanese corporate clients.",
    ],
  },
  {
    org: "Amit & Associates",
    role: "Junior Associate",
    sector: "Legal",
    dates: "Jan 2022 – Jun 2022",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Provided legal consultation and advisory support to clients on compliance requirements, contract matters, and civil and corporate dispute resolution strategies.",
      "Maintained strong client relationships through negotiation, settlement facilitation, and ongoing legal advisory.",
    ],
    achievement: [
      "Successfully managed concurrent case files across civil and corporate matters with consistent client retention.",
    ],
  },
  {
    org: "BILIA",
    role: "Research Assistant (Internship)",
    sector: "Legal",
    dates: "Jun 2019 – Feb 2020",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Supported press & media relations and stakeholder communications with partner institutions domestically and internationally.",
      "Organized symposiums and institutional events, managing event communication, meeting documentation, transcription records, and post-event press & media engagement and dissemination.",
    ],
    achievement: [
      "Arranged a successful symposium for the organization's 50th-year celebration and handled media coverage.",
    ],
  },
  {
    org: "NCSC (International Center for State Courts)",
    role: "Legal Aid Intern",
    sector: "Legal",
    dates: "Feb 2018 – Jun 2019",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Organised monthly Legal Aid Committee meetings and outreach events to foster dialogue between government agencies, panel lawyers, courts, and vulnerable and marginalised communities, managing all logistics, correspondence, and communication materials.",
      "Maintained case records, activity documentation, programme reporting, and panel lawyers' data management.",
    ],
    achievement: [
      "Supported legal aid services to 100+ beneficiaries from vulnerable communities in Dhaka and nearby districts.",
    ],
  },
  {
    org: "PRAN-RFL Group",
    role: "Assistant Director",
    sector: "Corporate",
    dates: "2018",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Led market research for a national marketing campaign for the fastest-growing FMCG brand.",
      "Collaborated with marketing teams to deliver creative campaign strategies and advertising content production.",
      "Coordinated production teams, technical crews, and creative staff; led PPMs, budgeting, planning, and pre/post-production.",
    ],
    achievement: [
      "Created more than 50 nationwide brand and advertising campaigns for the biggest FMCG brands in Bangladesh.",
    ],
  },
];

export interface ExperienceGroup {
  sector: Sector;
  entries: ExperienceEntry[];
}

const sectorOrder: Sector[] = ["Development", "Legal", "Corporate"];

export const experienceGroups: ExperienceGroup[] = sectorOrder.map((sector) => ({
  sector,
  entries: experience.filter((entry) => entry.sector === sector),
}));
