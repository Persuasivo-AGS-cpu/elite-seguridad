export default function TrustBar() {
  return (
    <section style={{ 
      background: '#F1F5F9', /* Crisp light corporate grey */
      borderBottom: '1px solid rgba(0, 45, 114, 0.05)',
      padding: '1.5rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        
        {/* Social Proof Metric */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{ display: 'flex' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </div>
          <span style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.5px' }}>
            <span style={{ color: 'var(--color-brand-blue)' }}>4.9/5</span> de +100 clientes protegidos en N.L.
          </span>
        </div>

        {/* Partner / Hardware Logos */}
        <div style={{ 
          display: 'flex', 
          gap: '3rem', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          color: '#64748B',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'monospace', letterSpacing: '2px' }}>HIKVISION</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'monospace', letterSpacing: '2px' }}>SYSCOM</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'monospace', letterSpacing: '2px' }}>EZVIZ</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'monospace', letterSpacing: '2px' }}>TP-LINK</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'monospace', letterSpacing: '2px' }}>EPCOM</div>
        </div>

      </div>
    </section>
  );
}
