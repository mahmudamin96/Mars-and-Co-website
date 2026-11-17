import type { Metadata } from "next";
import { Montserrat, Fraunces, Instrument_Sans, DM_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import "./layout.css";
import "./sections.css";
import "./pages.css";

// Free stand-ins for the licensed brand fonts. Swap for next/font/local when licences are in place:
// Atelia → Montserrat 900 · Larken → Fraunces · Aeonik Pro → Instrument Sans · Aeonik Mono → DM Mono
const display = Montserrat({ subsets: ["latin"], weight: ["800", "900"], variable: "--font-display" });
const serif = Fraunces({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-serif" });
const sans = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: "Mars & Co — Crafting ideas for forward thinking brands",
    template: "%s — Mars & Co",
  },
  description:
    "Mars & Co is a creative studio blending strategy, design and technology to build brands that don't just stand out — they stand for something.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll />
        <Nav />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
