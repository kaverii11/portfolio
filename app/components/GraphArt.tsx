"use client";

import { useEffect, useRef } from "react";

// A small knowledge graph drawn in ink: nodes drift, and the ones near the cursor light up
// with their edges. A nod to the graph/agent work, kept quiet so the text stays the focus.
type Node = { x: number; y: number; vx: number; vy: number; r: number; hub: boolean };

export default function GraphArt() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0;
    const mouse = { x: -1e4, y: -1e4 };
    let nodes: Node[] = [];

    // Deterministic pseudo-random so the shape is the same on every load
    let seed = 7;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed = 7;
      const cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.42;
      nodes = Array.from({ length: 70 }, (_, i) => {
        const hub = i < 7;
        // Points spread in a soft disc, denser toward the middle
        const a = rand() * Math.PI * 2;
        const d = Math.sqrt(rand()) * R * (hub ? 0.6 : 1);
        return {
          x: cx + Math.cos(a) * d,
          y: cy + Math.sin(a) * d * 0.92,
          vx: (rand() - 0.5) * 0.12,
          vy: (rand() - 0.5) * 0.12,
          r: hub ? 3.6 : 1.3 + rand() * 1.4,
          hub,
        };
      });
    };

    const home = (n: Node) => {
      const cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.44;
      const dx = n.x - cx, dy = n.y - cy, d = Math.hypot(dx, dy);
      if (d > R) { n.vx -= (dx / d) * 0.01; n.vy -= (dy / d) * 0.01; }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const link = Math.min(w, h) * 0.17;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > link) continue;
          const near = Math.min(Math.hypot(a.x - mouse.x, a.y - mouse.y), Math.hypot(b.x - mouse.x, b.y - mouse.y)) < 90;
          ctx.strokeStyle = near ? "rgba(224,122,95,0.75)" : `rgba(23,23,23,${0.16 * (1 - d / link)})`;
          ctx.lineWidth = near ? 1 : 0.7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      for (const n of nodes) {
        const near = Math.hypot(n.x - mouse.x, n.y - mouse.y) < 90;
        ctx.fillStyle = near ? "#E07A5F" : n.hub ? "#171717" : "rgba(23,23,23,0.7)";
        ctx.beginPath(); ctx.arc(n.x, n.y, near ? n.r + 1 : n.r, 0, Math.PI * 2); ctx.fill();
      }
    };

    const tick = () => {
      for (const n of nodes) {
        // Nodes lean gently away from the cursor
        const dx = n.x - mouse.x, dy = n.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 70 && d > 0) { n.vx += (dx / d) * 0.05; n.vy += (dy / d) * 0.05; }
        home(n);
        n.vx *= 0.985; n.vy *= 0.985;
        n.vx += (Math.random() - 0.5) * 0.006; n.vy += (Math.random() - 0.5) * 0.006;
        n.x += n.vx; n.y += n.vy;
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -1e4; mouse.y = -1e4; };

    build();
    if (reduce) draw(); else raf = requestAnimationFrame(tick);
    const ro = new ResizeObserver(() => { build(); if (reduce) draw(); });
    ro.observe(canvas);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf); ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="w-full h-full" />;
}
