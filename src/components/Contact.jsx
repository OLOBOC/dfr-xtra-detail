import { useState } from 'react';
import {
  LOCATION_CITY,
  LOCATION_REGION,
  LOCATION_NOTE,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  buildWhatsAppLink,
  SERVICES,
} from '../config/site.config';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    vehicle: '',
    service: 'Pulido de Faros',
    needsMobile: 'No (en taller en Gijón)',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Compile structured WhatsApp message
    const messageLines = [
      `*SOLICITUD DE PRESUPUESTO — DFR XTRA DETAIL*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Cliente:* ${formData.name || 'No especificado'}`,
      `📞 *Contacto:* ${formData.contact || 'No especificado'}`,
      `🚗 *Vehículo:* ${formData.vehicle || 'A valorar'}`,
      `✦ *Tratamiento:* ${formData.service}`,
      `📍 *Modalidad:* ${formData.needsMobile}`,
      formData.message ? `📝 *Observaciones:* ${formData.message}` : '',
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `_Mensaje generado automáticamente desde la web dfrxtradetail.es_`,
    ].filter(Boolean).join('\n');

    const waUrl = buildWhatsAppLink(messageLines);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="section contact" aria-labelledby="contact-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--split reveal">
          <div>
            <span className="kicker">Atención Personalizada</span>
            <h2 className="display-xl" id="contact-heading">
              Solicita tu<br />
              <span className="text-accent">Presupuesto</span>
            </h2>
          </div>
          <p className="lead-text">
            Completa los detalles de tu vehículo o contáctanos directamente.
            Te responderemos con una valoración clara y sin ningún compromiso.
          </p>
        </div>

        <div className="contact__layout">
          {/* Left Column: Quick Contact Cards & Location */}
          <div className="contact__sidebar reveal">
            {/* Direct WhatsApp Card */}
            <div className="contact-card contact-card--highlight">
              <div className="contact-card__icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h4 className="contact-card__title">Atención por WhatsApp</h4>
                <p className="contact-card__text">Respuesta rápida, fotos previas y consultas de citas.</p>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__link"
                >
                  Abrir conversación →
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="contact-card">
              <div className="contact-card__icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </div>
              <div>
                <h4 className="contact-card__title">Mensaje Directo</h4>
                <p className="contact-card__text">{INSTAGRAM_HANDLE} en Instagram oficial.</p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__link"
                >
                  Visitar perfil →
                </a>
              </div>
            </div>

            {/* Location & Modality Card */}
            <div className="contact-card">
              <div className="contact-card__icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className="contact-card__title">{LOCATION_CITY}, {LOCATION_REGION}</h4>
                <p className="contact-card__text">{LOCATION_NOTE}</p>
                <span className="contact-card__tag">Cita previa requerida</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Quote Builder */}
          <div className="contact__form-wrap reveal reveal-delay-1">
            <form onSubmit={handleFormSubmit} className="contact__form">
              <div className="contact__form-head">
                <h3 className="contact__form-title">Generador de Consulta</h3>
                <span className="contact__form-badge">Vía WhatsApp Directo</span>
              </div>

              <div className="contact__form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Tu Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ej. Carlos Menéndez"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact" className="form-label">Teléfono o Contacto *</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                    placeholder="Ej. 612 345 678"
                    value={formData.contact}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="contact__form-grid">
                <div className="form-group">
                  <label htmlFor="vehicle" className="form-label">Marca, Modelo y Año</label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    placeholder="Ej. Audi A4 2018 (Negro)"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">Tratamiento Solicitado</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-control form-select"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Tratamiento Integral Completo">Tratamiento Integral Completo</option>
                    <option value="Consulta Técnica General">Consulta Técnica General</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="needsMobile" className="form-label">Modalidad de Atención</label>
                <select
                  id="needsMobile"
                  name="needsMobile"
                  value={formData.needsMobile}
                  onChange={handleChange}
                  className="form-control form-select"
                >
                  <option value="En taller en Gijón">En taller / punto en Gijón</option>
                  <option value="Con desplazamiento (garaje privado / nave en Asturias)">
                    Con desplazamiento (garaje privado / nave en Asturias)
                  </option>
                  <option value="A consultar según disponibilidad">A consultar según disponibilidad</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Detalles del estado o consulta</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Ej. Faros bastante opacos para pasar ITV / Microarañazos por túnel de lavado..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control form-textarea"
                />
              </div>

              {/* Informative Submission Note */}
              <div className="contact__submit-bar">
                <button type="submit" className="btn btn-whatsapp contact__submit-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  <span>Enviar Presupuesto por WhatsApp</span>
                </button>
                <span className="contact__submit-hint">
                  Abre WhatsApp automáticamente con los datos estructurados sin almacenar cookies ni servidores.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
