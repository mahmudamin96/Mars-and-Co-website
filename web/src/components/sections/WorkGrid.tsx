"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { work } from "@/lib/content";
import { gsap } from "../motion";
import { WorkCard } from "./Blocks";

type Key = "region" | "industry" | "service";
const keys: Key[] = ["region", "industry", "service"];

/** Work page: filter pills (Region / Industry / Service) + 2-column grid that re-animates on filter. */
export default function WorkGrid() {
  const [filters, setFilters] = useState<Record<Key, string>>({ region: "", industry: "", service: "" });
  const [menu, setMenu] = useState<Key | null>(null);
  const grid = useRef<HTMLDivElement>(null);

  const options = useMemo(() => {
    const o = {} as Record<Key, string[]>;
    keys.forEach((k) => (o[k] = Array.from(new Set(work.map((w) => w[k]))).sort()));
    return o;
  }, []);

  const list = work.filter((w) => keys.every((k) => !filters[k] || w[k] === filters[k]));

  useEffect(() => {
    const cards = grid.current?.querySelectorAll(".work-card");
    if (!cards?.length) return;
    gsap.fromTo(cards, { y: 60, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, ease: "expo.out", stagger: 0.08 });
  }, [filters]);

  useEffect(() => {
    const close = () => setMenu(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <>
      <div className="work-filters" onClick={(e) => e.stopPropagation()}>
        <span className="mono work-filter-label">Filter:</span>
        {keys.map((k) => (
          <div key={k} className="work-filter">
            <button className={`work-pill ${filters[k] ? "is-set" : ""}`} onClick={() => setMenu(menu === k ? null : k)} aria-expanded={menu === k}>
              <span>{filters[k] || k}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                <path d="M3.5 5.5L7 9l3.5-3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            {menu === k && (
              <ul className="work-menu">
                <li>
                  <button onClick={() => (setFilters({ ...filters, [k]: "" }), setMenu(null))}>All</button>
                </li>
                {options[k].map((o) => (
                  <li key={o}>
                    <button className={filters[k] === o ? "is-on" : ""} onClick={() => (setFilters({ ...filters, [k]: o }), setMenu(null))}>
                      {o}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div ref={grid} className="work-grid">
        {list.map((w) => (
          <WorkCard key={w.slug} w={w} />
        ))}
        {!list.length && (
          <p className="work-empty">
            Nothing here yet.{" "}
            <button className="red" onClick={() => setFilters({ region: "", industry: "", service: "" })}>
              Clear filters
            </button>
          </p>
        )}
      </div>
    </>
  );
}
