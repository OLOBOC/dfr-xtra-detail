# DFR Xtra Detail — Atelier de Detailing & Cuidado Automotriz
### Propuesta Comercial de Alta Fidelidad | Gijón, Asturias

Web oficial desarrollada a medida para **DFR Xtra Detail** (marca oficial: *DFR Xtra | Limpieza & Detallado*), basada en su identidad visual real, paleta de colores de marca (`#8ce600` verde lima eléctrico sobre negro carbón aterciopelado) y fotografía editorial de automoción.

---

## ⚡ Ejecución Inmediata

El servidor local ya se encuentra activo:

- **URL Local:** [http://localhost:5173/](http://localhost:5173/)
- **Arranque en desarrollo:** `npm run dev`
- **Compilación de producción:** `npm run build`
- **Previsualización de producción:** `npm run preview`

---

## 💎 Identidad de Marca y Dirección Artística

- **Logotipo Oficial Integrado:** Silueta vectorial del perfil aerodinámico, tipografía *DFR Xtra* en verde lima eléctrico y subtítulo *Limpieza & Detallado*, extraído fielmente del emblema oficial del negocio.
- **Tipografía Editorial:** `Space Grotesk` (titulares tecnológicos y contundentes) + `Manrope` (lectura limpia, espaciado cuidado y jerarquía de lujo).
- **Paleta de Materiales:** Negro carbón `#060709`, superficies de titanio `#0f1116` / `#15181f`, acento verde lima `#8ce600` y bordes milimétricos antirreflejo.

---

## 🏗️ Estructura Completa de la Web

1. **Header Minimalista:** Emblema oficial en vector nítido a cualquier resolución, navegación con acceso directo a *Pulido de Faros* y *Desplazamiento*, pill de estado con geolocalización en Gijón y CTA de WhatsApp.
2. **Hero Cinematográfico Asimétrico:** Fotografía panorámica en encuadre de atelier de alta gama, titular editorial (*«EL DETALLE LO CAMBIA TODO.»*), tarjeta técnica flotante con los 4 estándares DFR y marquesina técnica deslizante.
3. **Servicios & Spotlight de Pulido de Faros:**
   - **Módulo Estrella de Pulido de Faros:** Explicación técnica de lijado micrométrico, recuperación de hasta el 95% de transparencia óptica, sellado anti-UV y aviso honesto de transparencia.
   - **Showcase Interactivo por Pestañas:** Detallado Exterior & Foam, Descontaminación Profunda, Pulido y Corrección de Pintura, y Protección y Sellado.
4. **Comparador Interactivo Antes & Después:** Slider arrastrable táctil y con ratón, selector de transformaciones (Faros, Pintura y Protección) con etiquetas dinámicas.
5. **Servicio con Desplazamiento:** Módulo arquitectónico que presenta la opción de atención a domicilio en garaje privado o nave en Asturias previa valoración técnica.
6. **Galería Editorial Asimétrica:** Mosaico de alta resolución con filtrado por categorías (*Faros*, *Pintura*, *Proceso*, *Protección*) y visualizador **Lightbox** a pantalla completa.
7. **Presencia en Redes Sociales:** Tarjetas verticales estilo Instagram Reels con enlaces directos al perfil oficial verificado [@dfr.xtra.detail](https://www.instagram.com/dfr.xtra.detail/).
8. **Sobre DFR & Compromiso de Calidad:** Filosofía artesanal, cita de la biografía verificada de Instagram (*«Detallado de vehículos 🏎️ ASTURIAS 🏠»*), 4 pilares de trabajo y aviso de honestidad sobre reseñas reales sin inventar puntuaciones falsas.
9. **Generador de Presupuesto por WhatsApp:** Formulario interactivo que recopila los datos del cliente, vehículo, servicio y modalidad de desplazamiento, formateando automáticamente el mensaje estructurado de WhatsApp.
10. **Footer de Atelier:** Navegación por tratamientos, ubicación en Gijón, accesos sociales y nota legal comercial.

---

## ⚙️ Archivo de Configuración Central

Todo el contenido, teléfono de WhatsApp y enlaces están centralizados en:
📁 [`src/config/site.config.js`](src/config/site.config.js)

Para actualizar el número de WhatsApp cuando el propietario lo facilite:
```javascript
export const WHATSAPP_NUMBER = '346XXXXXXXX'; // Sustituir por el número verificado
```

---

## 🚀 Despliegue en Vercel (1 Clic)

El proyecto está preparado para desplegarse directamente en [Vercel](https://vercel.com):
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
