import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Blocks, BookOpen, Box, Briefcase, ChevronDown, ChevronUp, Cloud, Code2, 
  Cpu, Database, ExternalLink, FileSearch, FileText, Flame, GitBranch, GitPullRequest, 
  Globe, Hexagon, Layers, Mail, Package, PieChart, PlayCircle, Rocket, 
  SearchCheck, Server, Settings, Shield, ShieldAlert, ShieldCheck, Sparkles, 
  Terminal, TrendingUp, User
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Data Imports
import { profileData } from './data/profile';
import { projectsData } from './data/projects';
import { experienceData } from './data/experience';
import { educationData, certificationsData } from './data/education';
import { repositoriesData } from './data/repositories';
import { learningData } from './data/learning';
import { arsenalSkillsData } from './data/skills';

// Images
import profileImg from './assets/profile.png'; 
import logoImg from './assets/logo.png';

// ---------------------------------------------------------
// 🌟 PIPELINE ARCHITECTURE COMPONENTS 🌟
// ---------------------------------------------------------
const ArchNode = ({ step, activeStep }: any) => {
  const isActive = activeStep === step.id;
  const isPast = activeStep >= step.id;

  return (
    <div className={`relative flex flex-col items-center justify-center p-1.5 md:p-2 rounded-xl border min-w-[70px] md:min-w-[85px] transition-all duration-300 z-10 bg-black
      ${isActive ? 'border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] scale-110 z-20' : isPast ? 'border-white/40 opacity-100' : 'border-white/10 opacity-40'}`}>
       
       <div className={`mb-1 p-1 rounded-lg transition-colors duration-300 ${isActive ? 'bg-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'bg-white/5 text-white'}`}>
          <step.icon size={16} strokeWidth={1.5} />
       </div>
       
       <h4 className="text-[8px] md:text-[9px] font-bold text-center leading-tight whitespace-nowrap transition-colors duration-300 text-white">
         {step.name}
       </h4>
       
       <p className="text-[6px] md:text-[7px] font-mono text-center mt-0.5 leading-tight transition-colors duration-300 text-white/80">
         {step.title}
       </p>
    </div>
  );
};

const ArchArrow = ({ active }: { active: boolean }) => (
  <div className={`flex items-center justify-center px-0.5 transition-all duration-300 ${active ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-110' : 'text-white/20'}`}>
     <ArrowRight size={12} strokeWidth={2.5} />
  </div>
);

