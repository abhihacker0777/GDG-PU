import React from 'react';
import { Target, Compass, Sparkles, Award, Users, BookOpen, Rocket, CheckCircle2 } from 'lucide-react';
import { realChapterPhotos } from '../data/gdgData';

export default function About() {
  const pillars = [
    {
      title: "Connect",
      icon: Users,
      color: "#4285F4",
      bg: "bg-blue-50 text-[#4285F4]",
      desc: "Meet student developers, designers, and tech enthusiasts across Poornima University and Jaipur tech communities."
    },
    {
      title: "Learn",
      icon: BookOpen,
      color: "#EA4335",
      bg: "bg-red-50 text-[#EA4335]",
      desc: "Acquire hands-on engineering skills in Google Cloud, Android, AI, Flutter, and Web dev through interactive speaker sessions and peer study jams."
    },
    {
      title: "Grow",
      icon: Rocket,
      color: "#34A853",
      bg: "bg-green-50 text-[#34A853]",
      desc: "Apply your skills to build real-world solutions, compete in the Google Solution Challenge, and elevate your engineering career."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Chapter Formation & Initial Bootcamps",
      desc: "Chartered at Poornima University with active participation in Android, web, and cloud developer study jams."
    },
    {
      year: "2025",
      title: "Build with AI & Hackathon Briefings",
      desc: "Conducted Build with AI workshops at 5th Floor Seminar Hall and large-scale orientation in 3rd Floor Seminar Hall."
    },
    {
      year: "2026",
      title: "Google Solution Challenge & Scaling",
      desc: "Active participation in the global Google Solution Challenge 2026 with over 2,258 chapter members."
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 py-8 pb-20 bg-slate-50">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 text-poornima-700 text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200">
          <Sparkles className="w-4 h-4" /> About Our Chapter
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Empowering Builders At <br />
          <span className="text-poornima-700">Poornima University</span>
        </h1>
        <p className="mt-4 text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Google Developer Groups on Campus Poornima University is an inclusive, student-led technical community backed by Google Developers.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-google-blue flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              To provide Poornima University students with practical coding workshops, mentorship from industry professionals, and real-world project experience that bridges academic theory and industry engineering.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-google-blue">
              <CheckCircle2 className="w-4 h-4" /> 100% Student-Driven & Inclusive
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-poornima-700 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              To establish Poornima University as Rajasthan's premier student innovation hub, where students collaborate and build impactful solutions using Google technologies.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-poornima-700">
              <CheckCircle2 className="w-4 h-4" /> Global Recognition & Growth
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">Core Philosophy</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">The Three Pillars Of GDG</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition text-center flex flex-col items-center"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${p.bg}`}>
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200 py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center">
              <a
                href="https://poornima.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Poornima University Official Website"
                className="transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="/22.png"
                  alt="Poornima University Logo"
                  className="h-16 sm:h-20 w-auto object-contain mb-4 animate-logo-pulse"
                />
              </a>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-poornima-100 text-poornima-800 text-xs font-bold mb-2">
                <Award className="w-4 h-4 text-poornima-gold" /> NAAC 'A+' Accredited
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">Poornima University</h3>
              <p className="text-xs text-slate-500 mt-1">Jaipur, Rajasthan, India</p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Academic Excellence
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                Poornima University is a premier educational institution in Rajasthan recognized for technical innovation, entrepreneurship, and industry-focused research. The Faculty of Computer Science and Engineering actively supports student developer initiatives, providing computing facilities, seminar halls, and sponsorship for tech sessions.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-500 uppercase">Campuses</div>
                  <div className="text-sm sm:text-base font-extrabold text-poornima-700">Sitapura, Jaipur</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-500 uppercase">Incubation</div>
                  <div className="text-sm sm:text-base font-extrabold text-poornima-700">PU IDEA Lab</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                  <div className="text-xs font-bold text-slate-500 uppercase">Recognition</div>
                  <div className="text-sm sm:text-base font-extrabold text-poornima-700">AICTE & UGC Approved</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">Campus Atmosphere</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Chapter Gatherings</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {realChapterPhotos.map((p, idx) => (
            <div key={idx} className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-md transition">
              <img src={p.url} alt={p.caption} className="w-full aspect-4/3 object-cover" />
              <div className="p-4">
                <p className="font-bold text-sm text-slate-900">{p.caption}</p>
                <p className="text-xs text-slate-500 mt-0.5">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">Milestones</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Chapter Timeline</h2>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-28 space-y-8">
          {milestones.map((m, i) => (
            <div key={i} className="relative pl-6 sm:pl-8 group">
              <div className="hidden sm:block absolute -left-24 top-0.5 text-right w-20 text-sm font-extrabold text-poornima-700">
                {m.year}
              </div>

              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-poornima-700 group-hover:scale-125 transition"></div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="sm:hidden text-xs font-bold text-poornima-700 block mb-1">
                  {m.year}
                </span>
                <h4 className="text-base font-bold text-slate-900">{m.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
