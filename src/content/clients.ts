import type { GalleryItem } from "./categories";

export interface ClientTab {
  slug: string;
  label: string;
  blurb: string;
  items: GalleryItem[];
}

/**
 * The client portfolio, grouped into tabs.
 *
 * Facebook reel titles are numbered rather than named: the links were supplied
 * without titles and Facebook exposes none publicly, so inventing descriptive
 * names would be guessing. Replace the titles here as you confirm them.
 */
export const clientTabs: ClientTab[] = [
  {
    slug: "brac",
    label: "BRAC",
    blurb:
      "Impact stories and social content for the world's largest NGO — field reporting from the haors of Sunamganj to the most remote schools in the country.",
    items: [
      {
        title: "একটি শেড, আর বেঁচে যাচ্ছে শত শত প্রাণ",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=6lYJ-CRll5Q",
      },
      {
        title: "আমার দেখা বাংলাদেশের সবচেয়ে প্রান্তিক স্কুল",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=p0ODvAfUiN4",
      },
      {
        title: "ভয়ংকর হাওরে তারা স্কুলে যায় কিভাবে?",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=TbHafjjoHWU",
      },
      {
        title: "কিভাবে একটি সাধারন খুঁটি বাঁচিয়ে দেয় হাওরের মানুষের জীবন",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=qvnDhIB1UUE",
      },
      {
        title: "আমাদের হাসিনা আপা",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=4J1Bwj0TP6g",
      },
      {
        title: "BRAC — Reel 01",
        platform: "facebook",
        url: "https://www.facebook.com/reel/1976386446412281",
      },
      {
        title: "BRAC — Reel 02",
        platform: "facebook",
        url: "https://www.facebook.com/reel/1260386816167994",
      },
      {
        title: "BRAC — Reel 03",
        platform: "facebook",
        url: "https://www.facebook.com/reel/1670439711134637",
      },
    ],
  },
  {
    slug: "undp",
    label: "UNDP",
    blurb:
      "Campaign, onboarding and impact content for UNDP Futurenation — a mentorship programme reaching 101 countries.",
    items: [
      {
        title: "Futurenation — How to get onboarded",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=t8819abdEBw",
      },
      {
        title: "UNDP — Reel 01",
        platform: "facebook",
        url: "https://www.facebook.com/reel/1627567858667760",
      },
      {
        title: "UNDP — Reel 02",
        platform: "facebook",
        url: "https://www.facebook.com/reel/1824672505141832",
      },
      {
        title: "UNDP — Reel 03",
        platform: "facebook",
        url: "https://www.facebook.com/reel/2500760840389318",
      },
      {
        title: "UNDP — Reel 04",
        platform: "facebook",
        url: "https://www.facebook.com/reel/678106357846436",
      },
    ],
  },
  {
    slug: "bbc",
    label: "BBC",
    blurb:
      "Short-form editorial and social-issue storytelling produced for BBC Hello Check.",
    items: [
      {
        title: "বিয়ের জন্য নয়, মেয়েকে তার স্বপ্ন পূরণের জন্য প্রস্তুত করুন",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=Bv3ZK-4Ddpg",
      },
      {
        title: "কেন নিজের বিয়ে ভেঙে দিয়েছিল শারমিন?",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=KO7pzOK8-7E",
      },
      {
        title: "BBC — Reel 01",
        platform: "facebook",
        url: "https://www.facebook.com/reel/1133601302559443",
      },
      {
        title: "BBC — Reel 02",
        platform: "facebook",
        url: "https://www.facebook.com/reel/1122337860224866",
      },
    ],
  },
  {
    slug: "banks",
    label: "Banks",
    blurb: "Financial-sector brand content.",
    items: [
      {
        title: "Banking — Reel 01",
        platform: "facebook",
        url: "https://www.facebook.com/reel/2157388498482936",
      },
    ],
  },
  {
    slug: "university-of-scholars",
    label: "University of Scholars",
    blurb: "Admissions and campus content for higher education.",
    items: [
      {
        title: "University of Scholars — Reel 01",
        platform: "facebook",
        url: "https://www.facebook.com/reel/4006797636122763",
      },
    ],
  },
  {
    slug: "pran-rfl",
    label: "PRAN-RFL",
    blurb:
      "50+ nationwide brand and advertising campaigns produced as Assistant Director for Bangladesh's largest FMCG group.",
    items: [
      {
        title: "VISION Thematic TVC",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=Epk189Kz8TQ",
      },
      {
        title: "RFL Bucket | TVC | Desher Balti, Dosher Balti",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=VJ85AOiRIDY",
      },
      {
        title: "Father's Day Short Film | Pran Chutney",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=IYD-QpOI6rE",
      },
      {
        title: "Lemon White Detergent TVC",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=56BajV-05SI",
      },
      {
        title: "RFL uPVC Class D Pipe — Tribute to Joshim",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=B_Jfr6p3aw8",
      },
      {
        title: "Sticky Adhesive | Palabi Kothy TVC",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=jkYD7eV1VDQ",
      },
      {
        title: "PRAN Frooto TVC",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=kKF1L6eI9Xo",
      },
      {
        title: "PRAN Chinigura Rice TVC 2020",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=w7PISWAwpMo",
      },
      {
        title: "PRAN Sauce | Mini Sauce TVC",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=i49tZSQ4aaY",
      },
      {
        title: "Good Luck Blacko Pen TVC",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=N3P9GMI1d80",
      },
      {
        title: "Wonder Cake — Rain TVC",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=8KNaQMoFH38",
      },
      {
        title: "Zom Mosquito Coil TVC",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=zPiB85V_NP0",
      },
      {
        title: "PRAN Zeros Chips TVC — Car Parking",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=NngMZwyWJVw",
      },
      {
        title: "RFL Commode Chair TVC",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=OWQ8ltW5rVs",
      },
      {
        title: "Fruit Fun Biscuit TVC",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=iL_zLffrIdc",
      },
      {
        title: "Hajom Candy TVC",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=jK4q9gxH_-w",
      },
    ],
  },
  {
    slug: "indie-films",
    label: "Indie Films",
    blurb:
      "Independent cinema — Prologue, an award-nominated COVID-era drama after Kafka, and Jolpai Ronger Adhar, a psycho-drama.",
    items: [
      {
        title: "Prologue",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=Hm3Tg1Gi0JI",
      },
      {
        title: "Jolpai Ronger Adhar — Official Teaser",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=fPnsjhxEvmw",
      },
    ],
  },
  {
    slug: "books-and-more",
    label: "Books and More",
    blurb:
      "An owned book-content channel, built from zero to hundreds of thousands of views.",
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
        title: "কীভাবে অসম্ভবকে সম্ভব করলো উত্তর কোরিয়া?",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=Tr_hZ15vWFw",
      },
      {
        title: "বাংলাদেশের রাজনৈতিক ইতিহাস: যে গণভোট সবকিছু বদলে দিয়েছিল",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=DIaRU_b_amw",
      },
      {
        title: "সুন্দরবনের মানুষের গল্প — “বনের মানুষ মানুষের বন”",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=MpMbg6D_AJA",
      },
      {
        title: "সক্রেটিস কেন সবসময় বলতো “Know thyself”",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=hxPqOv45S5Y",
      },
      {
        title: "24 Hours Productive Day In Kurigram",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=gGYNrBkYw_g",
      },
    ],
  },
];

export const booksAndMoreChannel =
  "https://www.youtube.com/@booksandmorewithathai";
