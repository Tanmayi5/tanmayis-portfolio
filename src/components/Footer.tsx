"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted"
        >
          Designed & built by{" "}
          <span className="text-foreground">Pitchika Tanmayi</span>
        </motion.p>
        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/tanmayi" },
            { label: "LinkedIn", href: "https://linkedin.com/in/tanmayi" },
            { label: "Twitter", href: "https://twitter.com/tanmayi" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
