import { motion } from 'framer-motion'
import { Plane, Waves, Briefcase, ArrowRight, MessageCircle } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsappLink'

const SERVICES = [
  {
    id: 'aeropuertos',
    number: '01',
    Icon: Plane,
    badge: 'EZE · AEP',
    title: 'Traslados a Aeropuertos',
    tagline: 'Llegá a tiempo. Sin estrés.',
    description:
      'Coordinamos el horario según tu vuelo y monitoreamos demoras en tiempo real. Salís de casa sabiendo que vas a llegar. Cubrimos Ezeiza (EZE) y Aeroparque (AEP) con margen de seguridad incluido.',
    bullets: [
      'Monitoreo de vuelos en tiempo real',
      'Puntualidad garantizada o te avisamos',
      'Retiro en puerta de tu domicilio',
    ],
    whatsappMsg: 'Hola Maxi, necesito un traslado al aeropuerto',
    accentColor: 'from-secondary/20 to-secondary/5',
    borderColor: 'border-secondary/30',
  },
  {
    id: 'costa',
    number: '02',
    Icon: Waves,
    badge: 'Temporada alta',
    title: 'Costa Atlántica',
    tagline: 'El mar más cerca que nunca.',
    description:
      'Pinamar, Cariló, Villa Gesell, Mar del Plata, Costa Esmeralda. Viaje directo, sin escalas, en total comodidad. Ideal para familias con equipaje, grupos y temporada de verano.',
    bullets: [
      'Rutas directas sin transbordos',
      'Amplio espacio para equipaje',
      'Paradas de descanso planificadas',
    ],
    whatsappMsg: 'Hola Maxi, quiero consultar un viaje a la Costa Atlántica',
    accentColor: 'from-blue-900/20 to-blue-900/5',
    borderColor: 'border-blue-500/20',
  },
  {
    id: 'ejecutivos',
    number: '03',
    Icon: Briefcase,
    badge: 'Business',
    title: 'Traslados Ejecutivos',
    tagline: 'Tu agenda, nuestra prioridad.',
    description:
      'Reuniones, eventos corporativos, compromisos de negocio. Servicio discreto, puntual y profesional. El dueño al volante garantiza la calidad y confidencialidad que tu posición requiere.',
    bullets: [
      'Flexibilidad horaria total',
      'Discreción y confidencialidad',
      'Atención ejecutiva personalizada',
    ],
    whatsappMsg: 'Hola Maxi, necesito un traslado ejecutivo',
    accentColor: 'from-amber-900/15 to-amber-900/5',
    borderColor: 'border-amber-600/20',
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-dark py-20 md:py-28 overflow-hidden"
      aria-label="Nuestros servicios"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="block w-10 h-0.5 bg-secondary rounded-full mb-5" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                Nuestros{' '}
                <span className="text-secondary" style={{ textShadow: '0 0 30px rgba(212,175,55,0.25)' }}>
                  Servicios
                </span>
              </h2>
              <p className="font-body text-white/45 text-lg mt-3 max-w-md leading-relaxed">
                Tres soluciones de traslado diseñadas para distintas necesidades,
                todas con el mismo estándar premium.
              </p>
            </div>

            {/* CTA header */}
            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-2 text-secondary hover:text-white
                         font-heading font-semibold text-sm transition-colors duration-200 group flex-shrink-0"
            >
              <MessageCircle size={16} />
              Consultar ahora
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Cards verticales — cada una es una fila */}
        <div className="space-y-5">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <button
                onClick={() => openWhatsApp(svc.whatsappMsg)}
                className={`w-full text-left group relative rounded-2xl border ${svc.borderColor}
                             bg-gradient-to-r ${svc.accentColor} backdrop-blur-sm
                             hover:border-secondary/50 transition-all duration-350
                             overflow-hidden`}
              >
                {/* Glow hover */}
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/3 transition-colors duration-350 rounded-2xl" />

                <div className="relative flex flex-col sm:flex-row sm:items-center gap-6 p-6 md:p-8">


                  {/* Icono */}
                  <div className={`flex-shrink-0 w-24 h-24 rounded-2xl bg-dark/60 border ${svc.borderColor}
                                    flex items-center justify-center
                                    group-hover:scale-110 group-hover:border-secondary/60 transition-all duration-300`}>
                    <svc.Icon size={44} className="text-secondary" />
                  </div>

                  {/* Texto principal */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-white
                                     group-hover:text-secondary transition-colors duration-300">
                        {svc.title}
                      </h3>
                      <span className="bg-secondary/15 text-secondary text-[10px] font-heading font-bold
                                       uppercase tracking-widest px-2.5 py-1 rounded-full border border-secondary/20">
                        {svc.badge}
                      </span>
                    </div>
                    <p className="font-heading text-white/70 text-sm font-semibold mb-3 italic">
                      "{svc.tagline}"
                    </p>
                    <p className="font-body text-white/60 text-sm leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  {/* Bullets — visible en desktop */}
                  <div className="hidden lg:flex flex-col gap-2 flex-shrink-0 w-56">
                    {svc.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                        <span className="font-body text-xs text-white/70 leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow CTA */}
                  <div className="flex-shrink-0 self-center">
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center
                                    group-hover:border-secondary group-hover:bg-secondary/20 transition-all duration-300">
                      <ArrowRight size={16} className="text-white/50 group-hover:text-secondary
                                                        group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Línea de acento inferior */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary
                                group-hover:w-full transition-all duration-500 ease-out" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer strip */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-body text-white/25 text-sm">
            Todos los servicios incluyen atención directa con el dueño · Sin intermediarios
          </p>
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-body text-white/30 text-xs">Disponible ahora</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}