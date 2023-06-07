import Head from 'next/head';
import { Inter } from 'next/font/google';
import Navbar from '../components/navbar';
import HeroSection from '../components/heroSection';
import AboutSection from '../components/aboutSection';
import MediaSection from '../components/mediaSection';
import ContactSection from '../components/contactSection';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  return (
    <>
      <Head>
        <title>Esmeralda Tällö - Föreläsare & Inspiratör</title>
        <meta
          name="description"
          content="Boka Esmeralda Tällö, från Elitstyrkans Hemligheter, som föreläsare. Föreläsare och Inspiratör."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <main>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MediaSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

export default Home;
