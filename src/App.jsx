import { useState, useEffect } from 'react'
import Home from './pages/Home'
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
    <>
      <Home />
      <QuoteModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        initialMsg={initialMsg} 
      />
    </>
  )
}

export default App
