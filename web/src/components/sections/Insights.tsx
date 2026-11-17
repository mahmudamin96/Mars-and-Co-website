import { insights } from "@/lib/content";
import { Reveal } from "../motion";
import { ArrowIcon, Img } from "../ui";
import { BigHeading } from "./Blocks";

export default function Insights() {
  return (
    <section className="insights section">
      <div className="wrap">
        <BigHeading>{["Insights that", "inspire innovation"]}</BigHeading>
      </div>
      <Reveal className="insights-row wrap" stagger={0.12}>
        {insights.map((p) => (
          <a key={p.title} href="#" className="insight">
            <div className="insight-img">
              <Img src={p.image} sizes="(max-width: 800px) 90vw, 40vw" />
              <span className="insight-arrow">
                <ArrowIcon size={18} />
              </span>
            </div>
            <div className="insight-tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <h3 className="serif">{p.title}</h3>
            <p>{p.text}</p>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
