"use client";

import { useEffect, useRef } from "react";

// A small knowledge graph drawn in ink. Nodes drift and lean away from the cursor;
// a click bursts the graph apart with confetti, and the nodes float back into shape.
type Node = { x: number; y: number; vx: number; vy: number; r: number; big: boolean; hx: number; hy: number };
type Bit = { x: number; y: number; vx: number; vy: number; rot: number; vr: number; w: number; h: number; color: string; life: number; round: boolean };

const ACCENT = "#2563EB";
const CONFETTI = ["#2563EB", "#60A5FA", "#1D4ED8", "#F472B6", "#FBBF24", "#34D399", "#A78BFA", "#93C5FD"];

export default function GraphArt() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0, running = false;
    const mouse = { x: -1e4, y: -1e4 };
    let nodes: Node[] = [];
    let bits: Bit[] = [];

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
        const big = i < 7;
        // Points spread in a soft disc, denser toward the middle
        const a = rand() * Math.PI * 2;
        const d = Math.sqrt(rand()) * R * (big ? 0.6 : 1);
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.92;
        return { x, y, hx: x, hy: y, vx: (rand() - 0.5) * 0.12, vy: (rand() - 0.5) * 0.12, r: big ? 3.6 : 1.3 + rand() * 1.4, big };
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
          const near = Math.min(Math.hypot(a.x - mouse.x, a.y - mouse.y), Math.hypot(b.x - mouse.x, b.y - mouse.y)) < 70;
          ctx.strokeStyle = near ? "rgba(37,99,235,0.7)" : `rgba(23,23,23,${0.16 * (1 - d / link)})`;
          ctx.lineWidth = near ? 1 : 0.7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      for (const n of nodes) {
        const near = Math.hypot(n.x - mouse.x, n.y - mouse.y) < 70;
        ctx.fillStyle = near ? ACCENT : n.big ? "#171717" : "rgba(23,23,23,0.7)";
        ctx.beginPath(); ctx.arc(n.x, n.y, near ? n.r + 1 : n.r, 0, Math.PI * 2); ctx.fill();
      }
      for (const p of bits) {
        ctx.save();
        ctx.globalAlpha = Math.min(1, p.life / 40);
        ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.round) { ctx.beginPath(); ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2); ctx.fill(); }
        else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    };

    const step = () => {
      for (const n of nodes) {
        const dx = n.x - mouse.x, dy = n.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 70 && d > 0) { n.vx += (dx / d) * 0.05; n.vy += (dy / d) * 0.05; }
        // Each node is softly tied to its spot, so the shape breathes but always comes back
        n.vx += (n.hx - n.x) * 0.0012; n.vy += (n.hy - n.y) * 0.0012;
        n.vx *= 0.975; n.vy *= 0.975;
        n.vx += (Math.random() - 0.5) * 0.006; n.vy += (Math.random() - 0.5) * 0.006;
        n.x += n.vx; n.y += n.vy;
      }
      for (const p of bits) {
        p.vy += 0.12; p.vx *= 0.99; p.vy *= 0.99;
        p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life -= 1;
      }
      bits = bits.filter((p) => p.life > 0 && p.y < h + 40);
    };

    const tick = () => {
      step(); draw();
      raf = requestAnimationFrame(tick);
    };
    const start = () => { if (!running) { running = true; raf = requestAnimationFrame(tick); } };

    const burst = (x: number, y: number) => {
      for (const n of nodes) {
        const dx = n.x - x, dy = n.y - y, d = Math.max(Math.hypot(dx, dy), 12);
        const f = 9 * Math.exp(-d / 160);
        n.vx += (dx / d) * f; n.vy += (dy / d) * f;
      }
      for (let i = 0; i < 90; i++) {
        const a = Math.random() * Math.PI * 2, s = 2 + Math.random() * 6;
        const round = Math.random() < 0.3;
        bits.push({
          x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 3,
          rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3,
          w: round ? 5 : 4 + Math.random() * 4, h: 2.5 + Math.random() * 2,
          color: CONFETTI[i % CONFETTI.length], life: 90 + Math.random() * 50, round,
        });
      }
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
      if (reduce && !running) draw();
    };
    const onLeave = () => { mouse.x = -1e4; mouse.y = -1e4; if (reduce && !running) draw(); };
    const onClick = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      burst(e.clientX - r.left, e.clientY - r.top);
      start(); // even with reduced motion, a click is an explicit request to animate
    };

    build();
    if (reduce) draw(); else start();
    const ro = new ResizeObserver(() => { build(); draw(); });
    ro.observe(canvas);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf); ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="w-full h-full cursor-pointer touch-manipulation" />;
}
