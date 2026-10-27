import React from 'react';
import { Instagram, Linkedin, Send, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            About the Chapter
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-5xl">
            Welcome to GDG On Campus Poornima University, your community for everything code, tech, and collaboration! Here at GDG On Campus Poornima University, we focus on developing our coding skills while also exploring life beyond the screen. Whether you're a beginner or an experienced developer, our community is a place to engage in meaningful discussions about technology, share fun experiences, and collaborate on projects that make a difference both on campus and in the local community. Join us as we talk about code, tech, and life, all while building lasting friendships and working together on exciting projects.
          </p>

          <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm">
            <a
              href="https://instagram.com/gdg.poornima"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-200 transition font-semibold"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>@gdg.poornima</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="https://www.linkedin.com/company/gdg-poornima/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition font-semibold"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
              <span>GDG Poornima LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="https://t.me/gdgpoornima"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 transition font-semibold"
            >
              <Send className="w-4 h-4 text-sky-600" />
              <span>Telegram Channel</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GDG on Campus • Poornima University. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by{' '}
            <span className="font-semibold text-slate-700">Poornima Developers</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
