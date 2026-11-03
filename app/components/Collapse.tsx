"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

// Grey "More …" panel that expands in place.
export default function Collapse({
  title,
  count,
  summary,
  children,
}: {
  title: string;
  count: number;
  summary: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-10 rounded-xl bg-neutral-100/80 border border-neutral-200/70">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left px-5 py-4 flex items-start justify-between gap-4"
      >
        <div>
          <p className="text-[15px] text-neutral-900">
            {title} <span className="ml-1 text-xs text-neutral-400">{count}</span>
          </p>
          {!open && <p className="mt-1 text-sm text-neutral-500">{summary}</p>}
        </div>
        <Plus size={20} strokeWidth={1.5} className={`mt-0.5 shrink-0 text-neutral-600 transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
