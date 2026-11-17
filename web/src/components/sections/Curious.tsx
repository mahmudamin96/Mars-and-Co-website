"use client";

import { useEffect, useRef, useState } from "react";
import { faqs } from "@/lib/content";
import { gsap } from "../motion";
import { ArrowRight } from "../ui";

/** Dark "Curious?" band. "View all FAQs" opens a chat-style FAQ (two26-style) right in place. */
export default function Curious({ startOpen = false }: { startOpen?: boolean }) {
  const [open, setOpen] = useState(startOpen);
  const [q, setQ] = useState(0);
  const body = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useEffect(() => {
    const el = body.current;
    if (!el) return;
    if (first.current) {
      first.current = false;
      gsap.set(el, { height: open ? "auto" : 0 });
      return;
    }
    gsap.to(el, { height: open ? "auto" : 0, duration: 0.9, ease: "expo.inOut" });
    if (open) gsap.from(el.querySelectorAll(".faq-q"), { x: -30, autoAlpha: 0, stagger: 0.05, duration: 0.6, delay: 0.3, ease: "expo.out" });
  }, [open]);

  return (
    <section className="curious" id="faq">
      <div className="wrap">
        <div className="curious-head">
          <div>
            <h2 className="display display-lg">Curious?</h2>
            <p className="lead">We&apos;ve answered the ones people ask the most—before you ask them too.</p>
          </div>
          <button className="curious-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            <span>{open ? "Close" : "View All FAQs"}</span>
            <span className={`curious-arrow ${open ? "is-open" : ""}`}>
              <ArrowRight size={40} />
            </span>
          </button>
        </div>

        <div ref={body} className="curious-body" style={{ overflow: "hidden" }}>
          <div className="faq">
            <ul className="faq-list">
              {faqs.map((f, i) => (
                <li key={f.q}>
                  <button className={`faq-q ${q === i ? "is-on" : ""}`} onClick={() => setQ(i)} aria-pressed={q === i}>
                    {f.q}
                  </button>
                </li>
              ))}
            </ul>
            <div className="faq-chat" aria-live="polite">
              <p className="faq-bubble faq-bubble--q">{faqs[q].q}</p>
              <div className="faq-answer" key={q}>
                <p className="faq-bubble faq-bubble--a">{faqs[q].a}</p>
                <span className="faq-badge display">m&amp;c</span>
              </div>
            </div>
          </div>

          <form className="faq-form" onSubmit={(e) => e.preventDefault()}>
            <div>
              <p className="faq-form-title">Still have questions?</p>
              <p className="faq-form-sub">Drop us a message</p>
            </div>
            <div className="faq-form-row">
              <div className="field">
                <label htmlFor="faq-email">Email</label>
                <input id="faq-email" className="input" type="email" placeholder="Type your email" required />
              </div>
              <div className="field">
                <label htmlFor="faq-query">What can we help with?</label>
                <input id="faq-query" className="input" placeholder="Write your query..." required />
              </div>
              <button className="btn btn--red btn--plain" type="submit">
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
