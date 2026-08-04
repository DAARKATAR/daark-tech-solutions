import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section ref={heroRef} className="relative px-gutter pt-40 pb-24 md:pb-32 overflow-hidden">
      <div className="bg-mesh" />
      <div className="max-w-container-max mx-auto flex flex-col items-center text-center relative z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" />

        <span className="reveal inline-block px-4 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-label-caps tracking-widest uppercase">
          Desarrollo Web Premium
        </span>

        <h1 className="reveal text-headline-lg-mobile md:text-headline-lg mb-6 bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent max-w-4xl">
          Tu web actual te está costando clientes. El futuro es hoy.
        </h1>

        <p className="reveal text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
          En DAARK TECH SOLUTIONS diseñamos y desarrollamos sitios web de alto impacto con
          arquitectura moderna y optimización SEO de punta, para convertir tus visitas en clientes.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a
            href="https://wa.me/573138623258"
            className="w-full sm:w-auto px-8 py-4 premium-gradient text-white text-headline-sm rounded-xl flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Contactar por WhatsApp
          </a>
          <a
            href="#plans"
            className="w-full sm:w-auto px-8 py-4 border border-outline/30 text-on-surface text-headline-sm rounded-xl hover:bg-white/5 transition-all"
          >
            Ver Planes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
