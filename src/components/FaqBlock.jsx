import React, { useState, useEffect } from 'react';

export default function FaqBlock() {
  const [openIdx, setOpenIdx] = useState(0); // First open by default

  const faqs = [
    {
      q: "¿Cuánto tiempo toma la instalación de un sistema?",
      a: "Para la mayoría de residencias y comercios medianos, nuestro equipo de ingeniería despliega la arquitectura completa en un solo día de trabajo (8-10 horas), dejando todo configurado y limpio."
    },
    {
      q: "¿Qué pasa si se va la luz o cortan los cables?",
      a: "Diseñamos sistemas con redundancia de energía (UPS) opcionales y ocultamiento de cableado mediante tuberías de acero (EMT). Si hay un sabotaje, el sistema sigue grabando y alertando."
    },
    {
      q: "¿Tengo que pagar una mensualidad por usar la aplicación?",
      a: "NO. A diferencia de otras agencias, la visualización en vivo desde tu smartphone (App Hik-Connect o similares) no tiene mensualidades. Pagas el hardware y la instalación una sola vez."
    },
    {
      q: "Yo compré mis propias cámaras en internet. ¿Me las instalan?",
      a: "No. Para poder garantizar nuestro trabajo a prueba de fallos y emitir nuestra garantía blindada, solo operamos con equipo de grado profesional (Hikvision, Syscom) provisto directamente por nosotros."
    }
  ];

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-jsonld';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema-jsonld');
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);

  return (
    <section className="section-py" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
          
          <div style={{ position: 'sticky', top: '100px' }}>
            <h2 className="animate-fade-up" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
              Preguntas Frecuentes
            </h2>
            <p className="animate-fade-up delay-100" style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
              Resolvemos tus dudas antes de desplegar nuestra ingeniería. Si tienes preguntas más puntuales, nuestro WhatsApp recibe tus mensajes directo.
            </p>
            <a href="https://wa.me/528120295749" target="_blank" rel="noreferrer" className="btn-secondary animate-fade-up delay-200">
              Hablar con un Ingeniero
            </a>
          </div>

          <div className="animate-fade-up delay-200">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  style={{ 
                    background: '#FFF', 
                    borderRadius: '16px', 
                    marginBottom: '1rem', 
                    padding: '1.5rem',
                    cursor: 'pointer',
                    boxShadow: isOpen ? '0 10px 25px rgba(0,0,0,0.05)' : 'none',
                    border: '1px solid rgba(0,45,114,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.1rem', margin: 0, paddingRight: '1rem', color: isOpen ? 'var(--color-brand-blue)' : 'var(--color-primary)' }}>
                      {faq.q}
                    </h3>
                    <div style={{ 
                      width: '30px', height: '30px', borderRadius: '50%', 
                      background: isOpen ? 'var(--color-brand-blue)' : '#F1F5F9',
                      color: isOpen ? '#FFF' : 'var(--color-text-main)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'all 0.3s ease'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  
                  <div style={{ 
                    maxHeight: isOpen ? '200px' : '0', 
                    overflow: 'hidden', 
                    transition: 'max-height 0.4s ease',
                    marginTop: isOpen ? '1rem' : '0'
                  }}>
                    <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
