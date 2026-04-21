export default function VisualEvidence() {
  return (
    <section className="section-py" style={{ background: '#020617', color: '#FFF', position: 'relative', overflow: 'hidden' }}>
      
      {/* Dynamic Background Glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '80vw', background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 60%)', borderRadius: '50%', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          <div className="animate-fade-up">
            <span style={{ 
              display: 'inline-block', padding: '0.4rem 1rem', 
              background: 'rgba(34, 197, 94, 0.1)', color: 'var(--color-accent)', 
              borderRadius: '20px', fontSize: '0.875rem', fontWeight: 800,
              letterSpacing: '1px', marginBottom: '1.5rem', border: '1px solid rgba(34,197,94,0.3)'
            }}>
              [ EVIDENCIA TÁCTICA ]
            </span>
            <h2 style={{ color: '#FFF', marginBottom: '1.5rem' }}>
              Control total de acceso <br/>desde la palma de tu mano.
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.15rem', marginBottom: '2rem' }}>
              Las llaves físicas son obsoletas y vulnerables. Con nuestra integración de <strong>Cerraduras Inteligentes Wi-Fi EZVIZ</strong>, obtienes el poder de otorgar accesos, revisar bitácoras y blindar tu propiedad de manera remota y en tiempo real.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: '#e2e8f0' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Apertura Inteligente (Huella, Códigos, App)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Códigos Temporales para Visitas o Personal</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Alertas Inmediatas de Accesos no Autorizados</span>
              </li>
            </ul>
          </div>

          <div className="animate-fade-up delay-200" style={{ position: 'relative' }}>
            <div style={{ 
              position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
              background: '#0F172A'
            }}>
              {/* Evidence Dashboard UI */}
              <div style={{ backgroundImage: `url('https://mfs.ezvizlife.com/fb31869c8a3eb8bd25316e8b4d4434ae.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', filter: 'brightness(0.9) contrast(1.1)' }} />
              
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,6,23,0.9) 0%, transparent 60%)' }} />

              {/* Fake UI Overlay */}
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', flex: 1 }}>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '1px' }}>ESTADO</div>
                  <div style={{ color: '#22c55e', fontWeight: 800 }}>BLOQUEADA</div>
                </div>
                <div style={{ background: 'rgba(34, 197, 94, 0.15)', backdropFilter: 'blur(10px)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(34, 197, 94, 0.3)', flex: 1 }}>
                  <div style={{ fontSize: '0.7rem', color: '#86efac', fontWeight: 700, letterSpacing: '1px' }}>ÚLTIMO ACCESO</div>
                  <div style={{ color: '#22c55e', fontWeight: 800 }}>HUELLA AUTORIZADA</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
