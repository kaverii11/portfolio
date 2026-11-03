"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

// "Kaveri" in the hero: hover (or tap) and a little photo card pops up and follows the cursor.
export default function NameReveal({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 22 });
  const y = useSpring(my, { stiffness: 260, damping: 22 });

  // Fetch the photo up front so it's already there on the first hover
  useEffect(() => { const img = new window.Image(); img.src = "/kaveri.webp"; }, []);

  // On touch screens a tap shows the card; it tucks itself away again after a few seconds
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => { if (!ref.current?.matches(":hover")) setShow(false); }, 4000);
    return () => clearTimeout(t);
  }, [show]);

  const follow = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    // Drift a little with the cursor, never far from the name
    mx.set((e.clientX - r.right) * 0.35);
    my.set((e.clientY - r.top - r.height / 2) * 0.5);
  };

  return (
    <span
      ref={ref}
      className="relative inline-block cursor-default"
      onPointerEnter={(e) => { if (e.pointerType === "mouse") setShow(true); }}
      onPointerLeave={(e) => { if (e.pointerType === "mouse") setShow(false); }}
      onPointerMove={follow}
      onClick={() => setShow((s) => !s)}
    >
      <span className="underline decoration-[#2563EB]/40 decoration-dotted decoration-[3px] underline-offset-[10px] hover:decoration-[#2563EB] transition-colors">
        {children}
      </span>
      <AnimatePresence>
        {show && (
          <motion.span
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.6, rotate: -14 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            exit={{ opacity: 0, scale: 0.7, rotate: 4 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className="pointer-events-none absolute left-0 top-full mt-4 md:left-full md:top-1/2 md:ml-5 md:-mt-[128px] z-20 block w-[160px] md:w-[176px] rounded-2xl bg-white p-2 pb-3 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
          >
            <Image
              src="/kaveri.webp"
              alt="Kaveri Sharma"
              width={440}
              height={548}
              priority
              unoptimized
              className="block w-full h-auto rounded-xl"
            />
            <span className="mt-2 block text-center text-[13px] font-normal tracking-normal text-neutral-500">
              hi, that&apos;s me 👋
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
