import React from 'react';
import { Rocket } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SuccessCases from './components/SuccessCases';
import ContactForm from './components/ContactForm';
import logo from './assets/logo.png';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <SuccessCases />
        <ContactForm />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="DAARK TECH SOLUTIONS" className="footer-logo-img" />
            </div>
            <p>&copy; {new Date().getFullYear()} DAARK TECH SOLUTIONS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style>{`
        .footer {
          background-color: var(--color-charcoal);
          color: var(--color-bg-secondary);
          padding: 3rem 0;
          text-align: center;
        }

        .footer-logo {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          overflow: visible;
        }
        
        .footer-logo-img {
          height: 250px;
          width: auto;
          filter: brightness(0) invert(1);
        }

        .footer p {
          color: var(--color-text-secondary);
        }
      `}</style>
    </div>
  );
}

export default App;
