export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "drift-detection-at-scale",
    title: "Building Drift Detection That Actually Works at Scale",
    excerpt:
      "How we moved from scheduled retraining to event-driven pipelines triggered by real drift signals — and reduced unnecessary retraining by 80%.",
    date: "2025-11-15",
    readTime: "8 min",
    tags: ["MLOps", "Drift Detection", "Pipelines"],
    url: "#",
  },
  {
    id: "gpu-cost-optimization",
    title: "GPU Cost Optimization: From $3M to $1M Without Sacrificing Performance",
    excerpt:
      "A deep dive into the scheduling, right-sizing, and spot instance strategies that cut our GPU bill by 60% while maintaining SLAs.",
    date: "2025-09-22",
    readTime: "12 min",
    tags: ["Infrastructure", "Cost", "Kubernetes"],
    url: "#",
  },
  {
    id: "zero-downtime-model-deploys",
    title: "Zero-Downtime Model Deployments with Progressive Delivery",
    excerpt:
      "Implementing canary deploys for ML models with automatic rollback based on prediction quality metrics, not just latency.",
    date: "2025-07-10",
    readTime: "10 min",
    tags: ["Model Serving", "DevOps", "Reliability"],
    url: "#",
  },
  {
    id: "aiops-alert-fatigue",
    title: "Killing Alert Fatigue: An ML Approach to Noise Reduction",
    excerpt:
      "How we trained a model to correlate, deduplicate, and prioritize alerts — reducing on-call noise by 95% and MTTR by 10x.",
    date: "2025-05-03",
    readTime: "9 min",
    tags: ["AIOps", "Observability", "ML"],
    url: "#",
  },
];
