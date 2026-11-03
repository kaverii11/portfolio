"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Mail, RotateCw } from "lucide-react";
import { heroFacts, personalInfo } from "../data";
import GraphArt from "./GraphArt";
import NameReveal from "./NameReveal";

const icons = [
  { href: personalInfo.github, label: "GitHub", Icon: Github },
  { href: personalInfo.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${personalInfo.email}`, label: "Email", Icon: Mail },
  { href: "/resume.pdf", label: "Resume (PDF)", Icon: FileText },
];

export default function Intro() {
  const [i, setI] = useState(0);
  const fact = heroFacts[i];

  return (
    <section id="top" className="min-h-[88vh] flex flex-col justify-center pt-24 pb-10">
      <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-neutral-900">
            Hey, I&apos;m <NameReveal>Kaveri</NameReveal>.
          </h1>

          <div className="mt-6 min-h-[4.5rem] text-xl md:text-[1.4rem] leading-snug text-neutral-500">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {fact.text}
                {fact.link && (
                  <a href={fact.link.href} target="_blank" rel="noreferrer" className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[#2563EB]">
                    {fact.link.label}
                  </a>
                )}
                {fact.link && "."}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="mt-3 text-[15px] text-neutral-500">
            Final-year CS at PES University, Bengaluru.
          </p>

          <div className="mt-7 flex items-center gap-5">
            {icons.map(({ href, label, Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined} rel="noreferrer" aria-label={label} title={label} className="text-neutral-800 hover:text-[#2563EB] transition-colors">
                <Icon size={22} strokeWidth={1.7} />
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to Jan–Jun 2027 internships
            </span>
            <button
              onClick={() => setI((i + 1) % heroFacts.length)}
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
              aria-label="Show another fact"
            >
              <RotateCw size={14} /> another fact ({i + 1}/{heroFacts.length})
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="h-[380px]">
            <GraphArt />
          </div>
          <p className="text-center text-xs text-neutral-400 -mt-2">psst, click the graph.</p>
        </div>
      </div>

      <a href="#experience" className="mt-16 md:mt-20 inline-flex items-center gap-3 text-neutral-500 hover:text-neutral-900 transition-colors w-fit">
        View my work <ArrowDown size={18} className="motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
