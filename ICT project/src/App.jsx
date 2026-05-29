import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { JourneyProvider } from './context/JourneyContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <JourneyProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#F4F7FC]">
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </JourneyProvider>
  );
}
