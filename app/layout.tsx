import type { Metadata } from "next";
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
      <head></head>
      <body>
        <TelegramProvider>{children}</TelegramProvider>
      </body>
    </html>
  );
}
