
import React from 'react';
import { Terminal, ShieldCheck, Zap, Cpu, Lock, Search, Eye, Fingerprint } from 'lucide-react';

const services = [
  {
    icon: <Terminal className="w-8 h-8 text-primary-400" />,
    title: "Red Teaming Operations",
    desc: "Simulaciones de adversarios reales. No es un test de estrés, es una guerra controlada contra tus defensas para encontrar el eslabón más débil."
  },
  {
    icon: <Fingerprint className="w-8 h-8 text-blue-400" />,
    title: "Data Sanitization & Shielding",
    desc: "Blindaje de activos críticos corporativos. Implementamos protocolos de cifrado de extremo a extremo y aislamiento de datos sensibles."
  },
  {
    icon: <Zap className="w-8 h-8 text-sky-400" />,
    title: "Incident Response & Forensics",
    desc: "Respuesta de élite en tiempo real. Si fuiste atacado, recuperamos tus datos, analizamos la huella del atacante y blindamos la brecha."
  },
  {
    icon: <Cpu className="w-8 h-8 text-indigo-400" />,
    title: "Web3 Smart Contract Audits",
    desc: "Seguridad para la nueva economía. Auditorías exhaustivas de código para protocolos DeFi, DAOs y lanzamientos de activos digitales."
  },
  {
    icon: <Lock className="w-8 h-8 text-primary-300" />,
    title: "Zero Trust Implementation",
    desc: "Arquitectura de confianza cero para corporaciones modernas. Gestión de identidad y acceso (IAM) nivel bancario para equipos globales."
  },
  {
    icon: <Search className="w-8 h-8 text-emerald-400" />,
    title: "OSINT & Deep Web Intelligence",
    desc: "Monitoreo preventivo de activos. Localizamos fugas de credenciales y datos corporativos antes de que se vendan en mercados negros."
  }
];

const Services: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, idx) => (
          <div key={idx} className="glass p-8 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all group hover:-translate-y-2 relative overflow-hidden">
            {/* Hover decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 blur-3xl rounded-full group-hover:bg-primary-500/10 transition-colors" />

            <div className="mb-6 bg-slate-900/50 w-fit p-4 rounded-xl border border-white/5 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-300">
              {/* Force clone element to change color if needed, or just rely on parent class if SVG inherits, but icons have explicit colors. 
                  For now, we update the icon definition in the array above separately or assume they are static.
                  Wait, I need to update the array 'services' strictly speaking to change the icon colors.
                  Since I can't reach the array in this block (it's outside), I will have to update the array separately or replace the whole file. 
                  I will replace the whole file to ensure icons are updated.
              */}
              {s.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary-300 transition-colors font-display">{s.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {s.desc}
            </p>
            <div className="mt-6 flex items-center text-[10px] font-bold text-primary-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Solicitar Protocolo <Zap className="w-3 h-3 ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
