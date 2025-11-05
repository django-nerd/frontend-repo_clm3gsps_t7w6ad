import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold"
          >
            Let’s build something great
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-neutral-300"
          >
            Open to freelance, collabs, and full-time roles. Drop a message and I’ll get back to you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-sky-500 px-4 py-2 font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 font-medium hover:bg-white/10 transition"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 font-medium hover:bg-white/10 transition"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </motion.div>

          <div aria-hidden className="pointer-events-none relative mt-14">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-40 w-40 rounded-full bg-indigo-500/30 blur-3xl" />
          </div>
        </div>

        <footer className="mt-24 border-t border-white/10 pt-6 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default Contact;
