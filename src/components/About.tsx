"use client";

import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Languages",
    items: ["Python", "C++", "TypeScript", "Bash"],
  },
  {
    title: "ML/AI",
    items: ["TensorFlow", "Kubeflow", "MLflow", "Triton"],
  },
  {
    title: "Infrastructure & DevOps",
    items: ["Kubernetes", "Terraform", "Docker", "Helm", "ArgoCD", "Jenkins", "GitHub Actions", "Ansible"],
  },
  {
    title: "Observability",
    items: ["Prometheus", "Grafana"],
  },
  {
    title: "Cloud",
    items: ["AWS"],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-accent text-sm font-mono">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold">about</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 text-sm text-muted leading-relaxed">
              <p className="text-base text-foreground/90">
                I&apos;m an MLOps engineer who bridges the gap between data science
                experiments and production systems.
              </p>
              <p>
                My focus is on building infrastructure that makes ML teams move
                faster while maintaining the reliability that production demands.
                I believe the best ML platform is invisible — data scientists
                should think about models, not infrastructure.
              </p>
              <p>
                Every system I build optimizes for developer experience without
                sacrificing operational excellence.
              </p>

              <div className="pt-4 border-t border-border">
                <h3 className="text-xs text-accent uppercase tracking-wider mb-3 font-bold">
                  Engineering Philosophy
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Automate everything that can be automated, alert on the rest",
                    "Observability is not optional — if you can't measure it, you can't improve it",
                    "Progressive delivery over big-bang releases",
                    "Cost-awareness as a first-class engineering concern",
                    "Platform teams exist to multiply the output of product teams",
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-accent mt-0.5">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="space-y-4">
              {techCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="border border-border rounded-lg p-4 bg-surface/50 hover:border-accent/20 transition-colors"
                >
                  <h3 className="text-[10px] text-accent mb-2.5 uppercase tracking-wider font-bold">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[11px] bg-surface-2 text-muted rounded border border-border hover:border-accent/30 hover:text-foreground transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
