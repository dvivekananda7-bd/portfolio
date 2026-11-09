export interface Achievement {
  value: string;
  label: string;
}

/**
 * Eight entries, which fills the 4-column grid exactly — six left a gap.
 * `StatCounter` counts the digits and appends whatever is left as a suffix,
 * so "3M+" animates 0 → 3 and lands on "3M+".
 */
export const achievements: Achievement[] = [
  { value: "15+", label: "Brands Solved" },
  { value: "100+", label: "Stories Produced" },
  { value: "50+", label: "Workshops" },
  { value: "4", label: "Festival Selections" },
  { value: "200K+", label: "Social Media Followers" },
  { value: "3M+", label: "Views on a Single Video" },
  { value: "20", label: "Creator Network" },
  { value: "8", label: "Crews in One Team" },
];
