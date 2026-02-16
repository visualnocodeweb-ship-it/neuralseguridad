
import React from 'react';
import { Zap, ChevronRight, ShieldCheck, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 flex flex-col items-center text-center overflow-hidden">

      {/* Abstract Security Shield Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold mb-8 animate-fade-in-up">
        <Globe className="w-3 h-3" />
        SOLUCIONES GLOBALES DE CIBERSEGURIDAD
      </div>

      <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
        BLINDANDO EL <br />
        <span className="gradient-text relative inline-block">
          ESPACIO DIGITAL
          <span className="absolute inset-0 bg-primary-500/20 blur-lg -z-10" />
        </span> <br />
        SIN FRONTERAS
      </h1>

      <p className="text-slate-400 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
        Especialistas en hacking ético y protección de datos corporativos a escala mundial.
        Desarrollado con talento de <span className="text-primary-400 font-semibold">Argentina para el mundo</span>.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="group relative px-8 py-4 bg-primary-500 text-white font-bold rounded-xl overflow-hidden hover:scale-105 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          <span className="relative z-10 flex items-center gap-2">
            AUDITORÍA GLOBAL <ChevronRight className="w-4 h-4" />
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
        </button>
        <button className="px-8 py-4 glass text-white font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 hover:border-primary-500/30">
          <ShieldCheck className="w-5 h-5 text-primary-400" />
          ETHICAL HACKING
        </button>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl opacity-50 border-t border-white/5 pt-8">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold font-display text-white">24/7</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary-400">Global Ops</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold font-display text-white">Web3</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary-400">Ready</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold font-display text-white">Arg</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary-400">Innovation Hub</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold font-display text-white">Zero</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary-400">Breach Policy</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
