import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { SITE, CONTACT } from '../constants/config'

export default function Contacto() {
  return (
    <>
      <Helmet>
        {/* SEO básico */}
        <title>Contacto - Maxi Viajes | Traslados Premium Buenos Aires</title>
        <meta
          name="description"
          content={`Contacta a Maxi Viajes. Teléfono: ${CONTACT.phoneDisplay} | WhatsApp disponible 24/7`}
        />
        <meta name="keywords" content="contacto, Maxi Viajes, WhatsApp, teléfono, Buenos Aires" />
        <meta name="author" content="Maxi Viajes" />
        <link rel="canonical" href="https://maxiviajes.com.ar/contacto" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contacto - Maxi Viajes" />
        <meta property="og:description" content={`Contacta a Maxi Viajes. ${CONTACT.phoneDisplay}`} />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content={SITE.name} />
      </Helmet>

      {/* Layout */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-32">
          <CTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
