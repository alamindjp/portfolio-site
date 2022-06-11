import { Route, Routes } from 'react-router-dom';
import './App.css';
import BeautyShooter from './Components/BeautyShooter';
import DhoaPartyCenter from './Components/DhoaPartyCenter';
import RedSea from './Components/RedSea';
import TotoShop from './Components/TotoShop';
import TvsHouse from './Components/TvsHouse';
import AboutPage from './Pages/About/AboutPage';
import ContactPage from './Pages/Contact/ContactPage';
import Home from './Pages/Home/Home';
import AllProjects from './Pages/Projects/AllProjects';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className="App bg-primary text-textSemi">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<AllProjects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/toto_shop" element={<TotoShop />} />
        <Route path="/tvs_house" element={<TvsHouse />} />
        <Route path="/beauty_shooter" element={<BeautyShooter />} />
        <Route path="/red-sea" element={<RedSea />} />
        <Route path="/dhoa_party_center" element={<DhoaPartyCenter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
