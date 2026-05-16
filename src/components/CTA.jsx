/**
 * CTA - Sección de llamada a la acción final con gradiente oscuro
 */

import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import Button from './common/Button'
import { CONTACT } from '../constants/config'
import { slideUp, fadeIn } from '../utils/animations'

export default function CTA() {
  return (
    <section
      className="relative py-20 md:py-28 bg-gradient-cta overflow-hidden"
      aria-label="Contacto y consulta"
    >
      {/* Decoraciones geométricas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-secondary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                        rounded-full bg-white/3 border border-white/5" />
        <div className="absolute top-16 right-1/4 w-3 h-3 rounded-full bg-secondary/40" />
        <div className="absolute bottom-20 left-1/3 w-2 h-2 rounded-full bg-accent/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideUp}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 
                          text-white/80 text-sm font-body px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            ¿Listo para tu próximo viaje?
          </div>

          {/* Título */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Reservá tu traslado{' '}
            <span className="text-secondary">ahora mismo</span>
          </h2>

          {/* Párrafo */}
          <p className="font-body text-white/70 text-lg mb-10 leading-relaxed">
            Escribinos por WhatsApp y te respondemos al instante. 
            Sin complicaciones, sin esperas. El dueño te atiende personalmente.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 
                         text-white border border-white/30 hover:border-white/60 font-heading font-semibold 
                         text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
            >
              <Phone size={20} />
              {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Garantías finales */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-white/50 text-sm font-body"
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
              <span key={item} className="hover:text-white/80 transition-colors">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
