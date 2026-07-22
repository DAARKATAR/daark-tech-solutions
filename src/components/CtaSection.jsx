import { useEffect, useRef } from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';

const CtaSection = () => {
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
      <div className="reveal max-w-4xl mx-auto glass-card p-12 rounded-3xl text-center relative overflow-hidden">
        <div className="absolute inset-0 premium-gradient opacity-5" />
        <h2 className="text-headline-lg mb-6 text-white relative z-10">
          ¿Listo para escalar tu negocio?
        </h2>
        <p className="text-body-lg text-on-surface-variant mb-10 relative z-10">
          Agenda una consultoría gratuita con DAARK TECH SOLUTIONS hoy mismo y hablemos de tu
          próximo proyecto digital.
        </p>
        <a
          href="https://wa.me/573112634729"
          className="inline-flex items-center gap-3 px-10 py-5 premium-gradient text-white text-headline-sm rounded-2xl relative z-10 hover:scale-105 transition-transform shadow-xl shadow-primary/20"
        >
          Hablar con un Experto
          <WhatsAppIcon size={22} />
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
