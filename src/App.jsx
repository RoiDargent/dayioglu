import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projectstemplate from './pages/Projects-Template';
import SahinTowers from './pages/SahinTowers';
import Tepecik from './pages/Tepecik';
import Beypinar from './pages/Beypinar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sahintowers" element={<Projectstemplate />} />
        <Route path="/tepecik" element={<Tepecik />} />
        <Route path="/beypinar" element={<Beypinar />} />
      </Routes>
    </Router>
  );
}

export default App;