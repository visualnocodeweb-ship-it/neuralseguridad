import React, { useEffect, useState } from 'react';

const areas = [
  {
    index: '01',
    title: 'Inteligencia de datos',
    short: 'Orden único para decidir.',
    detail: 'Registros, señales y archivos que llegan por separado pasan a un mismo orden. Lo incompleto se identifica y la lectura queda lista para decidir, sin sumar un tablero de más.',
    points: [
      'Las fuentes entran a un orden único: registros, señales y archivos.',
      'Lo incompleto se marca antes de usar la lectura.',
      'La salida es una decisión clara, no un tablero extra.',
    ],
    accent: 'text-blue-800',
    line: 'bg-blue-700',
    font: 'font-syne',
  },
  {
    index: '02',
    title: 'Orquestación de agentes de IA',
    short: 'Roles coordinados.',
    detail: 'Varios agentes avanzan con un rol claro: buscar, contrastar, redactar o avisar. La orquestación reparte el contexto y deriva a una persona cuando la tarea lo pide.',
    points: [
      'Cada agente cubre un rol: buscar, contrastar, redactar o avisar.',
      'El contexto pasa de un agente al siguiente.',
      'Si la tarea lo pide, el caso llega a una persona.',
    ],
    accent: 'text-violet-800',
    line: 'bg-violet-700',
    font: 'font-display',
  },
  {
    index: '03',
    title: 'Información geográfica',
    short: 'Capas, zonas y mapas.',
    detail: 'El dato también tiene lugar. Capas, zonas y mapas conviven en el mismo sistema, para ver cobertura, recorridos y qué ocurre en cada territorio.',
    points: [
      'Capas, zonas y mapas viven en el mismo sistema.',
      'Cobertura, recorridos y actividad se ven por territorio.',
      'El lugar del dato se cruza con el resto de la operación.',
    ],
    accent: 'text-emerald-800',
    line: 'bg-emerald-700',
    font: 'font-outfit',
  },
  {
    index: '04',
    title: 'Tecnología aplicada',
    short: 'Del flujo manual al sistema.',
    detail: 'La pieza técnica llega a un proyecto concreto: un flujo que hoy se hace a mano, una operación que hay que ver en el mapa, o un sistema que tiene que quedar en uso.',
    points: [
      'Un flujo manual pasa a un sistema en uso.',
      'La operación se puede seguir sobre el mapa.',
      'El proyecto queda andando, no en una propuesta.',
    ],
    accent: 'text-orange-800',
    line: 'bg-orange-700',
    font: 'font-fraunces',
  },
  {
    index: '05',
    title: 'Tokenización',
    short: 'Activos on-chain.',
    detail: 'La emisión queda definida de punta a punta: qué se tokeniza, cómo se registra y cómo se consulta después. El activo no se queda en una idea.',
    points: [
      'Queda definido qué se tokeniza y cómo se registra.',
      'La emisión y la consulta van en el mismo recorrido.',
      'El activo se puede seguir después de salir.',
    ],
    accent: 'text-cyan-800',
    line: 'bg-cyan-700',
    font: 'font-mono',
  },
  {
    index: '06',
    title: 'Seguridad',
    short: 'Auditoría y defensa.',
    detail: 'Auditoría, respuesta y protección de datos en el mismo recorrido. El punto débil se identifica y la defensa queda operativa.',
    points: [
      'Auditoría, respuesta y protección van juntas.',
      'El punto débil se identifica sobre el sistema real.',
      'La defensa queda operativa.',
    ],
    accent: 'text-rose-800',
    line: 'bg-rose-700',
    font: 'font-sora',
  },
];

