import { useState } from 'react';
import { SERVICES, buildWhatsAppLink } from '../config/site.config';
import './Services.css';

export default function Services() {
  const [activeTab, setActiveTab] = useState(SERVICES[1].id); // Default to Pulido y Corrección

  // Separate Headlight restoration (featured spotlight) from general services
  const headlightService = SERVICES.find((s) => s.id === 'faros');
  const regularServices = SERVICES.filter((s) => s.id !== 'faros');
  const currentService = regularServices.find((s) => s.id === activeTab) || regularServices[0];

  return (
    <section id="servicios" className="section services" aria-labelledby="services-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--split reveal">
          <div>
            <span className="kicker">Catálogo Técnico</span>
            <h2 className="display-xl" id="services-heading">
              Tratamientos<br />
              <span className="text-accent">&amp; Servicios</span>
            </h2>
          </div>
          <p className="lead-text">
            Cada vehículo recibe una evaluación técnica personalizada. No aplicamos recetas 
            estándar: adaptamos los compuestos, las etapas de pulido y la protección al estado 
            real de cada superficie.
          </p>
        </div>

        {/* ── SERVICIO ESTRELLA: PULIDO DE FAROS (Headlight Spotlight) ── */}
        <div id="faros" className="headlight-spotlight reveal">
          <div className="headlight-spotlight__grid">
            {/* Visual Column */}
            <div className="headlight-spotlight__media">
              <img
                src={headlightService.image}
                alt="Faro pulido y restaurado con óptica cristalina"
                className="headlight-spotlight__img"
                loading="lazy"
              />
              <div className="headlight-spotlight__badge-wrap">
                <span className="tag-badge tag-badge--accent">✦ {headlightService.badge}</span>
                <span className="headlight-spotlight__badge-sub">Gijón · Asturias</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="headlight-spotlight__body">
              <span className="headlight-spotlight__kicker">Seguridad &amp; Estética</span>
              <h3 className="headlight-spotlight__title">{headlightService.title}</h3>
              <p className="headlight-spotlight__subtitle">{headlightService.subtitle}</p>
              <p className="headlight-spotlight__desc">{headlightService.description}</p>

              {/* Technical Features Checklist */}
              <ul className="headlight-spotlight__features">
                {headlightService.details.map((item, idx) => (
                  <li key={idx} className="headlight-spotlight__feature-item">
                    <span className="headlight-spotlight__check" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Honest Transparency Notice */}
              <div className="headlight-spotlight__disclaimer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <p>
                  <strong>Nota técnica de transparencia:</strong> La restauración exterior recupera la transparencia de policarbonato quemado por el sol. No corrige fisuras internas ni degradación dentro de la parábola reflectora.
                </p>
              </div>

              {/* CTA */}
              <div className="headlight-spotlight__cta-row">
                <a
                  href={buildWhatsAppLink(`Hola DFR Xtra Detail, me gustaría consultar presupuesto para el pulido de faros de mi vehículo.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  <span>Pedir Presupuesto Faros</span>
                </a>
                <a href="#transformaciones" className="btn btn-secondary">
                  <span>Ver Comparativa</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── BLOQUE EDITORIAL ASIMÉTRICO DE SERVICIOS ADICIONALES ── */}
        <div className="services-atelier reveal">
          <div className="services-atelier__nav-tabs">
            {regularServices.map((service, index) => (
              <button
                key={service.id}
                className={`services-atelier__tab-btn ${activeTab === service.id ? 'services-atelier__tab-btn--active' : ''}`}
                onClick={() => setActiveTab(service.id)}
                type="button"
              >
                <span className="services-atelier__tab-num">0{index + 1}</span>
                <span className="services-atelier__tab-name">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Showcase */}
          <div className="services-atelier__display">
            <div className="services-atelier__visual">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="services-atelier__img"
                key={currentService.id}
              />
              <div className="services-atelier__visual-overlay">
                <span className="tag-badge tag-badge--neutral">{currentService.badge}</span>
              </div>
            </div>

            <div className="services-atelier__info">
              <span className="kicker">{currentService.subtitle}</span>
              <h3 className="services-atelier__title">{currentService.title}</h3>
              <p className="services-atelier__desc">{currentService.description}</p>

              <div className="services-atelier__details-box">
                <span className="services-atelier__details-head">Fases y Alcance Técnico:</span>
                <ul className="services-atelier__checklist">
                  {currentService.details.map((detail, idx) => (
                    <li key={idx}>
                      <span className="text-accent">✦</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="services-atelier__action-bar">
                <a
                  href={buildWhatsAppLink(`Hola DFR Xtra Detail, me interesa consultar el servicio de "${currentService.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
                <span className="services-atelier__note">Sin compromiso · Presupuesto personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
