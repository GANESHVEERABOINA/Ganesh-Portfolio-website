import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Blocks, BookOpen, Box, Briefcase, Cloud, Code2, Cpu, Database, 
  ExternalLink, FileSearch, FileText, Flame, GitBranch, GitPullRequest, Globe, 
  Hexagon, Layers, Mail, Package, PieChart, PlayCircle, Rocket, SearchCheck, 
  Server, Settings, ShieldAlert, ShieldCheck, Terminal, TrendingUp, User
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Data Imports
import { profileData } from './data/profile';
import { projectsData } from './data/projects';
import { experienceData } from './data/experience';
import { educationData, certificationsData } from './data/education';
import { repositoriesData } from './data/repositories';
import { learningData } from './data/learning';

// Images
import profileImg from './assets/profile.png'; 
import logoImg from './assets/logo.png';

// 🌟 CUSTOM SKILLS DATA 🌟
const mySkillsData = [
  { category: 'Cloud', technologies: ['AWS'] },
  { category: 'Containers', technologies: ['Docker', 'Kubernetes'] },
  { category: 'CI/CD & Git', technologies: ['Jenkins', 'Git', 'GitHub', 'GitHub Actions'] },
  { category: 'IaC & Config', technologies: ['Terraform', 'HCL', 'Ansible', 'YAML'] },
  { category: 'Quality & Sec', technologies: ['SonarQube', 'Trivy'] },
  { category: 'Artifacts', technologies: ['JFrog'] },
  { category: 'OS & Scripts', technologies: ['Linux (Ubuntu)', 'Bash', 'Python'] },
  { category: 'Servers & Build', technologies: ['Maven', 'Tomcat', 'Nginx', 'npm'] }
];

