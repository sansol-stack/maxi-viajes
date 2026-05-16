/**
 * Destinations - Layout aspiracional tipo "mapa de viaje"
 * Fondo claro, cards grandes con imagen/color evocador, feel geográfico
 */

import { motion } from 'framer-motion'
import { Plane, Waves, Building2, MapPin, ArrowUpRight, Clock, Navigation } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsappLink'

const DESTINATIONS = [
  {
    id: 'buenos-aires',
    Icon: Building2,
    emoji: '🏙️',
    title: 'Buenos Aires',
    subtitle: 'CABA & Gran Buenos Aires',
    distance: '~120 km',
    time: '~1.5 hs',
    description: 'CABA, Zona Norte, La Plata y todo el GBA. Llegá cómodo al corazón de la ciudad.',
    tags: ['CABA', 'Zona Norte', 'La Plata', 'GBA'],
    gradient: 'from-slate-800 to-slate-950',
    accentLight: 'bg-slate-100',
    textAccent: 'text-slate-600',
    popular: false,
    whatsappMsg: 'Hola Maxi, consulto por un traslado a Buenos Aires',
  },
  {
    id: 'costa',
    Icon: Waves,
    emoji: '🌊',
    title: 'Costa Atlántica',
    subtitle: 'Pinamar · Gesell · Mar del Plata',
    distance: '~350 km',
    time: '~4 hs',
    description: 'El destino de verano más elegido. Viaje directo, sin transbordos, con todo tu equipaje.',
    tags: ['Pinamar', 'Cariló', 'Villa Gesell', 'Mar del Plata', 'Costa Esmeralda'],
    gradient: 'from-cyan-700 to-blue-900',
    accentLight: 'bg-cyan-50',
    textAccent: 'text-cyan-700',
    popular: true,
    whatsappMsg: 'Hola Maxi, consulto por un viaje a la Costa Atlántica',
  },
  {
    id: 'aeropuertos',
    Icon: Plane,
    emoji: '✈️',
    title: 'Aeropuertos',
    subtitle: 'Ezeiza · Aeroparque',
    distance: 'EZE ~140 km',
    time: '~2 hs',
    description: 'Salí de casa y llegá a la puerta de embarque sin preocuparte por el tráfico ni los horarios.',
    tags: ['Ezeiza (EZE)', 'Aeroparque (AEP)', 'Llegadas y salidas'],
    gradient: 'from-violet-800 to-indigo-950',
    accentLight: 'bg-violet-50',
    textAccent: 'text-violet-700',
    popular: false,
    whatsappMsg: 'Hola Maxi, necesito traslado al aeropuerto',
  },
  {
    id: 'otras',
    Icon: MapPin,
    emoji: '📍',
    title: 'Destino a medida',
    subtitle: 'Consultanos tu ruta',
    distance: 'Variable',
    time: 'Variable',
    description: '¿Tu destino no está en la lista? Hacemos rutas especiales. Consultanos sin cargo.',
    tags: ['Destinos especiales', 'Rutas a medida', 'Sin cargo de consulta'],
    gradient: 'from-stone-700 to-stone-900',
    accentLight: 'bg-stone-100',
    textAccent: 'text-stone-600',
    popular: false,
    whatsappMsg: 'Hola Maxi, quiero consultar por un destino especial',
  },
]

