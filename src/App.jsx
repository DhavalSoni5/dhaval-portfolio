import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Phone,
  Database,
  ExternalLink,
  ChevronDown,
  Terminal,
  FileCode,
  Palette,
  Boxes,
  Component,
  Network,
  Webhook,
  Cloud,
  GitBranch
} from 'lucide-react';

// --- Data extracted from your CV ---
const personalInfo = {
  name: "Maicha Dhaval",
  role: "Fresher Backend Developer",
  location: "Ahmedabad, Gujarat, India",
  email: "dhavalsoni1502@gmail.com",
  phone: "+91 7567278394",
  github: "https://github.com/DhavalSoni5",
  linkedin: "https://www.linkedin.com/in/dhaval-maicha-03a188383/",
  resumeUrl: "/Dhaval.pdf", 
  summary: "Passionate Backend Developer writing clean, scalable code. Skilled in Python, Django/Flask, and REST API development with a focus on building secure, high-performance systems.",
};

const skillCategories = [
  {
    category: "Programming language",
    items: [
      { name: "Core Python", level: 90, icon: <Terminal size={20} /> },
      { name: "HTML", level: 85, icon: <FileCode size={20} /> },
      { name: "Tailwind CSS", level: 80, icon: <Palette size={20} /> },
      { name: "SQL", level: 85, icon: <Database size={20} /> },
    ]
  },
  {
    category: "Core CS",
    items: [
      { name: "DS", level: 80, icon: <Boxes size={20} /> },
      { name: "OOP", level: 85, icon: <Component size={20} /> },
      { name: "CN", level: 90, icon: <Network size={20} /> },
      { name: "DBMS", level: 85, icon: <Database size={20} /> },
    ]
  },
  {
    category: "Cloud & APIs",
    items: [
      { name: "Rest API", level: 80, icon: <Webhook size={20} /> },
      { name: "Google Cloud", level: 90, icon: <Cloud size={20} /> },
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", level: 80, icon: <GitBranch size={20} /> },
      { name: "GitHub", level: 85, icon: <Github size={20} /> },
      { name: "VS Code", level: 85, icon: <Cloud size={20} /> },
    ]
  }
];

const projects = [
  {
    title: "Universal CSV Data Analyzer",
    tech: "Python, Streamlit, Pandas",
    desc: "Interactive web app to visualize user-uploaded CSV files with dynamic filtering and statistical analysis.",
    color: "from-blue-500 to-cyan-400",
    githubLink: "https://github.com/DhavalSoni5/Universal-CSV-Data-Analyzer",
    liveLink: "https://universal-csv-data-analyzer-o4uc5wacyzbmbgcrt53vpn.streamlit.app/"
  },
  {
    title: "Real-Time Desktop Chat App",
    tech: "Python, Tkinter, Socket",
    desc: "Multi-client chat with edit/delete features, file sharing, voice messaging, and live online/offline status.",
    color: "from-purple-500 to-pink-500",
    githubLink: "https://github.com/DhavalSoni5/Real-Time-Desktop-Chat-Application",
  }
];

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    school: "Silver Oak University, Ahmedabad",
    year: "2023 - 2026",
    score: "CGPA: 8.68"
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Government Polytechnic, Bhuj",
    year: "2020 - 2023",
    score: "CGPA: 7.89"
  }
];

// --- Utility Components ---

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-blue-400 mt-2 font-medium"
    >
      {subtitle}
    </motion.p>
  </div>
);

const SocialButton = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="p-3 rounded-full bg-zinc-800 text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

const ContactCard = ({ icon, title, value, href }) => (
  <a href={href} className="flex-1 p-6 rounded-2xl bg-black border border-zinc-800 hover:border-blue-500/50 group transition-all">
    <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-colors">
      {icon}
    </div>
    <div className="text-sm text-gray-500 mb-1">{title}</div>
    <div className="font-bold text-white group-hover:text-blue-400 transition-colors">{value}</div>
  </a>
);

