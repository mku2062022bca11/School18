import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import OurJourney from './pages/OurJourney';
import Excellence from './pages/Excellence';
import Admissions from './pages/Admissions';
import LearnersCorner from './pages/LearnersCorner';
import Memories from './pages/Memories';
import ReachOut from './pages/ReachOut';
import AskUs from './pages/AskUs';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="transition-all duration-500 ease-in-out">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/journey" element={<OurJourney />} />
            <Route path="/excellence" element={<Excellence />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/learners" element={<LearnersCorner />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/contact" element={<ReachOut />} />
            <Route path="/faq" element={<AskUs />} />
          </Routes>
        </main>
        <Footer />
        
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;