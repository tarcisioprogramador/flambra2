import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { VideoCarouselSection } from "@/components/sections/VideoCarouselSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { AffiliateSection } from "@/components/sections/AffiliateSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Flambra - Renda Extra Gravando Tarefas do Dia a Dia",
  description:
    "Transforme sua rotina em renda extra gravando tarefas do dia a dia com o celular. Receba até R$ 25 por hora aprovada via PIX na Flambra.",
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
