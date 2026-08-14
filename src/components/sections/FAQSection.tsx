import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/Button";
import Link from "next/link";
import { FAQ_MAIN_PAGE } from "@/content/faq";

export function FAQSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tire suas dúvidas"
          description="Respostas rápidas para as perguntas mais comuns sobre o programa."
        />

        <div className="mt-8">
          <FAQAccordion items={FAQ_MAIN_PAGE} />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/perguntas-frequentes"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            Ver todas as perguntas →
          </Link>
        </div>
      </div>
    </section>
  );
}
