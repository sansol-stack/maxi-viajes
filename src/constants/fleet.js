/**
 * MAXI VIAJES - Flota de vehículos
 */

export const FLEET = [
  {
    id: 'hiace',
    name: 'Toyota Hiace Premium',
    role: 'Vehículo Principal',
    tagline: 'La opción más elegida para grupos y familias',
    gradient: 'from-primary to-primary-light',
    icon: 'Van',
    capacity: '6 pasajeros',
    featured: true,
    specs: [
      'Hasta 6 pasajeros cómodos',
      'Aire acondicionado dual',
      'Butacas reclinables premium',
      'Amplio espacio para valijas',
      'Mantenimiento preventivo al día',
    ],
  },
  {
    id: 'sedan',
    name: 'Sedán Ejecutivo',
    role: 'Traslados Privados',
    tagline: 'Discreto, profesional y confortable',
    gradient: 'from-dark to-primary',
    icon: 'Car',
    capacity: '4 pasajeros',
    featured: false,
    specs: [
      '4 pasajeros',
      'Aire acondicionado',
      'Equipado para ejecutivos',
      'Discreto y profesional',
      'Ideal para viajes corporativos',
    ],
  },
  {
    id: 'minibus',
    name: 'Minibús',
    role: 'Grupos Grandes',
    tagline: 'Comodidad garantizada para grupos',
    gradient: 'from-dark-lighter to-dark',
    icon: 'Bus',
    capacity: '8-12 pasajeros',
    featured: false,
    specs: [
      'Grupos de 8 a 12 personas',
      'Aire acondicionado',
      'Gran capacidad de carga',
      'Comodidad garantizada',
      'Consultar disponibilidad',
    ],
  },
]
