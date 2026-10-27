import React from 'react';
import { Users, ExternalLink } from 'lucide-react';
import { realOrganizers } from '../data/gdgData';

export default function Team() {
  return (
    <div className="w-full min-h-screen py-10 sm:py-16 bg-slate-50 flex flex-col items-center">
      
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 text-poornima-700 text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200">
          <Users className="w-4 h-4 text-google-blue" /> Chapter Leadership
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-center">
          Organizers
        </h1>
        <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto text-center">
          The Verified Student Organizers Managing Google Developer Groups On Campus At Poornima University.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full flex flex-wrap justify-center items-stretch gap-6 sm:gap-8">
          {realOrganizers.map((member, i) => (
            <div
              key={i}
              className="w-full sm:w-[320px] md:w-[340px] lg:w-[360px] rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between items-center text-center"
            >
              <div className="w-full flex flex-col items-center text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-100 shadow-sm mx-auto bg-slate-100">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <span className="inline-flex items-center justify-center text-[11px] font-bold px-3 py-1 rounded-full bg-poornima-50 text-poornima-700 border border-poornima-200 mb-3 mx-auto">
                  {member.role}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
                  {member.name}
                </h3>
                
                <p className="text-xs font-semibold text-slate-500 mt-1 text-center min-h-[2.5rem] flex items-center justify-center max-w-[260px] mx-auto">
                  {member.company}
                </p>

                <p className="text-xs text-slate-600 mt-4 leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 w-full flex items-center justify-center">
                <a
                  href={member.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-poornima-700 hover:underline"
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Want To Join The Chapter Team?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Reach Out Through Our Official WhatsApp Group Or Bevy Community To Participate In Upcoming Hackathons And Workshop Organizing.
          </p>
        </div>
      </section>

    </div>
  );
}
