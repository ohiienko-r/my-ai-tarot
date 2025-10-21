"use client";

import dynamic from "next/dynamic";

const MiniApp = dynamic(() => import("@/components/MiniApp"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <p>Завантаження...</p>
    </div>
  ),
});

export default function HomePage() {
  return <MiniApp />;
}
