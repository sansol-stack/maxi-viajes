/**
 * About - Sección "Sobre Nosotros" con diferenciadores
 */

import { motion } from 'framer-motion'
import { Users, Wind, Gauge, ArrowRight } from 'lucide-react'
import Section from './common/Section'
import DifferentiatorBox from './common/DifferentiatorBox'
import Button from './common/Button'
import { DIFFERENTIATORS } from '../constants/differentiators'
import { SITE } from '../constants/config'
import { staggerContainer, slideLeft, slideRight } from '../utils/animations'
import imgMiniatura from '../assets/miniatura3dhiace.png'

export default function About() {
  const scrollToPremium = () => {
    const el = document.getElementById('premium')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Section
      id="nosotros"
      title='Sobre <span class="text-secondary">Nosotros</span>'
      subtitle="Conocé quiénes somos y por qué cientos de familias y ejecutivos nos eligen para sus traslados."
      light
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Columna izquierda: Texto + diferenciadores ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideLeft}
        >
          {/* Párrafo intro */}
          <p className="font-body text-gray-600 text-base leading-relaxed mb-4">
            Somos <strong className="text-primary font-semibold">Maxi Viajes</strong>, una empresa de traslados
            de confianza radicada en San Miguel del Monte, Buenos Aires. Desde {SITE.since},
            brindamos un servicio de calidad premium donde el dueño es el conductor.
          </p>
          <p className="font-body text-gray-500 text-base leading-relaxed mb-8">
            Eso significa que cada viaje es atendido con la dedicación y el cuidado que
            solo un servicio personalizado puede ofrecer. No hay intermediarios:
            trato directo, puntualidad y responsabilidad total.
          </p>

          {/* Diferenciadores */}
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {DIFFERENTIATORS.map((diff) => (
              <DifferentiatorBox
                key={diff.id}
                icon={diff.icon}
                title={diff.title}
                description={diff.description}
                color={diff.color}
                bgColor={diff.bgColor}
              />
            ))}
          </motion.div>

          {/* CTA */}
          <div className="mt-8">
            <Button variant="primary" size="md" whatsapp>
              Contactar ahora
            </Button>
          </div>
        </motion.div>

        {/* ── Columna derecha: Visual ── */}
        <motion.div
          className="relative flex items-center justify-center cursor-pointer group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideRight}
          onClick={scrollToPremium}
        >
          {/* Figura principal */}
          <div className="relative w-full max-w-sm mx-auto">
            {/* Fondo con gradiente */}
            <div className="absolute inset-0 bg-secondary/20 rounded-3xl opacity-10 blur-3xl scale-110 group-hover:opacity-30 transition-opacity duration-500" />

            {/* Card principal */}
            <div className="relative bg-gradient-card rounded-3xl p-10 flex flex-col items-center text-center border border-white/10 group-hover:border-secondary/40 transition-all duration-500 shadow-2xl">
              {/* Decoraciones */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white/15 to-transparent opacity-60" />
              <div className="absolute bottom-10 left-4 w-12 h-12 rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-40" />

              {/* Imagen */}
              <img
                src={imgMiniatura}
                alt="miniatura toyota hiace"
                className="w-full max-w-sm mx-auto drop-shadow-[0_17px_15px_rgba(0,0,0,0.98)]  z-10"
              />

              {/* Texto */}
              <h3 className="font-heading text-white text-2xl font-black mb-1">Toyota Hiace</h3>
              <p className="font-body text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Unidad Business Class
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 w-full">
                {[
                  { num: '6', label: 'Pasajeros', Icon: Users },
                  { num: 'A/C', label: 'Dual', Icon: Wind },
                  { num: 'VIP', label: 'Butacas', Icon: Gauge },
                ].map(({ num, label, Icon }) => (
                  <div key={label} className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col items-center group-hover:bg-white/10 transition-colors">
                    <Icon size={24} className="text-secondary mb-2 opacity-80" />
                    <p className="font-heading text-white text-lg font-black leading-none">{num}</p>
                    <p className="font-body text-white/40 text-[9px] uppercase font-bold tracking-tighter mt-1">{label}</p>
                  </div>
                ))}
              </div>

              {/* Indicador de acción */}
              <div className="mt-6 flex items-center gap-2 text-secondary text-[10px] font-heading font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Ver detalles <ArrowRight size={12} />
              </div>
            </div>

            {/* Badge flotante */}
            <motion.div
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-orange px-5 py-3 z-20"
              animate={{ rotate: [0, 1.5, -1.5, 0], y: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-heading text-primary text-sm font-black leading-none mb-0.5">Dueño al volante</p>
              <p className="font-body text-gray-500 text-[10px] font-bold uppercase tracking-wider">Atención VIP</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
