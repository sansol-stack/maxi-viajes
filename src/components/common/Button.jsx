/**
 * Button - Componente de botón reutilizable con variantes
 *
 * @param {object} props
 * @param {'primary'|'secondary'|'outline'|'ghost'} [props.variant='primary']
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {boolean} [props.whatsapp=false] - Si true, abre WhatsApp al hacer click
 * @param {string} [props.customMessage] - Mensaje personalizado de WhatsApp
 * @param {function} [props.onClick]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 * @param {string} [props.href] - Si se provee, renderiza como <a>
 */

import { openWhatsApp } from '../../utils/whatsappLink'

const VARIANTS = {
  primary:
    'bg-secondary hover:bg-secondary-dark text-white shadow-orange hover:shadow-orange hover:scale-[1.02] active:scale-[0.98]',
  secondary:
    'bg-white hover:bg-light text-primary border-2 border-white hover:border-primary-light hover:scale-[1.02] active:scale-[0.98]',
  outline:
    'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white hover:scale-[1.02] active:scale-[0.98]',
  ghost:
    'bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/60 hover:scale-[1.02] active:scale-[0.98]',
  dark:
    'bg-primary hover:bg-primary-light text-white hover:scale-[1.02] active:scale-[0.98]',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  whatsapp = false,
  customMessage,
  onClick,
  className = '',
  children,
  href,
  ...rest
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-heading font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none'

  const variantClasses = VARIANTS[variant] || VARIANTS.primary
  const sizeClasses = SIZES[size] || SIZES.md
  const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`

  function handleClick(e) {
    if (whatsapp) {
      openWhatsApp(customMessage)
    }
    if (onClick) onClick(e)
  }

  if (href && !whatsapp) {
    return (
      <a href={href} className={allClasses} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={handleClick} className={allClasses} {...rest}>
      {children}
    </button>
  )
}
