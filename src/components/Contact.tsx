"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-accent text-sm font-mono">07.</span>
            <h2 className="text-2xl md:text-3xl font-bold">get in touch</h2>
          </div>

          <p className="text-sm text-muted leading-relaxed mb-10 max-w-lg mx-auto">
            I&apos;m always interested in connecting with folks working on interesting
            ML infrastructure challenges. Whether it&apos;s about scaling pipelines,
            building platforms, or just geeking out about MLOps — would love to connect.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <motion.a
              href="mailto:tanmayi@example.com"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-accent text-background text-sm font-medium rounded-lg transition-colors"
            >
              say hello
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/tanmayi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 border border-border text-foreground text-sm rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/tanmayi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 border border-border text-foreground text-sm rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              GitHub
            </motion.a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <motion.div
            whileHover={{ borderColor: "rgba(34, 211, 238, 0.2)" }}
            className="border border-border rounded-xl p-6 bg-surface/50 backdrop-blur-sm text-left font-mono text-xs text-muted"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-error" />
              <span className="w-2.5 h-2.5 rounded-full bg-warning" />
              <span className="w-2.5 h-2.5 rounded-full bg-success" />
              <span className="ml-3 text-[10px] text-muted/60">~/mlops</span>
            </div>
            <p>
              <span className="text-success">tanmayi</span>
              <span className="text-muted">@</span>
              <span className="text-accent">mlops-platform</span>
              <span className="text-muted"> ~ $ </span>
              <span className="text-foreground">cat about.yaml</span>
            </p>
            <div className="mt-3 pl-0 text-muted leading-relaxed">
              <p><span className="text-accent">status:</span> exploring opportunities in MLOps</p>
              <p><span className="text-accent">interests:</span></p>
              <p className="pl-4">- Large-scale ML infrastructure</p>
              <p className="pl-4">- Real-time inference systems</p>
              <p className="pl-4">- Developer platforms</p>
              <p className="pl-4">- Intelligent operations</p>
              <p><span className="text-accent">location:</span> open to remote</p>
              <p><span className="text-accent">connect:</span> would love to chat!</p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