const iconBtn =
  'inline-flex h-9 w-9 items-center justify-center rounded-md border border-sky-300/90 bg-white/80 text-neutral-800 shadow-[0_0_0_1px_rgba(125,211,252,0.35)] backdrop-blur transition hover:border-sky-500 hover:shadow-[0_0_18px_rgba(56,189,248,0.28)]';

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" strokeWidth="1.8" aria-hidden="true">
    <defs>
      <linearGradient id="mail-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#4f46e5" />
      </linearGradient>
    </defs>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="url(#mail-grad)" />
    <path d="M3 7l9 7 9-7" stroke="url(#mail-grad)" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#059669" strokeWidth="1.8" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="#0A66C2"
      d="M4.7 3.3A1.7 1.7 0 1 0 4.7 6.7 1.7 1.7 0 0 0 4.7 3.3zM3.2 8.2h3V20.7h-3V8.2zM9.2 8.2h2.9v1.7h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v7.7h-3v-6.8c0-1.6 0-3.7-2.3-3.7s-2.6 1.7-2.6 3.6v6.9h-3V8.2z"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="#25D366"
      d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.9c-.24.68-1.4 1.25-1.93 1.33-.49.07-1.1.1-1.78-.11-.41-.13-.94-.3-1.62-.59-2.85-1.23-4.7-4.1-4.84-4.29-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.26.64-.38 1.02-.38.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.82 2 .89 2.15.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.13-.28.28-.12.54.16.26.71 1.17 1.52 1.89 1.05.93 1.93 1.22 2.2 1.36.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.54.73 1.8.86.27.13.44.19.51.3.06.11.06.64-.18 1.32z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" strokeWidth="1.8" aria-hidden="true">
    <defs>
      <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#f9ce34" />
        <stop offset="45%" stopColor="#ee2a7b" />
        <stop offset="100%" stopColor="#6228d7" />
      </linearGradient>
    </defs>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#ig-grad)" />
    <circle cx="12" cy="12" r="4" stroke="url(#ig-grad)" />
    <circle cx="17.5" cy="6.5" r="1" fill="url(#ig-grad)" stroke="none" />
  </svg>
);

const desktopNodes = [
  { id: 'intel', x: 400, y: 150, label: 'Inteligencia', r: 32, color: '#4f46e5', above: false },
  { id: 'agents', x: 108, y: 112, label: 'Agentes de IA', r: 18, color: '#7c3aed', above: false },
  { id: 'orch', x: 168, y: 48, label: 'Orquestación de agentes de IA', r: 17, color: '#6d28d9', above: true },
  { id: 'sig', x: 668, y: 58, label: 'SIG', r: 18, color: '#059669', above: false },
  { id: 'data', x: 118, y: 228, label: 'Análisis de datos', r: 18, color: '#0284c7', above: false },
  { id: 'privacy', x: 652, y: 220, label: 'Protección de datos', r: 18, color: '#db2777', above: false },
  { id: 'a', x: 540, y: 52, label: '', r: 5, color: '#818cf8', above: false },
  { id: 'b', x: 300, y: 248, label: '', r: 5, color: '#22d3ee', above: false },
  { id: 'd', x: 470, y: 252, label: '', r: 4, color: '#34d399', above: false },
];

const mobileNodes = [
  { id: 'intel', x: 180, y: 188, label: 'Inteligencia', r: 22, color: '#4f46e5', above: false },
  { id: 'orch', x: 180, y: 40, label: 'Orquestación de agentes de IA', r: 13, color: '#6d28d9', above: true },
  { id: 'agents', x: 70, y: 108, label: 'Agentes de IA', r: 13, color: '#7c3aed', above: false },
  { id: 'sig', x: 290, y: 108, label: 'SIG', r: 13, color: '#059669', above: false },
  { id: 'data', x: 96, y: 292, label: 'Análisis de datos', r: 13, color: '#0284c7', above: false },
  { id: 'privacy', x: 258, y: 292, label: 'Protección de datos', r: 13, color: '#db2777', above: false },
  { id: 'a', x: 242, y: 70, label: '', r: 3.5, color: '#818cf8', above: false },
  { id: 'b', x: 148, y: 348, label: '', r: 3.5, color: '#22d3ee', above: false },
  { id: 'd', x: 208, y: 352, label: '', r: 3, color: '#34d399', above: false },
];

