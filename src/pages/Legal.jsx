export default function Legal({ type }) {
  const isPrivacy = type === 'aviso';

  return (
    <section className="section-py relative" style={{ background: '#FFFFFF', minHeight: '80vh', paddingTop: '140px', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ marginBottom: '3rem' }}>
          <a href="#" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.9rem', marginBottom: '2rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Volver al Inicio
          </a>
          
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>
            {isPrivacy ? "Aviso de Privacidad" : "Términos y Condiciones"}
          </h1>
          <p style={{ color: '#64748B', fontSize: '1rem' }}>
            Última actualización: {new Date().toLocaleDateString('es-MX', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div style={{ color: 'var(--color-text-main)', fontSize: '1.05rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {isPrivacy ? (
            <>
              <p>En <strong>Elite Seguridad Monterrey</strong> valoramos su confianza y estamos estrictamente comprometidos con la protección de sus datos personales, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).</p>
              
              <h3 style={{ color: 'var(--color-brand-blue)', marginTop: '2rem', fontSize: '1.4rem' }}>1. Información Recabada</h3>
              <p>Recopilamos información personal única que usted nos provee voluntariamente a través de formularios de contacto, llamadas telefónicas y herramientas de diagnóstico. Dicha información incluye, pero no está limitada a: Nombre completo, correo electrónico, número telefónico y las características de infraestructura o requerimientos técnicos de su propiedad o corporativo.</p>

              <h3 style={{ color: 'var(--color-brand-blue)', marginTop: '2rem', fontSize: '1.4rem' }}>2. Tratamiento y Uso de sus Datos</h3>
              <p>Los datos solicitados son analizados estrictamente para fines logísticos y comerciales, incluyendo:</p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Generación de diagnósticos de seguridad y arquitecturas viables.</li>
                <li>Envío de cotizaciones y propuestas técnicas por correo electrónico o WhatsApp.</li>
                <li>Agendamiento de citas de implementación, instalación o levantamiento físico.</li>
                <li>Seguimiento posventa, facturación y mantenimiento agendado.</li>
              </ul>
              
              <h3 style={{ color: 'var(--color-brand-blue)', marginTop: '2rem', fontSize: '1.4rem' }}>3. Confidencialidad de Monitoreo y Video</h3>
              <p>Dada la naturaleza crítica de nuestra industria, garantizamos a nivel contractual que toda credencial, IP pública, código de acceso o mapeo de red generados durante la instalación de Sistemas de Videovigilancia y Control de Acceso le pertenece 100% al cliente final una vez concluido y entregado el trabajo. Elite Seguridad no almacena claves directas del cliente a menos que se requiera exclusivamente para la ejecución de pólizas activas de mantenimiento.</p>

              <h3 style={{ color: 'var(--color-brand-blue)', marginTop: '2rem', fontSize: '1.4rem' }}>4. Derechos ARCO</h3>
              <p>En cualquier momento usted mantiene el derecho absoluto de <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> (Derechos ARCO) respecto al manejo que damos de sus datos. Este derecho puede ejercerse poniéndose en contacto con nuestra área administrativa al correo que indicamos en el pie de página principal.</p>

            </>
          ) : (
            <>
              <p>El uso del sitio web y los servicios de <strong>Elite Seguridad Monterrey</strong> se rige bajo los siguientes Términos y Condiciones operativos y comerciales. Al solicitarnos un servicio diagnóstico o agendar una cita técnica, el Usuario acepta los puntos expuestos a continuación.</p>

              <h3 style={{ color: 'var(--color-brand-blue)', marginTop: '2rem', fontSize: '1.4rem' }}>1. Diagnósticos Técnicos y Modificaciones de Entorno</h3>
              <p>El componente "Simulador" o Diagnóstico ofrecido en nuestra plataforma Web tiene un objetivo consultivo y analítico para proyectar una solución base. Elite Seguridad Monterrey se reserva el derecho de realizar modificaciones al proyecto final únicamente si tras el "levantamiento físico" en sitio (Bodega, Oficina, Residencia) el ingeniero detecta barreras arquitectónicas o requerimientos ocultos que necesiten cambiar los equipos sugeridos.</p>

              <h3 style={{ color: 'var(--color-brand-blue)', marginTop: '2rem', fontSize: '1.4rem' }}>2. Propiedad e Integralidad de Equipos</h3>
              <p>Al ser distribuidores oficiales de marcas autorizadas globales como Hikvision, Ezviz y Tp-Link, todos los equipos vendidos pasan a ser propiedad exclusiva del cliente una vez liquidado el pago total de la implementación o hardware.</p>

              <h3 style={{ color: 'var(--color-brand-blue)', marginTop: '2rem', fontSize: '1.4rem' }}>3. Limitaciones de Responsabilidad</h3>
              <p>Si bien nuestros Sistemas de Circuito Cerrado y Protección Perimetral están orientados a mitigar dramáticamente el porcentaje de riesgo y facilitar evidencia legal mediante la detección, registro e interrupción, Elite Seguridad provee Hardware e Integración Técnica, por lo que no puede actuar como seguro en contra de siniestros y no asume pólizas de responsabilidad o indemnización patrimonial directa por intrusiones externas en el área de protección.</p>
              
              <h3 style={{ color: 'var(--color-brand-blue)', marginTop: '2rem', fontSize: '1.4rem' }}>4. Mantenimiento y Modificaciones de Terceros</h3>
              <p>Cualquier servicio de mantenimiento preventivo o correctivo estará sujeto a las condiciones pactadas al momento de la adquisición. Las alteraciones físicas, de cableado o de configuración lógica en la infraestructura instalada realizadas por el cliente o terceros deslindan automáticamente a Elite Seguridad Monterrey de la garantía directa sobre fallos en el ecosistema.</p>
            </>
          )}

        </div>
      </div>
    </section>
  );
}
