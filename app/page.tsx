"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    // @ts-ignore
    const tg = window.Telegram?.WebApp;
    tg?.ready();
    setUser(tg?.initDataUnsafe?.user?.username ?? "Анонім");
  }, []);

  return (
    <main className="p-6 text-center">
      <h1 className="font-bold text-2xl">Привіт, {user} 👋</h1>
      <p className="mt-2 text-gray-500">
        Це Telegram Mini App на Next.js App Router
      </p>
    </main>
  );
}