const Typewriter = ({ text }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === text[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1000);
      return () => clearTimeout(timeout);
    }
    
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % text.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, text]);

  return (
    <span className="font-bold text-white">
      {text[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// --- Section Components ---

const Navbar = () => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-black/30 backdrop-blur-md border-b border-white/10"
  >
    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
      MD.
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
      {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
        <Link
          key={item}
          to={item.toLowerCase()}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-white transition-colors hover:scale-105 transform"
        >
          {item}
        </Link>
      ))}
    </div>
    <a
      href={`mailto:${personalInfo.email}`}
      className="px-4 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-all"
    >
      Hire Me
    </a>
  </motion.nav>
);

const Hero = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black text-white px-4">
    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px]" />
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center z-10"
    >
      <span className="px-3 py-1 text-xs border border-white/20 rounded-full text-gray-400 uppercase tracking-widest bg-white/5 backdrop-blur-sm">
        Welcome to my portfolio
      </span>
      <h1 className="mt-6 text-6xl md:text-8xl font-extrabold tracking-tight">
        {personalInfo.name.split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{personalInfo.name.split(" ")[1]}</span>
      </h1>
      <div className="mt-4 text-xl md:text-2xl text-gray-400 font-light flex items-center justify-center gap-2">
        <span>I build</span>
        <Typewriter text={["Secure Backends.", "Scalable APIs.", "Real-time Systems."]} />
      </div>

      <p className="mt-6 max-w-xl mx-auto text-gray-500 leading-relaxed">
        {personalInfo.summary}
      </p>

      <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
        <SocialButton icon={<Github size={20} />} href={personalInfo.github} label="GitHub" />
        <SocialButton icon={<Linkedin size={20} />} href={personalInfo.linkedin} label="LinkedIn" />
        <SocialButton icon={<Mail size={20} />} href={`mailto:${personalInfo.email}`} label="Email" />
        <a
          href={personalInfo.resumeUrl}
          download
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/5"
        >
          <FileText size={18} />
          Resume
        </a>
      </div>
    </motion.div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10"
    >
      <Link to="skills" smooth={true}>
        <ChevronDown className="text-gray-500 cursor-pointer hover:text-white" size={30} />
      </Link>
    </motion.div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-zinc-950 text-white px-4 md:px-20">
    <div className="max-w-6xl mx-auto">
      <SectionTitle title="Technical Skills Overview" subtitle="Tools & Technologies I use" />
      {skillCategories.map((cat, catIndex) => (
        <div key={catIndex} className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-gray-400 border-l-4 border-blue-500 pl-4">
            {cat.category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.items.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-all">
                    {skill.icon}
                  </div>
                  <span className="text-2xl font-bold text-gray-500 group-hover:text-white">
                    {skill.level}%
                  </span>
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <div className="w-full bg-gray-700 h-1 mt-4 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-black text-white px-4 md:px-20 relative">
    <div className="max-w-6xl mx-auto">
      <SectionTitle title="Featured Projects" subtitle="What I've been working on" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col h-full"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className="p-8 flex flex-col h-full relative z-10">
              <div className="mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300">
                  {project.tech}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-all">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {project.desc}
              </p>
              <div className="flex items-center gap-6 mt-auto">
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-colors">
                  <Github size={16} /> Code
                </a>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="py-20 bg-zinc-950 text-white px-4">
    <div className="max-w-4xl mx-auto">
      <SectionTitle title="Education" subtitle="My academic background" />
      <div className="mt-12 relative border-l-2 border-zinc-800 ml-4 md:ml-0">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-12 pl-8 md:pl-12 relative"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-zinc-950" />
            <h3 className="text-xl md:text-2xl font-bold">{edu.degree}</h3>
            <p className="text-blue-400 font-medium mt-1">{edu.school}</p>
            <div className="flex gap-4 mt-2 text-sm text-gray-500">
              <span>{edu.year}</span>
              <span>•</span>
              <span>{edu.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-black text-white px-4 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px]" />
    <div className="max-w-2xl mx-auto text-center relative z-10">
      <SectionTitle title="Get In Touch" subtitle="Let's build something together" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="mt-12 p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm"
      >
        <p className="text-gray-400 mb-8">
          I am currently available for backend development roles. <br />
          Feel free to reach out for collaborations or just a hello!
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <ContactCard icon={<Mail />} title="Email Me" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
          <ContactCard icon={<Phone />} title="Call Me" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
        </div>
      </motion.div>
      <footer className="mt-20 text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="mt-2">Designed with React & Tailwind</p>
      </footer>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}