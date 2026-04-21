export default function Maintenance() {
  return (
    <section className="relative" style={{ overflow: 'hidden', padding: '2rem 0 3rem 0' }}>
      
      {/* Visual Break - Diagonal Angle effect via CSS or subtle background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }} />
        <div style={{ position: 'absolute', right: '-10%', bottom: '-20%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(22, 163, 74, 0.05) 0%, transparent 60%)', borderRadius: '50%' }} />
      </div>

      <div className="container">
        <div className="glass-panel" style={{ padding: '4rem', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', border: '1px solid rgba(0, 45, 114, 0.08)', background: 'rgba(255, 255, 255, 0.6)' }}>
          
          <div style={{ flex: '1 1 400px' }}>
            <span style={{ display: 'inline-block', color: 'var(--color-accent)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>
              Servicio de Mantenimiento Correctivo
            </span>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-brand-blue)' }}>
              ¿Tu sistema actual no funciona?
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              No compres todo de nuevo. A veces una empresa de instalación barata deja el trabajo a medias, los cables expuestos o el sistema desconfigurado. 
            </p>
            <p style={{ marginBottom: '2.5rem', color: 'var(--color-text-main)' }}>
              <strong style={{ color: 'var(--color-brand-blue)' }}>Nosotros lo arreglamos.</strong> Diagnosticamos, reparamos y actualizamos tus cámaras y alarmas existentes para que vuelvan a protegerte.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#475569' }}>
                <div style={{ marginTop: '0.2rem', color: 'var(--color-accent)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <span style={{ fontWeight: 500 }}>Auditoría de cableado y red Wi-Fi/IP.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#475569' }}>
                <div style={{ marginTop: '0.2rem', color: 'var(--color-accent)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <span style={{ fontWeight: 500 }}>Re-configuración en App móvil (Hik-Connect, Ezviz).</span>
              </li>
            </ul>

            <a href="https://wa.me/528120295749?text=Hola,%20requiero%20mantenimiento%20para%20un%20equipo%20existente" 
               target="_blank" rel="noreferrer" 
               className="btn-primary"
            >
               Agendar Diagnóstico
            </a>
          </div>

          {/* Abstract Tech Visual */}
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '1/1', background: '#FFFFFF', borderRadius: '24px', border: '1px solid rgba(0,45,114,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <img 
                src="/maintenance-elite.png" 
                alt="Técnico de Elite Seguridad brindando diagnóstico y mantenimiento"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
