import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Search, 
  Sparkles
} from 'lucide-react';
import { eventsData } from '../data/gdgData';

export default function Events({ onOpenRSVP }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Upcoming', 'DevFest', 'Workshop', 'Hackathon'];

  const filteredEvents = eventsData.filter((evt) => {
    const matchesFilter =
      activeFilter === 'All' ||
      (activeFilter === 'Upcoming' && evt.status === 'Upcoming') ||
      evt.category.toLowerCase().includes(activeFilter.toLowerCase());

    const matchesSearch =
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-12 py-8 pb-20 bg-slate-50">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 text-poornima-700 text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200">
          <Calendar className="w-4 h-4 text-google-red" /> Events & Gatherings
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Where Knowledge Gets Shared
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Explore upcoming hackathons, Google Cloud study jams, and DevFest at Poornima University.
        </p>

        <div className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by topic, speaker, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-poornima-700 shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full sm:w-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                  activeFilter === f
                    ? 'bg-poornima-700 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No events found</h3>
            <p className="text-sm text-slate-500 mt-1">Try searching with different keywords.</p>
            <button
              onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-poornima-700 bg-poornima-50"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => {
              const isUpcoming = event.status === 'Upcoming';
              return (
                <div
                  key={event.id}
                  className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-video overflow-hidden bg-slate-100">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-google-green text-white shadow-xs">
                          {event.status}
                        </span>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-slate-900 shadow-xs backdrop-blur-xs">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-poornima-700 transition line-clamp-2">
                        {event.title}
                      </h3>

                      <div className="mt-3 space-y-2 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-google-blue shrink-0" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-poornima-gold shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-google-red shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>

                      <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {event.description}
                      </p>

                      {event.speakers && event.speakers.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                            Speaker / Lead
                          </div>
                          <div className="text-xs">
                            <p className="font-bold text-slate-900 leading-tight">{event.speakers[0].name}</p>
                            <p className="text-[11px] text-slate-500">{event.speakers[0].role}</p>
                          </div>
                        </div>
                      )}

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {event.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onOpenRSVP(event)}
                      className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover transition shadow-xs flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-poornima-700" />
                      <span>Reserve Free Pass</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

    </div>
  );
}
