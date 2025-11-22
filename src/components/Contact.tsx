'use client'

import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import LoadingThreeDotsPulse from './Loading'
import Modal from './Modal';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
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
        </div>
      </div>
    </section>
  );
}
