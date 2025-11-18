'use client'

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
      title: "Front-End Developer",
      company: "Nawa Data Solutions",
      period: "2022 - Present",
      description: "Front-End Developer responsible for building new web applications, delivering feature enhancements, improving workflow efficiency, and transforming designs into high-quality, reliable user interfaces for large-scale enterprise projects.",
      technologies: ["React", "Angular", "NextJS", "Typescript"]
    },
    {
      title: "Front-End Developer Intern",
      company: "FXMedia/FXMWeb",
      period: "2022 - 2022",
      description: "Front-End Developer Intern who created responsive websites, built 3D and virtual-tour experiences, and developed interactive games, contributing significantly to user engagement and project milestones.",
      technologies: ["HTML5", "CSS3", "JavaScript"]
    },
];


export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Over 3 years of professional experience building modern web applications
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-8 border-l-2 border-primary-200 last:pb-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-600 border-4 border-white"></div>
              <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary-600 font-semibold">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600 bg-white px-4 py-2 rounded-lg border border-neutral-200">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
