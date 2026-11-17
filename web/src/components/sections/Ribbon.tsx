import { Marquee } from "../motion";

const words = ["Branding", "Experience Design", "Marketing", "Content", "Tech Advisory", "Good looks included"];

function Star() {
  return (
    <svg className="ribbon-star" viewBox="0 0 40 40" aria-hidden>
      <path
        d="M20 0c1.6 9.6 4.4 14.8 10 17.2C35.6 19.6 38 20 40 20c-2 0-4.4.4-10 2.8C24.4 25.2 21.6 30.4 20 40c-1.6-9.6-4.4-14.8-10-17.2C4.4 20.4 2 20 0 20c2 0 4.4-.4 10-2.8C15.6 14.8 18.4 9.6 20 0z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Tilted red band of scrolling words (two26-style ribbon, in Mars & Co red). */
export default function Ribbon({ reverse = false, tilt = -3 }: { reverse?: boolean; tilt?: number }) {
  return (
    <div className="ribbon" style={{ rotate: `${tilt}deg` }} aria-label={words.join(", ")}>
      <Marquee speed={28} reverse={reverse}>
        {words.map((w) => (
          <span key={w} className="ribbon-item">
            {w}
            <Star />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
