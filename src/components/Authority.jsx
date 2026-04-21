export default function Authority() {
  return (
    <section className="section-py" style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,45,114,0.05)' }}>
      <div className="container">
        
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          <div className="animate-fade-up" style={{ order: 1 }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-brand-blue)' }}>
              Seguridad Confiable <br />Para tu Tranquilidad.
            </h2>
            <p style={{ marginBottom: '2rem', color: '#475569', fontSize: '1.1rem' }}>
              Confianza de hogares y negocios en Monterrey. Sabemos lo importante que es proteger a tu familia y tu patrimonio.
            </p>
            <p style={{ marginBottom: '2rem', paddingLeft: '1rem', borderLeft: '3px solid var(--color-accent)', fontWeight: 600, color: 'var(--color-brand-blue)' }}>
              Atención personalizada: Te recomendamos el sistema ideal según tu necesidad y presupuesto.
            </p>
            
            <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem' }}>
              <div>
                <h3 style={{ fontSize: '3rem', color: 'var(--color-brand-blue)', marginBottom: '0.2rem', position: 'relative', display: 'inline-block', lineHeight: 1 }}>
                  500+
                  {/* Subtle neon highlight to maintain brand dna */}
                  <div style={{ position: 'absolute', bottom: '6px', left: 0, width: '100%', height: '10px', background: 'var(--color-accent)', zIndex: -1, opacity: 0.6, borderRadius: '4px' }}></div>
                </h3>
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>Instalaciones en N.L.</span>
              </div>
              <div>
                <h3 style={{ fontSize: '3rem', color: 'var(--color-brand-blue)', marginBottom: '0.2rem', position: 'relative', display: 'inline-block', lineHeight: 1 }}>
                  100%
                  <div style={{ position: 'absolute', bottom: '6px', left: 0, width: '100%', height: '10px', background: 'var(--color-accent)', zIndex: -1, opacity: 0.6, borderRadius: '4px' }}></div>
                </h3>
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>Operativos</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-up delay-200" style={{ position: 'relative', order: 0 }}>
            {/* Business owner image */}
            <div style={{ position: 'absolute', top: '15px', right: '-15px', bottom: '-15px', left: '15px', background: 'var(--color-accent)', borderRadius: '24px', zIndex: 0, opacity: 0.2 }}></div>
            <div style={{ position: 'relative', zIndex: 1, display: 'block' }}>
              <img 
                src="/authority-elite.png" 
                alt="Dueño de negocio B2B de Elite Seguridad tranquilo en su bodega"
                style={{ width: '100%', height: 'auto', borderRadius: '24px', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,45,114,0.1)' }}
              />
              {/* Escudo Bordado (Pin/Patch) en el Saco */}
              <img 
                src="/shield-icon.png" 
                alt="Elite Patch"
                style={{
                  position: 'absolute',
                  top: '48%',      // Approx chest height
                  left: '55%',     // Approx left lapel area (viewer's right)
                  width: '6%',     // Scales with the image automatically
                  maxWidth: '35px',
                  zIndex: 2,
                  opacity: 0.85,
                  transform: 'rotate(2deg)',
                  filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.5)) grayscale(10%) contrast(1.2)'
                }}
              />
            </div>
            
            {/* Floating Brand Badges */}
            <div className="glass-panel" style={{ position: 'absolute', bottom: '20px', right: '-20px', padding: '1.5rem', zIndex: 2, background: 'rgba(255,255,255,0.9)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '1px' }}>Partners</span>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-brand-blue)' }}>HIKVISION</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-brand-blue)' }}>SYSCOM</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
