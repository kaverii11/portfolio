"use client";

import { useEffect } from "react";
import { personalInfo } from "../data";

export default function Footer() {
  useEffect(() => {
    console.log(
      "%c👋 hey there, fellow dev.",
      "color:#f472b6;font-size:16px;font-weight:bold;"
    );
    console.log(
      `%cLiked the code? Let's talk → ${personalInfo.email}`,
      "color:#94a3b8;font-size:12px;"
    );
  }, []);

  return (
    <footer className="relative z-10 max-w-5xl mx-auto px-6 pb-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs font-mono-custom border-t border-slate-900">
      <p>© {new Date().getFullYear()} {personalInfo.name}</p>
      <p>Built with Next.js, Tailwind &amp; Framer Motion</p>
    </footer>
  );
}
