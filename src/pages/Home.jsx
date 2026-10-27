import React from 'react';
import { 
  Users, 
  MapPin, 
  ExternalLink, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Send,
  Calendar, 
  ArrowRight, 
  Sparkles,
  Camera
} from 'lucide-react';
import { chapterInfo, realOrganizers, realEvents, realChapterPhotos } from '../data/gdgData';

export default function Home({ setActiveTab, onOpenRSVP }) {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20 bg-slate-50">
      
      <section className="relative">
        <div className="w-full h-44 sm:h-64 md:h-80 overflow-hidden bg-slate-200">
          <img
            src={chapterInfo.bannerUrl}
            alt="GDG on Campus Web Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-20 md:-mt-24 relative z-10">
          <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-4 border-white shadow-md bg-white shrink-0">
                  <img
                    src={chapterInfo.thumbUrl}
                    alt="GDG Chapter Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-google-blue bg-blue-50 px-2.5 py-0.5 rounded-full">
                    Google Developer Groups on Campus
                  </span>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                    GDG on Campus Poornima University
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500 pt-1">
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-google-red" /> {chapterInfo.city}, {chapterInfo.country}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-google-blue" /> {chapterInfo.membersCount} Members
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
                <a
                  href={chapterInfo.channels.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Group</span>
                </a>

                <a
                  href={chapterInfo.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-sm transition flex items-center gap-1.5"
                >
                  <span>Join Community (Bevy)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">About the Chapter</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {chapterInfo.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <a
                    href={chapterInfo.channels.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-50 text-pink-700 hover:bg-pink-100 transition font-semibold"
                  >
                    <Instagram className="w-3.5 h-3.5" /> @gdg.poornima
                  </a>
                  <a
                    href={chapterInfo.channels.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition font-semibold"
                  >
                    <Linkedin className="w-3.5 h-3.5" /> GDG Poornima LinkedIn
                  </a>
                  <a
                    href={chapterInfo.channels.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 transition font-semibold"
                  >
                    <Send className="w-3.5 h-3.5" /> Telegram Channel
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="/pu_clean_logo.png"
                    alt="Poornima University Logo"
                    className="h-10 sm:h-12 w-auto object-contain animate-logo-pulse"
                    onError={(e) => {
                      e.currentTarget.src = '/logo.png';
                    }}
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Poornima University</h4>
                    <p className="text-[11px] text-slate-500">Jaipur, Rajasthan</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  NAAC A+ accredited university empowering students with cutting-edge incubation, computing labs, and Google technologies.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">Official Events</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Chapter Events & Workshops
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('events')}
            className="text-xs sm:text-sm font-bold text-poornima-700 hover:underline flex items-center gap-1"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {realEvents.map((evt) => (
            <div
              key={evt.id}
              className="rounded-3xl p-6 bg-white border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {evt.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-google-blue" /> {evt.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{evt.title}</h3>
                <p className="text-xs font-semibold text-poornima-700 mt-0.5">{evt.venue} • {evt.location}</p>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                  {evt.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {evt.tags.map((t, i) => (
                    <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenRSVP(evt)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover transition shadow-xs flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-poornima-700" />
                  <span>RSVP / Details</span>
                </button>

                <a
                  href={evt.bevyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <span>Official Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">Campus Atmosphere</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Chapter Photos
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('photos')}
            className="text-xs sm:text-sm font-bold text-poornima-700 hover:underline flex items-center gap-1"
          >
            <span>Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {realChapterPhotos.map((photo, i) => (
            <div key={i} className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-md transition">
              <div className="aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-slate-900">{photo.caption}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">Leadership</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Organizers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Official student organizers of Google Developer Groups on Campus Poornima University.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {realOrganizers.map((org, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition text-center flex flex-col items-center justify-between"
            >
              <div>
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-slate-200 shadow-sm">
                  <img src={org.avatar} alt={org.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-lg sm:text-xl text-slate-900">{org.name}</h4>
                <p className="text-xs font-semibold text-poornima-700 mt-0.5">{org.role}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{org.company}</p>
                <p className="text-xs text-slate-600 mt-4 line-clamp-4 leading-relaxed text-left">{org.bio}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 w-full flex items-center justify-center">
                <a
                  href={org.profileUrl}
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
        <div className="rounded-3xl p-6 sm:p-10 md:p-12 text-center bg-white border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Join 2,258+ Developers at Poornima University
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Stay informed about hackathons, code labs, and certification sprints. Connect with our community groups directly.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={chapterInfo.channels.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Join WhatsApp Group</span>
            </a>
            <a
              href={chapterInfo.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-sm transition flex items-center gap-2"
            >
              <span>Join Official Bevy Page</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
