export default function Footer() {
  return (
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
          <a href="/#hakkimizda" className="hover:text-orange-400 transition-colors">Hakkımızda</a>
          <a href="/#projeler" className="hover:text-orange-400 transition-colors">Projelerimiz</a>
          {/* Tıklanıldığında sayfanın en üstüne çıkaran buton */}
          <a href="/#baslangic" className="hover:text-white transition-colors font-semibold text-gray-300">Yukarı Çık &uarr;</a>
        </div>
        
      </div>
    </footer>
  );
}