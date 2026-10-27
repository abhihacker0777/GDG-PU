import React from 'react';

/**
 * Google Developer Groups Brackets Logo: `< >`
 * Features Google 4-brand colors:
 * - Left angle: Google Blue (#4285F4) and Google Red (#EA4335)
 * - Right angle: Google Yellow (#FBBC05) and Google Green (#34A853)
 */
export default function GoogleBracketsLogo({ className = "h-8 w-auto", showText = false, subtitle = "" }) {
  return (
    <div className="inline-flex items-center gap-3">
      {/* SVG Icon */}
      <svg
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Google Developer Groups"
      >
        {/* Left Bracket '<' */}
        {/* Upper Left: Blue */}
        <path
          d="M32 10 L8 29.5 L15.5 35.5 L39.5 16 Z"
          fill="#4285F4"
        />
        {/* Lower Left: Red */}
        <path
          d="M8 29.5 L32 49 L39.5 43 L15.5 23.5 Z"
          fill="#EA4335"
        />

        {/* Right Bracket '>' */}
        {/* Upper Right: Yellow */}
        <path
          d="M68 10 L92 29.5 L84.5 35.5 L60.5 16 Z"
          fill="#FBBC05"
        />
        {/* Lower Right: Green */}
        <path
          d="M92 29.5 L68 49 L60.5 43 L84.5 23.5 Z"
          fill="#34A853"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 font-bold tracking-tight text-slate-900 dark:text-white leading-none text-base sm:text-lg">
            <span>GDG on Campus</span>
          </div>
          {subtitle && (
            <span className="text-xs font-semibold text-poornima-700 dark:text-poornima-gold tracking-wide">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
