import React from 'react';
import { Smartphone, Monitor } from 'lucide-react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 group-hover:shadow-indigo-500/40 group-hover:scale-105">
        <Smartphone className="w-4 h-4 absolute -translate-x-0.5 -translate-y-0.5 opacity-70" />
        <Monitor className="w-5 h-5 absolute translate-x-0.5 translate-y-0.5" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-base font-black text-gray-900 dark:text-white leading-tight tracking-tight">
          Sujal Shah
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 leading-tight">
          React Native & Windows
        </span>
      </div>
    </a>
  );
}