"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Metric {
  label: string;
  value: number;
  max: number;
  unit: string;
  color: string;
  bgColor: string;
}

const baseMetrics: Metric[] = [
  { label: "GPU Utilization", value: 87, max: 100, unit: "%", color: "bg-cyan-400", bgColor: "bg-cyan-400/20" },
  { label: "Pipeline Success", value: 99.7, max: 100, unit: "%", color: "bg-green-400", bgColor: "bg-green-400/20" },
  { label: "Inference P99", value: 8, max: 50, unit: "ms", color: "bg-yellow-400", bgColor: "bg-yellow-400/20" },
  { label: "Cost Efficiency", value: 94, max: 100, unit: "%", color: "bg-purple-400", bgColor: "bg-purple-400/20" },
];

export function MetricsDashboard() {
  const [metrics, setMetrics] = useState(baseMetrics);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((m) => ({
          ...m,
          value: Math.min(
            m.max,
            Math.max(
              m.value * 0.8,
              m.value + (Math.random() - 0.5) * (m.max * 0.02)
            )
          ),
        }))
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      whileHover={{ borderColor: "rgba(34, 211, 238, 0.2)" }}
      className="border border-border rounded-xl p-6 bg-surface/50 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-[10px] text-muted uppercase tracking-wider">
          System Metrics
        </span>
        <span className="text-[10px] text-success flex items-center gap-1.5 bg-success/10 px-2 py-0.5 rounded-full border border-success/20">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          live
        </span>
      </div>

      <div className="space-y-5">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-muted">{metric.label}</span>
              <span className="text-xs font-mono text-foreground font-medium">
                {metric.value.toFixed(1)}
                {metric.unit}
              </span>
            </div>
            <div className="h-2 bg-surface-2 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${metric.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${(metric.value / metric.max) * 100}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-border grid grid-cols-3 gap-2">
        {[
          { label: "Models", value: "47" },
          { label: "Nodes", value: "12" },
          { label: "Alerts", value: "0" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-sm font-bold text-foreground">{stat.value}</p>
            <p className="text-[9px] text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
