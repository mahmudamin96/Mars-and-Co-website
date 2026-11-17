"use client";

import { industries } from "@/lib/content";
import { gsap, useGsap } from "../motion";
import { Img } from "../ui";
import { BigHeading } from "./Blocks";

/** Industries: on desktop the section pins and the cards scroll sideways; on mobile it's a swipe row. */
export default function Industries() {
  const ref = useGsap<HTMLElement>((el) => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
      const track = el.querySelector<HTMLElement>(".ind-track")!;
      const dist = () => Math.max(0, track.scrollWidth - el.querySelector<HTMLElement>(".ind-viewport")!.clientWidth);
      gsap.to(track, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => "+=" + dist(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      gsap.utils.toArray<HTMLElement>(".ind-card").forEach((c, i) => {
        gsap.set(c, { rotate: i % 2 ? 2 : -2 });
      });
    });
  });

  return (
    <section ref={ref} className="industries">
      <div className="wrap ind-head">
        <BigHeading>{["Industries", "we work with"]}</BigHeading>
        <p className="lead">
          At Mars &amp; Co, we strive to design experiences that not only captivate the eye but also forge authentic relationships,
          ensuring that every interaction leaves a lasting impression.
        </p>
      </div>
      <div className="ind-viewport">
        <div className="ind-track">
          {industries.map((ind, i) => (
            <article key={ind.title} className="ind-card">
              <div className="ind-img">
                <Img src={ind.image} sizes="320px" />
              </div>
              <span className="ind-num mono">0{i + 1}</span>
              <h3 className="serif">{ind.title}</h3>
              <p>{ind.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
