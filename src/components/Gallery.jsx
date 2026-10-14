import { useState } from 'react';
import { GALLERY_ITEMS, INSTAGRAM_URL } from '../config/site.config';
import './Gallery.css';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const categories = ['Todos', 'Faros', 'Pintura', 'Proceso', 'Protección'];

  const filteredItems = selectedCategory === 'Todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="galeria" className="section gallery" aria-labelledby="gallery-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--split reveal">
          <div>
            <span className="kicker">Fotografía de Trabajo</span>
            <h2 className="display-xl" id="gallery-heading">
              Galería<br />
              <span className="text-accent">Editorial</span>
            </h2>
          </div>

          <div className="gallery__header-right">
            <p className="lead-text">
              Composiciones fotográficas de texturas, cortes de luz y detalles de procesos.
              Haz clic en cualquier imagen para verla ampliada en detalle.
            </p>

            {/* Filter Pills */}
            <div className="gallery__filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`gallery__filter-btn ${selectedCategory === cat ? 'gallery__filter-btn--active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="gallery__mosaic reveal reveal-delay-1">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`gallery__cell gallery__cell--${item.aspect}`}
              onClick={() => setActiveLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveLightbox(item)}
              aria-label={`Ver imagen: ${item.caption}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="gallery__img"
                loading="lazy"
              />
              <div className="gallery__cell-overlay">
                <span className="tag-badge tag-badge--accent">{item.category}</span>
                <p className="gallery__cell-caption">{item.caption}</p>
                <div className="gallery__zoom-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Instagram Connection Banner */}
        <div className="gallery__footer-banner reveal reveal-delay-2">
          <div className="gallery__footer-info">
            <span className="gallery__footer-dot" aria-hidden="true" />
            <p>
              Actualizaciones continuas y registro en directo de cada trabajo en Gijón en nuestro perfil oficial de Instagram.
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>Ver @dfr.xtra.detail</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17l10-10M17 17V7H7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="gallery-lightbox"
          onClick={() => setActiveLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador ampliado"
        >
          <div className="gallery-lightbox__dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-lightbox__close"
              onClick={() => setActiveLightbox(null)}
              aria-label="Cerrar imagen"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <img
              src={activeLightbox.src}
              alt={activeLightbox.alt}
              className="gallery-lightbox__img"
            />
            <div className="gallery-lightbox__caption-bar">
              <span className="tag-badge tag-badge--accent">{activeLightbox.category}</span>
              <p className="gallery-lightbox__text">{activeLightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
