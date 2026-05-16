/**
 * Home - Página principal de Maxi Viajes
 * Ensambla todas las secciones en orden
 */

import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Destinations from '../components/Destinations'
import Fleet from '../components/Fleet'
import PremiumShowcase from '../components/PremiumShowcase'

import CTA from '../components/CTA'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { SITE, CONTACT } from '../constants/config'

export default function Home() {
  return (
    <>
      <Helmet>
        {/* SEO básico */}
        <title>Maxi Viajes - Traslados Premium en todo Buenos Aires</title>
        <meta
          name="description"
          content={`${SITE.description} Contacto: ${CONTACT.phoneDisplay}`}
        />
        <meta name="keywords" content="traslados, Buenos Aires, aeropuerto, Capital Federal, Costa Atlántica, remis, taxi, viajes" />
        <meta name="author" content="Maxi Viajes" />
        <link rel="canonical" href="https://maxiviajes.com.ar/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maxi Viajes - Traslados Premium" />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content={SITE.name} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Maxi Viajes - Traslados Premium" />
        <meta name="twitter:description" content={SITE.description} />

        {/* Viewport y charset */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Helmet>

      {/* Layout */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Destinations />
          {/* <Fleet /> */}
          <PremiumShowcase />
          <CTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
