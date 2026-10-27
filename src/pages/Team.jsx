import React from 'react';
import { realOrganizers } from '../data/gdgData';

export default function Team() {
  return (
    <div className="bg-white py-12 sm:py-16 min-h-[70vh]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl sm:text-4xl font-normal text-slate-800 mb-12 sm:mb-16">
          Organizers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
          {realOrganizers.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4 bg-slate-100">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {member.name}
              </h3>

              <p className="text-sm text-slate-600 mt-1">
                {member.role}
              </p>

              {member.company ? (
                <p className="text-xs text-slate-500 mt-0.5 max-w-[240px] leading-snug min-h-[2rem]">
                  {member.company}
                </p>
              ) : (
                <div className="min-h-[2rem]"></div>
              )}

              <a
                href={member.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
              >
                View profile
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
