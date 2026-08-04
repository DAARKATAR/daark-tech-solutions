import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const PLANS = [
  {
    tag: 'Página Única',
    title: 'Landing Page',
    description: 'Convierte visitas en clientes desde el primer clic.',
    delivery: 'Entrega en 5–7 días',
  },
  {
    tag: '4–6 Páginas',
    title: 'Web Básica',
    description: 'Muestra tus servicios, historia y contacto en un solo lugar.',
    delivery: 'Entrega en 1–2 semanas',
  },
  {
    tag: 'Multi-página',
    title: 'Web Empresarial',
    description: 'Presencia robusta para negocios en crecimiento.',
    delivery: 'Entrega en 2–4 semanas',
  },
  {
    tag: 'E-commerce',
    title: 'Tienda Online',
    description: 'Vende tus productos las 24 horas, sin horarios.',
    delivery: 'Entrega en 3–5 semanas',
    recommended: true,
  },
];

const PlansSection = () => {
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
    <section id="plans" className="px-gutter py-section-gap" ref={sectionRef}>
      <div className="max-w-container-max mx-auto">
        <div className="reveal mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-headline-md mb-4 text-white">Nuestros Planes</h2>
          <p className="text-body-md text-on-surface-variant">
            Elige el nivel de impacto que tu negocio necesita hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`reveal glass-card p-8 rounded-xl flex flex-col justify-between group relative overflow-hidden ${
                plan.recommended ? 'ring-2 ring-primary/40' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-on-primary text-label-caps rounded-full">
                  RECOMENDADO
                </div>
              )}
              <div>
                <span className="text-label-caps text-primary mb-2 block tracking-widest uppercase">
                  {plan.tag}
                </span>
                <h3 className="text-headline-sm mb-4 text-white">{plan.title}</h3>
                <p className="text-body-md text-on-surface-variant mb-6">{plan.description}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span
                  className={`px-4 py-2 rounded-full text-label-caps ${
                    plan.recommended
                      ? 'bg-primary-container text-on-primary-container'
                      : 'bg-surface-container-highest text-white'
                  }`}
                >
                  {plan.delivery}
                </span>
                <ArrowRight
                  size={20}
                  className="text-primary group-hover:translate-x-2 transition-transform"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-gutter glass-card p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-label-caps text-primary mb-2 block tracking-widest uppercase">
              A tu medida
            </span>
            <h3 className="text-headline-sm md:text-headline-md mb-4 text-white">
              Sistema Web Personalizado
            </h3>
            <p className="text-body-lg text-on-surface-variant">
              Soluciones digitales diseñadas a la medida de tu operación por DAARK TECH SOLUTIONS.
            </p>
          </div>
          <a
            href="https://wa.me/573138623258"
            className="w-full md:w-auto px-10 py-4 border border-primary/50 text-primary hover:bg-primary hover:text-on-primary text-label-caps uppercase tracking-widest rounded-xl transition-all text-center"
          >
            Según Proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
