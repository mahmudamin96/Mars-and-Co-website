import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import Curious from "@/components/sections/Curious";
import { SplitLines, Reveal, Stickers } from "@/components/motion";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Mars & Co. Let's grab some coffee.",
};

export default function ContactPage() {
  return (
    <>
      <section className="contact">
        <div className="wrap contact-inner">
          <div className="contact-copy">
            <Stickers immediate delay={1}>
              <SplitLines as="h1" className="display display-lg" immediate>
                Get in touch with us
              </SplitLines>
              <span className="sticker sticker--red" style={{ right: "4%", top: "-22px", rotate: "7deg" }}>
                We reply fast
              </span>
            </Stickers>
            <Reveal as="p" className="contact-lead" delay={0.3}>
              Working together takes some practice to get in sync, but once we find our rhythm, the result can be magical!
            </Reveal>
            <Reveal className="contact-coffee" delay={0.45}>
              <p>Let&apos;s grab some coffee</p>
              <address>We are based in {site.address}</address>
            </Reveal>
          </div>
          <ContactForm />
        </div>
      </section>
      <Curious />
    </>
  );
}
