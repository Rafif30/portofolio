'use client'

import React, { useState, FormEvent } from 'react';
import Image from "next/image"; 
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  MapPin, 
  Send, 
  CheckCircle, 
  XCircle, 
  Code, 
  Database, 
  Globe 
} from 'lucide-react';
import { prefixBasePath } from "@/src/utils";
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import ListExperience from '@/src/components/ListExperience';
import ListSkills from '@/src/components/ListSkills';
import LoadingThreeDotsPulse from "@/src/components/Loading"
import Modal from '@/src/components/Modal';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

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


export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<ContactFormData>({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  
  const handleChange = (e: InputChangeEvent): void => {
      const { name, value } = e.target;
      setFormData((prev) => ({
          ...prev,
          [name]: value
      }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading')
    setModalOpen(true)
  
    try {
      const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus('error');
    }
  }
  
  const handleCloseModal = () => {
    setStatus('idle')
    setModalOpen(false)
  }

  return (
    <>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {status === "loading" && (
          <div className="flex flex-col items-center gap-4">
            <LoadingThreeDotsPulse />
          </div>
        )}

        {status === "success" && (
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-sm"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-3">
              <CheckCircle className="w-10 h-10 text-green-500" />
              <p className="font-medium">Email sent successfully!</p>
              <button
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 text-neutral rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-10 w-[90%] max-w-sm"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-3">
              <XCircle className="w-10 h-10 text-red-500" />
              <p className="font-medium">Failed to send email.</p>
              <button
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 text-neutral rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </Modal>
      <div className="min-h-screen">
        <Header />
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
          <ListExperience  experiences={experiences} />
          </div>
        </section>
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
          <ListSkills skillCategories={skillCategories} /> 
          </div>
        </section>
        <section id="contact" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Have a project in mind? I&apos;d love to hear about it. Reach out and let&apos;s create something amazing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                      <a href="mailto:imamrafif25@gmail.com" className="text-neutral-600 hover:text-primary-600 transition-colors">
                        imamrafif25@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Location</h4>
                      <p className="text-neutral-600">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl">
                  <h4 className="font-semibold text-neutral-900 mb-2">Availability</h4>
                  <p className="text-neutral-600 text-sm">
                    Currently available for freelance projects and full-time opportunities.
                  </p>
                </div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 text-neutral rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