export default function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getIconForCategory = (iconType: string) => {
    switch (iconType) {
      case 'cloud': return <Cloud className="text-white transition-colors duration-300" size={22} />;
      case 'containers': return <Box className="text-white transition-colors duration-300" size={22} />;
      case 'cicd': return <GitBranch className="text-white transition-colors duration-300" size={22} />;
      case 'iac': return <Code2 className="text-white transition-colors duration-300" size={22} />;
      case 'security': return <ShieldCheck className="text-white transition-colors duration-300" size={22} />;
      case 'ingress': return <Globe className="text-white transition-colors duration-300" size={22} />;
      case 'artifacts': return <Package className="text-white transition-colors duration-300" size={22} />;
      case 'os': return <Terminal className="text-white transition-colors duration-300" size={22} />;
      default: return <Cpu className="text-white transition-colors duration-300" size={22} />;
    }
  };

  // 🌟 PIPELINE STEPS 🌟
  const [activeStep, setActiveStep] = useState(0);

  const allSteps = [
    { id: 0, icon: User, title: "TRIGGER", name: "Developer", desc: "Writes & Pushes" },
    { id: 1, icon: PlayCircle, title: "AUTO", name: "Pipeline", desc: "Triggered" },
    { id: 2, icon: GitPullRequest, title: "SOURCE", name: "GitHub", desc: "Code Repository" },
    { id: 3, icon: Terminal, title: "BUILD", name: "Maven", desc: "Compile & Package" },
    { id: 4, icon: SearchCheck, title: "QUALITY", name: "SonarQube", desc: "Static Analysis" },
    { id: 5, icon: Package, title: "ARTIFACT", name: "JFrog", desc: "Store Build" },
    { id: 6, icon: Box, title: "CONTAINER", name: "Docker", desc: "Build Image" },
    { id: 7, icon: ShieldAlert, title: "SECURITY", name: "Trivy", desc: "Vuln Scan" },
    { id: 8, icon: Layers, title: "REGISTRY", name: "Docker Hub", desc: "Store Images" },
    { id: 9, icon: Blocks, title: "INFRA CODE", name: "Terraform", desc: "Provision AWS" },
    { id: 10, icon: Cloud, title: "CLOUD", name: "AWS", desc: "VPC, EC2, EKS" },
    { id: 11, icon: Settings, title: "CONFIG MGMT", name: "Ansible", desc: "Config Servers" },
    { id: 12, icon: Hexagon, title: "ORCHESTRATE", name: "Kubernetes", desc: "K8s Cluster" },
    { id: 13, icon: Rocket, title: "DEPLOY", name: "Deployment", desc: "Deploy App" },
    { id: 14, icon: Server, title: "RUNNING", name: "Pods", desc: "App Running" },
    { id: 15, icon: TrendingUp, title: "SCALING", name: "HPA", desc: "Auto Scale" },
    { id: 16, icon: Globe, title: "APPLICATION", name: "Live App", desc: "User Access" },
    { id: 17, icon: Flame, title: "MONITOR", name: "Prometheus", desc: "Metrics" },
    { id: 18, icon: PieChart, title: "VISUALIZE", name: "Grafana", desc: "Dashboards" },
    { id: 19, icon: Database, title: "LOG MGMT", name: "Loki", desc: "Store Logs" },
    { id: 20, icon: FileSearch, title: "ANALYSIS", name: "Log Analysis", desc: "Search & Filter" },
  ];

  const TOTAL_STEPS = 21;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % TOTAL_STEPS);
    }, 1500); 
    return () => clearInterval(timer);
  }, []);

  const ArchZone = ({ title, steps, startIndex, endIndex }: any) => {
    const isZoneActive = activeStep >= startIndex && activeStep <= endIndex;
    return (
      <div className={`relative border-2 border-dashed rounded-xl p-3 md:p-4 w-full transition-colors duration-500
         ${isZoneActive ? 'border-white/40 bg-white/[0.03]' : 'border-white/10 bg-black'}`}>
         <span className={`absolute -top-2.5 left-4 px-2.5 py-0.5 text-[7px] md:text-[8px] font-black uppercase tracking-widest rounded-full border transition-all duration-500 text-white
            ${isZoneActive ? 'bg-black border-white shadow-[0_0_10px_rgba(255,255,255,0.5)] scale-105' : 'bg-black border-white/20'}`}>
            {title}
         </span>
         <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-2.5 pt-1">
            {steps.map((step: any, i: number) => (
               <React.Fragment key={step.id}>
                  <ArchNode step={step} activeStep={activeStep} />
                  {i < steps.length - 1 && <ArchArrow active={activeStep > step.id} />}
               </React.Fragment>
            ))}
         </div>
      </div>
    );
  };

  // 🌟 ARSENAL VIEW / LAYER FILTER 🌟
  const [activeLayer, setActiveLayer] = useState<'all' | 'devops' | 'secops'>('all');

  // 🌟 PROJECT PILLARS EXPANSION STATE 🌟
  const [expandedPillars, setExpandedPillars] = useState<Record<string, boolean>>({
    'x-shop': true,
    'devops-cicd': false
  });

  const togglePillars = (id: string) => {
    setExpandedPillars(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 🌟 INTERACTIVE MOUSE TRACKING FOR 3D NETWORK 🌟
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Position nodes along a generous ellipse covering the width
  const networkNodes = arsenalSkillsData.map((skillGroup, i) => {
    const angle = (i * (360 / arsenalSkillsData.length)) - 90; 
    const rad = angle * (Math.PI / 180);
    const radiusX = 40; // 40% horizontal spread to cover wide screen gaps
    const radiusY = 34; // 34% vertical spread
    const x = 50 + radiusX * Math.cos(rad);
    const y = 50 + radiusY * Math.sin(rad);
    return { ...skillGroup, x, y };
  });

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-white/30 selection:text-white overflow-x-hidden text-sm md:text-base">
      
      {/* Navbar (Wide, Pure Black with Subtle Border) */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-14 py-3.5 flex justify-between items-center max-w-[1536px] mx-auto">
          <a href="#home" className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-white cursor-pointer">
            <img src={logoImg} alt="Terminal Logo" className="w-8 h-8 invert opacity-90" />
            <span>Portfolio<span className="text-white">.</span></span>
          </a>
          <div className="hidden lg:flex gap-2 text-xs font-bold text-white items-center">
            <a href="#home" className="bg-white/10 border border-white/20 text-white px-3.5 py-1.5 rounded-full shadow-sm hover:bg-white/20 transition-all">Home</a>
            <a href="#about" className="px-3.5 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white/90">About</a>
            <a href="#skills" className="px-3.5 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white/90">Arsenal</a>
            <a href="#experience" className="px-3.5 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white/90">Experience</a>
            <a href="#workflow" className="px-3.5 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white/90">Architecture</a>
            <a href="#certifications" className="px-3.5 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white/90">Certifications</a>
            <a href="#projects" className="px-3.5 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white/90">Projects</a>
            <a href="#education" className="px-3.5 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white/90">Education</a>
            <a href="#contact" className="px-3.5 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white/90">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Pure Black, Wide Screen Coverage, Viewport Fit) */}
      <section id="home" className="relative w-full min-h-screen md:h-screen md:min-h-0 md:max-h-screen flex flex-col justify-between pt-16 md:pt-20 pb-4 md:pb-6 overflow-hidden bg-black">
        {/* Subtle ambient lighting on pure black */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-white/[0.02] blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-14 max-w-[1536px] mx-auto my-auto z-10">
          {/* Left Text Column */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black text-[11px] font-mono tracking-widest uppercase text-white/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for DevOps & Cloud Roles
            </motion.div>

            <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="text-white/80 font-semibold text-lg md:text-xl">
              Hi There, I'm
            </motion.h2>

            <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.05]">
              Ganesh <br className="hidden md:block" /> Veeraboina
            </motion.h1>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="text-base sm:text-lg md:text-xl text-white font-medium flex items-center justify-center md:justify-start gap-2">
              <span>AWS DevOps & DevSecOps Engineer</span>
              <span className="text-white font-black">|</span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }} className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Automating cloud infrastructure, architecting parallel CI/CD delivery pipelines, and embedding zero-trust DevSecOps security across Kubernetes environments.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="flex gap-2.5 justify-center md:justify-start pt-1">
              <a href="https://linkedin.com/in/ganesh-veeraboina" target="_blank" rel="noreferrer" title="LinkedIn Profile" className="bg-black border border-white/20 text-white p-2.5 rounded-full hover:scale-110 hover:border-white/50 transition-all shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/GANESHVEERABOINA" target="_blank" rel="noreferrer" title="GitHub Profile" className="bg-black border border-white/20 text-white p-2.5 rounded-full hover:scale-110 hover:border-white/50 transition-all shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="mailto:ganeshveeraboina.pro@gmail.com" target="_blank" rel="noreferrer" title="Email Ganesh" className="bg-black border border-white/20 text-white p-2.5 rounded-full hover:scale-110 hover:border-white/50 transition-all shadow-md">
                <Mail size={17} strokeWidth={2.5} />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }} className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center gap-1.5 bg-white text-black font-bold text-xs px-5 py-2.5 rounded-full hover:bg-white/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                <Rocket size={14} /> View Featured Projects
              </a>
              <a href="./GANESH-RESUME-V3.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 bg-black border border-white/20 text-white font-semibold text-xs px-5 py-2.5 rounded-full hover:scale-105 hover:border-white/50 transition-all">
                <FileText size={15} /> View My Resume
              </a>
            </motion.div>
          </div>

          {/* Right Image Column (Fits cleanly into viewport height) */}
          <div className="w-full md:w-1/2 flex justify-center items-end relative h-[280px] sm:h-[340px] md:h-[calc(100vh-170px)] max-h-[440px] lg:max-h-[500px] xl:max-h-[560px] z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[400px] h-[260px] md:h-[400px] bg-white/[0.04] blur-[90px] rounded-full -z-10"></div>
            
            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6 }} 
              src={profileImg} 
              alt={profileData.name} 
              className="object-contain object-bottom h-full max-h-full drop-shadow-2xl select-none pointer-events-none" 
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8 }}
          className="hidden md:flex flex-col items-center gap-1 mx-auto pb-1 z-20 cursor-pointer"
        >
          <a href="#about" className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors">
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
            <ChevronDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* Main Content (Wide layout covering side gaps, pure black cards) */}
      <main className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-14 py-12 space-y-28 max-w-[1536px] mx-auto">
        
        {/* ABOUT ME */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24 w-full max-w-6xl xl:max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-black text-white">About Me</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-6">
            {/* Terminal Window (Left) */}
            <div className="flex-1 bg-black border border-white/20 rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-black border-b border-white/10 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
                <p className="text-white/60 font-mono text-[9px] uppercase tracking-widest ml-3">guest@ganesh:~</p>
              </div>
              <div className="p-5 md:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-white font-black text-xs">❯</span>
                  <span className="text-white font-mono text-xs border-b border-white/30">cat about_me.txt</span>
                </div>
                <p className="text-white leading-relaxed text-sm md:text-base text-justify opacity-90">
                  {profileData.about}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-white font-black text-xs">❯</span>
                  <span className="w-1.5 h-4 bg-white animate-pulse"></span>
                </div>
              </div>
            </div>

            {/* Quick Highlights (Right) */}
            <div className="lg:w-[38%] flex flex-col gap-3.5">
              <div className="bg-black border border-white/15 p-4 rounded-xl flex items-start gap-3.5 hover:border-white/35 transition-all">
                <div className="bg-black p-2.5 rounded-lg border border-white/20">
                  <Cloud className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-wider mb-0.5">Cloud Native & IaC</h4>
                  <p className="text-white text-[11px] opacity-70 leading-normal">Provisioning automated AWS EC2 multi-node environments with Terraform and Ansible.</p>
                </div>
              </div>

              <div className="bg-black border border-white/15 p-4 rounded-xl flex items-start gap-3.5 hover:border-white/35 transition-all">
                <div className="bg-black p-2.5 rounded-lg border border-white/20">
                  <GitBranch className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-wider mb-0.5">Parallel CI/CD Pipelines</h4>
                  <p className="text-white text-[11px] opacity-70 leading-normal">High-speed Jenkins declarative builds for microservices with zero hardcoded credentials.</p>
                </div>
              </div>

              <div className="bg-black border border-white/15 p-4 rounded-xl flex items-start gap-3.5 hover:border-white/35 transition-all">
                <div className="bg-black p-2.5 rounded-lg border border-white/20">
                  <ShieldCheck className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-wider mb-0.5">Shift-Left DevSecOps</h4>
                  <p className="text-white text-[11px] opacity-70 leading-normal">Integrating Gitleaks, SonarQube SAST, Trivy CVE scanning, and HashiCorp Vault secrets.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 🌟 MY ARSENAL (WIDE EXPANSIVE DEVOPS & SECOPS MATRIX) 🌟 */}
        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24 z-20 w-full max-w-[1300px] xl:max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-3xl font-black text-white">My Arsenal</h3>
            <p className="text-white/80 mt-1.5 font-mono text-xs tracking-wide text-center">
              DevOps Infrastructure with Integrated SecOps Security Layer
            </p>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

            {/* Interactive Layer Switcher */}
            <div className="mt-6 flex flex-wrap justify-center items-center gap-2 p-1.5 bg-black border border-white/20 rounded-full shadow-lg">
              <button 
                onClick={() => setActiveLayer('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5
                  ${activeLayer === 'all' 
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)] scale-105' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                <Sparkles size={13} />
                <span>Unified DevSecOps</span>
              </button>

              <button 
                onClick={() => setActiveLayer('devops')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5
                  ${activeLayer === 'devops' 
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)] scale-105' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                <Cpu size={13} />
                <span>DevOps Infrastructure</span>
              </button>

              <button 
                onClick={() => setActiveLayer('secops')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5
                  ${activeLayer === 'secops' 
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)] scale-105' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                <ShieldCheck size={13} />
                <span>SecOps Security Layer</span>
              </button>
            </div>
          </div>

          {/* DESKTOP 3D INTERACTIVE VIEW (EXPANDED TO COVER SIDE GAPS) */}
          <div 
             className="hidden lg:flex relative w-full max-w-[1200px] xl:max-w-[1300px] h-[680px] mx-auto my-4 items-center justify-center [perspective:1400px]"
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
          >
             <motion.div 
                className="relative w-[880px] h-[640px]"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
             >
                {/* Connection lines from center to nodes */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: "translateZ(0px)" }}>
                   {networkNodes.map((node, i) => {
                      const isHovered = hoveredNode === i;
                      const isDimmed = hoveredNode !== null && !isHovered;
                      return (
                         <motion.line 
                            key={`line-${i}`}
                            x1="50%" y1="50%" x2={`${node.x}%`} y2={`${node.y}%`}
                            stroke={isHovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.22)"} 
                            strokeWidth={isHovered ? 2.5 : 1.2} 
                            strokeDasharray={isHovered ? "none" : "4,4"}
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.2, delay: i * 0.06 }}
                            style={{ opacity: isDimmed ? 0.2 : 1, transition: 'all 0.3s ease' }}
                         />
                      );
                   })}
                </svg>

                {/* 🌟 PURE BLACK CENTRAL CORE 🌟 */}
                <div 
                   className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center transition-all duration-300 pointer-events-none"
                   style={{ transform: "translate(-50%, -50%) translateZ(80px)", transformStyle: "preserve-3d" }}
                >
                   {/* Ambient glow */}
                   <div className="absolute inset-0 bg-white/10 blur-[45px] rounded-full w-36 h-36 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                   
                   {/* Clean central high-tech core */}
                   <div className={`w-24 h-24 bg-black border-2 rounded-full flex flex-col items-center justify-center transition-all duration-500 z-10 relative
                      ${hoveredNode !== null ? 'border-white shadow-[0_0_35px_rgba(255,255,255,0.7)] scale-105' : 'border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.2)]'}`}>
                      <div className="flex items-center gap-1 text-white">
                        <Cpu size={20} className="animate-pulse" />
                        <ShieldCheck size={20} className="text-white" />
                      </div>
                      <span className="text-[8px] font-black tracking-widest uppercase text-white mt-1">DevSecOps</span>
                      <span className="text-[7px] font-mono text-white/70">CORE</span>
                   </div>
                </div>

                {/* Network Nodes (Pure Black Cards, Spaced Cleanly) */}
                {networkNodes.map((node, i) => {
                   const isHovered = hoveredNode === i;
                   const isDimmed = hoveredNode !== null && !isHovered;

                   return (
                     <motion.div
                        key={`node-${i}`}
                        initial={{ opacity: 0, scale: 0, z: 0 }}
                        whileInView={{ opacity: 1, scale: 1, z: i % 2 === 0 ? 50 : 25 }}
                        whileHover={{ scale: 1.08, z: 120, rotateX: 6, rotateY: -6 }}
                        onHoverStart={() => setHoveredNode(i)}
                        onHoverEnd={() => setHoveredNode(null)}
                        transition={{ duration: 0.25 }}
                        style={{ 
                           left: `${node.x}%`, top: `${node.y}%`, 
                           x: "-50%", y: "-50%", transformStyle: "preserve-3d"
                        }}
                        className={`absolute z-20 w-[195px] bg-black border rounded-xl p-3 flex flex-col items-center transition-all duration-300 cursor-pointer
                           ${isHovered ? 'border-white shadow-[0_15px_35px_rgba(255,255,255,0.35)]' : 'border-white/20 shadow-md'}
                           ${isDimmed ? 'opacity-30 scale-95' : 'opacity-100'}`}
                     >
                        {/* Category Icon & Title */}
                        <div className="flex items-center gap-2 mb-2 w-full justify-center" style={{ transform: "translateZ(20px)" }}>
                           <div className={`p-1.5 rounded-lg border transition-all duration-300
                              ${isHovered ? 'bg-white/20 border-white shadow-[0_0_10px_rgba(255,255,255,0.6)]' : 'bg-black border-white/20'}`}>
                              {getIconForCategory(node.iconType)}
                           </div>
                           <h4 className="text-white font-extrabold text-[10px] leading-tight uppercase tracking-wider text-center">
                              {node.category}
                           </h4>
                        </div>

                        {/* DevOps Tools Layer */}
                        {(activeLayer === 'all' || activeLayer === 'devops') && (
                          <div className="w-full flex flex-col items-center" style={{ transform: "translateZ(10px)" }}>
                            <div className="flex flex-wrap justify-center gap-1 w-full mb-1">
                               {node.devops.map((tech: string, j: number) => (
                                  <span key={j} className={`text-[8px] font-bold bg-black border px-1.5 py-0.5 rounded transition-colors duration-300
                                     ${isHovered ? 'border-white text-white' : 'border-white/30 text-white/90'}`}>
                                     {tech}
                                  </span>
                               ))}
                            </div>
                          </div>
                        )}

                        {/* 🛡️ SECOPS SECURITY LAYER 🛡️ */}
                        {(activeLayer === 'all' || activeLayer === 'secops') && (
                          <div 
                            className="w-full mt-1.5 pt-1.5 border-t border-white/15 flex flex-col items-center"
                            style={{ transform: "translateZ(25px)" }}
                          >
                            <div className="flex items-center gap-1 mb-1">
                              <Shield size={10} className="text-white shrink-0" />
                              <span className="text-[8px] font-black uppercase tracking-wider text-white">
                                SecOps Layer
                              </span>
                            </div>

                            <div className="flex flex-wrap justify-center gap-1 w-full">
                              {node.secops.map((secTool: string, k: number) => (
                                <span key={k} className="text-[7.5px] font-semibold bg-black border border-white/40 text-white px-1.5 py-0.5 rounded shadow-sm">
                                  {secTool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                     </motion.div>
                   );
                })}
             </motion.div>
          </div>

          {/* MOBILE RESPONSIVE ACCORDION / GRID */}
          <div className="lg:hidden relative w-full px-2 mx-auto mt-6">
             <div className="flex flex-col gap-3 relative z-10 w-full">
                {arsenalSkillsData.map((node, i) => (
                   <motion.div 
                      key={`mob-node-${i}`}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-black border border-white/20 rounded-xl p-4 shadow-md w-full"
                   >
                      <div className="flex items-center justify-between mb-3">
                         <div className="flex items-center gap-2.5">
                            <div className="bg-black p-2 rounded-lg border border-white/20">
                               {getIconForCategory(node.iconType)}
                            </div>
                            <div>
                              <h4 className="text-white font-extrabold text-xs uppercase tracking-wider">{node.category}</h4>
                              <p className="text-[10px] text-white/60 font-mono">{node.shortDesc}</p>
                            </div>
                         </div>
                      </div>

                      {/* DevOps Stack */}
                      {(activeLayer === 'all' || activeLayer === 'devops') && (
                        <div className="mb-2">
                          <span className="text-[9px] font-mono text-white/50 uppercase tracking-wider block mb-1">DevOps Stack:</span>
                          <div className="flex flex-wrap gap-1.5">
                             {node.devops.map((tech: string, j: number) => (
                                <span key={j} className="text-[10px] font-bold bg-black border border-white/30 text-white px-2 py-0.5 rounded">
                                   {tech}
                                </span>
                             ))}
                          </div>
                        </div>
                      )}

                      {/* SecOps Security Layer */}
                      {(activeLayer === 'all' || activeLayer === 'secops') && (
                        <div className="pt-2 border-t border-white/10">
                          <div className="flex items-center gap-1.5 mb-1.5 text-white">
                            <ShieldCheck size={12} />
                            <span className="text-[9px] font-black uppercase tracking-wider">SecOps Security Layer</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {node.secops.map((secItem: string, k: number) => (
                              <span key={k} className="text-[9px] font-semibold bg-black border border-white/40 text-white px-2 py-0.5 rounded">
                                {secItem}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                   </motion.div>
                ))}
             </div>
          </div>
        </motion.section>

        {/* FEATURED PROJECTS (WIDE COVERAGE, PURE BLACK CARDS) */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24 w-full max-w-6xl xl:max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-black text-white">Featured Projects</h3>
            <p className="text-white/80 mt-1.5 font-mono text-xs tracking-wide text-center">
              Production-Grade DevSecOps & Cloud Architectures
            </p>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          
          <div className="space-y-8 w-full">
            {projectsData.map((project) => (
              <div 
                key={project.id} 
                className={`relative bg-black border rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-2xl flex flex-col
                  ${project.featured ? 'border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.15)] ring-1 ring-white/20' : 'border-white/15 hover:border-white/30'}`}
              >
                {/* Header with Title and Actions */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div className="space-y-1.5">
                    {project.badge && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white text-black font-mono shadow-sm">
                        {project.badge}
                      </span>
                    )}
                    <h4 className="text-xl md:text-2xl font-black text-white leading-tight pt-1">
                      {project.title}
                    </h4>
                    <p className="text-white/70 font-mono text-xs">
                      {project.subtitle} • <span className="text-white/90 font-semibold">{project.date}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black border border-white/30 hover:bg-white hover:text-black px-4 py-2 rounded-xl transition-all shadow-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      <span>Repository</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/85 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="bg-black border border-white/15 rounded-xl p-3 flex flex-col shadow-sm">
                      <span className="text-[10px] font-mono text-white/60 uppercase tracking-wider mb-0.5">{metric.label}</span>
                      <span className="text-xs md:text-sm font-black text-white">{metric.value}</span>
                    </div>
                  ))}
                </div>

                {/* Architecture Pillars / Achievements */}
                <div className="mb-6 space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/80">
                      Architecture & Implementation Breakdown
                    </span>
                    <button 
                      onClick={() => togglePillars(project.id)}
                      className="text-xs text-white/60 hover:text-white flex items-center gap-1 font-mono transition-colors"
                    >
                      {expandedPillars[project.id] ? (
                        <><span>Collapse Details</span><ChevronUp size={14} /></>
                      ) : (
                        <><span>Expand Breakdown</span><ChevronDown size={14} /></>
                      )}
                    </button>
                  </div>

                  {expandedPillars[project.id] && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      {project.pillars.map((pillar, pIdx) => (
                        <div key={pIdx} className="bg-black border border-white/15 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
                          <h5 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                            {pillar.category}
                          </h5>
                          <ul className="space-y-1.5 text-xs text-white/80">
                            {pillar.points.map((pt, ptIdx) => (
                              <li key={ptIdx} className="flex items-start gap-2 leading-relaxed">
                                <span className="text-white/40 mt-1 text-[10px]">▸</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Phase 2 Roadmap if available */}
                {project.roadmap && (
                  <div className="bg-black border border-white/15 rounded-xl p-3.5 mb-6 flex items-start gap-2.5">
                    <TrendingUp size={16} className="text-white shrink-0 mt-0.5" />
                    <p className="text-xs text-white/80 leading-relaxed font-mono">
                      <strong className="text-white uppercase tracking-wider">Roadmap / Next Iteration: </strong>
                      {project.roadmap}
                    </p>
                  </div>
                )}

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-[10px] md:text-[11px] font-bold bg-black border border-white/20 text-white px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE (PURE BLACK, FULL WIDTH) */}
        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24 w-full max-w-6xl xl:max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-black text-white">Experience</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 gap-6 w-full">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative bg-black border border-white/15 shadow-xl rounded-2xl p-6 md:p-8 hover:border-white/35 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center">
                  <div className="shrink-0 hidden sm:flex">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center p-2 border border-white/20">
                      {/* @ts-ignore */}
                      {exp.logo ? <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-lg" /> : <Briefcase className="text-white" size={26} />}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center w-full gap-3">
                    <div>
                      <h4 className="text-xl font-black text-white">{exp.role}</h4>
                      <p className="text-white/80 font-bold text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-white font-mono text-xs bg-black px-3.5 py-1.5 rounded-lg border border-white/20 w-fit">
                      <p>{exp.duration}</p>
                      <p className="text-white/60 mt-0.5">{exp.location}</p>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-2 text-white/90 mb-6 text-sm md:text-base">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="pl-1.5 leading-relaxed">{resp}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-bold bg-black border border-white/20 text-white px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ENTERPRISE CI/CD ARCHITECTURE (WIDE & PURE BLACK) */}
        <motion.section id="workflow" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24 w-full max-w-6xl xl:max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-white text-center uppercase tracking-wider">
              Enterprise CI/CD Architecture
            </h3>
            <p className="text-white/80 mt-1.5 font-mono text-xs tracking-wide">Live End-to-End Deployment Flow</p>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>

          <div className="relative w-full bg-black border border-white/15 shadow-2xl rounded-2xl p-4 lg:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
            
            <div className="absolute top-4 left-4 flex items-center gap-2.5 bg-black px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-md z-20">
               <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,1)]"></div>
               <span className="text-[9px] md:text-[10px] font-mono text-white">SYSTEM STATUS: <span className="text-white font-bold ml-1">{allSteps[activeStep].name.toUpperCase()} ACTIVE</span></span>
            </div>

            <div className="mt-12 flex flex-col gap-4 relative z-10">
               <ArchZone title="Continuous Integration Pipeline" steps={allSteps.slice(0, 9)} startIndex={0} endIndex={8} />

               <div className="flex flex-col xl:flex-row gap-4 w-full">
                  <div className="xl:w-[40%]">
                     <ArchZone title="Infrastructure & Configuration" steps={allSteps.slice(9, 12)} startIndex={9} endIndex={11} />
                  </div>
                  <div className="xl:w-[60%]">
                     <ArchZone title="Deployment Pipeline (K8s Cluster)" steps={allSteps.slice(12, 17)} startIndex={12} endIndex={16} />
                  </div>
               </div>

               <ArchZone title="Observability & Log Analysis" steps={allSteps.slice(17, 21)} startIndex={17} endIndex={20} />
            </div>
          </div>
        </motion.section>

        {/* CERTIFICATIONS (4 COLUMNS ON XL SCREENS, PURE BLACK) */}
        <motion.section id="certifications" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24 w-full max-w-6xl xl:max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-black text-white">Certifications</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {/* @ts-ignore */}
            {certificationsData.map((cert, idx) => (
              <div key={idx} className="group relative bg-black border border-white/15 shadow-xl rounded-2xl p-5 flex flex-col items-center text-center overflow-hidden hover:border-white/35 transition-all duration-300">
                <div className="absolute top-3 right-3 bg-black border border-white/20 text-white text-[9px] font-mono px-2 py-0.5 rounded-full">{cert.date}</div>
                <div className="relative w-16 h-16 mb-4 mt-2">
                  <div className="relative w-full h-full bg-black border border-white/20 rounded-full flex justify-center items-center overflow-hidden shadow-inner">
                    {/* @ts-ignore */}
                    <img src={cert.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt={cert.name} className="w-full h-full object-cover rounded-full p-1.5" />
                  </div>
                </div>
                <h4 className="text-white font-bold text-sm leading-snug mb-1.5">{cert.name}</h4>
                <p className="text-white/60 text-[9px] uppercase tracking-widest font-semibold mb-4">{cert.issuer}</p>
                {/* @ts-ignore */}
                <a href={cert.link || "#"} target="_blank" rel="noreferrer" className="mt-auto w-full flex justify-center items-center gap-1.5 text-xs font-bold text-white bg-black border border-white/20 hover:border-white/50 rounded-lg px-3 py-2 transition-all">
                  View Credential <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SELECTED REPOSITORIES (3 COLUMNS, PURE BLACK) */}
        <motion.section id="repositories" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24 w-full max-w-6xl xl:max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-black text-white text-center">Selected Repositories</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {repositoriesData.map((repo, idx) => (
              <div key={idx} className="group relative bg-black border-l-4 border-l-white/30 border-y border-r border-white/15 p-6 rounded-r-xl hover:border-l-white transition-all shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2.5">
                    <div className="flex items-center gap-2 text-white font-bold text-base">
                      <BookOpen size={18} className="text-white/70" />
                      {repo.title}
                    </div>
                    <a href={repo.githubUrl} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-white/70 mb-4 text-xs leading-relaxed">{repo.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {repo.technologies.map((tech, i) => (
                    <span key={i} className="text-[9px] font-mono font-bold text-white bg-black border border-white/20 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION SECTION (WIDE, PURE BLACK) */}
        <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24 w-full max-w-6xl xl:max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-3xl font-black text-white">Education</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          
          <div className="relative border-l-2 border-white/20 ml-4 md:ml-6 space-y-8 pb-2 w-full">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative pl-6 md:pl-10 group">
                <div className="absolute -left-[8px] top-1.5 w-3.5 h-3.5 bg-black border-2 border-white/50 rounded-full group-hover:border-white transition-all"></div>

                <div className="bg-black border border-white/15 p-5 md:p-6 rounded-xl hover:border-white/35 transition-all shadow-md">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-3">
                    <div className="flex items-center gap-3.5">
                      {/* @ts-ignore */}
                      {edu.logo && (
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-lg border border-white/20 p-1 flex items-center justify-center shrink-0">
                          {/* @ts-ignore */}
                          <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain rounded" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-lg md:text-xl font-black text-white">{edu.degree}</h4>
                        <p className="text-white/80 font-bold mt-0.5 uppercase text-[11px] md:text-xs tracking-widest">{edu.institution}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 border border-white/20 bg-black text-white text-[11px] font-mono rounded-full whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>
                  {edu.details && <p className="text-white/70 text-xs md:text-sm leading-relaxed mt-3">{edu.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CURRENTLY LEARNING (4 COLUMNS ON XL, PURE BLACK) */}
        <motion.section id="learning" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24 w-full max-w-6xl xl:max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-black text-white">Currently Learning</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
            {learningData.map((item, idx) => (
              <div key={idx} className="group relative bg-black border border-white/15 p-4 rounded-xl overflow-hidden hover:border-white/35 transition-all shadow-md">
                <div className="flex items-center gap-3 relative z-10">
                  <div className="relative flex items-center justify-center w-10 h-10 bg-black border border-white/20 rounded-lg">
                    <Terminal size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white text-xs font-bold tracking-wide leading-snug">{item}</h4>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                      </span>
                      <span className="text-white/60 text-[9px] font-mono uppercase tracking-widest">Processing...</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </main>

      {/* Footer / Contact (Pure Black) */}
      <footer id="contact" className="bg-black py-12 mt-12 relative border-t border-white/10">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-14 text-center flex flex-col items-center max-w-[1536px] mx-auto">
          <h3 className="text-3xl font-black text-white mb-4">Let's Connect</h3>
          <p className="text-white/80 mb-8 text-sm md:text-base max-w-xl">
            Currently seeking entry-level DevOps & Cloud opportunities. Let's build something great together.
          </p>
          <div className="flex justify-center gap-5 mb-10">
            <a href="mailto:ganeshveeraboina.pro@gmail.com" className="bg-black border border-white/20 text-white hover:border-white/50 hover:scale-110 p-3 rounded-full transition-all shadow-md"><Mail size={20} /></a>
            <a href="https://github.com/GANESHVEERABOINA" className="bg-black border border-white/20 text-white hover:border-white/50 hover:scale-110 p-3 rounded-full transition-all shadow-md">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://linkedin.com/in/ganesh-veeraboina" className="bg-black border border-white/20 text-white hover:border-white/50 hover:scale-110 p-3 rounded-full transition-all shadow-md"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          </div>

          <p className="text-white font-medium font-mono text-xs opacity-50">© {new Date().getFullYear()} Ganesh Veeraboina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
