import React from 'react';
import { Users, Github, Linkedin, ExternalLink } from 'lucide-react';
import { realOrganizers } from '../data/gdgData';

export default function Team({ setActiveTab }) {
  return (
    <div className="space-y-16 py-8 pb-20 bg-slate-50">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 text-poornima-700 text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200">
          <Users className="w-4 h-4 text-google-blue" /> Chapter Organizers
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Core Community Organizers
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          The official student leaders and faculty mentors organizing Google Developer Groups on Campus at Poornima University.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {realOrganizers.map((member, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group justify-between"
            >
              <div>
                <div className="relative mb-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-poornima-700 transition duration-300 shadow-md">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-poornima-gold text-slate-900 shadow-xs">
                    {member.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-2">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-poornima-700 mt-0.5">
                  {member.role}
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  {member.affiliation}
                </p>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#0077b5] hover:text-white text-slate-700 flex items-center justify-center transition"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 flex items-center justify-center transition"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Want to Join the Volunteer Team?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            We open callouts for event managers, content creators, and technical co-leads each semester.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3 rounded-xl font-bold text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-md transition text-xs sm:text-sm"
            >
              Apply as Campus Volunteer
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
