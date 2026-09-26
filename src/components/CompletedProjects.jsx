export default function CompletedProjects() {
  const completedProjects = [
    { 
      id: 1, 
      title: 'Polatlı Bulvarı', 
      image: '/images/Eski-Projeler/polatli.jpeg', 
      year: '2017', 
      size: '3+1', 
      count: '74 Daire' 
    },
    { 
      id: 2, 
      title: 'Kışla Mah.', 
      image: '/images/Eski-Projeler/kisla.jpeg', 
      year: '2018', 
      size: '3+1', 
      count: '18 Daire' 
    },
    { 
      id: 3, 
      title: 'İlyasköy Mah.', 
      image: '/images/Eski-Projeler/ilyaskoy.jpeg', 
      year: '2019', 
      size: '3+1', 
      count: '18 Daire',
      isVertical: true // Sığmayan resim için eklendi
    },
    { 
      id: 4, 
      title: 'Kavacık Mah.', 
      image: '/images/Eski-Projeler/kavacik.jpeg', 
      year: '2020', 
      size: '3+1', 
      count: '24 Daire' 
    },
    { 
      id: 5, 
      title: 'Yenimahalle Mah.', 
      image: '/images/Eski-Projeler/yenimahalle.jpeg', 
      year: '2021', 
      size: '1+1', 
      count: '21 Daire' 
    },
    { 
      id: 6, 
      title: 'Balaç Mah.', 
      image: '/images/Eski-Projeler/balac.jpeg', 
      year: '2023', 
      size: '3+1', 
      count: '21 Daire',
      isVertical: true // Sığmayan resim için eklendi
    },
    { 
      id: 7, 
      title: 'Kışla Mah.', 
      image: '/images/Eski-Projeler/kisla-2.jpeg', 
      year: '2025', 
      size: '3+1', 
      count: '12 Daire',
      isVertical: true // Sığmayan resim için eklendi
    },
  ];

  return (
    <section className="py-20 bg-slate-50 font-inter border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Bölüm Başlığı */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm">
            Dayıoğlu Güvencesiyle
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-montserrat text-slate-900 mt-2">
            Tamamlanan Projeler
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Bugüne kadar başarıyla teslim ettiğimiz ve yüzlerce aileyi ev sahibi yaptığımız projelerimiz.
          </p>
        </div>

        {/* Kartlar (Grid Yapısı) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {completedProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 group flex flex-col"
            >
              
              {/* Kart Resmi */}
              <div className="relative h-56 overflow-hidden bg-slate-200">
                
                {project.isVertical ? (
                  // Dikey/Sığmayan resimler için sinematik efekt
                  <div className="absolute inset-0 w-full h-full">
                    <div 
                      className="absolute inset-0 bg-cover bg-center blur-xl scale-125 opacity-60 transition-transform duration-500 group-hover:scale-150"
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                    <div 
                      className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                  </div>
                ) : (
                  // Normal yatay resimler için
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                )}

                {/* Resmin üzerine hafif bir karartma efekti (hover durumunda) */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Kart İçeriği */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold font-montserrat text-slate-900 mb-5 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-3 mt-auto">
                  
                  {/* 1. Tamamlanma Yılı */}
                  <div className="flex items-center text-slate-600 text-sm font-medium">
                    <svg className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span><strong>Yıl:</strong> {project.year}</span>
                  </div>

                  {/* 2. Daire Büyüklüğü */}
                  <div className="flex items-center text-slate-600 text-sm font-medium">
                    <svg className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span><strong>Büyüklük:</strong> {project.size}</span>
                  </div>

                  {/* 3. Daire Sayısı */}
                  <div className="flex items-center text-slate-600 text-sm font-medium">
                    <svg className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span><strong>Kapasite:</strong> {project.count}</span>
                  </div>

                </div>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}