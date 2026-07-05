import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ScrollProvider } from "@/components/providers/ScrollProvider";
import "./globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-body-family" });
const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading-family",
});

export const metadata: Metadata = {
  title: "Vivekananda Das — Communications Strategist & Filmmaker",
  description:
    "Portfolio of Vivekananda Das: communications strategist and filmmaker working across international campaigns, mentorship programs, and independent film.",
  openGraph: {
    title: "Vivekananda Das — Communications Strategist & Filmmaker",
    description:
      "Portfolio of Vivekananda Das: communications strategist and filmmaker working across international campaigns, mentorship programs, and independent film.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivekananda Das — Communications Strategist & Filmmaker",
    description:
      "Portfolio of Vivekananda Das: communications strategist and filmmaker working across international campaigns, mentorship programs, and independent film.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vivekananda Das",
  jobTitle: "Communications Strategist & Filmmaker",
  email: "mailto:dvivekananda7@gmail.com",
  sameAs: [
    "https://www.facebook.com/vivek.anup.7",
    "https://www.linkedin.com/in/vivekananda7",
    "https://www.instagram.com/vivek_ananda_das/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-background text-text-primary font-body antialiased">
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
