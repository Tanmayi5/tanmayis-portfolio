"use client";

import { motion } from "framer-motion";
import { domainMeta } from "@/data/projects";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const domainDetails: Record<
  string,
  { description: string; capabilities: string[]; metric: string }
> = {
  pipelines: {
    description:
      "Building robust, self-healing training pipelines that scale from prototype to production without manual intervention.",
    capabilities: [
      "Drift-triggered retraining",
      "Feature validation gates",
      "Pipeline versioning & rollback",
      "Distributed training orchestration",
      "Data quality monitoring",
    ],
    metric: "500+ daily runs",
  },
  serving: {
    description:
      "Deploying models with sub-10ms latency at scale, with zero-downtime updates and automated quality gates.",
    capabilities: [
      "Adaptive batching & caching",
      "Canary & shadow deployments",
      "A/B testing with stat-sig gates",
      "Multi-model routing",
      "Real-time performance monitoring",
    ],
    metric: "100K req/sec",
  },
  platform: {
    description:
      "Designing multi-tenant ML platforms that give teams autonomy while maintaining cost efficiency and security.",
    capabilities: [
      "GPU scheduling & right-sizing",
      "Spot instance management",
      "Cost attribution & showback",
      "Self-service onboarding",
      "Multi-cloud orchestration",
    ],
    metric: "$2M+ saved/yr",
  },
  aiops: {
    description:
      "Reducing operational toil through intelligent alerting, anomaly detection, and automated incident response.",
    capabilities: [
      "ML-based anomaly detection",
      "Alert correlation & dedup",
      "Automated root cause analysis",
      "Self-healing runbooks",
      "Feedback-driven model tuning",
    ],
    metric: "95% noise reduction",
  },
};

export function Domains() {
  return (
    <section id="domains" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/30 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-sm font-mono">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold">capability domains</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <p className="text-sm text-muted mb-12 max-w-2xl">
            Deep expertise across the full ML lifecycle — from experiment to production, and everything in between.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {(Object.keys(domainMeta) as Array<keyof typeof domainMeta>).map(
            (key) => {
              const meta = domainMeta[key];
              const details = domainDetails[key];
              return (
                <StaggerItem key={key}>
                  <motion.div
                    whileHover={{ y: -4, borderColor: "rgba(34, 211, 238, 0.3)" }}
                    transition={{ duration: 0.2 }}
                    className="group border border-border rounded-xl p-6 bg-surface/50 backdrop-blur-sm h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`text-3xl ${meta.color}`}>
                          {meta.icon}
                        </span>
                        <h3 className="font-bold text-sm">{meta.label}</h3>
                      </div>
                      <span className="text-[10px] text-accent bg-accent/10 px-2 py-1 rounded-full border border-accent/20">
                        {details.metric}
                      </span>
                    </div>
                    <p className="text-xs text-muted mb-5 leading-relaxed">
                      {details.description}
                    </p>
                    <ul className="space-y-2">
                      {details.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="text-xs text-muted/80 flex items-center gap-2 group-hover:text-muted transition-colors"
                        >
                          <span className={`text-[8px] ${meta.color} opacity-60`}>●</span>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              );
            }
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
