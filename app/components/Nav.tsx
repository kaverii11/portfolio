"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Tech Stack" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/60" : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
          <a href="#top" data-hover className="font-mono-custom text-lg font-bold text-slate-100">
            <span className="text-pink-400">&gt;</span> kaveri.sh
            <span className="text-pink-400 animate-caret">_</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  data-hover
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    active === l.id ? "text-pink-300" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-pink-400/10 border border-pink-400/30"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <button
            data-hover
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 text-slate-200"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="text-2xl font-mono-custom text-slate-200"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
