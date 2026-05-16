/**
 * VehicleCard - Tarjeta de vehículo de la flota
 *
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.role
 * @param {string} props.tagline
 * @param {string} props.gradient - Clases de Tailwind para el gradiente
 * @param {string} props.icon
 * @param {string} props.capacity
 * @param {boolean} [props.featured=false]
 * @param {string[]} props.specs
 * @param {number} [props.index=0]
 */

import { motion } from 'framer-motion'
import { Check, Users } from 'lucide-react'
import { ICON_MAP } from '../../utils/iconMap'
import { openWhatsApp } from '../../utils/whatsappLink'
import { staggerItem } from '../../utils/animations'
import Button from './Button'

export default function VehicleCard({ name, role, tagline, gradient, icon, capacity, featured = false, specs, index = 0 }) {
  const IconComponent = ICON_MAP[icon]

  return (
    <motion.div
      variants={staggerItem}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover 
                  transition-all duration-300 hover:-translate-y-2
                  ${featured ? 'ring-2 ring-secondary ring-offset-2' : ''}`}
    >
      {/* Badge featured */}
      {featured && (
        <div className="absolute top-4 left-4 z-10 bg-secondary text-white text-xs font-heading font-bold 
                        px-3 py-1 rounded-full shadow-orange">
          ⭐ Más Elegido
        </div>
      )}

      {/* Visual superior con gradiente */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        {/* Decoraciones geométricas */}
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/5" />
        <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/5" />

        {/* Icono principal */}
        {IconComponent && (
          <IconComponent
            size={72}
            className="text-white/80 group-hover:scale-110 transition-transform duration-300"
          />
        )}

        {/* Capacidad badge */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm 
                        text-white text-xs font-heading font-semibold px-3 py-1.5 rounded-full">
          <Users size={12} />
          {capacity}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Role tag */}
        <span className="text-secondary text-xs font-heading font-bold uppercase tracking-widest mb-2 block">
          {role}
        </span>

        {/* Nombre */}
        <h3 className="font-heading text-xl font-bold text-dark mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Tagline */}
        <p className="font-body text-gray-500 text-sm mb-5">{tagline}</p>

        {/* Specs */}
        <ul className="space-y-2 mb-6">
          {specs.map((spec, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm font-body text-gray-600">
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Check size={11} className="text-green-600" strokeWidth={3} />
              </span>
              {spec}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          variant="outline"
          size="sm"
          whatsapp
          customMessage={`Hola Maxi, me interesa consultar sobre el ${name}`}
          className="w-full"
        >
          Consultar disponibilidad
        </Button>
      </div>
    </motion.div>
  )
}
