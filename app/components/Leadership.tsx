"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { leadership } from "../data";
import { SectionHeading } from "./About";
import Reveal from "./Reveal";

export default function Leadership() {
  return (
    <section id="leadership" className="relative z-10 max-w-5xl mx-auto px-6 py-20">
      <SectionHeading index="06" title="Leadership & Activities" />

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {leadership.map((l, i) => (
          <Reveal key={l.role} direction={i % 2 === 0 ? "left" : "right"}>
            <motion.div
              whileHover={{ y: -4 }}
              className="h-full p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-purple-900/60 transition-colors"
            >
              <div className="flex items-center gap-2 text-purple-300 mb-2">
                <Users size={16} />
                <span className="font-mono-custom text-xs">{l.period}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100">{l.role}</h3>
              <p className="text-slate-500 text-sm">{l.org}</p>
              <p className="text-slate-400 text-sm leading-relaxed mt-3">{l.detail}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
