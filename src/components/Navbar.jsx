import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
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
    <header className="w-full bg-white border-b border-slate-200">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">

          <div className="shrink-0 flex items-center gap-2.5 sm:gap-4">
            <button
              onClick={() => handleNavClick('home')}
              className="shrink-0 focus:outline-none cursor-pointer"
              title="GDG on Campus Home"
            >
              <img
                src="/19.png"
                alt="Google Developer Groups"
                className="h-6 sm:h-8 md:h-9 w-auto object-contain"
              />
            </button>

            <div className="h-6 sm:h-7 w-px bg-slate-200 shrink-0"></div>

            <a
              href="https://poornima.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Poornima University Official Website"
              className="shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/22.png"
                alt="Poornima University Logo"
                className="h-7 sm:h-9 md:h-10 w-auto object-contain"
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-150 whitespace-nowrap ${isActive
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
              <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
              <span>GDG On Campus PU</span>
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
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition ${isActive
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
              <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
              <span>Join Official WhatsApp Group</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
