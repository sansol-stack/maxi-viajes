/**
 * PremiumShowcase - Experiencia premium Toyota Hiace
 * 
 * SETUP: Copiar los 4 archivos al proyecto:
 *   1. Este archivo → src/components/PremiumShowcase.jsx
 *   2. hiaceImages.js → src/assets/hiaceImages.js
 * 
 * Luego agregar en Home.jsx entre <Fleet /> y <CTA />:
 *   import PremiumShowcase from '../components/PremiumShowcase'
 *   <PremiumShowcase />
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Armchair, Zap, ChevronRight, ChevronLeft, ArrowRight, Sparkles } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsappLink'

// ── Importar las fotos reales ────────────────────────────────────────────────
// Opción A (recomendada en producción): poner las fotos en /public/hiace/
//   y usar rutas "/hiace/exterior.jpg" etc.
// Opción B (desarrollo rápido): usar el archivo hiaceImages.js generado.
// Para este componente usamos importación directa de los assets:
import imgExterior from '../assets/hiace-exterior.jpg'
import imgControles from '../assets/hiace-controls.jpg'
import imgAsientos from '../assets/hiace-seats.jpg'
import imgRecline from '../assets/hiace-recline.jpg'

// ── Datos de cada slide ──────────────────────────────────────────────────────
const SLIDES = [
    {
        id: 1,
        src: imgExterior,
        tag: 'Diseño Exterior',
        subtitle: 'Primera impresión',
        title: 'Un atardecer que acompaña cada llegada',
        description:
            'La puerta corrediza de apertura amplia invita a subir a otro nivel de confort. Acabados cromados, llantas de aleación y una carrocería que irradia clase antes de que el viaje comience. El ingreso fácil y espacioso convierte el abordaje en el primer momento premium.',
        highlights: ['Puerta corrediza de gran apertura', 'Llantas premium de aleación', 'Iluminación interior de bienvenida'],
        Icon: Star,
    },
    {
        id: 2,
        src: imgControles,
        tag: 'Tecnología a bordo',
        subtitle: 'Control eléctrico',
        title: 'El confort a tu alcance, literalmente',
        description:
            'Panel de control electrónico integrado en el apoyabrazos para ajustar tu posición con un toque. Reclinación, avance y calefacción de asiento todo en uno — porque en un viaje largo, cada centímetro importa. Tecnología que normalmente encontrás en autos de más de USD 80.000.',
        highlights: ['Reclinación eléctrica motorizada', 'Control iluminado tactil', 'Ajuste fino de posición'],
        Icon: Zap,
    },
    {
        id: 3,
        src: imgAsientos,
        tag: 'Interior de lujo',
        subtitle: 'Tapizado premium',
        title: 'Cuero que abraza cada kilómetro',
        description:
            'Tapizado bicolor en cuero negro y camel con costuras en relieve tipo diamante — el mismo nivel de acabado de los SUV premium. Cada asiento es individual, con apoyabrazos propio, reposacabezas ajustable y espacio generoso entre filas. Porque viajar bien es un derecho, no un lujo.',
        highlights: ['Cuero bicolor negro y camel', 'Capitoné diamante cosido a mano', 'Apoyabrazos individual por asiento'],
        Icon: Armchair,
    },
    {
        id: 4,
        src: imgRecline,
        tag: 'Business Class en ruta',
        subtitle: 'Reclinación total',
        title: 'Viajá reclinado. Llegá descansado.',
        description:
            'Las butacas se reclinan casi a posición horizontal para convertir cada kilómetro en descanso. Ideales para vuelos nocturnos o viajes largos a la Costa Atlántica — llegás renovado, no agotado. El espacio entre asientos garantiza libertad total de movimiento.',
        highlights: ['Reclinación casi horizontal', 'Espacio de primera clase entre filas', 'Perfecto para viajes nocturnos'],
        Icon: Sparkles,
    },
]

// ── Componente dots de progreso ──────────────────────────────────────────────
function ProgressDots({ total, active, onSelect }) {
    return (
        <div className="flex gap-2 items-center">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onSelect(i)}
                    className={`transition-all duration-300 rounded-full ${i === active
                        ? 'w-7 h-1.5 bg-secondary'
                        : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
                        }`}
                    aria-label={`Ir a imagen ${i + 1}`}
                />
            ))}
        </div>
    )
}

// ── Componente principal ─────────────────────────────────────────────────────
export default function PremiumShowcase() {
    const [active, setActive] = useState(0)
    const [dir, setDir] = useState(1)
    const slide = SLIDES[active]

    function go(idx) {
        setDir(idx > active ? 1 : -1)
        setActive(idx)
    }
    function prev() { go(active === 0 ? SLIDES.length - 1 : active - 1) }
    function next() { go(active === SLIDES.length - 1 ? 0 : active + 1) }

    // Variantes de imagen
    const imgVars = {
        enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0, scale: 1.05 }),
        center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.65, ease: [0.32, 0.72, 0, 1] } },
        exit: (d) => ({ x: d > 0 ? '-30%' : '30%', opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } }),
    }

    // Variantes de copy (stagger)
    const copyVars = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.07 } },
        exit: { opacity: 0, transition: { duration: 0.2 } },
    }
    const itemVars = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    }

    return (
        <section
            id="premium"
            className="bg-dark overflow-hidden"
            aria-label="Experiencia Premium Toyota Hiace"
        >
            {/* ── Header ── */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2.5 bg-secondary/10 border border-secondary/25
                          text-secondary text-xs font-heading font-bold uppercase tracking-[0.18em]
                          px-5 py-2 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                        Experiencia a bordo
                    </div>

                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-[1.05]">
                        Viajá como{' '}
                        <span
                            className="text-secondary"
                            style={{ WebkitTextStroke: '0px', textShadow: '0 0 40px rgba(212,175,55,0.3)' }}
                        >
                            Business Class
                        </span>
                    </h2>
                    <p className="font-body text-white/45 text-md mb-2 max-w-lg mx-auto leading-relaxed">
                        La Toyota Hiace redefinida con un interior que compite con los mejores
                        vehículos ejecutivos del mercado.
                    </p>
                </motion.div>
            </div>

            {/* ── Slider principal ── */}
            <div className="grid lg:grid-cols-[3fr_2fr] min-h-[500px] lg:min-h-[580px]">

                {/* Imagen */}
                <div className="relative overflow-hidden bg-zinc-950 min-h-[280px] sm:min-h-[380px]">
                    <AnimatePresence custom={dir} mode="popLayout">
                        <motion.div
                            key={slide.id}
                            custom={dir}
                            variants={imgVars}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0"
                        >
                            <img
                                src={slide.src}
                                alt={slide.tag}
                                className="w-full h-full object-cover"
                                style={{
                                    objectPosition:
                                        slide.id === 1 ? 'center center' :
                                            slide.id === 2 ? 'center 40%' :
                                                slide.id === 3 ? 'center 30%' : 'center 20%',
                                }}
                            />
                            {/* Gradientes sobre la foto */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/10 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark/40 lg:to-dark/60" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Tag flotante */}
                    <div className="absolute top-5 left-5 z-20">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={slide.id}
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 8 }}
                                transition={{ duration: 0.3 }}
                                className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md
                           text-secondary text-[10px] font-heading font-bold uppercase tracking-widest
                           px-3 py-1.5 rounded-full border border-secondary/20"
                            >
                                <span className="w-1 h-1 rounded-full bg-secondary" />
                                {slide.tag}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    {/* Número decorativo */}
                    <div className="absolute top-4 right-6 z-10 font-heading text-white/5 text-9xl font-black leading-none select-none pointer-events-none">
                        {String(slide.id).padStart(2, '0')}
                    </div>

                    {/* Controles flechas */}
                    <div className="absolute bottom-5 left-5 z-20 flex gap-2">
                        <button
                            onClick={prev}
                            className="w-9 h-9 rounded-full bg-black/40 hover:bg-secondary/70 backdrop-blur-sm
                         border border-white/15 flex items-center justify-center text-white
                         transition-all duration-200 hover:scale-105"
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={next}
                            className="w-9 h-9 rounded-full bg-black/40 hover:bg-secondary/70 backdrop-blur-sm
                         border border-white/15 flex items-center justify-center text-white
                         transition-all duration-200 hover:scale-105"
                            aria-label="Siguiente"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* Progress bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white/8 z-20">
                        <motion.div
                            key={active}
                            className="h-full bg-secondary"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 10, ease: 'linear' }}
                            onAnimationComplete={() => {
                                // Auto-advance
                                go(active === SLIDES.length - 1 ? 0 : active + 1)
                            }}
                        />
                    </div>
                </div>

                {/* Panel de texto */}
                <div className="relative flex flex-col justify-center px-4 lg:px-12 py-4 lg:pt-4 lg:pb-8 bg-dark border-l border-white/5">
                    {/* Luces de fondo */}
                    <div className="absolute -top-20 right-0 w-72 h-72 bg-secondary/4 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/2 rounded-full blur-2xl pointer-events-none" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide.id}
                            variants={copyVars}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="relative z-10"
                        >
                            {/* Icono */}
                            <motion.div variants={itemVars} className="mb-6">
                                <div className="w-11 h-11 rounded-xl bg-secondary/12 border border-secondary/20
                                flex items-center justify-center">
                                    <slide.Icon size={18} className="text-secondary" />
                                </div>
                            </motion.div>

                            {/* Subtítulo */}
                            <motion.p variants={itemVars}
                                className="font-heading text-secondary text-[9px] font-bold uppercase tracking-[0.22em] mb-2.5">
                                {slide.subtitle}
                            </motion.p>

                            {/* Título */}
                            <motion.h3 variants={itemVars}
                                className="font-heading text-xl sm:text-2xl font-black text-white leading-tight mb-4">
                                {slide.title}
                            </motion.h3>

                            {/* Línea dorada */}
                            <motion.div variants={itemVars} className="w-10 h-0.5 bg-secondary rounded-full mb-4" />

                            {/* Descripción */}
                            <motion.p variants={itemVars}
                                className="font-body text-white/55 text-sm leading-relaxed mb-6">
                                {slide.description}
                            </motion.p>

                            {/* Highlights */}
                            <motion.ul variants={itemVars} className="space-y-2.5 mb-7">
                                {slide.highlights.map((h) => (
                                    <li key={h} className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                                        <span className="font-body text-xs text-white/65 leading-snug">{h}</span>
                                    </li>
                                ))}
                            </motion.ul>

                            {/* CTA */}
                            <motion.div variants={itemVars} className="flex items-center gap-4 flex-wrap">
                                <button
                                    onClick={() => openWhatsApp('Hola Maxi, me interesa reservar un viaje en la Toyota Hiace premium')}
                                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark
                             text-white font-heading font-bold text-sm px-5 py-2.5 rounded-xl
                             transition-all duration-200 hover:scale-105 shadow-orange"
                                >
                                    Reservar mi lugar
                                    <ArrowRight size={15} />
                                </button>

                                {/* Dots */}
                                <ProgressDots total={SLIDES.length} active={active} onSelect={go} />
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* ── Stats strip ── */}
            <div className="border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { num: '4', unit: 'butacas VIP', label: 'Reclinación eléctrica' },
                            { num: '100%', unit: 'cuero', label: 'Tapizado premium bicolor' },
                            { num: 'A/C', unit: 'dual', label: 'Zona pasajeros independiente' },
                            { num: '∞', unit: 'confort', label: 'Experiencia Business Class' },
                        ].map(({ num, unit, label }) => (
                            <div key={label} className="group">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="font-heading text-xl sm:text-2xl font-black text-white group-hover:text-secondary transition-colors duration-300">
                                        {num}
                                    </span>
                                    <span className="font-heading text-xs font-semibold text-secondary uppercase tracking-wider">
                                        {unit}
                                    </span>
                                </div>
                                <p className="font-body text-xs text-white/35 leading-snug">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Galería miniaturas + CTA final ── */}
            <div className="border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex items-center gap-4 overflow-x-auto pb-1">
                        <span className="font-heading text-white/20 text-[10px] uppercase tracking-[0.2em] whitespace-nowrap flex-shrink-0">
                            Galería
                        </span>

                        {SLIDES.map((s, i) => (
                            <button
                                key={s.id}
                                onClick={() => go(i)}
                                className={`relative flex-shrink-0 w-18 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden
                             transition-all duration-300 ${i === active
                                        ? 'ring-2 ring-secondary ring-offset-2 ring-offset-dark scale-105'
                                        : 'opacity-40 hover:opacity-75 hover:scale-[1.03]'
                                    }`}
                                aria-label={s.tag}
                            >
                                <img
                                    src={s.src}
                                    alt={s.tag}
                                    className="w-full h-full object-cover"
                                />
                                {i === active && (
                                    <div className="absolute inset-0 bg-secondary/15" />
                                )}
                            </button>
                        ))}

                        {/* Separador */}
                        <div className="w-px h-16 bg-white/10 flex-shrink-0 hidden sm:block" />

                        {/* CTA thumb */}
                        <button
                            onClick={() => openWhatsApp('Hola Maxi, quiero reservar un viaje en la Toyota Hiace premium')}
                            className="flex-shrink-0 w-18 h-16 sm:w-28 sm:h-20 rounded-xl bg-secondary/10
                         border border-secondary/25 hover:bg-secondary hover:border-secondary
                         flex flex-col items-center justify-center gap-1
                         text-secondary hover:text-white transition-all duration-300 group px-4"
                        >
                            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            <span className="font-heading text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-center leading-tight">
                                Reservar
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}