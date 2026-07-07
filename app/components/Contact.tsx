"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";
import { personalInfo } from "../data";
import { SectionHeading } from "./About";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 max-w-5xl mx-auto px-6 py-20 pb-28">
      <SectionHeading index="07" title="Contact" />

      <Reveal
        direction="scale"
        className="mt-10 p-10 md:p-14 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800/60 border border-slate-800 text-center relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />

        <p className="font-mono-custom text-pink-400 text-sm mb-3">$ echo &quot;let&apos;s build something&quot;</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
          Open to new opportunities in <span className="text-pink-300">ML</span> &amp;{" "}
          <span className="text-purple-300">Full-Stack</span>.
        </h2>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
          Have a project in mind, a role to discuss, or just want to talk about GPUs and RAG pipelines? My inbox is open.
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          data-hover
          className="group mt-8 inline-flex items-center gap-3 px-8 py-4 bg-pink-400 text-slate-950 font-bold rounded-full hover:bg-pink-300 hover:scale-105 transition-all shadow-lg shadow-pink-900/20"
        >
          <Send size={19} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          {personalInfo.email}
        </a>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="p-3 rounded-full bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-pink-300 hover:border-pink-400/40 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="p-3 rounded-full bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-pink-300 hover:border-pink-400/40 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            data-hover
            className="p-3 rounded-full bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-pink-300 hover:border-pink-400/40 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
