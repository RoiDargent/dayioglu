export default function Contacts() {
  return (
    // min-h-screen ve flex flex-col ile kapsayıcı tam ekran yapıldı ve dikey olarak bölündü
    <section id="iletisim" className="min-h-screen flex flex-col bg-white text-gray-900">
      
      {/* İLETİŞİM BÖLÜMÜ - flex-grow sayesinde footer'dan kalan tüm ekran boşluğunu doldurur */}
      <div className="flex-grow flex items-center py-12">
        <div className="max-w-7xl w-full mx-auto px-8">
          
          {/* Başlık Kısmı */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-black text-gray-900">
              Bize Ulaşın
            </h2>
            <p className="mt-4 font-inter text-gray-500 max-w-2xl mx-auto text-lg">
              Projelerimiz hakkında detaylı bilgi almak veya tanışmak için ofisimize bekleriz.
            </p>
          </div>

          {/* items-stretch ile sağ ve sol kolonun yüksekliği birbirine eşitlendi */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            
            {/* SOL TARAF - İletişim Bilgileri (Kartlar) */}
            <div className="flex flex-col gap-6 lg:gap-0 justify-between h-full">
              
              {/* 1. Telefon Kartı - Ahmet Bey */}
              <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-100 text-orange-500 flex items-center justify-center rounded-xl">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold font-montserrat">Kamil Dayı</h4>
                  <p className="mt-2 text-gray-600 font-inter">
                    <a href="tel:+905325923493" className="hover:text-orange-500 transition-colors font-semibold text-lg">
                      +90 (532) 592 34 93
                    </a>
                  </p>
                </div>
              </div>

              {/* 2. Telefon Kartı - Mehmet Bey */}
              <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-100 text-orange-500 flex items-center justify-center rounded-xl">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold font-montserrat">Kemal İtkü</h4>
                  <p className="mt-2 text-gray-600 font-inter">
                    <a href="tel:+905326503626" className="hover:text-orange-500 transition-colors font-semibold text-lg">
                      +90 (532) 650 36 26
                    </a>
                  </p>
                </div>
              </div>

              {/* Instagram Kartı */}
              <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-100 text-orange-500 flex items-center justify-center rounded-xl">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold font-montserrat">Instagram</h4>
                  <p className="mt-2 text-gray-600 font-inter">
                    <a href="https://instagram.com/dayiogluinsaat" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors font-semibold">
                      @dayiogluinsaat
                    </a>
                  </p>
                </div>
              </div>
              
            </div>

            {/* SAĞ TARAF - Google Harita */}
            <div className="bg-white rounded-3xl shadow-xl p-3 border border-gray-100 relative overflow-hidden h-full min-h-[350px] lg:min-h-full flex flex-col">
              <iframe
                title="Ofis Haritası"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.7071775079253!2d36.31569617647253!3d41.271711203161644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408877d6e2a2714b%3A0xf86a582b9f0c9ea3!2zRGF5xLFvxJ9sdSDEsG7Fn2FhdA!5e0!3m2!1str!2str!4v1788332120083!5m2!1str!2str"
                className="w-full h-full rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER BÖLÜMÜ - Her zaman ekranın en altında kalır */}
      <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center font-inter text-sm text-center md:text-left">
    
    {/* Telif Hakkı ve İmza Kısmı */}
    <p className="flex flex-col sm:flex-row items-center">
      <span>&copy; {new Date().getFullYear()} Dayıoğlu İnşaat. Tüm hakları saklıdır.</span>
      <span className="hidden sm:inline mx-2 text-gray-600">|</span>
      <span className="mt-1 sm:mt-0 text-gray-500 text-xs sm:text-sm">by RoiDargent</span>
    </p>

    {/* Yönlendirme Linkleri */}
    <div className="mt-4 md:mt-0 flex space-x-6">
      <a href="#hakkimizda" className="hover:text-orange-400 transition-colors">Hakkımızda</a>
      <a href="#projeler" className="hover:text-orange-400 transition-colors">Projelerimiz</a>
      {/* Tıklanıldığında sayfanın en üstüne çıkaran buton */}
      <a href="#baslangic" className="hover:text-white transition-colors font-semibold text-gray-300">Yukarı Çık &uarr;</a>
    </div>
    
  </div>
</footer>

    </section>
  );
}