/**
 * Fleet - Sección de flota de vehículos
 * Toyota Hiace VX Premium + Toyota Corolla 1.8 XEI CVT + consulta por más
 *
 * SETUP: copiar a src/assets/
 *   fleet-hiace.png    → render oficial Hiace fondo negro
 *   fleet-corolla.png  → render oficial Corolla fondo negro
 *
 * Las imágenes tienen fondo negro puro → se usan con mix-blend-mode: lighten
 * para que el negro desaparezca y el vehículo flote sobre el fondo de la card.
 */

import { motion } from 'framer-motion'
import { Users, Wind, Zap, Star, MessageCircle, ArrowRight, Leaf } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsappLink'
import { staggerContainer, staggerItem } from '../utils/animations'

import imgHiace   from '../assets/fleet-hiace.png'
import imgCorolla from '../assets/fleet-corolla.png'

// ── Diagrama SVG de plazas — Hiace (5 pasajeros disponibles) ─────────────────
// Layout: conductor + 1 acompañante adelante · 2 filas de 2 VIP atrás
function SeatDiagramHiace() {
  const Seat = ({ x, y, isDriver = false, isVip = false }) => (
    <g transform={`translate(${x},${y})`}>
      <rect
        x="0" y="0" width="22" height="26" rx="4"
        fill={isDriver ? 'rgba(255,255,255,0.12)' : isVip ? 'rgba(212,175,55,0.35)' : 'rgba(212,175,55,0.35)'}
        stroke={isDriver ? 'rgba(255,255,255,0.25)' : isVip ? 'rgba(212,175,55,0.7)' : 'rgba(212,175,55,0.7)'}
        strokeWidth="1"
      />
      <rect x="2" y="2" width="18" height="14" rx="3"
        fill={isVip ? 'rgba(212,175,55,0.2)' : 'rgba(255,255,255,0.08)'} />
      <rect x="2" y="17" width="18" height="7" rx="2"
        fill={isVip ? 'rgba(212,175,55,0.12)' : 'rgba(255,255,255,0.05)'} />
      {isVip && (
        <text x="11" y="11" textAnchor="middle" fontSize="7" fill="rgba(212,175,55,0.9)">★</text>
      )}
    </g>
  )

  return (
    <svg viewBox="0 0 160 148" className="w-full max-w-[160px]" aria-label="Distribución de plazas Toyota Hiace — 5 pasajeros">
      {/* Contorno vehículo */}
      <rect x="6" y="6" width="148" height="136" rx="12"
        fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

      {/* Indicador frontal */}
      <text x="80" y="19" textAnchor="middle" fontSize="6.5"
        fill="rgba(255,255,255,0.25)" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">FRENTE</text>

      {/* Fila delantera: conductor + 1 acompañante */}
      <Seat x={34} y={24} isDriver />
      <Seat x={104} y={24} />
      <text x="45" y={57} textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.25)" fontFamily="sans-serif">COND.</text>
      <text x="115" y={57} textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.45)" fontFamily="sans-serif">+1</text>

      {/* Separador cabina / salón */}
      <line x1="20" y1="63" x2="140" y2="63" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Fila trasera 1 — 2 VIP */}
      <Seat x={34} y={70} isVip />
      <Seat x={104} y={70} isVip />

      {/* Fila trasera 2 — 2 VIP */}
      <Seat x={34} y={104} isVip />
      <Seat x={104} y={104} isVip />

      {/* Leyenda */}
      <rect x="14" y="136" width="7" height="7" rx="1"
        fill="rgba(212,175,55,0.35)" stroke="rgba(212,175,55,0.6)" strokeWidth="0.5" />
      <text x="24" y="142" fontSize="6" fill="rgba(212,175,55,0.75)" fontFamily="sans-serif">VIP reclinable</text>

      <rect x="90" y="136" width="7" height="7" rx="1"
        fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
      <text x="100" y="142" fontSize="6" fill="rgba(255,255,255,0.35)" fontFamily="sans-serif">Estándar</text>
    </svg>
  )
}

