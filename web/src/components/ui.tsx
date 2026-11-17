import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M10 24h28M28 14l10 10-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "red" | "outline" | "outline-light" | "plain";
  arrow?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "dark", arrow = true, className = "" }: BtnProps) {
  const v = variant === "dark" ? "" : `btn--${variant}`;
  const noArrow = !arrow || variant === "outline" || variant === "outline-light";
  return (
    <Link href={href} className={`btn ${v} ${noArrow ? "btn--plain" : ""} ${className}`}>
      <span>{children}</span>
      {!noArrow && (
        <span className="btn-arrow">
          <ArrowIcon />
        </span>
      )}
    </Link>
  );
}

/** Optimised image that fills its (position: relative) parent. Figma PNGs are huge, so always go through next/image. */
export function Img({
  src,
  alt = "",
  className,
  priority = false,
  sizes = "100vw",
}: {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} style={{ objectFit: "cover" }} />;
}
