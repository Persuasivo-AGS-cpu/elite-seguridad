export default function Guarantee() {
  return (
    <section className="section-py" style={{ background: '#FFF', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', background: 'var(--color-bg-light)', borderRadius: '24px', padding: '3rem', border: '1px solid rgba(0,45,114,0.1)' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', background: 'rgba(22, 163, 74, 0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h2 style={{ fontSize: '2rem', margin: 0 }}>Garantía Blindada</h2>
            </div>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              No somos revendedores de equipo; somos ingenieros. Te entregamos un sistema que funciona perfectamente desde el día 1, o no te cobramos el saldo final.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>1 AÑO de Garantía Física</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>Cualquier defecto de fábrica en cámaras o grabadores se reemplaza de inmediato sin preguntas.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Instalación Estética y Oculta</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>Cero cables pelados. Tubos EMT y registros sellados. Respetamos la arquitectura de tu espacio.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Soporte Prioritario VIP</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>Contacto directo vía WhatsApp. Si necesitas recuperar un metraje, estamos a un mensaje de distancia.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-center hide-mobile">
            <div style={{ position: 'relative', width: '300px', height: '300px' }}>
              {/* Decorative Shield graphic */}
              <div style={{ position: 'absolute', inset: 0, border: '2px dashed rgba(22, 163, 74, 0.3)', borderRadius: '50%', animation: 'spin 15s linear infinite' }} />
              <div style={{ position: 'absolute', inset: '10%', background: 'rgba(22, 163, 74, 0.05)', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', inset: '20%', background: 'rgba(22, 163, 74, 0.1)', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <style>{`
                @keyframes spin { 100% { transform: rotate(360deg); } }
              `}</style>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
