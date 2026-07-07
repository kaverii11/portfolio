"use client";

import { motion } from "framer-motion";
import { skillGroups } from "../data";
import { SectionHeading } from "./About";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 max-w-5xl mx-auto px-6 py-20">
      <SectionHeading index="05" title="Skills" />

      <div className="grid md:grid-cols-2 gap-5 mt-10">
        {skillGroups.map((group, i) => {
          const isLast = i === skillGroups.length - 1;
          return (
            <Reveal
              key={group.label}
              direction={isLast ? "up" : i % 2 === 0 ? "left" : "right"}
              className={isLast ? "md:col-span-2" : ""}
            >
              <div className="h-full p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-pink-900/60 transition-colors">
                <h3 className="font-mono-custom text-sm text-pink-400 mb-4">{`// ${group.label}`}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ y: -3, borderColor: "rgba(244,114,182,0.5)" }}
                      className="text-sm px-3.5 py-1.5 rounded-full bg-slate-950/60 border border-slate-800 text-slate-300 transition-colors"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
