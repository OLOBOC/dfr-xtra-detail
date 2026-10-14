import './BrandLogo.css';

export default function BrandLogo({ size = 'medium', className = '' }) {
  return (
    <div className={`brand-logo brand-logo--${size} ${className}`} aria-label="DFR Xtra Detail — Limpieza & Detallado">
      <img
        src="/logo.svg"
        alt="DFR Xtra Detail"
        className="brand-logo__svg"
      />
    </div>
  );
}
