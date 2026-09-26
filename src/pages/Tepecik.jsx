import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Tepecik() {
  return (
    <div className="bg-slate-50 min-h-screen font-inter flex flex-col">
      <Navbar />
      
      {/* İÇERİK ALANI */}
      <div className="flex-grow flex items-center justify-center px-4 py-24 md:py-32">
        
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-16 text-center border-t-4 border-orange-500 relative overflow-hidden">
          
          {/* Arka plan deseni (Hafif bir doku katmak için) */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 text-slate-50 opacity-50 pointer-events-none">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
            </svg>
          </div>

          <div className="relative z-10">
            {/* İkon: İnşaat / Yapım Aşamasında (Pulse animasyonu ile dikkat çeker) */}
            <div className="w-24 h-24 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-8 animate-pulse">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            
            {/* Başlık ve Metin */}
            <h2 className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-3">
              Tepecik Projesi
            </h2>
            <h1 className="text-4xl md:text-5xl font-black font-montserrat text-slate-900 mb-6 drop-shadow-sm">
              Çok Yakında!
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Projemizin inşaatı ve örnek daire hazırlıkları hızla devam ediyor. 
              Detaylı kat planları, 3D görseller ve tüm proje özellikleri çok yakında bu sayfada yer alacaktır.
            </p>
            
            {/* Geri Dönüş Butonu */}
            <Link 
              to="/#projeler" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 transition-colors rounded text-base font-bold font-inter text-white shadow-xl hover:scale-105 transform duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Projelerimize Dön
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}