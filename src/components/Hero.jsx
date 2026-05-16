/**
 * Hero - Sección principal con CTA, animaciones y fondo gradient
 */

import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, Star, Shield, Clock } from 'lucide-react'
import Button from './common/Button'
import { fadeIn, slideUp } from '../utils/animations'

export default function Hero() {
  function scrollToServices() {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToStart() {
    document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden"
      aria-label="Inicio - Maxi Viajes"
    >
      {/* ── Decoraciones geométricas ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos grandes */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute top-1/3 -right-10 w-64 h-64 rounded-full bg-secondary/10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-accent/10" />

        {/* Líneas decorativas */}
        <div className="absolute top-1/4 left-1/3 w-px h-32 bg-white/10 rotate-12" />
        <div className="absolute top-1/2 right-1/4 w-px h-24 bg-secondary/20 -rotate-12" />

        {/* Puntos decorativos */}
        <div className="absolute top-16 left-1/4 w-2 h-2 rounded-full bg-secondary/60" />
        <div className="absolute bottom-32 right-1/3 w-3 h-3 rounded-full bg-accent/40" />
        <div className="absolute top-1/2 left-10 w-2 h-2 rounded-full bg-white/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Columna izquierda: Contenido principal ── */}
          <div>
            {/* Badge superior */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 
                         text-white/90 text-sm font-body px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Capital Federal, Buenos Aires
            </motion.div>

            {/* Título principal */}
            <motion.h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Viajes con{' '}
              <span className="text-secondary">Confort</span>,{' '}
              <span className="text-accent">Seguridad</span>
              {' '}y{' '}
              <span className="text-secondary">Puntualidad</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className="font-body text-white/75 text-lg sm:text-xl mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Traslados premium de media y larga distancia desde San Miguel del Monte.
              Aeropuertos, Costa Atlántica y viajes ejecutivos con atención personalizada.
            </motion.p>

            {/* Botones CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                variant="primary"
                size="lg"
                whatsapp
                className="shadow-orange"
              >
                <MessageCircle size={20} />
                Consultar Disponibilidad
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={scrollToServices}
              >
                Conocer Servicios
              </Button>
            </motion.div>

            {/* Stats rápidos */}
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { icon: Star, value: '100%', label: 'Satisfacción' },
                { icon: Shield, value: 'Seguro', label: 'Viaje garantizado' },
                { icon: Clock, value: '24/7', label: 'Disponibilidad' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/70">
                  <Icon size={16} className="text-secondary" />
                  <span className="font-heading font-bold text-white text-sm">{value}</span>
                  <span className="font-body text-xs">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Columna derecha: Visual decorativa ── */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Tarjeta principal */}
              <div className="w-80 h-80 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 
                              flex flex-col items-center justify-center p-8 shadow-2xl">
                {/* Icono animado */}
                {/* <div className="w-32 h-32 bg-secondary/20 rounded-full flex items-center justify-center mb-6 animate-float">
                  <svg viewBox="0 0 100 60" className="w-20 text-white" fill="currentColor">
                  
                    <rect x="5" y="20" width="75" height="32" rx="4" opacity="0.9" />
                    <rect x="10" y="10" width="45" height="18" rx="3" opacity="0.7" />
                    <circle cx="22" cy="54" r="8" fill="#f77f00" />
                    <circle cx="22" cy="54" r="4" fill="#fcbf49" />
                    <circle cx="65" cy="54" r="8" fill="#f77f00" />
                    <circle cx="65" cy="54" r="4" fill="#fcbf49" />
                    <rect x="88" y="28" width="8" height="16" rx="2" opacity="0.5" />
                  </svg>
                </div> */}
                <h3 className="font-heading text-white font-bold text-xl mb-1">Toyota Hiace</h3>
                <p className="font-body text-white/60 text-sm text-center">Premium · Confortable · Seguro</p>

                {/* Badges */}
                <div className="flex gap-2 mt-4">
                  <span className="bg-secondary/30 text-white text-xs px-3 py-1 rounded-full font-body">6 pasajeros</span>
                  <span className="bg-accent/20 text-white text-xs px-3 py-1 rounded-full font-body">A/C</span>
                </div>
              </div>

              {/* Tarjeta flotante - Destino */}
              <motion.div
                className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <span className="text-secondary font-bold text-lg">✈</span>
                </div>
                <div>
                  <p className="font-heading text-dark text-xs font-bold">Ezeiza / Aeroparque</p>
                  <p className="font-body text-gray-400 text-xs">En tiempo y forma</p>
                </div>
              </motion.div>

              {/* Tarjeta flotante - Rating */}
              <motion.div
                className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-card p-3 flex items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <span className="font-heading text-dark text-xs font-bold">5.0</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToStart}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white 
                   transition-colors flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Desplazarse hacia abajo"
      >
        <span className="font-body text-xs">Ver más</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  )
}
