import React from 'react';
import { Code2, Zap } from 'lucide-react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center transform rotate-12 shadow-lg">
          <Code2 className="w-6 h-6 text-white transform -rotate-12" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
          <Zap className="w-2.5 h-2.5 text-white" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
          Sujal
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400 -mt-1">
          Developer
        </span>
      </div>
    </div>
  );
}