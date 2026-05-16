/**
 * Header - Navegación sticky con menú hamburguesa responsivo
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '../constants/config'
import { openWhatsApp } from '../utils/whatsappLink'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  /* Detectar scroll para cambiar estilo del header */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      // Detectar sección activa
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Smooth scroll al hacer click en nav */
  function handleNavClick(href) {
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
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
          <motion.a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio') }}
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center 
                            group-hover:scale-105 transition-transform shadow-orange">
              <span className="text-white font-heading font-black text-lg leading-none">M</span>
            </div>
            <div>
              <span className="font-heading font-bold text-white text-lg leading-none block">
                Maxi Viajes
              </span>
              <span className="font-body text-white/50 text-xs">
                Traslados Premium
              </span>
            </div>
          </motion.a>

          {/* Nav desktop */}
          <motion.nav
            className="hidden md:flex items-center gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link px-4 py-2 rounded-lg transition-all duration-200
                    ${isActive ? 'text-secondary bg-white/5' : 'hover:bg-white/5'}`}
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
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-white/90 hover:text-secondary font-body font-medium 
                             py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-200"
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
