import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, Monitor, Smartphone, Award, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Briefcase className="w-5 h-5 text-indigo-500" />,
      title: "1.5 Years Internship",
      description: "React Native & RN Windows",
      detail: "Production POS & Mobile",
      gradient: "from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/5 dark:to-blue-500/5"
    },
    {
      icon: <Monitor className="w-5 h-5 text-purple-500" />,
      title: "Windows App & Native Modules",
      description: "Desktop Hardware & Bridges",
      detail: "Receipt Printing & Peripheral I/O",
      gradient: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-amber-500" />,
      title: "Published Researcher",
      description: "TransitSync — JAAFR Journal",
      detail: "Vol. 4, Issue 10 • Oct 2026",
      gradient: "from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5"
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-emerald-500" />,
      title: "Computer Engineering",
      description: "Silver Oak University",
      detail: "9.57 CGPA Academic Excellence",
      gradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5"
    }
  ];

  const coreFocusAreas = [
    {
      title: "Cross-Platform Mobile Development",
      description:
        "Building responsive, high-framerate mobile apps in React Native with TypeScript, prioritizing clean modular architecture and native performance.",
      icon: <Smartphone className="w-4 h-4 text-indigo-500" />
    },
    {
      title: "React Native Windows Desktop Solutions",
      description:
        "Crafting full-fledged desktop software using React Native Windows, handling multi-window desktop nuances, mouse/keyboard focus navigation, and custom UI layouts.",
      icon: <Monitor className="w-4 h-4 text-purple-500" />
    },
    {
      title: "Native Module Integration & Hardware Interfacing",
      description:
        "Writing and debugging C# / C++ bridges to connect the JavaScript runtime directly to hardware peripherals like thermal receipt printers and barcode scanners.",
      icon: <Award className="w-4 h-4 text-teal-500" />
    },
    {
      title: "Research & Intelligent Systems",
      description:
        "Published researcher exploring distributed real-time systems, fleet management, and operational synchronization frameworks for intelligent transport.",
      icon: <BookOpen className="w-4 h-4 text-amber-500" />
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
      {/* Subtle decorative bg */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-l from-indigo-100/40 to-transparent dark:from-indigo-950/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200/60 dark:border-indigo-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            Profile & Engineering Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            React Native developer with 1.5 years of production experience and a published research paper in intelligent transport systems.
          </p>
        </div>

        <div className={`grid lg:grid-cols-12 gap-12 items-start mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white">
              Shah Sujal Jayantkumar
            </h3>
            
            <p>
              I am a Computer Engineering graduate from Silver Oak University with a 9.57 CGPA, having completed a rigorous <strong className="text-gray-900 dark:text-white font-semibold">1.5 years internship as a React Native Developer</strong>. My primary technical focus is bridging the gap between mobile user experiences and native desktop performance.
            </p>

            <p>
              During my production experience, I served as a key contributor to <strong className="text-gray-900 dark:text-white font-semibold">RetailBoon</strong>, an enterprise-grade retail business and Point of Sale (POS) system. I architected and implemented transaction screens, receipt/thermal printing native module bridges, complex tax and discount algorithms, and category-segmented virtualized catalogs.
            </p>

            <p>
              I have hands-on experience solving platform-specific bugs and UI rendering limitations in <strong className="text-gray-900 dark:text-white font-semibold">React Native Windows</strong>, managing state with <strong className="text-gray-900 dark:text-white font-semibold">Zustand and AsyncStorage</strong>, and implementing UI automation suites with <strong className="text-gray-900 dark:text-white font-semibold">Appium and WebdriverIO (WDIO)</strong>.
            </p>

            <p>
              Beyond industry work, I have authored and published a peer-reviewed research paper on <strong className="text-gray-900 dark:text-white font-semibold">TransitSync</strong> — a distributed real-time fleet management framework — in the Journal of Advance and Future Research (JAAFR), demonstrating my ability to contribute to academic research alongside practical engineering.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className={`p-5 rounded-2xl bg-gradient-to-br ${item.gradient} border border-gray-200/60 dark:border-gray-800 premium-card`}
              >
                <div className="w-11 h-11 bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-700 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">
                  {item.description}
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars of Engineering Focus */}
        <div className={`border-t border-gray-200/80 dark:border-gray-800 pt-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-8 text-center flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-gray-300 dark:bg-gray-700"></span>
            Specialized Engineering Pillars
            <span className="w-8 h-px bg-gray-300 dark:bg-gray-700"></span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-children">
            {coreFocusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card-strong border border-gray-200/60 dark:border-gray-800 premium-card"
              >
                <h5 className="text-base font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800">
                    {area.icon}
                  </div>
                  {area.title}
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pl-9">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}