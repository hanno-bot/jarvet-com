import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Jarvet Consulting — Strategic Consulting for Modern Leaders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f1b2d 0%, #1a2d4a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            color: "#c9a84c",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            marginBottom: 24,
          }}
        >
          Strategic Consulting
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Turning Challenges
          <br />
          into Opportunities.
        </div>
        <div
          style={{
            color: "#94a3b8",
            fontSize: 24,
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          Bespoke strategic consulting with Wardley Mapping for immediate impact and long-term success.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 48,
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              backgroundColor: "#c9a84c",
              color: "#0f1b2d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            HJ
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#ffffff", fontSize: 20, fontWeight: 600 }}>
              Hanno Jarvet
            </span>
            <span style={{ color: "#64748b", fontSize: 16 }}>
              jarvet.com
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
