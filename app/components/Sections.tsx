"use client";

import { ArrowUpRight, Award, Lock, Trophy } from "lucide-react";
import {
  achievements,
  experience,
  featuredOrder,
  featuredProjects,
  leadership,
  moreProjects,
  personalInfo,
  resumeGame,
  skillGroups,
} from "../data";
import Collapse from "./Collapse";
import Reveal from "./Reveal";

function Heading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-3xl font-semibold tracking-[-0.03em] text-neutral-900 mb-10">
      {children}
    </h2>
  );
}

function Monogram({ text }: { text: string }) {
  return (
    <div className="h-11 w-11 shrink-0 rounded-full border border-neutral-200 bg-white grid place-items-center text-sm font-semibold text-neutral-800">
      {text}
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <p className="mt-3 text-[13px] text-neutral-400">{items.join(" · ")}</p>
  );
}

function RepoLink({ href, isPrivate }: { href: string; isPrivate?: boolean }) {
  if (isPrivate)
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-neutral-400">
        <Lock size={13} /> Private repo
      </span>
    );
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-neutral-900 hover:text-[#E07A5F] transition-colors">
      GitHub <ArrowUpRight size={15} />
    </a>
  );
}

// ---------------- Experience ----------------
export function Experience() {
  const job = experience[0];
  return (
    <section className="py-16">
      <Heading id="experience">Experience</Heading>
      <Reveal>
        <div className="flex gap-5">
          <Monogram text="N" />
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <div>
                <h3 className="text-lg text-neutral-900">NCRTC</h3>
                <p className="text-[15px] text-neutral-500">{job.role}</p>
              </div>
              <div className="text-sm text-neutral-500 sm:text-right">
                <p>{job.period.replace("—", "-")}</p>
                <p>{job.location.replace(" (On-site)", "")}</p>
              </div>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-800 max-w-2xl">
              At the National Capital Region Transport Corporation, I built and deployed a real-time
              transport analytics dashboard for the PM e-Bus Sewa initiative, bringing 3+ fleet and
              ridership data sources into one view, so officials could check daily KPIs in minutes
              instead of waiting on an analyst.
            </p>
          </div>
        </div>
      </Reveal>

      <Collapse
        title="Leadership"
        count={leadership.length}
        summary={leadership.map((l) => l.org).join(" and ")}
      >
        <div className="space-y-6 pt-2">
          {leadership.map((l) => (
            <div key={l.org} className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <div className="max-w-xl">
                <h3 className="text-neutral-900">{l.org}</h3>
                <p className="text-sm text-neutral-500">{l.role}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-neutral-700">{l.detail}</p>
              </div>
              <p className="text-sm text-neutral-500 shrink-0">{l.period.replace("—", "-")}</p>
            </div>
          ))}
        </div>
      </Collapse>
    </section>
  );
}

// ---------------- Projects ----------------
export function Projects() {
  const featured = featuredOrder.map((f) => ({ ...featuredProjects.find((p) => p.title === f.title)!, ...f }));
  const rest = [
    ...featuredProjects.filter((p) => !featuredOrder.some((f) => f.title === p.title)),
    ...moreProjects,
  ];

  return (
    <section className="py-16">
      <Heading id="projects">Projects</Heading>
      <div className="space-y-16">
        {featured.map((p) => (
          <Reveal key={p.title}>
            <article className="grid md:grid-cols-[1fr_1.25fr] gap-6 md:gap-10">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-7 flex flex-col justify-between min-h-[190px]">
                <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">{p.tag}</p>
                <div>
                  <p className="text-4xl md:text-[2.6rem] font-semibold tracking-[-0.03em] text-neutral-900">{p.metric}</p>
                  <p className="mt-2 text-sm text-neutral-500 max-w-[16rem]">{p.metricLabel}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-neutral-500">{p.subtitle}</p>
                <h3 className="mt-1 text-xl text-neutral-900">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-800">{p.description}</p>
                {p.badge && <p className="mt-3 text-sm text-neutral-500">{p.badge.replace(/^🏆\s*/, "")}</p>}
                <Tags items={p.tech} />
                <div className="mt-4">
                  <RepoLink href={p.link} isPrivate={p.private} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Collapse
        title="More projects"
        count={rest.length}
        summary={rest.slice(0, 5).map((p) => p.title).join(", ") + ", and more"}
      >
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8 pt-2">
          {rest.map((p) => (
            <div key={p.title}>
              <p className="text-xs uppercase tracking-[0.12em] text-neutral-400">{p.tag}</p>
              <h3 className="mt-1 text-neutral-900">{p.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-neutral-700">{p.description}</p>
              <Tags items={p.tech} />
              <div className="mt-3">
                <RepoLink href={p.link} isPrivate={"private" in p ? (p.private as boolean) : false} />
              </div>
            </div>
          ))}
        </div>
      </Collapse>
    </section>
  );
}

// ---------------- Recognition ----------------
export function Recognition() {
  return (
    <section className="py-16">
      <Heading id="recognition">Recognition</Heading>
      <div className="space-y-10">
        {achievements.map((a) => (
          <Reveal key={a.org}>
            <div className="flex gap-5">
              <div className="h-11 w-11 shrink-0 rounded-full border border-neutral-200 bg-white grid place-items-center text-neutral-800">
                {a.stat === "2nd" ? <Trophy size={18} strokeWidth={1.6} /> : <Award size={18} strokeWidth={1.6} />}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <h3 className="text-lg text-neutral-900">{a.org}</h3>
                    <p className="text-[15px] text-neutral-500">{a.title}</p>
                  </div>
                  <p className="text-sm text-neutral-500">{a.period}</p>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-800 max-w-2xl">{a.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ---------------- Toolbox ----------------
export function Toolbox() {
  return (
    <section className="py-16">
      <Heading id="skills">Toolbox</Heading>
      <dl className="grid sm:grid-cols-[200px_1fr] gap-x-8 gap-y-4 text-[15px]">
        {skillGroups.map((g) => (
          <div key={g.label} className="contents">
            <dt className="text-neutral-500">{g.label}</dt>
            <dd className="text-neutral-800">{g.skills.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

// ---------------- Footer ----------------
export function SiteFooter() {
  const links = [
    { label: "Email", href: `mailto:${personalInfo.email}` },
    { label: "LinkedIn", href: personalInfo.linkedin },
    { label: "GitHub", href: personalInfo.github },
    { label: "Resume", href: "/resume.pdf" },
    { label: "Resume, the game", href: resumeGame },
  ];
  return (
    <footer className="py-20 border-t border-neutral-200">
      <h2 id="contact" className="scroll-mt-24 text-3xl font-semibold tracking-[-0.03em] text-neutral-900">
        Say hi.
      </h2>
      <p className="mt-4 text-[15px] text-neutral-500 max-w-lg">
        I&apos;m looking for a Jan–Jun 2027 internship in AI or software engineering, in Bengaluru or remote.
        The fastest way to reach me is{" "}
        <a href={`mailto:${personalInfo.email}`} className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[#E07A5F]">
          {personalInfo.email}
        </a>
        .
      </p>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {links.map((l) => (
          <a key={l.label} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="inline-flex items-center gap-1 text-neutral-700 hover:text-[#E07A5F] transition-colors">
            {l.label} <ArrowUpRight size={14} />
          </a>
        ))}
      </div>
      <p className="mt-14 text-xs text-neutral-400">© {new Date().getFullYear()} Kaveri Sharma · Bengaluru</p>
    </footer>
  );
}
