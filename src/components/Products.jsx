import { useEffect } from 'react';

export default function Products() {
  const products = [
    {
      id: "kis603",
      category: "Acceso Remoto",
      name: "Videoportero Inteligente Hikvision (IP)",
      description: "Contesta tu puerta desde el celular y abre a distancia. Ideal para residencias y oficinas.",
      image: "/products/kis603.png",
      features: ["Apertura App", "1080p Ultra Wide", "Táctil 7\"", "IP65 Exterior"]
    },
    {
      id: "dl05",
      category: "Smart Home",
      name: "Cerradura Inteligente Wi-Fi Ezviz",
      description: "Convierte cualquier acceso en inteligente. Adiós a las copias de llaves olvidadas.",
      image: "/products/dl05.png",
      features: ["Wi-Fi Directo", "Huella y Teclado", "Passwords Temporales", "App Nativa"]
    },
    {
      id: "turbohd",
      category: "Color 24/7",
      name: "Kit Completo ColorVu TurboHD",
      description: "La oscuridad total ya no es un problema. Observa todo a color 24/7 sin puntos ciegos.",
      image: "/products/turbohd.png",
      features: ["Tecnología ColorVu", "TurboHD 1080p", "Monitoreo Remoto", "Cámaras Metálicas"]
    },
    {
      id: "axpro",
      category: "Sin Cables",
      name: "Kit de Alarma Avanzada AX PRO",
      description: "Protección inteligente y sin cables. Sistema completo con notificaciones a tu celular.",
      image: "/products/axpro.png",
      features: ["Inmune a Mascotas", "Batería Respaldo", "Sirena Inalámbrica", "433 MHz Seguro"]
    },
    {
      id: "deco",
      category: "Wi-Fi Mesh",
      name: "Sistema Wi-Fi Inteligente Deco",
      description: "Elimina las zonas sin internet en tu hogar con una red ininterrumpida y poderosa.",
      image: "/products/deco.png",
      features: ["Cobertura Mesh", "Doble Banda", "Optimización IA", "+100 Dispositivos"]
    },
    {
      id: "kitmag12v",
      category: "Alta Fuerza",
      name: "Kit Control de Acceso Profesional",
      description: "Asegura el ingreso a tus instalaciones con un sistema magnético y energético 24/7.",
      image: "/products/kitmag12v.png",
      features: ["600 lbs Industriales", "Soporte de Batería", "Salida Sin Contacto", "Montaje Z/L"]
    }
  ];

  return (
    <section id="catalogo" className="relative" style={{ background: 'var(--color-bg-light)', borderTop: '1px solid rgba(0,45,114,0.05)', padding: '5rem 0 2rem 0' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ 
            display: 'inline-block', padding: '0.4rem 1rem', 
            background: 'rgba(0, 45, 114, 0.05)', color: 'var(--color-brand-blue)', 
            borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1px',
            marginBottom: '1.5rem', border: '1px solid rgba(0, 45, 114, 0.1)'
          }}>
            HARDWARE HOMOLOGADO
          </span>
          <h2 className="animate-fade-up" style={{ color: 'var(--color-primary)', fontSize: '2.5rem' }}>
            Arsenal de <span className="text-gradient">Ciberseguridad Física</span>
          </h2>
          <p className="animate-fade-up delay-100" style={{ maxWidth: '650px', margin: '1rem auto 0', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Esta es una selección de los equipos más solicitados. Como <strong>Distribuidores Oficiales</strong>, no estamos limitados: tenemos acceso al inventario global para brindarte exactamente lo que tu infraestructura necesita.
          </p>
        </div>

        <div className="grid-3 animate-fade-up delay-200" style={{ gap: '2rem' }}>
          {products.map((item) => (
            <a 
              key={item.id} 
              href={`https://wa.me/528120295749?text=🚀%20Hola!%20Me%20interesa%20iniciar%20la%20integraci%C3%B3n%20del%20ecosistema:%20*${encodeURIComponent(item.name)}*.`}
              target="_blank" 
              rel="noreferrer"
              className="product-card"
            >
              
              <div className="product-stage">
                <div className="stage-badge">
                  {item.category}
                </div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.target.src = 'https://ftp3.syscom.mx/usuarios/fotos/BancoFotografiasSyscom/SYSCOM/GENERIC_IMAGE/portada.PNG'; }}
                />
              </div>

              <div className="product-content">
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-brand-blue)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{item.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.5, flexGrow: 1, margin: 0 }}>
                  {item.description}
                </p>
                
                <div className="product-pill-grid">
                  {item.features.map((feat, idx) => (
                    <span key={idx} className="product-pill">{feat}</span>
                  ))}
                </div>

                <div className="action-arrow">
                  <span>Cotizar Sistema</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

            </a>
          ))}
        </div>

        {/* Distributor B2B Banner */}
        <div className="animate-fade-up delay-300 b2b-banner" style={{ 
          marginTop: '4rem', background: '#FFFFFF', 
          border: '1px solid rgba(0,45,114,0.08)', borderRadius: '24px', 
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', 
          gap: '2rem', boxShadow: '0 20px 40px rgba(0,45,114,0.03)' 
        }}>
          <div style={{ flex: '1 1 min(100%, 500px)' }}>
            <span style={{ color: 'var(--color-accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>
              DISTRIBUCIÓN DIRECTA
            </span>
            <h3 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginBottom: '1rem', lineHeight: 1.3 }}>
              ¿Requieres un Catálogo Industrial o Especializado?
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', margin: 0, lineHeight: 1.6 }}>
              Mostramos solo la punta del iceberg. Tenemos acceso preferencial e inventario completo de las marcas top mundiales (Hikvision, Ezviz, TP-Link, AccessPro) para licitaciones, corporativos o integraciones complejas.
            </p>
          </div>
          <div style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'center', width: '100%' }}>
            <a href="https://wa.me/528120295749?text=Hola!%20Tengo%20un%20proyecto%20especial%20y%20requiero%20revisar%20opciones%20del%20cat%C3%A1logo%20extendido%20como%20distribuidor." 
               target="_blank" rel="noreferrer" 
               className="btn-primary b2b-banner-btn" 
               style={{ display: 'inline-block', padding: '1.2rem 2rem', fontSize: '1rem', textAlign: 'center' }}
            >
              Consultar Catálogo de Ingeniería
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
