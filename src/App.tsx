import {
  Mail,
  Award,
  BookOpen,
  Workflow,
  FileText,
  Activity,
  ArrowRight,
  ArrowDown,
  ExternalLink,
  Download,
  Code2,
  Box,
  Cloud,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

// Data Imports
import { profileData } from "./data/profile";
import { skillsData } from "./data/skills";
import { projectsData } from "./data/projects";
import { experienceData } from "./data/experience";
import { educationData, certificationsData } from "./data/education";
import { repositoriesData } from "./data/repositories";
import { learningData } from "./data/learning";

// Images
import profileImg from "./assets/profile.png";
import logoImg from "./assets/logo.png";

function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-white/30 selection:text-white">
      {/* Navbar (Glassmorphism) */}
      <nav className="absolute top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3 font-extrabold text-2xl tracking-tight text-white cursor-pointer">
            <img
              src={logoImg}
              alt="Terminal Logo"
              className="w-10 h-10 invert opacity-90"
            />
            <span>
              Portfolio<span className="text-white/50">.</span>
            </span>
          </div>

          <div className="hidden lg:flex gap-4 text-sm font-bold text-white items-center">
            <a
              href="#home"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full shadow-lg hover:bg-white/20 transition-all"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-5 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md transition-all"
            >
              About
            </a>
            <a
              href="#experience"
              className="px-5 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md transition-all"
            >
              Experience
            </a>
            <a
              href="#certifications"
              className="px-5 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md transition-all"
            >
              Certifications
            </a>
            <a
              href="#projects"
              className="px-5 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md transition-all"
            >
              Projects
            </a>
            <a
              href="#education"
              className="px-5 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md transition-all"
            >
              Education
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 hover:backdrop-blur-md transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Home) */}
      <section
        id="home"
        className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-10 md:mt-0">
          <div className="w-full md:w-1/2 space-y-6 z-10 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 font-bold text-2xl md:text-3xl"
            >
              Hi There, I'm
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]"
            >
              Ganesh <br className="hidden md:block" />
              Veeraboina
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl text-white font-semibold flex items-center justify-center md:justify-start gap-2"
            >
              DevOps & Cloud Engineer{" "}
              <span className="text-white/30 font-black">|</span>
            </motion.div>

            {/* Social Icons - Glassmorphism (Real Icons) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 justify-center md:justify-start pt-2"
            >
              {/* === ఇక్కడ మీ LINKEDIN లింక్ పేస్ట్ చేయండి === */}
              <a
                href="https://linkedin.com/in/ganesh-veeraboina"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:scale-110 hover:bg-white/20 transition-all shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* === ఇక్కడ మీ GITHUB లింక్ పేస్ట్ చేయండి === */}
              <a
                href="https://github.com/GANESHVEERABOINA/"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:scale-110 hover:bg-white/20 transition-all shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>

              {/* === ఇక్కడ మీ EMAIL ID పేస్ట్ చేయండి === */}
              <a
                href="mailto:ganeshveeraboina.pro@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:scale-110 hover:bg-white/20 transition-all shadow-lg"
              >
                <Mail size={20} strokeWidth={2.5} />
              </a>
            </motion.div>

            {/* CTA Buttons - Reduced Size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 hover:bg-white/20 transition-all shadow-[0_4px_30px_rgba(255,255,255,0.1)]"
              >
                View My Projects
              </a>

              {/* === ఇక్కడ మీ RESUME PDF పాత్ లేదా లింక్ పేస్ట్ చేయండి === */}
              <a
                href={`${import.meta.env.BASE_URL}GANESH-RESUME-V3.pdf`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 text-white font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 hover:bg-white/20 transition-all shadow-[0_4px_30px_rgba(255,255,255,0.1)]"
              >
                <FileText size={18} />
                View My Resume
              </a>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-end relative h-[400px] md:h-[650px] z-10">
            {/* Subtle glass glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full -z-10"></div>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              src={profileImg}
              alt={profileData.name}
              className="object-contain h-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-20 space-y-32">
        {/* 1. About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="scroll-mt-28"
        >
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white">About Me</h3>
            <div className="w-20 h-1.5 bg-white/20 mt-4 rounded-full"></div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl rounded-3xl p-8 md:p-12 leading-relaxed text-gray-300 text-lg text-center max-w-4xl mx-auto hover:bg-white/10 transition-all duration-500">
            <p>{profileData.about}</p>
          </div>
        </motion.section>

        {/* 2. Skills Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="scroll-mt-28"
        >
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white">My Arsenal</h3>
            <div className="w-20 h-1.5 bg-white/20 mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-8 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h4 className="text-white font-black mb-6 text-xl">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 font-semibold px-4 py-2 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 3. Experience Section */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="scroll-mt-28"
        >
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white">Experience</h3>
            <div className="w-20 h-1.5 bg-white/20 mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md border-l-4 border-l-white/30 border-y border-r border-white/10 shadow-xl rounded-r-2xl p-8 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-black text-white">
                      {exp.role}
                    </h4>
                    <p className="text-white/70 font-bold text-lg mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-gray-400 font-mono text-sm mt-2 md:mt-0 text-left md:text-right">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-3 text-gray-300 mb-6 text-lg">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm font-bold bg-white/10 border border-white/10 text-white px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 4. Certifications Section */}
        <motion.section
          id="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="scroll-mt-28"
        >
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white">Certifications</h3>
            <div className="w-20 h-1.5 bg-white/20 mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="text-white/70 shrink-0 mt-1" size={24} />
                    <h4 className="text-white font-bold text-lg leading-tight">
                      {cert.name}
                    </h4>
                  </div>
                  <p className="text-gray-400 ml-9 mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 font-mono text-sm ml-9 mb-4">
                    {cert.date}
                  </p>
                </div>
                <div className="ml-9">
                  <button className="text-sm font-bold text-white/70 hover:text-white flex items-center gap-1 transition-colors">
                    View Credential <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. Featured Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="scroll-mt-28"
        >
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white">
              Featured Projects
            </h3>
            <div className="w-20 h-1.5 bg-white/20 mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-8 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-black text-white">
                    {project.title}
                  </h4>
                  <a
                    href={project.githubUrl}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 mb-6 text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm font-bold bg-white/10 border border-white/10 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 6. DevOps Workflow Section */}
        <motion.section
          id="workflow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="scroll-mt-28"
        >
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white text-center">
              How I Build & Deploy
            </h3>
            <div className="w-20 h-1.5 bg-white/20 mt-4 rounded-full"></div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto overflow-x-auto">
            <div className="flex flex-col md:flex-row items-center justify-between min-w-[700px] md:min-w-0 gap-4 md:gap-2">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-full text-white">
                  <Code2 size={28} />
                </div>
                <span className="font-bold text-gray-300 font-mono text-sm">
                  Code
                </span>
              </div>

              <ArrowRight className="hidden md:block text-white/30" />
              <ArrowDown className="block md:hidden text-white/30" />

              <div className="flex flex-col items-center gap-3">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-full text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
                <span className="font-bold text-gray-300 font-mono text-sm">
                  Git/GitHub
                </span>
              </div>

              <ArrowRight className="hidden md:block text-white/30" />
              <ArrowDown className="block md:hidden text-white/30" />

              <div className="flex flex-col items-center gap-3">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-full text-white">
                  <Workflow size={28} />
                </div>
                <span className="font-bold text-gray-300 font-mono text-sm">
                  Jenkins CI
                </span>
              </div>

              <ArrowRight className="hidden md:block text-white/30" />
              <ArrowDown className="block md:hidden text-white/30" />

              <div className="flex flex-col items-center gap-3">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-full text-white">
                  <Box size={28} />
                </div>
                <span className="font-bold text-gray-300 font-mono text-sm">
                  Docker
                </span>
              </div>

              <ArrowRight className="hidden md:block text-white/30" />
              <ArrowDown className="block md:hidden text-white/30" />

              <div className="flex flex-col items-center gap-3">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-full text-white">
                  <Cloud size={28} />
                </div>
                <span className="font-bold text-gray-300 font-mono text-sm">
                  AWS EC2
                </span>
              </div>

              <ArrowRight className="hidden md:block text-white/30" />
              <ArrowDown className="block md:hidden text-white/30" />

              <div className="flex flex-col items-center gap-3">
                <div className="bg-white/10 backdrop-blur-md border border-white/30 p-4 rounded-full text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <Server size={28} />
                </div>
                <span className="font-bold text-white font-mono text-sm">
                  Production
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 7. Selected Repositories */}
        <motion.section
          id="repositories"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="scroll-mt-28"
        >
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white text-center">
              Selected Repositories
            </h3>
            <div className="w-20 h-1.5 bg-white/20 mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {repositoriesData.map((repo, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl p-6 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2 text-white font-bold text-lg">
                    <BookOpen size={20} className="text-white/70" />
                    {repo.title}
                  </div>
                  <a
                    href={repo.githubUrl}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-gray-400 mb-5 text-sm">{repo.description}</p>
                <div className="flex flex-wrap gap-2">
                  {repo.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-gray-300 bg-white/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 8. Education Section */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="scroll-mt-28"
        >
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-4xl font-black text-white">Education</h3>
            <div className="w-20 h-1.5 bg-white/20 mt-4 rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <div>
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-white/70 font-medium mt-1">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="text-gray-400 mt-2 text-sm">{edu.details}</p>
                  )}
                </div>
                <div className="mt-4 md:mt-0 text-gray-400 font-mono text-sm bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  {edu.duration}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 9. Currently Learning Section */}
        <motion.section
          id="learning"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="scroll-mt-28"
        >
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-black text-white">
              Currently Learning
            </h3>
            <div className="w-16 h-1 bg-white/20 mt-4 rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {learningData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 px-5 py-3 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <Activity size={16} className="text-white/70" />
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* 10. Footer / Contact */}
      <footer id="contact" className="bg-black py-16 mt-20 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-black text-white mb-6">Let's Connect</h3>
          <p className="text-gray-400 mb-10 text-lg">
            Currently seeking entry-level DevOps opportunities. Let's build
            something great together.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            {/* === ఇక్కడ మీ EMAIL ID పేస్ట్ చేయండి === */}
            <a
              href="mailto:ganeshveeraboina.pro@gmail.com"
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 p-4 rounded-full shadow-lg transition-all"
            >
              <Mail size={24} />
            </a>

            {/* === ఇక్కడ మీ GITHUB లింక్ పేస్ట్ చేయండి === */}
            <a
              href="https://github.com/GANESHVEERABOINA/"
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 p-4 rounded-full shadow-lg transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>

            {/* === ఇక్కడ మీ LINKEDIN లింక్ పేస్ట్ చేయండి === */}
            <a
              href="https://linkedin.com/in/ganesh-veeraboina"
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 p-4 rounded-full shadow-lg transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          <p className="text-white/50 font-medium font-mono text-sm">
            © {new Date().getFullYear()} {profileData.name}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
