import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle, ChevronDown, Star, Shield, Clock,
  ChevronLeft, ChevronRight
} from 'lucide-react'
import Button from './common/Button'

import imgFront       from '../assets/hero-front.jpg'
import imgNose        from '../assets/hero-nose.jpg'
import imgSheraton    from '../assets/hero-sheraton.jpg'
import imgFourSeasons from '../assets/hero-fourseasons.jpg'
import imgDazzler     from '../assets/hero-dazzler.jpg'

// Imágenes verticales optimizadas para móvil
import imgFrontMobile       from '../assets/hero-front-mobile.jpg'
import imgNoseMobile        from '../assets/hero-nose-mobile.jpg'
import imgSheratonMobile    from '../assets/hero-scala-mobile.jpg'
import imgFourSeasonsMobile from '../assets/hero-seats-mobile.jpg'
import imgDazzlerMobile     from '../assets/hero-dazzler-mobile.jpg'

const SLIDES = [
  {
    id: 0,
    src: imgFront,
    srcMobile: imgFrontMobile,
    pos: 'center 62%',
    label: 'Toyota Hiace VX Premium',
    accent: 'Elegancia que se siente desde el primer kilómetro',
  },
  {
    id: 1,
    src: imgFourSeasons,
    srcMobile: imgFourSeasonsMobile,
    pos: 'center 55%',
    label: 'Confort Premium & Elegancia',
    accent: 'Donde los mejores hoteles confían en nosotros',
  },
  {
    id: 2,
    src: imgSheraton,
    srcMobile: imgSheratonMobile,
    pos: 'center 45%',
    label: 'Traslados Ejecutivos al primer nivel',
    accent: 'Traslados ejecutivos al nivel que merecés',
  },
  {
    id: 3,
    src: imgNose,
    srcMobile: imgNoseMobile,
    pos: 'center 50%',
    label: 'Presencia premium — día y noche',
    accent: 'Siempre puntual, siempre impecable',
  },
  {
    id: 4,
    src: imgDazzler,
    srcMobile: imgDazzlerMobile,
    pos: 'center 50%',
    label: 'Dazzler by Wyndham',
    accent: 'Tu vehículo premium en cada destino',
  },
]

const INTERVAL = 5500

