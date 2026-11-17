import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServiceExplorer from "@/components/sections/ServiceExplorer";
import { BigHeading } from "@/components/sections/Blocks";
import Ribbon from "@/components/sections/Ribbon";
import StartProject from "@/components/sections/StartProject";
import { Reveal } from "@/components/motion";
import { clientLogos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Branding, experience design, marketing, content and tech advisory from Mars & Co.",
};

const process = [
  { n: "01", t: "Discover", d: "Workshops, research and honest questions to find what makes you different." },
  { n: "02", t: "Define", d: "Strategy, positioning and a clear creative direction everyone agrees on." },
  { n: "03", t: "Design", d: "Identity, interfaces and content crafted, tested and refined." },
  { n: "04", t: "Deliver", d: "Launch, hand-over and the support to keep it growing." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        lines={["We help innovative", "companies show up", "powerfully"]}
        tone="dark"
        stickers={[
          { text: "Five disciplines", style: { left: "8%", top: "12%", rotate: "-6deg" }, variant: "red" },
          { text: "One team", style: { right: "10%", bottom: "14%", rotate: "6deg" }, variant: "white" },
        ]}
      />
      <ServiceExplorer />

      <div className="ribbon-zone ribbon-zone--dark">
        <Ribbon tilt={-2} />
      </div>

      <section className="section process">
        <div className="wrap">
          <BigHeading>{["How we work"]}</BigHeading>
          <Reveal className="process-grid" stagger={0.1}>
            {process.map((p) => (
              <article key={p.n} className="process-step">
                <span className="display">{p.n}</span>
                <h3 className="serif">{p.t}</h3>
                <p>{p.d}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section brands">
        <div className="wrap">
          <Reveal as="p" className="brands-head serif">
            From ambitious early-stage startups to established global enterprises, we help industry leaders scale their digital products.
          </Reveal>
          <Reveal className="brands-grid" stagger={0.04}>
            {clientLogos.map((l) => (
              <div key={l.alt} className="brands-cell">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.alt} width={l.w} height={l.h} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <StartProject />
    </>
  );
}
