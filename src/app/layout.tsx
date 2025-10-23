import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins, firaCode } from "./fonts";


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: 'E-Portfolio',
  description: 'A digital showcase of professional identity, competencies, and artifacts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
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