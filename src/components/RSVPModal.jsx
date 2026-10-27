import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, MapPin, Sparkles, User, Mail, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVPModal({ event, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enrollmentNo: '',
    branchYear: 'B.Tech CSE - 2nd Year',
    dietary: 'None',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire festive Google-color confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#05488B']
    });
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Top Google Colors line */}
        <div className="grid grid-cols-4 h-1.5 w-full">
          <div className="bg-[#4285F4]"></div>
          <div className="bg-[#EA4335]"></div>
          <div className="bg-[#FBBC05]"></div>
          <div className="bg-[#34A853]"></div>
        </div>

        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-poornima-50 text-poornima-700 dark:bg-poornima-900/50 dark:text-poornima-300 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-poornima-gold" /> RSVP Registration
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
              {event.title}
            </h3>
            <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-google-blue" /> {event.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-google-red" /> {event.location}
              </span>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-google-green">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">You're on the list!</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                We've sent confirmation and calendar invite to <span className="font-semibold text-poornima-700 dark:text-poornima-300">{formData.email}</span>. See you at Poornima University!
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-left text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <p><strong>Attendee:</strong> {formData.name}</p>
                <p><strong>Registration ID:</strong> GDGPU-{Math.floor(100000 + Math.random() * 900000)}</p>
                <p><strong>Venue:</strong> {event.location}</p>
              </div>

              <button
                onClick={handleClose}
                className="mt-6 w-full py-2.5 px-4 rounded-xl font-semibold text-white bg-poornima-700 hover:bg-poornima-800 transition shadow-lg shadow-poornima-700/20"
              >
                Close & Explore More Events
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-poornima-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  University / College Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@poornima.edu.in"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-poornima-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Registration No. / Roll No.
                  </label>
                  <input
                    type="text"
                    value={formData.enrollmentNo}
                    onChange={(e) => setFormData({ ...formData, enrollmentNo: e.target.value })}
                    placeholder="2024PUCSE102"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-poornima-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Branch & Year
                  </label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.branchYear}
                      onChange={(e) => setFormData({ ...formData, branchYear: e.target.value })}
                      className="w-full pl-9 pr-2 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-poornima-700"
                    >
                      <option>B.Tech CSE - 1st Year</option>
                      <option>B.Tech CSE - 2nd Year</option>
                      <option>B.Tech CSE - 3rd Year</option>
                      <option>B.Tech CSE - 4th Year</option>
                      <option>BCA / MCA</option>
                      <option>Other Department</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-bold text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover transition shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 group"
                >
                  <span>Confirm Free RSVP</span>
                  <span className="text-xs bg-slate-900 text-white px-2 py-0.5 rounded-full group-hover:scale-105 transition">Free Pass</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 mt-2">
                  No payment required. Google swags & refreshments provided for registered attendees.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