export default function Destinations() {
  return (
    <section
      id="destinos"
      className="bg-light py-20 md:py-28 overflow-hidden"
      aria-label="Destinos disponibles"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-14 md:mb-18 text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="block w-10 h-0.5 bg-secondary rounded-full mb-5 mx-auto" />

          {/* Pill de origen */}
          <div className="inline-flex items-center gap-2 bg-white border border-light-dark/30
                           shadow-sm rounded-full px-4 py-2 mb-6">
            <Navigation size={13} className="text-secondary" />
            <span className="font-body text-gray-500 text-xs">
              Salida desde <strong className="text-dark">San Miguel del Monte</strong> o cualquier
              punto del GBA
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-dark leading-tight">
            ¿A dónde{' '}
            <span className="text-secondary">viajás</span>?
          </h2>
          <p className="font-body text-gray-500 text-lg mt-3 max-w-lg mx-auto leading-relaxed">
            Elegí tu destino y consultanos. Precio cerrado, sin sorpresas,
            sin intermediarios.
          </p>
        </motion.div>

        {/* Grid asimétrico: 1 card grande + 3 menores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">

          {/* Card GRANDE — Costa Atlántica (la más popular) */}
          {(() => {
            const d = DESTINATIONS.find(d => d.id === 'costa')
            return (
              <motion.button
                key={d.id}
                onClick={() => openWhatsApp(d.whatsappMsg)}
                className={`lg:col-span-5 lg:row-span-2 relative rounded-3xl bg-gradient-to-br ${d.gradient}
                             overflow-hidden text-left group min-h-[320px] lg:min-h-[420px]
                             hover:-translate-y-1 transition-transform duration-300 shadow-card hover:shadow-card-hover`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55 }}
              >
                {/* Badge popular */}
                <div className="absolute top-5 left-5 z-10 flex items-center gap-1.5
                                 bg-secondary text-white text-[10px] font-heading font-bold
                                 uppercase tracking-widest px-3 py-1.5 rounded-full shadow-orange">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Más elegido
                </div>

                {/* Arrow */}
                <div className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/10
                                 border border-white/20 flex items-center justify-center
                                 group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                  <ArrowUpRight size={15} className="text-white/70 group-hover:text-white" />
                </div>

                {/* Decoración visual — olas abstractas */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 h-40
                                   bg-gradient-to-t from-cyan-400/40 to-transparent" />
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-cyan-400/20" />
                  <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-blue-400/15" />
                </div>

                {/* Contenido */}
                <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="text-5xl mb-3">{d.emoji}</div>
                  <h3 className="font-heading text-3xl font-black text-white mb-1">{d.title}</h3>
                  <p className="font-heading text-white/60 text-sm font-semibold mb-4">{d.subtitle}</p>

                  {/* Meta info */}
                  <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Navigation size={12} className="text-secondary" />
                      <span className="font-body text-white/60 text-xs">{d.distance}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} className="text-secondary" />
                      <span className="font-body text-white/60 text-xs">{d.time}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {d.tags.map(t => (
                      <span key={t} className="bg-white/10 backdrop-blur-sm text-white/70
                                                text-[10px] font-body px-2 py-0.5 rounded-full border border-white/15">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            )
          })()}

          {/* Cards menores — las otras 3 */}
          {DESTINATIONS.filter(d => d.id !== 'costa').map((d, i) => (
            <motion.button
              key={d.id}
              onClick={() => openWhatsApp(d.whatsappMsg)}
              className={`lg:col-span-7 relative rounded-2xl bg-white border border-light-dark/20
                           overflow-hidden text-left group
                           hover:-translate-y-0.5 hover:shadow-card transition-all duration-300
                           ${d.id === 'otras' ? 'border-dashed border-light-dark/40 bg-light' : ''}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-stretch">
                {/* Franja de color izquierda */}
                <div className={`w-1.5 flex-shrink-0 bg-gradient-to-b ${d.gradient} rounded-l-2xl`} />

                {/* Contenido */}
                <div className="flex items-center gap-5 p-5 flex-1 min-w-0">
                  {/* Icono */}
                  <div className={`flex-shrink-0 w-14 h-14 ${d.accentLight} rounded-2xl
                                    flex items-center justify-center text-2xl
                                    group-hover:scale-110 transition-transform duration-300`}>
                    {d.emoji}
                  </div>

                  {/* Texto */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg font-bold text-dark
                                   group-hover:text-primary transition-colors mb-0.5">
                      {d.title}
                    </h3>
                    <p className={`font-heading text-xs font-semibold ${d.textAccent} mb-2`}>
                      {d.subtitle}
                    </p>
                    <p className="font-body text-gray-400 text-xs leading-snug line-clamp-2">
                      {d.description}
                    </p>
                  </div>

                  {/* Meta + arrow */}
                  <div className="flex-shrink-0 flex flex-col items-end gap-3 hidden sm:flex">
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1">
                        <Clock size={10} className="text-gray-300" />
                        <span className="font-body text-gray-400 text-[10px]">{d.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Navigation size={10} className="text-gray-300" />
                        <span className="font-body text-gray-400 text-[10px]">{d.distance}</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center
                                     group-hover:border-secondary group-hover:bg-secondary/5 transition-all duration-300">
                      <ArrowUpRight size={13} className="text-gray-300 group-hover:text-secondary transition-colors" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags en fila inferior */}
              <div className="flex gap-1.5 flex-wrap px-5 pb-4 pt-0">
                {d.tags.map(t => (
                  <span key={t} className={`${d.accentLight} ${d.textAccent}
                                            text-[10px] font-body px-2 py-0.5 rounded-full`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center font-body text-gray-400 text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          ¿Tu destino no está en la lista?{' '}
          <button
            onClick={() => openWhatsApp('Hola Maxi, consulto por un destino especial')}
            className="text-secondary font-semibold hover:underline"
          >
            Consultanos sin cargo →
          </button>
        </motion.p>
      </div>
    </section>
  )
}