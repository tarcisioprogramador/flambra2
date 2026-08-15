import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

export function CommunitySection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Por trás da Flambra"
          title="Conheça nossa história"
          description="A Flambra nasceu em 2022 como uma empresa de publicidade e produção de conteúdo. Hoje, essa experiência é usada para coletar vídeos em primeira pessoa e dados do mundo real para empresas de inteligência artificial e robótica."
        />

        <div className="mt-8 text-center">
          <Link
            href="https://flambra.com/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            Conheça nossa história completa →
          </Link>
        </div>
      </div>
    </section>
  );
}
