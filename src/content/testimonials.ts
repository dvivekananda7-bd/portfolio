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
    name: "Jyotish Talukder",
    role: "Supervisor, UNDP Futurenation",
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
    name: "Nafiz Reza",
    role: "Former Boss, PRAN-RFL Productions",
    isPlaceholder: true,
  },
];
