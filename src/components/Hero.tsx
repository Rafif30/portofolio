'use client'

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { prefixBasePath } from "@/src/utils";
import Image from "next/image"; 

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white pt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-primary text-neutral-700 rounded-full text-sm font-semibold mb-6">
              Available for Opportunities
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
              Creative
              <span className="block text-neutral-600">Web Developer</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-xl">
              Building dynamic, user-centric web applications using modern front-end technologies such as ReactJS, NextJS, Angular, and JavaScript, while developing scalable back-end services and APIs with Node.js, Express, MongoDB, PostgreSQL, and Firebase to deliver complete full-stack solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-600 text-primary rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Mail className="h-5 w-5" />
                Get In Touch
              </a>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-900 rounded-lg font-semibold border-2 border-primary-200 hover:border-primary-600 hover:cursor-pointer transition-colors">
                <Download className="h-5 w-5" />
                Download CV
              </button>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/Rafif30" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white border border-neutral-200 text-neutral-700 hover:text-primary-600 hover:border-primary-600 transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/imamradrian" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white border border-neutral-200 text-neutral-700 hover:text-primary-600 hover:border-primary-600 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-accent-500 p-1">
              <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                <Image 
                  src={prefixBasePath('/profile.jpeg')} 
                  alt="Developer workspace"
                  className="w-full h-full object-cover rounded-xl"
                  width={800}
                  height={800}
                  loading='eager'
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
