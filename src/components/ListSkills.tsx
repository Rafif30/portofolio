'use client'
import { ForwardRefExoticComponent, RefAttributes} from 'react'
import { motion } from 'framer-motion';
import { LucideProps } from 'lucide-react';

interface Skills {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  title: string
  skills: string[]
  color: string
}

export default function Skills({ skillCategories }: { skillCategories: Skills[] }) {

  return (
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
  );
};
