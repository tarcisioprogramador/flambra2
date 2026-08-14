"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/Button";

const STEPS = [
  {
    number: 1,
    title: "Crie sua conta",
    description: "Ative seu perfil de afiliado gratuitamente",
  },
  {
    number: 2,
    title: "Compartilhe seu link",
    description: "Todo cadastro feito por ele fica ligado a você",
  },
  {
    number: 3,
    title: "Receba pelos indicados",
    description: "Cada hora aprovada gera R$ 2,50 de bônus",
  },
];

export function AffiliateSection() {
  const [people, setPeople] = useState(5);
  const [hours, setHours] = useState(3);

  const monthly = people * hours * 30 * 2.5;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Ganhe indicando pessoas"
          title="Mesmo sem gravar"
          description="Não quer gravar ou não tem um celular compatível? Sem problemas. Compartilhe seu link e ganhe bônus pelas horas aprovadas dos seus indicados."
        />

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
          {/* Lado esquerdo - Steps + Valor */}
          <div>
            <div className="rounded-2xl border border-white/10 bg-surface p-6">
              <p className="text-sm text-textMuted">
                Cada pessoa que entrar pelo seu link fica vinculada a você, e as
                horas aprovadas dela geram bônus automaticamente.
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">R$ 2,50</span>
                <span className="text-sm text-textMuted">
                  por hora aprovada dos seus indicados
                </span>
              </div>

              <div className="mt-8 space-y-6">
                {STEPS.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text">{step.title}</h3>
                      <p className="mt-1 text-sm text-textMuted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <CTAButton size="lg" ctaType="indicacao" location="affiliate-section">
                  Quero indicar e ganhar
                </CTAButton>
              </div>
            </div>
          </div>

          {/* Lado direito - Simulador */}
          <div>
            <div className="rounded-2xl border border-white/10 bg-surface p-6">
              <h3 className="text-lg font-bold text-text">
                Simule seu bônus por mês
              </h3>
              <p className="mt-1 text-sm text-textMuted">
                Estimativa mensal baseada em horas aprovadas
              </p>

              <div className="mt-6 rounded-xl bg-primary/10 p-6 text-center">
                <p className="text-sm text-textMuted">Estimativa mensal</p>
                <p className="mt-1 text-4xl font-bold text-primary">
                  R${" "}
                  {monthly.toLocaleString("pt-BR", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </p>
                <p className="mt-1 text-xs text-textMuted">
                  {people} pessoas indicadas × {hours}h por dia
                </p>
              </div>

              {/* Slider: Pessoas */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="affiliate-people"
                    className="text-sm font-medium text-text"
                  >
                    Pessoas indicadas
                  </label>
                  <span className="text-sm font-bold text-primary">{people}</span>
                </div>
                <input
                  id="affiliate-people"
                  type="range"
                  min={1}
                  max={20}
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                  className="mt-2 w-full accent-primary"
                />
              </div>

              {/* Slider: Horas */}
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="affiliate-hours"
                    className="text-sm font-medium text-text"
                  >
                    Horas por dia
                  </label>
                  <span className="text-sm font-bold text-primary">{hours}h/dia</span>
                </div>
                <input
                  id="affiliate-hours"
                  type="range"
                  min={1}
                  max={8}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="mt-2 w-full accent-primary"
                />
              </div>

              <p className="mt-4 text-center text-xs text-textMuted">
                {people} × {hours}h/dia × 30 dias — Somente horas aprovadas geram
                bônus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
