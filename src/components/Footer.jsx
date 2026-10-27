import React from 'react';
import { Instagram, Linkedin, Send, ExternalLink, Heart } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-10 sm:py-14">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 space-y-6 sm:space-y-8">

        <div className="space-y-3 w-full">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            About the Chapter
          </h2>

          <p className="w-full text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed text-left">
            Welcome to GDG On Campus Poornima University, your community for everything code, tech, and collaboration! Here at GDG On Campus Poornima University, we focus on developing our coding skills while also exploring life beyond the screen. Whether you're a beginner or an experienced developer, our community is a place to engage in meaningful discussions about technology, share fun experiences, and collaborate on projects that make a difference both on campus and in the local community. Join us as we talk about code, tech, and life, all while building lasting friendships and working together on exciting projects.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm w-full">
          <a
            href="https://instagram.com/gdg.poornima"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-200 transition font-semibold"
          >
            <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
            <span>GDG On Campus PU</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60 shrink-0" />
          </a>

          <a
            href="https://www.linkedin.com/company/gdg-poornima/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition font-semibold"
          >
            <Linkedin className="w-4 h-4 text-blue-600 shrink-0" />
            <span>GDG On Campus PU</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60 shrink-0" />
          </a>

          <a
            href="https://t.me/gdgpoornima"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 transition font-semibold"
          >
            <Send className="w-4 h-4 text-sky-600 shrink-0" />
            <span>GDG On Campus PU</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60 shrink-0" />
          </a>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GDG On Campus • Poornima University. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 flex-wrap justify-center">
            Built With <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 shrink-0" /> By{' '}
            <a
              href="https://www.linkedin.com/in/abhihacker0777/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-700 hover:text-poornima-700 hover:underline transition underline-offset-2"
            >
              Poornima Student
            </a>{' '}
            <span className="font-semibold text-slate-700">For GDG PU</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
