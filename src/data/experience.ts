export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  techStack: string[];
}

export const experience: Experience[] = [
  {
    role: "MLOps Engineer",
    company: "Your Company",
    period: "2024 — Present",
    highlights: [
      "Architected ML platform serving 100K+ predictions/sec across 50+ models",
      "Reduced model deployment cycle from weeks to hours with GitOps pipelines",
      "Built real-time drift detection system triggering automated retraining",
    ],
    techStack: ["Kubernetes", "Kubeflow", "MLflow", "ArgoCD", "Terraform"],
  },
  {
    role: "ML Engineer",
    company: "Previous Company",
    period: "2022 — 2024",
    highlights: [
      "Developed end-to-end training pipelines for recommendation systems",
      "Implemented feature store serving 10M+ features with sub-5ms latency",
      "Led migration from batch to real-time inference, reducing latency by 10x",
    ],
    techStack: ["Python", "PyTorch", "Airflow", "Feast", "Redis", "AWS"],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  { name: "Certified Kubernetes Administrator", issuer: "CNCF", year: "2024" },
  {
    name: "AWS Machine Learning Specialty",
    issuer: "Amazon",
    year: "2023",
  },
  {
    name: "Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    year: "2023",
  },
];
