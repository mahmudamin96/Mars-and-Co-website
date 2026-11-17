"use client";

import { about } from "@/lib/content";
import { gsap, useGsap } from "../motion";
import { Button, Img } from "../ui";

/** "Meet the craftspeople": dark section, grayscale portraits that colour up on hover with a name tag. */
export default function Team() {
  const ref = useGsap<HTMLElement>((el) => {
    gsap.from(el.querySelectorAll(".talent"), {
      y: 80,
      rotate: (i: number) => (i % 2 ? 4 : -4),
      autoAlpha: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: { each: 0.07, grid: "auto", from: "start" },
      scrollTrigger: { trigger: el.querySelector(".team-grid"), start: "top 80%", once: true },
    });
  });

  return (
    <section ref={ref} className="team">
      <div className="wrap">
        <div className="team-head">
          <h2 className="display display-lg">
            Meet the
            <br />
            craftspeople
          </h2>
          <p>A multidisciplinary team of strategists, designers, developers, and storytellers creating brands and digital experiences that make a lasting impact.</p>
        </div>
        <div className="team-grid">
          {about.team.map((t) => (
            <figure key={t.name} className="talent">
              <Img src={t.image} alt={t.name} sizes="(max-width: 700px) 50vw, 30vw" />
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="team-more">
          <Button href="/about" variant="outline-light">
            View Full Team
          </Button>
        </div>
      </div>
    </section>
  );
}
