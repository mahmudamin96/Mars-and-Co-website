"use client";

import Link from "next/link";
import { clientLogos, stats, type Work } from "@/lib/content";
import { Counter, Marquee, Reveal, ScrubText, gsap, useGsap } from "../motion";
import { ArrowIcon, Button, Img } from "../ui";

/* ---------------- About statement ---------------- */
export function AboutIntro() {
  return (
    <section className="about-intro section">
      <div className="wrap about-intro-inner">
        <Reveal as="p" className="eyebrow">
          About Us
        </Reveal>
        <div className="about-intro-statement">
          <ScrubText className="serif statement" from="#d9dade" to="#181818">
            We Help Ambitious Brands Grow Through Thoughtful Strategy, Powerful Storytelling, And Stunning Visuals That Captivate Users
            And Create Lasting Impact.
          </ScrubText>
          <span className="sticker sticker--red about-st about-st--1">Professional overthinkers</span>
          <span className="sticker about-st about-st--2">Allergic to generic</span>
        </div>
        <Reveal as="p" className="lead about-intro-lead">
          A creative studio developing bold, user-centric digital experiences that enable brands to stand out and expand.
        </Reveal>
        <Reveal>
          <Button href="/about" variant="outline">
            Know More
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Client logos ---------------- */
export function LogoStrip({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`logos ${dark ? "logos--dark" : ""}`}>
      <Marquee speed={45}>
        {clientLogos.map((l) => (
          <span key={l.alt} className="logo-item" style={{ width: l.w, height: l.h }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={l.src} alt={l.alt} width={l.w} height={l.h} />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/* ---------------- Stats ---------------- */
export function Stats() {
  return (
    <section className="stats wrap">
      <Reveal as="p" className="stats-head">
        Pride in creating solutions that are not only visually stunning but also highly functional.
      </Reveal>
      <Reveal className="stats-grid" stagger={0.1}>
        {stats.map((s) => (
          <article key={s.title} className="stat-card">
            <div className="stat-img">
              <Img src={s.image} sizes="(max-width: 700px) 100vw, 25vw" />
              <span className="stat-num display">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
            </div>
            <h3 className="serif">{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

/* ---------------- Work card ---------------- */
export function WorkCard({ w, tall = false }: { w: Work; tall?: boolean }) {
  return (
    <Link href={`/work/${w.slug}`} className={`work-card ${tall ? "work-card--tall" : ""}`} data-cursor="View">
      <div className="work-card-media">
        <Img src={w.image} sizes="(max-width: 800px) 100vw, 50vw" />
      </div>
      <div className="work-card-shade" />
      <span className="tag">{w.tag}</span>
      <div className="work-card-body">
        <div>
          <p className="work-card-sub">{w.subtitle}</p>
          <h3 className="serif">{w.client}</h3>
        </div>
        <span className="work-card-arrow">
          <ArrowIcon size={18} />
        </span>
      </div>
    </Link>
  );
}

/* ---------------- Section heading with sticker ---------------- */
export function BigHeading({ children, className = "", align = "left" }: { children: React.ReactNode; className?: string; align?: "left" | "center" }) {
  const ref = useGsap<HTMLHeadingElement>((el) => {
    gsap.from(el.querySelectorAll(".bh-line"), {
      yPercent: 110,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.1,
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });
  const lines = Array.isArray(children) ? children : [children];
  return (
    <h2 ref={ref} className={`display display-lg big-heading ${className}`} style={{ textAlign: align }}>
      {lines.map((l, i) => (
        <span key={i} className="line-mask">
          <span className="bh-line" style={{ display: "block" }}>
            {l}
          </span>
        </span>
      ))}
    </h2>
  );
}
