"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const stages = [
  { id: "data", label: "Data Sources", color: "#fbbf24", icon: "⊳" },
  { id: "ingestion", label: "Ingestion", color: "#22d3ee", icon: "↓" },
  { id: "feature", label: "Feature Store", color: "#22d3ee", icon: "⬡" },
  { id: "training", label: "Training", color: "#4ade80", icon: "◎" },
  { id: "validation", label: "Validation", color: "#4ade80", icon: "✓" },
  { id: "registry", label: "Model Registry", color: "#a78bfa", icon: "◈" },
  { id: "serving", label: "Serving", color: "#f87171", icon: "▲" },
  { id: "monitoring", label: "Monitoring", color: "#f87171", icon: "◉" },
];

export function ArchitectureDiagram() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-sm font-mono">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold">system architecture</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <p className="text-sm text-muted mb-8 max-w-2xl">
            How I design end-to-end ML platforms — from data ingestion through serving, with continuous monitoring closing the feedback loop.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="border border-border rounded-xl p-6 md:p-8 bg-surface/50 backdrop-blur-sm">
            {/* Mobile: vertical flow */}
            <div className="md:hidden space-y-3">
              {stages.map((stage, i) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-lg border shrink-0"
                      style={{ borderColor: stage.color, color: stage.color, backgroundColor: `${stage.color}10` }}
                    >
                      {stage.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold" style={{ color: stage.color }}>
                        {stage.label}
                      </span>
                    </div>
                    {i < stages.length - 1 && (
                      <span className="text-muted/40 text-xs">→</span>
                    )}
                  </div>
                  {i < stages.length - 1 && (
                    <div className="ml-5 h-3 border-l border-dashed border-border" />
                  )}
                </motion.div>
              ))}

              {/* Feedback loop indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-4 pt-4 border-t border-dashed border-border"
              >
                <p className="text-[10px] text-muted text-center flex items-center justify-center gap-2">
                  <span className="text-accent">↺</span>
                  Monitoring triggers retraining via drift detection
                </p>
              </motion.div>
            </div>

            {/* Desktop: horizontal SVG flow */}
            <div className="hidden md:block">
              <svg
                viewBox="0 0 900 200"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <marker
                    id="arrow"
                    markerWidth="8"
                    markerHeight="6"
                    refX="8"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 8 3, 0 6" fill="#52525b" />
                  </marker>
                  <marker
                    id="arrow-accent"
                    markerWidth="8"
                    markerHeight="6"
                    refX="8"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 8 3, 0 6" fill="#22d3ee" />
                  </marker>
                </defs>

                {/* Connection lines */}
                {stages.slice(0, -1).map((stage, i) => {
                  const x1 = 60 + i * 110 + 45;
                  const x2 = 60 + (i + 1) * 110 - 5;
                  return (
                    <motion.line
                      key={`line-${i}`}
                      x1={x1}
                      y1={100}
                      x2={x2}
                      y2={100}
                      stroke="#52525b"
                      strokeWidth="1.5"
                      markerEnd="url(#arrow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                    />
                  );
                })}

                {/* Feedback loop (monitoring → training) */}
                <motion.path
                  d="M 840 130 C 840 180, 380 180, 380 130"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  markerEnd="url(#arrow-accent)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
                <text x="610" y="178" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="monospace" opacity="0.7">
                  drift → retrain
                </text>

                {/* Nodes */}
                {stages.map((stage, i) => {
                  const x = 60 + i * 110;
                  return (
                    <motion.g
                      key={stage.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 200 }}
                    >
                      <rect
                        x={x}
                        y={80}
                        width="90"
                        height="40"
                        rx="8"
                        fill="#18181b"
                        stroke={stage.color}
                        strokeWidth="1.5"
                      />
                      <text
                        x={x + 45}
                        y={104}
                        textAnchor="middle"
                        fill={stage.color}
                        fontSize="11"
                        fontFamily="monospace"
                        fontWeight="600"
                      >
                        {stage.label}
                      </text>
                    </motion.g>
                  );
                })}
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-6 pt-4 border-t border-border flex flex-wrap gap-4 justify-center text-xs text-muted">
              {[
                { color: "bg-yellow-400", label: "Data" },
                { color: "bg-cyan-400", label: "Processing" },
                { color: "bg-green-400", label: "Training" },
                { color: "bg-purple-400", label: "Registry" },
                { color: "bg-red-400", label: "Serving" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-sm ${item.color}`} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
