/**
 * FloatingWhatsApp - Botón flotante fijo de WhatsApp
 * Visible en mobile y desktop
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsappLink'

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-card p-4 max-w-xs mr-2"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <p className="font-heading font-bold text-dark text-sm">Maxi Viajes</p>
                <p className="font-body text-gray-400 text-xs">Responde rápido</p>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-gray-300 hover:text-gray-500 transition-colors flex-shrink-0"
                aria-label="Cerrar"
              >
                <X size={16} />
              </button>
            </div>
            <p className="font-body text-gray-600 text-sm mb-3">
              👋 ¡Hola! Consultá disponibilidad y precios por WhatsApp.
            </p>
            <button
              onClick={() => { openWhatsApp(); setShowTooltip(false) }}
              className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-heading font-semibold 
                         text-sm py-2.5 px-4 rounded-xl transition-all duration-200 hover:scale-[1.02]
                         flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} />
              Enviar mensaje
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-lg 
                   hover:shadow-xl flex items-center justify-center transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        aria-label="Contactar por WhatsApp"
      >
        <AnimatePresence mode="wait">
          {showTooltip ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={26} fill="white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Indicador de disponibilidad */}
      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white animate-pulse-slow" />
    </div>
  )
}
