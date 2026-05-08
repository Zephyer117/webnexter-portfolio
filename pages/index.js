import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative Design Portfolio | Webnexter</title>
        <meta name="description" content="Transforming ideas into stunning visual experiences through innovative design solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <div className="bg-slate-900">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <motion.div
          className="floating-card glass-effect p-4 rounded-2xl shadow-2xl border border-accent-600/30 m-4 mt-12 w-[65%] mx-auto"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Footer />
        </motion.div>
      </div>
    </>
  );
}
