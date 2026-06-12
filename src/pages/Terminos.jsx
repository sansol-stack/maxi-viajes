/**
 * Terminos - Página de Términos y Condiciones / Políticas de Cancelación
 * Ruta: /terminos
 *
 * No requiere assets adicionales.
 */

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Clock, AlertTriangle, CheckCircle2,
  Plane, Users, Shield, MessageCircle, CreditCard,
  UserCheck, Lock, XCircle
} from 'lucide-react'
import { openWhatsApp } from '../utils/whatsappLink'
import { SITE, CONTACT } from '../constants/config'

// ── Variante de animación de entrada ────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' },
  }),
}

// ── Tabla de cancelaciones ────────────────────────────────────────────────────
const CANCEL_ROWS = [
  {
    tipo: 'Traslados CABA / GBA',
    col1: { label: 'Más de 72 hs', pct: '0%', color: 'text-green-400' },
    col2: { label: 'Entre 72 y 24 hs', pct: '50%', color: 'text-amber-400' },
    col3: { label: 'Menos de 24 hs / No Show', pct: '100%', color: 'text-red-400' },
  },
  {
    tipo: 'Larga distancia (Costa Atlántica, interior)',
    col1: { label: 'Más de 72 hs', pct: '0%', color: 'text-green-400' },
    col2: { label: 'Entre 72 y 24 hs', pct: '50%', color: 'text-amber-400' },
    col3: { label: 'Menos de 24 hs / No Show', pct: '100%', color: 'text-red-400' },
  },
  {
    tipo: 'Traslados aeroportuarios (EZE / AEP)',
    col1: { label: 'Vuelo cancelado por aerolínea', pct: '0%', color: 'text-green-400' },
    col2: { label: 'Aviso con más de 2 hs', pct: '50%', color: 'text-amber-400' },
    col3: { label: 'Menos de 2 hs / No Show', pct: '100%', color: 'text-red-400' },
  },
]

// ── Componente de sección ─────────────────────────────────────────────────────
function DocSection({ icon: Icon, title, children, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-secondary/15 border border-secondary/25
                        flex items-center justify-center flex-shrink-0">
          <Icon size={15} className="text-secondary" />
        </div>
        <h2 className="font-heading text-lg font-bold text-dark">{title}</h2>
      </div>
      <div className="pl-11">{children}</div>
    </motion.div>
  )
}

// ── Párrafo de documento ──────────────────────────────────────────────────────
function DocP({ children }) {
  return (
    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{children}</p>
  )
}

// ── Item de lista ─────────────────────────────────────────────────────────────
function DocItem({ children, color = 'text-secondary' }) {
  return (
    <li className="flex items-start gap-2.5 mb-2.5">
      <CheckCircle2 size={14} className={`${color} flex-shrink-0 mt-0.5`} />
      <span className="font-body text-gray-500 text-sm leading-relaxed">{children}</span>
    </li>
  )
}

// ── Item de lista negativo (restricciones / conducta) ────────────────────────
function DocItemX({ children }) {
  return (
    <li className="flex items-start gap-2.5 mb-2.5">
      <XCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
      <span className="font-body text-gray-500 text-sm leading-relaxed">{children}</span>
    </li>
  )
}

