import React, { useState } from 'react';
import { Users, Github, Linkedin, Twitter, Sparkles, Award, Heart, Mail } from 'lucide-react';
import { teamMembers } from '../data/gdgData';

export default function Team({ setActiveTab }) {
  const [selectedDomain, setSelectedDomain] = useState('All');

  const domains = ['All', 'Leadership', 'Technical', 'Design', 'Operations'];

  const filteredMembers = teamMembers.filter((m) => {
    if (selectedDomain === 'All') return true;
    if (selectedDomain === 'Leadership') return m.badge === 'Chapter Lead' || m.badge === 'Faculty Advisor';
    if (selectedDomain === 'Technical') return m.role.includes('Lead') && (m.role.includes('AI') || m.role.includes('Cloud') || m.role.includes('Mobile') || m.role.includes('Web'));
    if (selectedDomain === 'Design') return m.role.includes('Design') || m.domain.includes('Design');
    if (selectedDomain === 'Operations') return m.role.includes('Ops') || m.role.includes('PR');
    return true;
  });

  return (
    <div className="space-y-16 py-8 pb-20">
      
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 dark:bg-slate-800 text-poornima-700 dark:text-poornima-gold text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200 dark:border-slate-700">
          <Users className="w-4 h-4 text-google-blue" /> People Behind the Community
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Meet the Core Organizers
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Passionate student leaders, engineers, designers, and mentors making technical education accessible to every student at Poornima University.
        </p>

        {/* Domain Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                selectedDomain === dom
                  ? 'bg-poornima-700 text-white dark:bg-poornima-gold dark:text-slate-900 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {dom}
            </button>
          ))}
        </div>
      </section>

      {/* TEAM MEMBERS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Member Photo */}
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 group-hover:border-poornima-700 dark:group-hover:border-poornima-gold transition duration-300 shadow-md">
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

              {/* Name & Role */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">
                {member.name}
              </h3>
              <p className="text-xs font-semibold text-poornima-700 dark:text-poornima-gold mt-0.5">
                {member.role}
              </p>
              <p className="text-[11px] text-slate-400 font-medium">
                {member.domain}
              </p>

              {/* Bio */}
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                {member.bio}
              </p>

              {/* Social links */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 w-full flex items-center justify-center gap-3">
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-[#0077b5] hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-[#1da1f2] hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN CORE TEAM BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-poornima-dark via-poornima-900 to-slate-900 text-white border border-poornima-800 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-poornima-gold text-slate-900">
              <Sparkles className="w-3.5 h-3.5" /> Open Applications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Want to Lead the Next Generation?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We recruit volunteers and domain co-leads every semester. Gain leadership experience, earn verifiable Google organizer certificates, and get mentored directly by industry experts.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveTab('contact')}
                className="px-6 py-3 rounded-xl font-bold text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-lg transition text-sm"
              >
                Apply as Volunteer / Co-Lead
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
