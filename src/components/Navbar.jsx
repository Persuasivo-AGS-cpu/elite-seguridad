export default function Navbar() {
  return (
    <nav style={{ 
      position: 'fixed', top: '15px', left: '50%', transform: 'translateX(-50%)', 
      width: 'calc(100% - 2rem)', maxWidth: '1200px', zIndex: 100,
      background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
      borderRadius: '24px',
      padding: '0.6rem 1.5rem',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      boxShadow: '0 10px 40px -10px rgba(0, 45, 114, 0.08), inset 0 1px 0 rgba(255,255,255,0.7)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo Integration - Sleek Wrapper, Aggressive Visual Scale */}
        <div style={{ display: 'flex', alignItems: 'center', height: '40px', gap: '1.5rem' }}>
          <img 
            src="/shield-icon.png" 
            alt="Escudo Elite" 
            className="nav-logo"
            style={{ 
              height: '100%', minHeight: '35px', width: 'auto', objectFit: 'contain', 
              transformOrigin: 'left center',
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.08))',
              transition: 'transform 0.3s'
            }} 
          />
          <span style={{
            fontSize: '1.2rem',
            fontWeight: 800,
            color: 'var(--color-primary)',
            letterSpacing: '-0.5px',
            whiteSpace: 'nowrap'
          }}>
            Elite Seguridad
          </span>
        </div>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <a href="#soluciones" className="btn-secondary hide-mobile" style={{ 
            padding: '0.5rem 1rem', fontSize: '0.9rem', border: 'none', background: 'transparent', 
            color: '#64748B', fontWeight: 600, transition: 'color 0.2s' 
          }} onMouseOver={e=>e.target.style.color='var(--color-primary)'} onMouseOut={e=>e.target.style.color='#64748B'}>
            Servicios
          </a>
          <a href="https://wa.me/528120295749" target="_blank" rel="noreferrer" className="btn-primary nav-cta" style={{ borderRadius: '16px', boxShadow: '0 4px 15px rgba(22, 163, 74, 0.2)' }}>
            Cotización Rápida
          </a>
        </div>
        
      </div>
    </nav>
  );
}
