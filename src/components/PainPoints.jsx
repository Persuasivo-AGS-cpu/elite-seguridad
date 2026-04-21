export default function PainPoints() {
  const pains = [
    {
      title: "Puntos Ciegos y Falsa Visibilidad",
      desc: "Las cámaras baratas (IR) convierten la noche en una mancha gris borrosa donde es imposible distinguir rostros, placas o detalles críticos.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      )
    },
    {
      title: "Ceguera por Corte de Energía",
      desc: "Si los intrusos cortan la luz exterior, tu DVR tradicional se apaga. Un sistema que no opera sin red eléctrica no es seguridad, es un juguete.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      )
    },
    {
      title: "Sistemas Reactivos (El Robo Ya Sucedió)",
      desc: "Las cámaras graban pasivamente cómo ocurre el desastre. Nadie detiene la intrusión porque carecen de IA de advertencia estroboscópica.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      )
    }
  ];

  return (
    <section className="section-py" style={{ background: 'var(--color-bg-dark)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 className="animate-fade-up" style={{ color: 'var(--color-primary)' }}>
            Grabar el robo no lo evita. <br />
            <span style={{ color: '#ef4444' }}>La falsa seguridad de lo barato.</span>
          </h2>
          <p className="animate-fade-up delay-100" style={{ fontSize: '1.2rem', marginTop: '1.5rem', color: 'var(--color-text-muted)' }}>
            El 85% de las vulnerabilidades industriales y residenciales surgen porque los sistemas de seguridad instalados fueron diseñados para abaratar costos, no para proteger patrimonios.
          </p>
        </div>

        <div className="grid-3">
          {pains.map((pain, idx) => (
            <div 
              key={idx} 
              className={`animate-fade-up delay-${(idx + 1) * 100}`}
              style={{ 
                background: 'var(--color-bg-light)', 
                padding: '2.5rem', 
                borderRadius: '16px',
                borderTop: '4px solid #ef4444',
                boxShadow: '0 15px 35px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ 
                width: '60px', height: '60px', borderRadius: '12px', 
                background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {pain.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                {pain.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
