import './globals.css';
import { Inter } from 'next/font/google';
// import { Roboto } from 'next/font/google';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });
// const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Home',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen bg-gray-200">
        {children}
        <Footer />
      </body>
    </html>
  );
}
