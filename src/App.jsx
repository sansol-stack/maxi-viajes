import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Flota from './pages/Flota'
import Contacto from './pages/Contacto'
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
    return () => {
      delete window.showQuoteModal
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/flota" element={<Flota />} />
        <Route path="/contacto" element={<Contacto />} />
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
