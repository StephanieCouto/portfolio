"use client";

import { useEffect, useRef } from "react";

type StarFieldCanvasProps = {
  mode?: "hero" | "subtle";
  className?: string;
};

type Star = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  twinkleSpeed: number;
};

export function StarFieldCanvas({
  mode = "hero",
  className = "",
}: StarFieldCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const stars: Star[] = [];
    const pointer = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
    };

    let width = 0;
    let height = 0;
    let frameId = 0;

    const isSubtle = mode === "subtle";
    const baseOpacity = isSubtle ? 0.5 : 0.95;
    const moveInfluence = isSubtle ? 0.03 : 0.06;
    const magneticRadius = isSubtle ? 140 : 200;
    const magneticStrength = isSubtle ? 0.007 : 0.014;

    const setupCanvas = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : Math.max(window.innerHeight * 0.9, 520);

      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      stars.length = 0;

      const density = isSubtle ? 0.000035 : 0.00011;
      const minStars = isSubtle ? 20 : 50;
      const maxStars = isSubtle ? 40 : 100;
      const count = Math.max(minStars, Math.min(maxStars, Math.floor(width * height * density)));

      for (let i = 0; i < count; i += 1) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * (isSubtle ? 1.2 : 1.6) + 0.5,
          vx: (Math.random() - 0.5) * (isSubtle ? 0.05 : 0.09),
          vy: (Math.random() - 0.5) * (isSubtle ? 0.05 : 0.09),
          alpha: Math.random() * 0.75 + 0.2,
          twinkleSpeed: Math.random() * 0.012 + 0.003,
        });
      }
    };

    const drawGrid = () => {
      const step = isSubtle ? 72 : width < 768 ? 64 : 54;
      const offsetX = pointer.x * (isSubtle ? 0.18 : 0.32);
      const offsetY = pointer.y * (isSubtle ? 0.18 : 0.32);

      context.strokeStyle = isSubtle
        ? "rgba(59,130,246,0.045)"
        : "rgba(59,130,246,0.09)";
      context.lineWidth = 1;

      for (let x = -step; x < width + step; x += step) {
        context.beginPath();
        context.moveTo(x + offsetX, 0);
        context.lineTo(x + offsetX, height);
        context.stroke();
      }

      for (let y = -step; y < height + step; y += step) {
        context.beginPath();
        context.moveTo(0, y + offsetY);
        context.lineTo(width, y + offsetY);
        context.stroke();
      }
    };

    const updateStar = (star: Star, now: number) => {
      const dx = pointer.x - star.x;
      const dy = pointer.y - star.y;
      const distance = Math.hypot(dx, dy);

      if (distance < magneticRadius && distance > 1) {
        const force = (1 - distance / magneticRadius) * magneticStrength;
        star.vx += (dx / distance) * force;
        star.vy += (dy / distance) * force;
      }

      star.vx *= 0.985;
      star.vy *= 0.985;
      star.x += star.vx;
      star.y += star.vy;
      star.alpha += Math.sin(now * star.twinkleSpeed) * 0.004;

      if (star.x < -2) star.x = width + 2;
      if (star.x > width + 2) star.x = -2;
      if (star.y < -2) star.y = height + 2;
      if (star.y > height + 2) star.y = -2;
    };

    const render = () => {
      pointer.x += (pointer.tx - pointer.x) * moveInfluence;
      pointer.y += (pointer.ty - pointer.y) * moveInfluence;

      context.clearRect(0, 0, width, height);
      drawGrid();

      const now = performance.now();
      for (const star of stars) {
        updateStar(star, now);

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255,255,255,${Math.max(0.12, Math.min(star.alpha * baseOpacity, 1))})`;
        context.fill();

        context.beginPath();
        context.arc(star.x, star.y, star.radius * 3.1, 0, Math.PI * 2);
        context.fillStyle = isSubtle
          ? "rgba(59,130,246,0.04)"
          : "rgba(59,130,246,0.08)";
        context.fill();
      }

      frameId = window.requestAnimationFrame(render);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = event.clientX - rect.left;
      pointer.ty = event.clientY - rect.top;
    };

    const onResize = () => {
      setupCanvas();
    };

    const observer = new ResizeObserver(() => {
      setupCanvas();
    });

    const parent = canvas.parentElement;
    if (parent) {
      observer.observe(parent);
    }

    setupCanvas();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    frameId = window.requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.cancelAnimationFrame(frameId);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
    />
  );
}
