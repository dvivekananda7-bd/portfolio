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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body className="bg-background text-text-primary font-body antialiased">
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
