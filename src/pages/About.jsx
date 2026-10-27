import React from 'react';
import { Target, Compass, Sparkles, Award, Users, BookOpen, Rocket, CheckCircle2, Building2, Quote } from 'lucide-react';
import GoogleBracketsLogo from '../components/GoogleBracketsLogo';

export default function About({ setActiveTab }) {
  const pillars = [
    {
      title: "Connect",
      icon: Users,
      color: "#4285F4",
      bg: "bg-blue-50 dark:bg-blue-950/40 text-[#4285F4]",
      desc: "Meet other student developers, designers, and innovators passionate about technology across Poornima University and Jaipur tech communities."
    },
    {
      title: "Learn",
      icon: BookOpen,
      color: "#EA4335",
      bg: "bg-red-50 dark:bg-red-950/40 text-[#EA4335]",
      desc: "Acquire hands-on engineering skills in Google Cloud, Android, Gemini API, Flutter, and Web dev through interactive speaker sessions and peer study jams."
    },
    {
      title: "Grow",
      icon: Rocket,
      color: "#34A853",
      bg: "bg-green-50 dark:bg-green-950/40 text-[#34A853]",
      desc: "Apply your skills to build solutions for local communities, compete in the Google Solution Challenge, and advance your engineering career."
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Chapter Genesis at Poornima",
      desc: "Officially chartered by Google Developers with an initial cohort of 250 curious student developers."
    },
    {
      year: "2024",
      title: "First Campus Hackathon & Cloud Sprint",
      desc: "Over 400 attendees participated in the 24-hr HackPoornima, generating 30+ open source repositories."
    },
    {
      year: "2025",
      title: "Solution Challenge Top 100",
      desc: "A team from Poornima University advanced to the global top 100 for an AI-powered smart agriculture assistant."
    },
    {
      year: "2026",
      title: "DevFest & Multimodal AI Frontier",
      desc: "Scaled to 1,800+ members, pioneering workshops on Google Gemini, Vertex AI, and modern web frameworks."
    }
  ];

  return (
    <div className="space-y-16 py-8 pb-20">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 dark:bg-slate-800 text-poornima-700 dark:text-poornima-gold text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200 dark:border-slate-700">
          <Sparkles className="w-4 h-4" /> About Our Chapter
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Empowering Builders at <br />
          <span className="text-poornima-700 dark:text-poornima-gold">Poornima University</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We are an inclusive community for university students passionate about Google developer technologies, open-source innovation, and building meaningful software.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-google-blue flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              To provide Poornima University students with practical coding workshops, mentorship from industry professionals, and real-world project experience that bridges academic theory and industry engineering.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-google-blue">
              <CheckCircle2 className="w-4 h-4" /> 100% Student-Driven & Inclusive
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-poornima-700 dark:text-poornima-gold flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              To establish Poornima University as Rajasthan's premier student innovation hub, where students build globally recognized solutions tackling the United Nations Sustainable Development Goals.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-poornima-700 dark:text-poornima-gold">
              <CheckCircle2 className="w-4 h-4" /> Global Recognition & Impact
            </div>
          </div>

        </div>
      </section>

      {/* THE THREE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-poornima-700 dark:text-poornima-gold">Core Philosophy</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">The Three Pillars of GDG</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition text-center flex flex-col items-center"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${p.bg}`}>
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* POORNIMA UNIVERSITY HERITAGE */}
      <section className="bg-white dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200 dark:border-slate-700 text-center">
              <img
                src="/pulogo.png"
                alt="Poornima University Logo"
                className="h-20 w-auto object-contain mb-4"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-poornima-100 text-poornima-800 dark:bg-poornima-900 dark:text-poornima-200 text-xs font-bold mb-2">
                <Award className="w-4 h-4 text-poornima-gold" /> NAAC 'A+' Accredited
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Poornima University</h3>
              <p className="text-xs text-slate-500 mt-1">Jaipur, Rajasthan, India</p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Backed by Academic Excellence
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Poornima University is a premier educational institution in Rajasthan recognized for technical innovation, entrepreneurship, and industry-focused research. The Faculty of Computer Science and Engineering actively supports student developer initiatives, providing high-speed computing labs, server infrastructure, and sponsorship for hackathons.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                  <div className="text-xs font-bold text-slate-500 uppercase">Campuses</div>
                  <div className="text-base font-extrabold text-poornima-700 dark:text-poornima-gold">Sitapura, Jaipur</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                  <div className="text-xs font-bold text-slate-500 uppercase">Incubation</div>
                  <div className="text-base font-extrabold text-poornima-700 dark:text-poornima-gold">PU IDEA Lab</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 col-span-2 sm:col-span-1">
                  <div className="text-xs font-bold text-slate-500 uppercase">Recognition</div>
                  <div className="text-base font-extrabold text-poornima-700 dark:text-poornima-gold">AICTE & UGC Approved</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP VOICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-poornima-700 dark:text-poornima-gold">Voices from Leadership</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Guiding Our Community</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Chapter Lead Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-google-blue/30 mb-3" />
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "Our mission at GDG on Campus Poornima University is simple: no student should feel intimidated by cutting-edge technology. Whether you wrote your first line of Python yesterday or you are deploying deep learning agents, you have a home with us."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
                alt="Rohan Verma"
                className="w-12 h-12 rounded-full object-cover border-2 border-google-blue"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Rohan Verma</h4>
                <p className="text-xs text-poornima-700 dark:text-poornima-gold font-semibold">GDG On-Campus Chapter Lead</p>
              </div>
            </div>
          </div>

          {/* Faculty Advisor Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-poornima-gold/40 mb-3" />
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "Poornima University is committed to fostering an ecosystem where student developers transform classroom algorithms into tangible, community-serving products. GDG provides the global platform to make that happen."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
                alt="Dr. Rekha Nair"
                className="w-12 h-12 rounded-full object-cover border-2 border-poornima-gold"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Dr. Rekha Nair</h4>
                <p className="text-xs text-poornima-700 dark:text-poornima-gold font-semibold">Faculty Advisor & Dean CSE, Poornima University</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-poornima-700 dark:text-poornima-gold">Milestones</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Our Journey So Far</h2>
        </div>

        <div className="relative border-l-2 border-poornima-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-8">
          {milestones.map((m, i) => (
            <div key={i} className="relative pl-6 sm:pl-8 group">
              {/* Year Pill on the left for larger screens */}
              <div className="hidden sm:block absolute -left-28 top-0.5 text-right w-24 text-sm font-extrabold text-poornima-700 dark:text-poornima-gold">
                {m.year}
              </div>

              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-poornima-700 dark:border-poornima-gold group-hover:scale-125 transition"></div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <span className="sm:hidden text-xs font-bold text-poornima-700 dark:text-poornima-gold block mb-1">
                  {m.year}
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{m.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
