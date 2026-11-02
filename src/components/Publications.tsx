import React, { useEffect, useRef, useState } from 'react';
import {
  Award,
  BookOpen,
  ExternalLink,
  FileText,
  Calendar,
  User,
  Hash,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe
} from 'lucide-react';

export function Publications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const paperFeatures = [
    "Real-time GPS vehicle tracking",
    "Fleet and dispatch management",
    "Geofencing and location-based event detection",
    "Real-time synchronization using Socket.IO",
    "Emergency SOS functionality",
    "Digital Proof of Delivery",
    "Trip lifecycle management",
    "JWT authentication and role-based access control"
  ];

  return (
    <section id="publications" ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/20 to-orange-50/10 dark:from-gray-900 dark:via-gray-900 dark:to-amber-950/5 transition-colors">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-amber-400/10 to-transparent dark:from-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-indigo-400/10 to-transparent dark:from-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200/60 dark:border-amber-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            Published Research
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Research{' '}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Publication
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Peer-reviewed research paper published in an international academic journal, bridging theory with practical engineering.
          </p>
        </div>

        {/* Main Publication Card */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 dark:from-amber-500 dark:via-orange-600 dark:to-amber-500 rounded-3xl p-[2px] animate-gradient bg-[length:200%_100%]">
              <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[22px]"></div>
            </div>

            <div className="relative p-8 sm:p-10 lg:p-12">
              {/* Publication Header */}
              <div className="flex flex-col lg:flex-row gap-8 mb-10">
                <div className="flex-1">
                  {/* Journal badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                    <BookOpen className="w-3.5 h-3.5" />
                    JAAFR • Volume 4 • Issue 10 • October 2026
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
                    TransitSync: A Distributed Real-Time Fleet Management, Telematics Dispatch, and Operational Synchronization Framework for Intelligent Transport Systems
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-gray-400" />
                      Sujal Shah & Ms. K Ramya
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      October 2026
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Hash className="w-4 h-4 text-gray-400" />
                      Paper ID: JAAFRTH00114
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    A comprehensive research paper presenting TransitSync — a full-stack distributed system engineered for intelligent transport management. The framework integrates real-time GPS tracking, fleet dispatch optimization, geofencing, and emergency response into a unified platform built with modern web and mobile technologies.
                  </p>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://rjwave.org/jaafr/viewpaperforall.php?paper=JAAFRTH00114"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover-lift"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Read Full Paper
                    </a>
                    <button
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center gap-2 px-6 py-3 glass-card hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold text-sm rounded-xl transition-all duration-300 hover-lift"
                    >
                      <FileText className="w-4 h-4" />
                      View TransitSync Project
                    </button>
                  </div>
                </div>

                {/* Right sidebar - Publication details */}
                <div className="lg:w-80 space-y-4">
                  {/* Journal info card */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border border-amber-200/60 dark:border-amber-800/40">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/40">
                        <Globe className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">Journal</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">JAAFR</p>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">Full Name</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-right text-xs max-w-[160px]">Journal of Advance and Future Research</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">Volume</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">4</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">Issue</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">Paper ID</span>
                        <span className="font-mono font-semibold text-gray-800 dark:text-gray-200 text-xs">JAAFRTH00114</span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate card */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-200/60 dark:border-emerald-800/40">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-900/40">
                        <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">Publication Certificate</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Verified Credential</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">Credential ID</span>
                        <span className="font-mono font-semibold text-gray-800 dark:text-gray-200">515935</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">Issued</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">October 2026</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">Issuer</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">JAAFR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology & Features Grid */}
              <div className="border-t border-gray-200/80 dark:border-gray-800 pt-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  TransitSync — Core Research Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8 stagger-children">
                  {paperFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 hover:border-amber-300 dark:hover:border-amber-700 transition-colors group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack for paper */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Socket.IO', 'Zustand', 'React Navigation', 'JWT'].map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
