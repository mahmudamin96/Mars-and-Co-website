"use client";

import { gsap, useGsap } from "../motion";
import { Img } from "../ui";
import { playIcon, reelPoster } from "@/lib/content";

/** "PLAY ▶ REEL" band: the frame grows to full-bleed and the words slide apart as you scroll. */
export default function Reel() {
  const ref = useGsap<HTMLElement>((el) => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 85%", end: "center center", scrub: 1 },
      });
      tl.fromTo(".reel-frame", { clipPath: "inset(12% 16% 12% 16% round 32px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none" }, 0)
        .from(".reel-play", { xPercent: 70, ease: "none" }, 0)
        .from(".reel-word--r", { xPercent: -70, ease: "none" }, 0)
        .from(".reel-media", { scale: 1.25, ease: "none" }, 0);
    });
    gsap.to(".reel-icon", { rotate: 360, duration: 14, repeat: -1, ease: "none" });
  });

  return (
    <section ref={ref} className="reel">
      <div className="reel-frame">
        <div className="reel-media">
          <Img src={reelPoster} sizes="100vw" />
        </div>
        <div className="reel-shade" />
        <div className="reel-row">
          <span className="reel-word reel-play">Play</span>
          <button className="reel-btn" aria-label="Play showreel">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={playIcon} alt="" width={165} height={261} />
            <svg className="reel-icon" viewBox="0 0 200 200" aria-hidden>
              <defs>
                <path id="reelCircle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
              </defs>
              <text>
                <textPath href="#reelCircle">WATCH THE SHOWREEL • WATCH THE SHOWREEL • </textPath>
              </text>
            </svg>
          </button>
          <span className="reel-word reel-word--r">Reel</span>
        </div>
        <p className="reel-caption">Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
      </div>
    </section>
  );
}
