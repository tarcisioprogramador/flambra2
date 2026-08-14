import Link from "next/link";
import { CTAButton } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Página não encontrada",
  description:
    "A página que você procura não existe ou foi movida. Volte para a página inicial ou explore o blog da Flambra.",
  path: "/nao-encontrada",
  noindex: true,
});

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-7xl font-black text-primary" aria-hidden="true">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold text-text sm:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-textMuted">
        O endereço pode ter sido alterado ou removido. Que tal voltar para a página inicial ou
        explorar nossos artigos?
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <CTAButton ctaType="cadastro" location="404">
          Quero começar a ganhar
        </CTAButton>
        <Link
          href="/"
          className="rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Voltar para a página inicial
        </Link>
      </div>
      <nav aria-label="Páginas úteis" className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        <Link href="/blog" className="text-textMuted transition-colors hover:text-primary">
          Blog
        </Link>
        <Link href="/como-funciona" className="text-textMuted transition-colors hover:text-primary">
          Como funciona
        </Link>
        <Link href="/perguntas-frequentes" className="text-textMuted transition-colors hover:text-primary">
          Perguntas frequentes
        </Link>
        <Link href="/contato" className="text-textMuted transition-colors hover:text-primary">
          Contato
        </Link>
      </nav>
    </section>
  );
}
