import React from 'react';
import { GraduationCap, Target, Award, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Bachelor's Degree at Silver Oak University",
      detail: "9.57 CGPA"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal",
      description: "Becoming a Full Stack Developer",
      detail: "Frontend & Backend"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Projects",
      description: "14+ Projects Completed",
      detail: "12 Minor + 2 Major"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experience",
      description: "Frontend Developer",
      detail: "Kidolio Project"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Passionate developer with a drive for innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Shah Sujal Jayantkumar
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated Computer Engineering student at Silver Oak University with an impressive 9.57 CGPA. 
              My journey in tech is driven by curiosity and a passion for creating innovative solutions that 
              make a difference.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With expertise spanning both frontend and backend technologies, I've completed 14+ projects 
              ranging from simple utilities to complex web applications. My experience includes working as 
              a frontend developer on the Kidolio project and building full-stack applications using modern 
              technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. My goal is 
              to become a proficient full-stack developer who can bridge the gap between design and functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                  {item.description}
                </p>
                <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}