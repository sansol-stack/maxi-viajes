/**
 * Fleet - Sección de vehículos disponibles
 */

import { motion } from 'framer-motion'
import Section from './common/Section'
import VehicleCard from './common/VehicleCard'
import { FLEET } from '../constants/fleet'
import { staggerContainer } from '../utils/animations'

export default function Fleet() {
  return (
    <Section
      id="flota"
      title='Nuestra <span class="text-secondary">Flota</span>'
      subtitle="Vehículos bien mantenidos y equipados para garantizar tu comodidad en cada kilómetro."
    >
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {FLEET.map((vehicle, index) => (
          <VehicleCard
            key={vehicle.id}
            name={vehicle.name}
            role={vehicle.role}
            tagline={vehicle.tagline}
            gradient={vehicle.gradient}
            icon={vehicle.icon}
            capacity={vehicle.capacity}
            featured={vehicle.featured}
            specs={vehicle.specs}
            index={index}
          />
        ))}
      </motion.div>

      {/* Nota de mantenimiento */}
      <motion.div
        className="mt-12 bg-light rounded-2xl p-6 text-center border border-light-dark/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <p className="font-body text-gray-500 text-sm">
          🔧 <strong className="text-primary">Todos nuestros vehículos</strong> cuentan con mantenimiento preventivo 
          al día, documentación en regla y seguro vigente para tu tranquilidad.
        </p>
      </motion.div>
    </Section>
  )
}
