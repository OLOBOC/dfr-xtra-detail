import { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { buildWhatsAppLink, INSTAGRAM_URL, LOCATION_CITY } from '../config/site.config';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__container">
        {/* Brand Logo */}
        <a href="#inicio" className="navbar__brand" onClick={closeMenu} aria-label="Ir al inicio">
          <BrandLogo size="medium" />
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul className="navbar__links">
            <li><a href="#inicio" className="navbar__link">Inicio</a></li>
            <li><a href="#servicios" className="navbar__link">Servicios</a></li>
            <li><a href="#faros" className="navbar__link navbar__link--highlight">Pulido de Faros</a></li>
            <li><a href="#transformaciones" className="navbar__link">Antes &amp; Después</a></li>
            <li><a href="#desplazamiento" className="navbar__link">Desplazamiento</a></li>
            <li><a href="#galeria" className="navbar__link">Galería</a></li>
            <li><a href="#reels" className="navbar__link">Vídeos</a></li>
            <li><a href="#opiniones" className="navbar__link">Opiniones</a></li>
            <li><a href="#contacto" className="navbar__link">Contacto</a></li>
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar__actions">
          <div className="navbar__location-pill">
            <span className="navbar__status-dot" aria-hidden="true" />
            <span>{LOCATION_CITY}</span>
          </div>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp navbar__cta"
            aria-label="Contactar por WhatsApp"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            <span>Pedir Cita</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="navbar__drawer-content">
          <div className="navbar__drawer-head">
            <BrandLogo size="medium" />
            <button className="navbar__drawer-close" onClick={closeMenu} aria-label="Cerrar menú">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="navbar__drawer-links">
            <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
            <li><a href="#servicios" onClick={closeMenu}>Servicios de Detailing</a></li>
            <li><a href="#faros" onClick={closeMenu} className="navbar__drawer-link--accent">✦ Pulido de Faros</a></li>
            <li><a href="#transformaciones" onClick={closeMenu}>Comparador Antes &amp; Después</a></li>
            <li><a href="#desplazamiento" onClick={closeMenu}>Servicio con Desplazamiento</a></li>
            <li><a href="#galeria" onClick={closeMenu}>Galería de Trabajos</a></li>
            <li><a href="#reels" onClick={closeMenu}>Vídeos &amp; Reels de Instagram</a></li>
            <li><a href="#opiniones" onClick={closeMenu}>Opiniones de Clientes</a></li>
            <li><a href="#sobre-dfr" onClick={closeMenu}>Sobre DFR Xtra Detail</a></li>
            <li><a href="#contacto" onClick={closeMenu}>Contacto &amp; Presupuesto</a></li>
          </ul>

          <div className="navbar__drawer-footer">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp navbar__drawer-wa"
              onClick={closeMenu}
            >
              Consultar por WhatsApp
            </a>
            <div className="navbar__drawer-social">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Instagram: @dfr.xtra.detail
              </a>
              <span className="text-muted">Gijón, Asturias</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
