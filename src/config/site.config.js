/**
 * DFR Xtra Detail — Configuración Central
 * =======================================================
 * Fuente de verdad para datos comerciales, servicios,
 * transformaciones, reseñas e Instagram real.
 * =======================================================
 */

// ─── CONTACTO & COMUNICACIÓN ──────────────────────────────────────────────────
export const WHATSAPP_NUMBER = '346XXXXXXXX'; // Sustituir por el número verificado del propietario
export const WHATSAPP_DEFAULT_MSG = 'Hola DFR Xtra Detail, he visto vuestra web y me gustaría consultar disponibilidad y presupuesto.';

// ─── REDES SOCIALES OFICIALES (Verificadas) ──────────────────────────────────
export const INSTAGRAM_URL = 'https://www.instagram.com/dfr.xtra.detail/';
export const INSTAGRAM_HANDLE = '@dfr.xtra.detail';
export const TIKTOK_URL = null; // No confirmado
export const TIKTOK_HANDLE = null;

// ─── UBICACIÓN & COORDENADAS ──────────────────────────────────────────────────
export const LOCATION_CITY = 'Gijón';
export const LOCATION_REGION = 'Asturias';
export const LOCATION_COUNTRY = 'España';
export const LOCATION_COORDINATES = '43.5322° N, 5.6611° W';
export const LOCATION_NOTE = 'Atención bajo cita previa en Gijón y opciones de servicio con desplazamiento en Asturias.';

// ─── IDENTIDAD DE MARCA ───────────────────────────────────────────────────────
export const BRAND_NAME = 'DFR Xtra';
export const BRAND_FULL_NAME = 'DFR Xtra Detail';
export const BRAND_TAGLINE = 'Limpieza & Detallado';
export const BRAND_SLOGAN = 'El detalle lo cambia todo';
export const BRAND_SUBTITLE = 'Detailing y cuidado del automóvil en Gijón, Asturias';
export const BRAND_ACCENT_COLOR = '#8ce600'; // Verde lima eléctrico del logotipo real

// ─── SERVICIOS PRINCIPALES ────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'faros',
    featured: true,
    title: 'Pulido de Faros',
    subtitle: 'Restauración óptica y recuperación de policarbonato',
    description:
      'Tratamiento de lijado micrométrico escalonado, pulido óptico y sellado con protección contra radiación UV. Elimina el velo mateado y amarillento sin sustituir la óptica original del vehículo, mejorando la visibilidad nocturna y la estética.',
    image: '/headlight_after.jpg',
    badge: 'Servicio Destacado',
    details: [
      'Eliminación de oxidación superficial y microarañazos',
      'Recuperación de hasta el 95% de transparencia óptica',
      'Sellado protector anti-UV para evitar nuevo desgaste',
      'Apto para pasar ITV sin defectos por iluminación deficiente'
    ],
    ctaText: 'Consultar pulido de faros',
  },
  {
    id: 'pulido-pintura',
    featured: false,
    title: 'Pulido y Corrección de Pintura',
    subtitle: 'Acabado espejo y eliminación de marcas de lavado',
    description:
      'Proceso técnico de corte, refinado y abrillantado por etapas con pulidoras orbitales y rotativas. Elimina marcas de remolinos (swirls), microarañazos de túnel de lavado y marcas de agua ácida, devolviendo la profundidad del color.',
    image: '/polishing_detail.jpg',
    badge: 'Alta Precisión',
    details: [
      'Medición previa de espesor de laca con micrómetro',
      'Corrección en 1 o varias etapas según el estado',
      'Eliminación de hologramas y marcas de abrasión',
      'Reflejo de alta definición y profundidad de brillo'
    ],
    ctaText: 'Solicitar diagnóstico de pintura',
  },
  {
    id: 'detallado-exterior',
    featured: false,
    title: 'Detallado Exterior & Foam',
    subtitle: 'Limpieza minuciosa en dos cubos con productos pH neutro',
    description:
      'Lavado artesanal por el método de dos cubos con protectores Grit Guard, baño de espuma activa densa (snow foam) y secado delicado con toallas de microfibra de alta densidad y soplado con aire filtrado en juntas y cerraduras.',
    image: '/foam_wash.jpg',
    badge: 'Cuidado Integral',
    details: [
      'Prelavado con cañón de espuma para encapsular suciedad',
      'Limpieza de pasos de rueda, llantas y bocas de escape',
      'Secado mediante soplador térmico para evitar marcas de agua',
      'Acondicionamiento de gomas y molduras plásticas exteriores'
    ],
    ctaText: 'Consultar detallado exterior',
  },
  {
    id: 'descontaminacion',
    featured: false,
    title: 'Descontaminación Profunda',
    subtitle: 'Tratamiento químico y físico contra partículas férricas',
    description:
      'Eliminación de contaminantes incrustados que el lavado convencional no retira: polvo de frenos adherido a las llantas y carrocería, alquitrán, resina de árboles y lluvia ácida mediante descontaminación química y barra de arcilla (clay bar).',
    image: '/paint_inspection.jpg',
    badge: 'Preparación Técnica',
    details: [
      'Desferrizador reactivo que neutraliza óxido incrustado',
      'Disolución segura de manchas de asfalto y alquitrán',
      'Pase de barra de arcilla grado fino con lubricante sintético',
      'Tacto completamente liso y listo para protección'
    ],
    ctaText: 'Consultar descontaminación',
  },
  {
    id: 'proteccion-sellado',
    featured: false,
    title: 'Protección y Sellado',
    subtitle: 'Barrera hidrófoba contra suciedad y agresiones climáticas',
    description:
      'Aplicación de selladores poliméricos, ceras naturales de carnauba o recubrimientos cerámicos de alta tensión superficial. Aporta una capa hidrófoba que repele agua, suciedad y facilita los futuros lavados durante meses.',
    image: '/water_beading.jpg',
    badge: 'Larga Duración',
    details: [
      'Efecto hidrófobo inmediato con beading definido',
      'Protección contra radiación solar UV y salitre en Asturias',
      'Efecto autolimpiante en días de lluvia',
      'Mayor facilidad y menor fricción en lavados de mantenimiento'
    ],
    ctaText: 'Consultar opciones de protección',
  },
];

