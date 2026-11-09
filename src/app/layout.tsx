import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollProvider } from "@/components/providers/ScrollProvider";
import { site } from "@/content/site";
import "./globals.css";

/**
 * Type: SF Pro.
 *
 * SF Pro cannot be self-hosted — Apple's licence restricts it to Apple
 * platforms, so bundling the files on a public site is not permitted. The
 * stack in globals.css resolves to the real SF Pro on macOS and iOS via
 * `-apple-system`, and falls back to Inter everywhere else. Inter was drawn
 * as an open counterpart to SF and is the closest legal match on Windows
 * and Android.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = `${site.name} — ${site.title}`;
const description =
  "Video production, brand content strategy, influencer content management and AI brand content, from Dhaka, Bangladesh. 50+ national TVCs, award-nominated independent film, and UNDP campaign work across 101 countries.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "video production Dhaka",
    "brand content strategy Bangladesh",
    "influencer content management",
    "AI brand content",
    "TVC director Bangladesh",
    "campaign production",
    "brand storytelling",
    "filmmaker Dhaka",
  ],
  authors: [{ name: site.name }],
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  knowsAbout: [
    "Video Production",
    "Brand Content Strategy",
    "Influencer Content Management",
    "AI Brand Content",
  ],
  sameAs: [
    site.links.facebook,
    site.links.linkedin,
    site.links.instagram,
    site.links.youtube,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-black text-text-primary antialiased">
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
