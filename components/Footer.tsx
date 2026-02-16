
import React from 'react';
import { Shield, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 glass py-12 relative overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-primary-500/5 blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-bold tracking-tighter uppercase font-display">NEURAL-SEC GLOBAL</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 italic border-l-2 border-primary-500/30 pl-4">
              "De Argentina para el mundo. Innovación criolla, seguridad global."
            </p>
            <p className="text-slate-400 max-w-sm mb-6">
              Empoderando organizaciones para prosperar en la nueva frontera digital
              mediante seguridad de clase mundial y resiliencia cibernética.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass rounded-lg hover:text-primary-400 transition-colors hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-lg hover:text-primary-400 transition-colors hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-lg hover:text-primary-400 transition-colors hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-lg hover:text-primary-400 transition-colors hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-slate-500">Servicios</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Pentesting Global</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Audit Smart Contracts</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Corporate Security</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Incident Response</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-slate-500">Legal & Compliance</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Global Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Ethical Guidelines</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">GDPR / Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest">
          <p>© 2025 NEURAL-SEC GLOBAL. WORLDWIDE OPERATIONS.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" /> BORN IN ARGENTINA
            </span>
            <span className="flex items-center gap-1">
              PROTECTING THE FUTURE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
