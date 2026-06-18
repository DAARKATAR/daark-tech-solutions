import React, { useEffect, useRef } from 'react';
import { ExternalLink, TrendingUp, Users } from 'lucide-react';
import autolookImg from '../assets/autolook-full.png';

const SuccessCases = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="success-case" className="section bg-secondary" ref={sectionRef}>
      <div className="container">
        <div className="success-header reveal">
          <h2>Nuestros Casos de Éxito</h2>
          <p>Resultados reales, arquitecturas modernas y negocios escalando.</p>
        </div>

        <div className="case-card reveal">
          <div className="case-content">
            <div className="case-badge">E-Commerce & Catálogo</div>
            <h3>AutoLook & MotoLook</h3>
            <p className="case-desc">
              Transformamos la presencia digital de AutoLook & MotoLook, creando un catálogo ultrarrápido y responsivo para repuestos y lujos automotrices. 
              El resultado es una plataforma de alto rendimiento que mejora la experiencia del usuario y facilita el contacto directo.
            </p>
            
            <div className="case-metrics">
              <div className="metric">
                <TrendingUp size={24} className="metric-icon" />
                <div>
                  <strong>+150%</strong>
                  <span>Tráfico Orgánico</span>
                </div>
              </div>
              <div className="metric">
                <Users size={24} className="metric-icon" />
                <div>
                  <strong>Interacción</strong>
                  <span>Lead Generation Directo</span>
                </div>
              </div>
            </div>

            <a 
              href="https://autolook-one.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary case-btn"
            >
              Ver Proyecto en Vivo <ExternalLink size={18} style={{marginLeft: '8px'}}/>
            </a>
          </div>
          
          <div className="case-visual">
            <div className="browser-mockup">
              <div className="browser-header">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <div className="browser-url">autolook-one.vercel.app</div>
              </div>
              <div className="browser-body">
                <div className="scroll-image-container">
                  <img src={autolookImg} alt="AutoLook Full Page" className="scroll-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .success-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .success-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .case-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          background: #FFFFFF;
          border-radius: 20px;
          padding: 4rem;
          box-shadow: 0 20px 40px rgba(17, 17, 21, 0.05);
          align-items: center;
        }

        .case-badge {
          display: inline-block;
          background: rgba(138, 43, 226, 0.1);
          color: var(--color-accent-primary);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .case-content h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .case-desc {
          font-size: 1.125rem;
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }

        .case-metrics {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .metric {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .metric-icon {
          color: var(--color-accent-primary);
        }

        .metric strong {
          display: block;
          font-size: 1.25rem;
          color: var(--color-text-primary);
        }

        .metric span {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
        }

        .browser-mockup {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border: 1px solid #E2E8F0;
        }

        .browser-header {
          background: #F1F5F9;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .browser-header .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #CBD5E1;
        }

        .browser-url {
          margin-left: 1rem;
          background: #FFFFFF;
          padding: 0.25rem 1rem;
          border-radius: 4px;
          font-size: 0.75rem;
          color: #64748B;
          flex: 1;
          text-align: center;
        }

        .browser-body {
          background: #FFFFFF;
          height: 350px;
          padding: 0;
          overflow: hidden;
          position: relative;
        }

        .scroll-image-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }

        .scroll-image {
          width: 100%;
          height: auto;
          position: absolute;
          top: 0;
          left: 0;
          transition: transform 8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .browser-mockup:hover .scroll-image {
          transform: translateY(calc(-100% + 350px));
        }

        @media (max-width: 992px) {
          .case-card {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessCases;
