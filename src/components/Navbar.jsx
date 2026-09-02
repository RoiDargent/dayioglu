import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-5 px-4 md:px-8 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-xl text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logoya tıklayınca da en üste kaysın diye href="#baslangic" yapıldı */}
        <a href="#baslangic" className="text-xl font-black font-montserrat tracking-widest drop-shadow-md">
          DAYIOĞLU İNŞAAT
        </a>
        
        {/* Masaüstü Menü (Mobilde gizlenir - md:flex) */}
        <ul className="hidden md:flex space-x-8 font-semibold text-lg">
          <li><a href="#baslangic" className="hover:text-orange-400 transition-colors">Başlangıç</a></li>
          <li><a href="#hakkimizda" className="hover:text-orange-400 transition-colors">Hakkımızda</a></li>
          <li><a href="#projeler" className="hover:text-orange-400 transition-colors">Projelerimiz</a></li>
          <li><a href="#iletisim" className="hover:text-orange-400 transition-colors">İletişim</a></li>
        </ul>

        {/* Hamburger Menü Butonu (Sadece mobilde görünür - md:hidden) */}
        <button 
          className="md:hidden text-white hover:text-orange-400 focus:outline-none transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Çarpı İkonu (Menü açıkken)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger İkonu (Menü kapalıyken)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
      </div>

      {/* Mobil Açılır Menü */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-xl flex flex-col items-center py-6 space-y-6 font-semibold text-lg transition-all duration-300">
          <a href="#baslangic" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition-colors w-full text-center py-2">Başlangıç</a>
          <a href="#hakkimizda" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition-colors w-full text-center py-2">Hakkımızda</a>
          <a href="#projeler" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition-colors w-full text-center py-2">Projelerimiz</a>
          <a href="#iletisim" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition-colors w-full text-center py-2">İletişim</a>
        </div>
      )}
    </nav>
  );
}