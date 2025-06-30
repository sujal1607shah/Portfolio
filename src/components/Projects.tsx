import React, { useState } from 'react';
import { ExternalLink, Github, Code, Palette } from 'lucide-react';

export function Projects() {
  const [activeTab, setActiveTab] = useState('major');

  const majorProjects = [
    {
      title: "Kidolio",
      description: "A comprehensive platform designed for children's activities and learning. Worked as a frontend developer creating engaging user interfaces and interactive components.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Figma"],
      role: "Frontend Developer",
      type: "Team Project",
      icon: <Code className="w-6 h-6" />,
      link: "https://kidolio.vercel.app/home"
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog application built with React and Appwrite services. Features include user authentication, post creation, editing, and real-time updates.",
      tech: ["React.js", "Appwrite", "Tailwind CSS", "JavaScript"],
      role: "Full Stack Developer",
      type: "Personal Project",
      icon: <Palette className="w-6 h-6" />
    }
  ];

  const minorProjects = [
    {
      title: "Currency Converter",
      description: "Real-time currency conversion tool with live exchange rates and intuitive user interface.",
      tech: ["JavaScript", "HTML", "CSS", "API Integration"]
    },
    {
      title: "Flip the Card Game",
      description: "Interactive memory card game with smooth animations and score tracking.",
      tech: ["JavaScript", "HTML", "CSS", "Game Logic"]
    },
    {
      title: "VS Code Clone",
      description: "Faithful recreation of Visual Studio Code interface with core functionality.",
      tech: ["HTML", "CSS", "JavaScript", "UI/UX"]
    },
    {
      title: "ChatGPT Website Clone",
      description: "Static clone of ChatGPT interface focusing on responsive design and animations.",
      tech: ["HTML", "CSS", "Responsive Design"]
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills with modern design.",
      tech: ["React.js", "Tailwind CSS", "Animations"]
    },
    {
      title: "Weather App",
      description: "Weather forecasting application with location-based data and clean UI.",
      tech: ["JavaScript", "Weather API", "CSS"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A showcase of my work and learning journey
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setActiveTab('major')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${activeTab === 'major'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              Major Projects (2)
            </button>
            <button
              onClick={() => setActiveTab('minor')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${activeTab === 'minor'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              Minor Projects (12)
            </button>
          </div>
        </div>

        {/* Major Projects */}
        {activeTab === 'major' && (
          <div className="grid md:grid-cols-2 gap-8">
            {majorProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 text-sm">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">
                        {project.role}
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <a
                    href="https://kidolio.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Minor Projects */}
        {activeTab === 'minor' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {minorProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                    <Github className="w-3 h-3" />
                    Code
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <ExternalLink className="w-3 h-3" />
                    View
                  </button>
                </div>
              </div>
            ))}

            {/* Show remaining projects count */}
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl p-6 flex items-center justify-center border-2 border-dashed border-purple-300 dark:border-purple-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  +6
                </div>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  More projects in development
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}