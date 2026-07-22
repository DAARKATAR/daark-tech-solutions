import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoMark from '../assets/logo-mockup-icon.png';

const NAV_LINKS = [
  { href: '#services', label: 'Servicios' },
  { href: '#plans', label: 'Planes' },
  { href: '#success-case', label: 'Casos de Éxito' },
  { href: '#contact', label: 'Contacto' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-container-max mx-auto px-gutter py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={logoMark}
            alt="Logotipo oficial de DAARK TECH SOLUTIONS"
            className="h-10 w-auto object-contain"
          />
          <span className="text-headline-sm font-bold text-primary">DAARK TECH SOLUTIONS</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/573112634729"
          className="hidden md:inline-block px-6 py-2 premium-gradient text-white text-label-caps uppercase tracking-widest rounded-lg hover:opacity-90 active:scale-95 transition-all"
        >
          Empezar
        </a>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col gap-6 px-gutter py-8 bg-surface border-t border-white/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/573112634729"
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-3 premium-gradient text-white text-center text-label-caps uppercase tracking-widest rounded-lg"
          >
            Empezar
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
