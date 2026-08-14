"use client";

import { useState } from "react";
import { COMPANY_INFO, CONTACT, ANALYTICS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", subject: "", message: "" };

/**
 * Formulário de contato com validação client-side.
 * Sem backend: envia por mailto (abre o cliente de e-mail) e mostra
 * confirmação. Pronto para conectar a uma API/form service depois.
 */
export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (form.name.trim().length < 2) next.name = "Informe seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Informe um e-mail válido.";
    if (form.subject.trim().length < 3) next.subject = "Informe o assunto.";
    if (form.message.trim().length < 10) next.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!validate()) return;

    trackEvent(ANALYTICS.events.contactSubmit, { subject: form.subject });

    const mailto = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
      `${CONTACT.subject}: ${form.subject}`
    )}&body=${encodeURIComponent(
      `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`
    )}`;

    try {
      window.location.href = mailto;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (hasError?: string) =>
    `w-full rounded-xl border bg-surface px-4 py-3 text-text placeholder:text-textMuted focus:outline-none focus:ring-2 ${
      hasError
        ? "border-red-500/60 focus:ring-red-500/40"
        : "border-white/10 focus:border-primary focus:ring-primary/40"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-text">
            Nome
          </label>
          <input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass(errors.name)}
            placeholder="Seu nome"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            autoComplete="name"
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="mt-1 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-text">
            E-mail
          </label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass(errors.email)}
            placeholder="voce@email.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="mt-1 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-text">
          Assunto
        </label>
        <input
          id="contact-subject"
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={inputClass(errors.subject)}
          placeholder="Ex.: Dúvida sobre o programa"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
        />
        {errors.subject && (
          <p id="contact-subject-error" role="alert" className="mt-1 text-xs text-red-400">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-text">
          Mensagem
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClass(errors.message)}
          placeholder="Escreva sua mensagem…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="mt-1 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {status === "success" && (
        <p role="status" className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
          {CONTACT.successMessage}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          Não foi possível abrir seu e-mail. Envie diretamente para {COMPANY_INFO.email}.
        </p>
      )}

      <button
        type="submit"
        className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
