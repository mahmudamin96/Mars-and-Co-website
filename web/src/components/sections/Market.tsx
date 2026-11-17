"use client";

import { marketIcon } from "@/lib/content";
import { SplitLines, Stickers, gsap, useGsap } from "../motion";

/** "Mars & Co ▢ Market" red band with a big serif promise. */
export default function Market() {
  const ref = useGsap<HTMLElement>(() => {
    gsap.from(".market-icon", {
      rotate: -20,
      scale: 0.6,
      duration: 1.4,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: { trigger: ".market-icon", start: "top 85%", once: true },
    });
    gsap.to(".market-icon", { y: -12, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
  });

  return (
    <section ref={ref} className="market">
      <div className="wrap market-inner">
        <div className="market-label">
          <span className="display">Mars &amp; Co</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="market-icon" src={marketIcon} alt="" width={188} height={81} />
          <span className="display market-faded">Market</span>
        </div>
        <Stickers className="market-copy">
          <SplitLines as="p" className="serif market-text">
            Fueled by innovation, collaboration, and strategic insights, we deliver impactful solutions.
          </SplitLines>
          <span className="sticker sticker--white" style={{ left: "6%", top: "-6%", rotate: "-6deg" }}>
            Nerding out on design
          </span>
          <span className="sticker" style={{ right: "8%", bottom: "-4%", rotate: "5deg" }}>
            The plot thickens
          </span>
        </Stickers>
      </div>
    </section>
  );
}
