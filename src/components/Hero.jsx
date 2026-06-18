import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import heroMockup from '../assets/hero_mockup.png';

const Hero = () => {
  const heroRef = useRef(null);

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

    const elements = heroRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container hero-container">
        <div className="hero-content reveal">
          <h1>
            Tu web actual te está costando clientes. <br/>
            <span className="highlight">El futuro es hoy.</span>
          </h1>
          <p className="hero-subtitle">
            En DAARK TECH SOLUTIONS rediseñamos tu plataforma con arquitectura moderna, 
            optimización SEO de punta y un diseño pulido que genera confianza instantánea.
          </p>
          <a href="#contact" className="btn-primary hero-cta">
            Innovar Hoy y Agendar Diagnóstico
            <ArrowRight className="btn-icon" size={20} />
          </a>
        </div>
        
        <div className="hero-visual reveal">
          <div className="image-card">
            <img src={heroMockup} alt="DAARK TECH SOLUTIONS Mockup" className="hero-img" />
            <div className="success-badge">
              <span>+300% Conversión</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 12rem 0 8rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }

        .highlight {
          color: var(--color-accent-primary);
          background: linear-gradient(to right, var(--color-accent-primary), var(--color-accent-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          max-width: 90%;
        }

        .btn-icon {
          margin-left: 0.75rem;
          transition: transform 0.2s ease;
        }

        .hero-cta:hover .btn-icon {
          transform: translateX(4px);
        }

        /* Abstract Mockup Design */
        .hero-visual {
          position: relative;
          perspective: 1000px;
        }

        .image-card {
          position: relative;
          border-radius: 16px;
          box-shadow: 0 30px 60px rgba(17, 17, 21, 0.08);
          border: 1px solid rgba(226, 232, 240, 0.8);
          transform: rotateY(-5deg) rotateX(5deg);
          transition: transform 0.5s ease;
        }

        .image-card:hover {
          transform: rotateY(0deg) rotateX(0deg) translateY(-10px);
          box-shadow: 0 40px 80px rgba(138, 43, 226, 0.15);
        }

        .hero-img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          display: block;
        }

        .success-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: #FFFFFF;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          box-shadow: 0 15px 30px rgba(138, 43, 226, 0.2);
          font-weight: 700;
          color: var(--color-accent-primary);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            margin: 0 auto 2.5rem;
          }

          .image-card {
            transform: none;
            margin: 2rem 1rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