// ---------------------------------------------------------
// 🌟 PIPELINE ARCHITECTURE COMPONENTS 🌟
// ---------------------------------------------------------
const ArchNode = ({ step, activeStep }: any) => {
  const isActive = activeStep === step.id;
  const isPast = activeStep >= step.id;

  return (
    <div className={`relative flex flex-col items-center justify-center p-1.5 md:p-2 rounded-xl border min-w-[70px] md:min-w-[85px] transition-all duration-300 z-10 bg-[#0a0a0a]
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

  const getIconForCategory = (category: string) => {
    const lowerCat = category.toLowerCase();
    if (lowerCat.includes('cloud')) return <Cloud className="text-white transition-colors duration-300" size={24} />;
    if (lowerCat.includes('container') || lowerCat.includes('orchestration')) return <Box className="text-white transition-colors duration-300" size={24} />;
    if (lowerCat.includes('ci/cd') || lowerCat.includes('git')) return <GitBranch className="text-white transition-colors duration-300" size={24} />;
    if (lowerCat.includes('iac') || lowerCat.includes('code')) return <Code2 className="text-white transition-colors duration-300" size={24} />;
    if (lowerCat.includes('config')) return <Settings className="text-white transition-colors duration-300" size={24} />;
    if (lowerCat.includes('os') || lowerCat.includes('script')) return <Terminal className="text-white transition-colors duration-300" size={24} />;
    if (lowerCat.includes('artifacts') || lowerCat.includes('registry')) return <Package className="text-white transition-colors duration-300" size={24} />;
    if (lowerCat.includes('quality') || lowerCat.includes('sec')) return <ShieldCheck className="text-white transition-colors duration-300" size={24} />;
    if (lowerCat.includes('build') || lowerCat.includes('server')) return <Server className="text-white transition-colors duration-300" size={24} />;
    return <Cpu className="text-white transition-colors duration-300" size={24} />;
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
         ${isZoneActive ? 'border-white/40 bg-white/[0.03]' : 'border-white/10 bg-white/[0.01]'}`}>
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

  // 🌟 INTERACTIVE MOUSE TRACKING FOR 3D NETWORK 🌟
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

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

  const networkNodes = mySkillsData.map((skillGroup, i) => {
    const angle = (i * (360 / mySkillsData.length)) - 90; 
    const rad = angle * (Math.PI / 180);
    const radius = 35; 
    const x = 50 + radius * Math.cos(rad);
    const y = 50 + radius * Math.sin(rad);
    return { ...skillGroup, x, y };
  });

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-white/30 selection:text-white overflow-x-hidden text-sm md:text-base">
      
      {/* Navbar (Compact & Clean) */}
      <nav className="absolute top-0 w-full z-50">
        <div className="w-full px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-white cursor-pointer">
            <img src={logoImg} alt="Terminal Logo" className="w-8 h-8 invert opacity-90" />
            <span>Portfolio<span className="text-white">.</span></span>
          </div>
          <div className="hidden lg:flex gap-3 text-xs font-bold text-white items-center">
            <a href="#home" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full shadow-lg hover:bg-white/20 transition-all">Home</a>
            <a href="#about" className="px-4 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white">About</a>
            <a href="#experience" className="px-4 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white">Experience</a>
            <a href="#certifications" className="px-4 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white">Certifications</a>
            <a href="#projects" className="px-4 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white">Projects</a>
            <a href="#education" className="px-4 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white">Education</a>
            <a href="#contact" className="px-4 py-1.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 transition-all text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Optimized Size) */}
      <section id="home" className="relative w-full min-h-[85vh] flex items-center pt-16 overflow-hidden bg-black">
        <div className="w-full px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-4 z-10 text-center md:text-left">
            <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="text-white font-bold text-xl md:text-2xl">
              Hi There, I'm
            </motion.h2>
            <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
              Ganesh <br className="hidden md:block" /> Veeraboina
            </motion.h1>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="text-lg md:text-xl text-white font-semibold flex items-center justify-center md:justify-start gap-2">
              AWS DevOps Engineer <span className="text-white font-black">|</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="flex gap-3 justify-center md:justify-start pt-1">
              <a href="https://linkedin.com/in/ganesh-veeraboina" target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-2.5 rounded-full hover:scale-110 hover:bg-white/20 transition-all shadow-md"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              <a href="https://github.com/GANESHVEERABOINA" target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-2.5 rounded-full hover:scale-110 hover:bg-white/20 transition-all shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="mailto:ganeshveeraboina.pro@gmail.com" target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-2.5 rounded-full hover:scale-110 hover:bg-white/20 transition-all shadow-md"><Mail size={18} strokeWidth={2.5} /></a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }} className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold text-xs px-5 py-2.5 rounded-full hover:scale-105 hover:bg-white/20 transition-all">View My Projects</a>
              <a href="./GANESH-RESUME-V3.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 bg-white/5 backdrop-blur-lg border border-white/10 text-white font-semibold text-xs px-5 py-2.5 rounded-full hover:scale-105 hover:bg-white/20 transition-all"><FileText size={16} />View My Resume</a>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-end relative h-[320px] md:h-[500px] z-10">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full -z-10"></div>
            <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} src={profileImg} alt={profileData.name} className="object-contain h-full drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Main Content (Reduced Spacing) */}
      <main className="w-full px-6 md:px-12 lg:px-20 py-12 space-y-20">
        
        {/* ABOUT ME */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-black text-white">About Me</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>

          <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-6">
            {/* Terminal Window (Left) */}
            <div className="flex-1 bg-[#050505] border border-white/20 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-white/5 border-b border-white/10 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
                <p className="text-white/60 font-mono text-[9px] uppercase tracking-widest ml-3">guest@ganesh:~</p>
              </div>
              <div className="p-5 md:p-6">
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
            <div className="lg:w-[38%] flex flex-col gap-3">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3.5 hover:bg-white/10 transition-all">
                <div className="bg-black p-2.5 rounded-lg border border-white/20">
                  <Cloud className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-wider mb-0.5">Cloud Native</h4>
                  <p className="text-white text-[11px] opacity-70 leading-normal">Designing scalable and highly available AWS infrastructures.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3.5 hover:bg-white/10 transition-all">
                <div className="bg-black p-2.5 rounded-lg border border-white/20">
                  <GitBranch className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-wider mb-0.5">CI/CD Pipelines</h4>
                  <p className="text-white text-[11px] opacity-70 leading-normal">Automating software delivery with seamless integration & deployment.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3.5 hover:bg-white/10 transition-all">
                <div className="bg-black p-2.5 rounded-lg border border-white/20">
                  <ShieldCheck className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-wider mb-0.5">DevSecOps</h4>
                  <p className="text-white text-[11px] opacity-70 leading-normal">Embedding security practices within automated workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 🌟 MY ARSENAL (3D SKILL NETWORK WITH DEVSECOPS SECURITY LAYER) 🌟 */}
        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24 z-20">
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-3xl font-black text-white">My Arsenal</h3>
            <p className="text-white/80 mt-1.5 font-mono text-xs tracking-wide">Interactive DevOps & Security Network (Move Mouse)</p>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>

          {/* DESKTOP 3D INTERACTIVE VIEW */}
          <div 
             className="hidden lg:flex relative w-full max-w-[900px] h-[580px] mx-auto my-6 items-center justify-center [perspective:1500px]"
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
          >
             <motion.div 
                className="relative w-[700px] h-[700px]"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
             >
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: "translateZ(0px)" }}>
                   {networkNodes.map((node, i) => {
                      const isHovered = hoveredNode === i;
                      const isDimmed = hoveredNode !== null && !isHovered;
                      return (
                         <motion.line 
                            key={`line-${i}`}
                            x1="50%" y1="50%" x2={`${node.x}%`} y2={`${node.y}%`}
                            stroke={isHovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)"} 
                            strokeWidth={isHovered ? 3 : 1.5} 
                            strokeDasharray={isHovered ? "none" : "5,5"}
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.2, delay: i * 0.08 }}
                            style={{ opacity: isDimmed ? 0.2 : 1, transition: 'all 0.3s ease' }}
                         />
                      )
                   })}
                </svg>

                {/* 🌟 CENTRAL CORE WITH DEVSECOPS SECURITY LAYER 🌟 */}
                <div 
                   className="absolute top-1/2 left-1/2 flex flex-col items-center transition-all duration-300 pointer-events-none"
                   style={{ transform: "translate(-50%, -50%) translateZ(100px)", transformStyle: "preserve-3d" }}
                >
                   {/* Outer DevSecOps Security Ring */}
                   <div className="absolute inset-0 rounded-full border border-dashed border-white/50 animate-spin w-40 h-40 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" style={{ animationDuration: '20s' }}></div>
                   
                   <div className="absolute inset-0 bg-white/10 blur-[50px] rounded-full w-40 h-40 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                   
                   <div className={`w-28 h-28 bg-[#050505] border-[3px] rounded-full flex items-center justify-center transition-all duration-500 z-10 relative
                      ${hoveredNode !== null ? 'border-white shadow-[0_0_50px_rgba(255,255,255,0.8)] scale-105' : 'border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.3)]'}`}>
                      <Cpu size={46} className="text-white animate-pulse" />
                   </div>

                   <div className="absolute top-[122px] bg-black/90 px-4 py-1.5 border border-white/40 rounded-full z-20 shadow-xl flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-white" />
                      <span className="text-[10px] font-black text-white tracking-widest uppercase">DevSecOps Security Layer</span>
                   </div>
                </div>

                {networkNodes.map((node, i) => {
                   const isHovered = hoveredNode === i;
                   const isDimmed = hoveredNode !== null && !isHovered;

                   return (
                     <motion.div
                        key={`node-${i}`}
                        initial={{ opacity: 0, scale: 0, z: 0 }}
                        whileInView={{ opacity: 1, scale: 1, z: i % 2 === 0 ? 60 : 30 }}
                        whileHover={{ scale: 1.12, z: 140, rotateX: 8, rotateY: -8 }}
                        onHoverStart={() => setHoveredNode(i)}
                        onHoverEnd={() => setHoveredNode(null)}
                        transition={{ duration: 0.3 }}
                        style={{ 
                           left: `${node.x}%`, top: `${node.y}%`, 
                           x: "-50%", y: "-50%", transformStyle: "preserve-3d"
                        }}
                        className={`absolute z-20 w-[190px] bg-black border rounded-xl p-4 flex flex-col items-center transition-all duration-300 cursor-pointer
                           ${isHovered ? 'border-white shadow-[0_20px_40px_rgba(255,255,255,0.4)]' : 'border-white/20 shadow-md'}
                           ${isDimmed ? 'opacity-30 scale-95' : 'opacity-100'}`}
                     >
                        <div className={`mb-3 p-2.5 rounded-lg border transition-all duration-300
                           ${isHovered ? 'bg-white/20 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'bg-white/5 border-white/30'}`} 
                           style={{ transform: "translateZ(20px)" }}>
                           {getIconForCategory(node.category)}
                        </div>
                        
                        <h4 className="text-white font-extrabold text-[11px] text-center mb-2 leading-tight uppercase tracking-wider h-5 flex items-center justify-center" style={{ transform: "translateZ(30px)" }}>
                           {node.category}
                        </h4>
                        
                        <div className="flex flex-wrap justify-center gap-1 w-full" style={{ transform: "translateZ(10px)" }}>
                           {node.technologies.map((tech: string, j: number) => (
                              <span key={j} className={`text-[9px] font-bold bg-black border px-1.5 py-1 rounded transition-colors duration-300
                                 ${isHovered ? 'border-white text-white shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'border-white/30 text-white'}`}>
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </motion.div>
                   )
                })}
             </motion.div>
          </div>

          {/* MOBILE 3D ACCORDION TREE */}
          <div className="lg:hidden relative w-full px-4 mx-auto mt-6">
             <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/50 via-white/20 to-transparent z-0"></div>
             
             <div className="flex flex-col gap-4 relative z-10 w-full">
                {mySkillsData.map((node, i) => (
                   <motion.div 
                      key={`mob-node-${i}`}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="relative pl-10 w-full"
                   >
                      <div className="absolute left-3 top-6 w-3 h-3 bg-black border-2 border-white rounded-full -translate-x-1/2"></div>
                      <div className="absolute left-3 top-[1.4rem] w-6 h-[2px] bg-white/40"></div>
                      
                      <div className="bg-black border border-white/20 rounded-xl p-4 shadow-md w-full relative z-10">
                         <div className="flex items-center gap-3 mb-3">
                            <div className="bg-white/10 p-2 rounded-lg border border-white/20">
                               {getIconForCategory(node.category)}
                            </div>
                            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest leading-tight">{node.category}</h4>
                         </div>
                         <div className="flex flex-wrap gap-1.5">
                            {node.technologies.map((tech: string, j: number) => (
                               <span key={j} className="text-[10px] font-bold bg-black border border-white/30 text-white px-2 py-1 rounded">
                                  {tech}
                               </span>
                            ))}
                         </div>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-black text-white">Experience</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl mx-auto">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative bg-[#050505] border border-white/10 shadow-xl rounded-2xl p-6 hover:border-white/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center">
                  <div className="shrink-0 hidden sm:flex">
                    <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center p-2 border border-white/20">
                      {/* @ts-ignore */}
                      {exp.logo ? <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-lg" /> : <Briefcase className="text-white" size={26} />}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center w-full gap-3">
                    <div>
                      <h4 className="text-xl font-black text-white">{exp.role}</h4>
                      <p className="text-white/80 font-bold text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-white font-mono text-xs bg-white/5 px-3 py-1.5 rounded-lg border border-white/20 w-fit">
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
                    <span key={i} className="text-xs font-bold bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ENTERPRISE CI/CD ARCHITECTURE */}
        <motion.section id="workflow" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-white text-center uppercase tracking-wider">
              Enterprise CI/CD Architecture
            </h3>
            <p className="text-white/80 mt-1.5 font-mono text-xs tracking-wide">Live End-to-End Deployment Flow</p>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>

          <div className="relative w-full max-w-6xl mx-auto bg-[#030303] border border-white/10 shadow-xl rounded-2xl p-4 lg:p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
            
            <div className="absolute top-4 left-4 flex items-center gap-2.5 bg-black/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md z-20">
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

        {/* CERTIFICATIONS */}
        <motion.section id="certifications" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-black text-white">Certifications</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl mx-auto">
            {/* @ts-ignore */}
            {certificationsData.map((cert, idx) => (
              <div key={idx} className="group relative bg-[#050505] border border-white/10 shadow-xl rounded-2xl p-5 flex flex-col items-center text-center overflow-hidden hover:border-white/30 transition-all duration-300">
                <div className="absolute top-3 right-3 bg-white/5 border border-white/10 text-white text-[9px] font-mono px-2 py-0.5 rounded-full backdrop-blur-md">{cert.date}</div>
                <div className="relative w-16 h-16 mb-4 mt-2">
                  <div className="relative w-full h-full bg-white/5 border border-white/20 rounded-full flex justify-center items-center overflow-hidden shadow-inner">
                    {/* @ts-ignore */}
                    <img src={cert.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt={cert.name} className="w-full h-full object-cover rounded-full p-1.5" />
                  </div>
                </div>
                <h4 className="text-white font-bold text-sm leading-snug mb-1.5">{cert.name}</h4>
                <p className="text-white/60 text-[9px] uppercase tracking-widest font-semibold mb-4">{cert.issuer}</p>
                {/* @ts-ignore */}
                <a href={cert.link || "#"} target="_blank" rel="noreferrer" className="mt-auto w-full flex justify-center items-center gap-1.5 text-xs font-bold text-white bg-white/5 border border-white/10 hover:border-white/40 rounded-lg px-3 py-2 transition-all">
                  View Credential <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FEATURED PROJECTS */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-black text-white">Featured Projects</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
            {projectsData.map((project, idx) => (
              <div key={idx} className="group relative bg-[#050505] border border-white/10 p-6 rounded-2xl hover:border-white/30 transition-all duration-300 shadow-xl flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-black text-white">{project.title}</h4>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-[11px] font-bold bg-white/5 border border-white/20 text-white px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SELECTED REPOSITORIES */}
        <motion.section id="repositories" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-black text-white text-center">Selected Repositories</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl mx-auto">
            {repositoriesData.map((repo, idx) => (
              <div key={idx} className="group relative bg-[#050505] border-l-4 border-l-white/20 border-y border-r border-white/10 p-5 rounded-r-xl hover:border-l-white transition-all shadow-md">
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
                <div className="flex flex-wrap gap-1.5">
                  {repo.technologies.map((tech, i) => (
                    <span key={i} className="text-[9px] font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION SECTION */}
        <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24">
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-3xl font-black text-white">Education</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          
          <div className="relative border-l-2 border-white/20 ml-4 md:ml-6 space-y-8 pb-2 max-w-4xl mx-auto">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative pl-6 md:pl-10 group">
                <div className="absolute -left-[8px] top-1.5 w-3.5 h-3.5 bg-black border-2 border-white/50 rounded-full group-hover:border-white transition-all"></div>

                <div className="bg-[#050505] border border-white/10 p-5 md:p-6 rounded-xl hover:border-white/30 transition-all shadow-md">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-3">
                    <div className="flex items-center gap-3.5">
                      {/* @ts-ignore */}
                      {edu.logo && (
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-lg border border-white/20 p-1 flex items-center justify-center shrink-0">
                          {/* @ts-ignore */}
                          <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain rounded" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-lg md:text-xl font-black text-white">{edu.degree}</h4>
                        <p className="text-white/80 font-bold mt-0.5 uppercase text-[11px] md:text-xs tracking-widest">{edu.institution}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 border border-white/20 bg-white/5 text-white text-[11px] font-mono rounded-full whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>
                  {edu.details && <p className="text-white/70 text-xs md:text-sm leading-relaxed mt-3">{edu.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CURRENTLY LEARNING */}
        <motion.section id="learning" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-24">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-black text-white">Currently Learning</h3>
            <div className="w-16 h-1 bg-white/80 mt-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto">
            {learningData.map((item, idx) => (
              <div key={idx} className="group relative bg-[#0a0a0a] border border-white/10 p-4 rounded-xl overflow-hidden hover:border-white/30 transition-all">
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

      {/* Footer / Contact */}
      <footer id="contact" className="bg-black py-12 mt-8 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        <div className="w-full px-6 md:px-12 lg:px-20 text-center flex flex-col items-center">
          <h3 className="text-3xl font-black text-white mb-4">Let's Connect</h3>
          <p className="text-white/80 mb-8 text-sm md:text-base max-w-xl">
            Currently seeking entry-level DevOps & Cloud opportunities. Let's build something great together.
          </p>
          <div className="flex justify-center gap-5 mb-10">
            <a href="mailto:ganeshveeraboina.pro@gmail.com" className="bg-[#0a0a0a] border border-white/20 text-white hover:bg-white/10 hover:border-white/50 hover:scale-110 p-3 rounded-full transition-all shadow-md"><Mail size={20} /></a>
            <a href="https://github.com/GANESHVEERABOINA" className="bg-[#0a0a0a] border border-white/20 text-white hover:bg-white/10 hover:border-white/50 hover:scale-110 p-3 rounded-full transition-all shadow-md">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://linkedin.com/in/ganesh-veeraboina" className="bg-[#0a0a0a] border border-white/20 text-white hover:bg-white/10 hover:border-white/50 hover:scale-110 p-3 rounded-full transition-all shadow-md"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          </div>

          <p className="text-white font-medium font-mono text-xs opacity-50">© {new Date().getFullYear()} Ganesh Veeraboina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
