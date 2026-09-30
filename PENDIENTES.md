# Pendientes — Maxi Viajes

Última actualización: 2026-09-30

## En curso

- [ ] **Probar el mensaje de WhatsApp en la app de escritorio (Windows).**
      El mensaje pasó a texto plano (sin `*negrita*`, sin `- ` ni emojis) porque
      WhatsApp Desktop desfasaba las marcas y reemplazaba letras por `*`
      (ej: "Lucas Prue*a"). Verificar después del próximo deploy, en escritorio y en celular.

## SEO

- [ ] **Datos estructurados `LocalBusiness` / `TaxiService`** (JSON-LD en `index.html`).
      Falta que el cliente confirme:
      - ¿Atienden 24 h o tienen horario fijo?
      - ¿Mostrar dirección física o solo zona de cobertura (CABA / AMBA / Costa)?
- [ ] **HTML estático por página (prerender)** con `vite-react-ssg` o similar.
      Hoy el servidor devuelve `<div id="root">` vacío: WhatsApp/Facebook muestran
      siempre la vista previa de inicio y Google indexa más lento.
- [ ] **Comprimir las imágenes del hero** (`src/assets/hero-*.webp`, `hiace-exterior.webp`):
      pesan 1–1.6 MB cada una. Objetivo: 150–300 KB.
- [ ] **Google Search Console:** enviar el sitemap nuevo y pedir reindexación
      (el sitio pasó a one-page y las rutas viejas redirigen con 301).
- [ ] **Google Business Profile** (fuera del código): crear o completar la ficha del negocio.

## Más adelante (opción C del plan de navegación)

- [ ] Landing pages por búsqueda concreta, con contenido propio:
      "Traslados a Ezeiza", "Traslados a Aeroparque", "Viajes a Pinamar / Costa Atlántica", etc.

## Limpieza menor

- [ ] Errores de `npm run lint` (ninguno rompe el build):
      - `Fleet.jsx`: "Cannot create components during render" (componentes/íconos
        creados dentro del render; revisar líneas 41–107).
      - Imports/variables sin usar: `motion` y `fadeIn` en `Footer.jsx`,
        `openWhatsApp` en `VehicleCard.jsx`, `index` en `DestinationCard`,
        `ServiceCard` y `VehicleCard`.
      - Directiva `eslint-disable` sobrante en `Hero.jsx:107`.
- [ ] Componentes que no se importan en ningún lado: `Destinations.jsx`, `Coverage.jsx`,
      `common/DestinationCard.jsx`, `common/ServiceCard.jsx`, `common/VehicleCard.jsx`.
      Decidir si se reutilizan (landing pages) o se borran.
- [ ] `vercel.json`: confirmar si se usa (el hosting real es Hostinger). Si no, borrarlo.
      Incluye `api.anthropic.com` en la CSP sin motivo.
- [ ] `src/constants/images.js`: `IMG_HERO` apunta a un archivo que no existe en `public/`
      y no se usa en ningún lado. Borrar.

## Notas de deploy (Hostinger)

- Build: `npm run build` → subir **todo** el contenido de `dist/` a `public_html`.
- `.htaccess`, `robots.txt` y `sitemap.xml` ya salen dentro de `dist/` (viven en `public/`).
  No hace falta subirlos aparte.
- Si se cambia el `.htaccess` en el servidor a mano, copiar el cambio a `public/.htaccess`
  para que el próximo deploy no lo pise.
