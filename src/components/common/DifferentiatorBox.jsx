/**
 * DifferentiatorBox - Caja de diferenciador para la sección About
 *
 * @param {object} props
 * @param {string} props.icon
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.color - Clase de color del icono
 * @param {string} props.bgColor - Clase de fondo del icono
 */

import { motion } from 'framer-motion'
import { ICON_MAP } from '../../utils/iconMap'
import { staggerItem } from '../../utils/animations'

export default function DifferentiatorBox({ icon, title, description, color, bgColor }) {
  const IconComponent = ICON_MAP[icon]

  return (
    <motion.div
      variants={staggerItem}
      className="flex gap-4 p-5 rounded-2xl bg-white shadow-sm hover:shadow-card transition-all duration-300 group"
    >
      {/* Icono */}
      <div
        className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center flex-shrink-0 
                    group-hover:scale-110 transition-transform duration-300`}
      >
        {IconComponent && <IconComponent size={22} className={color} />}
      </div>

      {/* Texto */}
      <div>
        <h4 className="font-heading font-bold text-dark text-sm mb-1">{title}</h4>
        <p className="font-body text-gray-500 text-xs leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
