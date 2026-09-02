import { useState } from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Şahin Towers',
      location: 'İlkadım, Kışla Mah.',
      details: '3+1, 130 Metrekare Net',
      status: "Projenin %90'ı Bitti",
      image: '/images/proje-kisla.jpeg',
      // Kışla projesine video yolunu ekledik.
      // Video yüklenene kadar veya mobilde çalışmazsa diye image kısmını da poster olarak tutuyoruz.
      video: '/videos/proje-kisla.mp4' 
    },
    {
      id: 2,
      title: 'Tepecik Projesi',
      location: 'İlkadım, Tepecik Mah.',
      details: '2+1, 110 Metrekare Net',
      status: "Projenin %60'ı Bitti",
      image: '/images/proje-tepecik.jpeg'
    },
    {
      id: 3,
      title: 'Beypınar Projesi',
      location: 'Atakum, Beypınar Mah.',
      details: '2+1, 110 Metrekare Net',
      status: 'Proje Tamamlandı, Taşınılmaya Hazır',
      image: '/images/proje-beypinar.jpeg',
      isVertical: true
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projeler" className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* 1. ARKA PLAN RESİMLERİ VE VİDEOLARI */}
      {projects.map((proje, index) => (
        <div
          key={proje.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          {proje.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={proje.image}
              className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
            >
              <source src={proje.video} type="video/mp4" />
            </video>
          ) : proje.isVertical ? (
            // Dikey resimler için güncellenmiş sinematik efekt (Siyahlıklar kaldırıldı)
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {/* Arka plandaki bulanık resim (opacity kaldırıldı, tam parlaklık) */}
              <div 
                className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
                style={{ backgroundImage: `url(${proje.image})` }}
              ></div>
              
              {/* Ortalanmış net resim */}
              <div 
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${proje.image})` }}
              ></div>
            </div>
          ) : (
            // Yatay resimler
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${proje.image})` }}
            ></div>
          )}
          
          {/* Tüm slaytlar için geçerli olan tek karartma katmanı (yazıların okunması için) */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      {/* 2. ANA İÇERİK BÖLÜMÜ */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pointer-events-none">
        
        <h2 className="absolute top-24 md:top-32 text-2xl md:text-4xl font-montserrat font-bold text-white/50 tracking-[0.2em] uppercase select-none">
          Projelerimiz
        </h2>

        <div className="max-w-4xl mt-12">
          <span className="text-orange-400 font-inter text-sm md:text-base font-bold uppercase tracking-[0.3em] drop-shadow-md">
            {projects[currentIndex].location}
          </span>
          
          <h3 className="text-5xl md:text-7xl font-montserrat font-black text-white mt-4 drop-shadow-xl">
            {projects[currentIndex].title}
          </h3>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-100 font-inter text-lg">
            <span className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full shadow-lg">
              {projects[currentIndex].details}
            </span>
            <span className="bg-orange-500/20 text-orange-300 backdrop-blur-md border border-orange-500/30 px-6 py-2 rounded-full shadow-lg font-semibold">
              {projects[currentIndex].status}
            </span>
          </div>

          {/* BUTON KISMI BURADA GÜNCELLENDİ */}
          <a 
            href="#iletisim" 
            className="inline-block mt-12 px-8 py-3 bg-orange-500 hover:bg-orange-600 transition-colors rounded text-base font-bold font-inter text-white shadow-xl hover:scale-105 transform duration-300 pointer-events-auto cursor-pointer"
          >
            Daha Fazla Bilgi
          </a>
        </div>
      </div>

      {/* 3. YÖNLENDİRME OKLARI */}
      <button 
        type="button"
        onClick={prevSlide}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-4 bg-black/40 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-all border border-white/20 hover:border-white/50 z-20 cursor-pointer"
        aria-label="Önceki Proje"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        type="button"
        onClick={nextSlide}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-4 bg-black/40 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-all border border-white/20 hover:border-white/50 z-20 cursor-pointer"
        aria-label="Sonraki Proje"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 4. ALT NOKTALAR */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              index === currentIndex ? 'bg-orange-500 w-10' : 'bg-white/50 w-2 hover:bg-white'
            }`}
            aria-label={`Proje ${index + 1}`}
          ></button>
        ))}
      </div>
      
    </section>
  );
}