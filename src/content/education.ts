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
