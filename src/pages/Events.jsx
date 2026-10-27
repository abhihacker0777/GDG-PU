import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Search, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { realEvents } from '../data/gdgData';

export default function Events({ onOpenRSVP }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = realEvents.filter((evt) => {
    return (
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="space-y-12 py-8 pb-20 bg-slate-50">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 text-poornima-700 text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200">
          <Calendar className="w-4 h-4 text-google-red" /> Chapter Events
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Official Chapter Gatherings
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Workshops, briefing sessions, and orientation events hosted at Poornima University.
        </p>

        <div className="mt-8 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search events (e.g. Solution Challenge, AI, Hackathon)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-poornima-700 shadow-xs"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {event.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-google-blue" /> {event.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-poornima-700 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{event.venue} • {event.location}</span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {event.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between">
                <button
                  onClick={() => onOpenRSVP(event)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover transition shadow-xs flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-poornima-700" />
                  <span>RSVP / Pass</span>
                </button>

                <a
                  href={event.bevyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <span>View on Bevy</span>
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
