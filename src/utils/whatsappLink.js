/**
 * MAXI VIAJES - Generador de links de WhatsApp
 * Función reutilizable para todos los CTAs de la app
 */

import { CONTACT } from '../constants/config'

/**
 * Genera un link de WhatsApp con mensaje predeterminado o personalizado
 * @param {string} [customMessage] - Mensaje personalizado (opcional)
 * @returns {string} URL completa para abrir WhatsApp
 */
export function generateWhatsAppLink(customMessage) {
  const message = customMessage || CONTACT.whatsappMessage
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodedMessage}`
}

/**
 * Abre WhatsApp en una nueva pestaña con el mensaje indicado
 * @param {string} [customMessage] - Mensaje personalizado (opcional)
 */
export function openWhatsApp(customMessage) {
  const link = generateWhatsAppLink(customMessage)
  window.open(link, '_blank', 'noopener,noreferrer')
}

/**
 * Genera mensaje de WhatsApp contextualizado según el servicio
 * @param {string} service - Nombre del servicio
 * @returns {string} Link de WhatsApp con mensaje específico
 */
export function getWhatsAppLinkForService(service) {
  const message = `Hola Maxi, me gustaría consultar sobre el servicio de ${service}`
  return generateWhatsAppLink(message)
}
