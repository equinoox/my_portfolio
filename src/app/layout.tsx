import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Lazar Pavlović — Software Developer",
  description:
    "Portfolio Lazara Pavlovića, software developera fokusiranog na razvoj pouzdanih i skalabilnih web i mobilnih aplikacija — React, Next.js, Laravel, ASP.NET Core, PostgreSQL.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body className="overflow-x-hidden bg-background font-sans text-foreground antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
