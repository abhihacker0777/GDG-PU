import React from 'react';

export default function GoogleBracketsLogo({ className = "h-8 w-auto", showText = false, subtitle = "" }) {
  return (
    <div className="inline-flex items-center gap-3 group">
      <svg
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} transition-transform duration-300 group-hover:scale-105`}
        aria-label="Google Developer Groups"
      >
        <path
          d="M32 10 L8 29.5 L15.5 35.5 L39.5 16 Z"
          fill="#4285F4"
        />
        <path
          d="M8 29.5 L32 49 L39.5 43 L15.5 23.5 Z"
          fill="#EA4335"
        />
        <path
          d="M68 10 L92 29.5 L84.5 35.5 L60.5 16 Z"
          fill="#FBBC05"
        />
        <path
          d="M92 29.5 L68 49 L60.5 43 L84.5 23.5 Z"
          fill="#34A853"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 font-bold tracking-tight text-slate-900 leading-none text-base sm:text-lg">
            <span>GDG on Campus</span>
          </div>
          {subtitle && (
            <span className="text-xs font-semibold text-poornima-700 tracking-wide">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
