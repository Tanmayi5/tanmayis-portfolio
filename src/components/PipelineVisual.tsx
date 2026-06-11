"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stages = [
  { label: "Ingestion", icon: "⊳" },
  { label: "Features", icon: "⬡" },
  { label: "Training", icon: "◎" },
  { label: "Validation", icon: "✓" },
  { label: "Registry", icon: "◈" },
  { label: "Deploy", icon: "▲" },
];

export function PipelineVisual() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ borderColor: "rgba(34, 211, 238, 0.2)" }}
      className="border border-border rounded-xl p-4 sm:p-6 bg-surface/50 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          <span className="text-[10px] text-muted uppercase tracking-wider">
            Pipeline — model-v2.3.1
          </span>
        </div>
        <span className="text-[10px] text-success bg-success/10 px-2 py-0.5 rounded-full border border-success/20">
          running
        </span>
      </div>

      {/* Mobile: 2-column grid */}
      <div className="grid grid-cols-3 gap-3 sm:hidden">
        {stages.map((stage, i) => {
          const isActive = i === activeStage;
          const isComplete = i < activeStage;
          return (
            <div key={stage.label} className="flex flex-col items-center">
              <motion.div
                animate={{
                  scale: isActive ? 1.15 : 1,
                  boxShadow: isActive ? "0 0 12px rgba(34, 211, 238, 0.5)" : "none",
                }}
                className={`w-9 h-9 rounded-lg flex items-center justify-center mb-1.5 text-sm transition-colors ${
                  isComplete
                    ? "bg-success/20 text-success border border-success/30"
                    : isActive
                      ? "bg-accent/20 text-accent border border-accent/30"
                      : "bg-surface-2 text-muted border border-border"
                }`}
              >
                {isComplete ? "✓" : stage.icon}
              </motion.div>
              <span
                className={`text-[9px] text-center leading-tight ${
                  isActive ? "text-accent" : isComplete ? "text-success" : "text-muted/60"
                }`}
              >
                {stage.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop: horizontal flow */}
      <div className="hidden sm:flex items-center justify-between gap-1">
        {stages.map((stage, i) => {
          const isActive = i === activeStage;
          const isComplete = i < activeStage;
          return (
            <div key={stage.label} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    boxShadow: isActive ? "0 0 12px rgba(34, 211, 238, 0.5)" : "none",
                  }}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 text-sm transition-colors ${
                    isComplete
                      ? "bg-success/20 text-success border border-success/30"
                      : isActive
                        ? "bg-accent/20 text-accent border border-accent/30"
                        : "bg-surface-2 text-muted border border-border"
                  }`}
                >
                  {isComplete ? "✓" : stage.icon}
                </motion.div>
                <span
                  className={`text-[9px] text-center leading-tight ${
                    isActive ? "text-accent" : isComplete ? "text-success" : "text-muted/60"
                  }`}
                >
                  {stage.label}
                </span>
              </div>
              {i < stages.length - 1 && (
                <div className="flex-shrink-0 w-4 md:w-6 mt-[-12px]">
                  <div
                    className={`h-px w-full ${
                      isComplete ? "bg-success" : "bg-border"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-[10px] text-muted">
          <span>Duration: 12m 34s</span>
          <span className="hidden sm:inline">GPU: A100 x4</span>
          <span>Dataset: 2.4M rows</span>
        </div>
      </div>
    </motion.div>
  );
}
