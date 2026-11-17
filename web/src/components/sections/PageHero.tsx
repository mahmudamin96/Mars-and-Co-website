"use client";

import type { ReactNode } from "react";
import { gsap, SplitText, useGsap } from "../motion";

/** Big centred page title that animates in on load. Variants match the Figma page headers. */
export default function PageHero({
  lines,
  tone = "light",
  stickers,
  children,
}: {
  lines: string[];
  tone?: "light" | "dark" | "red";
  stickers?: { text: string; style: React.CSSProperties; variant?: "red" | "white" | "" }[];
  children?: ReactNode;
}) {
  const ref = useGsap<HTMLElement>((el) => {
    const split = SplitText.create(el.querySelector("h1"), { type: "lines,chars", mask: "lines" });
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from(split.chars, { yPercent: 120, rotate: 6, duration: 1.2, stagger: 0.02 });
    const extra = el.querySelectorAll(".page-hero-extra > *");
    const stickers = el.querySelectorAll(".sticker");
    if (extra.length) tl.from(extra, { y: 30, autoAlpha: 0, duration: 1, stagger: 0.1 }, "-=0.8");
    if (stickers.length)
      tl.from(
        stickers,
        { scale: 0, rotate: (i: number) => (i % 2 ? 25 : -25), duration: 0.9, ease: "back.out(2.4)", stagger: 0.12 },
        "-=0.9",
      );
  });

  return (
    <section ref={ref} className={`page-hero page-hero--${tone}`}>
      <div className="wrap page-hero-inner">
        <h1 className="display display-xl">
          {lines.map((l) => (
            <span key={l} style={{ display: "block" }}>
              {l}
            </span>
          ))}
        </h1>
        {stickers?.map((s) => (
          <span key={s.text} className={`sticker ${s.variant ? `sticker--${s.variant}` : ""}`} style={s.style} aria-hidden>
            {s.text}
          </span>
        ))}
        {children && <div className="page-hero-extra">{children}</div>}
      </div>
    </section>
  );
}
