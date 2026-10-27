import React from 'react';
import { Users, ExternalLink, Twitter } from 'lucide-react';
import { realOrganizers } from '../data/gdgData';

export default function Team() {
  return (
    <div className="space-y-16 py-8 pb-20 bg-slate-50">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 text-poornima-700 text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200">
          <Users className="w-4 h-4 text-google-blue" /> Chapter Leadership
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Organizers
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          The verified student organizers managing Google Developer Groups on Campus at Poornima University.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realOrganizers.slice(0, 3).map((member, i) => (
            <div
              key={i}
              className="rounded-3xl p-8 bg-white border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between items-center text-center"
            >
              <div>
                <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-slate-100 shadow-sm">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-poornima-50 text-poornima-700 border border-poornima-200">
                  {member.role}
                </span>

                <h3 className="text-2xl font-bold text-slate-900 mt-3">
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
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-200 shrink-0">
            <img
              src={realOrganizers[3].avatar}
              alt={realOrganizers[3].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
              {realOrganizers[3].badge}
            </span>
            <h4 className="text-xl font-bold text-slate-900">{realOrganizers[3].name}</h4>
            <p className="text-xs font-semibold text-poornima-700">{realOrganizers[3].role} • {realOrganizers[3].company}</p>
            <p className="text-xs text-slate-600 pt-1 leading-relaxed">{realOrganizers[3].bio}</p>
          </div>
        </div>
      </section>

    </div>
  );
}
