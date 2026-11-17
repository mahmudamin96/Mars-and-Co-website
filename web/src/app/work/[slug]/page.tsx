import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { caseStudy, work } from "@/lib/content";
import PageHero from "@/components/sections/PageHero";
import { WorkCard } from "@/components/sections/Blocks";
import { Parallax, Reveal, SplitLines } from "@/components/motion";
import { Img } from "@/components/ui";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const w = work.find((x) => x.slug === slug);
  return { title: w ? w.client : "Work" };
}

// Route params are read inside <Suspense> so navigation to a case study stays instant
// (Next 16 Cache Components rule).
export default function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <Suspense fallback={<div className="cs-loading" />}>
      <CaseStudy params={params} />
    </Suspense>
  );
}

// TODO: only SAFF has case-study content in Figma. Other projects reuse the SAFF layout/images
// with their own name until real case studies are written.
async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = work.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const w = work[idx];
  const isSaff = slug === "saff";
  const title = isSaff ? caseStudy.title : [w.client, w.subtitle];
  const meta = isSaff
    ? caseStudy.meta
    : [
        { label: "Client", value: w.client },
        { label: "Year", value: "2025" },
        { label: "Deliverable", value: w.service },
        { label: "Industry", value: w.industry },
        { label: "Region", value: w.region },
      ];
  const next = work[(idx + 1) % work.length];

  return (
    <>
      <PageHero lines={title} />

      <section className="cs wrap">
        <div className="cs-intro">
          <Reveal className="cs-meta" stagger={0.06}>
            {meta.map((m) => (
              <div key={m.label} className="cs-meta-row">
                <span className="mono">{m.label}</span>
                <strong>{m.value}</strong>
              </div>
            ))}
          </Reveal>
          <div className="cs-intro-copy">
            <SplitLines as="h2" className="serif cs-intro-title">
              {caseStudy.intro}
            </SplitLines>
            <Reveal as="p" className="cs-body">
              {caseStudy.introBody}
            </Reveal>
          </div>
        </div>

        <Parallax className="cs-hero-img" amount={10}>
          <div className="story-photo-inner">
            <Img src={isSaff ? caseStudy.hero : w.image} alt={`${w.client} project`} sizes="100vw" priority />
          </div>
        </Parallax>

        {caseStudy.sections.map((s) => (
          <div key={s.label} className="cs-block">
            <div className="cs-text">
              <Reveal as="p" className="mono">
                {s.label}
              </Reveal>
              <SplitLines as="h3" className="cs-statement">
                {s.text}
              </SplitLines>
              {s.body && (
                <Reveal as="p" className="cs-body">
                  {s.body}
                </Reveal>
              )}
            </div>
            {s.images.map((row, r) => (
              <Reveal key={r} className={`cs-row cs-row--${row.length}`} stagger={0.1}>
                {row.map((src) => (
                  <div key={src} className="cs-img">
                    <Img src={src} sizes={row.length > 1 ? "(max-width: 800px) 100vw, 50vw" : "100vw"} />
                  </div>
                ))}
              </Reveal>
            ))}
          </div>
        ))}

        <div className="cs-text">
          <Reveal as="p" className="mono">
            The Results
          </Reveal>
          <SplitLines as="h3" className="cs-statement">
            {caseStudy.results}
          </SplitLines>
        </div>
      </section>

      <section className="cs-next">
        <div className="wrap">
          <h2 className="display display-lg center">What&apos;s next?</h2>
          <WorkCard w={next} tall />
        </div>
      </section>
    </>
  );
}
