export interface ArsenalSkill {
  category: string;
  shortDesc: string;
  iconType: string;
  devops: string[];
  secops: string[]; // Security layer over this DevOps domain
}

export const arsenalSkillsData: ArsenalSkill[] = [
  {
    category: 'Cloud Infrastructure',
    shortDesc: 'Scalable AWS Compute & Networking',
    iconType: 'cloud',
    devops: ['AWS EC2', 'VPC', 'EKS', 'S3'],
    secops: ['IAM Least-Privilege', 'Security Groups', 'Zero-Exposed Ports']
  },
  {
    category: 'Containers & K8s',
    shortDesc: 'Microservice Cluster Orchestration',
    iconType: 'containers',
    devops: ['Docker', 'Kubernetes', 'K3s', 'Helm 3'],
    secops: ['Trivy Container CVE Scans', 'Non-Root Pods', 'RBAC Policies']
  },
  {
    category: 'CI/CD & Version Control',
    shortDesc: 'Parallel Pipelines & Git Automation',
    iconType: 'cicd',
    devops: ['Jenkins Pipelines', 'Git', 'GitHub Actions', 'Slack Alerts'],
    secops: ['Gitleaks Secret Blocker', 'Jenkins Credentials Mgr', 'Branch Locks']
  },
  {
    category: 'IaC & Automation',
    shortDesc: 'Automated Cluster Provisioning',
    iconType: 'iac',
    devops: ['Terraform', 'Ansible', 'HCL', 'YAML'],
    secops: ['HashiCorp Vault KV-v2', 'External Secrets (ESO)', 'Dynamic Secrets']
  },
  {
    category: 'Shift-Left DevSecOps',
    shortDesc: 'Automated Security & Code Gates',
    iconType: 'security',
    devops: ['Quality Gates', 'Pipeline Verification', 'Automated Testing'],
    secops: ['SonarQube (SAST)', 'Trivy (CVEs)', 'Gitleaks', 'HashiCorp Vault']
  },
  {
    category: 'Ingress & Routing',
    shortDesc: 'Unified Traffic Management',
    iconType: 'ingress',
    devops: ['Traefik Ingress', 'Nginx Reverse Proxy', 'DNS Routing'],
    secops: ['Unified Port 80 Routing', 'Zero Exposed NodePorts', 'TLS Termination']
  },
  {
    category: 'Artifacts & Builds',
    shortDesc: 'Secure Binary & Package Registry',
    iconType: 'artifacts',
    devops: ['Maven', 'Tomcat', 'npm', 'JFrog Artifactory'],
    secops: ['Signed Image Verification', 'Dependency Vulnerability Checks']
  },
  {
    category: 'OS & Scripting',
    shortDesc: 'Hardened Systems & Operations',
    iconType: 'os',
    devops: ['Linux (Ubuntu)', 'Bash Scripting', 'Python'],
    secops: ['SSH Key Hardening', 'Sudo Least-Privilege', 'Audit Logging']
  }
];
