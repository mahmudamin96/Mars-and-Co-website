import type { Metadata } from "next";
import { about } from "@/lib/content";
import PageHero from "@/components/sections/PageHero";
import { BigHeading, LogoStrip } from "@/components/sections/Blocks";
import { Marquee, Parallax, Reveal, ScrubText } from "@/components/motion";
import { Button, Img } from "@/components/ui";
import Team from "@/components/sections/Team";
import Ribbon from "@/components/sections/Ribbon";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Mars & Co — a creative studio crafting brands people remember and businesses grow with.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        lines={about.heroTitle}
        tone="red"
        stickers={[
          { text: "Since 2025", style: { left: "14%", top: "18%", rotate: "-7deg" } },
          { text: "Dhaka-born, world-minded", style: { right: "10%", bottom: "16%", rotate: "5deg" }, variant: "white" },
        ]}
      />

      <section className="section">
        <div className="wrap about-lead">
          <Reveal as="p" className="eyebrow">
            About Us
          </Reveal>
          <ScrubText as="h2" className="serif statement" from="#d9dade" to="#181818">
            Crafting Brands That People Remember And Businesses Grow With Since 2025.
          </ScrubText>
          <Reveal as="p" className="lead">
            {about.introBody}
          </Reveal>
        </div>
      </section>

      <section className="section story">
        <div className="wrap">
          <Reveal as="p" className="eyebrow center">
            Finding Story
          </Reveal>
          <BigHeading align="center">Four paths. One story</BigHeading>
          <Parallax className="story-photo">
            <div className="story-photo-inner">
              <Img src={about.teamPhoto} alt="The Mars & Co founders" sizes="100vw" />
            </div>
          </Parallax>
          <Reveal as="p" className="story-text">
            Every great movement begins with a bold idea.{" "}
            {about.founders.map((f) => (
              <span key={f.name}>
                <strong>{f.name}</strong> {f.text}{" "}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section values">
        <div className="wrap">
          <Reveal as="p" className="eyebrow center">
            What we believe
          </Reveal>
          <BigHeading align="center">Made with purpose. All of it</BigHeading>
          <Reveal className="values-grid" stagger={0.08}>
            {about.values.map((v) => (
              <article key={v.title} className="value-card">
                <div className="value-img">
                  <Img src={v.image} sizes="(max-width: 700px) 100vw, 33vw" />
                </div>
                <h3 className="serif">{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <Team />

      <section className="section culture">
        <div className="wrap">
          <BigHeading align="center">People and culture</BigHeading>
          <Parallax className="culture-video">
            <div className="story-photo-inner">
              <Img src={about.culturePhoto} alt="The team at work" sizes="100vw" />
            </div>
          </Parallax>
          <Reveal className="culture-copy">
            <h3 className="serif">Curious minds, sharp pencils and very good coffee.</h3>
            <p className="lead">
              We keep the team tight and the involvement high, so every project gets our full attention — and every Friday gets a long
              lunch.
            </p>
          </Reveal>
        </div>
        <Marquee className="culture-strip" speed={40}>
          {about.culture.map((c) => (
            <figure key={c.label} className="culture-thumb">
              <div className="culture-thumb-img">
                <Img src={c.image} sizes="280px" />
              </div>
              <figcaption className="mono">{c.label}</figcaption>
            </figure>
          ))}
        </Marquee>
        <div className="wrap">
          <Reveal className="stories" stagger={0.08}>
            {about.stories.map((s) => (
              <article key={s.title} className="story-card">
                <Img src={s.image} sizes="(max-width: 700px) 50vw, 20vw" />
                <div className="story-card-shade" />
                <span className="story-play" aria-hidden>
                  ▶
                </span>
                <div className="story-card-meta">
                  <strong>{s.title}</strong>
                  <span>{s.time}</span>
                </div>
              </article>
            ))}
          </Reveal>
          <Reveal className="signature">
            <p className="lead">“We started Mars &amp; Co to make work we’d be proud to put our names on. That’s still the bar.”</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={about.signature} alt="Signature of Atif Ahmed Akkhor" width={160} height={80} />
            <span className="mono">Atif Ahmed Akkhor</span>
          </Reveal>
        </div>
      </section>

      <div className="ribbon-zone">
        <Ribbon reverse tilt={2} />
      </div>

      <section className="careers wrap">
        <Reveal className="careers-card">
          <div className="careers-img">
            <Img src={about.careersPhoto} alt="" sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
          <div className="careers-copy">
            <h2 className="display display-md">Your career journey begins. Let&apos;s make it</h2>
            <p>At Mars &amp; Co, we focus on crafting solutions that empower brands to thrive — and people to grow.</p>
            <Button href="/contact" variant="red">
              Join the Team
            </Button>
          </div>
        </Reveal>
      </section>

      <LogoStrip />
    </>
  );
}
