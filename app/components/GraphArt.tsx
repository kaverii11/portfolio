"use client";

import { useEffect, useRef } from "react";
import { graphHubs } from "../data";

// A small knowledge graph drawn in ink: nodes drift, and the ones near the cursor light up
// with their edges. A nod to the graph/agent work, kept quiet so the text stays the focus.
type Node = { x: number; y: number; vx: number; vy: number; r: number; hub: number; hx: number; hy: number };
const HUBS = graphHubs.length;

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
    let active: Node | null = null; // project dot under the cursor

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
        // The first nodes are projects, spaced on an inner ring so their labels don't collide;
        // the rest spread in a soft disc, denser toward the middle
        const hub = i < HUBS ? i : -1;
        const a = hub >= 0 ? (hub / HUBS) * Math.PI * 2 + 0.4 : rand() * Math.PI * 2;
        const d = hub >= 0 ? R * (hub % 2 ? 0.62 : 0.4) : Math.sqrt(rand()) * R;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.92;
        return {
          x, y, hx: x, hy: y,
          vx: (rand() - 0.5) * 0.12,
          vy: (rand() - 0.5) * 0.12,
          r: hub >= 0 ? 4.2 : 1.3 + rand() * 1.4,
          hub,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const link = Math.min(w, h) * 0.17;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > link) continue;
          // With a project hovered, light up only its links; otherwise a small patch under the cursor
          const near = active
            ? a === active || b === active
            : Math.min(Math.hypot(a.x - mouse.x, a.y - mouse.y), Math.hypot(b.x - mouse.x, b.y - mouse.y)) < 60;
          ctx.strokeStyle = near ? "rgba(224,122,95,0.75)" : `rgba(23,23,23,${0.16 * (1 - d / link)})`;
          ctx.lineWidth = near ? 1 : 0.7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      for (const n of nodes) {
        const on = n === active;
        const near = !active && Math.hypot(n.x - mouse.x, n.y - mouse.y) < 60;
        ctx.fillStyle = on || near ? "#E07A5F" : n.hub >= 0 ? "#171717" : "rgba(23,23,23,0.7)";
        ctx.beginPath(); ctx.arc(n.x, n.y, on ? n.r + 2.5 : near ? n.r + 1 : n.r, 0, Math.PI * 2); ctx.fill();
        if (n.hub >= 0) {
          // A thin ring marks the clickable dots
          ctx.strokeStyle = on ? "rgba(224,122,95,0.5)" : "rgba(23,23,23,0.18)";
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 5, 0, Math.PI * 2); ctx.stroke();
        }
      }
      if (active) {
        const label = graphHubs[active.hub].label + "  ↗";
        ctx.font = "500 13px ui-sans-serif, system-ui, -apple-system, sans-serif";
        const tw = ctx.measureText(label).width, pw = tw + 20, ph = 28;
        let lx = active.x + 14, ly = active.y - ph - 8;
        if (lx + pw > w) lx = active.x - pw - 14;
        if (ly < 0) ly = active.y + 12;
        ctx.fillStyle = "#171717";
        ctx.beginPath(); ctx.roundRect(lx, ly, pw, ph, 14); ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.fillText(label, lx + 10, ly + 18.5);
      }
    };

    const pick = () => {
      let best: Node | null = null, bd = 26;
      for (const n of nodes) {
        if (n.hub < 0) continue;
        const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        if (d < bd) { bd = d; best = n; }
      }
      active = best;
      canvas.style.cursor = best ? "pointer" : "default";
    };

    const tick = () => {
      pick();
      for (const n of nodes) {
        // Every dot is softly tied to its starting spot, so the shape breathes but never clumps.
        // Project dots are tied tighter (and hold still while hovered) so they're easy to click.
        if (n === active) { n.vx = 0; n.vy = 0; continue; }
        const k = n.hub >= 0 ? 0.002 : 0.0008;
        n.vx += (n.hx - n.x) * k; n.vy += (n.hy - n.y) * k;
        // Nodes lean gently away from the cursor
        const dx = n.x - mouse.x, dy = n.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 70 && d > 0) { n.vx += (dx / d) * 0.05; n.vy += (dy / d) * 0.05; }
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
      if (reduce) { pick(); draw(); }
    };
    const onLeave = () => { mouse.x = -1e4; mouse.y = -1e4; };
    const onClick = () => {
      pick();
      if (active) window.open(graphHubs[active.hub].href, "_blank", "noopener");
    };

    build();
    if (reduce) draw(); else raf = requestAnimationFrame(tick);
    const ro = new ResizeObserver(() => { build(); if (reduce) draw(); });
    ro.observe(canvas);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("click", onClick);
    return () => {
      canvas.removeEventListener("click", onClick);
      cancelAnimationFrame(raf); ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="w-full h-full touch-none" />;
}
