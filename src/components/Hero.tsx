"use client";

import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const NetworkScene = dynamic(
  () => import("./NetworkScene").then((m) => ({ default: m.NetworkScene })),
  { ssr: false }
);

const titles = [
  "MLOps Engineer",
  "Platform Engineer",
  "AIOps Specialist",
  "ML Infrastructure",
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayed(
            isDeleting
              ? current.slice(0, displayed.length - 1)
              : current.slice(0, displayed.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D scene only on md+ screens for performance */}
      <div className="hidden md:block">
        <Suspense fallback={null}>
          <NetworkScene />
        </Suspense>
      </div>
      {/* Mobile fallback: grid background */}
      <div className="md:hidden absolute inset-0 grid-bg" />

      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />

      <div className="absolute top-20 left-10 opacity-30 text-xs text-muted font-mono hidden lg:block">
        <motion.pre
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {`┌─ system.status ─────────┐
│ cluster: healthy        │
│ models: 47 active       │
│ pipelines: 12 running   │
│ latency_p99: 8ms        │
│ gpu_util: 87%           │
└─────────────────────────┘`}
        </motion.pre>
      </div>

      <div className="absolute bottom-20 right-10 opacity-30 text-xs text-muted font-mono hidden lg:block">
        <motion.pre
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {`[metrics] drift_score: 0.023
[deploy] canary → stable ✓
[alert] noise_reduction: 95%
[cost] optimized: -$2.1M/yr`}
        </motion.pre>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-xs text-accent backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          exploring opportunities in MLOps
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
            Pitchika{" "}
          </span>
          <span className="bg-gradient-to-r from-accent to-accent-dim bg-clip-text text-transparent">
            Tanmayi
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="h-10 md:h-12 flex items-center justify-center mb-6"
        >
          <span className="text-lg md:text-2xl text-accent/80 font-mono">
            &gt; {displayed}
            <span className="animate-blink text-accent">▎</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-sm md:text-base text-muted max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I build production ML systems that scale — from training pipelines
          and real-time inference to intelligent operations that keep
          everything running. Obsessed with reliability, performance, and
          developer experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-6 py-3 bg-accent text-background text-sm font-medium rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            <span className="relative z-10">view projects</span>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-foreground text-sm rounded-lg hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all"
          >
            get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 text-xs text-muted"
        >
          {[
            { value: "50+", label: "models in prod" },
            { value: "99.9%", label: "pipeline uptime" },
            { value: "<10ms", label: "P99 latency" },
            { value: "$2M+", label: "cost savings" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-xl md:text-2xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-muted/50"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
