import { useEffect } from 'react';

export default function Hero() {
  return (
    <section className="hero-section" style={{ display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* Light Background Strategy */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, background: 'var(--color-bg-dark)' }}>
        {/* Subtle geometric lines / light tech feeling */}
        <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(0,45,114,0.04) 0%, transparent 70%)', borderRadius: '50%' }} />
      </div>

      <div className="container">
        <div className="grid-2 hero-grid">
          
          <div style={{ zIndex: 2 }}>
            <div className="animate-fade-up" style={{ marginBottom: '1.5rem' }}>
              <span style={{ 
                display: 'inline-block', padding: '0.5rem 1rem', 
                background: 'rgba(0, 45, 114, 0.05)', color: 'var(--color-brand-blue)', 
                borderRadius: '20px', fontSize: '0.875rem', fontWeight: 700,
                border: '1px solid rgba(0, 45, 114, 0.1)'
              }}>
                10+ Años de Experiencia en N.L.
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 hero-title" style={{ color: 'var(--color-primary)' }}>
              Seguridad Inteligente: <br />
              <span className="text-gradient">La Tranquilidad de Tener el Control.</span>
            </h1>

            <p className="animate-fade-up delay-200 hero-subtitle">
              Instalación profesional y mantenimiento experto de sistemas de videovigilancia, accesos biométricos y automatización residencial.
            </p>

            <div className="flex-center animate-fade-up delay-300" style={{ gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
              <a href="https://wa.me/528120295749?text=Hola,%20necesito%20cotizar%20un%20sistema%20de%20seguridad" 
                 target="_blank" rel="noreferrer" 
                 className="btn-primary"
                 style={{ display: 'flex', gap: '0.5rem' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Cotizar por WhatsApp
              </a>
              <a href="#soluciones" className="btn-secondary">
                Nuestras Soluciones
              </a>
            </div>
          </div>

          <div className="hero-img-wrapper" style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '600px', aspectRatio: '4/3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <video 
                src="/hero-video.mp4" 
                poster="/hero-elite.png"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', border: '1px solid rgba(0,45,114,0.1)', boxShadow: '0 20px 40px rgba(0,45,114,0.15)' }}
              />
              {/* Trust Badge overlay */}
              <div className="glass-panel" style={{ position: 'absolute', bottom: '-20px', left: '-30px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 2, background: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(0,45,114,0.1)' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--color-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <span style={{ display: 'block', fontWeight: 800, color: 'var(--color-primary)' }}>100% Garantizado</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Instalación Profesional</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
