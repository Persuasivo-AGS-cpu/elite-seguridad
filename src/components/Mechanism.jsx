export default function Mechanism() {
  const steps = [
    {
      num: "01",
      title: "Auditoría de Riesgo Cero",
      desc: "Mapeamos físicamente tu perímetro para detectar puntos ciegos, vulnerabilidades de acceso y zonas de sabotaje energético.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="22" y1="12" x2="18" y2="12"></line>
          <line x1="6" y1="12" x2="2" y2="12"></line>
          <line x1="12" y1="6" x2="12" y2="2"></line>
          <line x1="12" y1="22" x2="12" y2="18"></line>
          <circle cx="12" cy="12" r="4"></circle>
        </svg>
      )
    },
    {
      num: "02",
      title: "Diseño de Arquitectura",
      desc: "Seleccionamos estratégicamente los radares ColorVu, barreras AX PRO y esclusas biométricas que erradiquen el riesgo.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      num: "03",
      title: "Despliegue y Blindaje Activo",
      desc: "Nuestros ingenieros ejecutan la instalación asegurando cableado oculto, redundancia de poder y el control en tu celular.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="section-py" style={{ background: '#F8FAFC' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 className="animate-fade-up" style={{ color: 'var(--color-primary)' }}>
            Cómo Blindamos tu Propiedad
          </h2>
          <p className="animate-fade-up delay-100" style={{ fontSize: '1.2rem', marginTop: '1rem', color: 'var(--color-text-muted)' }}>
            Un proceso milimétrico en 3 fases de ingeniería táctica.
          </p>
        </div>

        <div className="grid-3" style={{ gap: '3rem' }}>
          {steps.map((step, idx) => (
            <div key={idx} className={`animate-fade-up delay-${(idx + 1) * 100}`} style={{ position: 'relative' }}>
              
              {/* Connector line for desktop */}
              {idx !== 2 && (
                <div className="hide-mobile" style={{ 
                  position: 'absolute', top: '30px', left: '60%', width: '100%', 
                  height: '2px', background: 'linear-gradient(90deg, var(--color-accent) 0%, transparent 100%)',
                  opacity: 0.3, zIndex: 1
                }} />
              )}

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                <div style={{ 
                  width: '80px', height: '80px', borderRadius: '50%', 
                  background: 'var(--color-accent)', color: '#FFF', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '2rem', boxShadow: '0 10px 25px rgba(22, 163, 74, 0.3)',
                  border: '6px solid #FFF'
                }}>
                  {step.icon}
                </div>
                
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                  <span style={{ color: 'var(--color-accent)', opacity: 0.5, marginRight: '8px' }}>{step.num}.</span>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-center" style={{ marginTop: '4rem' }}>
          <a href="https://wa.me/528120295749?text=Hola,%20quisiera%20solicitar%20una%20auditoría%20de%20riesgo%20para%20mi%20propiedad." target="_blank" rel="noreferrer" className="btn-primary pointer">
            Agendar Auditoría Gratuita
          </a>
        </div>

      </div>
    </section>
  );
}
