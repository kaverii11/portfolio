"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Github, Mail, Linkedin, Terminal, Database, Shield, 
  ExternalLink, Code2, Cpu, Smartphone, Send, FileText 
} from "lucide-react";

// --- PERSONAL DATA ---
const personalInfo = {
  name: "Kaveri Sharma",
  role: "Full Stack Developer & ML/Cyber Security Enthusiast",
  location: "Bengaluru, Karnataka",
  email: "kaveri05sharma@gmail.com",
  phone: "+91 9560075023",
  github: "https://github.com/kaverii11",
  linkedin: "https://www.linkedin.com/in/kaveri-sharma-48220926a/",
  about: "I bridge the gap between secure backend architecture and responsive frontend design. Currently a B.Tech student at PES University with experience in building GDPR-compliant systems and government dashboards.",
};

const skills = [
  "Next.js", "React", "Tailwind CSS", "TypeScript", 
  "Python", "C++", "SQL", "Firebase", 
  "Network Analysis (Wireshark)", "Cryptography"
];

const projects = [
  {
    title: "Movieflix AI",
    tag: "Deep Learning & NLP",
    description: "A content-based recommendation engine using SBERT (Sentence-BERT) to understand semantic similarity in movie plots.",
    tech: ["Python", "Streamlit", "BERT", "Scikit-Learn", "TMDB API"],
    // ADDED LINK HERE
    link: "https://github.com/kaverii11/movieflix-ai",
    icon: <Cpu className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Amazon Inventory AI",
    tag: "Computer Vision & ML",
    description: "Replication of Stanford research to automate inventory counting in storage bins. Implements both SVM baselines and Deep Learning approaches.",
    tech: ["PyTorch", "ResNet18/34", "GCS", "SVM", "Python"],
    // ADDED LINK HERE
    link: "https://github.com/kaverii11/amazon_inventory",
    icon: <Code2 className="w-6 h-6 text-orange-400" />
  },
  {
    title: "Student-Alumni Portal",
    tag: "Database Systems",
    description: "A database-driven mentorship platform featuring role-based access and smart search. Uses Stored Procedures for filtering.",
    tech: ["MySQL", "Streamlit", "Stored Procedures", "Triggers", "3NF"],
    link: "https://github.com/kaverii11/Student-Alumni-Mentorship-Portal"
    icon: <Database className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Secure CRM Platform",
    tag: "Software Engineering",
    description: "Engineered a GDPR-compliant CRM using Flask & Firestore. Implemented RBAC, JWT Auth, and achieved 99.9% uptime with micro-services.",
    tech: ["Flask", "Firebase", "Bandit", "Pytest"],
    link: "https://github.com/kaverii11/CRM-APP-CLONE"
    icon: <Shield className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "PM e-Bus Sewa Dashboard",
    tag: "Internship @ NCRTC",
    description: "Designed the official public-facing dashboard for the Ministry of Housing and Urban Affairs. Visualized transport data for public stakeholders.",
    tech: ["Web Dev", "CMS Integration", "Data Visualization"],
    // No link added -> Button will disappear
    icon: <Code2 className="w-6 h-6 text-blue-400" />
  }
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring" as const, stiffness: 100 } 
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <p className="text-lg text-slate-400 mt-2 font-mono flex items-center gap-2">
              <Terminal size={16} /> {personalInfo.role}
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <ResumeBtn />
            <div className="hidden md:block w-px h-8 bg-slate-800"></div>
            <SocialBtn href={`mailto:${personalInfo.email}`} icon={<Mail />} />
            <SocialBtn href={personalInfo.github} icon={<Github />} />
            <SocialBtn href={personalInfo.linkedin} icon={<Linkedin />} />
          </div>
        </motion.header>

        {/* Main Grid Layout */}
        <motion.main 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          
          {/* About Card - Spans 8 columns */}
          <motion.div variants={itemVariants} className="md:col-span-8 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">About Me</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              {personalInfo.about}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge color="bg-cyan-950/50 text-cyan-400 border-cyan-900">PES University CSE</Badge>
              <Badge color="bg-purple-950/50 text-purple-400 border-purple-900">ML Enthusiast</Badge>
              <Badge color="bg-emerald-950/50 text-emerald-400 border-emerald-900">Web Dev Domain Head</Badge>
            </div>
          </motion.div>

          {/* Skills Card - Spans 4 columns */}
          <motion.div variants={itemVariants} className="md:col-span-4 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
            <h2 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
              <Database size={20} /> Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="text-xs font-mono font-medium px-2 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Featured Projects Title */}
          <motion.div variants={itemVariants} className="md:col-span-12 mt-8">
            <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
          </motion.div>

          {projects.map((project, index) => (
  <motion.div 
    key={index} 
    variants={itemVariants}
    whileHover={{ y: -5 }}
    className="md:col-span-6 lg:col-span-4 p-6 rounded-3xl bg-slate-900/30 border border-slate-800 hover:bg-slate-900/60 hover:border-cyan-900/50 transition-all group flex flex-col"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-cyan-900/50 transition-colors">
        {project.icon}
      </div>
      
      {/* ONLY SHOW BUTTON IF LINK EXISTS */}
      {project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-slate-800 transition-colors"
        >
          <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
        </a>
      )}
    </div>
    
    <h3 className="text-xl font-bold text-slate-200 mb-1">{project.title}</h3>
    <p className="text-xs font-mono text-cyan-500 mb-3">{project.tag}</p>
    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
      {project.description}
    </p>
    
    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
      {project.tech.map((t, i) => (
        <span key={i} className="text-[10px] text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-900">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
))}
          
          {/* CONTACT SECTION */}
          <motion.div variants={itemVariants} className="md:col-span-12 mt-12">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <h2 className="text-3xl font-bold text-white">Let's work together.</h2>
                <p className="text-slate-400">
                  I'm currently looking for new opportunities in Full Stack Development and Machine Learning. 
                  Have a project in mind or just want to say hi?
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Mail size={18} /> {personalInfo.email}
                  </a>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Smartphone size={18} /> {personalInfo.phone}
                  </div>
                </div>
              </div>
              
              <a 
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-3 px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-full hover:bg-cyan-400 hover:scale-105 transition-all shadow-lg shadow-cyan-900/20"
              >
                <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Let's Connect
              </a>
            </div>
          </motion.div>
        </motion.main>

        <footer className="py-12 text-center text-slate-600 text-sm">
          <p>© 2026 {personalInfo.name}. Built with Next.js & Framer Motion.</p>
        </footer>
      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function SocialBtn({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-900 hover:bg-slate-900/80 transition-all"
    >
      {icon}
    </a>
  );
}

function ResumeBtn() {
  return (
    <a 
      href="/resume.pdf"
      download="Kaveri_Sharma_Resume.pdf"
      className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-800 border border-slate-700 text-slate-200 font-medium hover:bg-slate-700 hover:border-slate-600 transition-all"
    >
      <FileText size={18} />
      <span>Resume</span>
    </a>
  );
}

function Badge({ children, color }: { children: React.ReactNode, color: string }) {
  return (
    <span className={`px-3 py-1 rounded-full text-sm border ${color}`}>
      {children}
    </span>
  );
}