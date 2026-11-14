export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  featured?: boolean;
  date: string;
  description: string;
  metrics: ProjectMetric[];
  pillars: {
    category: string;
    points: string[];
  }[];
  roadmap?: string;
  technologies: string[];
  githubUrl: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "x-shop",
    title: "X-Shop: End-to-End DevSecOps CI/CD & Cloud-Native Kubernetes Platform",
    subtitle: "3-Tier Microservices E-Commerce Architecture (React Storefront, React Admin, Node.js API)",
    badge: "🚀 FLAGSHIP DEVSECOPS PROJECT",
    featured: true,
    date: "Oct 2026 - Nov 2026",
    description: "Architected and implemented production-ready DevSecOps automation and cloud-native infrastructure on AWS for X-Shop, a 3-tier microservices platform. Engineered automated multi-node K3s clustering, parallelized multi-service CI/CD pipelines, instituted zero-trust runtime secrets management via HashiCorp Vault & ESO, and enforced rigorous shift-left security gates.",
    metrics: [
      { label: "Microservices Fleet", value: "20 Pods (3 Services)" },
      { label: "Zero-Trust Secrets", value: "11 Vault KV-v2 Secrets" },
      { label: "Security Enforcement", value: "Gitleaks + SonarQube + Trivy" },
      { label: "Ingress Gateway", value: "Traefik Unified Port 80" }
    ],
    pillars: [
      {
        category: "IaC & Automated Cluster Bootstrap",
        points: [
          "Provisioned a multi-node AWS EC2 environment (1 Master + 2 Worker nodes) using Terraform.",
          "Configured Ansible Dynamic Inventory over SSH to automate K3s cluster bootstrap, worker node joins, and control-plane taints (NoSchedule)."
        ]
      },
      {
        category: "Parallel CI/CD & Zero Hardcoding",
        points: [
          "Optimized Jenkins declarative pipeline to build and scan Storefront, Admin, and Backend in parallel—drastically cutting pipeline execution time.",
          "Zero hardcoded credentials: dynamically injected Kubeconfig, DockerHub logins, and SonarQube tokens at runtime via Jenkins Credentials Manager.",
          "Integrated Slack Webhooks for real-time build and deployment status alerts."
        ]
      },
      {
        category: "Microservices & Unified Ingress",
        points: [
          "Containerized services with multi-stage Dockerfiles and deployed 20 pods (8x Backend, 8x Frontend, 4x Admin) via modular Helm 3 charts.",
          "Unified all external traffic on Port 80 via Traefik Ingress (/, /admin, /api) with zero exposed NodePorts."
        ]
      },
      {
        category: "Shift-Left Security & Engineering Ownership",
        points: [
          "Gitleaks: Automated commit & CI-level secret scanning to prevent credential leakage.",
          "SonarQube (SAST): Automated code quality and security gates embedded directly in pipeline.",
          "Trivy: Automated container image vulnerability scanning for critical CVEs before push to DockerHub."
        ]
      },
      {
        category: "Zero-Trust Secrets (HashiCorp Vault + ESO)",
        points: [
          "Deployed HashiCorp Vault on K3s alongside External Secrets Operator (ESO) as a zero-trust secret engine.",
          "Stored 11 production runtime secrets in Vault KV-v2 and synced them dynamically into Kubernetes secrets at runtime."
        ]
      }
    ],
    roadmap: "Phase 2: Custom AWS Multi-AZ VPC, ALB with SSL/TLS, K8s Auto-Scaling (HPA), GitOps delivery with ArgoCD & Camunda workflow orchestration, and expanding security with Checkov, OWASP ZAP & Falco runtime security.",
    technologies: [
      "AWS EC2",
      "Kubernetes (K3s)",
      "Terraform",
      "Ansible",
      "Jenkins",
      "Docker",
      "Helm 3",
      "Traefik",
      "HashiCorp Vault",
      "External Secrets (ESO)",
      "SonarQube",
      "Trivy",
      "Gitleaks",
      "Slack Webhooks",
      "Node.js",
      "React"
    ],
    githubUrl: "https://github.com/GANESHVEERABOINA"
  },
  {
    id: "devops-cicd",
    title: "DevOps CI/CD Pipeline Automation",
    subtitle: "End-to-End Build & Deployment Automation on AWS EC2",
    badge: "AUTOMATION & CLOUD",
    featured: false,
    date: "May 2026 - Aug 2026",
    description: "Implemented a complete DevOps CI/CD pipeline project to automate the build, artifact generation, and deployment workflow of a web application on AWS EC2.",
    metrics: [
      { label: "Automation Engine", value: "Jenkins Declarative Pipeline" },
      { label: "Deployment Target", value: "AWS EC2 + Apache Tomcat" },
      { label: "Containerization", value: "Docker Container Deployment" },
      { label: "Build Tooling", value: "Maven & Groovy Scripting" }
    ],
    pillars: [
      {
        category: "Pipeline Automation & Containerization",
        points: [
          "Automated deployment workflows using Jenkins declarative pipeline and Apache Tomcat.",
          "Implemented containerized deployment using Jenkins Pipeline and custom multi-stage Dockerfile.",
          "Configured Jenkinsfile with Groovy scripting for automated build, test, and artifact archiving.",
          "Resolved real-time deployment issues like Docker socket permissions and port conflicts.",
          "Successfully deployed and managed application containers on AWS EC2 instances."
        ]
      }
    ],
    technologies: ["Jenkins", "Docker", "AWS EC2", "Maven", "Apache Tomcat", "GitHub", "Linux", "Groovy"],
    githubUrl: "https://github.com/GANESHVEERABOINA/devops-cicd-project.git"
  }
];
