"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "/resume.pdf", label: "Resume" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled ? "bg-white/85 backdrop-blur border-b border-neutral-200/70" : "bg-transparent"}`}>
      <div className="mx-auto max-w-[920px] px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-[17px] font-medium tracking-[-0.01em] text-neutral-900">
          Kaveri Sharma
        </a>
        <nav className="flex items-center gap-4 sm:gap-5 text-sm sm:text-[15px] text-neutral-500">
          {links.map((l) => (
            <a key={l.label} href={l.href} target={l.href.endsWith(".pdf") ? "_blank" : undefined} className={`hover:text-neutral-900 transition-colors ${l.label === "Experience" ? "hidden sm:inline" : ""}`}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
