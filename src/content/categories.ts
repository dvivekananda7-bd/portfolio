export type Platform = "youtube" | "facebook" | "instagram" | "drive-image" | "drive-video";

export interface GalleryItem {
  title: string;
  platform: Platform;
  url: string;
  thumbnail?: string;
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
    items: [
      {
        title: "UNDP Futurenation — Experience Video",
        platform: "drive-video",
        url: driveViewUrl("1PqBFrY36VAD_jzRVOSsbPJxZMUJR9tXV"),
        thumbnail: driveThumbnail("1PqBFrY36VAD_jzRVOSsbPJxZMUJR9tXV"),
      },
      {
        title: "Futurenation Field Video",
        platform: "drive-video",
        url: driveViewUrl("1AsTW-Du8WEZ-74uHOa0rQYGLalHEhOir"),
        thumbnail: driveThumbnail("1AsTW-Du8WEZ-74uHOa0rQYGLalHEhOir"),
      },
      {
        title: "Engaging with Futurenation Beneficiaries at State University",
        platform: "drive-image",
        url: driveViewUrl("1TOSt4Rx2xaY77NAbGE7APwhHs4etObt0"),
        thumbnail: driveThumbnail("1TOSt4Rx2xaY77NAbGE7APwhHs4etObt0"),
      },
      {
        title: "Futurenation University Visit",
        platform: "drive-image",
        url: driveViewUrl("1gcQ4udMWYhIIiHesNhEfZp9-YyLg_Ppp"),
        thumbnail: driveThumbnail("1gcQ4udMWYhIIiHesNhEfZp9-YyLg_Ppp"),
      },
      {
        title: "Futurenation Event Photo",
        platform: "drive-image",
        url: driveViewUrl("17bxBx8FVqnQN5hmF-CjoWN2t2-ij9gHu"),
        thumbnail: driveThumbnail("17bxBx8FVqnQN5hmF-CjoWN2t2-ij9gHu"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1i4dLrLJucoJ8HAHQJ_qoUwxWRa-3Ltkq"),
        thumbnail: driveThumbnail("1i4dLrLJucoJ8HAHQJ_qoUwxWRa-3Ltkq"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1wHRE17YIJ5_-u6StS2L5Xka1n4vkuxsv"),
        thumbnail: driveThumbnail("1wHRE17YIJ5_-u6StS2L5Xka1n4vkuxsv"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1_yXYETgoC61THTpT4PfOQYinBhP9927i"),
        thumbnail: driveThumbnail("1_yXYETgoC61THTpT4PfOQYinBhP9927i"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1zTPkDcX3hs1nqoiGOU_PVBULq56-Utkn"),
        thumbnail: driveThumbnail("1zTPkDcX3hs1nqoiGOU_PVBULq56-Utkn"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1u_w8qW76m3w5Iapmmdkw-BDBpvdW7KjM"),
        thumbnail: driveThumbnail("1u_w8qW76m3w5Iapmmdkw-BDBpvdW7KjM"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1_6CJChw2gqX7xKLJeT7P0G-NTHMiEanG"),
        thumbnail: driveThumbnail("1_6CJChw2gqX7xKLJeT7P0G-NTHMiEanG"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1t3byU5EKon13fPDBMMAp-rh5rN6ylhZQ"),
        thumbnail: driveThumbnail("1t3byU5EKon13fPDBMMAp-rh5rN6ylhZQ"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1dK20q2aRAShGH8CEz07kd0NUCGvqDY0i"),
        thumbnail: driveThumbnail("1dK20q2aRAShGH8CEz07kd0NUCGvqDY0i"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1PUZzv5yXGgF_W0DDvuTlqpesrxuKDOiN"),
        thumbnail: driveThumbnail("1PUZzv5yXGgF_W0DDvuTlqpesrxuKDOiN"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1sauaWh4U3fpn-oNwOD_vtqxG84tMCgz9"),
        thumbnail: driveThumbnail("1sauaWh4U3fpn-oNwOD_vtqxG84tMCgz9"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("12jo_zsUQozkfhhyJEBInyxyCuPUIxRPl"),
        thumbnail: driveThumbnail("12jo_zsUQozkfhhyJEBInyxyCuPUIxRPl"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1bZHYWD-c6zjwCedVo7Gmtb5uA67NELc2"),
        thumbnail: driveThumbnail("1bZHYWD-c6zjwCedVo7Gmtb5uA67NELc2"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1mm7bWzoJMytbnkrEQosB88U1XkFhuKSU"),
        thumbnail: driveThumbnail("1mm7bWzoJMytbnkrEQosB88U1XkFhuKSU"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1bKGK7Q7xf29cVKjScot3bBFybnap9ryG"),
        thumbnail: driveThumbnail("1bKGK7Q7xf29cVKjScot3bBFybnap9ryG"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1JaS3xeaOESZViNfV-iV0r1Rczwi7zy0a"),
        thumbnail: driveThumbnail("1JaS3xeaOESZViNfV-iV0r1Rczwi7zy0a"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("107WJSzCGnZS9Ve0zd4-YctPQ7J8jXU8m"),
        thumbnail: driveThumbnail("107WJSzCGnZS9Ve0zd4-YctPQ7J8jXU8m"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1KSHF5hKWojmuE-5bPTDY1evnHhKfEliV"),
        thumbnail: driveThumbnail("1KSHF5hKWojmuE-5bPTDY1evnHhKfEliV"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1SN0XcnN8GDcSBPiYt9plAt3MDECmDQOw"),
        thumbnail: driveThumbnail("1SN0XcnN8GDcSBPiYt9plAt3MDECmDQOw"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1lRgAOAVKf92AeaD10Vl_NOy-kCZnpnuc"),
        thumbnail: driveThumbnail("1lRgAOAVKf92AeaD10Vl_NOy-kCZnpnuc"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("14usfVoMV-qncRlRKlMENwiyBarq97Gk5"),
        thumbnail: driveThumbnail("14usfVoMV-qncRlRKlMENwiyBarq97Gk5"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1APi7eGtFqrMa6KdLOrGKHglVWj17qL8B"),
        thumbnail: driveThumbnail("1APi7eGtFqrMa6KdLOrGKHglVWj17qL8B"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1vhzOEze384YxSVTpSfaX3r1hDgckNzw6"),
        thumbnail: driveThumbnail("1vhzOEze384YxSVTpSfaX3r1hDgckNzw6"),
      },
      {
        title: "Futurenation Campaign Photo",
        platform: "drive-image",
        url: driveViewUrl("1ddOcW2rseVVcAb2Uk9fVcu-4UkA4Ui7f"),
        thumbnail: driveThumbnail("1ddOcW2rseVVcAb2Uk9fVcu-4UkA4Ui7f"),
      },
    ],
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

export function driveThumbnail(fileId: string): string {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
}

export function driveViewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/view`;
}

export function getThumbnail(item: GalleryItem): string | null {
  if (item.thumbnail) return item.thumbnail;
  if (item.platform === "youtube") return getYouTubeThumbnail(item.url);
  return null;
}
