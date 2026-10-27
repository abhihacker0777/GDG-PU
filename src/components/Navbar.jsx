import React, { useState } from 'react';
import { Menu, X, ExternalLink, Sparkles, ChevronRight } from 'lucide-react';
import GoogleBracketsLogo from './GoogleBracketsLogo';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events', badge: 'Live' },
    { id: 'team', label: 'Organizers' },
    { id: 'projects', label: 'Chapters & Projects' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          <div className="flex items-center gap-3 sm:gap-5 cursor-pointer group" onClick={() => handleNavClick('home')}>
            <GoogleBracketsLogo className="h-8 sm:h-9 w-auto" />
            
            <div className="h-8 w-px bg-slate-200"></div>

            <div className="flex items-center gap-3">
              <img 
                src="/pu_clean_logo.png" 
                alt="Poornima University Logo" 
                className="h-8 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 animate-logo-pulse"
                onError={(e) => {
                  e.currentTarget.src = '/logo.png';
                }}
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight leading-tight flex items-center gap-1.5 transition duration-300 group-hover:text-poornima-700">
                  <span>GDG</span>
                  <span className="text-poornima-700 font-black">on Campus</span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500">
                  Poornima University, Jaipur
                </span>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-poornima-700 bg-poornima-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded-full bg-google-red text-white shadow-xs">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-poornima-700 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-xl text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-poornima-700" />
              <span>Join Chapter</span>
              <ExternalLink className="w-3.5 h-3.5 text-poornima-900" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
              aria-label="Open mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition ${
                  isActive
                    ? 'text-poornima-700 bg-poornima-50'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-google-red text-white">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
