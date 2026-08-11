import { motion } from 'framer-motion';
import { profileData } from '../data/profile';

export const TerminalVisual = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-devops-darker border border-slate-800 rounded-lg shadow-2xl overflow-hidden font-mono text-sm sm:text-base w-full max-w-lg mx-auto"
    >
      <div className="flex items-center px-4 py-2 bg-slate-900 border-b border-slate-800 space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-slate-500 text-xs">bash - ganesh@devops-env</span>
      </div>
      <div className="p-5 space-y-4 text-slate-300">
        <div>
          <span className="text-devops-accent">$</span> <span className="text-blue-400">whoami</span>
          <p className="mt-1">{profileData.name.toLowerCase()}</p>
        </div>
        <div>
          <span className="text-devops-accent">$</span> <span className="text-blue-400">role</span>
          <p className="mt-1">{profileData.role}</p>
        </div>
        <div>
          <span className="text-devops-accent">$</span> <span className="text-blue-400">skills</span>
          <p className="mt-1">Linux | Docker | Kubernetes | AWS | Terraform | Jenkins</p>
        </div>
        <div>
          <span className="text-devops-accent">$</span> <span className="text-blue-400">status</span>
          <p className="mt-1 animate-pulse">Building • Automating • Learning_</p>
        </div>
      </div>
    </motion.div>
  );
};