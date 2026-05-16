/**
 * DestinationCard - Tarjeta de destino con borde naranja y hover slide
 *
 * @param {object} props
 * @param {string} props.icon - Nombre del icono Lucide
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string} props.description
 * @param {string[]} props.highlights
 * @param {number} [props.index=0]
 */

import { motion } from 'framer-motion'
import { ICON_MAP } from '../../utils/iconMap'
import { openWhatsApp } from '../../utils/whatsappLink'
import { staggerItem } from '../../utils/animations'

export default function DestinationCard({ icon, title, subtitle, description, highlights, index = 0 }) {
  const IconComponent = ICON_MAP[icon]

  return (
    <motion.div
      variants={staggerItem}
      className="group relative bg-white rounded-2xl shadow-card hover:shadow-card-hover 
                 transition-all duration-300 hover:translate-x-1
                 overflow-hidden cursor-pointer"
      onClick={() => openWhatsApp(`Hola Maxi, quiero consultar sobre traslados a ${title}`)}
    >
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/5 to-transparent rounded-bl-full" />

      <div className="p-7">
        {/* Icono + título */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0
                          group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
            {IconComponent && (
              <IconComponent
                size={22}
                className="text-secondary group-hover:text-white transition-colors duration-300"
              />
            )}
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-dark group-hover:text-primary transition-colors">
              {title}
            </h3>
            <span className="text-secondary text-xs font-heading font-semibold uppercase tracking-wider">
              {subtitle}
            </span>
          </div>
        </div>

        {/* Descripción */}
        <p className="font-body text-sm text-gray-500 leading-relaxed mb-5">
          {description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {highlights.map((h, i) => (
            <span
              key={i}
              className="bg-light text-gray-600 text-xs font-body px-2.5 py-1 rounded-lg"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
