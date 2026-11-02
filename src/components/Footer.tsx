import React from 'react';
import { Github, Linkedin, Mail, MapPin, BookOpen, Award, Heart } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200/60 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand & Specialty */}
          <div className="md:col-span-2">
            <Logo className="mb-5" />
            <p className="text-gray-500 dark:text-gray-400 mb-3 max-w-md text-sm leading-relaxed">
              React Native & React Native Windows Developer with 1.5 years of production experience building cross-platform mobile apps, native desktop modules, and enterprise retail POS systems.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-amber-700 dark:text-amber-300 text-xs font-bold mb-5">
              <BookOpen className="w-3.5 h-3.5" />
              Published Researcher — TransitSync (JAAFR)
            </div>
            <div className="flex gap-2">
              <a
                href="https://github.com/sujal1607shah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all hover-lift"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/sujal-shah-810457290"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-950/30 text-blue-600 dark:text-blue-400 transition-all hover-lift"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:shahsujal2005@gmail.com"
                className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all hover-lift"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Skills & Tech', href: '#skills' },
                { name: 'Research Paper', href: '#publications' },
                { name: 'Projects & Systems', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-5">
              Contact & Availability
            </h3>
            <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <p className="flex items-center gap-2 font-medium">
                <MapPin className="w-4 h-4 text-gray-400" />
                Ahmedabad, Gujarat, India
              </p>
              <p className="font-medium">shahsujal2005@gmail.com</p>
              <p className="font-medium">Computer Engineering (9.57 CGPA)</p>
              <div className="pt-3 space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Available for RN & Windows Roles
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/60 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 dark:text-gray-500 gap-4">
          <p className="flex items-center gap-1 font-medium">
            © {currentYear} Sujal Shah
          </p>
        </div>
      </div>
    </footer>
  );
}