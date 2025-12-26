import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Beste Robotstofzuiger met Dweil (NL) — Keuzehulp 2025",
  description: "Vind de perfecte robotstofzuiger voor jouw huis in 60 seconden. Vergelijk 6 geteste modellen op Amazon.nl. Voor tegels, laminaat, tapijt & huisdieren.",
  keywords: "robotstofzuiger, robot stofzuiger met dweil, beste robotstofzuiger, roborock, dreame, ecovacs, amazon.nl",
  openGraph: {
    title: "Beste Robotstofzuiger met Dweil (NL) — Keuzehulp 2025",
    description: "Doe de keuzehulp en vind jouw perfecte match in 60 seconden",
    type: "website",
    locale: "nl_NL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
