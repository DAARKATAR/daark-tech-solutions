import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    solution: 'nueva',
    aesthetics: '',
    description: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Configura tu número de WhatsApp aquí (con código de país, ej: 57 para Colombia)
    const phoneNumber = "573112634729"; 
    
    const message = `Hola DAARK TECH SOLUTIONS! 🚀\n\nAcabo de llenar el formulario rápido:\n\n*Nombre/Empresa:* ${formData.name}\n*Email:* ${formData.email}\n*Mi Teléfono:* ${formData.phone}\n*Solución:* ${formData.solution === 'nueva' ? 'Web desde cero' : 'Modernizar web actual'}\n*Idea de Estética:* ${formData.aesthetics || 'No especificada'}\n\n*Idea General:* ${formData.description}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
    
    setStatus('success');
    setFormData({
      name: '', email: '', phone: '', solution: 'nueva', aesthetics: '', description: ''
    });
  };

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container contact-container">
        <div className="contact-info reveal">
          <h2>Transforma tu visión en una realidad digital.</h2>
          <p>Agenda un diagnóstico gratuito y descubre cómo podemos escalar tus ventas y autoridad en línea mediante diseño e ingeniería premium.</p>
        </div>
        
        <div className="contact-form-wrapper reveal">
          <div className="form-card">
            <h3 className="form-title">Cuéntanos tu proyecto <span className="highlight">en 1 minuto</span></h3>
            
            {status === 'success' ? (
              <div className="success-message">
                <CheckCircle size={48} color="var(--color-accent-primary)" />
                <h4>¡Te estamos redirigiendo a WhatsApp!</h4>
                <p>Tu mensaje ya está listo para ser enviado a nuestro equipo.</p>
                <button className="btn-primary mt-4" onClick={() => setStatus('idle')}>Volver al formulario</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field" 
                    placeholder="Nombre o Nombre de Empresa" 
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field" 
                      placeholder="Correo Electrónico" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field" 
                      placeholder="WhatsApp o Teléfono" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="field-label">¿Qué solución necesitas?</label>
                  <div className="segment-container">
                    <div className="segment-option">
                      <input 
                        type="radio" 
                        id="sol-nueva" 
                        name="solution" 
                        value="nueva"
                        checked={formData.solution === 'nueva'}
                        onChange={handleChange}
                      />
                      <label htmlFor="sol-nueva" className="segment-label">Necesito una web desde cero</label>
                    </div>
                    <div className="segment-option">
                      <input 
                        type="radio" 
                        id="sol-mod" 
                        name="solution" 
                        value="modernizar"
                        checked={formData.solution === 'modernizar'}
                        onChange={handleChange}
                      />
                      <label htmlFor="sol-mod" className="segment-label">Quiero modernizar mi web actual</label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <input 
                    type="text" 
                    name="aesthetics"
                    value={formData.aesthetics}
                    onChange={handleChange}
                    className="input-field" 
                    placeholder="Ej: Me gusta el azul marino con blanco, limpio..." 
                  />
                </div>

                <div className="form-group">
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="input-field textarea" 
                    placeholder="Cuéntanos brevemente tu idea general..."
                    rows="4"
                    required
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="error-message">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</div>
                )}

                <button type="submit" className="btn-primary submit-btn" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Idea & Agendar Diagnóstico Gratis'}
                  {!status && <Send size={20} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: center;
        }

        .contact-info h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .contact-info p {
          font-size: 1.125rem;
        }

        .form-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .field-label {
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 1.25rem;
          font-size: 1.125rem;
          display: flex;
          gap: 0.75rem;
        }

        .success-message {
          text-align: center;
          padding: 2rem 0;
        }

        .success-message h4 {
          margin: 1rem 0 0.5rem;
          font-size: 1.5rem;
        }

        .success-message p {
          margin-bottom: 2rem;
        }

        .error-message {
          color: #FF5F56;
          margin-bottom: 1rem;
          text-align: center;
          font-weight: 500;
        }

        .mt-4 {
          margin-top: 1rem;
        }

        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          .contact-info {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
