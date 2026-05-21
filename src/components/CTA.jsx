import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import Button from './common/Button'
import { CONTACT } from '../constants/config'
import { slideUp } from '../utils/animations'

import ctaBg from '../assets/cta-bg.webp'

export default function CTA() {
  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      aria-label="Contacto y consulta"
    >
      {/* ── Imagen de fondo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="Toyota Hiace VX Premium frente al Park Tower Buenos Aires"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 55%' }}
        />

        {/* Oscurecimiento base — legibilidad del texto */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Gradiente izquierda — refuerza área del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

        {/* Gradiente superior e inferior — fusión con secciones adyacentes */}
        <div className="absolute top-0 left-0 right-0 h-24
                        bg-gradient-to-b from-dark to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24
                        bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* ── Decoraciones geométricas sutiles ── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[700px] h-[700px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[450px] h-[450px] rounded-full border border-secondary/8" />
        <div className="absolute top-16 right-1/4 w-2 h-2 rounded-full bg-secondary/50" />
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 rounded-full bg-white/30" />
      </div>

      {/* ── Contenido ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideUp}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm
                          border border-white/20 text-white/80 text-xs font-body
                          px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            ¿Listo para tu próximo viaje?
          </div>

          {/* Título */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black
                         text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            Reservá tu traslado{' '}
            <span className="text-secondary"
              style={{ textShadow: '0 0 40px rgba(212,175,55,0.35)' }}>
              ahora mismo
            </span>
          </h2>

          {/* Párrafo */}
          <p className="font-body text-white/65 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Escribinos por WhatsApp y te respondemos al instante.
            Sin complicaciones, sin esperas. Maxi te atiende personalmente.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="primary"
              size="lg"
              whatsapp
              className="text-base font-bold shadow-orange"
            >
              <MessageCircle size={22} />
              Consultar por WhatsApp
            </Button>
            <a
              href={`tel:${CONTACT.phoneDisplay.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2
                         bg-white/10 hover:bg-white/20 backdrop-blur-sm
                         text-white border border-white/30 hover:border-white/60
                         font-heading font-semibold text-base px-8 py-4 rounded-xl
                         transition-all duration-200 hover:scale-[1.02]"
            >
              <Phone size={20} />
              {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Garantías */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-white/45 text-sm font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              '✓ Sin costo de consulta',
              '✓ Respuesta inmediata',
              '✓ Precio cerrado sin sorpresas',
            ].map((item) => (
              <span key={item}
                className="hover:text-white/80 transition-colors duration-200">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}