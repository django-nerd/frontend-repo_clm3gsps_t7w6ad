import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'Streaming metrics, interactive charts, and role-based access.',
    tags: ['React', 'WebSockets', 'Tailwind'],
    link: '#',
  },
  {
    title: 'AI-Powered Assistant',
    description: 'Conversational UI with vector search and tool integrations.',
    tags: ['FastAPI', 'Python', 'OpenAI'],
    link: '#',
  },
  {
    title: 'E-commerce Microfrontend',
    description: 'Composable storefront with blazing performance and DX.',
    tags: ['Vite', 'Microfrontends', 'SSR'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Selected Projects</h2>
            <p className="text-neutral-400">A few things I’ve built or tinkered with recently.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition overflow-hidden"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-12 -translate-y-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-2xl" />
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-indigo-300">
                  <Code className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-wider">Project</span>
                </div>
                <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-white transition" />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-neutral-900/60 px-2.5 py-1 text-xs text-neutral-300 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
