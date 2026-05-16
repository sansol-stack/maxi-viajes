/**
 * Services - Sección de servicios con grid de 3 cards
 */

import { motion } from 'framer-motion'
import Section from './common/Section'
import ServiceCard from './common/ServiceCard'
import { SERVICES } from '../constants/services'
import { staggerContainer } from '../utils/animations'

export default function Services() {
  return (
    <Section
      id="servicios"
      title='Nuestros <span class="text-secondary">Servicios</span>'
      subtitle="Traslados profesionales para cada necesidad. Elegí el servicio que mejor se adapte a vos."
    >
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            bullets={service.bullets}
            badge={service.badge}
            index={index}
          />
        ))}
      </motion.div>
    </Section>
  )
}
