import React, { useState, useEffect } from 'react';
import { 
  Mail, BookOpen, FileText, Activity, 
  ExternalLink, Code2, Box, Cloud, Server, Briefcase,
  Cpu, Settings, Terminal, GitBranch, 
  Hexagon, ShieldAlert, Layers,
  SearchCheck, Package, Blocks, Rocket, 
  TrendingUp, Flame, PieChart, Database, FileSearch,
  User, PlayCircle, GitPullRequest, Globe, ArrowRight, ShieldCheck
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
    <div className={`relative flex flex-col items-center justify-center p-2 md:p-2.5 rounded-xl border min-w-[75px] md:min-w-[90px] transition-all duration-300 z-10 bg-[#0a0a0a]
      ${isActive ? 'border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] scale-110 z-20' : isPast ? 'border-white/40 opacity-100' : 'border-white/10 opacity-40'}`}>
       
       <div className={`mb-1.5 p-1.5 rounded-lg transition-colors duration-300 ${isActive ? 'bg-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'bg-white/5 text-white'}`}>
          <step.icon size={18} strokeWidth={1.5} />
       </div>
       
       <h4 className="text-[9px] md:text-[10px] font-bold text-center leading-tight whitespace-nowrap transition-colors duration-300 text-white">
         {step.name}
       </h4>
       
       <p className="text-[7px] md:text-[8px] font-mono text-center mt-0.5 leading-tight transition-colors duration-300 text-white/80">
         {step.title}
       </p>
    </div>
  );
};

const ArchArrow = ({ active }: { active: boolean }) => (
  <div className={`flex items-center justify-center px-0.5 md:px-1 transition-all duration-300 ${active ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-110' : 'text-white/20'}`}>
     <ArrowRight size={14} strokeWidth={2.5} />
  </div>
);

