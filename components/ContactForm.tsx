
import React, { useState } from 'react';
import { Send, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setResponseMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setResponseMessage(data.message || '¡Mensaje enviado con éxito!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setResponseMessage(data.message || 'Ocurrió un error al enviar el mensaje.');
      }
    } catch (error) {
      setStatus('error');
      setResponseMessage('No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.');
    }
  };

  const getButtonIcon = () => {
    switch (status) {
      case 'submitting':
        return <Loader className="animate-spin w-5 h-5" />;
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'error':
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return <Send className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter">Contacta con Nosotros</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            ¿Listo para fortalecer tu seguridad? Envíanos tus dudas y un experto se pondrá en contacto contigo.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto glass p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Tu Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-slate-900/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
            />
            <input
              type="email"
              placeholder="Tu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-slate-900/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="¿En qué podemos ayudarte?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-full md:w-auto mx-auto disabled:opacity-50"
            >
              {getButtonIcon()}
              <span>
                {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
              </span>
            </button>
          </div>
          {responseMessage && (
            <div className={`mt-6 text-center text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {responseMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
