import { useEffect, useRef } from 'react';
import { ExternalLink, TrendingUp, Users } from 'lucide-react';
import autolookImg from '../assets/autolook-full.png';

const SuccessCases = () => {
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
    <section id="success-case" className="px-gutter py-section-gap" ref={sectionRef}>
      <div className="max-w-container-max mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-headline-md mb-4 text-white">Nuestros Casos de Éxito</h2>
          <p className="text-body-md text-on-surface-variant">
            Resultados reales, arquitecturas modernas y negocios escalando.
          </p>
        </div>

        <div className="reveal glass-card rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary/10 text-primary text-label-caps px-4 py-2 rounded-full mb-6">
              E-Commerce & Catálogo
            </span>
            <h3 className="text-headline-md text-white mb-6">AutoLook & MotoLook</h3>
            <p className="text-body-lg text-on-surface-variant mb-10">
              Transformamos la presencia digital de AutoLook & MotoLook, creando un catálogo
              ultrarrápido y responsivo para repuestos y lujos automotrices. El resultado es una
              plataforma de alto rendimiento que mejora la experiencia del usuario y facilita el
              contacto directo.
            </p>

            <div className="flex gap-8 mb-10">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-primary" size={24} />
                <div>
                  <strong className="block text-white text-headline-sm">+150%</strong>
                  <span className="text-body-md text-on-surface-variant">Tráfico Orgánico</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-primary" size={24} />
                <div>
                  <strong className="block text-white text-headline-sm">Interacción</strong>
                  <span className="text-body-md text-on-surface-variant">Lead Generation Directo</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.mbautolook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 premium-gradient text-white text-headline-sm rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Ver Proyecto en Vivo <ExternalLink size={18} className="ml-2" />
            </a>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10">
            <div className="bg-surface-container-high px-4 py-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
              <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
              <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
              <div className="ml-4 flex-1 bg-surface-container-lowest text-on-surface-variant text-xs text-center rounded px-4 py-1">
www.mbautolook.com
              </div>
            </div>
            <div className="relative h-[350px] overflow-hidden bg-surface-container-lowest group">
              <img
                src={autolookImg}
                alt="Caso de éxito de diseño web premium AutoLook"
                className="absolute top-0 left-0 w-full h-auto transition-transform duration-[8000ms] ease-out group-hover:-translate-y-[calc(100%-350px)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
