"use client";
import { useEffect } from "react";
import { init } from "@tma.js/sdk-react";

export default function Page() {
  useEffect(() => {
    init();
  }, []);

  return (
    <main className="p-6 text-center">
      <h1 className="font-bold text-2xl">Hi👋</h1>
      <p className="mt-2 text-gray-500">We're working on it.</p>
    </main>
  );
}
