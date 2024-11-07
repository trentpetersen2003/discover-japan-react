import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import CulturalExperiences from './pages/CulturalExperiences';
import Cuisine from './pages/Cuisine';
import TravelTips from './pages/TravelTips';
import './styles/styles.css';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/cultural-experiences" element={<CulturalExperiences />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/travel-tips" element={<TravelTips />} />
        </Routes>
      </div>
  );
}

export default App;