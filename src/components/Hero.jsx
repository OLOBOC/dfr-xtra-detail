import { buildWhatsAppLink, LOCATION_CITY, LOCATION_REGION, LOCATION_COORDINATES } from '../config/site.config';
import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-label="Introducción a DFR Xtra Detail">
      {/* Background Cinematic Visual */}
      <div className="hero__media-wrap" aria-hidden="true">
        <img
          src="/hero_cinematic.jpg"
          alt="Vehículo de alta gama en atelier de detailing"
          className="hero__img"
        />
        <div className="hero__overlay" />
        <div className="hero__noise" />
      </div>

      <div className="container hero__content">
        {/* Top Editorial Kicker & Geo Tag */}
        <div className="hero__kicker-row">
          <div className="hero__kicker">
            <span className="hero__kicker-dot" />
            <span>Atelier de Detailing &amp; Estética Automotriz</span>
          </div>
          <div className="hero__geo-tag">
            <span>{LOCATION_CITY}, {LOCATION_REGION}</span>
            <span className="hero__geo-coord">{LOCATION_COORDINATES}</span>
          </div>
        </div>

        {/* Main Asymmetric Grid */}
        <div className="hero__grid">
          {/* Left Column: Massive Editorial Typography */}
          <div className="hero__main-col">
            <h1 className="hero__title">
              EL DETALLE<br />
              <span className="hero__title-accent">LO CAMBIA TODO.</span>
            </h1>

            <p className="hero__subtitle">
              Cuidado minucioso, corrección de pintura, restauración óptica de faros 
              y protección de alto rendimiento para quienes entienden su vehículo 
              como algo más que una máquina de transporte.
            </p>

            <div className="hero__actions">
              <a
                href={buildWhatsAppLink('Hola DFR Xtra Detail, me gustaría solicitar presupuesto para mi vehículo.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hero__btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                <span>Solicitar Presupuesto</span>
              </a>

              <a href="#transformaciones" className="btn btn-secondary hero__btn-secondary">
                <span>Ver Transformaciones</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l10-10M17 17V7H7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Floating Technical Specs Card */}
          <div className="hero__spec-card">
            <div className="hero__spec-header">
              <span className="hero__spec-tag">ESTÁNDARES DFR</span>
              <span className="hero__spec-sub">Atelier Asturias</span>
            </div>

            <ul className="hero__spec-list">
              <li className="hero__spec-item">
                <span className="hero__spec-num">01</span>
                <div>
                  <strong>Restauración de Faros</strong>
                  <p>Recuperación óptica y sellado anti-UV garantizado</p>
                </div>
              </li>
              <li className="hero__spec-item">
                <span className="hero__spec-num">02</span>
                <div>
                  <strong>Corrección de Pintura</strong>
                  <p>Corte, refinado y acabado libre de hologramas</p>
                </div>
              </li>
              <li className="hero__spec-item">
                <span className="hero__spec-num">03</span>
                <div>
                  <strong>Descontaminación Férrica</strong>
                  <p>Limpieza técnica profunda en 2 cubos pH neutro</p>
                </div>
              </li>
              <li className="hero__spec-item">
                <span className="hero__spec-num">04</span>
                <div>
                  <strong>Servicio con Desplazamiento</strong>
                  <p>Disponibilidad en garaje privado o nave en Asturias</p>
                </div>
              </li>
            </ul>

            <a href="#faros" className="hero__spec-cta">
              <span>Descubre el proceso de pulido de faros</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Technical Ticker */}
      <div className="hero__ticker" aria-hidden="true">
        <div className="hero__ticker-track">
          <span>PULIDO DE FAROS</span>
          <span className="hero__ticker-sep">/</span>
          <span>CORRECCIÓN DE PINTURA</span>
          <span className="hero__ticker-sep">/</span>
          <span>DESCONTAMINACIÓN PROFUNDA</span>
          <span className="hero__ticker-sep">/</span>
          <span>PROTECCIÓN Y SELLADO</span>
          <span className="hero__ticker-sep">/</span>
          <span>ATENCIÓN CON DESPLAZAMIENTO</span>
          <span className="hero__ticker-sep">/</span>
          <span>GIJÓN · ASTURIAS</span>
          <span className="hero__ticker-sep">/</span>
          <span>PULIDO DE FAROS</span>
          <span className="hero__ticker-sep">/</span>
          <span>CORRECCIÓN DE PINTURA</span>
          <span className="hero__ticker-sep">/</span>
          <span>DESCONTAMINACIÓN PROFUNDA</span>
          <span className="hero__ticker-sep">/</span>
          <span>PROTECCIÓN Y SELLADO</span>
        </div>
      </div>
    </section>
  );
}
