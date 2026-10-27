import React from 'react';
import { Users, ExternalLink, Twitter } from 'lucide-react';
import { realOrganizers } from '../data/gdgData';

export default function Team() {
  return (
    <div className="space-y-12 sm:space-y-16 py-8 pb-20 bg-slate-50">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 text-poornima-700 text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200">
          <Users className="w-4 h-4 text-google-blue" /> Chapter Leadership
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Organizers
        </h1>
        <p className="mt-4 text-xs sm:text-base text-slate-600 max-w-2xl mx-auto">
          The verified student organizers managing Google Developer Groups on Campus at Poornima University.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {realOrganizers.map((member, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between items-center text-center"
            >
              <div>
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-5 border-4 border-slate-100 shadow-sm">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-poornima-50 text-poornima-700 border border-poornima-200">
                  {member.role}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  {member.company}
                </p>

                <p className="text-xs text-slate-600 mt-4 leading-relaxed text-left">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 w-full flex items-center justify-between text-xs">
                {member.twitter ? (
                  <a
                    href={`https://twitter.com/${member.twitter}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 hover:text-sky-500 font-semibold flex items-center gap-1"
                  >
                    <Twitter className="w-3.5 h-3.5" /> @{member.twitter}
                  </a>
                ) : (
                  <span className="text-slate-400">Poornima Univ</span>
                )}

                <a
                  href={member.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-poornima-700 hover:underline flex items-center gap-1"
                >
                  <span>View profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Want to Join the Chapter Team?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Reach out through our official WhatsApp group or Bevy community to participate in upcoming hackathons and workshop organizing.
          </p>
        </div>
      </section>

    </div>
  );
}
