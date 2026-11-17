"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";
import { gsap } from "../motion";
import { Img } from "../ui";
import { BigHeading } from "./Blocks";

const tilts = [-3, 2.5, -1.5];

/** Stack of tilted cards; click or wait to deal the next one to the front. */
export default function Testimonials() {
  const [front, setFront] = useState(0);
  const stack = useRef<HTMLDivElement>(null);
  const n = testimonials.length;

  const next = () => setFront((f) => (f + 1) % n);

  useEffect(() => {
    const id = window.setInterval(next, 6500);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [front]);

  useEffect(() => {
    const cards = stack.current?.querySelectorAll<HTMLElement>(".t-card");
    if (!cards) return;
    cards.forEach((c, i) => {
      const depth = (i - front + n) % n;
      gsap.to(c, {
        zIndex: n - depth,
        y: depth * 18,
        scale: 1 - depth * 0.05,
        rotate: depth === 0 ? 0 : tilts[i % tilts.length] * (depth + 1),
        opacity: depth > 2 ? 0 : 1,
        duration: 0.8,
        ease: "back.out(1.4)",
      });
    });
  }, [front, n]);

  return (
    <section className="testimonials section">
      <div className="wrap">
        <div className="t-head">
          <BigHeading>{["What our", "clients say"]}</BigHeading>
          <div className="t-rating">
            <div className="t-stars" aria-hidden>
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <p>
              <strong>4.7</strong>/5 average rating
            </p>
          </div>
        </div>

        <div className="t-panel">
          <div className="t-stack" ref={stack} onClick={next} role="button" tabIndex={0} aria-label="Next testimonial" onKeyDown={(e) => e.key === "Enter" && next()}>
            {testimonials.map((t, i) => (
              <figure key={t.name} className="t-card" aria-hidden={i !== front}>
                <svg className="t-quote" viewBox="0 0 70 88" aria-hidden>
                  <path d="M0 88V52C0 22 12 6 34 0l4 10C24 16 18 28 18 44h16v44H0zm36 0V52c0-30 12-46 34-52l4 10C60 16 54 28 54 44h16v44H36z" fill="currentColor" />
                </svg>
                <blockquote className="serif">{t.quote}</blockquote>
                <figcaption>
                  <span className="t-avatar">
                    <Img src={t.avatar} sizes="56px" />
                  </span>
                  <span>
                    <strong>{t.name}</strong>
                    <span className="red">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="t-dots">
            {testimonials.map((t, i) => (
              <button key={t.name} className={i === front ? "is-on" : ""} onClick={() => setFront(i)} aria-label={`Show testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
