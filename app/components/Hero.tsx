"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { personalInfo } from "../data";

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      const pause = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(pause);
    }
    if (deleting && subIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 0);
      return () => clearTimeout(t);
    }
    const speed = deleting ? 28 : 55;
    const t = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words]);

  return words[index].substring(0, subIndex);
}

export default function Hero() {
  const text = useTypewriter(personalInfo.taglines);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-grid"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-blob" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-[28rem] h-[28rem] bg-pink-500/20 rounded-full blur-[120px] animate-blob-slow" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <p className="font-mono-custom text-pink-400 text-sm md:text-base mb-5 tracking-wide">
          $ whoami
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-orange-300 to-purple-400 bg-clip-text text-transparent glow-text">
          {personalInfo.name}
        </h1>

        <div className="mt-6 h-9 flex items-center justify-center font-mono-custom text-lg md:text-2xl text-slate-300">
          <span>{text}</span>
          <span className="w-[2px] h-6 bg-pink-400 ml-1 animate-caret" />
        </div>

        <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          {personalInfo.about}
        </p>

        <div className="mt-9 flex items-center justify-center gap-4">
          <a
            href="#projects"
            data-hover
            className="px-6 py-3 rounded-full bg-pink-400 text-slate-950 font-semibold hover:bg-pink-300 transition-transform hover:scale-105"
          >
            See my work
          </a>
          <a
            href="#contact"
            data-hover
            className="px-6 py-3 rounded-full border border-slate-700 text-slate-200 font-medium hover:border-pink-400/60 hover:text-pink-300 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-9 flex items-center justify-center gap-3">
          <IconLink href={`mailto:${personalInfo.email}`} icon={<Mail size={18} />} />
          <IconLink href={personalInfo.github} icon={<Github size={18} />} />
          <IconLink href={personalInfo.linkedin} icon={<Linkedin size={18} />} />
        </div>
      </motion.div>

      <motion.a
        href="#about"
        data-hover
        aria-label="Scroll down"
        className="absolute bottom-9 z-10 text-slate-500 hover:text-pink-300 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}

function IconLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-hover
      className="p-3 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-pink-300 hover:border-pink-400/40 transition-colors"
    >
      {icon}
    </a>
  );
}
