/**
 * Coverage - Sección de cobertura geográfica
 * Reemplaza a Destinations. Layout de zonas con mapa estilizado.
 * Fondo claro para contrastar con Services (dark) anterior.
 */

import { motion } from 'framer-motion'
import {
    MapPin, Plane, Building2, Waves, Navigation,
    ArrowRight, MessageCircle, Clock, CheckCircle2
} from 'lucide-react'
import { openWhatsApp } from '../utils/whatsappLink'

// ── Zonas geográficas ────────────────────────────────────────────────────────
const ZONES = [
    {
        id: 'amba',
        label: 'Zona AMBA',
        icon: Building2,
        color: 'text-slate-600',
        bgColor: 'bg-slate-100',
        borderColor: 'border-slate-200',
        dotColor: 'bg-slate-400',
        distance: 'Hasta 120 km',
        whatsappMsg: 'Hola Maxi, quiero consultar un traslado dentro del AMBA',
        destinations: [
            { name: 'CABA', note: '~100 km' },
            { name: 'La Plata', note: '~90 km' },
            { name: 'Zona Norte GBA', note: '~110 km' },
            { name: 'Zona Sur GBA', note: '~80 km' },
            { name: 'Zona Oeste GBA', note: '~70 km' },
            { name: 'Luján', note: '~60 km' },
        ],
    },
    {
        id: 'aeropuertos',
        label: 'Aeropuertos',
        icon: Plane,
        color: 'text-violet-600',
        bgColor: 'bg-violet-50',
        borderColor: 'border-violet-200',
        dotColor: 'bg-violet-400',
        distance: 'Monitoreo en tiempo real',
        whatsappMsg: 'Hola Maxi, necesito traslado a un aeropuerto',
        destinations: [
            { name: 'Ezeiza (EZE)', note: '~140 km' },
            { name: 'Aeroparque (AEP)', note: '~120 km' },
            { name: 'El Palomar (EPA)', note: '~90 km' },
        ],
        featured: true,
    },
    {
        id: 'costa',
        label: 'Costa Atlántica',
        icon: Waves,
        color: 'text-cyan-700',
        bgColor: 'bg-cyan-50',
        borderColor: 'border-cyan-200',
        dotColor: 'bg-cyan-500',
        distance: 'Temporada todo el año',
        whatsappMsg: 'Hola Maxi, quiero consultar un viaje a la Costa',
        destinations: [
            { name: 'Pinamar', note: '~310 km' },
            { name: 'Cariló', note: '~320 km' },
            { name: 'Villa Gesell', note: '~350 km' },
            { name: 'Mar del Plata', note: '~390 km' },
            { name: 'Costa Esmeralda', note: '~315 km' },
        ],
    },
    {
        id: 'interior',
        label: 'Interior del país',
        icon: MapPin,
        color: 'text-amber-700',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        dotColor: 'bg-amber-500',
        distance: 'Consultar disponibilidad',
        whatsappMsg: 'Hola Maxi, quiero consultar un viaje al interior del país',
        destinations: [
            { name: 'Rosario', note: '~290 km' },
            { name: 'Santa Fe', note: '~390 km' },
            { name: 'Córdoba', note: '~680 km' },
            { name: 'Mendoza', note: 'Consultar' },
            { name: 'Otros destinos', note: 'A medida' },
        ],
    },
]

// ── Stats de confianza ────────────────────────────────────────────────────────
const TRUST_STATS = [
    { icon: Navigation, value: '+500 km', label: 'Radio de cobertura' },
    { icon: Clock, value: '24/7', label: 'Disponibilidad' },
    { icon: CheckCircle2, value: '100%', label: 'Precio cerrado' },
    { icon: MessageCircle, value: '< 5 min', label: 'Tiempo de respuesta' },
]

// ── Variantes de animación ────────────────────────────────────────────────────
const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay: i * 0.09, ease: 'easeOut' },
    }),
}

