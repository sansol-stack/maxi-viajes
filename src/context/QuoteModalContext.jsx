/**
 * QuoteModalContext - Estado global del modal de cotización
 *
 * Permite que cualquier componente de la app abra el modal
 * sin prop drilling, usando useQuoteModal()
 */

import { createContext, useContext, useState, useCallback } from 'react'
import QuoteModal from '../components/QuoteModal'

const QuoteModalContext = createContext(null)

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <QuoteModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeModal} />
    </QuoteModalContext.Provider>
  )
}

/**
 * Hook para abrir/cerrar el modal desde cualquier componente
 * @returns {{ openModal: () => void, closeModal: () => void }}
 */
export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext)
  if (!ctx) throw new Error('useQuoteModal must be used inside QuoteModalProvider')
  return ctx
}
