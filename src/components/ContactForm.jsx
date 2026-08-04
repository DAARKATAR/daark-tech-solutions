import { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    solution: 'nueva',
    aesthetics: '',
    description: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    const phoneNumber = '573138623258';
    const message = `Hola DAARK TECH SOLUTIONS! 🚀\n\nAcabo de llenar el formulario rápido:\n\n*Nombre/Empresa:* ${formData.name}\n*Email:* ${formData.email}\n*Mi Teléfono:* ${formData.phone}\n*Solución:* ${formData.solution === 'nueva' ? 'Web desde cero' : 'Modernizar web actual'}\n*Idea de Estética:* ${formData.aesthetics || 'No especificada'}\n\n*Idea General:* ${formData.description}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    setStatus('success');
    setFormData({ name: '', email: '', phone: '', solution: 'nueva', aesthetics: '', description: '' });
  };

  const inputClass =
    'w-full px-5 py-4 bg-surface-container-low border border-white/10 rounded-lg text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all';

  return (
    <section id="contact" className="px-gutter py-section-gap" ref={sectionRef}>
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-center">
        <div className="reveal text-center md:text-left max-w-lg mx-auto md:mx-0">
          <h2 className="text-headline-md text-white mb-6">
            Transforma tu visión en una realidad digital.
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Agenda un diagnóstico gratuito y descubre cómo podemos escalar tus ventas y autoridad
            en línea mediante diseño e ingeniería premium.
          </p>
        </div>

        <div className="reveal glass-card rounded-2xl p-8 md:p-12">
          <h3 className="text-headline-sm text-white text-center mb-8">
            Cuéntanos tu proyecto <span className="text-primary">en 1 minuto</span>
          </h3>

          {status === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-headline-sm text-white mb-2">¡Te estamos redirigiendo a WhatsApp!</h4>
              <p className="text-body-md text-on-surface-variant mb-6">
                Tu mensaje ya está listo para ser enviado a nuestro equipo.
              </p>
              <button
                className="px-6 py-3 premium-gradient text-white rounded-lg"
                onClick={() => setStatus('idle')}
              >
                Volver al formulario
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Nombre o Nombre de Empresa"
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Correo Electrónico"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="WhatsApp o Teléfono"
                  required
                />
              </div>

              <div>
                <label className="block mb-3 font-semibold text-on-surface">
                  ¿Qué solución necesitas?
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  {[
                    { value: 'nueva', label: 'Necesito una web desde cero' },
                    { value: 'modernizar', label: 'Quiero modernizar mi web actual' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex-1 text-center px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                        formData.solution === option.value
                          ? 'border-primary bg-primary/10 text-primary font-semibold'
                          : 'border-white/10 text-on-surface-variant'
                      }`}
                    >
                      <input
                        type="radio"
                        name="solution"
                        value={option.value}
                        checked={formData.solution === option.value}
                        onChange={handleChange}
                        className="hidden"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              <input
                type="text"
                name="aesthetics"
                value={formData.aesthetics}
                onChange={handleChange}
                className={inputClass}
                placeholder="Ej: Me gusta el azul marino con blanco, limpio..."
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`${inputClass} resize-y min-h-[120px]`}
                placeholder="Cuéntanos brevemente tu idea general..."
                rows="4"
                required
              />

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 premium-gradient text-white text-headline-sm rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-60"
              >
                {status === 'submitting' ? 'Enviando...' : 'Enviar Idea & Agendar Diagnóstico Gratis'}
                {status !== 'submitting' && <Send size={20} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
