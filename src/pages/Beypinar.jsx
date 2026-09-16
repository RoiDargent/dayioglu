import Navbar from '../components/Navbar';

export default function Beypinar() {
  return (
    <div>
      <Navbar />
      <div className="py-24 bg-slate-50 min-h-screen px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">Beypınar</h1>
          <p className="text-slate-600">Bu sayfa yapım aşamasındadır. Projeler buraya eklenecek.</p>
        </div>
      </div>
    </div>
    
  );
}