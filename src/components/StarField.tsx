"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; a: number; s: number; d: number; hue: number };
type Shooter = { x: number; y: number; vx: number; vy: number; life: number };

/** Fixed, full-screen twinkling starfield with mouse parallax and occasional shooting stars. */
export default function StarField() {
  const ref = useRef<HTMLCanvasElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let stars: Star[] = [];
    const shooters: Shooter[] = [];
    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(260, Math.floor((w * h) / 7000));
      stars = Array.from({ length: count }, () => {
        const r = Math.random() * 1.1 + 0.2;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r,
          a: Math.random(),
          s: Math.random() * 0.02 + 0.004,
          // depth for parallax: bigger (closer) stars move much more than tiny distant ones
          d: 0.2 + (r / 1.3) * 0.8 + Math.random() * 0.2,
          hue: Math.random() < 0.15 ? 40 : Math.random() < 0.3 ? 260 : 0,
        };
      });
    };

    // Cursor parallax: the sky drifts opposite to the cursor, like looking around
    const onMove = (e: PointerEvent) => {
      tx = -(e.clientX / w - 0.5) * 40;
      ty = -(e.clientY / h - 0.5) * 40;
    };

    const wrap = (v: number, max: number) => ((v % max) + max) % max;

    const draw = () => {
      mx += (tx - mx) * 0.045;
      my += (ty - my) * 0.045;
      const sy = window.scrollY * 0.05; // stars also drift with scroll (works on touch devices)
      ctx.clearRect(0, 0, w, h);
      if (nebulaRef.current) {
        nebulaRef.current.style.transform = `translate3d(${mx * 0.25}px, ${my * 0.25 - sy * 0.15}px, 0)`;
      }

      for (const st of stars) {
        st.a += st.s;
        const alpha = 0.12 + Math.abs(Math.sin(st.a)) * 0.43;
        const x = wrap(st.x + mx * st.d, w);
        const y = wrap(st.y + (my - sy) * st.d, h);
        ctx.beginPath();
        ctx.arc(x, y, st.r, 0, Math.PI * 2);
        ctx.fillStyle =
          st.hue === 40
            ? `rgba(255,222,160,${alpha})`
            : st.hue === 260
              ? `rgba(200,185,255,${alpha})`
              : `rgba(255,255,255,${alpha})`;
        ctx.fill();
        if (st.r > 1.2) {
          ctx.beginPath();
          ctx.arc(x, y, st.r * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,230,180,${alpha * 0.05})`;
          ctx.fill();
        }
      }

      if (Math.random() < 0.006 && shooters.length < 2) {
        shooters.push({
          x: Math.random() * w * 0.8 + w * 0.2,
          y: Math.random() * h * 0.4,
          vx: -(Math.random() * 6 + 7),
          vy: Math.random() * 3 + 2.5,
          life: 1,
        });
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 14, s.y - s.vy * 14);
        grad.addColorStop(0, `rgba(255,236,200,${s.life})`);
        grad.addColorStop(1, "rgba(255,236,200,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 14, s.y - s.vy * 14);
        ctx.stroke();
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.012;
        if (s.life <= 0) shooters.splice(i, 1);
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);

    if (reduce) {
      // Single static frame
      for (const st of stars) {
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.fill();
      }
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div ref={nebulaRef} className="nebula absolute -inset-[12%] will-change-transform" />
      <canvas ref={ref} className="absolute inset-0" />
      {/* soft vignette keeps the centre (where content sits) darkest */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,4,15,0.55),rgba(6,4,15,0.15)_70%)]" />
    </div>
  );
}
