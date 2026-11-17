"use client";

import Link from "next/link";
import { aiIcons, site, socials } from "@/lib/content";
import { gsap, useGsap } from "./motion";
import { Button } from "./ui";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const ref = useGsap<HTMLElement>((el) => {
    // footer content rises out from under the page; giant logo letters bounce up
    gsap.from(el.querySelector(".footer-inner"), {
      yPercent: -30,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "top 30%", scrub: true },
    });
    gsap.from(el.querySelector(".footer-logo"), {
      yPercent: 60,
      scale: 0.92,
      ease: "back.out(1.4)",
      duration: 1.4,
      scrollTrigger: { trigger: el.querySelector(".footer-logo"), start: "top 98%", once: true },
    });
  });

  return (
    <footer ref={ref} className="footer">
      <div className="footer-inner wrap">
        <div className="footer-top">
          <div className="footer-intro">
            <p>{site.footerBlurb}</p>
            <Button href="/contact" variant="outline-light">
              Contact Us
            </Button>
          </div>
          <div className="footer-cols">
            <div>
              <p className="footer-h">Navigation</p>
              <ul>
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="u-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer-h">Social &amp; Portfolio</p>
              <ul>
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="u-link" target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-contact">
              <div>
                <p className="footer-h">Knock Our Door</p>
                <a href={`mailto:${site.footerEmail}`} className="u-link">
                  {site.footerEmail}
                </a>
              </div>
              <div>
                <p className="footer-h">Phone Number</p>
                <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="u-link">
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-logo wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={site.logoWhite} alt="mars&co" width={1240} height={231} />
      </div>

      <div className="footer-bar">
        <div className="wrap footer-bar-inner">
          <p>© 2026 Mars &amp; Co – All Rights Reserved</p>
          <div className="footer-ai">
            <span>Ask AI About Us</span>
            {aiIcons.map((a) => (
              <a key={a.label} href="#" aria-label={`Ask ${a.label} about Mars & Co`} className="footer-ai-icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.src} alt="" width={28} height={28} />
              </a>
            ))}
          </div>
          <a href="#" className="footer-deck">
            Download Company Deck
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M10 3v10m0 0l-4-4m4 4l4-4M4 16h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
