import React, { useEffect, useRef } from 'react';
import { Code2, MonitorSmartphone, Settings } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Creación de Páginas Web desde Cero",
      description: "Desarrollo adaptativo y orientado a la conversión optimizado para todos los dispositivos. Diseñamos desde los cimientos para que tu web sea una máquina de ventas."
    },
    {
      icon: <MonitorSmartphone size={32} />,
      title: "Rediseño & Modernización Web",
      description: "Actualizando sitios web lentos y desactualizados con código moderno, velocidades ultrarrápidas y estética de alto impacto."
    },
    {
      icon: <Settings size={32} />,
      title: "Mantenimiento & Optimización",
      description: "Soporte técnico continuo, optimización de velocidad y SEO básico. Aseguramos que tu sitio esté siempre arriba, seguro y atrayendo tráfico continuo."
    }
  ];

  return (
    <section id="services" className="section bg-secondary" ref={sectionRef}>
      <div className="container">
        <div className="services-header reveal">
          <h2>Los 3 Pilares de tu Éxito Digital</h2>
          <p>Soluciones end-to-end diseñadas para escalar tu negocio.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card reveal" 
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .services-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .services-header p {
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .service-card {
          background: #FFFFFF;
          padding: 3rem 2rem;
          border-radius: 16px;
          border: 1px solid rgba(226, 232, 240, 0.5);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(to right, var(--color-accent-primary), var(--color-accent-secondary));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(17, 17, 21, 0.05);
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-icon {
          width: 64px;
          height: 64px;
          background: var(--color-bg-secondary);
          color: var(--color-accent-primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-icon {
          background: var(--color-accent-primary);
          color: #FFFFFF;
          transform: scale(1.1);
        }

        .service-card h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
