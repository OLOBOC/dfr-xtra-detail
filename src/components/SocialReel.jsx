import { INSTAGRAM_URL, INSTAGRAM_HANDLE, INSTAGRAM_HIGHLIGHTS } from '../config/site.config';
import './SocialReel.css';

export default function SocialReel() {
  return (
    <section id="redes" className="section social-reel" aria-labelledby="social-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--split reveal">
          <div>
            <span className="kicker">Seguimiento en Vivo</span>
            <h2 className="display-xl" id="social-heading">
              DFR Xtra<br />
              <span className="text-accent">En Instagram</span>
            </h2>
          </div>
          <div className="social-reel__header-action">
            <p className="lead-text">
              Publicamos de forma continuada el progreso técnico, los baños de espuma activa,
              las pruebas de luz y las transformaciones de faros y pintura en Asturias.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary social-reel__follow-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              <span>Seguir {INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>

        {/* Reels Vertical Grid */}
        <div className="social-reel__grid reveal reveal-delay-1">
          {INSTAGRAM_HIGHLIGHTS.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reel-card"
              aria-label={`Ver publicación en Instagram: ${item.title}`}
            >
              <div className="reel-card__media">
                <img
                  src={item.image}
                  alt={item.title}
                  className="reel-card__img"
                  loading="lazy"
                />
                <div className="reel-card__overlay">
                  <div className="reel-card__play-btn" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="reel-card__badge-bar">
                  <span className="tag-badge tag-badge--neutral">{item.tag}</span>
                  <span className="reel-card__instagram-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="reel-card__body">
                <span className="reel-card__cat">{item.category}</span>
                <h4 className="reel-card__title">{item.title}</h4>
                <div className="reel-card__link-text">
                  <span>Abrir en Instagram</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17l10-10M17 17V7H7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
