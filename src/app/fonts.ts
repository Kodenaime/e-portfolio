import { Inter, Poppins, Fira_Code } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-fira-code',
});