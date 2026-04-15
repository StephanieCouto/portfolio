"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const el = cursorRef.current;
      if (!el) {
        return;
      }

      el.style.left = `${event.clientX}px`;
      el.style.top = `${event.clientY}px`;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />;
}
