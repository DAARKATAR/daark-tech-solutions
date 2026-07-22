import { useEffect, useRef } from 'react';
import { Gauge, Smartphone, ShieldCheck } from 'lucide-react';

const FEATURES = [
  {
    icon: Gauge,
    title: 'Alta Velocidad',
    description: 'Optimizamos cada línea de código para un rendimiento superior.',
  },
  {
    icon: Smartphone,
    title: '100% Responsivo',
    description: 'Tu sitio se verá perfecto en cualquier dispositivo o pantalla.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguro y Robusto',
    description: 'Implementamos los más altos estándares de seguridad web.',
  },
];

const WhyUs = () => {
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
    <section className="px-gutter py-section-gap" ref={sectionRef}>
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div key={title} className="reveal text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon className="text-primary" size={32} />
            </div>
            <h4 className="text-headline-sm mb-2 text-white">{title}</h4>
            <p className="text-body-md text-on-surface-variant max-w-xs mx-auto">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
