import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Monitor, Smartphone, Briefcase, FileText, Award, ExternalLink, BookOpen } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'React Native & Windows Developer';

  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const keyMetrics = [
    { label: "Experience", value: "1.5 Years", detail: "React Native Internship", icon: <Briefcase className="w-4 h-4" /> },
    { label: "Specialization", value: "Mobile & Desktop", detail: "React Native & RN Windows", icon: <Monitor className="w-4 h-4" /> },
    { label: "Production System", value: "RetailBoon", detail: "Enterprise POS & Billing", icon: <Smartphone className="w-4 h-4" /> },
    { label: "Research Published", value: "TransitSync", detail: "JAAFR • Oct 2026", icon: <BookOpen className="w-4 h-4" /> }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/20 pt-20 pb-16">
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400/20 to-purple-400/20 dark:from-indigo-600/10 dark:to-purple-600/10 rounded-full blur-3xl animate-orb-1 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-400/15 to-cyan-400/15 dark:from-blue-600/8 dark:to-cyan-600/8 rounded-full blur-3xl animate-orb-2 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-violet-500/8 to-fuchsia-500/8 dark:from-violet-500/5 dark:to-fuchsia-500/5 rounded-full blur-3xl animate-spotlight pointer-events-none"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Status pill with glow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-indigo-200/50 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-medium mb-8 animate-glow-pulse">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Published Researcher • React Native Developer • Open to Opportunities
          </div>

          {/* Name with gradient */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto]">
              Sujal Shah
            </span>
          </h1>

          {/* Typed subtitle */}
          <div className="h-10 flex items-center justify-center mb-6">
            <p className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300">
              {typedText}
              <span className="animate-blink text-indigo-500 ml-0.5">|</span>
            </p>
          </div>

          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-5 max-w-3xl mx-auto leading-relaxed">
            Specialized in cross-platform development with <strong className="text-gray-800 dark:text-gray-200 font-semibold">React Native</strong> and <strong className="text-gray-800 dark:text-gray-200 font-semibold">React Native Windows</strong>. Building enterprise POS systems, native desktop modules, and intelligent transport solutions.
          </p>

          {/* Research Paper Badge - Premium highlight */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border border-amber-200/80 dark:border-amber-800/60 mb-10 animate-badge-glow">
            <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <div className="text-left">
              <span className="block text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">Published Research</span>
              <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">TransitSync — JAAFR Journal, Vol. 4, Issue 10</span>
            </div>
            <a
              href="https://rjwave.org/jaafr/viewpaperforall.php?paper=JAAFRTH00114"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </a>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 justify-center items-center mb-14">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center gap-2.5 hover-lift"
            >
              <Monitor className="w-4 h-4 group-hover:scale-110 transition-transform" />
              View Projects
            </button>

            <button
              onClick={() => scrollToSection('publications')}
              className="group px-7 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center gap-2.5 hover-lift"
            >
              <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Research Paper
            </button>

            <button
              onClick={() => scrollToSection('experience')}
              className="px-7 py-3.5 glass-card hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold text-sm rounded-xl transition-all duration-300 flex items-center gap-2.5 hover-lift"
            >
              <Briefcase className="w-4 h-4" />
              Experience
            </button>

            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/sujal1607shah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl transition-all duration-300 hover-lift"
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sujal-shah-810457290"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:bg-blue-50 dark:hover:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl transition-all duration-300 hover-lift"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:shahsujal2005@gmail.com"
                className="p-3 glass-card hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl transition-all duration-300 hover-lift"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto stagger-children">
            {keyMetrics.map((metric, idx) => (
              <div key={idx} className="group p-5 rounded-2xl glass-card-strong hover-lift cursor-default text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                    {metric.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold">
                    {metric.label}
                  </span>
                </div>
                <span className="block text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mb-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {metric.value}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="mt-16 inline-flex flex-col items-center gap-2 text-gray-400 hover:text-indigo-500 transition-colors group"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-indigo-500" />
        </button>
      </div>
    </section>
  );
}