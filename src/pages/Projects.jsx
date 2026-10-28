import React, { useState } from 'react';
import {
  Code2,
  Sparkles,
  Clock,
  CheckCircle2,
  ExternalLink,
  Award
} from 'lucide-react';
import { chapterYearData } from '../data/gdgData';

function MemberBadge({ member }) {
  const getInitials = (name) => {
    return name
      .replace(/[^a-zA-Z\s]/g, '')
      .trim()
      .split(/\s+/)
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="flex flex-col items-center text-center p-3.5 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-xs transition duration-200 h-full justify-between">
      <div className="flex flex-col items-center text-center w-full">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 bg-white border-2 border-slate-200 shadow-2xs flex items-center justify-center shrink-0">
          {member.avatar ? (
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-linear-to-tr from-sky-100 to-indigo-100 text-google-blue font-black text-lg">
              {getInitials(member.name)}
            </div>
          )}
        </div>

        <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
          {member.name}
        </h4>

        <p className="text-xs font-semibold text-slate-600 mt-0.5">
          {member.role}
        </p>

        {member.company ? (
          <p className="text-[11px] text-slate-500 mt-0.5 min-h-[1.5rem] flex items-center justify-center max-w-[200px]">
            {member.company}
          </p>
        ) : (
          <div className="min-h-[1.5rem]"></div>
        )}
      </div>

      <a
        href={member.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
      >
        <span>View Profile</span>
        <ExternalLink className="w-3 h-3 opacity-70" />
      </a>
    </div>
  );
}

export default function Projects({ setActiveTab }) {
  const [selectedYear, setSelectedYear] = useState('2026');

  const { current2026, archive2025, archive2024 } = chapterYearData;

  return (
    <div className="space-y-12 sm:space-y-16 py-8 pb-20 bg-slate-50">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 text-poornima-700 text-xs font-bold tracking-wider mb-4 border border-poornima-200">
          <Code2 className="w-4 h-4 text-google-yellow" /> Chapter Heritage & Projects
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          GDG Poornima Chapter Journey
        </h1>
        <p className="mt-4 text-xs sm:text-base text-slate-600 max-w-2xl mx-auto">
          Explore Chapter Milestones And Developer Initiatives Across 2024, 2025, And Upcoming 2026.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setSelectedYear('2026')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${selectedYear === '2026'
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
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${selectedYear === '2025'
              ? 'bg-poornima-700 text-white shadow-md'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
          >
            <Sparkles className="w-4 h-4 text-google-blue" />
            <span>2025 Chapter</span>
          </button>

          <button
            onClick={() => setSelectedYear('2024')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${selectedYear === '2024'
              ? 'bg-poornima-700 text-white shadow-md'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
          >
            <Award className="w-4 h-4 text-google-green" />
            <span>2024 Chapter</span>
          </button>
        </div>
      </section>

      {selectedYear === '2026' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-100 text-poornima-700 flex items-center justify-center">
              <Clock className="w-8 h-8 text-poornima-gold" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider text-poornima-700 bg-poornima-50 px-3 py-1 rounded-full">
                {current2026.status}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                2026 Chapter Projects Updating Soon
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                {current2026.message}
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-lg mx-auto space-y-3">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-google-green" /> 2026 Active Focus Areas
              </div>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-blue"></span>
                  <span>Google Solution Challenge 2026 Participation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-red"></span>
                  <span>Build With AI Workshops & Hands-On Sprints</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-green"></span>
                  <span>Google Cloud Study Jams & Skill Badges</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold tracking-wider text-poornima-700">
                Current Leadership
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                2026 Chapter Organizers
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {current2026.organizers.map((org) => (
                <MemberBadge key={org} member={org} />
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto mt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-2">
                <Clock className="w-3.5 h-3.5 text-amber-600" /> {current2026.coreTeamStatus}
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                2026 Core Team Coming Soon
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                {current2026.coreTeamMessage}
              </p>
            </div>
          </div>

        </section>
      )}

      {selectedYear === '2025' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="min-w-0">
                <span className="text-xs font-bold tracking-wider text-poornima-700">
                  Chapter Retrospective
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1 leading-tight">
                  2025 Chapter: {archive2025.theme}
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 shrink-0">
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

            <div>
              <div className="text-center max-w-xl mx-auto mb-6">
                <span className="text-xs font-bold tracking-wider text-poornima-700">
                  2025 Chapter Leadership
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  2025 Organizer
                </h3>
              </div>

              <div className="max-w-xs mx-auto mb-10">
                <MemberBadge member={archive2025.organizer} />
              </div>

              <div className="text-center max-w-xl mx-auto mb-6">
                <span className="text-xs font-bold tracking-wider text-poornima-700">
                  2025 Team Leads
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  2025 Core Team
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {archive2025.coreTeam.map((member) => (
                  <MemberBadge key={member} member={member} />
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">2025 Key Milestones</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {archive2025.highlights.map((h) => (
                  <div key={h.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-sm text-slate-900">{h.title}</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>
      )}

      {selectedYear === '2024' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="min-w-0">
                <span className="text-xs font-bold tracking-wider text-poornima-700">
                  Chapter Retrospective
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1 leading-tight">
                  2024 Chapter: {archive2024.theme}
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 shrink-0">
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

            <div>
              <div className="text-center max-w-xl mx-auto mb-6">
                <span className="text-xs font-bold tracking-wider text-poornima-700">
                  Founding Chapter Leadership
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  2024 Organizer
                </h3>
              </div>

              <div className="max-w-xs mx-auto mb-8">
                {archive2024.organizers.map((org) => (
                  <MemberBadge key={org} member={org} />
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">2024 Key Milestones</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {archive2024.highlights.map((h) => (
                  <div key={h.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-sm text-slate-900">{h.title}</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">Are You A Poornima University Developer?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Connect With Our Organizers To Join Current Project Workgroups And Workshop Preparation.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-5 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-poornima-700 hover:bg-poornima-800 transition shadow-sm"
            >
              Get in Touch with Chapter Organizers
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
