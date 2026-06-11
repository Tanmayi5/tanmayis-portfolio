"use client";

import { motion } from "framer-motion";
import { experience, certifications } from "@/data/experience";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/30 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-accent text-sm font-mono">05.</span>
            <h2 className="text-2xl md:text-3xl font-bold">experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
        </AnimatedSection>

        <div className="space-y-8 mb-16">
          {experience.map((exp, i) => (
            <AnimatedSection key={exp.role + exp.company} delay={i * 0.15}>
              <motion.div
                whileHover={{ x: 4 }}
                className="relative pl-8 border-l-2 border-border hover:border-accent transition-colors duration-300"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-accent shadow-[0_0_8px_rgba(34,211,238,0.3)]" />
                <div className="mb-3">
                  <h3 className="font-bold text-base">
                    {exp.role}{" "}
                    <span className="text-accent">@ {exp.company}</span>
                  </h3>
                  <span className="text-xs text-muted font-mono">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h) => (
                    <li key={h} className="text-xs text-muted flex items-start gap-2">
                      <span className="text-accent mt-0.5">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] bg-surface-2 text-muted rounded-md border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <h3 className="text-sm font-bold mb-6 text-muted uppercase tracking-wider flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Certifications
          </h3>
          <StaggerContainer className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <StaggerItem key={cert.name}>
                <motion.div
                  whileHover={{ y: -2, borderColor: "rgba(34, 211, 238, 0.3)" }}
                  className="border border-border rounded-xl p-5 bg-surface/50 backdrop-blur-sm transition-colors"
                >
                  <p className="text-xs font-bold mb-2">{cert.name}</p>
                  <p className="text-[10px] text-muted">
                    {cert.issuer} · {cert.year}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </section>
  );
}