// ── Diagrama SVG de plazas — Corolla (4 pasajeros disponibles) ───────────────
// Layout: conductor + 1 acompañante adelante · 3 plazas atrás
function SeatDiagramCorolla() {
  const Seat = ({ x, y, isDriver = false }) => (
    <g transform={`translate(${x},${y})`}>
      <rect x="0" y="0" width="22" height="26" rx="4"
        fill={isDriver ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.25)'}
        stroke={isDriver ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.5)'}
        strokeWidth="1" />
      <rect x="2" y="2" width="18" height="14" rx="3"
        fill="rgba(255,255,255,0.08)" />
      <rect x="2" y="17" width="18" height="7" rx="2"
        fill="rgba(255,255,255,0.05)" />
    </g>
  )

  return (
    <svg viewBox="0 0 160 128" className="w-full max-w-[160px]" aria-label="Distribución de plazas Toyota Corolla — 4 pasajeros">
      {/* Contorno vehículo */}
      <rect x="6" y="6" width="148" height="116" rx="12"
        fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

      {/* Indicador frontal */}
      <text x="80" y="19" textAnchor="middle" fontSize="6.5"
        fill="rgba(255,255,255,0.25)" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">FRENTE</text>

      {/* Fila delantera: conductor + acompañante */}
      <Seat x={34} y={24} isDriver />
      <Seat x={104} y={24} />
      <text x="45" y={57} textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.25)" fontFamily="sans-serif">COND.</text>
      <text x="115" y={57} textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.45)" fontFamily="sans-serif">+1</text>

      {/* Separador */}
      <line x1="20" y1="63" x2="140" y2="63" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Fila trasera — 3 plazas */}
      <Seat x={15} y={72} />
      <Seat x={69} y={72} />
      <Seat x={123} y={72} />

      {/* Contador trasero */}
      <text x="80" y="108" textAnchor="middle" fontSize="6"
        fill="rgba(255,255,255,0.35)" fontFamily="sans-serif">3 plazas traseras</text>
    </svg>
  )
}

// ── Datos de los vehículos ────────────────────────────────────────────────────
const VEHICLES = [
  {
    id: 'hiace',
    img: imgHiace,
    badge: 'Más elegida',
    badgeColor: 'bg-secondary text-white shadow-orange',
    name: 'Toyota Hiace',
    version: 'VX Premium',
    tagline: 'Para grupos, familias y viajes largos',
    description:
      'La joya de la flota. Interior Business Class con butacas VIP reclinables eléctricas, cuero bicolor, climatización Nanoe™ dual y espacio generoso para equipaje.',
    specs: [
      { icon: Users, label: '5 pasajeros' },
      { icon: Star,  label: 'Butacas VIP eléctricas' },
      { icon: Wind,  label: 'Nanoe™ A/C dual' },
      { icon: Zap,   label: 'Reclinación motorizada' },
    ],
    Diagram: SeatDiagramHiace,
    accentColor: 'from-secondary/15 to-secondary/5',
    borderColor: 'border-secondary/25',
    featured: true,
    whatsappMsg: 'Hola Maxi, me interesa reservar en la Toyota Hiace',
  },
  {
    id: 'corolla',
    img: imgCorolla,
    badge: 'Ejecutivo',
    badgeColor: 'bg-white/15 text-white border border-white/25',
    name: 'Toyota Corolla',
    version: '1.8 XEI CVT Pack 140cv',
    tagline: 'Para viajes privados y traslados ejecutivos',
    description:
      'Sedán ejecutivo moderno, cómodo y eficiente. Ideal para traslados de hasta 3 pasajeros que priorizan discreción y puntualidad en viajes urbanos o de media distancia.',
    specs: [
      { icon: Users, label: '4 pasajeros' },
      { icon: Leaf,  label: 'Motor híbrido eficiente' },
      { icon: Wind,  label: 'Climatización automática' },
      { icon: Star,  label: 'Confort ejecutivo' },
    ],
    Diagram: SeatDiagramCorolla,
    accentColor: 'from-white/8 to-white/3',
    borderColor: 'border-white/15',
    featured: false,
    whatsappMsg: 'Hola Maxi, me interesa reservar en el Toyota Corolla',
  },
]

