/**
 * ServiceCard - Tarjeta de servicio con animación staggered
 *
 * @param {object} props
 * @param {string} props.icon - Nombre del icono Lucide
 * @param {string} props.title
 * @param {string} props.description
 * @param {string[]} props.bullets
 * @param {string} [props.badge]
 * @param {number} [props.index=0] - Para delay staggered
 */

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { ICON_MAP } from '../../utils/iconMap'
import { openWhatsApp } from '../../utils/whatsappLink'
import { staggerItem } from '../../utils/animations'

export default function ServiceCard({ icon, title, description, bullets, badge, index = 0 }) {
  const IconComponent = ICON_MAP[icon]

  return (
    <motion.div
      variants={staggerItem}
      className="group relative bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover 
                 border border-transparent hover:border-secondary/30 transition-all duration-300 
                 hover:-translate-y-2 cursor-pointer"
      onClick={() => openWhatsApp(`Hola Maxi, me gustaría consultar sobre ${title}`)}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute top-4 right-4 bg-secondary/10 text-secondary text-xs font-heading font-semibold px-3 py-1 rounded-full">
          {badge}
        </span>
      )}

      {/* Icono */}
      <div className="w-16 h-16 bg-gradient-card rounded-2xl flex items-center justify-center mb-6 
                      group-hover:scale-110 transition-transform duration-300 shadow-md">
        {IconComponent && <IconComponent className="text-white" size={28} />}
      </div>



      {/* Título */}
      <h3 className="font-heading text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Descripción */}
      <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Bullets */}
      <ul className="space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-center gap-2 text-sm font-body text-gray-600">
            <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <Check size={12} className="text-green-600" strokeWidth={3} />
            </span>
            {bullet}
          </li>
        ))}
      </ul>

      {/* CTA subtle */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-secondary text-sm font-heading font-semibold">
          Consultar precio →
        </span>
      </div>
    </motion.div>
  )
}
