/**
 * MAXI VIAJES - Servicios ofrecidos
 * Cada servicio incluye icono, título, descripción y bullets
 */

export const SERVICES = [
  {
    id: 'aeropuertos',
    icon: 'Plane',
    title: 'Traslados a Aeropuertos',
    description:
      'Llegá a tiempo a tu vuelo sin el estrés del transporte. Cubrimos Ezeiza (EZE) y Aeroparque (AEP) con puntualidad garantizada.',
    bullets: [
      'Viajes seguros y puntuales',
      'Monitoreo de vuelos en tiempo real',
      'Conductor profesional y confiable',
    ],
    badge: 'EZE · AEP',
  },
  {
    id: 'costa',
    icon: 'Waves',
    title: 'Viajes a Costa Atlántica',
    description:
      'Pinamar, Cariló, Villa Gesell, Mar del Plata y Costa Esmeralda. Disfrutá el viaje desde el primer momento con total comodidad.',
    bullets: [
      'Rutas directas y seguras',
      'Aire acondicionado todo el trayecto',
      'Paradas de descanso planificadas',
    ],
    badge: 'Temporada',
  },
  {
    id: 'ejecutivos',
    icon: 'Briefcase',
    title: 'Traslados Ejecutivos',
    description:
      'Reuniones, eventos y compromisos empresariales. Servicio premium con la discreción y puntualidad que tu negocio necesita.',
    bullets: [
      'Atención ejecutiva personalizada',
      'Flexibilidad horaria total',
      'Confidencialidad garantizada',
    ],
    badge: 'Business',
  },
]
