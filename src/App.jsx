import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ConstructionLoader from './components/ConstructionLoader';
import ScrollToTopButton from './components/ScrollToTopButton';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// ... import other pages

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds for demo - adjust as needed

    return () => clearTimeout(timer);
  }, []);

  // For production, you might want to use this alternative:
  /*
  useEffect(() => {
    // This would be where you set loading to false when all assets are loaded
    const handleLoad = () => setIsLoading(false);
    
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);
  */

  return (
    <>
      {isLoading ? (
        <ConstructionLoader />
      ) : (
        <>
          <Navbar />
          <Routes basename ="/greania-build/">
            <Route path="/greania-build/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Other routes */}
          </Routes>
          <ScrollToTopButton />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;