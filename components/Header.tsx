import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Wallet, Loader2 } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const navItems = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Terminal', href: '#analisis' },
    { name: 'AI Expert', href: '#contacto' },
  ];

  const handleConnect = () => {
    if (walletAddress) {
      setWalletAddress(null); // Disconnect
      return;
    }

    setIsConnecting(true);
    // Simular conexión
    setTimeout(() => {
      setIsConnecting(false);
      setWalletAddress('0x71C...9A2');
    }, 1500);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary-500/10 rounded-lg border border-primary-500/20 relative group overflow-hidden">
            <div className="absolute inset-0 bg-primary-400/20 blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />
            <Shield className="w-6 h-6 text-primary-400 relative z-10" />
          </div>
          <span className="text-xl font-bold tracking-tighter font-display">
            NEURAL<span className="text-primary-400">-SEC</span> <span className="text-sm font-light text-slate-500">GLOBAL</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-slate-300 hover:text-primary-400 transition-colors uppercase tracking-widest font-medium"
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={handleConnect}
            disabled={isConnecting}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2
              ${walletAddress
                ? 'bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 active:scale-95'
              }
            `}
          >
            {isConnecting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                CONECTANDO...
              </>
            ) : walletAddress ? (
              <>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {walletAddress}
              </>
            ) : (
              <>
                CONECTAR WALLET
              </>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-white/5 py-6 px-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg text-slate-300 active:text-primary-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              handleConnect();
              if (!walletAddress) setIsMenuOpen(false); // Close menu if connecting, keep open if disconnecting/viewing? Optional. Let's just trigger logic.
            }}
            className="w-full py-3 bg-primary-600 text-white rounded-lg font-bold flex justify-center items-center gap-2"
          >
            {isConnecting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                CONECTANDO...
              </>
            ) : walletAddress ? (
              <>
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                {walletAddress}
              </>
            ) : (
              'CONECTAR WALLET'
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
