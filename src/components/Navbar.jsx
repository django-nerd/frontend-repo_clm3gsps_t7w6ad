import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group inline-flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 group-hover:scale-110 transition" />
            <span className="font-semibold tracking-tight">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-white/5">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
