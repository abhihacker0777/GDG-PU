import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RSVPModal from './components/RSVPModal';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Photos from './pages/Photos';
import Contact from './pages/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [rsvpEvent, setRsvpEvent] = useState(null);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

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
      case 'organizers':
        return <Team setActiveTab={setActiveTab} />;
      case 'projects':
        return <Projects setActiveTab={setActiveTab} />;
      case 'photos':
        return <Photos />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} onOpenRSVP={handleOpenRSVP} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-1">
        {renderContent()}
      </main>

      <RSVPModal
        event={rsvpEvent}
        isOpen={isRsvpOpen}
        onClose={handleCloseRSVP}
      />

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
