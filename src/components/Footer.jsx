/**
 * Footer - Pie de página con logo, links, contacto y copyright
 */

import { motion } from 'framer-motion'
import { Phone, MapPin, MessageCircle } from 'lucide-react'
import { NAV_LINKS, CONTACT, SITE } from '../constants/config'
import { openWhatsApp } from '../utils/whatsappLink'
import { fadeIn } from '../utils/animations'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  function handleNavClick(href) {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark text-white">
      {/* Franja superior */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* ── Columna 1: Logo + tagline ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shadow-orange">
                <span className="text-white font-heading font-black text-lg">M</span>
              </div>
              <div>
                <span className="font-heading font-bold text-white text-lg leading-none block">
                  {SITE.name}
                </span>
                <span className="font-body text-white/40 text-xs">Traslados Premium</span>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs">
              {SITE.description}
            </p>
            {/* Redes sociales placeholder */}
            <div className="flex gap-3 mt-6">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center 
                              hover:bg-secondary transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center 
                              hover:bg-secondary transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* ── Columna 2: Navegación ── */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              Navegación
            </h3>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-body text-white/50 hover:text-secondary text-sm 
                             transition-colors duration-200 w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* ── Columna 3: Contacto ── */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              Contacto
            </h3>
            <div className="space-y-3">
              {/* Teléfono */}
              <a
                href={`tel:${CONTACT.phoneDisplay}`}
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center 
                                group-hover:bg-secondary/20 transition-colors">
                  <Phone size={14} className="text-white/60" />
                </div>
                <span className="font-body text-sm">{CONTACT.phoneDisplay}</span>
              </a>

              {/* WhatsApp */}
              <button
                onClick={() => openWhatsApp()}
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group w-full text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center 
                                group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle size={14} className="text-white/60" />
                </div>
                <span className="font-body text-sm">WhatsApp directo</span>
              </button>

              {/* Ubicación */}
              <div className="flex items-start gap-3 text-white/50">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-white/60" />
                </div>
                <span className="font-body text-sm leading-relaxed">{CONTACT.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Franja copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row 
                        items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs">
            © {currentYear} {SITE.name}. Todos los derechos reservados.
          </p>
          <p className="font-body text-white/20 text-xs">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
