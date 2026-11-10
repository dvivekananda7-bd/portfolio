export interface Client {
  name: string;
  /** Path under public/, without the basePath. Omitted when no logo is held. */
  logo?: string;
  /**
   * True for a logo that is taller than it is wide. UNDP's file is the UN
   * laurel emblem stacked over the wordmark, so at the row height used for
   * horizontal marks it renders about 18px wide and is unreadable.
   */
  tall?: boolean;
}

/**
 * Brands and institutions the studio has produced work for.
 *
 * Logos are rendered white via a CSS filter rather than in brand colour:
 * BBC's 2021 mark is solid black and would be invisible on the strip, and
 * mixing BRAC magenta, UNDP blue and PRAN red reads as clip art. One colour
 * is also the usual convention for a client wall.
 *
 * Entries without a logo fall back to their name as type.
 */
export const clients: Client[] = [
  { name: "BRAC", logo: "/images/logos/brac.svg" },
  { name: "UNDP", logo: "/images/logos/undp.svg", tall: true },
  { name: "BBC", logo: "/images/logos/bbc.svg" },
  { name: "PRAN-RFL", logo: "/images/logos/pran-rfl.png" },
  { name: "University of Scholars", logo: "/images/logos/uos.png" },
  { name: "BILIA" },
  { name: "TNY Legal" },
  { name: "NCSC" },
];

/** Names only, kept for tests and any text-only rendering. */
export const workedWith: string[] = clients.map((c) => c.name);
