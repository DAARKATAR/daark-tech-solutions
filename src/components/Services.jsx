import { useEffect, useRef } from 'react';
import { Code2, MonitorSmartphone, Settings } from 'lucide-react';

const SERVICES = [
  {
    icon: Code2,
    title: 'Creación de Páginas Web desde Cero',
    description:
      'Desarrollo adaptativo y orientado a la conversión optimizado para todos los dispositivos. Diseñamos desde los cimientos para que tu web sea una máquina de ventas.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Rediseño & Modernización Web',
    description:
      'Actualizando sitios web lentos y desactualizados con código moderno, velocidades ultrarrápidas y estética de alto impacto.',
  },
  {
    icon: Settings,
    title: 'Mantenimiento & Optimización',
    description:
      'Soporte técnico continuo, optimización de velocidad y SEO básico. Aseguramos que tu sitio esté siempre arriba, seguro y atrayendo tráfico continuo.',
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="services" className="px-gutter py-section-gap" ref={sectionRef}>
      <div className="max-w-container-max mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-headline-md mb-4 text-white">Los 3 Pilares de tu Éxito Digital</h2>
          <p className="text-body-md text-on-surface-variant max-w-xl mx-auto">
            Soluciones end-to-end diseñadas para escalar tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {SERVICES.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="reveal glass-card p-8 rounded-xl group"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                <Icon className="text-primary" size={32} />
              </div>
              <h3 className="text-headline-sm mb-3 text-white">{title}</h3>
              <p className="text-body-md text-on-surface-variant">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
