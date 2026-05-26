import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { SITE, CONTACT } from '../constants/config'

export default function Nosotros() {
  return (
    <>
      <Helmet>
        {/* SEO básico */}
        <title>Nosotros - Maxi Viajes | Traslados Premium Buenos Aires</title>
        <meta
          name="description"
          content="Conoce a Maxi Viajes, tu empresa de traslados premium desde Buenos Aires con más de 6 años de experiencia."
        />
        <meta name="keywords" content="quiénes somos, Maxi Viajes, traslados premium, Buenos Aires" />
        <meta name="author" content="Maxi Viajes" />
        <link rel="canonical" href="https://maxiviajes.com.ar/nosotros" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nosotros - Maxi Viajes | Traslados Premium" />
        <meta property="og:description" content="Conoce a Maxi Viajes, tu empresa de traslados premium desde Buenos Aires." />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content={SITE.name} />
      </Helmet>

      {/* Layout */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="pt-32">
          <About />
          <CTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
