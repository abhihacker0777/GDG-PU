import React from 'react';
import { 
  Calendar, 
  ArrowRight, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { chapterInfo, realOrganizers, realEvents, realChapterPhotos } from '../data/gdgData';

export default function Home({ setActiveTab, onOpenRSVP }) {
  return (
    <div className="space-y-12 sm:space-y-16 pb-12 pt-6 sm:pt-10 bg-slate-50">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">Official Gatherings</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Chapter Events & Workshops
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('events')}
            className="text-xs sm:text-sm font-bold text-poornima-700 hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {realEvents.slice(0, 2).map((evt) => (
            <div
              key={evt.id}
              className="rounded-3xl p-5 sm:p-6 bg-white border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between"
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

                <h3 className="text-base sm:text-lg font-bold text-slate-900">{evt.title}</h3>
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
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  Past Event
                </span>

                <a
                  href={evt.bevyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition flex items-center gap-1.5"
                >
                  <span>View Details on Bevy</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
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
            className="text-xs sm:text-sm font-bold text-poornima-700 hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {realChapterPhotos.map((photo, i) => (
            <div key={i} className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-md transition">
              <div className="aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-bold text-sm text-slate-900">{photo.caption}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-poornima-700">Leadership</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 text-center">
            Organizers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 text-center">
            Official student organizers of Google Developer Groups on Campus Poornima University.
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center items-stretch gap-6 sm:gap-8">
          {realOrganizers.map((org, i) => (
            <div
              key={i}
              className="w-full sm:w-[320px] md:w-[340px] lg:w-[360px] p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between items-center text-center"
            >
              <div className="w-full flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-slate-200 shadow-sm bg-slate-100">
                  <img src={org.avatar} alt={org.name} className="w-full h-full object-cover object-center" />
                </div>
                
                <span className="inline-flex items-center justify-center text-[11px] font-bold px-3 py-1 rounded-full bg-poornima-50 text-poornima-700 border border-poornima-200 mb-2 mx-auto">
                  {org.role}
                </span>

                <h4 className="font-bold text-lg sm:text-xl text-slate-900 text-center">{org.name}</h4>
                <p className="text-xs font-medium text-slate-500 mt-0.5 text-center min-h-[2.5rem] flex items-center justify-center max-w-[260px] mx-auto">{org.company}</p>
                <p className="text-xs text-slate-600 mt-3 line-clamp-4 leading-relaxed text-center">{org.bio}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 w-full flex items-center justify-center">
                <a
                  href={org.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-poornima-700 hover:underline flex items-center justify-center gap-1.5"
                >
                  <span>View profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
