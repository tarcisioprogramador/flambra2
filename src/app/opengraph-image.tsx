import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE, COLORS } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagem Open Graph padrão do site (1200x630). */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: COLORS.background,
          color: COLORS.text,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "rgba(255,107,0,0.25)",
            filter: "blur(120px)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: COLORS.primary,
              fontSize: 44,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            F
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: COLORS.primary }}>
            {SITE_NAME}
          </div>
        </div>
        <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: COLORS.textMuted,
            maxWidth: 820,
            lineHeight: 1.4,
          }}
        >
          Grave tarefas reais da sua rotina com o celular, ajude a treinar a próxima geração de
          robôs e receba até R$ 25 por hora aprovada.
        </div>
        <div style={{ marginTop: 40, fontSize: 26, color: COLORS.accent, fontWeight: 600 }}>
          Cadastro gratuito · Pagamento via PIX
        </div>
      </div>
    ),
    { ...size }
  );
}
