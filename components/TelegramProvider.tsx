"use client";

import { type PropsWithChildren, useEffect } from "react";
import { init } from "@tma.js/sdk-react";

export function TelegramProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    try {
      init();
    } catch (error) {
      console.error("Failed to initialize Telegram SDK:", error);
    }
  }, []);

  return <>{children}</>;
}
