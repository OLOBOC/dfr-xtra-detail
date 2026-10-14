import { useState, useRef, useCallback, useEffect } from 'react';
import { TRANSFORMATIONS, buildWhatsAppLink } from '../config/site.config';
import './BeforeAfter.css';

export default function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TRANSFORMATIONS[activeIndex];

  return (
    <section id="transformaciones" className="section before-after" aria-labelledby="ba-heading">
      <div className="container">
        {/* Header */}
        <div className="section-head section-head--split reveal">
          <div>
            <span className="kicker">Evidencia Visual</span>
            <h2 className="display-xl" id="ba-heading">
              Transformaciones<br />
              <span className="text-accent">Antes &amp; Después</span>
            </h2>
          </div>
          <p className="lead-text">
            Arrastra el divisor para evaluar el salto de acabado entre el estado previo y el 
            resultado tras la intervención técnica. Resultados directos sin retoques digitales.
          </p>
        </div>

        {/* Transformation Switcher Selector */}
        <div className="ba-selector reveal">
          {TRANSFORMATIONS.map((item, idx) => (
            <button
              key={item.id}
              className={`ba-selector__btn ${activeIndex === idx ? 'ba-selector__btn--active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              type="button"
            >
              <span className="ba-selector__tag">{item.category}</span>
              <span className="ba-selector__title">{item.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider */}
        <div className="ba-slider-container reveal reveal-delay-1">
          <CompareSlider
            key={active.id}
            beforeSrc={active.beforeImage}
            afterSrc={active.afterImage}
            beforeLabel={active.beforeLabel}
            afterLabel={active.afterLabel}
            title={active.title}
          />
        </div>

        {/* Transformation Meta & WhatsApp Consultation */}
        <div className="ba-meta reveal reveal-delay-2">
          <div className="ba-meta__info">
            <span className="ba-meta__cat">{active.category} · {active.vehicle}</span>
            <h4 className="ba-meta__title">{active.title}</h4>
            <p className="ba-meta__desc">{active.description}</p>
          </div>

          <div className="ba-meta__action">
            <a
              href={buildWhatsAppLink(`Hola DFR Xtra Detail, he visto la transformación de "${active.title}" y me gustaría saber el presupuesto para mi coche.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Consultar este tratamiento</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Componente CompareSlider ────────────────────────────────── */
function CompareSlider({ beforeSrc, afterSrc, beforeLabel, afterLabel, title }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isInteracting, setIsInteracting] = useState(false);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);

  const calculatePosition = useCallback((clientX) => {
    if (!containerRef.current) return 50;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return Math.round((x / rect.width) * 100);
  }, []);

  // Mouse Listeners
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    setIsInteracting(true);
    setSliderPos(calculatePosition(e.clientX));
  }, [calculatePosition]);

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current) return;
    setSliderPos(calculatePosition(e.clientX));
  }, [calculatePosition]);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    setIsInteracting(false);
  }, []);

  // Touch Listeners
  const handleTouchStart = useCallback((e) => {
    isDraggingRef.current = true;
    setIsInteracting(true);
    setSliderPos(calculatePosition(e.touches[0].clientX));
  }, [calculatePosition]);

  const handleTouchMove = useCallback((e) => {
    if (!isDraggingRef.current) return;
    setSliderPos(calculatePosition(e.touches[0].clientX));
  }, [calculatePosition]);

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
    setIsInteracting(false);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 3));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 3));
    }
  }, []);

  useEffect(() => {
    const onMove = (e) => handleMouseMove(e);
    const onUp = () => handleMouseUp();
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className={`compare-view ${isInteracting ? 'compare-view--active' : ''}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      role="slider"
      aria-label={`Comparador antes y después para: ${title}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={sliderPos}
      tabIndex={0}
    >
      {/* DESPUÉS (Fondo completo) */}
      <div className="compare-view__after">
        <img
          src={afterSrc}
          alt={`Resultado final tras tratamiento: ${afterLabel}`}
          className="compare-view__img"
          draggable="false"
        />
        <div className="compare-view__badge compare-view__badge--after">
          <span className="compare-view__badge-tag">DESPUÉS</span>
          <span className="compare-view__badge-text">{afterLabel}</span>
        </div>
      </div>

      {/* ANTES (Capa recortada) */}
      <div className="compare-view__before" style={{ width: `${sliderPos}%` }}>
        <img
          src={beforeSrc}
          alt={`Estado inicial: ${beforeLabel}`}
          className="compare-view__img compare-view__img--before"
          draggable="false"
        />
        <div className="compare-view__badge compare-view__badge--before">
          <span className="compare-view__badge-tag">ANTES</span>
          <span className="compare-view__badge-text">{beforeLabel}</span>
        </div>
      </div>

      {/* Divisor & Control Manual */}
      <div className="compare-view__handle" style={{ left: `${sliderPos}%` }} aria-hidden="true">
        <div className="compare-view__handle-line" />
        <div className="compare-view__handle-knob">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
