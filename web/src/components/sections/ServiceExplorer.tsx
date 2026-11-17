"use client";

import { useEffect, useRef, useState } from "react";
import { services, servicePreview } from "@/lib/content";
import { gsap } from "../motion";
import { Img } from "../ui";

/**
 * Services grid (Figma "Services" + "Services Details" frames):
 * tiles with image + title; selecting one dims the others and opens its detail panel.
 * Opens from the URL hash too (e.g. /services#marketing).
 */
export default function ServiceExplorer() {
  const [open, setOpen] = useState<number>(0);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fromHash = () => {
      const i = services.findIndex((s) => `#${s.slug}` === window.location.hash);
      if (i >= 0) {
        setOpen(i);
        document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  useEffect(() => {
    const p = panel.current;
    if (!p) return;
    gsap.fromTo(p.querySelectorAll("[data-anim]"), { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: "expo.out", stagger: 0.05 });
    gsap.fromTo(p.querySelectorAll("li"), { x: -20, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.6, ease: "expo.out", stagger: 0.04, delay: 0.15 });
  }, [open]);

  const s = services[open];

  return (
    <section className="explore" id="explore">
      <div className="wrap">
        <div className="explore-tiles" role="tablist" aria-label="Services">
          {services.map((svc, i) => (
            <button
              key={svc.slug}
              id={svc.slug}
              role="tab"
              aria-selected={open === i}
              className={`explore-tile ${open === i ? "is-on" : ""}`}
              onClick={() => {
                setOpen(i);
                history.replaceState(null, "", `#${svc.slug}`);
              }}
            >
              <span className="explore-tile-img">
                <Img src={svc.image} sizes="(max-width: 700px) 50vw, 20vw" />
              </span>
              <span className="explore-tile-title display">{svc.title}</span>
            </button>
          ))}
        </div>

        <div ref={panel} className="explore-panel" role="tabpanel" aria-label={s.title}>
          <div className="explore-copy">
            <span className="mono red" data-anim>
              0{open + 1} / 0{services.length}
            </span>
            <h2 className="display display-lg" data-anim>
              {s.title}
            </h2>
            <p className="lead" data-anim>
              {s.body}
            </p>
            <ul className="explore-list">
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
          <div className="explore-visual" data-anim>
            <Img src={open === 0 ? servicePreview : s.image} sizes="(max-width: 900px) 100vw, 45vw" />
            <span className="sticker sticker--red" style={{ left: 20, top: 20, rotate: "-6deg" }}>
              {s.short}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
