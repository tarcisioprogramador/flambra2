import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { VideoCarouselSection } from "@/components/sections/VideoCarouselSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { AffiliateSection } from "@/components/sections/AffiliateSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Flambra - Ganhe dinheiro gravando tarefas do dia a dia",
  description:
    "Grave tarefas reais da sua rotina com o celular, ajude a treinar a proxima geracao de robos e receba ate R$ 25 por hora aprovada.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <MarqueeSection />
      <HeroSection />
      <VideoCarouselSection />
      <CommunitySection />
      <AffiliateSection />
      <FeaturesSection />
      <FAQSection />
    </>
  );
}
