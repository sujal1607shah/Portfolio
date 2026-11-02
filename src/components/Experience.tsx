import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Monitor, Smartphone, Terminal, Cpu, Sparkles } from 'lucide-react';

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "React Native Developer Intern",
      company: "Ordex Technology Solutions",
      project: "RetailBoon Bussiness App",
      duration: "1.5 Years",
      location: "Ahmedabad, India",
      type: "Internship",
      description:
        "Specialized in architecting, developing, and maintaining cross-platform enterprise retail and Point of Sale (POS) software targeting mobile and React Native Windows desktop platforms.",
      highlights: [
        "Engineered and maintained production-grade POS interfaces, real-time transaction processing screens, and thermal receipt printing workflows via native module bridges.",
        "Built comprehensive billing workflows incorporating automated discount engines, tiered tax calculation logic, transaction item displays, and live total calculations.",
        "Implemented high-performance product catalog screens with category-based filtering and fluid, horizontally scrollable product carousels optimized for large inventories.",
        "Architected scalable application state using Zustand and integrated AsyncStorage for persistent cart data, atomic quantity updates, and offline resilience.",
        "Diagnosed and resolved complex React Native Windows layout bugs, platform-specific rendering anomalies, and cross-platform desktop compatibility hurdles.",
        "Developed end-to-end UI automation testing suites using Appium and WebdriverIO (WDIO), troubleshooting selector reliability, element visibility, and CI test pipelines.",
        "Contributed to Windows application build configuration, native dependencies in Visual Studio, packaging (MSIX), and deployment troubleshooting."
      ],
      technologies: [
        "React Native",
        "React Native Windows",
        "TypeScript",
        "JavaScript",
        "Zustand",
        "AsyncStorage",
        "Appium",
        "WebdriverIO (WDIO)",
        "REST APIs",
        "Visual Studio",
        "Native Modules",
        "Git"
      ]
    }
  ];

  const competencies = [
    {
      icon: <Smartphone className="w-5 h-5 text-indigo-500" />,
      title: "Mobile Architecture",
      desc: "Cross-platform development with clean component hierarchies, responsive layouts, and native performance.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Monitor className="w-5 h-5 text-purple-500" />,
      title: "React Native Windows",
      desc: "Specialized in desktop applications, keyboard/mouse input handling, and platform-specific desktop APIs.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Cpu className="w-5 h-5 text-teal-500" />,
      title: "Native Modules & Hardware",
      desc: "Interfacing JavaScript with native code (C++/C#) for thermal receipt printers, barcode peripherals, and system APIs.",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      icon: <Terminal className="w-5 h-5 text-amber-500" />,
      title: "Automated QA & Testing",
      desc: "Writing resilient Appium & WebdriverIO test suites to automate user journeys and validate mission-critical POS flows.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-indigo-50/10 to-purple-50/10 dark:from-gray-800/50 dark:via-gray-900 dark:to-indigo-950/10 transition-colors relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-l from-purple-400/10 to-transparent dark:from-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200/60 dark:border-indigo-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            Career & Practical Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            1.5 years of production experience developing robust React Native mobile applications and React Native Windows desktop software.
          </p>
        </div>

        {/* Competencies summary cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 stagger-children transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {competencies.map((comp, idx) => (
            <div
              key={idx}
              className="p-5 glass-card-strong rounded-2xl border border-gray-200/60 dark:border-gray-800 premium-card group"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${comp.gradient} bg-opacity-10 flex items-center justify-center mb-3 shadow-sm`}>
                <div className="w-full h-full rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center">
                  {comp.icon}
                </div>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {comp.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {comp.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative border-l-2 border-indigo-300/40 dark:border-indigo-600/20 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline marker with pulse */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-indigo-500/30 animate-ping"></div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="glass-card-strong rounded-2xl p-6 sm:p-8 border border-gray-200/60 dark:border-gray-800 premium-card">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-200/60 dark:border-gray-800">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                        {exp.project}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <MapPin className="w-4 h-4 text-indigo-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4 flex items-center gap-2">
                    <span className="w-6 h-px bg-gray-300 dark:bg-gray-700"></span>
                    Key Technical Responsibilities & Achievements
                  </h4>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3 group/item">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                      Technologies & Tools Utilized
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1.5 text-xs font-semibold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-gray-700 rounded-lg tech-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
