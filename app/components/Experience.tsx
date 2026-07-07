"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data";
import { SectionHeading } from "./About";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 max-w-5xl mx-auto px-6 py-20">
      <SectionHeading index="02" title="Experience" />

      <div className="mt-10 relative pl-8 md:pl-10">
        <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-pink-400/60 via-slate-700 to-transparent" />

        {experience.map((job, i) => (
          <Reveal key={job.role} direction={i % 2 === 0 ? "left" : "right"} className="relative mb-10 last:mb-0">
            <span className="absolute -left-8 md:-left-10 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.6)]" />

            <motion.div
              whileHover={{ y: -3 }}
              className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-pink-900/60 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2 text-pink-300 mb-1">
                <Briefcase size={16} />
                <span className="font-mono-custom text-xs">{job.period}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
              <p className="text-slate-400 text-sm mt-1">
                {job.org} — {job.location}
              </p>
              <ul className="mt-4 space-y-2">
                {job.points.map((p) => (
                  <li key={p} className="text-slate-400 text-sm leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-pink-400/70" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-slate-950/60 border border-slate-800 text-slate-500 font-mono-custom"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
