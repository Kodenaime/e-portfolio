import type { Metadata } from 'next';
import { inter, poppins, firaCode } from './fonts'; // Import from new fonts.ts
import './globals.css';

export const metadata: Metadata = {
  title: 'E-Portfolio',
  description: 'A digital showcase of professional identity, competencies, and artifacts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${firaCode.variable}`}>
      <body className={`font-sans text-text`}>
        {children}
      </body>
    </html>
  );
}