export default function Solutions() {
  const solutions = [
    {
      id: "cctv",
      title: "Sistemas de Videovigilancia",
      subtitle: "Kits Completos TurboHD",
      painpoint: "Monitoreo 24/7 en alta definición. La evidencia que necesitas, disponible en tu bolsillo y encriptada en la nube.",
      features: ["Resolución 1080p Ultra Nítida", "Visión Nocturna Infrarroja", "Respaldo Energético"],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "accesos",
      title: "Control de Acceso Avanzado",
      subtitle: "Biometría & Magnetismo",
      painpoint: "Restringe áreas sensibles, moderniza tus rentas (Airbnb) y mantén un registro en tiempo real. Adiós llaves mecánicas.",
      features: ["Desbloqueo Huella 0.5s", "Fuerza Magnética 600 lbs", "App de Administración"],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: "conectividad",
      title: "Videoporteros IP Global",
      subtitle: "Recepción Inteligente",
      painpoint: "Contesta tu puerta desde cualquier hemisferio del mundo. Da acceso remoto instantáneo a paquetes o invitados.",
      features: ["Audio Bidireccional", "Ecosistema Hik-Connect", "Resistencia IP65 Exterior"],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  return (
    <section id="soluciones" className="relative" style={{ background: '#FFFFFF', padding: '2rem 0 6rem 0', overflow: 'hidden' }}>
      
      {/* Dynamic Corporate Light CSS Isolated for this section */}
      <style dangerouslySetInnerHTML={{__html: `
        .tech-bg-grid {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background-image: linear-gradient(rgba(0,45,114,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,45,114,0.03) 1px, transparent 1px);
          background-size: 60px 60px; z-index: 0; opacity: 1;
        }
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.2rem;
        }
        .bento-item-wide {
          grid-column: 1 / -1;
        }
        @media(max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
        }
        .tech-card {
          background: linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%);
          border: 1px solid rgba(0, 45, 114, 0.08);
          border-radius: 20px;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.02);
        }
        .tech-card-wide {
          flex-direction: row;
          align-items: stretch;
          gap: 2rem;
        }
        @media(max-width: 900px) {
          .tech-card-wide {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
        .tech-card:hover {
          transform: translateY(-5px);
          border-color: rgba(22, 163, 74, 0.3);
          box-shadow: 0 15px 35px -10px rgba(0, 45, 114, 0.08);
        }
        .tech-card::after {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 3px;
          background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .tech-card:hover::after { opacity: 1; }
        .tech-icon-wrapper {
          width: 48px; height: 48px; border-radius: 12px;
          background: rgba(22, 163, 74, 0.08);
          border: 1px solid rgba(22, 163, 74, 0.15);
          display: flex; align-items: center; justify-content: center;
          color: var(--color-accent);
          margin-bottom: 1rem; position: relative; z-index: 2;
          transition: all 0.4s ease;
        }
        .tech-card:hover .tech-icon-wrapper {
          background: var(--color-accent); color: #FFF;
          box-shadow: 0 0 15px rgba(22, 163, 74, 0.3); transform: scale(1.05) rotate(-5deg);
        }
        .tech-badge {
          position: absolute; top: 1.5rem; right: 1.5rem;
          font-size: 0.65rem; font-weight: 800; letter-spacing: 2px;
          color: rgba(0,45,114,0.3); font-family: monospace;
          transition: color 0.4s ease;
        }
        .tech-card:hover .tech-badge { color: var(--color-brand-blue); }
        .tech-specs {
          margin-top: auto; background: #F1F5F9; padding: 1.2rem;
          border-radius: 12px; border: 1px solid rgba(0,45,114,0.05);
          flex: 1;
        }
      `}} />

      <div className="tech-bg-grid"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ 
            display: 'inline-block', padding: '0.3rem 1rem', 
            background: 'var(--color-bg-light)', color: 'var(--color-brand-blue)', 
            borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px',
            marginBottom: '1rem', border: '1px solid rgba(0, 45, 114, 0.1)'
          }}>
            ARQUITECTURA DE SEGURIDAD
          </span>
          <h2 className="animate-fade-up" style={{ color: 'var(--color-primary)', fontSize: '2.2rem' }}>
            Ecosistemas <span className="text-gradient">Tecnológicos</span>
          </h2>
          <p className="animate-fade-up delay-100" style={{ maxWidth: '600px', margin: '0.5rem auto 0', color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
            Infraestructura de alta disponibilidad diseñada para disuadir, registrar y alertar en microsegundos. Sin latencias, sin puntos ciegos.
          </p>
        </div>

        <div className="bento-grid animate-fade-up delay-200">
          {solutions.map((item, index) => {
            const isWide = index === 0;
            return (
              <div key={item.id} className={`tech-card ${isWide ? 'bento-item-wide tech-card-wide' : ''}`}>
                
                <div className="tech-badge">SYS.0{index + 1}</div>
                
                {/* Content Side */}
                <div style={isWide ? { flex: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'center' } : {}}>
                  <div className="tech-icon-wrapper">
                    <div style={{ width: '24px', height: '24px' }}>{item.icon}</div>
                  </div>
                  
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem', color: 'var(--color-brand-blue)' }}>{item.title}</h3>
                  <div style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {item.subtitle}
                  </div>
                  
                  <p style={{ marginBottom: isWide ? '0' : '1rem', color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    {item.painpoint}
                  </p>
                </div>
                
                {/* Specs Side */}
                <div className="tech-specs" style={isWide ? { margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' } : {}}>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(0,45,114,0.5)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.8rem', fontWeight: 800 }}>
                    Specs Hardware
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {item.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#334155', fontWeight: 500 }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-accent)', boxShadow: '0 0 5px rgba(22,163,74,0.4)' }}></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

        <div className="flex-center animate-fade-up delay-300" style={{ marginTop: '4rem' }}>
          <a href="#catalogo" className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '50px' }}>
            Explorar Catálogo de Equipos
          </a>
        </div>

      </div>
    </section>
  );
}
