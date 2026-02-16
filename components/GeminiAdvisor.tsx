
import React, { useState } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { getSecurityAdvice } from '../services/gemini';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GeminiAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Bienvenido a **NEURAL-SEC GLOBAL**. Soy tu consultor experto. ¿Qué desafíos de seguridad enfrenta tu organización hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getSecurityAdvice(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response || 'No se pudo generar una respuesta.' }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto glass rounded-3xl border border-white/10 overflow-hidden flex flex-col h-[600px] shadow-2xl">
      <div className="bg-white/5 p-6 border-b border-white/5 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-violet-600 rounded-full flex items-center justify-center">
          <Bot className="text-white w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold">Neural-Sec CyberAI</h3>
          <p className="text-xs text-fuchsia-400 font-mono flex items-center gap-1">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> GLOBAL NODE ACTIVE
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl flex gap-3 ${
              msg.role === 'user' 
                ? 'bg-fuchsia-600/20 border border-fuchsia-500/30 text-slate-100 rounded-tr-none' 
                : 'bg-slate-800/40 border border-white/10 text-slate-300 rounded-tl-none'
            }`}>
              <div className="shrink-0 mt-1">
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-fuchsia-400" />}
              </div>
              <div className="text-sm leading-relaxed whitespace-pre-wrap">
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800/50 p-4 rounded-2xl flex items-center gap-3 border border-white/10">
              <Loader2 className="w-4 h-4 animate-spin text-fuchsia-400" />
              <span className="text-sm text-slate-400">Analizando protocolos globales...</span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white/5 border-t border-white/5 flex gap-2">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Consulta sobre seguridad global..."
          className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-fuchsia-500 transition-all"
        />
        <button 
          disabled={isLoading}
          className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-50"
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default GeminiAdvisor;
