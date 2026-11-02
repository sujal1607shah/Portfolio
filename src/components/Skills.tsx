import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, Monitor, Database, Wrench, Cpu, CheckCircle2, Terminal, Sparkles } from 'lucide-react';

export function Skills() {
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

  const skillCategories = [
    {
      title: "Mobile & Desktop Frameworks",
      icon: <Smartphone className="w-5 h-5" />,
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/5 to-blue-500/5",
      barColor: "from-indigo-500 to-blue-500",
      skills: [
        { name: "React Native", level: 95, context: "Cross-Platform Mobile" },
        { name: "React Native Windows", level: 92, context: "Desktop UI & WinUI" },
        { name: "TypeScript", level: 90, context: "Type Safety & Interfaces" },
        { name: "JavaScript (ES6+)", level: 92, context: "Async, Event Loop, Closures" },
        { name: "React.js", level: 88, context: "Hooks, Virtual DOM, Components" }
      ]
    },
    {
      title: "State & Data Persistence",
      icon: <Database className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/5 to-pink-500/5",
      barColor: "from-purple-500 to-pink-500",
      skills: [
        { name: "Zustand", level: 95, context: "Lightweight Centralized Store" },
        { name: "AsyncStorage", level: 92, context: "Persistent Local Storage" },
        { name: "REST APIs Integration", level: 90, context: "Network Layer & Error Handling" },
        { name: "Context API", level: 85, context: "Scoped Application State" },
        { name: "Offline-First Sync", level: 82, context: "Optimistic UI & Cache Recovery" }
      ]
    },
    {
      title: "Native Modules & Desktop",
      icon: <Cpu className="w-5 h-5" />,
      gradient: "from-teal-500 to-emerald-500",
      bgGradient: "from-teal-500/5 to-emerald-500/5",
      barColor: "from-teal-500 to-emerald-500",
      skills: [
        { name: "Windows Native Modules", level: 88, context: "C# / C++ Bridge Integration" },
        { name: "POS Thermal Receipt Printing", level: 90, context: "ESC/POS & Hardware Commands" },
        { name: "Visual Studio", level: 88, context: "C++ Build Tools & Solution Config" },
        { name: "Windows App Packaging", level: 85, context: "MSIX & Deployment Troubleshooting" },
        { name: "Platform Layout Bug Fixing", level: 92, context: "Desktop Aspect Ratio Tuning" }
      ]
    },
    {
      title: "Testing & Engineering Tools",
      icon: <Terminal className="w-5 h-5" />,
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-500/5 to-orange-500/5",
      barColor: "from-amber-500 to-orange-500",
      skills: [
        { name: "Appium", level: 88, context: "Cross-Platform UI Automation" },
        { name: "WebdriverIO (WDIO)", level: 88, context: "E2E Test Architecture" },
        { name: "Git & Version Control", level: 90, context: "Branching, PRs & Merge Flows" },
        { name: "VS Code & Debugging", level: 92, context: "React DevTools & Flipper" },
        { name: "Postman", level: 88, context: "API Profiling & Mocking" }
      ]
    }
  ];

  const specializedPractices = [
    "Point of Sale (POS) Workflow Architecture",
    "Tiered Tax & Discount Calculation Engines",
    "Memory-Optimized Horizontal & Vertical Virtualized Lists",
    "Native Bridge Troubleshooting (JS-to-C++/C#)",
    "Desktop Keyboard & Mouse Event Handling",
    "Appium Element Visibility & Flaky Test Resolution"
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50/20 dark:from-gray-800/50 dark:via-gray-900 dark:to-indigo-950/10 transition-colors relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-400/10 to-transparent dark:from-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200/60 dark:border-purple-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Technical{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Battle-tested engineering competencies across mobile platforms, desktop operating systems, native bridging, and automated testing frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`glass-card-strong rounded-2xl p-6 border border-gray-200/60 dark:border-gray-800 premium-card bg-gradient-to-br ${category.bgGradient}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-11 h-11 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                        {skill.context}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200/60 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${category.barColor} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Practices Strip */}
        <div className={`p-6 sm:p-8 glass-card-strong rounded-2xl border border-gray-200/60 dark:border-gray-800 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-5 text-center flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-gray-300 dark:bg-gray-700"></span>
            Specialized Engineering Practices
            <span className="w-8 h-px bg-gray-300 dark:bg-gray-700"></span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {specializedPractices.map((practice, pIdx) => (
              <div key={pIdx} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/60 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/40 group hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {practice}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}