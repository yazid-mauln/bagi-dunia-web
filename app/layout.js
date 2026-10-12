import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Bagi Dunia — A space to gather, explore your good, and grow with young changemakers.',
  description: 'Bagi Dunia adalah komunitas yang membuka ruang untuk berbagi, bertumbuh, dan bergerak bersama demi dunia yang lebih baik.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
