import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

const IMAGES = [
  {
    alt: "Equipe da Flambra celebrando um aniversário no escritório",
    color: "from-primary/20 to-accent/10",
  },
  {
    alt: "Time de futebol amador patrocinado pela Flambra reunido em campo",
    color: "from-accent/20 to-primary/10",
  },
  {
    alt: "Camisa do time de futebol amador patrocinado pela Flambra",
    color: "from-primary/15 to-surface",
  },
  {
    alt: "Equipe da Flambra reunida no escritório em Goiânia",
    color: "from-surface to-primary/15",
  },
];

export function CommunitySection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Por trás da Flambra"
          title="Conheça nossa história"
          description="A Flambra nasceu em 2022 como uma empresa de publicidade e produção de conteúdo. Hoje, essa experiência é usada para coletar vídeos em primeira pessoa e dados do mundo real para empresas de inteligência artificial e robótica."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-surface"
            >
              <div
                className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${img.color} p-6 transition-transform duration-300 group-hover:scale-105`}
              >
                <svg
                  className="h-12 w-12 text-textMuted/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <p className="px-4 py-3 text-xs text-textMuted">{img.alt}</p>
            </div>
          ))}
        </div>

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
