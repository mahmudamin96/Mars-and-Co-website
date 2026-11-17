"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

const DARK_ROUTES = ["/services", "/contact"];

export default function Nav() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dark = DARK_ROUTES.some((r) => pathname.startsWith(r));

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > 200 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu when the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`nav ${dark ? "nav--dark" : ""} ${scrolled ? "nav--scrolled" : ""} ${hidden && !open ? "nav--hidden" : ""}`}>
        <div className="nav-inner">
          <nav className="nav-links" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={`nav-link ${pathname.startsWith(n.href) ? "is-active" : ""}`}>
                <span data-text={n.label}>{n.label}</span>
              </Link>
            ))}
          </nav>
          <Link href="/" className="nav-logo" aria-label="Mars & Co home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.logo} alt="mars&co" width={215} height={40} />
          </Link>
          <Link href="/contact" className="nav-cta">
            <span className="nav-dot" />
            <span data-text="Start a Project">Start a Project</span>
          </Link>
          <button className={`nav-burger ${open ? "is-open" : ""}`} onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Menu">
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <ul>
          {[{ label: "Home", href: "/" }, ...nav, { label: "Contact", href: "/contact" }].map((n, i) => (
            <li key={n.href} style={{ transitionDelay: open ? `${0.1 + i * 0.06}s` : "0s" }}>
              <Link href={n.href} tabIndex={open ? 0 : -1}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <a href={`mailto:${site.email}`} className="menu-mail" tabIndex={open ? 0 : -1}>
          {site.email}
        </a>
      </div>
    </>
  );
}