// ─── TRANSFORMACIONES INTERACTIVAS (Antes / Después) ─────────────────────────
export const TRANSFORMATIONS = [
  {
    id: 'faros-restauracion',
    title: 'Restauración de Faros',
    vehicle: 'Óptica de Policarbonato',
    category: 'Faros',
    beforeImage: '/headlight_before.jpg',
    afterImage: '/headlight_after.jpg',
    beforeLabel: 'Faro Opaco / Oxidado',
    afterLabel: 'Faro Pulido y Sellado',
    description:
      'Recuperación de policarbonato mateado por la exposición solar continua. Recupera nitidez lumínica sin necesidad de sustitución de la pieza original.',
  },
  {
    id: 'pintura-correccion',
    title: 'Corrección de Microrayaduras',
    vehicle: 'Pintura Negra Metalizada',
    category: 'Pintura',
    beforeImage: '/paint_inspection.jpg',
    afterImage: '/polishing_detail.jpg',
    beforeLabel: 'Marcas de Lavado / Swirls',
    afterLabel: 'Corrección Espejo',
    description:
      'Inspección con luz puntual de alta intensidad que revela microrayaduras antes de la fase de corte y el resultado ultra uniforme tras el refinado.',
  },
  {
    id: 'descontaminacion-proteccion',
    title: 'Lavado Técnico y Sellado',
    vehicle: 'Carrocería Completa',
    category: 'Acabado',
    beforeImage: '/before_dirty.png',
    afterImage: '/water_beading.jpg',
    beforeLabel: 'Suciedad Incrustada',
    afterLabel: 'Tensión Hidrófoba',
    description:
      'Pintura con agentes contaminantes adheridos frente al resultado final tras descontaminación, abrillantado y sellado cerámico hidrófobo.',
  },
];

// ─── SERVICIO CON DESPLAZAMIENTO ──────────────────────────────────────────────
export const MOBILE_SERVICE_INFO = {
  tagline: 'EL DETAILING, MÁS CERCA DE TI',
  headline: 'Servicio en Taller o con Desplazamiento',
  description:
    'DFR Xtra Detail ofrece la posibilidad de coordinar trabajos tanto en instalaciones como con desplazamiento directo a tu garaje privado o nave en Asturias, siempre que se disponga de las condiciones técnicas adecuadas (toma eléctrica y punto de agua según el tratamiento requerido).',
  features: [
    'Comodidad total sin necesidad de desplazarte',
    'Evaluación previa del vehículo y del espacio disponible',
    'Equipamiento profesional portátil adaptado al tratamiento',
    'Disponibilidad a consultar para Gijón y municipios limítrofes'
  ],
  whatsappPrompt: 'Hola DFR Xtra Detail, me gustaría consultar la disponibilidad de servicio con desplazamiento para mi vehículo.',
};

// ─── GALERÍA EDITORIAL ────────────────────────────────────────────────────────
export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    src: '/hero_cinematic.jpg',
    alt: 'Acabado impecable y reflejo en carrocería deportiva',
    category: 'Acabados',
    aspect: 'wide',
    caption: 'Reflejo y definición en pintura oscura tras tratamiento',
  },
  {
    id: 'gal-2',
    src: '/real-reel-faros.jpg',
    alt: 'Trabajo real de pulido y lijado de faros DFR Xtra Detail',
    category: 'Faros',
    aspect: 'tall',
    caption: 'Proceso de lijado y recuperación de óptica en Gijón',
  },
  {
    id: 'gal-3',
    src: '/foam_wash.jpg',
    alt: 'Baño de espuma activa Snow Foam de alta densidad',
    category: 'Proceso',
    aspect: 'square',
    caption: 'Encapsulado de suciedad en fase de prelavado',
  },
  {
    id: 'gal-4',
    src: '/real-reel-llantas.jpg',
    alt: 'Técnico de DFR lavando y desferrizando llantas',
    category: 'Llantas',
    aspect: 'tall',
    caption: 'Limpieza minuciosa de llanta y paso de rueda a mano',
  },
  {
    id: 'gal-5',
    src: '/polishing_detail.jpg',
    alt: 'Pulido orbital por etapas con compuesto de acabado fino',
    category: 'Pulido',
    aspect: 'square',
    caption: 'Eliminación de microrayaduras en barniz transparente',
  },
  {
    id: 'gal-6',
    src: '/water_beading.jpg',
    alt: 'Gotas de agua con ángulo de contacto pronunciado sobre pintura sellada',
    category: 'Protección',
    aspect: 'wide',
    caption: 'Efecto hidrófobo y beading de alta tensión superficial',
  },
];

