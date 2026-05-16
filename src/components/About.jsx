/**
 * About - Sección "Sobre Nosotros" con diferenciadores
 */

import { motion } from 'framer-motion'
import { Car } from 'lucide-react'
import Section from './common/Section'
import DifferentiatorBox from './common/DifferentiatorBox'
import Button from './common/Button'
import { DIFFERENTIATORS } from '../constants/differentiators'
import { SITE } from '../constants/config'
import { staggerContainer, slideLeft, slideRight } from '../utils/animations'

export default function About() {
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
          className="relative flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideRight}
        >
          {/* Figura principal */}
          <div className="relative w-full max-w-sm mx-auto">
            {/* Fondo con gradiente */}
            <div className="absolute inset-0 bg-gradient-card rounded-3xl opacity-10 blur-3xl scale-110" />

            {/* Card principal */}
            <div className="relative bg-gradient-card rounded-3xl p-10 flex flex-col items-center text-center">
              {/* Decoraciones */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10" />
              <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/10" />

              {/* Icono */}
              {/* <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mb-6 
                              animate-float shadow-lg">
                <Car size={48} className="text-white" />
              </div> */}

              {/* Imagen */}
              <img src="./public/miniatura3dhiace.png" alt="miniatura toyota hiace" className="w-full max-w-sm mx-auto" />

              {/* Texto */}
              <h3 className="font-heading text-white text-2xl font-bold mb-2">Toyota Hiace</h3>
              <p className="font-body text-white/70 text-sm mb-6">
                Nuestro vehículo estrella para tu comodidad
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 w-full">
                {[
                  { num: '6', label: 'Pasajeros' },
                  { num: 'A/C', label: 'Climatizado' },
                  { num: '∞', label: 'km recorridos' },
                ].map(({ num, label }) => (
                  <div key={label} className="bg-white/10 rounded-xl p-3">
                    <p className="font-heading text-white text-xl font-bold">{num}</p>
                    <p className="font-body text-white/60 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge flotante */}
            <motion.div
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-card px-4 py-3"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="font-heading text-secondary text-sm font-bold">Dueño al volante</p>
              <p className="font-body text-gray-400 text-xs">Atención personalizada</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
