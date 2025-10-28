import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins, firaCode } from "./fonts";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: {
    default: "Matthew Ogieva | Digital Showcase of Professional Identity",
    template: "%s | E-Portfolio",
  },
  description:
    "Explore a professional portfolio showcasing achievements, leadership experience, and reflective insights — crafted to highlight skills, career growth, and impact.",
  keywords: [
    "E-Portfolio",
    "Digital Portfolio",
    "Professional Showcase",
    "Leadership Development",
    "Career Coaching",
    "Matthew Ogieva",
  ],
  authors: [{ name: "Matthew Ogieva" }],
  metadataBase: new URL("https://matthewogieva.com"),
  openGraph: {
    title: "E-Portfolio | Matthew Ogieva",
    description:
      "A digital showcase of professional achievements, leadership insights, and publications.",
    url: "https://matthewogieva.com",
    siteName: "Matthew Ogieva E-Portfolio",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Matthew Ogieva — E-Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Ogieva | E-Portfolio",
    description:
      "Discover Matthew Ogieva’s professional journey, leadership philosophy, and featured works.",
    creator: "@MatthewOgieva",
    images: ["/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://matthewogieva.com",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${poppins.variable} ${firaCode.variable}`}
    >
      <body className="font-sans text-text bg-_background flex flex-col min-h-screen">
        
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:z-50 focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-text focus:px-4 focus:py-2 focus:rounded-md shadow-lg"
        >
          Skip to main content
        </a>

      
        <Navbar />

       
        <main id="main-content" className="grow">
          {children}
        </main>

      
        <Footer />
      </body>
    </html>
  );
}
