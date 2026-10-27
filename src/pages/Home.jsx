import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  Users, 
  Award, 
  Code2, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Flame, 
  Terminal, 
  Globe2, 
  Smartphone, 
  Cloud 
} from 'lucide-react';
import GoogleBracketsLogo from '../components/GoogleBracketsLogo';
import { chapterInfo, techTracks, eventsData, projectsData } from '../data/gdgData';

export default function Home({ setActiveTab, onOpenRSVP }) {
  const featuredEvent = eventsData.find((e) => e.featured) || eventsData[0];
  const previewProjects = projectsData.slice(0, 3);

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-10 sm:pt-16 pb-12 sm:pb-20">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-poornima-700/15 via-google-blue/15 to-poornima-gold/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute -top-10 right-10 w-72 h-72 bg-google-yellow/10 rounded-full blur-2xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-google-green/10 rounded-full blur-2xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Top Pill with Poornima & Google logo combo */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-poornima-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-sm backdrop-blur-md mb-8 animate-in fade-in duration-300">
            <span className="w-2.5 h-2.5 rounded-full bg-google-green animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
              Official Chapter • <span className="text-poornima-700 dark:text-poornima-gold font-bold">Poornima University, Jaipur</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-poornima-gold text-slate-900 ml-1">
              Active
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.15]">
            Where Passion Meets <br />
            <span className="bg-gradient-to-r from-poornima-700 via-google-blue to-poornima-gold bg-clip-text text-transparent">
              Google Technologies
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong className="text-slate-900 dark:text-white font-semibold">GDG on Campus Poornima University</strong>. A student developer community innovating with Generative AI, Cloud, Android, and Web in the Pink City.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenRSVP(featuredEvent)}
              className="px-6 sm:px-8 py-3.5 rounded-xl font-bold text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-lg shadow-amber-400/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group text-sm sm:text-base"
            >
              <Sparkles className="w-5 h-5 text-poornima-700" />
              <span>RSVP Next Event</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>

            <button
              onClick={() => setActiveTab('events')}
              className="px-6 sm:px-8 py-3.5 rounded-xl font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm transition text-sm sm:text-base"
            >
              Explore All Events
            </button>

            <a
              href="https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/"
              target="_blank"
              rel="noreferrer"
              className="px-6 sm:px-8 py-3.5 rounded-xl font-bold text-poornima-700 dark:text-poornima-300 hover:text-poornima-900 dark:hover:text-white transition flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Join Chapter on Bevy</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Community Stats Grid */}
          <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {chapterInfo.stats.map((stat, i) => (
              <div 
                key={i} 
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition text-left relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-16 h-16 opacity-10 rounded-bl-full ${
                  stat.color === 'google-blue' ? 'bg-[#4285F4]' :
                  stat.color === 'google-red' ? 'bg-[#EA4335]' :
                  stat.color === 'google-yellow' ? 'bg-[#FBBC05]' : 'bg-[#34A853]'
                }`}></div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${
                    stat.color === 'google-blue' ? 'bg-[#4285F4]' :
                    stat.color === 'google-red' ? 'bg-[#EA4335]' :
                    stat.color === 'google-yellow' ? 'bg-[#FBBC05]' : 'bg-[#34A853]'
                  }`}></span>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED EVENT BANNER */}
      {featuredEvent && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-poornima-dark via-poornima-900 to-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-poornima-800">
            {/* 4 Google Colors Accent Line */}
            <div className="absolute top-0 left-0 right-0 grid grid-cols-4 h-1.5">
              <div className="bg-[#4285F4]"></div>
              <div className="bg-[#EA4335]"></div>
              <div className="bg-[#FBBC05]"></div>
              <div className="bg-[#34A853]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-google-red text-white uppercase tracking-wider">
                    <Flame className="w-3.5 h-3.5 fill-white" /> Next Flagship Event
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-poornima-800 text-poornima-gold font-semibold">
                    {featuredEvent.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {featuredEvent.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  {featuredEvent.description}
                </p>

                <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300 pt-2">
                  <div className="flex items-center gap-2 bg-poornima-800/80 px-3 py-1.5 rounded-lg border border-poornima-700/60">
                    <Calendar className="w-4 h-4 text-poornima-gold" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-poornima-800/80 px-3 py-1.5 rounded-lg border border-poornima-700/60">
                    <Globe2 className="w-4 h-4 text-google-blue" />
                    <span>{featuredEvent.mode} • {featuredEvent.location}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenRSVP(featuredEvent)}
                    className="px-6 py-3 rounded-xl font-bold text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-lg transition flex items-center gap-2"
                  >
                    <span>Register Free Pass</span>
                    <Sparkles className="w-4 h-4 text-poornima-700" />
                  </button>
                  <button
                    onClick={() => setActiveTab('events')}
                    className="px-5 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 transition text-sm"
                  >
                    Event Details & Agenda
                  </button>
                </div>
              </div>

              {/* Event Image Banner */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video lg:aspect-4/3">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <div className="text-xs text-white">
                      <p className="font-bold">Poornima University Main Auditorium</p>
                      <p className="text-slate-300 text-[11px]">Free entry for registered students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TECH TRACKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-poornima-700 dark:text-poornima-gold">
            What We Learn & Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Explore Cutting-Edge Tech Domains
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            From Gemini multimodal AI to Google Cloud infrastructure, we provide structured roadmaps, peer learning sessions, and hands-on hackathons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techTracks.map((track) => (
            <div
              key={track.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs"
                    style={{ backgroundColor: `${track.color}15`, color: track.color }}
                  >
                    {track.id === 'ai-gemini' && <Sparkles className="w-6 h-6" />}
                    {track.id === 'cloud' && <Cloud className="w-6 h-6" />}
                    {track.id === 'android' && <Smartphone className="w-6 h-6" />}
                    {track.id === 'web' && <Globe2 className="w-6 h-6" />}
                    {track.id === 'cybersec' && <Terminal className="w-6 h-6" />}
                  </span>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: `${track.color}15`, color: track.color }}
                  >
                    Track
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-poornima-700 dark:group-hover:text-poornima-gold transition">
                  {track.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {track.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Key Topics Covered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {track.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <button
                  onClick={() => setActiveTab('resources')}
                  className="text-xs font-bold flex items-center gap-1.5 transition text-slate-700 dark:text-slate-300 group-hover:text-poornima-700 dark:group-hover:text-poornima-gold"
                >
                  <span>View learning roadmaps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY JOIN GDG POORNIMA */}
      <section className="bg-white dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-poornima-700 dark:text-poornima-gold">
                The Community Difference
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Why Thousands of Students Choose GDG at Poornima
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                We bridge the gap between classroom computer science and industrial engineering. As part of the global Google Developer Groups network, students at Poornima University gain unmatched perks:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-1 rounded-lg bg-google-blue/10 text-google-blue shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Direct Access to Google Developer Experts (GDE)</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Get your questions answered and project architectures reviewed by industry specialists.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-1 rounded-lg bg-google-green/10 text-google-green shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Free Google Cloud Skills Boost Subscriptions</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Over $300 worth of free lab credits provided to active members for cloud & AI pathways.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-1 rounded-lg bg-poornima-gold/10 text-poornima-700 dark:text-poornima-gold shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Portfolio Projects & Placement Boost</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Build full-stack production projects that recruiters notice. GDG members lead placement statistics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('about')}
                  className="px-6 py-3 rounded-xl font-bold text-white bg-poornima-700 hover:bg-poornima-800 transition shadow-md shadow-poornima-700/20 text-sm"
                >
                  Learn More About Our Chapter
                </button>
              </div>
            </div>

            {/* Visual Box with Poornima Campus Vibe */}
            <div className="lg:col-span-6 relative">
              <div className="p-6 sm:p-8 rounded-3xl bg-radial-pattern bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <GoogleBracketsLogo className="h-7 w-auto" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Chapter Highlights</h4>
                      <p className="text-[11px] text-slate-500">Poornima University, Sitapura Campus</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-poornima-100 text-poornima-800 dark:bg-poornima-900/60 dark:text-poornima-200">
                    2026 Season
                  </span>
                </div>

                {/* Visual Cards inside box */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-google-blue flex items-center justify-center font-bold text-sm">
                        PU
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Solution Challenge 2026</div>
                        <div className="text-[11px] text-slate-500">12 Teams participating globally</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                      Top 100 Nominee
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-poornima-700 dark:text-poornima-gold flex items-center justify-center font-bold text-sm">
                        AI
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Gemini Multimodal Sprint</div>
                        <div className="text-[11px] text-slate-500">320+ Student apps deployed</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      Completed
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-red-100 dark:bg-red-900/30 text-google-red flex items-center justify-center font-bold text-sm">
                        DF
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">DevFest Poornima 2026</div>
                        <div className="text-[11px] text-slate-500">500+ Registrations on Bevy</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">
                      Registering
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STUDENT PROJECTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-poornima-700 dark:text-poornima-gold">
              Built by Students
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Innovative Solutions Showcase
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('projects')}
            className="mt-4 sm:mt-0 text-sm font-bold text-poornima-700 dark:text-poornima-gold hover:underline flex items-center gap-1"
          >
            <span>View all student projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col group"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white backdrop-blur-md">
                  {proj.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-poornima-700 dark:group-hover:text-poornima-gold transition">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1">
                    {proj.techStack.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-slate-500 flex items-center gap-1">
                    ⭐ {proj.stars}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 text-center bg-radial-pattern bg-poornima-50 dark:bg-slate-900 border border-poornima-200 dark:border-slate-800 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <GoogleBracketsLogo className="h-10 w-auto mx-auto mb-2" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Ready to code your future with us?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Join GDG on Campus Poornima University today. Get notified about upcoming workshops, certifications, and campus hackathons.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl font-bold text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-lg transition flex items-center gap-2"
              >
                <span>Join Official Chapter (Bevy)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setActiveTab('contact')}
                className="px-6 py-3 rounded-xl font-bold text-poornima-700 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 transition"
              >
                Contact Chapter Leads
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
