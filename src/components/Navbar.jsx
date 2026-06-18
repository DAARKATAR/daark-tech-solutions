import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="nav-logo-img" />
        </div>
        
        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
          <a href="#success-case" onClick={() => setMobileMenuOpen(false)}>Casos de Éxito</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
          <a href="#contact" className="btn-primary nav-cta" onClick={() => setMobileMenuOpen(false)}>Obtener Diagnóstico Gratis</a>
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          transition: all 0.3s ease;
          padding: 1.5rem 0;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 1rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          height: 40px;
          display: flex;
          align-items: center;
        }

        .nav-logo-img {
          height: 200px; /* Mucho más grande para compensar el espacio en blanco de la imagen */
          margin-left: -50px;
          margin-top: -10px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .nav-logo-img:hover {
          transform: scale(1.05);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-links a {
          font-weight: 500;
          color: var(--color-text-secondary);
          transition: color 0.2s ease;
        }

        .nav-links a:not(.btn-primary):hover {
          color: var(--color-accent-primary);
        }

        .nav-links a.btn-primary {
          color: #FFFFFF;
        }

        .nav-cta {
          padding: 0.75rem 1.5rem;
          font-size: 0.95rem;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-primary);
        }

        @media (max-width: 992px) {
          .mobile-menu-btn {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(12px);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            transition: clip-path 0.4s ease-in-out;
          }

          .nav-links.active {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
