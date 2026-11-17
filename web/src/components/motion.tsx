"use client";

import { useEffect, useLayoutEffect, useRef, type ReactNode, type CSSProperties, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export { gsap, ScrollTrigger, SplitText };

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const reduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Run GSAP code scoped to a ref once web fonts are ready (so text splits measure correctly).
 * Everything is reverted on unmount, and a cancelled run never starts — this matters in
 * React dev mode, where effects mount twice and duplicate `from()` tweens would leave text hidden.
 */
export function useGsap<T extends HTMLElement>(fn: (el: T) => void, deps: unknown[] = []) {
  const ref = useRef<T>(null);
  useIso(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    let ctx: gsap.Context | null = null;
    let dead = false;
    document.fonts.ready.then(() => {
      if (dead) return;
      ctx = gsap.context(() => fn(el), el);
      ScrollTrigger.refresh();
    });
    return () => {
      dead = true;
      ctx?.revert();
    };
  }, deps);
  return ref;
}

type Base = { children: ReactNode; className?: string; style?: CSSProperties; as?: ElementType };

/** Fade + rise children into view (staggered if `stagger`). */
export function Reveal({ children, className, style, as: Tag = "div", stagger = 0, y = 40, delay = 0 }: Base & { stagger?: number; y?: number; delay?: number }) {
  const ref = useGsap<HTMLElement>((el) => {
    const targets = stagger ? Array.from(el.children) : [el];
    gsap.from(targets, {
      y,
      autoAlpha: 0,
      duration: 1.1,
      delay,
      ease: "expo.out",
      stagger,
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });
  });
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}

/** Heading whose lines slide up from a mask. `immediate` plays on load instead of on scroll. */
export function SplitLines({ children, className, style, as: Tag = "h2", immediate = false, delay = 0 }: Base & { immediate?: boolean; delay?: number }) {
  const ref = useGsap<HTMLElement>((el) => {
    SplitText.create(el, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.2,
          delay,
          ease: "expo.out",
          stagger: 0.09,
          scrollTrigger: immediate ? undefined : { trigger: el, start: "top 85%", once: true },
        }),
    });
  });
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}

/** Large statement that fills from muted grey to ink, letter by letter, as you scroll (two26-style). */
export function ScrubText({ children, className, style, as: Tag = "p", from = "#d4d6db", to = "currentColor" }: Base & { from?: string; to?: string }) {
  const ref = useGsap<HTMLElement>((el) => {
    const split = SplitText.create(el, { type: "words,chars" });
    gsap.fromTo(
      split.chars,
      { color: from },
      {
        color: to,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
      },
    );
  });
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}

/** Tilted label stickers that pop in with a bounce. Children must be `.sticker` elements. */
export function Stickers({ children, className, style, immediate = false, delay = 0.6 }: Base & { immediate?: boolean; delay?: number }) {
  const ref = useGsap<HTMLDivElement>((el) => {
    const items = el.querySelectorAll<HTMLElement>(".sticker");
    gsap.from(items, {
      scale: 0,
      rotate: (i: number) => (i % 2 ? 25 : -25),
      duration: 0.9,
      delay,
      ease: "back.out(2.2)",
      stagger: 0.12,
      scrollTrigger: immediate ? undefined : { trigger: el, start: "top 75%", once: true },
    });
  });
  return (
    <div ref={ref} className={className} style={{ position: "relative", ...style }} aria-hidden>
      {children}
    </div>
  );
}

/** Infinite marquee whose speed and direction follow scroll velocity. */
export function Marquee({ children, className, speed = 40, reverse = false }: { children: ReactNode; className?: string; speed?: number; reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useIso(() => {
    const el = ref.current;
    if (!el) return;
    const track = el.querySelector<HTMLElement>("[data-track]");
    if (!track) return;
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const dir = reverse ? 1 : -1;
      const tween = gsap.to(track, {
        xPercent: dir * 50,
        ease: "none",
        duration: speed,
        repeat: -1,
      });
      if (reverse) gsap.set(track, { xPercent: -50 });
      ScrollTrigger.create({
        onUpdate: (self) => {
          const v = gsap.utils.clamp(-4, 4, self.getVelocity() / 400);
          gsap.to(tween, { timeScale: (self.direction || 1) * (1 + Math.abs(v)), duration: 0.3, overwrite: true });
        },
      });
    }, el);
    return () => ctx.revert();
  }, [speed, reverse]);
  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <div data-track style={{ display: "flex", width: "max-content" }}>
        <div style={{ display: "flex", flexShrink: 0 }}>{children}</div>
        <div style={{ display: "flex", flexShrink: 0 }} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/** Number that counts up when scrolled into view. */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useIso(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced()) {
      el.textContent = value + suffix;
      return;
    }
    const obj = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: value,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = Math.round(obj.n) + suffix;
        },
      });
    });
    return () => ctx.revert();
  }, [value, suffix]);
  return <span ref={ref}>{value + suffix}</span>;
}

/** Image that drifts slower than the page (parallax) inside an overflow-hidden frame. */
export function Parallax({ children, className, style, amount = 12 }: Base & { amount?: number }) {
  const ref = useGsap<HTMLDivElement>((el) => {
    const inner = el.firstElementChild;
    if (!inner) return;
    gsap.fromTo(
      inner,
      { yPercent: -amount / 2, scale: 1 + amount / 100 },
      { yPercent: amount / 2, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
    );
  });
  return (
    <div ref={ref} className={className} style={{ overflow: "hidden", position: "relative", ...style }}>
      {children}
    </div>
  );
}
