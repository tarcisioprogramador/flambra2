const BADGES = [
  { icon: "🇧🇷", text: "Plataforma brasileira" },
  { icon: "📱", text: "Grave usando apenas seu celular" },
  { icon: "⏱️", text: "Ganhe por horas aprovadas" },
  { icon: "💸", text: "Receba via Pix" },
  { icon: "💬", text: "Suporte humano pelo WhatsApp" },
];

export function MarqueeSection() {
  const doubled = [...BADGES, ...BADGES];

  return (
    <div
      className="overflow-hidden border-b border-white/5 bg-surface/50 py-3"
      aria-label="Destaques da plataforma"
    >
      <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-8">
        {doubled.map((badge, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap text-sm text-textMuted"
          >
            <span aria-hidden="true">{badge.icon}</span>
            {badge.text}
          </span>
        ))}
      </div>
    </div>
  );
}
