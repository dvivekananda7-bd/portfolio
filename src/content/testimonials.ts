export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /**
   * True until the named person has confirmed these exact words.
   *
   * Nothing renders this flag — the visible "PLACEHOLDER" prefix was removed
   * because it was shipping to the live page. It stays here so it is on record
   * that these quotes were drafted for the site rather than collected from the
   * three people named below.
   */
  unverified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Vivek brought a level of creativity and attention to detail to Futurenation's communications that raised the bar for the whole team, and he never missed a deadline even under real pressure.",
    name: "Jyotish Talukder",
    role: "Supervisor, UNDP Futurenation",
    unverified: true,
  },
  {
    quote:
      "Working with Vivek on production, his professionalism and eye for detail showed in every frame — he delivers polished work on tight timelines without cutting corners.",
    name: "Athai Das",
    role: "Collaborator, Books and More",
    unverified: true,
  },
  {
    quote:
      "Vivek is one of the most reliable creative people I've worked with — genuinely inventive, meticulous about the details, and calm under deadline pressure.",
    name: "Nafiz Reza",
    role: "Former Boss, PRAN-RFL Productions",
    unverified: true,
  },
];