const networkLinks: Array<[string, string]> = [
  ['intel', 'agents'],
  ['intel', 'orch'],
  ['intel', 'sig'],
  ['intel', 'data'],
  ['intel', 'privacy'],
  ['intel', 'b'],
  ['agents', 'data'],
  ['agents', 'orch'],
  ['orch', 'a'],
  ['sig', 'a'],
  ['sig', 'privacy'],
  ['data', 'b'],
  ['b', 'd'],
  ['privacy', 'd'],
  ['a', 'intel'],
];

const desktopStack = [
  { name: 'Python', x: 18, y: 178, anchor: 'start', delay: '0s' },
  { name: 'n8n', x: 348, y: 22, anchor: 'start', delay: '1.1s' },
  { name: 'API', x: 470, y: 22, anchor: 'start', delay: '0.4s' },
  { name: 'Vercel', x: 786, y: 132, anchor: 'end', delay: '1.8s' },
  { name: 'Render', x: 196, y: 198, anchor: 'start', delay: '0.7s' },
  { name: 'OSINT', x: 786, y: 186, anchor: 'end', delay: '1.4s' },
  { name: 'Nosis', x: 400, y: 292, anchor: 'middle', delay: '2.1s' },
];

const mobileStack = [
  { name: 'Python', x: 8, y: 86, anchor: 'start', delay: '0s' },
  { name: 'n8n', x: 14, y: 16, anchor: 'start', delay: '1.1s' },
  { name: 'API', x: 308, y: 16, anchor: 'start', delay: '0.4s' },
  { name: 'Vercel', x: 354, y: 156, anchor: 'end', delay: '1.8s' },
  { name: 'Render', x: 8, y: 230, anchor: 'start', delay: '0.7s' },
  { name: 'OSINT', x: 354, y: 236, anchor: 'end', delay: '1.4s' },
  { name: 'Nosis', x: 180, y: 378, anchor: 'middle', delay: '2.1s' },
];

const intelMesh = {
  pts: [[0, 0], [-0.7, -0.3], [0.66, -0.38], [-0.55, 0.55], [0.72, 0.36], [0.02, -0.78]],
  links: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 3], [2, 4], [1, 5], [5, 2]],
};

