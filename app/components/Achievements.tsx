"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "../data";
import { SectionHeading } from "./About";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-10 max-w-5xl mx-auto px-6 py-20">
      <SectionHeading index="03" title="Achievements" />

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {achievements.map((a, i) => (
          <Reveal key={a.title} direction={i % 2 === 0 ? "left" : "right"}>
            <motion.div
              whileHover={{ y: -6 }}
              className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-slate-900/60 to-slate-900/60 border border-amber-500/20 overflow-hidden group"
            >
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-colors" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 text-amber-400">
                  <Trophy size={20} />
                  <span className="font-mono-custom text-xs">{a.period}</span>
                </div>
              </div>

              <h3 className="relative text-2xl font-bold text-slate-100 mt-3">{a.title}</h3>
              <p className="relative text-amber-300/80 text-sm font-medium mt-1">{a.org}</p>
              <p className="relative text-slate-400 text-sm leading-relaxed mt-4">{a.detail}</p>

              <div className="relative mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-slate-800/70">
                {a.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-lg md:text-xl font-extrabold text-slate-100">{m.value}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
