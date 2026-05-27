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

export const metadata: Metadata = {
  title: "Bewerbung Jugendbeirat 2026 | Vinzenz & Benedikt Schächner",
  description:
    "Interaktive Comic-Bewerbung von Vinzenz und Benedikt Schächner für den Jugendbeirat 2026 des Deutschen Multimediapreises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bangers.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
