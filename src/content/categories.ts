export type Platform = "youtube" | "facebook" | "instagram";

export interface GalleryItem {
  title: string;
  platform: Platform;
  url: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  items: GalleryItem[];
  comingSoon?: boolean;
}

export const categories: Category[] = [
  {
    slug: "futurenation",
    title: "Futurenation",
    description:
      "Communications and campaign work for UNDP Futurenation — scaling a global mentorship programme to 600+ professionals across 101 countries, plus impact stories and course production for the Learning Management System.",
    items: [],
    comingSoon: true,
  },
  {
    slug: "prologue",
    title: "Prologue",
    description:
      "Independent short films — Prologue, an award-nominated COVID-era drama inspired by Kafka's Metamorphosis, and Jolpai Ronger Adhar, a psycho-drama exploring the unconscious mind.",
    items: [
      { title: "Prologue", platform: "youtube", url: "https://www.youtube.com/watch?v=Hm3Tg1Gi0JI" },
      {
        title: "Jolpai Ronger Adhar — Official Teaser",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=fPnsjhxEvmw",
      },
    ],
  },
  {
    slug: "pran-rfl",
    title: "PRAN-RFL Commercial Campaigns",
    description:
      "50+ nationwide brand and advertising campaigns produced as Assistant Director for PRAN-RFL Group, Bangladesh's largest FMCG company.",
    items: [
      { title: "VISION Thematic TVC", platform: "youtube", url: "https://www.youtube.com/watch?v=Epk189Kz8TQ" },
      {
        title: "RFL Bucket | TVC | Desher Balti, Dosher Balti",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=VJ85AOiRIDY",
      },
      {
        title: "Father's Day Short Film | Pran Chutney",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=56BajV-05SI",
      },
      { title: "Lemon White Detergent TVC", platform: "youtube", url: "https://www.youtube.com/watch?v=IYD-QpOI6rE" },
      {
        title: "RFL UPVC Class D Pipe — Tribute to Joshim",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=B_Jfr6p3aw8",
      },
      {
        title: "Sticky Adhesive | Palabi Kothy TVC",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=w7PISWAwpMo",
      },
      { title: "PRAN Frooto TVC", platform: "youtube", url: "https://www.youtube.com/watch?v=kKF1L6eI9Xo" },
      { title: "PRAN Chinigura Rice TVC 2020", platform: "youtube", url: "https://www.youtube.com/watch?v=jkYD7eV1VDQ" },
      { title: "PRAN Sauce | Mini Sauce TVC", platform: "youtube", url: "https://www.youtube.com/watch?v=i49tZSQ4aaY" },
      { title: "Good Luck Blacko Pen TVC", platform: "youtube", url: "https://www.youtube.com/watch?v=N3P9GMI1d80" },
      { title: "Wonder Cake — Rain TVC", platform: "youtube", url: "https://www.youtube.com/watch?v=8KNaQMoFH38" },
      { title: "Zom Mosquito Coil TVC", platform: "youtube", url: "https://www.youtube.com/watch?v=zPiB85V_NP0" },
      {
        title: "PRAN Zeros Chips TVC — Car Parking",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=NngMZwyWJVw",
      },
      { title: "RFL Commode Chair TVC", platform: "youtube", url: "https://www.youtube.com/watch?v=OWQ8ltW5rVs" },
      { title: "Fruit Fun Biscuit TVC", platform: "youtube", url: "https://www.youtube.com/watch?v=iL_zLffrIdc" },
      { title: "Hajom Candy TVC", platform: "youtube", url: "https://www.youtube.com/watch?v=jK4q9gxH_-w" },
    ],
  },
  {
    slug: "books-and-more",
    title: "Books and More",
    description:
      "A book-content channel started in 2023, making reading culturally relevant through reviews, storytelling, and social videos reaching hundreds of thousands of views.",
    items: [
      {
        title: "TSMC প্রতিষ্ঠার অবিশ্বাস্য গল্প",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=R1vF6deQGNs",
      },
      {
        title: "আর্জেন্টিনার খেলা এবং নরকের দূরত্ব",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=icGqpqh9rvg",
      },
      {
        title: "ফিফা যখন বিলিয়ন ডলারের বাণিজ্যে ব্যস্ত (Palestine Football)",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=_OtjREFW2-Q",
      },
      {
        title: "বইমেলা, আমাদের প্রাণ মিলেছে যেখানে",
        platform: "facebook",
        url: "https://www.facebook.com/BOOKSwithAthai/videos/1554819528391846",
      },
      {
        title: "\"আমার হুমায়ূন স্যার\" — হুমায়ূন আহমেদ",
        platform: "facebook",
        url: "https://www.facebook.com/BOOKSwithAthai/videos/1083592352689646",
      },
      {
        title: "ঘোরজান চর",
        platform: "facebook",
        url: "https://www.facebook.com/reel/1260386816167994",
      },
      {
        title: "কত অজানারে: মিশর নাকি Egypt?",
        platform: "instagram",
        url: "https://www.instagram.com/reel/DRhdI82j11W/",
      },
    ],
  },
];

export function getYouTubeThumbnail(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube-nocookie\.com\/embed\/)([\w-]+)/
  );
  if (!match) return null;
  return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
}