export default function Hero() {
  const [active, setActive]               = useState(0)
  const [prev,   setPrev]                 = useState(null)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef(null)

  function goTo(idx) {
    if (transitioning || idx === active) return
    setPrev(active)
    setActive(idx)
    setTransitioning(true)
    setTimeout(() => setTransitioning(false), 1100)
    resetTimer()
  }

  function goPrev() { goTo(active === 0 ? SLIDES.length - 1 : active - 1) }
  function goNext() { goTo(active === SLIDES.length - 1 ? 0 : active + 1) }

  function resetTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setActive(prev => (prev === SLIDES.length - 1 ? 0 : prev + 1))
    }, INTERVAL)
  }

  useEffect(() => {
    // Solo inicia el timer si no estamos en transición
    if (transitioning) return
    
    timerRef.current = setInterval(() => {
      setActive(prev => (prev === SLIDES.length - 1 ? 0 : prev + 1))
    }, INTERVAL)
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [transitioning]) // eslint-disable-line

  function scrollToNosotros() {
    document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })
  }
  function scrollToServicios() {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
      aria-label="Inicio — Maxi Viajes"
    >

      {/* ════════ FONDO: crossfade + Ken Burns ════════ */}
      <div className="absolute inset-0 z-0">

        {/* Imagen saliente */}
        {prev !== null && (
          <motion.div
            key={`prev-${prev}`}
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            onAnimationComplete={() => setPrev(null)}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={SLIDES[prev].srcMobile} />
              <img
                src={SLIDES[prev].src}
                alt=""
                className="w-full h-full object-cover"
                style={{ objectPosition: SLIDES[prev].pos }}
              />
            </picture>
          </motion.div>
        )}

        {/* Imagen activa con zoom Ken Burns */}
        <motion.div
          key={`active-${active}`}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 1.1, ease: 'easeInOut' },
            scale:   { duration: 7,   ease: 'linear' },
          }}
        >
          <picture>
            <source media="(max-width: 768px)" srcSet={SLIDES[active].srcMobile} />
            <img
              src={SLIDES[active].src}
              alt={SLIDES[active].label}
              className="w-full h-full object-cover"
              style={{ objectPosition: SLIDES[active].pos }}
            />
          </picture>
        </motion.div>

        {/* Capas de oscurecimiento */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark/60 to-transparent" />
      </div>

      {/* ════════ CONTENIDO ════════ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 relative z-10">
        <div className="max-w-2xl">

          {/* Badge dinámico */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${active}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm
                         border border-white/20 text-white/85 text-xs font-body
                         px-4 py-2 rounded-full mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              {SLIDES[active].accent}
            </motion.div>
          </AnimatePresence>

          {/* Título */}
          <motion.h1
            className="font-heading text-4xl font-black text-white mb-5 leading-[1.03]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            Viajes con{' '}
            <span className="text-secondary"
              style={{ textShadow: '0 0 40px rgba(212,175,55,0.4)' }}>
              Confort
            </span>
            ,{' '}
            <span className="text-white/90">Seguridad</span>
            <br className="hidden sm:block" />
            {' '}y{' '}
            <span className="text-secondary"
              style={{ textShadow: '0 0 40px rgba(212,175,55,0.4)' }}>
              Puntualidad
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="font-body text-white/65 text-base sm:text-lg mb-9 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
          >
            Traslados premium de media y larga distancia en Buenos Aires.
            Aeropuertos, Costa Atlántica y viajes ejecutivos — con atención personalizada
            del dueño en cada kilómetro.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <Button variant="primary" size="lg" whatsapp className="shadow-orange">
              <MessageCircle size={20} />
              Consultar Disponibilidad
            </Button>
            <Button variant="ghost" size="lg" onClick={scrollToServicios}>
              Conocer Servicios
            </Button>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            className="flex flex-wrap gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.48 }}
          >
            {[
              { icon: Star,   value: '100%',  label: 'Satisfacción' },
              { icon: Shield, value: 'Seguro', label: 'Viaje garantizado' },
              { icon: Clock,  value: '24/7',   label: 'Disponibilidad' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/65">
                <Icon size={15} className="text-secondary" />
                <span className="font-heading font-bold text-white text-sm">{value}</span>
                <span className="font-body text-xs">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ════════ CONTROLES — esquina inferior derecha ════════ */}
      <div className="absolute bottom-20 right-6 sm:right-10 z-20 flex flex-col items-end gap-4">

        {/* Label del slide */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`label-${active}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="font-heading text-white/45 text-xs tracking-widest uppercase
                       text-right hidden sm:block max-w-[210px]"
          >
            {SLIDES[active].label}
          </motion.p>
        </AnimatePresence>

        {/* Flechas */}
        <div className="flex gap-2">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary/60 backdrop-blur-sm
                       border border-white/20 flex items-center justify-center text-white
                       transition-all duration-200 hover:scale-110"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary/60 backdrop-blur-sm
                       border border-white/20 flex items-center justify-center text-white
                       transition-all duration-200 hover:scale-110"
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={17} />
          </button>
        </div>

        {/* Dots con progreso */}
        <div className="flex gap-2 items-center">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative h-0.5 rounded-full overflow-hidden transition-all duration-300"
              style={{
                width: i === active ? '28px' : '10px',
                background: 'rgba(255,255,255,0.2)',
              }}
              aria-label={`Ir a imagen ${i + 1}`}
            >
              {i === active && (
                <motion.div
                  key={`prog-${active}`}
                  className="absolute inset-y-0 left-0 bg-secondary"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ════════ SCROLL INDICATOR ════════ */}
      <motion.button
        onClick={scrollToNosotros}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20
                   text-white/40 hover:text-white/80 transition-colors
                   flex flex-col items-center gap-1.5"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Explorar más"
      >
        <span className="font-body text-[10px] tracking-widest uppercase">Explorar</span>
        <ChevronDown size={18} />
      </motion.button>

      {/* ════════ BARRA DE PROGRESO GLOBAL ════════ */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/8 z-20">
        <motion.div
          key={`global-${active}`}
          className="h-full bg-secondary/60"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
        />
      </div>
    </section>
  )
}