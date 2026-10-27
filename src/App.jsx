import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RSVPModal from './components/RSVPModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('gdg_theme') === 'dark' || 
        (!localStorage.getItem('gdg_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [rsvpEvent, setRsvpEvent] = useState(null);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('gdg_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('gdg_theme', 'light');
    }
  }, [darkMode]);

  const handleOpenRSVP = (event) => {
    setRsvpEvent(event);
    setIsRsvpOpen(true);
  };

  const handleCloseRSVP = () => {
    setIsRsvpOpen(false);
    setRsvpEvent(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} onOpenRSVP={handleOpenRSVP} />;
      case 'about':
        return <About setActiveTab={setActiveTab} />;
      case 'events':
        return <Events onOpenRSVP={handleOpenRSVP} />;
      case 'team':
        return <Team setActiveTab={setActiveTab} />;
      case 'projects':
        return <Projects setActiveTab={setActiveTab} />;
      case 'resources':
        return <Resources />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} onOpenRSVP={handleOpenRSVP} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* RSVP Modal */}
      <RSVPModal
        event={rsvpEvent}
        isOpen={isRsvpOpen}
        onClose={handleCloseRSVP}
      />

      {/* Bottom Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
