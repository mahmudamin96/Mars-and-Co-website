import type { Metadata } from "next";
import WorkGrid from "@/components/sections/WorkGrid";
import Curious from "@/components/sections/Curious";
import { SplitLines, Stickers } from "@/components/motion";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected branding, web and marketing projects by Mars & Co.",
};

export default function WorkPage() {
  return (
    <>
      <section className="work-page wrap">
        <div className="work-top">
          <Stickers className="work-title-wrap" immediate>
            <SplitLines as="h1" className="display display-lg" immediate>
              Selected work
            </SplitLines>
            <span className="sticker sticker--red" style={{ left: "62%", top: "-18px", rotate: "8deg" }}>
              No funny business
            </span>
          </Stickers>
        </div>
        <WorkGrid />
      </section>
      <Curious />
    </>
  );
}
