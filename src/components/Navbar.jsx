export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-5 px-8 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-xl text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logoya tıklayınca da en üste kaysın diye href="#baslangic" yapıldı */}
        <a href="#baslangic" className="text-xl font-black font-montserrat tracking-widest drop-shadow-md">
          DAYIOĞLU İNŞAAT
        </a>
        
        <ul className="flex space-x-8 font-semibold text-lg">
          {/* Linkler sayfa içi hedeflere (id'lere) yönlendirildi */}
          <li><a href="#baslangic" className="hover:text-orange-400 transition-colors">Başlangıç</a></li>
          <li><a href="#hakkimizda" className="hover:text-orange-400 transition-colors">Hakkımızda</a></li>
          <li><a href="#projeler" className="hover:text-orange-400 transition-colors">Projelerimiz</a></li>
          <li><a href="#iletisim" className="hover:text-orange-400 transition-colors">İletişim</a></li>
        </ul>
        
      </div>
    </nav>
  );
}