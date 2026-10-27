import React, { useState } from 'react';
import { Menu, X, ExternalLink, MessageCircle } from 'lucide-react';
import GoogleBracketsLogo from './GoogleBracketsLogo';
import { chapterInfo } from '../data/gdgData';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'organizers', label: 'Organizers' },
    { id: 'projects', label: 'Chapters & Projects' },
    { id: 'photos', label: 'Photos' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          
          <div className="shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
            <GoogleBracketsLogo className="h-7 sm:h-9 w-auto shrink-0" />

            <div className="h-6 w-px bg-slate-200 shrink-0"></div>

            <div className="shrink-0 flex items-center gap-2">
              <img 
                src="/pu_clean_logo.png" 
                alt="Poornima University Logo" 
                className="h-7 sm:h-10 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105 animate-logo-pulse"
                onError={(e) => {
                  e.currentTarget.src = '/logo.png';
                }}
              />
              <div className="flex flex-col shrink-0">
                <span className="font-extrabold text-xs sm:text-sm text-slate-900 tracking-tight leading-tight whitespace-nowrap">
                  <span>GDG </span>
                  <span className="text-poornima-700 font-black">on Campus</span>
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 whitespace-nowrap hidden sm:block">
                  Poornima University, Jaipur
                </span>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? 'text-poornima-700 bg-poornima-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-poornima-700 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={chapterInfo.channels.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={chapterInfo.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-xl text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-sm transition"
            >
              <span>Join on Bevy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Open navigation menu"
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
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition ${
                  isActive
                    ? 'text-poornima-700 bg-poornima-50'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href={chapterInfo.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-xl text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-sm transition"
            >
              <span>Join on Bevy</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={chapterInfo.channels.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl text-emerald-800 bg-emerald-50 border border-emerald-200 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Join Official WhatsApp Group</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
