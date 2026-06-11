export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  impact: string[];
  architecture: string[];
  techStack: string[];
  domain: "pipelines" | "serving" | "platform" | "aiops";
  links?: { github?: string; demo?: string; blog?: string };
}

export const projects: Project[] = [
  {
    id: "ml-pipeline-orchestrator",
    title: "ML Pipeline Orchestrator",
    tagline: "End-to-end training pipelines with automatic retraining triggers",
    description:
      "Designed and deployed a production ML pipeline system handling 50+ model training workflows. Implemented drift-triggered retraining, feature validation gates, and automated model registry promotion with rollback capabilities.",
    impact: [
      "Reduced model deployment time from 2 weeks to 4 hours",
      "99.7% pipeline success rate across 500+ daily runs",
      "Saved 40+ engineering hours/week on manual retraining",
    ],
    architecture: [
      "Airflow DAGs → Feature Store → Training → Validation → Registry → Serving",
      "Event-driven triggers via Kafka for drift detection",
      "GitOps-based pipeline versioning with ArgoCD",
    ],
    techStack: [
      "Kubeflow",
      "Airflow",
      "MLflow",
      "Feast",
      "Kafka",
      "ArgoCD",
      "Python",
    ],
    domain: "pipelines",
    links: { github: "#", blog: "#" },
  },
  {
    id: "realtime-inference-platform",
    title: "Real-Time Inference Platform",
    tagline: "Sub-10ms model serving with adaptive batching and canary deploys",
    description:
      "Built a high-throughput inference platform serving 100K+ predictions/sec across multiple model versions. Implemented adaptive batching, shadow deployments, and automated A/B testing with statistical significance gates.",
    impact: [
      "P99 latency reduced from 45ms to 8ms",
      "Zero-downtime deployments with automatic rollback",
      "30% GPU cost reduction via adaptive batching",
    ],
    architecture: [
      "Load Balancer → Inference Router → Model Pods (canary/stable)",
      "Adaptive batcher with dynamic window sizing",
      "Real-time metrics → Automated rollback controller",
    ],
    techStack: [
      "Triton",
      "KServe",
      "Istio",
      "Prometheus",
      "NVIDIA TensorRT",
      "Go",
      "Python",
    ],
    domain: "serving",
    links: { github: "#" },
  },
  {
    id: "gpu-cluster-platform",
    title: "GPU Cluster Platform",
    tagline: "Multi-tenant ML infrastructure with intelligent scheduling",
    description:
      "Architected a multi-tenant GPU platform supporting 200+ data scientists. Implemented priority-based scheduling, spot instance management, and cost attribution with automated right-sizing recommendations.",
    impact: [
      "60% reduction in GPU idle time",
      "$2M+ annual cloud cost savings",
      "Onboarding time from 2 days to 15 minutes",
    ],
    architecture: [
      "Terraform → K8s Clusters → GPU Node Pools → Namespace Isolation",
      "Custom scheduler with priority queues and preemption",
      "Cost attribution pipeline with team-level dashboards",
    ],
    techStack: [
      "Kubernetes",
      "Terraform",
      "NVIDIA GPU Operator",
      "Karpenter",
      "Prometheus",
      "Grafana",
    ],
    domain: "platform",
    links: { github: "#", demo: "#" },
  },
  {
    id: "aiops-anomaly-engine",
    title: "AIOps Anomaly Engine",
    tagline: "Intelligent alerting with 95% noise reduction and auto-remediation",
    description:
      "Developed an AIOps platform that correlates metrics, logs, and traces to detect anomalies and trigger automated remediation. Reduced alert fatigue by 95% using ML-based alert grouping and root cause analysis.",
    impact: [
      "MTTR reduced from 45min to 3min for known issues",
      "95% reduction in false-positive alerts",
      "Auto-remediated 70% of common incidents",
    ],
    architecture: [
      "Metrics/Logs/Traces → Correlation Engine → Anomaly Detector",
      "Root Cause Analyzer → Remediation Playbooks → Execution Engine",
      "Feedback loop for continuous model improvement",
    ],
    techStack: [
      "Python",
      "PyTorch",
      "OpenTelemetry",
      "Kafka",
      "Elasticsearch",
      "Temporal",
      "Grafana",
    ],
    domain: "aiops",
    links: { github: "#", blog: "#" },
  },
];

export const domainMeta: Record<
  Project["domain"],
  { label: string; icon: string; color: string }
> = {
  pipelines: {
    label: "ML Pipelines & Orchestration",
    icon: "⟿",
    color: "text-cyan-400",
  },
  serving: {
    label: "Model Serving & Monitoring",
    icon: "◎",
    color: "text-green-400",
  },
  platform: {
    label: "Infrastructure & Platform",
    icon: "⬡",
    color: "text-yellow-400",
  },
  aiops: {
    label: "AIOps & Observability",
    icon: "◈",
    color: "text-purple-400",
  },
};
