import React, { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  Github, 
  Star, 
  Layers, 
  Award,
  ChevronRight
} from 'lucide-react';
import { chapterYearData, realChapterPhotos, flagshipSpotlights } from '../data/gdgData';

export default function Projects({ setActiveTab }) {
  const [selectedYear, setSelectedYear] = useState('2025');

  const { current2026, archive2025, archive2024 } = chapterYearData;

  return (
    <div className="space-y-16 py-8 pb-20 bg-slate-50">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 text-poornima-700 text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200">
          <Code2 className="w-4 h-4 text-google-yellow" /> Chapter Heritage & Projects
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          GDG Poornima Chapter Journey
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Explore student-built innovations, Google Cloud study jams, and community milestones across 2024, 2025, and upcoming 2026.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setSelectedYear('2026')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
              selectedYear === '2026'
                ? 'bg-poornima-700 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Clock className="w-4 h-4 text-poornima-gold" />
            <span>2026 Season</span>
            <span className="text-[10px] bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full font-extrabold">
              Updating Soon
            </span>
          </button>

          <button
            onClick={() => setSelectedYear('2025')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
              selectedYear === '2025'
                ? 'bg-poornima-700 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4 text-google-blue" />
            <span>2025 Chapter</span>
            <span className="text-[10px] bg-blue-100 text-google-blue px-2 py-0.5 rounded-full font-bold">
              Multimodal AI
            </span>
          </button>

          <button
            onClick={() => setSelectedYear('2024')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
              selectedYear === '2024'
                ? 'bg-poornima-700 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Award className="w-4 h-4 text-google-green" />
            <span>2024 Chapter</span>
            <span className="text-[10px] bg-green-100 text-google-green px-2 py-0.5 rounded-full font-bold">
              Foundations
            </span>
          </button>
        </div>
      </section>

      {selectedYear === '2026' && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-100 text-poornima-700 flex items-center justify-center">
              <Clock className="w-8 h-8 text-poornima-gold" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-poornima-700 bg-poornima-50 px-3 py-1 rounded-full">
                {current2026.status}
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                2026 Chapter Projects Updating Soon
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                {current2026.message}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-lg mx-auto space-y-3">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-google-green" /> Upcoming 2026 Initiatives
              </div>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-blue"></span>
                  <span>Google Gemini 2.0 Hackathon Sprint</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-red"></span>
                  <span>Google Cloud Community Days Jaipur Partnership</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-yellow"></span>
                  <span>Solution Challenge 2026 Mentorship Tracks</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover transition shadow-sm"
              >
                <span>Join 2026 Project Cohort on Bevy</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {selectedYear === '2025' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">
                  Chapter Retrospective
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  2025 Chapter: {archive2025.theme}
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500">Workshops</div>
                  <div className="text-sm font-bold text-slate-900">{archive2025.stats.workshops}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500">Students</div>
                  <div className="text-sm font-bold text-slate-900">{archive2025.stats.participants}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500">Cloud Badges</div>
                  <div className="text-sm font-bold text-slate-900">{archive2025.stats.cloudBadges}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500">Hack Teams</div>
                  <div className="text-sm font-bold text-slate-900">{archive2025.stats.hackathonTeams}</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Featured 2025 Flagship Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {flagshipSpotlights.map((spotlight) => (
                  <div
                    key={spotlight.id}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white text-poornima-700 border border-slate-200">
                          {spotlight.badge}
                        </span>
                        <span className="text-xs font-bold text-google-green flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Deployed
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">{spotlight.name}</h4>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{spotlight.description}</p>
                      
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {spotlight.techStack.map((t, idx) => (
                          <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                      <a href={spotlight.github} target="_blank" rel="noreferrer" className="font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1">
                        <Github className="w-3.5 h-3.5" /> Code Repo
                      </a>
                      <a href={spotlight.liveDemo} target="_blank" rel="noreferrer" className="font-bold text-poornima-700 hover:underline flex items-center gap-1">
                        View Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">2025 Key Milestones</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {archive2025.highlights.map((h, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h5 className="font-bold text-sm text-slate-900">{h.title}</h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {selectedYear === '2024' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">
                  Chapter Retrospective
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  2024 Chapter: {archive2024.theme}
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500">Workshops</div>
                  <div className="text-sm font-bold text-slate-900">{archive2024.stats.workshops}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500">Students</div>
                  <div className="text-sm font-bold text-slate-900">{archive2024.stats.participants}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500">Cloud Badges</div>
                  <div className="text-sm font-bold text-slate-900">{archive2024.stats.cloudBadges}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500">Hack Teams</div>
                  <div className="text-sm font-bold text-slate-900">{archive2024.stats.hackathonTeams}</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">2024 Completed Student Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {archive2024.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200">
                        {proj.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mt-2">{proj.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{proj.tech}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                      <span className="text-google-green font-semibold">{proj.status}</span>
                      <span className="text-slate-500 flex items-center gap-1 font-medium">
                        ⭐ {proj.stars}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">2024 Key Milestones</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {archive2024.highlights.map((h, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h5 className="font-bold text-sm text-slate-900">{h.title}</h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Are you a Poornima University builder?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Propose a project, start a study workgroup, or collaborate with fellow GDG developers on GitHub.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-poornima-700 hover:bg-poornima-800 transition shadow-sm"
            >
              Get in Touch with Chapter Organizers
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
