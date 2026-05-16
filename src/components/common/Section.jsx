/**
 * Section - Contenedor reutilizable para secciones de la página
 *
 * @param {object} props
 * @param {string} props.id - ID para ancla de navegación
 * @param {string} [props.title] - Título de la sección
 * @param {string} [props.subtitle] - Subtítulo de la sección
 * @param {boolean} [props.light=false] - Fondo claro si true, blanco si false
 * @param {boolean} [props.dark=false] - Fondo oscuro (para CTAs)
 * @param {string} [props.className] - Clases adicionales
 * @param {React.ReactNode} props.children
 * @param {boolean} [props.centered=true] - Centrar título/subtítulo
 */

import { motion } from 'framer-motion'
import { slideUp, viewportConfig } from '../../utils/animations'

export default function Section({
  id,
  title,
  subtitle,
  light = false,
  dark = false,
  className = '',
  children,
  centered = true,
}) {
  const bgClass = dark
    ? 'bg-gradient-cta text-white'
    : light
    ? 'bg-light'
    : 'bg-white'

  const titleColorClass = dark ? 'text-white' : 'text-dark'
  const subtitleColorClass = dark ? 'text-white/70' : 'text-gray-500'
  const accentLineClass = dark ? 'bg-secondary' : 'bg-secondary'

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={slideUp}
          >
            {title && (
              <>
                {centered && (
                  <span
                    className={`block w-12 h-1 ${accentLineClass} rounded-full mb-4 mx-auto`}
                  />
                )}
                {!centered && (
                  <span
                    className={`block w-12 h-1 ${accentLineClass} rounded-full mb-4`}
                  />
                )}
                <h2
                  className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${titleColorClass}`}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </>
            )}
            {subtitle && (
              <p
                className={`font-body text-lg ${subtitleColorClass} ${
                  centered ? 'max-w-2xl mx-auto' : 'max-w-xl'
                }`}
              >
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
