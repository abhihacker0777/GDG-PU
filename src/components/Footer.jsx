import React from 'react';
import { Heart, Github, Linkedin, Twitter, Instagram, MapPin, Mail, Globe, ArrowUpRight } from 'lucide-react';
import GoogleBracketsLogo from './GoogleBracketsLogo';

export default function Footer({ setActiveTab }) {
  const scrollToTab = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <GoogleBracketsLogo className="h-8 w-auto" />
              <div className="h-6 w-px bg-slate-700"></div>
              <img 
                src="/pu_clean_logo.png" 
                alt="Poornima University Logo" 
                className="h-9 w-auto object-contain brightness-0 invert opacity-90 transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/logo.png';
                }}
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                GDG on Campus <span className="text-poornima-gold">• Poornima University</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Official Google Developer Groups student chapter at Poornima University, Jaipur.
              </p>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering student developers, designers, and innovators through practical coding, Google Cloud study jams, and community-led open source software.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center transition border border-slate-700"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition border border-slate-700"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#1da1f2] hover:text-white flex items-center justify-center transition border border-slate-700"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#e1306c] hover:text-white flex items-center justify-center transition border border-slate-700"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => scrollToTab('home')} className="hover:text-poornima-gold transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTab('about')} className="hover:text-poornima-gold transition">
                  About Chapter
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTab('events')} className="hover:text-poornima-gold transition">
                  Events & DevFest
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTab('team')} className="hover:text-poornima-gold transition">
                  Core Organizers
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTab('projects')} className="hover:text-poornima-gold transition">
                  Chapters & Projects
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Flagship Focus</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2 hover:text-white transition">
                <span className="w-2 h-2 rounded-full bg-google-blue"></span>
                <span>Google Gemini AI</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition">
                <span className="w-2 h-2 rounded-full bg-google-red"></span>
                <span>FixMyRoad Civic Platform</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition">
                <span className="w-2 h-2 rounded-full bg-google-green"></span>
                <span>Google Cloud Study Jams</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition">
                <span className="w-2 h-2 rounded-full bg-google-yellow"></span>
                <span>Android & Flutter</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Campus Details</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-poornima-gold shrink-0 mt-0.5" />
                <span>
                  Poornima University, IS-2027-2031, Ramchandrapura, P.O. Vidhani Vatika, Sitapura Extension, Jaipur, Rajasthan 303905
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-google-blue shrink-0" />
                <a href="mailto:gdg@poornima.edu.in" className="hover:text-white transition">
                  gdg@poornima.edu.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-google-green shrink-0" />
                <a href="https://poornima.edu.in" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
                  poornima.edu.in <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 mt-3">
              <div className="text-[11px] font-bold text-poornima-gold uppercase tracking-wider">
                NAAC 'A+' Accredited
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">
                Premier university in Rajasthan with state-of-the-art innovation facilities.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} GDG on Campus • Poornima University. Independent student community.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-google-red fill-google-red" /> by{' '}
            <span className="font-semibold text-white">Poornima Developers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
