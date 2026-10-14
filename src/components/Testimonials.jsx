import { REVIEWS, buildWhatsAppLink } from '../config/site.config';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section id="opiniones" className="section testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--split reveal">
          <div>
            <span className="kicker">Confianza &amp; Garantía</span>
            <h2 className="display-xl" id="testimonials-heading">
              Opiniones<br />
              <span className="text-accent">&amp; Experiencias</span>
            </h2>
          </div>
          <div className="testimonials__header-right">
            <p className="lead-text">
              Espacio preparado para las reseñas de clientes tras cada entrega en Asturias. 
              El compromiso de DFR Xtra Detail se mide en la satisfacción y el resultado visible.
            </p>
            <div className="testimonials__rating-badge">
              <div className="testimonials__stars" aria-label="5 estrellas de 5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="testimonials__star">★</span>
                ))}
              </div>
              <span className="testimonials__rating-text">Compromiso 5 Estrellas · Gijón, Asturias</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="testimonials__grid reveal reveal-delay-1">
          {REVIEWS.map((rev) => (
            <article key={rev.id} className="review-card">
              <div className="review-card__header">
                <div className="review-card__stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="review-card__star">★</span>
                  ))}
                </div>
                <span className="tag-badge tag-badge--accent">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Verificado
                </span>
              </div>

              <blockquote className="review-card__comment">
                «{rev.comment}»
              </blockquote>

              <div className="review-card__footer">
                <div className="review-card__avatar" aria-hidden="true">
                  {rev.clientName.charAt(0)}
                </div>
                <div>
                  <div className="review-card__author">{rev.clientName}</div>
                  <div className="review-card__meta">
                    <span>{rev.vehicle}</span>
                    <span className="review-card__sep">·</span>
                    <span className="review-card__service">{rev.service}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Future Real Reviews Notice & Feedback CTA */}
        <div className="testimonials__banner reveal reveal-delay-2">
          <div className="testimonials__banner-content">
            <span className="testimonials__banner-tag">✦ Reseñas Verificadas de Clientes</span>
            <p className="testimonials__banner-text">
              ¿Has realizado un pulido de faros o detallado con nosotros? Envíanos tu testimonio para añadirlo a la web oficial.
            </p>
          </div>
          <a
            href={buildWhatsAppLink('Hola DFR Xtra Detail, me gustaría dejar una valoración sobre el trabajo en mi coche.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary testimonials__banner-btn"
          >
            <span>Dejar mi Valoración</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
