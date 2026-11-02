import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink,
  Github,
  Monitor,
  Smartphone,
  Layers,
  Receipt,
  Cpu,
  ShoppingBag,
  Calculator,
  CheckCircle2,
  ChevronRight,
  X,
  FileCode,
  Terminal,
  ShieldCheck,
  BookOpen,
  Sparkles,
  Award,
  MapPin,
  Radio,
  Truck
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'enterprise' | 'mobile' | 'desktop' | 'web' | 'research';
  badge: string;
  role: string;
  duration?: string;
  description: string;
  extendedOverview?: string;
  coreHighlights: string[];
  architectureDetails?: {
    title: string;
    description: string;
  }[];
  tech: string[];
  link?: string;
  github?: string;
  isFlagship?: boolean;
  isResearch?: boolean;
}

export function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | 'flagship' | 'research' | 'desktop' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: "retailboon",
      title: "RetailBoon — Enterprise Retail & POS System",
      category: "enterprise",
      badge: "Flagship Production Project",
      role: "React Native & Windows Developer",
      duration: "Production Application",
      isFlagship: true,
      description:
        "Comprehensive retail business and Point of Sale (POS) application engineered with React Native and React Native Windows. Features full transaction processing, thermal receipt printing via native module bridges, dynamic billing workflows, and automated UI test pipelines.",
      extendedOverview:
        "RetailBoon is an enterprise-scale retail solution designed to run seamlessly on both desktop environments (via React Native Windows) and mobile platforms. The application handles high-throughput billing operations, inventory lookups, discount hierarchies, complex multi-tier tax computations, and direct hardware communication for thermal receipt printing. It maintains an ultra-responsive interface even under heavy product catalogs, utilizing memory-efficient virtualization and lightweight atomic state management.",
      coreHighlights: [
        "Point of Sale (POS) Interface: Engineered transaction screens, item breakdowns, total billing presentations, and multi-tier tax & discount calculations.",
        "Thermal Receipt Printing: Integrated desktop hardware printing capabilities via React Native Windows native module bridges.",
        "Optimized Product Catalog: Built category-segmented product listings with horizontally scrollable lists optimized for memory and fluid rendering.",
        "Cart State & Persistence: Architected state workflows with Zustand and AsyncStorage for atomic quantity adjustments and offline cart recovery.",
        "Platform & UI Bug Resolution: Diagnosed and resolved React Native Windows layout quirks, desktop rendering inconsistencies, and OS compatibility barriers.",
        "UI Automation Testing: Authored robust end-to-end tests with Appium and WebdriverIO (WDIO), resolving element accessibility selectors and test failures.",
        "Packaging & Deployment: Handled Windows build configurations in Visual Studio, MSIX package validation, and deployment troubleshooting."
      ],
      architectureDetails: [
        {
          title: "State Management Architecture (Zustand + AsyncStorage)",
          description:
            "Implemented an immutable store structure handling live cart mutations, tax calculations, discounts, and customer billing data. Integrated AsyncStorage to persistently serialize state without blocking the JS thread."
        },
        {
          title: "Hardware Integration & Native Modules",
          description:
            "Bridged JavaScript APIs to Windows native code (C#/C++) to interface with POS receipt printers and scanner hardware for retail checkout counters."
        },
        {
          title: "Automated QA & Reliability (Appium + WDIO)",
          description:
            "Constructed automated regression test suites covering checkout flows, inventory search, discount applications, and payment confirmation dialogs."
        },
        {
          title: "React Native Windows Desktop Optimization",
          description:
            "Tuned flexbox layouts for desktop aspect ratios, enabled desktop mouse/keyboard navigation shortcuts, and eliminated layout shifting during live recalculations."
        }
      ],
      tech: [
        "React Native",
        "React Native Windows",
        "TypeScript",
        "JavaScript",
        "Zustand",
        "AsyncStorage",
        "REST APIs",
        "Appium",
        "WebdriverIO (WDIO)",
        "Visual Studio",
        "Git",
        "Native Modules"
      ]
    },
    {
      id: "transitsync",
      title: "TransitSync — Intelligent Transport System",
      category: "research",
      badge: "Published Research Paper",
      role: "Lead Developer & Researcher",
      duration: "Research & Development",
      isResearch: true,
      description:
        "A distributed real-time fleet management, telematics dispatch, and operational synchronization framework for intelligent transport systems. Published in JAAFR (Vol. 4, Issue 10, Oct 2026). Paper ID: JAAFRTH00114.",
      extendedOverview:
        "TransitSync is a comprehensive full-stack system designed for intelligent transportation management. The research paper presents a novel framework that integrates real-time GPS tracking, fleet dispatch optimization, geofencing with location-based event detection, and emergency response protocols. Built with React Native, TypeScript, Node.js, and MongoDB, the system demonstrates practical application of distributed computing principles to solve real-world transport logistics challenges.",
      coreHighlights: [
        "Real-time GPS Vehicle Tracking: Implemented live location streaming and map visualization for fleet monitoring with sub-second update latency.",
        "Fleet & Dispatch Management: Designed intelligent dispatch algorithms for optimal resource allocation and route assignment.",
        "Geofencing & Location Events: Built configurable geofence boundaries with automatic event triggers for zone entry/exit detection.",
        "Real-time Synchronization: Architected Socket.IO-based communication layer for instant bi-directional data sync across all connected clients.",
        "Emergency SOS Functionality: Implemented priority alert system with instant notification propagation and response coordination.",
        "Digital Proof of Delivery: Created verifiable delivery confirmation workflow with timestamps, signatures, and photographic evidence.",
        "Trip Lifecycle Management: Engineered complete trip state machine covering creation, assignment, tracking, completion, and audit trails.",
        "JWT Authentication & RBAC: Implemented secure authentication with role-based access control for drivers, dispatchers, and administrators."
      ],
      architectureDetails: [
        {
          title: "Distributed Real-Time Architecture",
          description:
            "Designed a scalable event-driven architecture using Socket.IO for real-time communication, with Node.js microservices handling location streaming, dispatch logic, and notification delivery."
        },
        {
          title: "Geofencing Engine",
          description:
            "Implemented geospatial algorithms for polygon-based zone detection, supporting complex boundary definitions and configurable event triggers for fleet monitoring."
        },
        {
          title: "Mobile-First Fleet Interface",
          description:
            "Built driver and dispatcher apps in React Native with offline-first capabilities, ensuring functionality in areas with intermittent connectivity."
        },
        {
          title: "Security & Access Control",
          description:
            "JWT-based authentication with hierarchical role permissions, ensuring data isolation between fleet operators and granular access control for sensitive operations."
        }
      ],
      tech: [
        "React Native",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Socket.IO",
        "Zustand",
        "React Navigation",
        "JWT"
      ],
      link: "https://rjwave.org/jaafr/viewpaperforall.php?paper=JAAFRTH00114"
    },
    {
      id: "native-modules-windows",
      title: "Windows Native Modules & Hardware Bridge",
      category: "desktop",
      badge: "Desktop Architecture",
      role: "System & Native Module Developer",
      duration: "Native Integration",
      description:
        "Specialized architecture bridging React Native Windows with native C#/C++ modules. Implemented peripheral communication for retail hardware including thermal receipt printers, barcode scanners, and local Windows system APIs.",
      extendedOverview:
        "React Native Windows applications often require access to desktop-specific hardware and Win32 / UWP system capabilities. This project implements clean, typed native module bridges in C#/C++ that expose event emitters, asynchronous methods, and peripheral status monitors directly to the React Native JavaScript runtime.",
      coreHighlights: [
        "Created custom native module wrappers for thermal printer ESC/POS command sequences.",
        "Configured asynchronous promise-based JavaScript bridges connecting React Native to Windows WinRT APIs.",
        "Debugged native compilation, project configuration, and DLL linkage in Visual Studio.",
        "Ensured zero-lag background thread execution to prevent UI freezing during hardware I/O."
      ],
      architectureDetails: [
        {
          title: "Native Bridge Contract",
          description:
            "Typed TypeScript interfaces mapping 1-to-1 with native Windows C#/C++ module signatures for predictable type safety."
        },
        {
          title: "Hardware Peripheral Protocol",
          description:
            "Built raw byte streaming and status event handlers for USB and serial POS receipt printers."
        }
      ],
      tech: [
        "React Native Windows",
        "C# / C++",
        "Visual Studio",
        "WinRT / Win32 APIs",
        "TypeScript",
        "Native Modules",
        "Hardware Integration"
      ]
    },
    {
      id: "kidolio",
      title: "Kidolio — Interactive Learning Platform",
      category: "web",
      badge: "Team Production Project",
      role: "Frontend Developer",
      description:
        "A full-scale educational platform built for children's interactive activities and structured learning. Built responsive UI components, interactive modules, and accessible learning dashboards.",
      extendedOverview:
        "Kidolio focuses on delivering an intuitive, child-friendly user experience. Worked as a core frontend developer designing intuitive navigation, interactive learning widgets, and modular React components styled with modern utility-first CSS.",
      coreHighlights: [
        "Engineered responsive, accessible UI components in React.js and Tailwind CSS.",
        "Implemented engaging user workflows and interactive learning activities.",
        "Collaborated in a cross-functional team maintaining clean version control and design system consistency."
      ],
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Figma", "REST APIs"],
      link: "https://kidolio.vercel.app/home"
    },
    {
      id: "appium-test-suite",
      title: "Cross-Platform POS Automation Suite",
      category: "enterprise",
      badge: "Quality Engineering",
      role: "Automation Engineer",
      description:
        "Comprehensive automated UI testing infrastructure using Appium and WebdriverIO (WDIO) for React Native mobile and Windows desktop applications. Automates critical checkout flows, billing validations, and regression testing.",
      extendedOverview:
        "Engineered reliable test automation strategies to eliminate flaky selectors in React Native Windows and mobile builds. Created reusable Page Object Models, test execution runners, and detailed diagnostic logs for test failures.",
      coreHighlights: [
        "Built Page Object Models for Point of Sale billing, item additions, and discounts.",
        "Resolved complex Windows UI element locator failures using native accessibility identifiers.",
        "Integrated test reporting and automated screenshot capture on execution failures."
      ],
      tech: ["Appium", "WebdriverIO (WDIO)", "TypeScript", "JavaScript", "React Native Windows", "CI/CD Workflows"]
    },
    {
      id: "blog-platform",
      title: "Cloud Content & Blog Platform",
      category: "web",
      badge: "Full Stack Architecture",
      role: "Full Stack Developer",
      description:
        "Feature-rich publishing application built with React and cloud backend services. Implemented secure user authentication, rich text editing, file storage, and real-time database queries.",
      extendedOverview:
        "A robust content management solution demonstrating secure authentication, session handling, CRUD database operations, and scalable state handling with cloud BaaS services.",
      coreHighlights: [
        "Integrated user authentication with session preservation.",
        "Built dynamic post management with live preview and category classification.",
        "Implemented responsive UI layout with dark/light mode compatibility."
      ],
      tech: ["React.js", "Appwrite", "Tailwind CSS", "JavaScript", "REST APIs"]
    }
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'flagship') return project.isFlagship;
    if (activeTab === 'research') return project.isResearch;
    if (activeTab === 'desktop') return project.category === 'desktop' || project.tech.includes('React Native Windows');
    if (activeTab === 'mobile') return project.tech.includes('React Native');
    return true;
  });

  const tabs = [
    { key: 'all' as const, label: `All (${projects.length})` },
    { key: 'flagship' as const, label: 'RetailBoon' },
    { key: 'research' as const, label: 'TransitSync' },
    { key: 'desktop' as const, label: 'RN Windows' },
    { key: 'mobile' as const, label: 'Mobile' },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-purple-400/8 to-transparent dark:from-purple-600/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200/60 dark:border-purple-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            Featured Engineering Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Projects &{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Systems
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Enterprise retail applications, published research systems, React Native Windows desktop solutions, and native module integrations.
          </p>
        </div>

        {/* Tab Filters */}
        <div className={`flex justify-center mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex p-1 glass-card-strong rounded-2xl border border-gray-200/60 dark:border-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, projectIndex) => {
            const isFlagship = project.isFlagship;
            const isResearch = project.isResearch;

            return (
              <div
                key={project.id}
                className={`relative rounded-3xl transition-all duration-500 premium-card ${
                  isFlagship
                    ? 'p-6 sm:p-10 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/10 border-2 border-indigo-200/60 dark:border-indigo-800/30 shadow-glow-sm'
                    : isResearch
                    ? 'p-6 sm:p-10 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 dark:from-amber-950/20 dark:via-gray-900 dark:to-orange-950/10 border-2 border-amber-200/60 dark:border-amber-800/30 shadow-glow-sm'
                    : 'p-6 sm:p-8 glass-card-strong border border-gray-200/60 dark:border-gray-800'
                }`}
                style={{ animationDelay: `${projectIndex * 0.1}s` }}
              >
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`px-3.5 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                        isFlagship
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20'
                          : isResearch
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                      }`}
                    >
                      {project.badge}
                    </span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Role: {project.role}
                    </span>
                    {isResearch && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                        <Award className="w-3 h-3" />
                        Published
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {isResearch ? 'Read Paper' : 'Live Demo'}
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      Deep Dive
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights grid */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-gray-300 dark:bg-gray-700"></span>
                    Technical Highlights
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {project.coreHighlights.slice(0, isFlagship || isResearch ? 6 : 4).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 group/item">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm text-gray-600 dark:text-gray-300 leading-normal">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack tags & Actions */}
                <div className="pt-5 border-t border-gray-200/60 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-gray-700 tech-tag"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`self-start sm:self-auto px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-1.5 hover-lift ${
                      isResearch
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30'
                        : 'bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 shadow-premium dark:shadow-premium-dark'
                    }`}
                  >
                    Technical Specs
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="relative w-full max-w-4xl glass-card-strong border border-gray-200/60 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2.5 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-8 pr-12">
              <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
                selectedProject.isResearch
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm'
              }`}>
                {selectedProject.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Role: {selectedProject.role}
              </p>
            </div>

            {/* Modal Body */}
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                  System Architecture & Overview
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedProject.extendedOverview || selectedProject.description}
                </p>
              </div>

              {/* Architecture details if available */}
              {selectedProject.architectureDetails && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    Architectural Deep-Dive
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.architectureDetails.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700 premium-card"
                      >
                        <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                          <Layers className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                          {item.title}
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Complete Highlights */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                  Complete Feature & Implementation Breakdown
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.coreHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {hl}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Tech Stack */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                  Complete Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200/60 dark:border-gray-800 flex justify-end gap-3">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all inline-flex items-center gap-2 hover-lift ${
                    selectedProject.isResearch
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  {selectedProject.isResearch ? 'Read Full Paper' : 'Open Application'}
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl text-sm font-bold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}