/**
 * Destinations - Sección de destinos con grid de 4 cards
 */

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Section from './common/Section'
import DestinationCard from './common/DestinationCard'
import { DESTINATIONS } from '../constants/destinations'
import { staggerContainer } from '../utils/animations'

export default function Destinations() {
  return (
    <Section
      id="destinos"
      title='¿A dónde <span class="text-secondary">viajás</span>?'
      subtitle="Cubrimos los destinos más solicitados desde San Miguel del Monte. Consultanos si el tuyo no está en la lista."
      light
    >
      {/* Mapa decorativo (SVG simple de Argentina) */}
      <motion.div
        className="flex items-center justify-center mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 bg-white rounded-full shadow-sm px-5 py-2 border border-light-dark/20">
          <MapPin size={16} className="text-secondary" />
          <span className="font-body text-gray-600 text-sm">
            Salida desde <strong className="text-primary">Cualquier punto de Buenos Aires</strong>
          </span>
        </div>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {DESTINATIONS.map((dest, index) => (
          <DestinationCard
            key={dest.id}
            icon={dest.icon}
            title={dest.title}
            subtitle={dest.subtitle}
            description={dest.description}
            highlights={dest.highlights}
            index={index}
          />
        ))}
      </motion.div>

      {/* Nota al pie */}
      <motion.p
        className="text-center font-body text-gray-400 text-sm mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        ¿No encontrás tu destino?{' '}
        <button
          onClick={() => window.open('https://wa.me/5492271410310?text=Hola%20Maxi%2C%20consulto%20por%20un%20destino%20especial', '_blank')}
          className="text-secondary font-semibold hover:underline"
        >
          Consultanos por WhatsApp
        </button>
      </motion.p>
    </Section>
  )
}
