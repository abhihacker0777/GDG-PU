import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2, Phone, Sparkles, ExternalLink, Globe } from 'lucide-react';
import GoogleColorBar from '../components/GoogleColorBar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'CSE',
    subject: 'General Inquiry',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="space-y-16 py-8 pb-20">
      
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 dark:bg-slate-800 text-poornima-700 dark:text-poornima-gold text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200 dark:border-slate-700">
          <MessageSquare className="w-4 h-4 text-google-blue" /> Get In Touch
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Connect With Our Chapter
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have a question about upcoming events, hackathon partnerships, or want to invite GDG Poornima to collaborate? Reach out to us anytime!
        </p>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Campus Map Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Chapter Headquarters</h2>
              
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-poornima-50 dark:bg-slate-800 text-poornima-700 dark:text-poornima-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Campus Location</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Department of Computer Science & Engineering, <br />
                      Poornima University, IS-2027-2031, Ramchandrapura, P.O. Vidhani Vatika, Sitapura Extension, Jaipur, Rajasthan 303905
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-google-blue shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Email Us</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <a href="mailto:gdg@poornima.edu.in" className="hover:text-poornima-700 dark:hover:text-poornima-gold">
                        gdg@poornima.edu.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-green-50 dark:bg-green-900/30 text-google-green shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">University Portal</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <a href="https://poornima.edu.in" target="_blank" rel="noreferrer" className="hover:text-poornima-700 dark:hover:text-poornima-gold flex items-center gap-1">
                        poornima.edu.in <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Bevy Community Link Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-poornima-700 to-blue-700 text-white space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-poornima-gold">
                  <Sparkles className="w-4 h-4" /> Official Community Portal
                </div>
                <h4 className="font-extrabold text-base">Join on Google Developer Groups</h4>
                <p className="text-xs text-slate-100 leading-relaxed">
                  Join our official chapter on the Google Community Dev portal to receive verified event notifications and tickets.
                </p>
                <a
                  href="https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white text-poornima-900 hover:bg-slate-100 transition shadow-sm"
                >
                  <span>Go to Bevy Chapter Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <GoogleColorBar className="h-1.5 w-full absolute top-0 left-0 right-0" />

              {sent ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 text-google-green rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Delivered!</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out to GDG on Campus Poornima University. Our team will get back to your email ({formData.email}) within 24–48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: '', email: '', department: 'CSE', subject: 'General Inquiry', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-poornima-700 hover:bg-poornima-800 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send us a message</h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Fill out the form below and we will route your inquiry to the appropriate domain lead.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-poornima-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@poornima.edu.in"
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-poornima-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Department / Program
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-poornima-700"
                      >
                        <option>Computer Science & Engineering (CSE)</option>
                        <option>BCA / MCA</option>
                        <option>AI & Data Science</option>
                        <option>Faculty / Staff</option>
                        <option>External / Other Organization</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-poornima-700"
                      >
                        <option>General Inquiry</option>
                        <option>Event Participation / RSVP</option>
                        <option>Hackathon Sponsorship</option>
                        <option>Speaker Session Proposal</option>
                        <option>Core Team Application</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist you or collaborate?"
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-poornima-700"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl font-bold text-sm text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover shadow-md transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-poornima-700" />
                    <span>Send Message to Chapter Leads</span>
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
