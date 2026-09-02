import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts'

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* section etiketine id="baslangic" eklendi */}
      <section 
        id="baslangic"
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[url('/images/dayioglu-home-background.jpeg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 mt-40">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-white mb-6 drop-shadow-lg tracking-tight">
            Geleceğinizi İnşa Ediyoruz
          </h1>
          
          <p className="text-xl max-w-2xl font-inter text-gray-200 mx-auto drop-shadow-md">
            Modern mimari ve sağlam altyapıyla, hayallerinizdeki yaşam alanlarını gerçeğe dönüştürüyoruz.
          </p>
        </div>
      </section>

      <About />
      
      {/* İleride projeler kısmını eklediğinde o section'a da id="projeler" verebilirsin */}
      <Projects />
      <Contacts />

    </div>
  );
}