const Network = () => {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const apply = () => setCompact(query.matches);
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);
  const networkNodes = compact ? mobileNodes : desktopNodes;
  const stackMarks = compact ? mobileStack : desktopStack;
  const core = networkNodes.find((node) => node.id === 'intel') ?? networkNodes[0];
  const ringA = compact ? 30 : 48;
  const ringB = compact ? 40 : 60;
  const byId = Object.fromEntries(networkNodes.map((node) => [node.id, node]));
  return (
    <div className="relative h-full w-full">
    <svg viewBox={compact ? '0 0 360 392' : '0 0 800 300'} className="relative h-full w-full" role="img" aria-label="Red de inteligencia, orquestación de agentes de IA, SIG, análisis y protección de datos">
      <defs>
        <marker id="net-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M1 1.5 L8 5 L1 8.5" fill="none" stroke="#64748b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        {networkNodes.filter((node) => node.label).map((node) => (
          <clipPath id={`clip-${node.id}`} key={node.id}>
            <circle cx={node.x} cy={node.y} r={node.r - 1.4} />
          </clipPath>
        ))}
      </defs>
      {stackMarks.map((mark) => (
        <text
          key={mark.name}
          x={mark.x}
          y={mark.y}
          textAnchor={mark.anchor}
          fill="#a5b4fc"
          fontSize="14"
          fontFamily="Space Grotesk, sans-serif"
          letterSpacing="1.5"
          className="stack-word"
          style={{ animationDelay: mark.delay }}
        >
          {mark.name}
        </text>
      ))}
      {networkLinks.map(([from, to], index) => {
        const a = byId[from];
        const b = byId[to];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const len = Math.hypot(dx, dy) || 1;
        const x1 = a.x + (dx / len) * (a.r + 3);
        const y1 = a.y + (dy / len) * (a.r + 3);
        const x2 = b.x - (dx / len) * (b.r + 9);
        const y2 = b.y - (dy / len) * (b.r + 9);
        const path = `M ${x1} ${y1} L ${x2} ${y2}`;
        return (
          <g key={`${from}-${to}`}>
            <path id={`link-${index}`} d={path} fill="none" stroke="#cbd5e1" strokeWidth="1.2" markerEnd="url(#net-arrow)" />
            <path
              d={path}
              fill="none"
              stroke="#64748b"
              strokeWidth="1.3"
              strokeOpacity="0.9"
              className="network-flow"
              style={{ animationDelay: `${index * 0.18}s` }}
            />
            <circle r="2.6" fill="#475569">
              <animateMotion dur={`${2.4 + (index % 4) * 0.45}s`} repeatCount="indefinite">
                <mpath href={`#link-${index}`} />
              </animateMotion>
            </circle>
          </g>
        );
      })}
      <g>
        <animateTransform attributeName="transform" type="rotate" from={`0 ${core.x} ${core.y}`} to={`360 ${core.x} ${core.y}`} dur="26s" repeatCount="indefinite" />
        <circle className="network-pulse" cx={core.x} cy={core.y} r={ringA} fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="2 4" />
        {[0, 72, 144, 216, 288].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return <circle key={deg} cx={core.x + Math.cos(rad) * ringA} cy={core.y + Math.sin(rad) * ringA} r="2.1" fill="#6366f1" />;
        })}
      </g>
      <g>
        <animateTransform attributeName="transform" type="rotate" from={`360 ${core.x} ${core.y}`} to={`0 ${core.x} ${core.y}`} dur="18s" repeatCount="indefinite" />
        <circle className="network-pulse" cx={core.x} cy={core.y} r={ringB} fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="1 6" style={{ animationDelay: '0.8s' }} />
      </g>
      {networkNodes.map((node) => {
        const rich = node.id === 'intel';
        const ticks = rich ? 28 : 14;
        const scan = node.r * 0.62;
        const sweep = rich ? (() => {
          const radius = node.r * 0.7;
          const a1 = -0.7;
          const a2 = 0.45;
          const x1 = node.x + Math.cos(a1) * radius;
          const y1 = node.y + Math.sin(a1) * radius;
          const x2 = node.x + Math.cos(a2) * radius;
          const y2 = node.y + Math.sin(a2) * radius;
          return `M ${node.x} ${node.y} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`;
        })() : '';
        return (
        <g key={node.id}>
          <circle cx={node.x} cy={node.y} r={node.r + 5} fill={node.color} opacity="0.12" className="network-pulse" />
          <circle cx={node.x} cy={node.y} r={node.r} fill="#ffffff" stroke={node.color} strokeWidth={node.label ? 1.6 : 0} />
          {!node.label && <circle cx={node.x} cy={node.y} r={node.r} fill={node.color} />}
          {node.label && (
            <g clipPath={`url(#clip-${node.id})`}>
              <circle cx={node.x} cy={node.y} r={node.r * 0.38} fill="none" stroke={node.color} strokeWidth="0.6" opacity="0.4" />
              <line x1={node.x - node.r * 0.72} y1={node.y} x2={node.x - node.r * 0.28} y2={node.y} stroke={node.color} strokeWidth="0.45" opacity="0.45" />
              <line x1={node.x + node.r * 0.28} y1={node.y} x2={node.x + node.r * 0.72} y2={node.y} stroke={node.color} strokeWidth="0.45" opacity="0.45" />
              <line x1={node.x} y1={node.y - node.r * 0.72} x2={node.x} y2={node.y - node.r * 0.28} stroke={node.color} strokeWidth="0.45" opacity="0.45" />
              <line x1={node.x} y1={node.y + node.r * 0.28} x2={node.x} y2={node.y + node.r * 0.72} stroke={node.color} strokeWidth="0.45" opacity="0.45" />
              {Array.from({ length: ticks }, (_, index) => {
                const angle = (index / ticks) * Math.PI * 2;
                const major = index % (rich ? 4 : 7) === 0;
                const inner = node.r * (major ? 0.74 : 0.84);
                const outer = node.r * 0.93;
                return (
                  <line
                    key={index}
                    x1={node.x + Math.cos(angle) * inner}
                    y1={node.y + Math.sin(angle) * inner}
                    x2={node.x + Math.cos(angle) * outer}
                    y2={node.y + Math.sin(angle) * outer}
                    stroke={node.color}
                    strokeWidth={major ? 1 : 0.45}
                    strokeOpacity="0.85"
                  />
                );
              })}
              {rich && intelMesh.links.map(([from, to], index) => {
                const [fx, fy] = intelMesh.pts[from];
                const [tx, ty] = intelMesh.pts[to];
                const scale = node.r * 0.42;
                return (
                  <line
                    key={`mesh-${index}`}
                    x1={node.x + fx * scale}
                    y1={node.y + fy * scale}
                    x2={node.x + tx * scale}
                    y2={node.y + ty * scale}
                    stroke={node.color}
                    strokeWidth="0.7"
                    strokeOpacity="0.7"
                  />
                );
              })}
              {rich && intelMesh.pts.map(([px, py], index) => (
                <circle
                  key={`dot-${index}`}
                  cx={node.x + px * node.r * 0.42}
                  cy={node.y + py * node.r * 0.42}
                  r={index === 0 ? 1.7 : 1.05}
                  fill={node.color}
                />
              ))}
              <g>
                <animateTransform attributeName="transform" type="rotate" from={`0 ${node.x} ${node.y}`} to={`360 ${node.x} ${node.y}`} dur={rich ? '7s' : '11s'} repeatCount="indefinite" />
                {rich && <path d={sweep} fill={node.color} opacity="0.16" />}
                <circle cx={node.x} cy={node.y} r={scan} fill="none" stroke={node.color} strokeWidth="1.35" strokeLinecap="round" strokeDasharray={`${scan * 1.15} ${scan * 4.2}`} />
              </g>
              <g>
                <animateTransform attributeName="transform" type="rotate" from={`360 ${node.x} ${node.y}`} to={`0 ${node.x} ${node.y}`} dur={rich ? '13s' : '9s'} repeatCount="indefinite" />
                <circle cx={node.x} cy={node.y} r={node.r * 0.5} fill="none" stroke={node.color} strokeWidth="0.8" strokeLinecap="round" strokeDasharray={`${node.r * 0.35} ${node.r * 1.8}`} opacity="0.8" />
              </g>
              <circle cx={node.x} cy={node.y} r={rich ? 2.1 : 1.35} fill={node.color} />
            </g>
          )}
          {node.label && (
            <text
              x={node.x}
              y={node.above ? node.y - node.r - (compact ? 15 : 22) : node.y + node.r + (node.id === 'intel' ? (compact ? 22 : 36) : (compact ? 13 : 16))}
              textAnchor="middle"
              fill="#0f172a"
              fontSize={node.id === 'orch' ? 11 : 12}
              fontFamily="Space Grotesk, sans-serif"
            >
              {node.id === 'orch' ? (
                <>
                  <tspan x={node.x} dy="0">Orquestación</tspan>
                  <tspan x={node.x} dy="13">de agentes de IA</tspan>
                </>
              ) : (
                node.label
              )}
            </text>
          )}
        </g>
        );
      })}
    </svg>
    </div>
  );
};

