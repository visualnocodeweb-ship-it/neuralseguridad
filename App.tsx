
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TerminalSection from './components/TerminalSection';
import GeminiAdvisor from './components/GeminiAdvisor';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative selection:bg-cyan-500/30 overflow-hidden">
      <div className="scanline" />
      
      {/* Background Anime Grid Wrapper */}
      <div className="fixed inset-0 grid-bg -z-10" />

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Hero />
        
        <div id="servicios" className="py-20">
          <Services />
        </div>

        <div id="analisis" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Defensa de <span className="gradient-text">Datos Sin Fronteras</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Protegemos infraestructuras críticas en todo el planeta. De Argentina para el mundo, 
              garantizamos la integridad de tus activos en redes descentralizadas.
            </p>
          </div>
          <TerminalSection />
        </div>

        <div id="contacto" className="py-20">
          <GeminiAdvisor />
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
