"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock, Sparkles } from "lucide-react";
import { featuredProjects, moreProjects } from "../data";
import { SectionHeading } from "./About";
import TiltCard from "./TiltCard";
import Reveal from "./Reveal";

const colorMap: Record<string, { border: string; text: string; dot: string; chip: string; glow: string }> = {
  orange: {
    border: "border-orange-900/60 hover:border-orange-500/50",
    text: "text-orange-300",
    dot: "bg-orange-300",
    chip: "bg-orange-950/50 border-orange-900 text-orange-300",
    glow: "bg-orange-500/10",
  },
  pink: {
    border: "border-pink-900/60 hover:border-pink-500/50",
    text: "text-pink-300",
    dot: "bg-pink-300",
    chip: "bg-pink-950/50 border-pink-900 text-pink-300",
    glow: "bg-pink-500/10",
  },
  purple: {
    border: "border-purple-900/60 hover:border-purple-500/50",
    text: "text-purple-300",
    dot: "bg-purple-300",
    chip: "bg-purple-950/50 border-purple-900 text-purple-300",
    glow: "bg-purple-500/10",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 max-w-5xl mx-auto px-6 py-20">
      <SectionHeading index="04" title="Featured Projects" />

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {featuredProjects.map((p, i) => {
          const c = colorMap[p.color];
          const direction = p.title === "Digital Twin" ? "up" : i % 2 === 0 ? "left" : "right";
          return (
            <Reveal
              key={p.title}
              direction={direction}
              className={p.title === "Digital Twin" ? "md:col-span-2" : ""}
            >
              <TiltCard
                className={`h-full p-7 rounded-3xl bg-slate-900/50 border ${c.border} backdrop-blur-sm transition-colors`}
              >
                <div className={`pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl ${c.glow}`} />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className={`text-xs font-mono-custom ${c.text}`}>{p.tag}</p>
                    <h3 className="text-2xl font-bold text-slate-100 mt-1">{p.title}</h3>
                    <p className="text-slate-500 text-sm">{p.subtitle}</p>
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-hover
                      title={p.private ? "Private repo — request access" : "View on GitHub"}
                      className="flex items-center gap-1.5 p-2 rounded-full hover:bg-slate-800 transition-colors shrink-0"
                    >
                      {p.private && <Lock className="w-3.5 h-3.5 text-slate-500" />}
                      <ExternalLink className={`w-5 h-5 ${c.text}`} />
                    </a>
                  )}
                </div>

                <p className="relative text-slate-400 text-sm leading-relaxed mt-4">{p.description}</p>

                <ul className="relative mt-4 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-slate-400 text-sm leading-relaxed pl-4 relative">
                      <span className={`absolute left-0 top-2 w-1.5 h-1.5 rounded-full ${c.dot}`} />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-slate-950/60 border border-slate-800 text-slate-500 font-mono-custom">
                      {t}
                    </span>
                  ))}
                </div>

                <div className={`relative mt-5 pt-4 border-t border-slate-800/70 flex items-center justify-between gap-2 text-xs font-medium ${c.text}`}>
                  <span className="flex items-center gap-2">
                    <Sparkles size={13} />
                    {p.badge}
                  </span>
                  {p.private && (
                    <span className="flex items-center gap-1 text-slate-500 font-normal">
                      <Lock size={11} /> Private repo
                    </span>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16">
        <p className="font-mono-custom text-slate-500 text-sm mb-6">{"// more projects"}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {moreProjects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-slate-600 transition-colors flex flex-col group"
            >
              <div className="flex items-start justify-between">
                <h4 className="font-semibold text-slate-200 text-sm">{p.title}</h4>
                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-pink-400 transition-colors shrink-0" />
              </div>
              <p className="text-[11px] text-pink-500/80 font-mono-custom mt-1">{p.tag}</p>
              <p className="text-slate-500 text-xs leading-relaxed mt-2 flex-grow">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-slate-950/60 border border-slate-800 text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