const HudCorners = ({ tone = 'border-sky-500' }: { tone?: string }) => (
  <>
    <span className={`pointer-events-none absolute left-0 top-0 h-2.5 w-2.5 border-l border-t ${tone}`} />
    <span className={`pointer-events-none absolute right-0 top-0 h-2.5 w-2.5 border-r border-t ${tone}`} />
    <span className={`pointer-events-none absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l ${tone}`} />
    <span className={`pointer-events-none absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r ${tone}`} />
  </>
);

const EMAIL = 'emanueltula89@gmail.com';
const INSTAGRAM = 'https://www.instagram.com/ematula.ok';
const LINKEDIN = 'https://www.linkedin.com/in/emanuel-tula';
const PHONE = '02944249272';
const WHATSAPP = 'https://wa.me/5492944249272';

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const selected = areas.find((area) => area.index === open) ?? null;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      try {
        const field = document.createElement('textarea');
        field.value = EMAIL;
        document.body.appendChild(field);
        field.select();
        document.execCommand('copy');
        field.remove();
      } catch {
        /* el aviso igual confirma la acción */
      }
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div id="inicio" className="relative flex h-dvh flex-col overflow-x-hidden overflow-y-auto bg-[#f4f7fb] font-sans text-slate-950 md:overflow-hidden">
      <div className="jarvis-grid pointer-events-none absolute inset-0" />
      <div className="jarvis-scan pointer-events-none absolute inset-x-0 top-0 z-[5]" />
      <div className="pointer-events-none absolute inset-2 z-20 sm:inset-3">
        <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-sky-500" />
        <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-sky-500" />
        <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-sky-500" />
        <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-sky-500" />
      </div>

      <header className="relative z-10 mx-2 mt-2 flex shrink-0 items-center justify-between gap-2 border border-sky-200/90 bg-white/80 px-3 py-2 backdrop-blur sm:mx-3 sm:mt-3 sm:px-5">
        <a href="#inicio" className="font-mono text-[10px] font-medium tracking-[0.18em] text-sky-700 sm:text-[11px] sm:tracking-[0.32em]">
          NEURAL
        </a>
        <p className="font-mono text-[9px] tracking-[0.12em] text-slate-500 sm:text-[10px] sm:tracking-[0.24em]">SISTEMA · EN LÍNEA</p>
        <p className="shrink-0 font-mono text-[9px] tracking-[0.1em] text-slate-500 sm:text-[10px] sm:tracking-[0.18em]">24/7 · AR</p>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col px-3 py-3 sm:px-8 sm:py-4 md:min-h-0">
        <div className="text-center">
          <p className="font-mono text-[9px] tracking-[0.22em] text-sky-600 sm:text-[10px] sm:tracking-[0.34em]">NÚCLEO // INTELIGENCIA</p>
          <h1 className="mt-1 font-display text-[1.7rem] font-semibold leading-tight tracking-tight sm:text-4xl">
            Inteligencia de datos
          </h1>
          <p className="mx-auto mt-2 max-w-2xl font-syne text-[13px] font-medium leading-relaxed text-slate-600 sm:text-sm">
            Orden de la información, orquestación de agentes, territorio, tokenización y defensa.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 sm:mt-5">
            <span className="group relative">
              <button
                type="button"
                onClick={copyEmail}
                className={`${iconBtn} border-sky-200 bg-sky-100/80`}
                aria-label={copied ? 'Correo copiado' : 'Copiar correo'}
              >
                {copied ? <CheckIcon /> : <MailIcon />}
              </button>
              <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-1.5 -translate-x-1/2 rounded-md bg-neutral-800 px-2 py-1 text-[11px] font-medium text-white opacity-0 transition group-hover:opacity-100">
                {copied ? 'Copiado' : 'Copiar'}
              </span>
            </span>
            <span className="group relative">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className={`${iconBtn} border-emerald-300 bg-emerald-50`}
                aria-label={`WhatsApp ${PHONE}`}
                title={PHONE}
              >
                <WhatsAppIcon />
              </a>
              <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-800 px-2 py-1 text-[11px] font-medium text-white opacity-0 transition group-hover:opacity-100">
                {PHONE}
              </span>
            </span>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className={`${iconBtn} border-fuchsia-200 bg-gradient-to-br from-amber-100/90 via-rose-100/80 to-violet-200/80`}
              aria-label="Instagram"
              title="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className={`${iconBtn} border-sky-300 bg-sky-100/90`}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="relative mt-2 shrink-0 md:mt-0 md:min-h-[120px] md:flex-1">
          <div className="aspect-[360/392] w-full md:absolute md:inset-0 md:aspect-auto">
            <Network />
          </div>
          {selected && (
            <article className={`relative z-10 mt-3 border border-sky-300/90 bg-white/95 p-3 shadow-[0_0_24px_rgba(56,189,248,0.16)] backdrop-blur md:absolute md:inset-x-0 md:bottom-0 md:mt-0 md:max-h-full md:overflow-auto ${selected.font}`}>
              <HudCorners />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={`font-mono text-[10px] font-medium uppercase tracking-[0.2em] ${selected.accent}`}>
                    Servicio {selected.index}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold">{selected.title}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  className="shrink-0 border border-sky-300 bg-white px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-slate-700 hover:border-sky-500"
                >
                  Cerrar
                </button>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">{selected.detail}</p>
              <ul className="mt-2 grid gap-2 sm:grid-cols-3">
                {selected.points.map((point) => (
                  <li key={point} className="border border-sky-100 bg-sky-50/80 px-3 py-2 text-[11px] leading-snug text-slate-600">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          )}
        </div>

        <section id="areas" className="mt-3 grid grid-cols-2 items-start gap-2 md:mt-0 md:grid-cols-3 md:gap-3">
          {areas.map((area) => {
            const isOpen = open === area.index;
            return (
              <button
                key={area.index}
                type="button"
                onClick={() => setOpen(isOpen ? null : area.index)}
                aria-expanded={isOpen}
                className={`relative border bg-white/80 p-2.5 text-left backdrop-blur sm:p-3 ${
                  isOpen
                    ? 'border-sky-400 shadow-[0_0_0_1px_rgba(14,165,233,0.35),0_0_22px_rgba(56,189,248,0.2)]'
                    : 'border-sky-200/90 hover:border-sky-400'
                }`}
              >
                <HudCorners tone={isOpen ? 'border-sky-500' : 'border-sky-400/80'} />
                <div className={`mb-2 h-px w-8 ${area.line}`} />
                <p className={`font-mono text-[10px] font-medium uppercase tracking-[0.18em] ${area.accent}`}>
                  Servicio {area.index}
                </p>
                <h2 className={`mt-1 text-sm font-semibold leading-tight ${area.font}`}>{area.title}</h2>
                <p className={`mt-1 text-[11px] text-slate-500 ${area.font}`}>{area.short}</p>
              </button>
            );
          })}
        </section>
      </main>

      <footer id="contacto" className="relative z-10 mx-2 mb-2 mt-3 flex shrink-0 items-center justify-between gap-2 border border-sky-200/90 bg-white/80 px-3 py-2 text-[11px] text-slate-500 backdrop-blur sm:mx-3 sm:mb-3 md:mt-0">
        <p className="font-mono text-[9px] tracking-[0.16em] text-sky-700 sm:text-[10px] sm:tracking-[0.28em]">NEURAL</p>
        <p className="font-mono text-[9px] tracking-[0.1em] sm:text-[10px] sm:tracking-[0.16em]">ENLACE ACTIVO</p>
        <p className="font-mono text-[9px] tracking-[0.1em] sm:text-[10px] sm:tracking-[0.16em]">24/7 · Argentina</p>
      </footer>
    </div>
  );
};

export default App;
