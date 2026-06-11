"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, domainMeta, type Project } from "@/data/projects";
import { AnimatedSection } from "./AnimatedSection";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const meta = domainMeta[project.domain];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="border border-border rounded-xl bg-surface/50 backdrop-blur-sm overflow-hidden hover:border-accent/20 transition-colors"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-lg ${meta.color}`}>{meta.icon}</span>
              <span className="text-[10px] text-muted uppercase tracking-wider border border-border px-2 py-0.5 rounded-full">
                {meta.label}
              </span>
            </div>
            <h3 className="font-bold text-lg">{project.title}</h3>
          </div>
          <div className="flex gap-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                className="p-2 text-muted hover:text-accent transition-colors rounded-lg hover:bg-accent/5"
                aria-label="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-accent/70 mb-3 font-medium">{project.tagline}</p>
        <p className="text-xs text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] bg-surface-2 text-muted rounded-md border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5 group"
        >
          <span>{expanded ? "collapse" : "view impact & architecture"}</span>
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border p-6 bg-surface-2/20 space-y-5">
              <div>
                <h4 className="text-xs font-bold text-success uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-success" />
                  Impact
                </h4>
                <ul className="space-y-2">
                  {project.impact.map((item) => (
                    <li key={item} className="text-xs text-muted flex items-start gap-2">
                      <span className="text-success mt-0.5 font-bold">↑</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  Architecture
                </h4>
                <div className="space-y-2 font-mono bg-background/50 rounded-lg p-4 border border-border">
                  {project.architecture.map((line) => (
                    <p key={line} className="text-[11px] text-muted">
                      <span className="text-accent/50 mr-2">$</span>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.domain === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-sm font-mono">04.</span>
            <h2 className="text-2xl md:text-3xl font-bold">featured projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <p className="text-sm text-muted mb-8 max-w-2xl">
            Each project tells a story: problem → system design → measurable impact.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 text-xs rounded-lg border transition-all ${
                filter === "all"
                  ? "border-accent text-accent bg-accent/10 shadow-[0_0_10px_rgba(34,211,238,0.1)]"
                  : "border-border text-muted hover:text-foreground hover:border-border"
              }`}
            >
              all
            </button>
            {(Object.keys(domainMeta) as Array<keyof typeof domainMeta>).map(
              (key) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-1.5 text-xs rounded-lg border transition-all ${
                    filter === key
                      ? "border-accent text-accent bg-accent/10 shadow-[0_0_10px_rgba(34,211,238,0.1)]"
                      : "border-border text-muted hover:text-foreground hover:border-border"
                  }`}
                >
                  {domainMeta[key].icon} {key}
                </button>
              )
            )}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
