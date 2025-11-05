import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-20 md:py-28">
          {/* Left: Heading */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                <Rocket className="h-3.5 w-3.5 text-indigo-400" />
                Tech • Portfolio • Modern
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300">a tech guy</span> building delightful products.
              </h1>
              <p className="max-w-xl text-neutral-300">
                I craft performant web experiences with a focus on clean architecture, accessible UI, and playful interactions.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-sky-500 px-4 py-2 font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 font-medium hover:bg-white/10 transition">
                  Get in touch
                </a>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 pt-2 text-sm text-neutral-400"
              >
                <span>JavaScript</span>
                <span>•</span>
                <span>React</span>
                <span>•</span>
                <span>FastAPI</span>
                <span>•</span>
                <span>MongoDB</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Spline Scene */}
          <div className="relative h-[420px] sm:h-[520px] md:h-[600px] lg:h-[720px]">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            {/* Gradient glow overlays (non-blocking) */}
            <div aria-hidden className="pointer-events-none absolute -inset-10 opacity-40">
              <div className="absolute right-1/4 top-10 h-40 w-40 rounded-full bg-indigo-500/40 blur-3xl" />
              <div className="absolute left-10 bottom-10 h-56 w-56 rounded-full bg-cyan-500/30 blur-[72px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Background subtle grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.indigo.500/.25),transparent_40%),radial-gradient(circle_at_bottom_left,theme(colors.cyan.500/.25),transparent_40%)]" />
      </div>
    </section>
  );
};

export default Hero;
