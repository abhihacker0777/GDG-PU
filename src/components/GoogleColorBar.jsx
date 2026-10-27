import React from 'react';

export default function GoogleColorBar({ className = "h-1 w-full" }) {
  return (
    <div className={`grid grid-cols-4 ${className} overflow-hidden`}>
      <div className="bg-[#4285F4]"></div>
      <div className="bg-[#EA4335]"></div>
      <div className="bg-[#FBBC05]"></div>
      <div className="bg-[#34A853]"></div>
    </div>
  );
}
