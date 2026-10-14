import { INSTAGRAM_URL, INSTAGRAM_HANDLE, LOCATION_CITY, LOCATION_REGION } from '../config/site.config';
import BrandLogo from './BrandLogo';
import './About.css';

export default function About() {
  const pillars = [
    {
      num: '01',
      title: 'Diagnóstico Previo Sin Compromiso',
      desc: 'Inspeccionamos la pintura con luz técnica y evaluamos el policarbonato de los faros para recomendar solo lo que tu vehículo realmente necesita.',
    },
    {
      num: '02',
      title: 'Química Selectiva pH Neutro',
      desc: 'Utilizamos champús con alto poder de lubricación, toallas de microfibra de 1200 GSM y descontaminantes sin ácidos agresivos.',
    },
    {
      num: '03',
      title: 'Transparencia de Presupuesto',
      desc: 'El presupuesto acordado es el definitivo. Sin suplementos imprevistos ni tarifas opacas. Comunicación directa en cada fase.',
    },
    {
      num: '04',
      title: 'Atención Directa y Personal',
      desc: 'Hablas y coordinas directamente con quien cuida de tu vehículo, garantizando dedicación exclusiva durante toda la intervención.',
    },
  ];

  return (
    <section id="sobre-dfr" className="section about" aria-labelledby="about-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-head reveal">
          <span className="kicker">Filosofía de Trabajo</span>
          <h2 className="display-xl" id="about-heading">
            Cuidado Artesanal.<br />
            <span className="text-accent">Sin Atajos.</span>
          </h2>
        </div>

        {/* Asymmetrical Editorial Story */}
        <div className="about__grid">
          {/* Left: Manifest & Brand Quote */}
          <div className="about__manifest reveal">
            <div className="about__logo-box">
              <BrandLogo size="large" />
            </div>

            <p className="about__lead-quote">
              «El detailing no consiste en limpiar más rápido, sino en entender la superficie 
              y devolverle a cada vehículo la nitidez con la que salió de fábrica.»
            </p>

            <p className="about__body-text">
              En <strong>DFR Xtra Detail</strong>, ubicado en {LOCATION_CITY} ({LOCATION_REGION}), 
              cada intervención se plantea como un trabajo a medida. Entendemos que unos faros pulidos 
              aportan seguridad en carretera en las noches del norte, y que una pintura corregida 
              y protegida resiste el clima húmedo y el salitre costero de Asturias.
            </p>

            {/* Official Bio Attribution */}
            <div className="about__bio-card">
              <span className="about__bio-label">Biografía Oficial Verificada</span>
              <blockquote className="about__bio-quote">
                "Detallado de vehículos 🏎️ ASTURIAS 🏠"
              </blockquote>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="about__bio-link"
              >
                {INSTAGRAM_HANDLE} · Instagram Oficial
              </a>
            </div>
          </div>

          {/* Right: Technical Pillars */}
          <div className="about__pillars reveal reveal-delay-1">
            <h3 className="about__pillars-title">Estándares de Trabajo DFR</h3>
            <div className="about__pillars-list">
              {pillars.map((p) => (
                <div key={p.num} className="about__pillar-card">
                  <span className="about__pillar-num">{p.num}</span>
                  <div>
                    <h4 className="about__pillar-heading">{p.title}</h4>
                    <p className="about__pillar-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reviews Transparency Box */}
            <div className="about__reviews-notice">
              <div className="about__reviews-icon" aria-hidden="true">✦</div>
              <div>
                <strong>Opiniones &amp; Reseñas Reales:</strong>
                <p>
                  En DFR Xtra Detail priorizamos la honestidad: no publicamos valoraciones simuladas. 
                  Puedes consultar el histórico de trabajos y testimonios reales directamente en nuestro 
                  Instagram o dejarnos tu experiencia tras recibir tu vehículo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
