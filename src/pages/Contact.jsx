import React, { useState, useRef, useEffect } from 'react';
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Globe,
  ChevronDown,
  Check
} from 'lucide-react';

function CustomSelect({ label, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-xs font-semibold text-slate-700 mb-1">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 flex items-center justify-between hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-poornima-700 shadow-2xs transition"
      >
        <span className="truncate text-left text-slate-800">{value}</span>
        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl p-1.5 z-40 animate-in fade-in zoom-in-95 duration-150">
          <div className="max-h-60 overflow-y-auto space-y-0.5">
            {options.map((opt) => {
              const isSelected = opt === value;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition flex items-center justify-between ${isSelected
                      ? 'bg-poornima-50 text-poornima-800 font-bold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                >
                  <span className="truncate">{opt}</span>
                  {isSelected && <Check className="w-4 h-4 text-poornima-700 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Computer Science & Engineering (CSE)',
    subject: 'General Inquiry',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const departmentOptions = [
    'Computer Science & Engineering (CSE)',
    'BCA / MCA',
    'AI & Data Science',
    'Faculty / Staff',
    'External / Other Organization'
  ];

  const subjectOptions = [
    'General Inquiry',
    'Event Participation / RSVP',
    'Hackathon Sponsorship',
    'Speaker Session Proposal',
    'Core Team Application'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="space-y-16 py-8 pb-20 bg-slate-50">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 text-poornima-700 text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200">
          <MessageSquare className="w-4 h-4 text-google-blue" /> Get In Touch
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Connect With Our Chapter
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Have a question about upcoming events, hackathon partnerships, or want to invite GDG Poornima to collaborate? Reach out to us anytime!
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">

              <div className="pb-4 border-b border-slate-100 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Chapter Headquarters</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Poornima University Campus</p>
                </div>
                <a
                  href="https://poornima.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit Poornima University Official Website"
                  className="shrink-0 transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src="/23.png"
                    alt="Poornima University"
                    className="h-8 sm:h-10 w-auto max-w-[110px] sm:max-w-[140px] object-contain"
                  />
                </a>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-poornima-50 text-poornima-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Campus Location</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Poornima University, IS-2027-2031, Ramchandrapura, P.O. Vidhani Vatika, Sitapura Extension, Jaipur, Rajasthan 303905
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-google-blue shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      <a href="mailto:gdg@poornima.edu.in" className="hover:text-poornima-700">
                        gdg@poornima.edu.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-green-50 text-google-green shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">University Portal</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      <a href="https://poornima.edu.in" target="_blank" rel="noreferrer" className="hover:text-poornima-700 flex items-center gap-1">
                        poornima.edu.in <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-poornima-700 text-white space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-poornima-gold">
                  <Sparkles className="w-4 h-4" /> Official Community Portal
                </div>
                <h4 className="font-extrabold text-base">Join On Google Developer Groups</h4>
                <p className="text-xs text-slate-100 leading-relaxed">
                  Join our official chapter on the Google Community Dev portal to receive verified event notifications and tickets.
                </p>
                <a
                  href="https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white text-poornima-900 hover:bg-slate-100 transition shadow-xs"
                >
                  <span>Go To Bevy Chapter Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs relative overflow-hidden">
              {sent ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-green-100 text-google-green rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Delivered!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out to GDG on Campus Poornima University. Our team will get back to your email ({formData.email}) within 24–48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({
                        name: '',
                        email: '',
                        department: 'Computer Science & Engineering (CSE)',
                        subject: 'General Inquiry',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-poornima-700 hover:bg-poornima-800 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Send Us A Message</h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Fill out the form below and we will route your inquiry to the appropriate organizer.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-poornima-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@poornima.edu.in"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-poornima-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <CustomSelect
                      label="Department / Program"
                      value={formData.department}
                      onChange={(val) => setFormData({ ...formData, department: val })}
                      options={departmentOptions}
                    />

                    <CustomSelect
                      label="Subject"
                      value={formData.subject}
                      onChange={(val) => setFormData({ ...formData, subject: val })}
                      options={subjectOptions}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist you or collaborate?"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-poornima-700"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 sm:px-6 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-md transition inline-flex items-center justify-center gap-2 text-center"
                  >
                    <Send className="w-4 h-4 text-poornima-900 shrink-0" />
                    <span>Send Message To Chapter Organizers</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
