import Hero from "@/components/sections/Hero";
import Ribbon from "@/components/sections/Ribbon";
import Reel from "@/components/sections/Reel";
import { AboutIntro, LogoStrip, Stats } from "@/components/sections/Blocks";
import ServicesBlock from "@/components/sections/ServicesBlock";
import Industries from "@/components/sections/Industries";
import Market from "@/components/sections/Market";
import Testimonials from "@/components/sections/Testimonials";
import Curious from "@/components/sections/Curious";
import Insights from "@/components/sections/Insights";
import StartProject from "@/components/sections/StartProject";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="ribbon-zone">
        <Ribbon />
      </div>
      <Reel />
      <AboutIntro />
      <LogoStrip />
      <Stats />
      <ServicesBlock />
      <Industries />
      <Market />
      <Testimonials />
      <Curious />
      <Insights />
      <StartProject />
    </>
  );
}
