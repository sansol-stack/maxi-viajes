/**
 * App.jsx — Router principal
 * Agrega la ruta /terminos al árbol de rutas existente
 */

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Terminos from './pages/Terminos'
import QuoteModal from './components/QuoteModal'
import './styles/globals.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [initialMsg, setInitialMsg] = useState('')

  useEffect(() => {
    window.showQuoteModal = (msg) => {
      setInitialMsg(msg || '')
      setIsOpen(true)
    }
    return () => { delete window.showQuoteModal }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Inicio />} />
        <Route path="/terminos"  element={<Terminos />} />

        {/* Rutas viejas → sección de la one-page (el servidor ya hace 301; esto cubre la navegación interna) */}
        <Route path="/nosotros"  element={<Navigate to="/#nosotros" replace />} />
        <Route path="/servicios" element={<Navigate to="/#servicios" replace />} />
        <Route path="/flota"     element={<Navigate to="/#flota" replace />} />
        <Route path="/contacto"  element={<Navigate to="/#contacto" replace />} />
      </Routes>
      <QuoteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialMsg={initialMsg}
      />
    </BrowserRouter>
  )
}

export default App