"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let destroyed = false;
    let cleanup: (() => void) | null = null;
    const start = async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (destroyed) return;
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: { offset: -80 } });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__lenis = lenis;
      cleanup = () => {
        gsap.ticker.remove(raf);
        lenis.destroy();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (window as any).__lenis;
      };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ric = (window as any).requestIdleCallback || ((f: () => void) => setTimeout(f, 200));
    ric(() => start());
    return () => {
      destroyed = true;
      cleanup?.();
    };
  }, []);
  return null;
}
