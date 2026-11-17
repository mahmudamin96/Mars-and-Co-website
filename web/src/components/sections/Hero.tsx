"use client";

import { useEffect, useRef } from "react";
import { gsap, SplitText, useGsap } from "../motion";
import { Button } from "../ui";

export default function Hero() {
  const ref = useGsap<HTMLElement>((el) => {
    const title = el.querySelector(".hero-title");
    const split = SplitText.create(title, { type: "lines,chars", mask: "lines" });
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from(split.chars, { yPercent: 120, rotate: 8, duration: 1.3, stagger: 0.018 })
      .from(".hero-copy", { y: 30, autoAlpha: 0, duration: 1 }, "-=0.9")
      .from(".hero-cta", { y: 30, autoAlpha: 0, duration: 1 }, "-=0.85")
      .from(
        ".sticker",
        { scale: 0, rotate: (i: number) => (i % 2 ? 30 : -30), duration: 0.9, ease: "back.out(2.4)", stagger: 0.12 },
        "-=0.9",
      );
    // headline drifts and fades as you scroll away
    gsap.to(".hero-stage", {
      yPercent: 18,
      autoAlpha: 0.2,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
    });
  });

  // stickers gently follow the pointer
  const stage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const s = stage.current;
    if (!s || window.matchMedia("(pointer: coarse)").matches) return;
    const items = Array.from(s.querySelectorAll<HTMLElement>(".sticker"));
    const movers = items.map((it, i) => ({
      x: gsap.quickTo(it, "x", { duration: 0.8, ease: "power3" }),
      y: gsap.quickTo(it, "y", { duration: 0.8, ease: "power3" }),
      f: (i + 1) * 10,
    }));
    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      movers.forEach((m) => {
        m.x(nx * m.f);
        m.y(ny * m.f);
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section ref={ref} className="hero">
      <div className="hero-stage wrap" ref={stage}>
        <h1 className="hero-title display display-xl">
          <span>Crafting ideas</span>
          <span>for forward</span>
          <span className="red">thinking brands</span>
        </h1>
        <span className="sticker" style={{ left: "10%", top: "8%", rotate: "-8deg" }}>
          Strategy-led
        </span>
        <span className="sticker sticker--red" style={{ right: "12%", top: "2%", rotate: "6deg" }}>
          Independent studio
        </span>
        <span className="sticker" style={{ right: "6%", top: "47%", rotate: "-5deg" }}>
          No funny business
        </span>
        <span className="sticker sticker--red" style={{ left: "4%", top: "60%", rotate: "7deg" }}>
          Design-obsessed
        </span>
        <p className="hero-copy lead">
          We blend strategy, design, and technology to create brands that don&apos;t just stand out — they stand for something. Every
          identity, website, and digital experience is built with intention, combining creative thinking with measurable outcomes.
        </p>
        <div className="hero-cta">
          <Button href="/contact">Start a Project</Button>
        </div>
      </div>
    </section>
  );
}
