import WhatsAppIcon from './icons/WhatsAppIcon';

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/573138623258"
    aria-label="WhatsApp"
    className="fixed bottom-8 right-8 w-16 h-16 bg-whatsapp text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all z-[100] group"
  >
    <WhatsAppIcon size={32} />
    <span className="absolute right-full mr-4 bg-surface-container-high text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
      ¿Cómo podemos ayudarte?
    </span>
  </a>
);

export default FloatingWhatsApp;
