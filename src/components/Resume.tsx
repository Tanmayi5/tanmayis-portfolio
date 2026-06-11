"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export function Resume() {
  return (
    <AnimatedSection className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          whileHover={{ borderColor: "rgba(34, 211, 238, 0.3)" }}
          className="border border-border rounded-xl p-8 bg-surface/50 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="font-bold text-base mb-2">Want the full picture?</h3>
            <p className="text-xs text-muted leading-relaxed max-w-md">
              Download my resume for a detailed overview of my experience,
              projects, and technical background in MLOps and ML infrastructure.
            </p>
          </div>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 bg-accent text-background text-sm font-medium rounded-lg whitespace-nowrap"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            download resume
          </motion.a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
