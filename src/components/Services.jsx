import { useState } from 'react';
import { SERVICES, buildWhatsAppLink } from '../config/site.config';
import './Services.css';

export default function Services() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);
  const currentService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <section id="servicios" className="section services" aria-labelledby="services-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--split reveal">
          <div>
            <span className="kicker">Catálogo Profesional</span>
            <h2 className="display-xl" id="services-heading">
              Servicios de<br />
              <span className="text-accent">Detailing</span>
            </h2>
          </div>
          <p className="lead-text">
            Tratamientos a medida adaptados a las necesidades reales de cada vehículo. 
            Sin fórmulas genéricas: evaluación previa, productos pH neutro y técnicas de precisión.
          </p>
        </div>

        {/* Unified Service Selector Tabs */}
        <div className="services__tabs reveal">
          {SERVICES.map((service, index) => (
            <button
              key={service.id}
              className={`services__tab-btn ${activeTab === service.id ? 'services__tab-btn--active' : ''}`}
              onClick={() => setActiveTab(service.id)}
              type="button"
            >
              <span className="services__tab-num">0{index + 1}</span>
              <span className="services__tab-title">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Detailed Atelier Showcase */}
        <div className="services__display reveal reveal-delay-1">
          <div className="services__visual">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="services__img"
              key={currentService.id}
            />
            <div className="services__badge-overlay">
              <span className="tag-badge tag-badge--accent">{currentService.badge}</span>
            </div>
          </div>

          <div className="services__info">
            <span className="kicker">{currentService.subtitle}</span>
            <h3 className="services__title">{currentService.title}</h3>
            <p className="services__desc">{currentService.description}</p>

            <div className="services__details-box">
              <span className="services__details-head">Fases del Tratamiento:</span>
              <ul className="services__checklist">
                {currentService.details.map((detail, idx) => (
                  <li key={idx}>
                    <span className="text-accent">✦</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="services__action-bar">
              <a
                href={buildWhatsAppLink(`Hola DFR Xtra Detail, me gustaría consultar presupuesto para el servicio de "${currentService.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                <span>Pedir Presupuesto por WhatsApp</span>
              </a>
              <span className="services__note">Tarifa personalizada según tamaño y estado del vehículo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
