/**
 * About - Sección "Sobre Nosotros"
 * Enfocada en Maximiliano Etcheverry, su historia y cobertura geográfica.
 * La flota fue separada a Fleet.jsx
 *
 * SETUP: no requiere assets nuevos.
 */

import { motion } from 'framer-motion'
import { MapPin, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react'
import Section from './common/Section'
import DifferentiatorBox from './common/DifferentiatorBox'
import Button from './common/Button'
import { DIFFERENTIATORS } from '../constants/differentiators'
import { SITE } from '../constants/config'
import { staggerContainer, slideLeft, slideRight } from '../utils/animations'

// ── Zonas de cobertura ───────────────────────────────────────────────────────
const COVERAGE_ZONES = [
  { label: 'Ciudad Autónoma de Buenos Aires', highlight: true },
  { label: 'Gran Buenos Aires (todas las zonas)' },
  { label: 'Costa Atlántica — Pinamar, Cariló, Mar del Plata y más' },
  { label: 'Aeropuertos — Ezeiza (EZE) y Aeroparque (AEP)' },
  { label: 'Interior del país — Rosario, Córdoba, Mendoza y más' },
  { label: 'Destinos especiales y rutas a medida' },
]

export default function About() {
  return (
    <Section
      id="nosotros"
      title='Sobre <span class="text-secondary">Nosotros</span>'
      subtitle="La historia detrás del servicio y por qué cientos de familias y ejecutivos eligen a Maxi para sus traslados."
      light
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── Columna izquierda: Quién es Maxi + diferenciadores ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideLeft}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-0.5 bg-secondary rounded-full" />
            <span className="font-heading text-secondary text-xs font-bold uppercase tracking-widest">
              Quién es Maxi
            </span>
          </div>

          {/* Párrafo principal */}
          <p className="font-body text-gray-600 text-base leading-relaxed mb-4">
            <strong className="text-dark font-semibold">Maximiliano Etcheverry</strong> es el
            dueño y conductor de Maxi Viajes. Desde {SITE.since} maneja personalmente cada
            traslado — sin empleados, sin intermediarios, sin sorpresas.
          </p>
          <p className="font-body text-gray-500 text-base leading-relaxed mb-8">
            Eso significa que cuando reservás, sabés exactamente quién va a estar al volante.
            Una persona que eligió este trabajo y lo ejerce con compromiso real en cada kilómetro.
          </p>

          {/* Diferenciadores */}
          <motion.div
            className="space-y-3 mb-8"
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
          <Button variant="primary" size="md" whatsapp>
            <MessageCircle size={16} />
            Hablar con Maxi
          </Button>
        </motion.div>

        {/* ── Columna derecha: Cobertura geográfica ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideRight}
          className="flex flex-col gap-6"
        >
          {/* Card de cobertura */}
          <div className="bg-white rounded-3xl border border-light-dark/20 shadow-card overflow-hidden">

            {/* Header de la card */}
            <div className="bg-gradient-to-br from-dark to-primary-light px-7 py-6 relative overflow-hidden">
              {/* Decoraciones */}
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border border-white/8" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full border border-white/5" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={15} className="text-secondary" />
                  <span className="font-heading text-secondary text-xs font-bold uppercase tracking-widest">
                    Base operativa
                  </span>
                </div>
                <h3 className="font-heading text-white text-xl font-black mb-1">
                  Ciudad de Buenos Aires
                </h3>
                <p className="font-body text-white/55 text-sm leading-relaxed">
                  Operamos desde CABA con cobertura en todo el territorio nacional.
                  No importa a dónde necesitás llegar — consultanos.
                </p>
              </div>
            </div>

            {/* Lista de zonas */}
            <div className="px-7 py-5">
              <p className="font-heading text-dark text-xs font-bold uppercase tracking-widest mb-4">
                Destinos disponibles
              </p>
              <ul className="space-y-3">
                {COVERAGE_ZONES.map((zone) => (
                  <li key={zone.label} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className={`flex-shrink-0 mt-0.5 ${zone.highlight ? 'text-secondary' : 'text-green-500'}`}
                    />
                    <span className={`font-body text-sm leading-snug ${
                      zone.highlight
                        ? 'text-dark font-semibold'
                        : 'text-gray-500'
                    }`}>
                      {zone.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer de la card */}
            <div className="px-7 pb-6">
              <div className="bg-secondary/8 border border-secondary/20 rounded-2xl px-5 py-4">
                <p className="font-body text-gray-600 text-xs leading-relaxed">
                  <strong className="text-dark">¿Tu destino no aparece?</strong>{' '}
                  Maxi realiza rutas a medida a cualquier punto del país.
                  Consultá sin cargo y recibís respuesta en minutos.
                </p>
                <button
                  onClick={() => {
                    const wa = `https://wa.me/5492271410310?text=${encodeURIComponent('Hola Maxi, quiero consultar disponibilidad para un destino')}`
                    window.open(wa, '_blank', 'noopener,noreferrer')
                  }}
                  className="mt-3 inline-flex items-center gap-1.5 text-secondary font-heading
                             font-bold text-xs hover:gap-2.5 transition-all duration-200"
                >
                  Consultar mi destino
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* Badge "Dueño al volante" */}
          <motion.div
            className="self-end bg-white rounded-2xl shadow-card px-5 py-4 border border-light-dark/20
                       flex items-center gap-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center
                            flex-shrink-0 shadow-orange">
              <span className="font-heading font-black text-white text-base">M</span>
            </div>
            <div>
              <p className="font-heading text-dark text-sm font-black leading-none mb-0.5">
                Dueño al volante
              </p>
              <p className="font-body text-gray-400 text-xs">
                Desde {SITE.since} · Atención personalizada
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}