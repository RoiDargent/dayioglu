import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SahinTowers() {

useEffect(() => {
    document.title = "Şahin Towers | Dayıoğlu İnşaat";
  }, []);
  
  const [fullScreenMedia, setFullScreenMedia] = useState(null);

  const project = {
    title: 'Şahin Towers',
    location: 'İlkadım, Kışla Mah. / Samsun',
    description: 'Modern mimarisi ve merkezi konumuyla yeni bir yaşam standardı sunuyoruz. Aile hayatına uygun, geniş peyzaj alanları ve yüksek malzeme kalitesiyle inşa edilen projemiz, konforunuz için tasarlandı.',
    video: 'images/Sahin-Towers/sahin-towers-video.mp4',
    coverImage: '/proje-kisla.jpeg',
    stats: {
      rooms: '3+1',
      netArea: '120 m²',
      grossArea: '155 m²',
      status: 'Teslimata Hazır',
    },
    features: [
      'Otopark', '7/24 Kamera', 'Yerden Isıtma', 
      'Giyinme Odası', 'Ebeveyn Banyosu', 'Çocuk Oyun Alanı', 
      'Isı ve Ses Yalıtımı', 'Kamelya'
    ],
    roomSizes: [
      { name: 'Salon', size: '31.2 m²' },
      { name: 'Mutfak', size: '13 m²' },
      { name: 'Yatak Odası', size: '15.6 m²' },
      { name: 'Çocuk Odası 1', size: '12 m²' },
      { name: 'Çocuk Odası 2', size: '10.5 m²' },
      { name: 'Banyo', size: '4.5 m²' },
      { name: 'Antre & Hol', size: '12.6 m²' },
      { name: 'Balkonlar', size: '20 m²' },
    ],
    gallery: [
      '/images/Sahin-Towers/sahin-towers-kat.jpeg',
      '/images/Sahin-Towers/sahin-towers-1.jpeg',
      '/images/Sahin-Towers/sahin-towers-2.jpeg',
      '/images/Sahin-Towers/sahin-towers-3.jpeg',
      '/images/Sahin-Towers/sahin-towers-4.jpeg',
      '/images/Sahin-Towers/sahin-towers-5.jpeg',
      '/images/Sahin-Towers/sahin-towers-6.jpeg',
      '/images/Sahin-Towers/sahin-towers-7.jpeg',
      '/images/Sahin-Towers/sahin-towers-8.jpeg',
      '/images/Sahin-Towers/sahin-towers-9.jpeg',
      '/images/Sahin-Towers/sahin-towers-10.jpeg',
      '/images/Sahin-Towers/sahin-towers-11.jpeg',
      '/images/Sahin-Towers/sahin-towers-12.jpeg',
      '/images/Sahin-Towers/sahin-towers-13.jpeg',
      '/images/Sahin-Towers/sahin-towers-14.jpeg',
      '/images/Sahin-Towers/sahin-towers-15.jpeg',
      '/images/Sahin-Towers/sahin-towers-16.jpeg',
      '/images/Sahin-Towers/sahin-towers-17.jpeg',
      '/images/Sahin-Towers/sahin-towers-18.jpeg',
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen font-inter">
      <Navbar />

      {/* 1. HERO VİDEO BÖLÜMÜ */}
      <div 
        className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden cursor-pointer group"
        onClick={() => setFullScreenMedia({ type: 'video', src: project.video })}
      >
        {/* Karartma ve üzerine gelince hafif açılma efekti */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300 z-10"></div> 
        
        {/* Play İkonu (Kullanıcıya tıklanabilir olduğunu hissettirmek için) */}
        <div className="absolute inset-0 z-15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        
        {/* Video Arkaplan */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={project.coverImage}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={project.video} type="video/mp4" />
        </video>

        {/* Video Üstü Yazılar */}
        <div className="relative z-20 text-center px-4 w-full max-w-5xl mt-16 pointer-events-none">
          <span className="text-orange-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base drop-shadow-md">
            {project.location}
          </span>
          <h1 className="text-5xl md:text-7xl font-black font-montserrat text-white mt-4 drop-shadow-xl">
            {project.title}
          </h1>
        </div>
      </div>

      {/* 2. BİLGİ KARTLARI */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 -mt-16 md:-mt-24 pointer-events-none">
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t-4 border-orange-500 pointer-events-auto">
          
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Oda Sayısı</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">{project.stats.rooms}</p>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-slate-200"></div>

          <div className="text-center md:text-left">
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Net / Brüt Alan</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">
              {project.stats.netArea} <span className="text-lg text-slate-400 font-medium">/ {project.stats.grossArea}</span>
            </p>
          </div>

          <div className="hidden md:block w-px h-12 bg-slate-200"></div>

          <div className="text-center md:text-left">
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Proje Durumu</p>
            <span className="inline-block mt-2 px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
              {project.stats.status}
            </span>
          </div>

        </div>
      </div>

      {/* 3. İÇERİK BÖLÜMÜ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold font-montserrat text-slate-900 mb-6">Proje Hakkında</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              {project.description}
            </p>

            <h3 className="text-2xl font-bold font-montserrat text-slate-900 mb-6 border-b pb-4">Bina ve Daire Özellikleri</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-slate-900 rounded-xl p-8 shadow-xl text-white sticky top-28">
              <h3 className="text-xl font-bold font-montserrat mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                </svg>
                Kat Planı Detayları
              </h3>
              
              <div className="space-y-4">
                {project.roomSizes.map((room, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-slate-300">{room.name}</span>
                    <span className="font-bold text-orange-400">{room.size}</span>
                  </div>
                ))}
                
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-white uppercase tracking-wider">Toplam Net</span>
                  <span className="font-black text-xl text-white">{project.stats.netArea}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. GALERİ BÖLÜMÜ */}
      <div className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat text-slate-900">İç Mekan Görselleri</h2>
            <p className="text-slate-500 mt-2">Dairemizin örnek fotoğraflarını inceleyin</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.gallery.map((image, index) => (
              <div 
                key={index} 
                className="group relative h-64 overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setFullScreenMedia({ type: 'image', src: image })}
              >
                <div 
                  className="w-full h-full bg-slate-300 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  {/* Büyüteç İkonu */}
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 5. TAM EKRAN (LIGHTBOX) MODALI */}
      {fullScreenMedia && (
        <div 
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-300 cursor-zoom-out"
          onClick={() => setFullScreenMedia(null)}
        >
          {/* ARKA PLAN BULANIKLAŞTIRMA (BLUR) EFEKTİ */}
          {fullScreenMedia.type === 'video' ? (
            <video 
              autoPlay loop muted playsInline 
              className="absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-40 pointer-events-none"
            >
              <source src={fullScreenMedia.src} type="video/mp4" />
            </video>
          ) : (
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center blur-3xl scale-125 opacity-40 pointer-events-none"
              style={{ backgroundImage: `url(${fullScreenMedia.src})` }}
            ></div>
          )}

          {/* KAPATMA BUTONU */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white z-[110] bg-black/50 rounded-full p-2 transition-colors cursor-pointer"
            onClick={() => setFullScreenMedia(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          {/* ANA İÇERİK (NET OLAN VİDEO VEYA RESİM) */}
          <div 
            className="relative z-10 w-full h-full flex items-center justify-center p-0 md:p-12 cursor-default"
            onClick={(e) => e.stopPropagation()} 
          >
            {fullScreenMedia.type === 'video' ? (
              <video 
                controls 
                autoPlay 
                muted 
                className="w-full h-full object-contain md:rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              >
                <source src={fullScreenMedia.src} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={fullScreenMedia.src} 
                alt="Tam Ekran Görsel" 
                className="w-full h-full object-contain md:rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              />
            )}
          </div>
        </div>
      )}
    <Footer />
    </div>
  
  );
}