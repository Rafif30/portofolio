'use client'

import { motion } from 'framer-motion';
import { Code, Database, Globe } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "SASS"],
    color: "primary"
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
    color: "accent"
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST APIs", "GraphQL", "WebSockets"],
    color: "primary"
  },
];

export default function Skills() {

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-neutral-100"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${category.color}-100 text-${category.color}-600 mb-4`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
