import React, { useState } from 'react';
import { Code2, Github, ExternalLink, Star, Sparkles, PlusCircle } from 'lucide-react';
import { projectsData } from '../data/gdgData';

export default function Projects({ setActiveTab }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & ML', 'Mobile & Cloud', 'IoT & Hardware'];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'All') return true;
    return p.category.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(p.category.toLowerCase());
  });

  return (
    <div className="space-y-16 py-8 pb-20">
      
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-poornima-50 dark:bg-slate-800 text-poornima-700 dark:text-poornima-gold text-xs font-bold uppercase tracking-wider mb-4 border border-poornima-200 dark:border-slate-700">
          <Code2 className="w-4 h-4 text-google-yellow" /> Open Source & Innovation
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Made by Poornima Students
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Explore real-world software, AI prototypes, and mobile apps engineered during GDG hackathons, solution sprints, and study jams.
        </p>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filter === cat
                  ? 'bg-poornima-700 text-white dark:bg-poornima-gold dark:text-slate-900 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-video sm:aspect-16/9 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white backdrop-blur-md shadow-xs">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-md">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {project.stars}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-poornima-700 dark:group-hover:text-poornima-gold transition">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </a>

                {project.liveDemo && project.liveDemo !== '#' && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-poornima-gold hover:bg-poornima-goldHover transition shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUBMIT YOUR PROJECT CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-poornima-100 dark:bg-poornima-900/60 text-poornima-700 dark:text-poornima-gold flex items-center justify-center">
            <PlusCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Built something cool at Poornima?</h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Submit your student project to get featured on the official GDG on Campus Poornima University website and receive mentorship from Google Developer Experts.
          </p>
          <button
            onClick={() => setActiveTab('contact')}
            className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-poornima-700 hover:bg-poornima-800 transition shadow-sm"
          >
            Submit Project for Review
          </button>
        </div>
      </section>

    </div>
  );
}
