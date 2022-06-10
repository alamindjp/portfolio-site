import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './Pages/About/AboutPage';
import ContactPage from './Pages/Contact/ContactPage';
import Home from './Pages/Home/Home';
import AllProjects from './Pages/Projects/AllProjects';

function App() {
  return (
    <div className="App bg-primary text-textSemi">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<AllProjects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
