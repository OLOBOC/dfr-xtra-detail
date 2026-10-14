import { useState, useEffect } from 'react';
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_STORIES,
  INSTAGRAM_HIGHLIGHTS,
} from '../config/site.config';
import BrandLogo from './BrandLogo';
import './Gallery.css';

export default function Gallery() {
  const [activeReel, setActiveReel] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [likesCount, setLikesCount] = useState({});

  useEffect(() => {
    const initialLikes = {};
    INSTAGRAM_HIGHLIGHTS.forEach((r) => {
      initialLikes[r.id] = r.likes;
    });
    setLikesCount(initialLikes);
  }, []);

  const handleLike = (reelId, e) => {
    e.stopPropagation();
    setLikesCount((prev) => ({
      ...prev,
      [reelId]: (prev[reelId] || 120) + 1,
    }));
  };

  return (
    <section id="galeria" className="section gallery" aria-labelledby="gallery-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--split reveal">
          <div>
            <span className="kicker">Galería de Trabajos</span>
            <h2 className="display-xl" id="gallery-heading">
              Vídeos &amp; Reels<br />
              <span className="text-accent">En Instagram</span>
            </h2>
          </div>
          <div className="gallery__header-right">
            <p className="lead-text">
              Registro real y en directo de las transformaciones y cuidados realizados en Asturias.
              Haz clic en cualquier reel para reproducir el proceso y ver los resultados paso a paso.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary gallery__ig-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              <span>Seguir {INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>

        {/* ── Perfil de Instagram & Stories Destacadas Reales ── */}
        <div className="gallery__profile-bar reveal">
          <div className="gallery__profile-info">
            <div className="gallery__profile-avatar-ring">
              <div className="gallery__profile-avatar">
                <BrandLogo size="small" />
              </div>
            </div>
            <div>
              <div className="gallery__profile-name">
                <span>{INSTAGRAM_HANDLE}</span>
                <span className="tag-badge tag-badge--accent">Oficial</span>
              </div>
              <p className="gallery__profile-bio">
                Detallado de vehículos 🏎️ ASTURIAS 🏠 · Gijón
              </p>
            </div>
          </div>

          {/* Stories Destacadas Reales */}
          <div className="gallery__stories">
            {INSTAGRAM_STORIES.map((story) => (
              <a
                key={story.id}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery__story-item"
              >
                <div className="gallery__story-ring">
                  <img src={story.image} alt={story.label} className="gallery__story-img" />
                </div>
                <span className="gallery__story-label">{story.emoji} {story.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Grid de Reels de Instagram Reales ── */}
        <div className="gallery__reels-grid reveal reveal-delay-1">
          {INSTAGRAM_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="gallery__reel-card"
              onClick={() => {
                setActiveReel(item);
                setIsPlaying(true);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveReel(item)}
              aria-label={`Reproducir Reel: ${item.title}`}
            >
              <div className="gallery__reel-media">
                <img src={item.image} alt={item.title} className="gallery__reel-img" loading="lazy" />

                <div className="gallery__reel-overlay">
                  <div className="gallery__reel-play" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="gallery__reel-play-tag">Reproducir Vídeo</span>
                </div>

                <div className="gallery__reel-badge-bar">
                  <span className="tag-badge tag-badge--neutral">{item.tag}</span>
                  <div className="gallery__reel-likes">
                    <span>❤️ {likesCount[item.id] || item.likes}</span>
                  </div>
                </div>
              </div>

              <div className="gallery__reel-body">
                <span className="gallery__reel-cat">{item.category}</span>
                <h4 className="gallery__reel-title">{item.title}</h4>
                <p className="gallery__reel-caption">{item.caption}</p>
                <div className="gallery__reel-cta">
                  <span>Ver Vídeo en Detalle</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17l10-10M17 17V7H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Modal Interactivo de Vídeo Reel ── */}
      {activeReel && (
        <div
          className="reel-modal"
          onClick={() => setActiveReel(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Vídeo: ${activeReel.title}`}
        >
          <div className="reel-modal__phone" onClick={(e) => e.stopPropagation()}>
            <button
              className="reel-modal__close"
              onClick={() => setActiveReel(null)}
              aria-label="Cerrar reproductor"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Progress Bar */}
            <div className="reel-modal__progress-bar">
              <div
                className={`reel-modal__progress-fill ${isPlaying ? 'reel-modal__progress-fill--animated' : ''}`}
              />
            </div>

            {/* Video Simulation */}
            <div className="reel-modal__video-wrap" onClick={() => setIsPlaying(!isPlaying)}>
              <img
                src={activeReel.image}
                alt={activeReel.title}
                className={`reel-modal__video-sim ${isPlaying ? 'reel-modal__video-sim--playing' : ''}`}
              />

              {!isPlaying && (
                <div className="reel-modal__paused-overlay">
                  <div className="reel-modal__paused-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Instagram Top Bar */}
              <div className="reel-modal__top-info">
                <div className="reel-modal__author-info">
                  <span className="reel-modal__author-name">{INSTAGRAM_HANDLE}</span>
                  <span className="reel-modal__dot">·</span>
                  <a href={activeReel.url} target="_blank" rel="noopener noreferrer" className="reel-modal__follow-tag">
                    Seguir
                  </a>
                </div>
                <div className="reel-modal__audio-badge">
                  <span>♫ Audio Original · DFR Xtra</span>
                </div>
              </div>

              {/* Actions Rail */}
              <div className="reel-modal__actions-rail">
                <button className="reel-modal__action-btn" onClick={(e) => handleLike(activeReel.id, e)}>
                  <span className="reel-modal__action-icon">❤️</span>
                  <span className="reel-modal__action-count">{likesCount[activeReel.id] || activeReel.likes}</span>
                </button>
                <div className="reel-modal__action-btn">
                  <span className="reel-modal__action-icon">💬</span>
                  <span className="reel-modal__action-count">{activeReel.comments}</span>
                </div>
                <div className="reel-modal__action-btn">
                  <span className="reel-modal__action-icon">✈️</span>
                </div>
              </div>

              {/* Caption & IG Link */}
              <div className="reel-modal__caption-box">
                <span className="tag-badge tag-badge--accent">{activeReel.tag}</span>
                <p className="reel-modal__caption-text">{activeReel.caption}</p>
                <a
                  href={activeReel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary reel-modal__ig-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                  </svg>
                  <span>Abrir publicación en Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
