import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ExternalLink, Sparkles, ChevronRight } from 'lucide-react';
import GoogleBracketsLogo from './GoogleBracketsLogo';
import GoogleColorBar from './GoogleColorBar';

export default function Navbar({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events', badge: 'Hot' },
    { id: 'team', label: 'Team' },
    { id: 'projects', label: 'Projects' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <GoogleColorBar className="h-1 w-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 sm:gap-4 cursor-pointer" onClick={() => handleNavClick('home')}>
            {/* Google Developer Groups Brackets */}
            <GoogleBracketsLogo className="h-7 sm:h-9 w-auto" />
            
            {/* Vertical Divider */}
            <div className="h-7 w-[1.5px] bg-slate-300 dark:bg-slate-700 hidden xs:block"></div>

            {/* Poornima University Logo & Brand text */}
            <div className="flex items-center gap-2.5">
              <img 
                src="/pulogo.png" 
                alt="Poornima University" 
                className="h-8 sm:h-10 w-auto object-contain hidden xs:block"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight leading-tight flex items-center gap-1.5">
                  GDG <span className="text-poornima-700 dark:text-poornima-gold">on Campus</span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Poornima University, Jaipur
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-poornima-700 dark:text-poornima-gold bg-poornima-50 dark:bg-slate-800'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded-full bg-google-red text-white shadow-xs">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-poornima-700 dark:bg-poornima-gold rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-poornima-700 dark:hover:text-poornima-gold transition shadow-xs"
            >
              {darkMode ? <Sun className="w-4 h-4 text-poornima-gold" /> : <Moon className="w-4 h-4 text-poornima-700" />}
            </button>

            {/* Join Chapter CTA */}
            <a
              href="https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-md shadow-amber-400/20 transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-poornima-700" />
              <span>Join Chapter</span>
              <ExternalLink className="w-3.5 h-3.5 text-poornima-900" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Open mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition ${
                  isActive
                    ? 'text-poornima-700 dark:text-poornima-gold bg-poornima-50 dark:bg-slate-800'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
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

          <div className="pt-3">
            <a
              href="https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-xl text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-md transition"
            >
              <Sparkles className="w-4 h-4 text-poornima-700" />
              <span>Join GDG Community on Bevy</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
