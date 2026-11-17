"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { services, work } from "@/lib/content";
import { gsap, useGsap } from "../motion";
import { Button, Img } from "../ui";
import { WorkCard } from "./Blocks";

/** Red block: huge service names (hover shows a floating preview) + featured work grid. */
export default function ServicesBlock() {
  const [active, setActive] = useState<number | null>(null);
  const preview = useRef<HTMLDivElement>(null);

  const ref = useGsap<HTMLElement>((el) => {
    el.querySelectorAll<HTMLElement>(".svc-row").forEach((row, i) => {
      gsap.from(row.querySelector(".svc-name"), {
        xPercent: i % 2 ? 12 : -12,
        autoAlpha: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: row, start: "top 92%", once: true },
      });
    });
    gsap.from(".svc-work .work-card", {
      y: 80,
      autoAlpha: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.12,
      scrollTrigger: { trigger: ".svc-work", start: "top 85%", once: true },
    });
  });

  const onMove = (e: React.PointerEvent) => {
    const p = preview.current;
    if (!p) return;
    gsap.to(p, { x: e.clientX, y: e.clientY, duration: 0.6, ease: "power3" });
  };

  return (
    <section ref={ref} className="svc-block" onPointerMove={onMove}>
      <div className="wrap">
        <ul
          className="svc-list"
          onPointerLeave={() => setActive(null)}
          onPointerEnter={(e) => preview.current && gsap.set(preview.current, { x: e.clientX, y: e.clientY })}
        >
          {services.map((s, i) => (
            <li key={s.slug} className="svc-row" onPointerEnter={() => setActive(i)}>
              <Link href={`/services#${s.slug}`} className="svc-link">
                <span className="svc-num mono">0{i + 1}</span>
                <span className="svc-name display">{s.title}</span>
                <span className="svc-short">{s.short}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="svc-work">
          {work.slice(0, 4).map((w) => (
            <WorkCard key={w.slug} w={w} />
          ))}
        </div>
        <div className="svc-more">
          <Button href="/work" variant="dark">
            See all projects
          </Button>
        </div>
      </div>

      <div ref={preview} className={`svc-preview ${active !== null ? "is-on" : ""}`} aria-hidden>
        {services.map((s, i) => (
          <div key={s.slug} className="svc-preview-img" style={{ opacity: active === i ? 1 : 0 }}>
            <Img src={s.image} sizes="320px" />
          </div>
        ))}
      </div>
    </section>
  );
}
