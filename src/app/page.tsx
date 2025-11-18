import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import Experience from '@/src/components/Experience';
import Skills from '@/src/components/Skills';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
