import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  MessageCircle,
  User,
  Calendar,
  MapPin,
  Users,
  Clock,
  Luggage,
  ChevronRight,
  ArrowRight,
  Check,
  ChevronDown,
} from 'lucide-react'
import { CONTACT, RECAPTCHA } from '../constants/config'

// ── Opciones de los selects ──────────────────────────────────────────────────

const PASSENGER_OPTIONS = [
  { value: '1', label: '1 pasajero' },
  { value: '2', label: '2 pasajeros' },
  { value: '3', label: '3 pasajeros' },
  { value: '4', label: '4 pasajeros' },
  { value: '5', label: '5 pasajeros' },
  { value: '6', label: '6 pasajeros' },
  { value: '6+', label: 'Más de 6 (consultar)' },
]

const LUGGAGE_QTY_OPTIONS = [
  { value: '0', label: '0' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6+', label: '6+' },
]

const WAIT_OPTIONS = [
  { value: 'no', label: 'No, solo traslado de ida' },
  { value: 'si_corta', label: 'Sí, espera corta (hasta 1 hora)' },
  { value: 'si_larga', label: 'Sí, espera larga (más de 1 hora)' },
  { value: 'ida_vuelta', label: 'Ida y vuelta en el mismo día' },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Genera el mensaje de WhatsApp con todos los datos del formulario */
function buildWhatsAppMessage(data, initialMsg) {
  const lines = [
    `Hola Maxi! Te escribo desde la web para consultar disponibilidad.`,
    ``,
    `- *Nombre:* ${data.name}`,
    `- *Fecha del viaje:* ${data.date}`,
    `- *Desde:* ${data.from}`,
    `- *Hasta:* ${data.to}`,
    `- *Pasajeros:* ${data.passengers}`,
    `- *¿Necesita espera?* ${data.wait}`,
    `- *Equipaje:* ${data.luggage}`,
  ]

  if (initialMsg) {
    // Si hay una consulta contextualizada (ej: de la Hiace o Corolla)
    const cleanedMsg = initialMsg
      .replace(/^Hola\s+Maxi,?\s*/i, '') // Quitamos el saludo repetido si existe
      .trim()
    if (cleanedMsg) {
      lines.push(``, `💬 *Interés:* ${cleanedMsg}`)
    }
  }

  lines.push(``, `Quedo a la espera, gracias!`)
  return lines.join('\n')
}

const INITIAL_STATE = {
  name: '',
  date: '',
  from: '',
  to: '',
  passengers: '',
  wait: '',
  luggagePersonal: '0',
  luggageCarryOn: '0',
  luggageStandard: '0',
}

// ── Componente Principal ──────────────────────────────────────────────────────

export default function QuoteModal({ isOpen, onClose, initialMsg }) {
  const [form, setForm] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [step, setStep] = useState(1) // 1 = form, 2 = success
  const [isVerifying, setIsVerifying] = useState(false)
  const [recaptchaError, setRecaptchaError] = useState(null)
  const firstInputRef = useRef(null)

  // Cargar Google reCAPTCHA v3 dinámicamente si está habilitado
  useEffect(() => {
    if (isOpen && RECAPTCHA.enabled && RECAPTCHA.siteKey) {
      const scriptId = 'google-recaptcha-script'
      let script = document.getElementById(scriptId)

      if (!script) {
        script = document.createElement('script')
        script.id = scriptId
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA.siteKey}`
        script.async = true
        script.defer = true
        script.onload = () => {
          console.log('Google reCAPTCHA cargado con éxito.')
        }
        script.onerror = () => {
          console.error('Error al cargar Google reCAPTCHA.')
          setRecaptchaError('No se pudo cargar la verificación de seguridad.')
        }
        document.body.appendChild(script)
      }
    }
  }, [isOpen])

  // Focus al primer campo cuando abre
  useEffect(() => {
    if (isOpen) {
      setForm(INITIAL_STATE)
      setErrors({})
      setStep(1)
      setIsVerifying(false)
      setRecaptchaError(null)
      setTimeout(() => firstInputRef.current?.focus(), 200)
    }
  }, [isOpen])

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function handleSelectChange(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Ingresá tu nombre'
    if (!form.date) newErrors.date = 'Seleccioná la fecha del viaje'
    if (!form.from.trim()) newErrors.from = 'Indicá el punto de origen'
    if (!form.to.trim()) newErrors.to = 'Indicá el destino'
    if (!form.passengers) newErrors.passengers = 'Seleccioná la cantidad de pasajeros'
    if (!form.wait) newErrors.wait = 'Indicá si necesitás espera'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    if (RECAPTCHA.enabled && RECAPTCHA.siteKey) {
      setIsVerifying(true)
      
      if (!window.grecaptcha) {
        setIsVerifying(false)
        console.warn("Google reCAPTCHA no está disponible. Bypassing por fallback de seguridad y accesibilidad.")
        proceedToWhatsApp()
        return
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(RECAPTCHA.siteKey, { action: 'submit_quote' })
          .then((token) => {
            setIsVerifying(false)
            if (token) {
              console.log("reCAPTCHA verificado con éxito.")
              proceedToWhatsApp()
            } else {
              setErrors(prev => ({ ...prev, name: 'Error en la verificación anti-bot. Por favor, intentalo de nuevo.' }))
            }
          })
          .catch((err) => {
            setIsVerifying(false)
            console.error("Error al ejecutar reCAPTCHA:", err)
            // Fallback: no bloqueamos al cliente final si Google tiene fallos temporales
            proceedToWhatsApp()
          })
      })
    } else {
      proceedToWhatsApp()
    }
  }

  function proceedToWhatsApp() {
    // Obtener labels amigables de los selects
    const passLabel = PASSENGER_OPTIONS.find((o) => o.value === form.passengers)?.label || form.passengers
    const waitLabel = WAIT_OPTIONS.find((o) => o.value === form.wait)?.label || form.wait

    const luggageStr = [
      form.luggagePersonal !== '0' ? `${form.luggagePersonal} Art. Personal` : '',
      form.luggageCarryOn !== '0' ? `${form.luggageCarryOn} Carry-on (0-10kg)` : '',
      form.luggageStandard !== '0' ? `${form.luggageStandard} Valija (10-23kg)` : '',
    ].filter(Boolean).join(', ') || 'Sin equipaje'

    const message = buildWhatsAppMessage(
      {
        name: form.name,
        date: formatDate(form.date),
        from: form.from,
        to: form.to,
        passengers: passLabel,
        wait: waitLabel,
        luggage: luggageStr,
      },
      initialMsg
    )

    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`

    window.open(url, '_blank', 'noopener,noreferrer')
    setStep(2)
  }

  /** Formatea 2026-06-15 → 15/06/2026 */
  function formatDate(iso) {
    if (!iso) return ''
    const [y, m, d] = iso.split('-')
    return `${d}/${m}/${y}`
  }

  /** Fecha mínima: hoy */
  const today = new Date().toISOString().split('T')[0]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              key="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="relative bg-primary-light border border-white/10 rounded-3xl shadow-card w-full max-w-lg overflow-hidden my-8"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* ── Header ── */}
              <div className="relative bg-gradient-to-b from-primary-light to-primary border-b border-white/10 px-6 pt-7 pb-6">
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10
                             flex items-center justify-center text-white transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={16} />
                </button>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shadow-orange flex-shrink-0">
                    <MessageCircle size={20} className="text-black" />
                  </div>
                  <div>
                    <h2 id="modal-title" className="font-heading text-white text-lg font-bold leading-tight uppercase tracking-wider">
                      Cotizá tu viaje
                    </h2>
                    <p className="font-body text-white/50 text-xs">
                      Completá los datos y te respondemos por WhatsApp al instante
                    </p>
                  </div>
                </div>

                {/* Barra de progreso */}
                {step === 1 && (
                  <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-secondary rounded-full"
                      animate={{
                        width: `${Math.min(
                          100,
                          (Object.values(form).filter(Boolean).length / 9) * 100
                        )}%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
              </div>

              {/* ── Cuerpo ── */}
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="px-6 py-6 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                  >
                    {/* Nombre */}
                    <FieldGroup icon={User} label="Nombre completo" error={errors.name} required>
                      <input
                        ref={firstInputRef}
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ej: Juan García"
                        className={inputClass(errors.name)}
                        autoComplete="name"
                      />
                    </FieldGroup>

                    {/* Fecha */}
                    <FieldGroup icon={Calendar} label="Fecha del viaje" error={errors.date} required>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        min={today}
                        className={inputClass(errors.date)}
                      />
                    </FieldGroup>

                    {/* Origen → Destino (2 columnas) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FieldGroup icon={MapPin} label="Desde" error={errors.from} required>
                        <input
                          type="text"
                          name="from"
                          value={form.from}
                          onChange={handleChange}
                          placeholder="CABA"
                          className={inputClass(errors.from)}
                        />
                      </FieldGroup>
                      <FieldGroup icon={ArrowRight} label="Hasta" error={errors.to} required>
                        <input
                          type="text"
                          name="to"
                          value={form.to}
                          onChange={handleChange}
                          placeholder="Ej: Monte o Ezeiza"
                          className={inputClass(errors.to)}
                        />
                      </FieldGroup>
                    </div>

                    {/* Dropdowns Diseñados */}
                    <CustomSelect
                      icon={Users}
                      label="Cantidad de pasajeros"
                      value={form.passengers}
                      options={PASSENGER_OPTIONS}
                      onChange={(val) => handleSelectChange('passengers', val)}
                      error={errors.passengers}
                      placeholder="Seleccioná cantidad"
                    />

                    <CustomSelect
                      icon={Clock}
                      label="¿Necesitás que Maxi espere?"
                      value={form.wait}
                      options={WAIT_OPTIONS}
                      onChange={(val) => handleSelectChange('wait', val)}
                      error={errors.wait}
                      placeholder="Seleccioná opción"
                    />

                    {/* Sección de Equipaje Detallado */}
                    <div className="space-y-3 pt-2">
                      <label className="flex items-center gap-1.5 font-heading text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                        <Luggage size={13} className="text-secondary flex-shrink-0" />
                        Equipaje (Cantidad por tipo)
                      </label>

                      <div className="space-y-4 bg-black/20 p-4 rounded-3xl border border-white/5">
                        {/* Artículo Personal */}
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex flex-col">
                            <span className="font-body text-sm text-white/70 leading-none mb-1">Artículo Personal</span>
                            <span className="text-white/30 text-[10px] uppercase tracking-wider font-semibold">Mochila o bolso</span>
                          </div>
                          <div className="w-24">
                            <CustomSelect
                              value={form.luggagePersonal}
                              options={LUGGAGE_QTY_OPTIONS}
                              onChange={(val) => handleSelectChange('luggagePersonal', val)}
                              placeholder="0"
                              noLabel
                            />
                          </div>
                        </div>

                        {/* Carry-on */}
                        <div className="flex items-center justify-between gap-4 border-t border-white/5 pt-4">
                          <div className="flex flex-col">
                            <span className="font-body text-sm text-white/70 leading-none mb-1">Carry-on <span className="text-white/40 text-xs font-body font-normal">(0-10kg)</span></span>
                            <span className="text-white/30 text-[10px] uppercase tracking-wider font-semibold">Equipaje de bodega</span>
                          </div>
                          <div className="w-24">
                            <CustomSelect
                              value={form.luggageCarryOn}
                              options={LUGGAGE_QTY_OPTIONS}
                              onChange={(val) => handleSelectChange('luggageCarryOn', val)}
                              placeholder="0"
                              noLabel
                            />
                          </div>
                        </div>

                        {/* Valija Estándar */}
                        <div className="flex items-center justify-between gap-4 border-t border-white/5 pt-4">
                          <div className="flex flex-col">
                            <span className="font-body text-sm text-white/70 leading-none mb-1">Valija <span className="text-white/40 text-xs font-body font-normal">(10-23kg)</span></span>
                            <span className="text-white/30 text-[10px] uppercase tracking-wider font-semibold">Equipaje de bodega</span>
                          </div>
                          <div className="w-24">
                            <CustomSelect
                              value={form.luggageStandard}
                              options={LUGGAGE_QTY_OPTIONS}
                              onChange={(val) => handleSelectChange('luggageStandard', val)}
                              placeholder="0"
                              noLabel
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isVerifying}
                      className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark
                                 disabled:bg-secondary/40 disabled:scale-100 disabled:cursor-not-allowed
                                 text-black font-heading font-bold text-sm py-4 px-6 rounded-2xl
                                 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]
                                 shadow-orange mt-4"
                    >
                      <MessageCircle size={18} fill="black" className={isVerifying ? "animate-pulse" : ""} />
                      {isVerifying ? 'Verificando seguridad...' : 'Enviar consulta por WhatsApp'}
                      {!isVerifying && <ChevronRight size={18} className="ml-1" />}
                    </button>

                    <p className="text-center font-body text-white/30 text-xs">
                      Se abrirá tu aplicación de WhatsApp con la consulta redactada.
                    </p>

                    {/* Disclaimer de Privacidad Google reCAPTCHA v3 */}
                    {RECAPTCHA.enabled && RECAPTCHA.siteKey && (
                      <p className="text-center font-body text-[10px] text-white/20 leading-relaxed max-w-xs mx-auto mt-2">
                        Este sitio está protegido por reCAPTCHA y se aplican la{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/40">
                          Política de Privacidad
                        </a>{' '}
                        y los{' '}
                        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/40">
                          Términos de Servicio
                        </a>{' '}
                        de Google.
                      </p>
                    )}
                  </motion.form>
                ) : (
                  /* ── Pantalla de éxito ── */
                  <motion.div
                    key="success"
                    className="px-6 py-12 text-center bg-primary-light"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring' }}
                  >
                    <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle size={36} className="text-secondary" />
                    </div>
                    <h3 className="font-heading text-white text-2xl font-bold mb-3 uppercase tracking-wider">
                      ¡WhatsApp Listo!
                    </h3>
                    <p className="font-body text-white/60 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                      Se abrió WhatsApp con tu mensaje formateado.
                      Solo presioná <strong>Enviar</strong> y Maxi te contestará a la brevedad.
                    </p>
                    <button
                      onClick={onClose}
                      className="font-heading text-secondary text-sm font-semibold hover:text-white
                                 transition-colors underline underline-offset-4 decoration-secondary/40"
                    >
                      Cerrar ventana
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── Sub-componentes Diseñados ──────────────────────────────────────────────────

function FieldGroup({ icon: Icon, label, error, required, children }) {
  return (
    <div>
      <label className="flex items-center gap-1.5 font-heading text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
        <Icon size={13} className="text-secondary flex-shrink-0" />
        {label}
        {required && <span className="text-secondary">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-red-400 text-xs font-body">{error}</p>
      )}
    </div>
  )
}

function inputClass(error) {
  return `w-full font-body text-sm px-4 py-3 rounded-xl border transition-all duration-300 bg-[#121212] text-white placeholder:text-white/20
    focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary
    ${error
      ? 'border-red-500/50 focus:ring-red-500/10'
      : 'border-white/10 hover:border-white/20'
    }`
}

/**
 * Componente de Selector Personalizado (Custom Select)
 */
function CustomSelect({ icon: Icon, label, value, options, onChange, error, placeholder, noLabel = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedOption = options.find((o) => o.value === value)

  return (
    <div className="relative" ref={dropdownRef}>
      {!noLabel && (
        <label className="flex items-center gap-1.5 font-heading text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
          {Icon && <Icon size={13} className="text-secondary flex-shrink-0" />}
          {label}
          <span className="text-secondary">*</span>
        </label>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between font-body text-sm px-4 py-3 rounded-xl border transition-all duration-300 bg-[#121212] text-left
          ${isOpen ? 'border-secondary ring-2 ring-secondary/20 text-white' : error ? 'border-red-500/50 text-white' : 'border-white/10 hover:border-white/20 text-white'}
          ${!value ? 'text-white/30' : ''}`}
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={16} className="text-secondary/70" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 mt-2 z-50 rounded-xl bg-primary border border-white/10 shadow-2xl max-h-60 overflow-y-auto custom-scrollbar"
          >
            <div className="p-1.5 space-y-0.5">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left font-body text-sm px-4 py-2.5 rounded-lg flex items-center justify-between transition-all duration-200
                    ${opt.value === value
                      ? 'bg-secondary/10 text-secondary font-semibold border border-secondary/20'
                      : 'text-white/70 hover:bg-white/5 hover:text-white border border-transparent'}`}
                >
                  <span>{opt.label}</span>
                  {opt.value === value && <Check size={14} className="text-secondary" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <p className="mt-1.5 text-red-400 text-xs font-body">{error}</p>
      )}
    </div>
  )
}