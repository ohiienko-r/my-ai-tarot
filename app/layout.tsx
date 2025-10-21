import type { Metadata } from "next";
import Script from "next/script";
import { TelegramProvider } from "@/components/TelegramProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "My AI Tarot",
  description: "Your personal daily Tarot!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <TelegramProvider>{children}</TelegramProvider>
      </body>
    </html>
  );
}
