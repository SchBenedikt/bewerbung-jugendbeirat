import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Bewerbung Jugendbeirat 2026 - Vinzenz & Benedikt Schächner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [bangers, nunito] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/bangers/v24/FeVQS0BTqb0h60ACH5BQ2Ixi.ttf"
    ).then((r) => r.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/nunito/v26/XRXV3I6Li01BKofINeaB.woff2"
    ).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0B132B",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 800,
            height: 800,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background:
              "conic-gradient(from 0deg, rgba(230,57,70,0.15), rgba(255,209,102,0.08), rgba(230,57,70,0.15))",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
            gap: 12,
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#E63946",
              color: "white",
              fontSize: 28,
              fontFamily: "'Bangers'",
              letterSpacing: 4,
              padding: "8px 32px",
              clipPath:
                "polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%)",
              transform: "rotate(-2deg)",
            }}
          >
            ★ DEUTSCHER MULTIMEDIAPREIS ★
          </div>
          <div
            style={{
              fontSize: 100,
              fontFamily: "'Bangers'",
              color: "#F1FAEE",
              letterSpacing: 4,
              textShadow: "6px 6px 0 #E63946, 10px 10px 0 rgba(0,0,0,0.3)",
              lineHeight: 1,
              marginTop: 8,
              textAlign: "center",
            }}
          >
            BEWERBUNG
          </div>
          <div
            style={{
              fontSize: 64,
              fontFamily: "'Bangers'",
              color: "#FFD166",
              letterSpacing: 8,
              textShadow: "4px 4px 0 #0B132B",
              lineHeight: 1,
            }}
          >
            JUGENDBEIRAT 2026
          </div>
          <div
            style={{
              width: 120,
              height: 4,
              background: "#E63946",
              marginTop: 8,
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 32,
              fontFamily: "'Nunito'",
              color: "rgba(255,255,255,0.8)",
              fontWeight: 600,
              marginTop: 8,
            }}
          >
            Vinzenz &amp; Benedikt Schächner
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Bangers", data: bangers, weight: 400 },
        { name: "Nunito", data: nunito, weight: 600 },
      ],
    }
  );
}
