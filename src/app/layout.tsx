import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";

const siteUrl = "https://robotstofzuiger-keuzehulp.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Beste Robotstofzuiger met Dweil (NL) — Keuzehulp 2025",
  description: "Vind de perfecte robotstofzuiger voor jouw huis in 60 seconden. Vergelijk 6 geteste modellen op Amazon.nl. Voor tegels, laminaat, tapijt & huisdieren.",
  keywords: "robotstofzuiger, robot stofzuiger met dweil, beste robotstofzuiger, roborock, dreame, ecovacs, amazon.nl, robotstofzuiger met mop, robotstofzuiger test 2025",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beste Robotstofzuiger met Dweil (NL) — Keuzehulp 2025",
    description: "Doe de keuzehulp en vind jouw perfecte match in 60 seconden",
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "Robotstofzuiger Keuzehulp",
    images: [
      {
        url: "/images/products/roborock-qrevo-curv.jpg",
        width: 800,
        height: 600,
        alt: "Robotstofzuiger Keuzehulp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beste Robotstofzuiger met Dweil (NL) — Keuzehulp 2025",
    description: "Vind de perfecte robotstofzuiger voor jouw huis in 60 seconden",
    images: ["/images/products/roborock-qrevo-curv.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "1t1xn-NElySBtyKguiWEUbAgtazGrvRJv9uPWkFbqaA",
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
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