export default function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const getIconForCategory = (category: string) => {
    const lowerCat = category.toLowerCase();
    if (lowerCat.includes('cloud')) return <Cloud className="text-white" size={26} />;
    if (lowerCat.includes('container') || lowerCat.includes('orchestration')) return <Box className="text-white" size={26} />;
    if (lowerCat.includes('ci/cd') || lowerCat.includes('git')) return <GitBranch className="text-white" size={26} />;
    if (lowerCat.includes('iac') || lowerCat.includes('code')) return <Code2 className="text-white" size={26} />;
    if (lowerCat.includes('config')) return <Settings className="text-white" size={26} />;
    if (lowerCat.includes('os') || lowerCat.includes('script')) return <Terminal className="text-white" size={26} />;
    if (lowerCat.includes('artifacts') || lowerCat.includes('registry')) return <Package className="text-white" size={26} />;
    if (lowerCat.includes('quality') || lowerCat.includes('sec')) return <ShieldCheck className="text-white" size={26} />;
    if (lowerCat.includes('build') || lowerCat.includes('server')) return <Server className="text-white" size={26} />;
    return <Cpu className="text-white" size={26} />;
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
      <div className={`relative border-2 border-dashed rounded-xl p-4 md:p-5 w-full transition-colors duration-500
         ${isZoneActive ? 'border-white/40 bg-white/[0.03]' : 'border-white/10 bg-white/[0.01]'}`}>
         <span className={`absolute -top-2.5 left-4 px-2.5 py-0.5 text-[8px] md:text-[9px] font-black uppercase tracking-widest rounded-full border transition-all duration-500 text-white
            ${isZoneActive ? 'bg-black border-white shadow-[0_0_10px_rgba(255,255,255,0.5)] scale-105' : 'bg-black border-white/20'}`}>
            {title}
         </span>
         <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-3 pt-1">
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
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);

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
    <div className="min-h-screen bg-black font-sans text-white selection:bg-white/30 selection:text-white overflow-x-hidden">
      
      {/* Navbar (Full Width) */}
      <nav className="absolute top-0 w-full z-50">
        <div className="w-full px-6 md:px-12 lg:px-20 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3 font-extrabold text-2xl tracking-tight text-white cursor-pointer">
            <img src={logoImg} alt="Terminal Logo" className="w-10 h-10 invert opacity-90" />
            <span>Portfolio<span className="text-white">.</span></span>
          </div>
          <div className="hidden lg:flex gap-4 text-sm font-bold text-white items-center">
            <a href="#home" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full shadow-lg hover:bg-white/20 transition-all">Home</a>
            <a href="#about" className="px-5 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md transition-all text-white">About</a>
            <a href="#experience" className="px-5 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md transition-all text-white">Experience</a>
            <a href="#certifications" className="px-5 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md transition-all text-white">Certifications</a>
            <a href="#projects" className="px-5 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md transition-all text-white">Projects</a>
            <a href="#education" className="px-5 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md transition-all text-white">Education</a>
            <a href="#contact" className="px-5 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md transition-all text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Full Width) */}
      <section id="home" className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-black">
        <div className="w-full px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-10 md:mt-0">
          <div className="w-full md:w-1/2 space-y-6 z-10 text-center md:text-left">
            <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-white font-bold text-2xl md:text-3xl">
              Hi There, I'm
            </motion.h2>
            <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]">
              Ganesh <br className="hidden md:block" /> Veeraboina
            </motion.h1>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-2xl text-white font-semibold flex items-center justify-center md:justify-start gap-2">
              AWS DevOps Engineer <span className="text-white font-black">|</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex gap-4 justify-center md:justify-start pt-2">
              <a href="https://linkedin.com/in/ganesh-veeraboina" target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:scale-110 hover:bg-white/20 transition-all shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              <a href="https://github.com/GANESHVEERABOINA" target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:scale-110 hover:bg-white/20 transition-all shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
              <a href="mailto:ganeshveeraboina.pro@gmail.com" target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:scale-110 hover:bg-white/20 transition-all shadow-lg"><Mail size={20} strokeWidth={2.5} /></a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 hover:bg-white/20 transition-all shadow-[0_4px_30px_rgba(255,255,255,0.1)]">View My Projects</a>
              <a href="/resume/Ganesh-Veeraboina-Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 text-white font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 hover:bg-white/20 transition-all shadow-[0_4px_30px_rgba(255,255,255,0.1)]"><FileText size={18} />View My Resume</a>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-end relative h-[400px] md:h-[650px] z-10">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full -z-10"></div>
            <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} src={profileImg} alt={profileData.name} className="object-contain h-full drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Main Content (Full Width) */}
      <main className="w-full px-6 md:px-12 lg:px-20 py-20 space-y-32">
        
        {/* 🌟 REDESIGNED ABOUT ME (Terminal & Highlights) 🌟 */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-28">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white">About Me</h3>
            <div className="w-20 h-1.5 bg-white/80 mt-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>

          <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
            
            {/* Terminal Window (Left) */}
            <div className="flex-1 bg-[#050505] border border-white/20 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-white/40 transition-all duration-500 group">
              <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors"></div>
                </div>
                <p className="text-white/60 font-mono text-[10px] uppercase tracking-widest ml-4">guest@ganesh:~</p>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-white font-black">❯</span>
                  <span className="text-white font-mono text-sm border-b border-white/30">cat about_me.txt</span>
                </div>
                <p className="text-white leading-relaxed text-base md:text-lg text-justify opacity-90">
                  {profileData.about}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-white font-black">❯</span>
                  <span className="w-2 h-5 bg-white animate-pulse"></span>
                </div>
              </div>
            </div>

            {/* Quick Highlights (Right) */}
            <div className="lg:w-[40%] flex flex-col gap-4">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <div className="bg-black p-3 rounded-xl border border-white/20 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all">
                  <Cloud className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-wider mb-1">Cloud Native</h4>
                  <p className="text-white text-xs opacity-70 leading-relaxed">Designing scalable and highly available AWS infrastructures.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <div className="bg-black p-3 rounded-xl border border-white/20 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all">
                  <GitBranch className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-wider mb-1">CI/CD Pipelines</h4>
                  <p className="text-white text-xs opacity-70 leading-relaxed">Automating software delivery with seamless integration & deployment.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <div className="bg-black p-3 rounded-xl border border-white/20 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-wider mb-1">DevSecOps</h4>
                  <p className="text-white text-xs opacity-70 leading-relaxed">Embedding security practices within automated workflows.</p>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 🌟 FULLY INTERACTIVE 3D SKILL NETWORK MAP 🌟 */}
        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-28 z-20">
          <div className="flex flex-col items-center mb-16">
            <h3 className="text-4xl font-black text-white">My Arsenal</h3>
            <p className="text-white mt-2 font-mono text-sm tracking-wide">Interactive DevOps Network (Move Mouse)</p>
            <div className="w-20 h-1.5 bg-white/80 mt-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>

          {/* DESKTOP 3D INTERACTIVE VIEW */}
          <div 
             className="hidden lg:flex relative w-full max-w-[1000px] h-[700px] mx-auto my-10 items-center justify-center [perspective:1500px]"
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
          >
             <motion.div 
                className="relative w-[800px] h-[800px]"
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
                            strokeWidth={isHovered ? 4 : 2} 
                            strokeDasharray={isHovered ? "none" : "6,6"}
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: i * 0.1 }}
                            style={{ opacity: isDimmed ? 0.2 : 1, transition: 'all 0.3s ease' }}
                         />
                      )
                   })}
                </svg>

                <div 
                   className="absolute top-1/2 left-1/2 flex flex-col items-center transition-all duration-300 pointer-events-none"
                   style={{ transform: "translate(-50%, -50%) translateZ(120px)", transformStyle: "preserve-3d" }}
                >
                   <div className="absolute inset-0 bg-white/10 blur-[60px] rounded-full w-48 h-48 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                   <div className={`w-32 h-32 bg-[#050505] border-[3px] rounded-full flex items-center justify-center transition-all duration-500 z-10 relative
                      ${hoveredNode !== null ? 'border-white shadow-[0_0_60px_rgba(255,255,255,0.8)] scale-110' : 'border-white/50 shadow-[0_0_40px_rgba(255,255,255,0.3)]'}`}>
                      <Cpu size={56} className="text-white animate-pulse" />
                   </div>
                   <div className="absolute top-[140px] bg-black/90 px-6 py-2 border border-white/50 rounded-full z-10 shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                      <span className="text-sm font-black text-white tracking-widest uppercase">DevOps Core</span>
                   </div>
                </div>

                {networkNodes.map((node, i) => {
                   const isHovered = hoveredNode === i;
                   const isDimmed = hoveredNode !== null && !isHovered;

                   return (
                     <motion.div
                        key={`node-${i}`}
                        initial={{ opacity: 0, scale: 0, z: 0 }}
                        whileInView={{ opacity: 1, scale: 1, z: i % 2 === 0 ? 80 : 40 }}
                        whileHover={{ scale: 1.15, z: 180, rotateX: 10, rotateY: -10 }}
                        onHoverStart={() => setHoveredNode(i)}
                        onHoverEnd={() => setHoveredNode(null)}
                        transition={{ duration: 0.3 }}
                        style={{ 
                           left: `${node.x}%`, top: `${node.y}%`, 
                           x: "-50%", y: "-50%", transformStyle: "preserve-3d"
                        }}
                        className={`absolute z-20 w-[220px] bg-black border rounded-2xl p-5 flex flex-col items-center transition-all duration-300 cursor-pointer
                           ${isHovered ? 'border-white shadow-[0_30px_60px_rgba(255,255,255,0.5),inset_0_2px_20px_rgba(255,255,255,0.2)]' : 'border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)]'}
                           ${isDimmed ? 'opacity-30 scale-95' : 'opacity-100'}`}
                     >
                        <div className={`mb-4 p-3.5 rounded-xl border transition-all duration-300
                           ${isHovered ? 'text-white bg-white/20 border-white shadow-[0_0_20px_rgba(255,255,255,0.8)]' : 'text-white bg-white/10 border-white/30'}`} 
                           style={{ transform: "translateZ(30px)" }}>
                           {getIconForCategory(node.category)}
                        </div>
                        
                        <h4 className="text-white font-extrabold text-[12px] text-center mb-3 leading-tight uppercase tracking-wider h-6 flex items-center justify-center drop-shadow-xl" style={{ transform: "translateZ(40px)" }}>
                           {node.category}
                        </h4>
                        
                        <div className="flex flex-wrap justify-center gap-1.5 w-full" style={{ transform: "translateZ(20px)" }}>
                           {node.technologies.map((tech: string, j: number) => (
                              <span key={j} className={`text-[10px] font-bold bg-black border px-2 py-1.5 rounded-md transition-colors duration-300
                                 ${isHovered ? 'border-white text-white shadow-[0_0_10px_rgba(255,255,255,0.4)]' : 'border-white/30 text-white shadow-[0_4px_8px_rgba(0,0,0,0.6)]'}`}>
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
          <div className="lg:hidden relative w-full px-4 mx-auto mt-8">
             <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-white/50 via-white/20 to-transparent z-0"></div>
             
             <div className="flex flex-col gap-6 relative z-10 w-full">
                {mySkillsData.map((node, i) => (
                   <motion.div 
                      key={`mob-node-${i}`}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                      className="relative pl-12 w-full cursor-pointer"
                   >
                      <div className="absolute left-4 top-7 w-3.5 h-3.5 bg-black border-[3px] border-white rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.9)]"></div>
                      <div className="absolute left-4 top-[1.85rem] w-8 h-[2px] bg-white/40"></div>
                      
                      <div className="bg-black border border-white/20 rounded-2xl p-5 shadow-lg w-full relative z-10 active:border-white transition-colors">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="text-white bg-white/10 p-2.5 rounded-xl border border-white/20">
                               {getIconForCategory(node.category)}
                            </div>
                            <h4 className="text-white font-extrabold text-[13px] uppercase tracking-widest leading-tight">{node.category}</h4>
                         </div>
                         <div className="flex flex-wrap gap-2">
                            {node.technologies.map((tech: string, j: number) => (
                               <span key={j} className="text-[11px] font-bold bg-black border border-white/30 text-white px-2.5 py-1.5 rounded-lg shadow-inner">
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

        {/* Experience Section */}
        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-28">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white">Experience</h3>
            <div className="w-20 h-1.5 bg-white/80 mt-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 w-full">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center">
                  <div className="shrink-0 hidden sm:flex">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center p-2 border border-white/10 shadow-inner">
                      {/* @ts-ignore */}
                      {exp.logo ? <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-xl" /> : <Briefcase className="text-white" size={32} />}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center w-full gap-4">
                    <div>
                      <h4 className="text-2xl font-black text-white">{exp.role}</h4>
                      <p className="text-white font-bold text-lg mt-1">{exp.company}</p>
                    </div>
                    <div className="text-white font-mono text-sm bg-white/5 px-4 py-2 rounded-xl border border-white/10 w-fit">
                      <p>{exp.duration}</p>
                      <p className="text-white/80 mt-0.5">{exp.location}</p>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-3 text-white mb-8 text-lg">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="pl-2 leading-relaxed">{resp}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="text-sm font-bold bg-white/10 border border-white/10 text-white px-4 py-1.5 rounded-full shadow-sm">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 🌟 ENTERPRISE ARCHITECTURE PIPELINE 🌟 */}
        <motion.section id="workflow" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-28">
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-3xl md:text-4xl font-black text-white text-center uppercase tracking-wider">
              Enterprise CI/CD Architecture
            </h3>
            <p className="text-white mt-2 font-mono text-sm tracking-wide">Live End-to-End Deployment Flow</p>
            <div className="w-20 h-1.5 bg-white/80 mt-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>

          <div className="relative w-full bg-[#030303] border border-white/10 shadow-2xl rounded-[2rem] p-5 lg:p-8 overflow-hidden">
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            
            <div className="absolute top-5 left-5 md:top-6 md:left-6 flex items-center gap-3 bg-black/80 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md z-20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
               <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_12px_rgba(255,255,255,1)]"></div>
               <span className="text-[10px] md:text-xs font-mono text-white">SYSTEM STATUS: <span className="text-white font-bold ml-1">{allSteps[activeStep].name.toUpperCase()} ACTIVE</span></span>
            </div>

            <div className="mt-14 flex flex-col gap-6 relative z-10">
               <ArchZone title="Continuous Integration Pipeline" steps={allSteps.slice(0, 9)} startIndex={0} endIndex={8} />

               <div className="flex flex-col xl:flex-row gap-6 w-full">
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

        {/* Certifications Section */}
        <motion.section id="certifications" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-28">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white">Certifications</h3>
            <div className="w-20 h-1.5 bg-white/80 mt-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* @ts-ignore */}
            {certificationsData.map((cert, idx) => (
              <div key={idx} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-6 flex flex-col items-center text-center overflow-hidden hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-4 right-4 bg-white/5 border border-white/10 text-white text-[10px] font-mono px-2 py-1 rounded-full backdrop-blur-md">{cert.date}</div>
                <div className="relative w-20 h-20 mb-5 mt-3 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-white/10 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-full h-full bg-white/5 border border-white/20 rounded-full flex justify-center items-center shadow-inner overflow-hidden">
                    {/* @ts-ignore */}
                    <img src={cert.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt={cert.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <h4 className="text-white font-bold text-base leading-snug mb-2">{cert.name}</h4>
                <p className="text-white text-[10px] uppercase tracking-widest font-semibold mb-6">{cert.issuer}</p>
                {/* @ts-ignore */}
                <a href={cert.link || "#"} target="_blank" rel="noreferrer" className="mt-auto w-full flex justify-center items-center gap-2 text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl px-4 py-2.5 transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  View Credential <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-28">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white">Featured Projects</h3>
            <div className="w-20 h-1.5 bg-white/80 mt-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 w-full">
            {projectsData.map((project, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-8 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-black text-white">{project.title}</h4>
                  <a href={project.githubUrl} className="text-white hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                </div>
                <p className="text-white mb-6 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-sm font-bold bg-white/10 border border-white/10 text-white px-3 py-1 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.1)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Selected Repositories */}
        <motion.section id="repositories" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-28">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white text-center">Selected Repositories</h3>
            <div className="w-20 h-1.5 bg-white/80 mt-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {repositoriesData.map((repo, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl p-6 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2 text-white font-bold text-lg">
                    <BookOpen size={20} className="text-white" />
                    {repo.title}
                  </div>
                  <a href={repo.githubUrl} className="text-white hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-white mb-5 text-sm">{repo.description}</p>
                <div className="flex flex-wrap gap-2">
                  {repo.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-white bg-white/10 px-2 py-1 rounded border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-28">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white">Education</h3>
            <div className="w-20 h-1.5 bg-white/80 mt-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="w-full space-y-6">
            {educationData.map((edu, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/10 hover:border-white/20 transition-colors">
                <div>
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-white font-medium mt-1">{edu.institution}</p>
                  {edu.details && <p className="text-white mt-2 text-sm">{edu.details}</p>}
                </div>
                <div className="mt-4 md:mt-0 text-white font-mono text-sm bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  {edu.duration}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Currently Learning Section */}
        <motion.section id="learning" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="scroll-mt-28">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-black text-white">Currently Learning</h3>
            <div className="w-16 h-1 bg-white/80 mt-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {learningData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-5 py-3 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors">
                <Activity size={16} className="text-white" />
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-black py-16 mt-20 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        <div className="w-full px-6 md:px-12 lg:px-20 text-center">
          <h3 className="text-4xl font-black text-white mb-6">Let's Connect</h3>
          <p className="text-white mb-10 text-lg">
            Currently seeking entry-level DevOps opportunities. Let's build something great together.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:ganeshveeraboina.pro@gmail.com" className="bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/40 hover:scale-110 p-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all"><Mail size={24} /></a>
            <a href="https://github.com/GANESHVEERABOINA" className="bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/40 hover:scale-110 p-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
            <a href="https://linkedin.com/in/ganesh-veeraboina" className="bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/40 hover:scale-110 p-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          </div>
          <p className="text-white font-medium font-mono text-sm">© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
