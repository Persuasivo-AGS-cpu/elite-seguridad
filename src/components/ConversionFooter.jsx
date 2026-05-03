import { useState } from 'react';

export default function ConversionFooter() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', need: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    // 1. Silent backend submission via FormSubmit AJAX to Jose Luis
    fetch("https://formsubmit.co/ajax/Joseluis.perezaguirre@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `Nuevo Lead Landing: ${formData.name}`,
            Nombre: formData.name,
            WhatsApp: formData.phone,
            Correo: formData.email,
            Necesidad: formData.need
        })
    }).then(res => console.log("Lead guardado")).catch(err => console.error(err));

    // 2. Immediate transparent redirect to WhatsApp for the customer
    const encodedMessage = encodeURIComponent(`Hola, soy ${formData.name}. Necesito proteger: ${formData.need}. Mi correo es: ${formData.email} y mi número es: ${formData.phone}`);
    window.open(`https://wa.me/528120295749?text=${encodedMessage}`, '_blank');

    // 3. Reset form state after a short delay
    setTimeout(() => setIsSubmitting(false), 3000);
  };

  return (
    <footer style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0 3rem 0', color: 'var(--color-primary)' }}>
      
      {/* Background Graphic Strategy */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)' }} />
        {/* Glow Spheres */}
        <div style={{ position: 'absolute', right: '-15%', top: '10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(22, 163, 74, 0.05) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', left: '-5%', bottom: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 45, 114, 0.05) 0%, transparent 70%)', borderRadius: '50%' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div className="grid-2" style={{ gap: '4rem', marginBottom: '6rem', alignItems: 'center' }}>
          
          <div>
            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(0, 45, 114, 0.05)', border: '1px solid rgba(0, 45, 114, 0.1)', borderRadius: '24px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>
              Atención Inmediata
            </div>
            <h2 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
              No dejes tu seguridad para <span style={{ color: 'var(--color-accent)' }}>después del incidente.</span>
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--color-text-muted)' }}>
              Habla directamente con un ingeniero experto. Sin intermediarios molestos, obteniendo un trato amable, honesto y un diagnóstico claro.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '3rem', padding: '1.5rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid rgba(0,45,114,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(22, 163, 74, 0.1)', border: '1px solid rgba(22, 163, 74, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.2rem', fontWeight: 600 }}>Línea Directa Monterrey</span>
                <a href="tel:+528120295749" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-brand-blue)', textDecoration: 'none' }}>81 2029 5749</a>
              </div>
            </div>
          </div>

          <div>
            <div className="glass-panel" style={{ padding: '3rem', background: '#FFFFFF', border: '1px solid rgba(0,45,114,0.08)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)' }}>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.8rem', color: 'var(--color-brand-blue)' }}>Pide tu Cotización</h3>
                <p style={{ color: '#64748B', margin: 0, fontSize: '0.95rem' }}>Ingresa tus datos y hablemos hoy mismo.</p>
              </div>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="formName" style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      Nombre Completo
                    </label>
                    <input 
                      id="formName"
                      type="text" 
                      required
                      style={{ background: 'rgba(248,250,252,0.8)', border: '1px solid rgba(0,45,114,0.1)', padding: '1rem', borderRadius: '8px', color: '#334155', fontSize: '1rem', outline: 'none', transition: 'all 0.3s' }}
                      onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(22,163,74,0.2)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(0,45,114,0.1)'; e.target.style.boxShadow = 'none'; }}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 min(100%, 200px)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label htmlFor="formPhone" style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Número Celular (WhatsApp)
                      </label>
                      <input 
                        id="formPhone"
                        type="tel" 
                        required
                        style={{ background: 'rgba(248,250,252,0.8)', border: '1px solid rgba(0,45,114,0.1)', padding: '1rem', borderRadius: '8px', color: '#334155', fontSize: '1rem', outline: 'none', transition: 'all 0.3s' }}
                        onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(22,163,74,0.2)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(0,45,114,0.1)'; e.target.style.boxShadow = 'none'; }}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div style={{ flex: '1 1 min(100%, 200px)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label htmlFor="formEmail" style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Correo Corporativo
                      </label>
                      <input 
                        id="formEmail"
                        type="email" 
                        required
                        style={{ background: 'rgba(248,250,252,0.8)', border: '1px solid rgba(0,45,114,0.1)', padding: '1rem', borderRadius: '8px', color: '#334155', fontSize: '1rem', outline: 'none', transition: 'all 0.3s' }}
                        onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(22,163,74,0.2)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(0,45,114,0.1)'; e.target.style.boxShadow = 'none'; }}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="formNeed" style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                      ¿Qué necesitas proteger hoy?
                    </label>
                    <input 
                      id="formNeed"
                      type="text" 
                      placeholder="Ej. Quiero cotizar unas cámaras para mi bodega..."
                      required
                      style={{ background: 'rgba(248,250,252,0.8)', border: '1px solid rgba(0,45,114,0.1)', padding: '1rem', borderRadius: '8px', color: '#334155', fontSize: '1rem', outline: 'none', transition: 'all 0.3s' }}
                      onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(22,163,74,0.2)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(0,45,114,0.1)'; e.target.style.boxShadow = 'none'; }}
                      onChange={e => setFormData({...formData, need: e.target.value})}
                    />
                  </div>

                  <div>
                    <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ marginTop: '1.5rem', width: '100%', padding: '1.2rem', fontSize: '1.1rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                      {isSubmitting ? 'Procesando...' : 'Iniciar Diálogo Experto'}
                    </button>
                    <div style={{ textAlign: 'center', marginTop: '0.8rem', fontSize: '0.85rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      Privacidad garantizada. No enviamos spam ni compartimos tus datos.
                    </div>
                  </div>
                </form>
            </div>
          </div>

        </div>

        {/* Corporate Footer Grid */}
        <div style={{ borderTop: '1px solid rgba(0,45,114,0.1)', paddingTop: '4rem', marginTop: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            
            {/* Column 1: Sitemap */}
            <div>
              <h4 style={{ color: 'var(--color-brand-blue)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 800 }}>Navegación</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><a href="#soluciones" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='var(--color-accent)'} onMouseOut={e=>e.target.style.color='#64748B'}>Soluciones Integrales</a></li>
                <li><a href="#catalogo" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='var(--color-accent)'} onMouseOut={e=>e.target.style.color='#64748B'}>Hardware y Marcas</a></li>
                <li><a href="#scanner" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='var(--color-accent)'} onMouseOut={e=>e.target.style.color='#64748B'}>Diagnóstico de Riesgo</a></li>
                <li><a href="#mantenimiento" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='var(--color-accent)'} onMouseOut={e=>e.target.style.color='#64748B'}>Mantenimiento B2B</a></li>
              </ul>
            </div>

            {/* Column 2: Contacto */}
            <div>
              <h4 style={{ color: 'var(--color-brand-blue)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 800 }}>Contacto</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <a href="tel:+528120295749" style={{ color: '#64748B', textDecoration: 'none', fontWeight: 600 }}>81 2029 5749</a>
                </li>
                <li style={{ color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <a href="mailto:Joseluis.perezaguirre@gmail.com" style={{ color: '#64748B', textDecoration: 'none' }}>Asistencia Técnica</a>
                </li>
                <li style={{ color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Monterrey, N.L. México
                </li>
              </ul>
            </div>

            {/* Column 3: Legal & Privacidad */}
            <div>
              <h4 style={{ color: 'var(--color-brand-blue)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 800 }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><a href="#aviso-privacidad" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='var(--color-brand-blue)'} onMouseOut={e=>e.target.style.color='#64748B'}>Aviso de Privacidad</a></li>
                <li><a href="#terminos" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='var(--color-brand-blue)'} onMouseOut={e=>e.target.style.color='#64748B'}>Términos y Condiciones</a></li>
              </ul>
            </div>

          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0,45,114,0.1)', paddingTop: '2rem', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ height: '35px', overflow: 'visible', display: 'flex', alignItems: 'center' }}>
                <img src="/shield-icon.png" alt="Elite Seguridad Seal" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
              </div>
              <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>© {new Date().getFullYear()} Elite Seguridad Corporativa. | Desarrollado por <a href="https://www.persuasivo.mx" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Persuasivo MKT</a></p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://www.facebook.com/share/17mZre6UKs/?mibextid=wwXIfr" target="_blank" rel="noreferrer" style={{ background: 'rgba(0,45,114,0.05)', padding: '0.5rem', borderRadius: '50%', color: 'var(--color-brand-blue)', transition: 'all 0.3s' }} onMouseOver={e=>{e.currentTarget.style.background='var(--color-accent)'; e.currentTarget.style.color='#FFF';}} onMouseOut={e=>{e.currentTarget.style.background='rgba(0,45,114,0.05)'; e.currentTarget.style.color='var(--color-brand-blue)';}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/elite.seguridad.mty?igsh=MW84eWFqYWFobXhwcg==" target="_blank" rel="noreferrer" style={{ background: 'rgba(0,45,114,0.05)', padding: '0.5rem', borderRadius: '50%', color: 'var(--color-brand-blue)', transition: 'all 0.3s' }} onMouseOver={e=>{e.currentTarget.style.background='var(--color-accent)'; e.currentTarget.style.color='#FFF';}} onMouseOut={e=>{e.currentTarget.style.background='rgba(0,45,114,0.05)'; e.currentTarget.style.color='var(--color-brand-blue)';}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
