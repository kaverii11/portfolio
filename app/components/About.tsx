"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, personalInfo } from "../data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative z-10 max-w-5xl mx-auto px-6 py-28">
      <SectionHeading index="01" title="About" />

      <div className="grid md:grid-cols-12 gap-6 mt-10">
        <Reveal direction="left" className="md:col-span-7">
          <div className="h-full p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
            <p className="text-slate-300 leading-relaxed text-lg">{personalInfo.about}</p>
            <p className="mt-4 text-slate-500 text-sm font-mono-custom">{personalInfo.location}</p>
          </div>
        </Reveal>

        <Reveal direction="right" className="md:col-span-5">
          <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800/60 border border-slate-700">
            <div className="flex items-center gap-2 text-pink-300 mb-3">
              <GraduationCap size={20} />
              <h3 className="font-semibold">Education</h3>
            </div>
            <p className="text-slate-100 font-medium">{education.school}</p>
            <p className="text-slate-400 text-sm mt-1">{education.degree}</p>
            <p className="text-pink-400/80 text-xs font-mono-custom mt-1">{education.period}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span
                  key={c}
                  className="text-xs px-3 py-1 rounded-full bg-slate-950/60 border border-slate-800 text-slate-400"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className="flex items-baseline gap-4"
    >
      <span className="font-mono-custom text-pink-400/70 text-sm">{index}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{title}</h2>
      <span className="h-px flex-grow bg-gradient-to-r from-slate-700 to-transparent ml-2" />
    </motion.div>
  );
}
