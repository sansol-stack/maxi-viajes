/**
 * Header - Navegación sticky con menú hamburguesa responsivo
 */

import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '../constants/config'
import { openWhatsApp } from '../utils/whatsappLink'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  /* Detectar scroll para cambiar estilo del header */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Navegar a la ruta */
  function handleNavClick(path) {
    setIsOpen(false)
    navigate(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-dark shadow-xl py-3'
        : 'bg-dark/80 backdrop-blur-md py-4'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/logo-traslados-premium.png"
              alt="Maxi Viajes Logo"
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </motion.button>

          {/* Nav desktop */}
          <motion.nav
            className="hidden md:flex items-center gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`nav-link px-4 py-2 transition-all duration-200
                    ${isActive ? 'text-secondary font-semibold' : 'text-white/70 hover:text-white'}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      className="block h-0.5 bg-secondary rounded-full mt-0.5"
                      layoutId="activeNav"
                    />
                  )}
                </button>
              )
            })}
          </motion.nav>

          {/* Botón WhatsApp desktop */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => openWhatsApp()}
              className="flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white 
                         font-heading font-semibold text-sm px-5 py-2.5 rounded-xl 
                         transition-all duration-200 hover:scale-105 shadow-orange"
              aria-label="Consultar por WhatsApp"
            >
              <MessageCircle size={16} />
              Consultar
            </button>
          </motion.div>

          {/* Hamburguesa mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-dark border-t border-white/10 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="text-left text-white/80 hover:text-secondary font-body font-medium 
                             py-3 px-4 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { openWhatsApp(); setIsOpen(false) }}
                className="mt-2 flex items-center justify-center gap-2 bg-secondary text-white 
                           font-heading font-semibold py-3 px-4 rounded-xl 
                           hover:bg-secondary-dark transition-all duration-200"
              >
                <MessageCircle size={18} />
                Consultar por WhatsApp
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
