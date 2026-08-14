import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE, COLORS } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagem Twitter Card padrão (1200x630). */
export default function TwitterImage() {
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
        <div style={{ marginTop: 32, fontSize: 30, color: COLORS.textMuted, maxWidth: 820 }}>
          Receba até R$ 25 por hora aprovada gravando tarefas do dia a dia com o celular.
        </div>
      </div>
    ),
    { ...size }
  );
}