// ── Componente principal ─────────────────────────────────────────────────────
export default function Fleet() {
  return (
    <section
      id="flota"
      className="bg-dark py-20 md:py-28 overflow-hidden"
      aria-label="Nuestra flota de vehículos"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="block w-10 h-0.5 bg-secondary rounded-full mb-5" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                Nuestra{' '}
                <span className="text-secondary"
                  style={{ textShadow: '0 0 30px rgba(212,175,55,0.25)' }}>
                  Flota
                </span>
              </h2>
              <p className="font-body text-white/45 text-lg mt-3 max-w-md leading-relaxed">
                Dos vehículos Toyota de primer nivel para cada tipo de traslado.
                Elegí el que mejor se adapta a tu viaje.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Cards de vehículos ── */}
        <motion.div
          className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {VEHICLES.map((v) => (
            <motion.div
              key={v.id}
              variants={staggerItem}
              className={`group relative rounded-3xl border ${v.borderColor}
                          bg-gradient-to-b ${v.accentColor}
                          overflow-hidden transition-all duration-300
                          hover:border-secondary/50 hover:-translate-y-1
                          ${v.featured ? 'ring-1 ring-secondary/30 ring-offset-1 ring-offset-dark' : ''}`}
            >
              {/* Badge */}
              <div className="absolute top-5 left-5 z-20">
                <span className={`font-heading text-[10px] font-black uppercase tracking-widest
                                  px-3 py-1.5 rounded-full ${v.badgeColor}`}>
                  {v.badge}
                </span>
              </div>

              {/* Imagen del vehículo — blend mode hace desaparecer el negro */}
              <div className="relative h-52 sm:h-60 overflow-hidden flex items-center justify-center
                              bg-gradient-to-b from-dark/80 to-dark">
                <img
                  src={v.img}
                  alt={v.name}
                  className="w-full h-full object-contain scale-110
                             group-hover:scale-[1.15] transition-transform duration-500"
                  style={{ mixBlendMode: 'lighten' }}
                />
                {/* Gradiente inferior sobre la imagen */}
                <div className="absolute bottom-0 left-0 right-0 h-20
                                bg-gradient-to-t from-dark to-transparent" />
              </div>

              {/* Contenido */}
              <div className="px-6 pb-6 pt-2">

                {/* Nombre y versión */}
                <div className="mb-1">
                  <h3 className="font-heading text-2xl font-black text-white
                                 group-hover:text-secondary transition-colors duration-300">
                    {v.name}
                  </h3>
                  <p className="font-body text-white/40 text-xs mt-0.5">{v.version}</p>
                </div>

                <p className="font-heading text-secondary/80 text-xs font-semibold
                               uppercase tracking-wider mb-3 italic">
                  {v.tagline}
                </p>

                <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
                  {v.description}
                </p>

                {/* Layout: specs + diagrama de plazas */}
                <div className="flex gap-6 items-start mb-6">

                  {/* Specs */}
                  <div className="flex-1 grid grid-cols-1 gap-3">
                    {v.specs.map(({ icon: Icon, label }) => (
                      <div key={label}
                        className="flex items-center gap-2 bg-white/5 border border-white/8
                                   rounded-xl px-3 py-2">
                        <Icon size={13} className="text-secondary flex-shrink-0" />
                        <span className="font-body text-white/65 text-xs leading-tight">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Diagrama de plazas */}
                  <div className="flex-shrink-0 w-[120px]">
                    <p className="font-heading text-white/25 text-[9px] uppercase
                                  tracking-widest mb-2 text-center">Plazas</p>
                    <v.Diagram />
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => openWhatsApp(v.whatsappMsg)}
                  className="w-full inline-flex items-center justify-center gap-2
                             bg-secondary/15 hover:bg-secondary border border-secondary/30
                             hover:border-secondary text-secondary hover:text-white
                             font-heading font-bold text-sm px-5 py-3 rounded-xl
                             transition-all duration-200 hover:scale-[1.02] group/btn"
                >
                  <MessageCircle size={16} />
                  Consultar disponibilidad
                  <ArrowRight size={14}
                    className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Card "Consultar por más plazas" ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => openWhatsApp('Hola Maxi, quiero consultar por un traslado para un grupo grande')}
            className="w-full group relative rounded-2xl border border-white/10 border-dashed
                       hover:border-secondary/40 bg-white/3 hover:bg-white/5
                       transition-all duration-300 overflow-hidden"
          >
            {/* Glow sutil */}
            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/3
                            transition-colors duration-300 rounded-2xl" />

            <div className="relative flex flex-col sm:flex-row items-center justify-between
                            gap-4 px-8 py-6">
              <div className="flex items-center gap-5">
                {/* Ícono de grupo */}
                <div className="w-12 h-12 rounded-2xl bg-white/8 border border-white/12
                                flex items-center justify-center flex-shrink-0
                                group-hover:border-secondary/40 transition-colors">
                  <Users size={22} className="text-white/40 group-hover:text-secondary transition-colors" />
                </div>
                <div className="text-left">
                  <p className="font-heading text-white/70 font-bold text-base
                                group-hover:text-white transition-colors">
                    ¿Necesitás más plazas?
                  </p>
                  <p className="font-body text-white/35 text-sm">
                    Contamos con vehículos de mayor capacidad para grupos. Consultanos.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white/30 group-hover:text-secondary
                              font-heading font-bold text-sm transition-all duration-200
                              group-hover:gap-3 flex-shrink-0">
                Consultar
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Línea de acento */}
            <div className="absolute bottom-0 left-0 w-0 h-px bg-secondary
                            group-hover:w-full transition-all duration-500 ease-out" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}