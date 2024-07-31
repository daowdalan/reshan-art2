import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PageTransition from '../components/PageTransition';


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
      </head>
      
      <body className={inter.className}>
      <PageTransition>
          <Navbar />
          <main className="pt-14"> {/* Add padding-top to avoid overlap with Navbar */}
            {children}
          </main>
          <Footer />
        </PageTransition>
      </body>
      
    </html>
  );
}
