import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PlansSection from './components/PlansSection';
import WhyUs from './components/WhyUs';
import SuccessCases from './components/SuccessCases';
import ContactForm from './components/ContactForm';
import CtaSection from './components/CtaSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import logoMark from './assets/logo-mockup-icon.png';

function App() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-mesh" />
      <Navbar />

      <main>
        <Hero />
        <Services />
        <PlansSection />
        <WhyUs />
        <SuccessCases />
        <ContactForm />
        <CtaSection />
      </main>

      <footer className="w-full bg-surface-container-low border-t border-white/10">
        <div className="max-w-container-max mx-auto py-section-gap px-gutter flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <img
                src={logoMark}
                alt="Logotipo oficial de DAARK TECH SOLUTIONS"
                className="h-10 w-auto object-contain"
              />
              <span className="text-headline-sm font-bold text-primary">DAARK TECH SOLUTIONS</span>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-xs">
              Elevando el estándar del desarrollo web corporativo.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="#services" className="text-label-caps text-on-surface-variant hover:text-secondary transition-colors">
              Servicios
            </a>
            <a href="#plans" className="text-label-caps text-on-surface-variant hover:text-secondary transition-colors">
              Planes
            </a>
            <a href="#contact" className="text-label-caps text-on-surface-variant hover:text-secondary transition-colors">
              Contacto
            </a>
          </div>

          <div className="text-on-surface-variant text-label-caps opacity-80 text-center">
            &copy; {new Date().getFullYear()} DAARK TECH SOLUTIONS. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}

export default App;
