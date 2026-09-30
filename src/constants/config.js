/**
 * MAXI VIAJES - Configuración de Contacto
 * Números de teléfono, WhatsApp y datos de contacto
 */

export const CONTACT = {
  /** Número de WhatsApp con código de país (sin + ni espacios) */
  whatsappNumber: '5492271410310',
  /** Número formateado para mostrar en pantalla */
  phoneDisplay: '+54 2271 410310',
  /** Mensaje predeterminado para WhatsApp */
  whatsappMessage: 'Hola Maxi, me gustaría consultar sobre disponibilidad',
  /** Ubicación de la empresa */
  location: 'Buenos Aires, Argentina',
  /** Email de contacto (opcional) */
  email: 'presupuestosmaxiviajes@gmail.com',
}

export const SITE = {
  name: 'Maxi Viajes',
  /** Dominio oficial (con www, sin barra final) — usado en canonical y metadatos */
  url: 'https://www.maxiviajestraslados.com.ar',
  tagline: 'Traslados Premium desde Buenos Aires',
  description:
    'Servicio de traslados premium de media y larga distancia desde Buenos Aires. Aeropuertos, Costa Atlántica y viajes ejecutivos.',
  /** Año de fundación */
  since: 2018,
}

/** Secciones de la one-page de Inicio (id = id de la <section>) */
export const NAV_LINKS = [
  { label: 'Inicio', id: 'inicio', path: '/' },
  { label: 'Nosotros', id: 'nosotros', path: '/#nosotros' },
  { label: 'Servicios', id: 'servicios', path: '/#servicios' },
  { label: 'Flota', id: 'flota', path: '/#flota' },
  { label: 'Contacto', id: 'contacto', path: '/#contacto' },
]


export const RECAPTCHA = {
  enabled: true,
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || '',
}

