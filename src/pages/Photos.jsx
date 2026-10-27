import React from 'react';
import { Camera, MapPin } from 'lucide-react';
import { realChapterPhotos } from '../data/gdgData';

export default function Photos() {
  return (
    <div className="space-y-12 sm:space-y-16 py-8 pb-20 bg-slate-50">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 text-poornima-700 text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200">
          <Camera className="w-4 h-4 text-google-blue" /> Campus Atmosphere
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Chapter Photos
        </h1>
        <p className="mt-4 text-xs sm:text-base text-slate-600 max-w-2xl mx-auto">
          Moments captured during workshops, hackathon presentations, and orientation sessions at Poornima University.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {realChapterPhotos.map((photo, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-google-red" /> Poornima University Campus
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">{photo.caption}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs text-center space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">Have photos from recent GDG sessions?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Tag us on Instagram @gdg.poornima or share your event clicks on the chapter WhatsApp group to get featured.
          </p>
        </div>
      </section>

    </div>
  );
}
