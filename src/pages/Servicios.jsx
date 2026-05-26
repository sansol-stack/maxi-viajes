import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Services from '../components/Services'
import Fleet from '../components/Fleet'
import PremiumShowcase from '../components/PremiumShowcase'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { SITE, CONTACT } from '../constants/config'

export default function Servicios() {
  return (
    <>
      <Helmet>
        {/* SEO básico */}
        <title>Servicios - Maxi Viajes | Traslados Premium Buenos Aires</title>
        <meta
          name="description"
          content="Servicios de traslados premium: aeropuertos, viajes ejecutivos, Costa Atlántica. Flota moderna y conductores profesionales."
        />
        <meta name="keywords" content="servicios, traslados, aeropuerto, viajes ejecutivos, Buenos Aires" />
        <meta name="author" content="Maxi Viajes" />
        <link rel="canonical" href="https://maxiviajes.com.ar/servicios" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Servicios - Maxi Viajes | Traslados Premium" />
        <meta property="og:description" content="Servicios de traslados premium: aeropuertos, viajes ejecutivos, Costa Atlántica y más." />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content={SITE.name} />
      </Helmet>

      {/* Layout */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="pt-32">
          <Services />
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
