"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ background: "#05040d", color: "#f8fafc", fontFamily: "system-ui, sans-serif", margin: 0 }}>
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "80px 24px" }}>
          <h1 style={{ fontSize: "2rem" }}>Something went off course</h1>
          <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>The site hit a snag. Try again to reload this page.</p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              marginTop: 24,
              border: 0,
              borderRadius: 999,
              padding: "12px 20px",
              background: "#5ec8d8",
              color: "#05040d",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
