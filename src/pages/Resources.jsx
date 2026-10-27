import React, { useState } from 'react';
import { BookOpen, ExternalLink, HelpCircle, ChevronDown, Sparkles, Terminal, Download, Shield } from 'lucide-react';
import { resourcesData, faqsData } from '../data/gdgData';

export default function Resources() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="space-y-16 py-8 pb-20">
      
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 dark:bg-slate-800 text-poornima-700 dark:text-poornima-gold text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200 dark:border-slate-700">
          <BookOpen className="w-4 h-4 text-google-green" /> Developer Playbooks
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Learning Tracks & Resources
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Hand-curated documentation, certification pathways, free Google Cloud lab access, and answers to common student questions.
        </p>
      </section>

      {/* CURATED RESOURCES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourcesData.map((res, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-poornima-700 dark:text-poornima-gold uppercase tracking-wider">
                    {res.category}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200">
                    {res.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-poornima-700 dark:group-hover:text-poornima-gold transition">
                  {res.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{res.type}</span>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-poornima-700 dark:text-poornima-gold hover:underline flex items-center gap-1"
                >
                  <span>Open Resource</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-poornima-700 dark:text-poornima-gold mb-2">
            <HelpCircle className="w-4 h-4" /> Got Questions?
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Everything you need to know about joining and participating in GDG on Campus Poornima University.
          </p>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-poornima-700 dark:hover:text-poornima-gold transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'transform rotate-180 text-poornima-700 dark:text-poornima-gold' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