export default function Coverage() {
    return (
        <section
            id="cobertura"
            className="bg-light py-20 md:py-28 overflow-hidden"
            aria-label="Zonas de cobertura"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Header ── */}
                <motion.div
                    className="mb-14 md:mb-16"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                >
                    {/* Pill de origen */}
                    <div className="inline-flex items-center gap-2 bg-white border border-light-dark/30
                          shadow-sm rounded-full px-4 py-2 mb-5">
                        <MapPin size={13} className="text-secondary" />
                        <span className="font-body text-gray-500 text-xs">
                            Base en <strong className="text-dark">San Miguel del Monte, Buenos Aires</strong>
                        </span>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
                        <div>
                            <span className="block w-10 h-0.5 bg-secondary rounded-full mb-4" />
                            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-dark leading-tight">
                                ¿A dónde{' '}
                                <span className="text-secondary">llegamos?</span>
                            </h2>
                            <p className="font-body text-gray-500 text-lg mt-3 max-w-lg leading-relaxed">
                                Cubrimos todo el Gran Buenos Aires, aeropuertos, la Costa Atlántica
                                y destinos del interior. Precio cerrado, sin sorpresas.
                            </p>
                        </div>

                        {/* CTA header */}
                        <button
                            onClick={() => openWhatsApp('Hola Maxi, quiero consultar si cubren mi destino')}
                            className="inline-flex items-center gap-2 bg-dark hover:bg-primary-light text-white
                         font-heading font-semibold text-sm px-5 py-3 rounded-xl
                         transition-all duration-200 hover:scale-105 flex-shrink-0 self-start lg:self-auto"
                        >
                            <MessageCircle size={16} />
                            Consultar mi destino
                            <ArrowRight size={14} />
                        </button>
                    </div>
                </motion.div>

                {/* ── Grid de zonas ── */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-12">
                    {ZONES.map((zone, i) => {
                        const Icon = zone.icon
                        return (
                            <motion.div
                                key={zone.id}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                className={`group relative bg-white rounded-2xl border ${zone.borderColor}
                             hover:shadow-card transition-all duration-300 hover:-translate-y-1
                             overflow-hidden cursor-pointer flex flex-col
                             ${zone.featured ? 'ring-2 ring-secondary/40 ring-offset-2 ring-offset-light' : ''}`}
                                onClick={() => openWhatsApp(zone.whatsappMsg)}
                            >
                                {/* Badge featured */}
                                {zone.featured && (
                                    <div className="absolute top-3 right-3 bg-secondary text-white text-[9px]
                                  font-heading font-bold uppercase tracking-widest px-2 py-1 rounded-full shadow-orange">
                                        ✈ Aeropuertos
                                    </div>
                                )}

                                {/* Header de zona */}
                                <div className="p-5 pb-4">
                                    <div className={`w-10 h-10 ${zone.bgColor} rounded-xl flex items-center justify-center mb-4
                                   group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon size={18} className={zone.color} />
                                    </div>

                                    <h3 className="font-heading text-base font-bold text-dark mb-1
                                 group-hover:text-primary transition-colors">
                                        {zone.label}
                                    </h3>
                                    <p className={`font-body text-xs font-medium ${zone.color}`}>
                                        {zone.distance}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className={`h-px mx-5 ${zone.bgColor}`} />

                                {/* Lista de destinos */}
                                <ul className="p-5 pt-4 space-y-2.5 flex-1">
                                    {zone.destinations.map((dest) => (
                                        <li key={dest.name} className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2 min-w-0">
                                                <span className={`w-1.5 h-1.5 rounded-full ${zone.dotColor} flex-shrink-0`} />
                                                <span className="font-body text-sm text-gray-700 truncate">{dest.name}</span>
                                            </div>
                                            <span className="font-body text-xs text-gray-400 flex-shrink-0">{dest.note}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Footer CTA */}
                                <div className={`mx-5 mb-5 mt-2 flex items-center justify-between py-3 px-4
                                  ${zone.bgColor} rounded-xl`}>
                                    <span className={`font-heading text-xs font-semibold ${zone.color}`}>
                                        Consultar precio
                                    </span>
                                    <ArrowRight size={13} className={`${zone.color} group-hover:translate-x-0.5 transition-transform`} />
                                </div>

                                {/* Línea de acento hover */}
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary
                                group-hover:w-full transition-all duration-500 ease-out" />
                            </motion.div>
                        )
                    })}
                </div>

                {/* ── Mapa visual minimalista de Argentina ── */}
                <motion.div
                    className="relative bg-white border border-light-dark/20 rounded-3xl overflow-hidden mb-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex flex-col lg:flex-row">

                        {/* Lado izquierdo — mapa SVG estilizado */}
                        <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center
                            bg-gradient-to-br from-dark to-primary-light relative overflow-hidden min-h-[320px]">

                            {/* Decoraciones de fondo */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                w-64 h-64 rounded-full border border-white/5" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                w-96 h-96 rounded-full border border-white/5" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                w-[480px] h-[480px] rounded-full border border-white/3" />
                            </div>

                            {/* Mapa SVG de Argentina simplificado */}
                            <svg
                                viewBox="0 0 220 380"
                                className="w-full max-w-[200px] lg:max-w-[220px] relative z-10"
                                aria-label="Mapa de Argentina con zonas de cobertura"
                            >
                                {/* Silueta de Argentina — forma simplificada */}
                                <path
                                    d="M110 10 C140 10, 170 25, 175 50 C180 75, 165 90, 170 110
                     C175 130, 185 140, 180 160 C175 180, 165 185, 160 200
                     C155 215, 160 225, 155 240 C150 255, 140 260, 135 275
                     C130 290, 125 310, 115 330 C110 345, 105 360, 100 370
                     C95 360, 90 345, 85 330 C75 310, 70 290, 65 275
                     C60 260, 50 255, 45 240 C40 225, 45 215, 40 200
                     C35 185, 25 180, 20 160 C15 140, 25 130, 30 110
                     C35 90, 20 75, 25 50 C30 25, 60 10, 90 10 Z"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.12)"
                                    strokeWidth="1.5"
                                />

                                {/* Relleno de la silueta */}
                                <path
                                    d="M110 10 C140 10, 170 25, 175 50 C180 75, 165 90, 170 110
                     C175 130, 185 140, 180 160 C175 180, 165 185, 160 200
                     C155 215, 160 225, 155 240 C150 255, 140 260, 135 275
                     C130 290, 125 310, 115 330 C110 345, 105 360, 100 370
                     C95 360, 90 345, 85 330 C75 310, 70 290, 65 275
                     C60 260, 50 255, 45 240 C40 225, 45 215, 40 200
                     C35 185, 25 180, 20 160 C15 140, 25 130, 30 110
                     C35 90, 20 75, 25 50 C30 25, 60 10, 90 10 Z"
                                    fill="rgba(255,255,255,0.04)"
                                />

                                {/* Radio de cobertura — círculo desde Monte */}
                                <circle cx="100" cy="205" r="90" fill="none"
                                    stroke="rgba(212,175,55,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                                <circle cx="100" cy="205" r="60" fill="none"
                                    stroke="rgba(212,175,55,0.20)" strokeWidth="1" strokeDasharray="3 3" />
                                <circle cx="100" cy="205" r="30" fill="rgba(212,175,55,0.06)"
                                    stroke="rgba(212,175,55,0.25)" strokeWidth="1" />

                                {/* Punto base — San Miguel del Monte */}
                                <circle cx="100" cy="205" r="5" fill="#d4af37" />
                                <circle cx="100" cy="205" r="10" fill="rgba(212,175,55,0.25)" />
                                <circle cx="100" cy="205" r="16" fill="rgba(212,175,55,0.10)" />

                                {/* Puntos de destino */}
                                {/* CABA */}
                                <circle cx="102" cy="178" r="3" fill="rgba(255,255,255,0.6)" />
                                <line x1="102" y1="178" x2="100" y2="205" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="2 2" />

                                {/* Ezeiza */}
                                <circle cx="92" cy="188" r="3" fill="rgba(167,139,250,0.8)" />

                                {/* Costa */}
                                <circle cx="145" cy="218" r="3" fill="rgba(34,211,238,0.7)" />
                                <line x1="145" y1="218" x2="100" y2="205" stroke="rgba(34,211,238,0.15)" strokeWidth="0.5" strokeDasharray="2 2" />

                                {/* Mar del Plata */}
                                <circle cx="135" cy="245" r="2.5" fill="rgba(34,211,238,0.5)" />

                                {/* Labels */}
                                <text x="108" y="175" fill="rgba(255,255,255,0.7)"
                                    style={{ fontSize: '8px', fontFamily: 'sans-serif' }}>CABA</text>
                                <text x="149" y="216" fill="rgba(34,211,238,0.8)"
                                    style={{ fontSize: '7px', fontFamily: 'sans-serif' }}>Costa</text>
                                <text x="74" y="213" fill="rgba(212,175,55,0.9)"
                                    style={{ fontSize: '7px', fontFamily: 'sans-serif' }}>Monte</text>
                            </svg>
                        </div>

                        {/* Lado derecho — texto + stats */}
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                            <span className="block w-8 h-0.5 bg-secondary rounded-full mb-5" />
                            <h3 className="font-heading text-2xl sm:text-3xl font-black text-dark mb-3 leading-tight">
                                Desde San Miguel del Monte<br />
                                <span className="text-secondary">a donde necesités</span>
                            </h3>
                            <p className="font-body text-gray-500 text-sm leading-relaxed mb-8">
                                Nuestro radio de operación principal cubre todo el Gran Buenos Aires y la Costa
                                Atlántica. Para destinos del interior del país, consultanos — hacemos rutas
                                especiales con el mismo estándar premium.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                {TRUST_STATS.map(({ icon: Icon, value, label }) => (
                                    <div key={label}
                                        className="bg-light rounded-xl p-4 border border-light-dark/20">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Icon size={14} className="text-secondary" />
                                            <span className="font-heading text-lg font-black text-dark">{value}</span>
                                        </div>
                                        <p className="font-body text-xs text-gray-500">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── Footer CTA ── */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="font-body text-gray-400 text-sm mb-4">
                        ¿No encontrás tu destino?{' '}
                        <span className="text-dark font-medium">Consultanos sin cargo</span>
                        {' '}— hacemos rutas a medida.
                    </p>
                    <button
                        onClick={() => openWhatsApp('Hola Maxi, quiero consultar disponibilidad para un destino especial')}
                        className="inline-flex items-center gap-2 text-secondary hover:text-dark
                       font-heading font-semibold text-sm transition-colors duration-200 group"
                    >
                        <MessageCircle size={15} />
                        Escribir por WhatsApp
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </motion.div>

            </div>
        </section>
    )
}