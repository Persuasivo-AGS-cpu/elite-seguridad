import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import Mechanism from './components/Mechanism';
import VisualEvidence from './components/VisualEvidence';
import Products from './components/Products';
import Maintenance from './components/Maintenance';
import Guarantee from './components/Guarantee';
import Authority from './components/Authority';
import FaqBlock from './components/FaqBlock';
import ConversionFooter from './components/ConversionFooter';
import Navbar from './components/Navbar';
import Legal from './pages/Legal';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0); 
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (currentHash === '#aviso-privacidad' || currentHash === '#terminos') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.animationName = "fadeUp";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Refresh observer target list because we added dynamic components
    const elements = document.querySelectorAll('.animate-fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentHash]);

  const isPrivacyBlock = currentHash === '#aviso-privacidad';
  const isTermsBlock = currentHash === '#terminos';
  const isLegalView = isPrivacyBlock || isTermsBlock;

  return (
    <>
      <Navbar />
      
      {isLegalView ? (
        <Legal type={isPrivacyBlock ? 'aviso' : 'terminos'} />
      ) : (
        <main>
          {/* Framework 11 Steps: ChatGPT Direct Response Masterpiece */}
          
          {/* 1. Hero */}
          <Hero />
          
          {/* 2. Social Proof */}
          <TrustBar />
          
          {/* 3. The Problem (Pain Points) */}
          <PainPoints />
          
          {/* 4. Value Proposition */}
          <Solutions />
          
          {/* 5. How it Works (3 Steps) */}
          <Mechanism />
          
          {/* 6. Demonstration / Visceral Evidence */}
          <VisualEvidence />
          
          {/* 7. Product Oferta */}
          <Products />
          
          {/* Extension: Upsell / Added value */}
          <Maintenance />
          
          {/* 8. Risk Reversal (Guarantee) */}
          <Guarantee />
          
          {/* 9. Authority */}
          <Authority />
          
          {/* 10. Objections (FAQ) */}
          <FaqBlock />
          
        </main>
      )}

      {/* 11. Final CTA */}
      <ConversionFooter />
    </>
  );
}

export default App;
