import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Fleet from '../components/Fleet'
import PremiumShowcase from '../components/PremiumShowcase'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { SITE, CONTACT } from '../constants/config'

export default function Flota() {
  return (
    <>
      <Helmet>
        {/* SEO básico */}
        <title>Flota - Maxi Viajes | Vehículos Premium Buenos Aires</title>
        <meta
          name="description"
          content="Conoce nuestra flota de vehículos premium: Toyota Corolla, Hyundai H-350 Nanoe y más. Equipos modernos con máxima comodidad."
        />
        <meta name="keywords" content="flota, vehículos, traslados, Toyota Corolla, Hyundai, Buenos Aires" />
        <meta name="author" content="Maxi Viajes" />
        <link rel="canonical" href="https://maxiviajes.com.ar/flota" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Flota - Maxi Viajes | Vehículos Premium" />
        <meta property="og:description" content="Nuestra flota de vehículos premium para traslados ejecutivos y de lujo." />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content={SITE.name} />
      </Helmet>

      {/* Layout */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="pt-32">
          <Fleet />
          <PremiumShowcase />
          <CTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
