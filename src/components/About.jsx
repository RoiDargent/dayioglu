export default function About() {
  return (
    <section
      id="hakkimizda"
      className="relative min-h-screen flex items-center bg-white text-gray-900 overflow-hidden"
      style={{
        backgroundImage:
          // Gradient geçişi %55'te (resmin bittiği yerde) tam beyaz olacak şekilde ayarlandı
          "linear-gradient(to right, transparent 20%, rgba(255, 255, 255, 0.9) 45%, #fff 55%), url('/images/dayioglu-about.jpeg')",
        backgroundSize: 'cover, 55% 100%',
        backgroundPosition: 'center, left center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl w-full mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="relative z-10 md:col-start-2">
          <span className="uppercase tracking-[0.3em] text-orange-400 font-inter text-sm font-semibold">
            Biz Kimiz
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-montserrat font-black leading-tight">
            30 Yıllık Tecrübe,
            <br />
            Tek Bir İmza:{' '}
            <span className="text-orange-400">Dayıoğlu</span>
          </h2>

          <p className="mt-6 text-lg font-inter text-gray-600 leading-relaxed max-w-xl">
            Dayıoğlu İnşaat olarak kurumsal kimliğimizle 13 yıldır, ailemizin
            inşaat sektöründeki birikimiyle ise 30 yılı aşkın süredir bu
            şehre yapılar kazandırıyoruz. Bugüne kadar 20'nin üzerinde
            binada, 300'e yakın aileye anahtar teslim ev sahibi olma
            mutluluğunu yaşattık.
          </p>

          {/* Rakamlar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
            {[
              { value: '30+', label: 'Yıl Sektör Tecrübesi' },
              { value: '13', label: 'Yıl Kendi Markamızla' },
              { value: '20+', label: 'Tamamlanan Bina' },
              { value: '300', label: "'e Yakın Teslim Edilen Daire" },
            ].map((stat) => (
              // Tüm kenarlık (border) ve özel boşluk sınıflarını kaldırdık
              <div key={stat.label}>
                <div className="font-oswald text-4xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-gray-500 font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}