export default function Terminos() {
  const navigate = useNavigate()

  // Scroll al tope al montar
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-light">

      {/* ── Header de la página ── */}
      <div className="bg-dark border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white
                       font-body text-sm transition-colors duration-200 group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            Volver al inicio
          </button>
          <span className="text-white/35">·</span>
          <span className="font-heading text-white/60 text-sm">Términos y Condiciones</span>
        </div>
      </div>

      {/* ── Hero de la página ── */}
      <div className="bg-gradient-to-b from-dark to-dark/95 py-6 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30
                            text-secondary text-xs font-heading font-bold uppercase tracking-widest
                            px-4 py-2 rounded-full mb-6">
              <Shield size={12} />
              Documento oficial
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Términos y{' '}
              <span className="text-secondary">Condiciones</span>
            </h1>
            <p className="font-body text-white/50 text-base max-w-lg mx-auto leading-relaxed">
              Políticas de servicio, cancelación y espera de{' '}
              <strong className="text-white/70">{SITE.name}</strong>.
              Vigentes desde {SITE.since}.
            </p>
            <p className="font-body text-white/35 text-xs mt-4">
              Última actualización: mayo de 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Contenido del documento ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 max-w-3xl">

        {/* Intro */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-light-dark/20 rounded-2xl p-6 mb-10 shadow-sm"
        >
          <p className="font-body text-gray-700 text-sm leading-relaxed">
            Al reservar un servicio con <strong className="text-dark">{SITE.name}</strong>,
            el pasajero confirma haber leído, comprendido y aceptado las presentes
            condiciones. La reserva se considera válida una vez recibida la
            confirmación formal por parte de Maxi Echeverría a través de WhatsApp o email.
          </p>
        </motion.div>

        {/* 1. Reservas y confirmación */}
        <DocSection icon={CheckCircle2} title="1. Reservas y confirmación" index={0}>
          <DocP>
            Todas las reservas deben realizarse con anticipación suficiente a través de
            WhatsApp ({CONTACT.phoneDisplay}) o email ({CONTACT.email}).
          </DocP>
          <DocP>
            Una reserva se considera <strong className="text-dark font-medium">confirmada</strong> únicamente
            cuando el cliente recibe la confirmación escrita de parte de Maxi Viajes, junto
            con el detalle del servicio (fecha, horario, origen, destino y tarifa acordada).
          </DocP>
          <DocP>
            Es responsabilidad del pasajero verificar que todos los datos informados sean
            correctos al momento de la reserva. Datos erróneos pueden derivar en cargos
            adicionales o en la imposibilidad de cumplir el servicio.
          </DocP>
        </DocSection>

        {/* 2. Políticas de cancelación — tabla */}
        <DocSection icon={AlertTriangle} title="2. Políticas de cancelación y modificación" index={1}>
          <DocP>
            La cancelación o modificación de un servicio confirmado está sujeta a los
            siguientes cargos, calculados sobre el valor total del traslado acordado:
          </DocP>

          {/* Tabla desktop */}
          <div className="hidden sm:block overflow-hidden rounded-xl border border-light-dark/20 mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-dark text-white/60">
                  <th className="text-left font-heading text-[10px] uppercase tracking-widest
                                 font-semibold px-4 py-3 w-2/5">Tipo de servicio</th>
                  <th className="text-center font-heading text-[10px] uppercase tracking-widest
                                 font-semibold px-3 py-3 text-green-400">+24 hs</th>
                  <th className="text-center font-heading text-[10px] uppercase tracking-widest
                                 font-semibold px-3 py-3 text-amber-400">12–24 hs</th>
                  <th className="text-center font-heading text-[10px] uppercase tracking-widest
                                 font-semibold px-3 py-3 text-red-400">&lt;12 hs / No Show</th>
                </tr>
              </thead>
              <tbody>
                {CANCEL_ROWS.map((row, i) => (
                  <tr key={row.tipo}
                    className={`border-t border-light-dark/20 ${i % 2 === 0 ? 'bg-white' : 'bg-light'}`}>
                    <td className="px-4 py-3 font-body text-gray-600 text-xs leading-snug">{row.tipo}</td>
                    <td className={`px-3 py-3 text-center font-heading font-black text-sm ${row.col1.color}`}>
                      {row.col1.pct}
                    </td>
                    <td className={`px-3 py-3 text-center font-heading font-black text-sm ${row.col2.color}`}>
                      {row.col2.pct}
                    </td>
                    <td className={`px-3 py-3 text-center font-heading font-black text-sm ${row.col3.color}`}>
                      {row.col3.pct}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards mobile */}
          <div className="sm:hidden space-y-3 mb-5">
            {CANCEL_ROWS.map((row) => (
              <div key={row.tipo}
                className="bg-white border border-light-dark/20 rounded-xl p-4">
                <p className="font-heading font-bold text-dark text-xs mb-3">{row.tipo}</p>
                <div className="space-y-2">
                  {[row.col1, row.col2, row.col3].map((col) => (
                    <div key={col.label} className="flex justify-between items-center">
                      <span className="font-body text-gray-500 text-xs">{col.label}</span>
                      <span className={`font-heading font-black text-sm ${col.color}`}>{col.pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex gap-3 mb-3">
            <AlertTriangle size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="font-body text-amber-700 text-xs leading-relaxed">
              Los porcentajes se aplican sobre el <strong>valor total del traslado</strong> acordado
              al momento de la confirmación. En caso de haber abonado una seña, el cargo
              de penalidad se descontará de la misma.
            </p>
          </div>

          <div className="bg-light border border-light-dark/20 rounded-xl px-4 py-3 flex gap-3">
            <CreditCard size={15} className="text-secondary flex-shrink-0 mt-0.5" />
            <p className="font-body text-gray-500 text-xs leading-relaxed">
              <strong className="text-dark">Pagos anticipados:</strong> si el viaje fue abonado
              con anticipación y luego surgen modificaciones sobre el presupuesto acordado
              (cambio de horario, ruta, paradas adicionales, etc.), podrán aplicarse
              recargos sobre el monto ya abonado, los cuales serán informados al
              pasajero antes de confirmar el cambio.
            </p>
          </div>
        </DocSection>

        {/* 3. Excepciones aeroportuarias */}
        <DocSection icon={Plane} title="3. Excepciones — traslados aeroportuarios" index={2}>
          <DocP>
            Reconocemos que los viajes aéreos pueden sufrir imprevistos fuera del control
            del pasajero. Para servicios con origen o destino en Ezeiza (EZE) o
            Aeroparque (AEP) se aplican las siguientes excepciones:
          </DocP>
          <ul className="space-y-1">
            <DocItem color="text-green-500">
              <strong className="text-dark font-medium">Vuelo cancelado por la aerolínea:</strong>{' '}
              Sin cargo, siempre que el pasajero notifique a Maxi Viajes antes de que
              la unidad se dirija al aeropuerto.
            </DocItem>
            <DocItem color="text-amber-500">
              <strong className="text-dark font-medium">Vuelo demorado o desviado:</strong>{' '}
              El pasajero debe informar la nueva hora estimada de arribo lo antes posible.
              Maxi Viajes reprogramará la espera sujeta a disponibilidad. Si no se informa
              la demora, la espera posterior al horario pactado tendrá un costo adicional
              por hora/fracción, o el servicio se considerará cumplido pasados los
              60 minutos de tolerancia.
            </DocItem>
            <DocItem color="text-red-400">
              <strong className="text-dark font-medium">No Show en aeropuertos:</strong>{' '}
              Si el pasajero no se presenta ni contacta a Maxi Viajes dentro de los
              60 minutos de tolerancia, el servicio será facturado al 100%.
            </DocItem>
          </ul>
        </DocSection>

        {/* 4. Tolerancias y esperas */}
        <DocSection icon={Clock} title="4. Tolerancias y esperas" index={3}>
          <ul className="space-y-1">
            <DocItem>
              <strong className="text-dark font-medium">Traslados particulares y corporativos:</strong>{' '}
              15 minutos de cortesía a partir de la hora acordada. Pasado ese tiempo,
              se cobrará un adicional por fracción de espera o el conductor podrá
              retirarse considerándose el servicio como No Show (cobro al 100%).
            </DocItem>
            <DocItem>
              <strong className="text-dark font-medium">Arribo en aeropuertos:</strong>{' '}
              60 minutos de tolerancia a partir de la hora real de aterrizaje del vuelo,
              monitoreada por Maxi Viajes en tiempo real.
            </DocItem>
          </ul>
        </DocSection>

        {/* 5. Capacidad y equipaje */}
        <DocSection icon={Users} title="5. Capacidad y equipaje" index={4}>
          <DocP>
            La <strong className="text-dark font-medium">Toyota Hiace VX Premium</strong> admite
            hasta <strong className="text-dark font-medium">6 pasajeros con valijas</strong>.
            El <strong className="text-dark font-medium">Toyota Corolla</strong> admite un máximo
            de <strong className="text-dark font-medium">4 pasajeros</strong>.
          </DocP>
          <DocP>
            La capacidad real de equipaje depende del tamaño y cantidad de valijas.
            Para grupos completos (5-6 pasajeros) con equipaje grande o múltiples
            piezas, recomendamos <strong className="text-dark font-medium">consultar
            previamente</strong> el espacio disponible para garantizar que todo
            entre cómodamente.
          </DocP>
          <DocP>
            Por razones de seguridad vial, no se iniciará ningún traslado que exceda la
            capacidad legal del vehículo. Maxi Viajes se reserva el derecho de rechazar
            o ajustar el servicio si el volumen de equipaje excede el espacio disponible.
          </DocP>
          <DocP>
            Para grupos o necesidades de mayor capacidad, consultar disponibilidad
            directamente por WhatsApp.
          </DocP>
        </DocSection>

        {/* 6. Devoluciones y reembolsos */}
        <DocSection icon={CreditCard} title="6. Devoluciones y reembolsos" index={5}>
          <DocP>
            En los casos en que corresponda un reembolso (cancelaciones sin cargo,
            créditos a favor no utilizados, etc.), el importe será devuelto utilizando
            el <strong className="text-dark font-medium">mismo medio de pago</strong> con
            el que se realizó la transacción original.
          </DocP>
          <div className="bg-light border border-light-dark/20 rounded-xl px-4 py-3 flex gap-3">
            <Clock size={15} className="text-secondary flex-shrink-0 mt-0.5" />
            <p className="font-body text-gray-500 text-xs leading-relaxed">
              <strong className="text-dark">Tiempos de acreditación:</strong> los reintegros
              realizados por transferencia bancaria pueden demorar entre{' '}
              <strong className="text-dark">3 y 30 días</strong>, dependiendo de los
              tiempos del banco emisor/receptor y de las condiciones operativas de
              Maxi Viajes.
            </p>
          </div>
        </DocSection>

        {/* 7. Conducta del pasajero */}
        <DocSection icon={UserCheck} title="7. Conducta del pasajero" index={6}>
          <DocP>
            Para garantizar un viaje cómodo y seguro para todos, se solicita a los
            pasajeros:
          </DocP>
          <ul className="space-y-1">
            <DocItem>
              Mantener una <strong className="text-dark font-medium">conducta adecuada</strong>{' '}
              durante todo el trayecto.
            </DocItem>
            <DocItem>
              <strong className="text-dark font-medium">Respetar al conductor</strong> y las
              indicaciones brindadas para la seguridad del viaje.
            </DocItem>
          </ul>
          <ul className="space-y-1 mt-1">
            <DocItemX>
              <strong className="text-dark font-medium">No dañar el vehículo</strong>{' '}
              ni su equipamiento interior. Cualquier daño ocasionado por mal uso será
              responsabilidad del pasajero y podrá facturarse de forma adicional.
            </DocItemX>
          </ul>
          <DocP>
            Maxi Viajes se reserva el derecho de finalizar un servicio sin reembolso
            si la conducta del pasajero pone en riesgo la seguridad del conductor,
            del vehículo o de otros ocupantes.
          </DocP>
        </DocSection>

        {/* 8. Protección de datos */}
        <DocSection icon={Lock} title="8. Protección de datos personales" index={7}>
          <DocP>
            La información proporcionada por el cliente al momento de reservar
            (nombre, teléfono, dirección, datos de vuelo, etc.) será utilizada
            <strong className="text-dark font-medium"> únicamente</strong> para:
          </DocP>
          <ul className="space-y-1">
            <DocItem>Coordinar el servicio de traslado.</DocItem>
            <DocItem>Confirmar reservas.</DocItem>
            <DocItem>Comunicaciones relacionadas directamente con el traslado.</DocItem>
          </ul>
          <div className="bg-light border border-light-dark/20 rounded-xl px-4 py-3 flex gap-3 mt-3">
            <Shield size={15} className="text-secondary flex-shrink-0 mt-0.5" />
            <p className="font-body text-gray-500 text-xs leading-relaxed">
              <strong className="text-dark">Maxi Viajes no comparte datos personales con
              terceros</strong> bajo ninguna circunstancia, salvo requerimiento legal expreso.
            </p>
          </div>
        </DocSection>

        {/* 9. Responsabilidades */}
        <DocSection icon={Shield} title="9. Responsabilidades" index={8}>
          <DocP>
            Maxi Viajes se compromete a brindar el servicio en las condiciones acordadas:
            vehículo en óptimas condiciones, conductor puntual y comunicación activa ante
            cualquier imprevisto.
          </DocP>
          <DocP>
            Maxi Viajes no se responsabiliza por demoras causadas por cortes de tránsito,
            accidentes de terceros, condiciones climáticas extremas u otros eventos de
            fuerza mayor. En estos casos se comunicará al pasajero de inmediato y se
            buscará una solución conjunta.
          </DocP>
          <DocP>
            El pasajero es responsable de los objetos personales que traslade. Se
            recomienda verificar que no queden pertenencias en el vehículo al finalizar
            cada servicio.
          </DocP>
        </DocSection>

        {/* CTA de contacto */}
        <motion.div
          custom={9}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-dark rounded-2xl p-7 text-center mt-4"
        >
          <p className="font-heading text-white font-bold text-base mb-2">
            ¿Tenés alguna consulta sobre estas políticas?
          </p>
          <p className="font-body text-white/60 text-sm mb-5">
            Maxi te responde personalmente por WhatsApp.
          </p>
          <button
            onClick={() => openWhatsApp('Hola Maxi, tengo una consulta sobre las políticas de cancelación')}
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark
                       text-white font-heading font-bold text-sm px-6 py-3 rounded-xl
                       transition-all duration-200 hover:scale-105 shadow-orange"
          >
            <MessageCircle size={16} />
            Consultar por WhatsApp
          </button>
        </motion.div>

        {/* Footer del documento */}
        <div className="mt-10 pt-6 border-t border-light-dark/20 text-center">
          <p className="font-body text-gray-900 text-xs">
            {SITE.name} · {CONTACT.location} · {CONTACT.email}
          </p>
          <p className="font-body text-gray-800 text-xs mt-1">
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}