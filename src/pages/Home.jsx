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
  Flame, 
  Globe2, 
  Smartphone, 
  Cloud,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import GoogleBracketsLogo from '../components/GoogleBracketsLogo';
import { chapterInfo, techTracks, eventsData, realChapterPhotos, realOrganizers, flagshipSpotlights } from '../data/gdgData';

export default function Home({ setActiveTab, onOpenRSVP }) {
  const featuredEvent = eventsData.find((e) => e.featured) || eventsData[0];

  return (
    <div className="space-y-20 pb-16 bg-slate-50">
      
      <section className="relative overflow-hidden pt-10 sm:pt-16 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-xs mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-google-green animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Official Chapter • <span className="text-poornima-700 font-bold">Poornima University, Jaipur</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-poornima-gold text-slate-900">
              Active
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="/pu_clean_logo.png" 
              alt="Poornima University Logo" 
              className="h-12 sm:h-16 w-auto object-contain animate-logo-pulse"
              onError={(e) => {
                e.currentTarget.src = '/logo.png';
              }}
            />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-[1.15]">
            Where Passion Meets <br />
            <span className="text-poornima-700">
              Google Technologies
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong className="text-slate-900 font-semibold">GDG on Campus Poornima University</strong>. Empowering students with cutting-edge tools in Generative AI, Google Cloud, Android, and Web Engineering.
          </p>

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
              className="px-6 sm:px-8 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 shadow-xs transition text-sm sm:text-base"
            >
              Explore All Events
            </button>

            <a
              href="https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/"
              target="_blank"
              rel="noreferrer"
              className="px-6 sm:px-8 py-3.5 rounded-xl font-bold text-poornima-700 hover:text-poornima-900 transition flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Join Chapter on Bevy</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {chapterInfo.stats.map((stat, i) => (
              <div 
                key={i} 
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition text-left relative overflow-hidden group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 flex items-center gap-1.5">
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">
            Real Campus Community
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Inside GDG on Campus Poornima University
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Real workshops, auditorium hackathons, and high-energy developer sessions at our Jaipur campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {realChapterPhotos.map((photo, idx) => (
            <div 
              key={idx}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img 
                  src={photo.url} 
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-base text-slate-900">{photo.caption}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">
            Signature Student Initiatives
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Featuring Google Gemini & FixMyRoad
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            High-impact technical projects built and maintained by Poornima University developers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {flagshipSpotlights.map((spotlight) => (
            <div
              key={spotlight.id}
              className="rounded-3xl p-8 bg-white border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-poornima-50 text-poornima-700">
                    {spotlight.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Layers className="w-3.5 h-3.5 text-poornima-700" /> Production Ready
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">{spotlight.name}</h3>
                <p className="text-xs font-semibold text-poornima-700 mt-0.5">{spotlight.tagline}</p>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  {spotlight.description}
                </p>

                <div className="mt-5 space-y-2">
                  {spotlight.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-google-green shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {spotlight.techStack.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={spotlight.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1.5"
                >
                  <span>Repository Code</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={spotlight.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover transition shadow-xs flex items-center gap-1.5"
                >
                  <span>Experience Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {featuredEvent && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-6 sm:p-10 shadow-xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-google-red text-white uppercase tracking-wider">
                    <Flame className="w-3.5 h-3.5 fill-white" /> Flagship Gathering
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-poornima-gold font-semibold">
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
                  <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
                    <Calendar className="w-4 h-4 text-poornima-gold" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
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
                    View All Gatherings
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-4/3">
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">
            Leadership & Guidance
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Meet the Organizers
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Official organizers managing Google Developer Groups on Campus Poornima University.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {realOrganizers.map((org, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition text-center flex flex-col items-center justify-between"
            >
              <div>
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-slate-200 shadow-sm">
                  <img src={org.avatar} alt={org.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-base text-slate-900">{org.name}</h4>
                <p className="text-xs font-semibold text-poornima-700 mt-0.5">{org.role}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{org.affiliation}</p>
                <p className="text-xs text-slate-600 mt-3 line-clamp-3">{org.bio}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 w-full flex items-center justify-center">
                <a
                  href={org.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-poornima-700 hover:underline flex items-center gap-1"
                >
                  <span>View profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 text-center bg-white border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <GoogleBracketsLogo className="h-10 w-auto mx-auto mb-2" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Ready to code your future with us?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Join GDG on Campus Poornima University on Bevy. Get notified about upcoming workshops, certifications, and campus hackathons.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl font-bold text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-md transition flex items-center gap-2"
              >
                <span>Join Official Chapter (Bevy)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setActiveTab('contact')}
                className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition"
              >
                Contact Chapter
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
