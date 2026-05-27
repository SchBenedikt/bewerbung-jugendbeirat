import type { Metadata } from "next";
import { Bangers, Nunito } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const siteUrl = "https://bewerbung-jugendbeirat.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bewerbung Jugendbeirat 2026 | Vinzenz & Benedikt Schächner",
  description:
    "Interaktive Comic-Bewerbung von Vinzenz und Benedikt Schächner für den Jugendbeirat 2026 des Deutschen Multimediapreises.",
  keywords: [
    "Jugendbeirat",
    "Deutscher Multimediapreis",
    "Bewerbung",
    "Vinzenz Schächner",
    "Benedikt Schächner",
    "Crossmedia",
    "BR",
    "Altötting",
    "Meum Diarium",
  ],
  authors: [{ name: "Vinzenz & Benedikt Schächner" }],
  creator: "Vinzenz & Benedikt Schächner",
  publisher: "Vinzenz & Benedikt Schächner",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Bewerbung Jugendbeirat 2026",
    title: "Bewerbung Jugendbeirat 2026 | Vinzenz & Benedikt Schächner",
    description:
      "Interaktive Comic-Bewerbung von Vinzenz und Benedikt Schächner für den Jugendbeirat 2026 des Deutschen Multimediapreises.",
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bewerbung Jugendbeirat 2026 - Vinzenz & Benedikt Schächner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bewerbung Jugendbeirat 2026 | Vinzenz & Benedikt Schächner",
    description:
      "Interaktive Comic-Bewerbung von Vinzenz und Benedikt Schächner für den Jugendbeirat 2026 des Deutschen Multimediapreises.",
    images: ["/og.png"],
  },
  other: {
    "theme-color": "#1D3557",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bangers.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Bewerbung Jugendbeirat 2026",
              description:
                "Interaktive Comic-Bewerbung von Vinzenz und Benedikt Schächner für den Jugendbeirat 2026 des Deutschen Multimediapreises.",
              author: {
                "@type": "Person",
                name: "Vinzenz & Benedikt Schächner",
              },
              about: {
                "@type": "Thing",
                name: "Deutscher Multimediapreis Jugendbeirat 2026",
              },
              inLanguage: "de",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