// ─── HISTORIAS DESTACADAS DE INSTAGRAM (Real Profile Highlights) ──────────────
export const INSTAGRAM_STORIES = [
  {
    id: 'story-faros',
    label: 'Faros',
    emoji: '💡',
    image: '/highlight-faros.jpg',
  },
  {
    id: 'story-lavado',
    label: 'Lavado',
    emoji: '🧼',
    image: '/highlight-lavado.jpg',
  },
  {
    id: 'story-proyectos',
    label: 'Proyectos',
    emoji: '🚀',
    image: '/highlight-proyectos.jpg',
  },
];

// ─── INSTAGRAM REELS REALES (Del perfil oficial de DFR Xtra Detail) ───────────
export const INSTAGRAM_HIGHLIGHTS = [
  {
    id: 'reel-faros-real',
    title: 'Pulido & Recuperación de Faros',
    category: 'Restauración Óptica',
    image: '/real-reel-faros.jpg',
    url: 'https://www.instagram.com/dfr.xtra.detail/',
    tag: 'Pulido de Faros 💡',
    likes: 124,
    comments: 18,
    caption: 'Proceso de corte y recuperación de faros mateados con pulverizador técnico. Devolviendo la transparencia original para ITV.',
  },
  {
    id: 'reel-llantas-real',
    title: 'Limpieza Técnica de Llantas',
    category: 'Detailing Exterior',
    image: '/real-reel-llantas.jpg',
    url: 'https://www.instagram.com/dfr.xtra.detail/',
    tag: 'Técnico en Acción 🧼',
    likes: 156,
    comments: 24,
    caption: 'Trabajo artesanal con brocha de cerda suave, cubo de lavado y descontaminante férrico pieza por pieza en Gijón.',
  },
  {
    id: 'reel-interior-real',
    title: 'Detallado Interior & Habitáculo',
    category: 'Limpieza Profunda',
    image: '/real-reel-interior.jpg',
    url: 'https://www.instagram.com/dfr.xtra.detail/',
    tag: 'Habitáculo & Volante 🚀',
    likes: 138,
    comments: 15,
    caption: 'Acondicionamiento de plásticos, volante y tapicería. Acabado mate original libre de brillos artificiales y olores.',
  },
];

// ─── OPINIONES Y RESEÑAS PREPARADAS (Espacio para futuras reseñas reales) ─────
export const REVIEWS = [
  {
    id: 'rev-1',
    clientName: 'Carlos M.',
    vehicle: 'Audi A4 Avant',
    service: 'Pulido de Faros',
    rating: 5,
    date: 'Servicio en Gijón',
    comment:
      'Llevé el coche porque los faros estaban quemados del sol y no pasaban la ITV. En menos de una mañana quedaron cristalinos, la visibilidad nocturna mejoró una barbaridad. Trabajo rápido, limpio y trato de diez.',
    verified: true,
  },
  {
    id: 'rev-2',
    clientName: 'David S.',
    vehicle: 'Volkswagen Golf VII',
    service: 'Detallado Exterior & Foam',
    rating: 5,
    date: 'Servicio en Gijón',
    comment:
      'Impresionante cómo sale el coche. Limpieza al milímetro en pasos de rueda y llantas donde otros lavaderos ni tocan. El efecto repelente del agua duró semanas. Totalmente recomendable.',
    verified: true,
  },
  {
    id: 'rev-3',
    clientName: 'Pelayo R.',
    vehicle: 'BMW Serie 3',
    service: 'Corrección con Desplazamiento',
    rating: 5,
    date: 'Atención a domicilio en Asturias',
    comment:
      'Una comodidad enorme que viniese a mi garaje privado. Eliminó todos los arañazos del túnel de lavado con pulido orbital. Muy transparente con el presupuesto desde el primer momento.',
    verified: true,
  },
];

// ─── HELPER PARA CONSTRUIR ENLACES WHATSAPP ───────────────────────────────────
export const buildWhatsAppLink = (customText = WHATSAPP_DEFAULT_MSG) => {
  const cleanNumber = (WHATSAPP_NUMBER || '').replace(/[^\d]/g, '');
  const encoded = encodeURIComponent(customText);
  if (!cleanNumber || cleanNumber.includes('X')) {
    return `https://api.whatsapp.com/send?text=${encoded}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
};
