export default function Benefits() {
  const benefits = [
    {
      title: "Seguridad en tiempo real",
      subtitle: "Monitoreo 24/7",
      desc: "Visualiza tus cámaras desde tu celular 24/7 con acceso inmediato. Mantén el control de tu patrimonio desde cualquier lugar del mundo.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: "Imágenes claras día y noche",
      subtitle: "Visión Nocturna",
      desc: "Tecnología color nocturno que permite ver rostros, placas y detalles importantes sin importar la oscuridad de la zona.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      )
    },
    {
      title: "Audio bidireccional",
      subtitle: "Interacción Inmediata",
      desc: "Escucha lo que sucede en tu propiedad en tiempo real y comunícate si es necesario gracias a los micrófonos integrados.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="22"></line>
        </svg>
      )
    },
    {
      title: "Sistemas inteligentes que sí previenen",
      subtitle: "Alertas Activas",
      desc: "Cámaras con detección de movimiento, alertas automáticas al celular y opciones de sirena disuasoria integrada.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    },
    {
      title: "Protección incluso en apagones",
      subtitle: "Respaldo Energético",
      desc: "Opciones con respaldo de batería (UPS) para que tu sistema de seguridad siga funcionando ante cortes de energía.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      )
    },
    {
      title: "Instalación profesional garantizada",
      subtitle: "Llave en Mano",
      desc: "Equipo experto que instala, configura la aplicación y deja todo listo para usar sin que te preocupes de configuraciones complejas.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="beneficios" style={{ background: '#FFFFFF', padding: '4rem 0 1.5rem 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Organic Background Blobs */}
      <style dangerouslySetInnerHTML={{__html: `
        .benefit-card {
          background: linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; bottom: 0; width: 4px;
          background: linear-gradient(to bottom, var(--color-accent), #0ea5e9);
          z-index: 2;
          transition: width 0.3s ease;
        }
        .benefit-card:hover::before {
          width: 6px;
        }
        .benefit-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at top right, rgba(22, 163, 74, 0.04) 0%, transparent 60%);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .benefit-card:hover::after {
          opacity: 1;
        }
        .benefit-icon-wrapper {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .benefit-card:hover .benefit-icon-wrapper {
          transform: scale(1.1) rotate(-5deg);
          background: var(--color-accent) !important;
          color: #FFF !important;
          box-shadow: 0 10px 20px rgba(22, 163, 74, 0.2);
        }
        .organic-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.6;
          animation: floatBlob 10s infinite ease-in-out alternate;
        }
        @keyframes floatBlob {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, -50px) scale(1.1); }
        }
      `}} />

      <div className="organic-blob" style={{ top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'rgba(22, 163, 74, 0.06)' }}></div>
      <div className="organic-blob" style={{ bottom: '-10%', right: '-5%', width: '400px', height: '400px', background: 'rgba(14, 165, 233, 0.04)', animationDelay: '-5s' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
          <h2 className="animate-fade-up" style={{ color: 'var(--color-primary)', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
            Tecnología Inteligente <span style={{ color: 'var(--color-accent)' }}>Trabajando para Ti</span>
          </h2>
          <p className="animate-fade-up delay-100" style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
            La verdadera seguridad no se trata de grabar el problema, se trata de tener el control total y la tranquilidad de que tu patrimonio está protegido.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '1.2rem' 
        }}>
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className={`benefit-card animate-fade-up delay-${(idx + 1) * 50}`}
              style={{ 
                padding: '1.5rem', 
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.03)',
                borderLeft: 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.2rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
              }}
            >
              <div className="benefit-icon-wrapper" style={{ 
                width: '46px', height: '46px', minWidth: '46px', borderRadius: '12px', 
                background: 'rgba(22, 163, 74, 0.1)', color: 'var(--color-accent)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: '0.2rem'
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.2rem' }}>
                  {item.subtitle}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--color-primary)', lineHeight: '1.2' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees / Conversion Pill */}
        <div className="animate-fade-up delay-400" style={{
          display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap',
          padding: '1rem 2.5rem', 
          background: 'rgba(22, 163, 74, 0.05)', 
          borderRadius: '100px',
          border: '1px solid rgba(22, 163, 74, 0.1)',
          maxWidth: 'max-content',
          margin: '2.5rem auto 0 auto',
          boxShadow: '0 10px 30px rgba(22, 163, 74, 0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-brand-blue)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.5px' }}>
            <div style={{ background: 'var(--color-accent)', color: '#FFF', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            Instalación Rápida
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-brand-blue)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.5px' }}>
            <div style={{ background: 'var(--color-accent)', color: '#FFF', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            Pago Accesible
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-brand-blue)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.5px' }}>
            <div style={{ background: 'var(--color-accent)', color: '#FFF', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            Garantía Incluida
          </div>
        </div>

      </div>
    </section>
  );
}
