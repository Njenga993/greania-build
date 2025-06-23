import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ConstructionLoader from './components/ConstructionLoader';
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
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Other routes */}
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;