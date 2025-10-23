"use client";

import {
  useLaunchParams,
  backButton,
  themeParams,
  miniApp,
  initData,
  settingsButton,
  closingBehavior,
  swipeBehavior,
  viewport,
} from "@tma.js/sdk-react";
import { useEffect } from "react";

export default function MiniApp() {
  const launchParams = useLaunchParams();

  useEffect(() => {
    initData.restore();

    if (!backButton.isSupported() || !miniApp.isSupported()) {
      throw new Error("ERR_NOT_SUPPORTED");
    }

    if (closingBehavior.mount.isAvailable()) {
      closingBehavior.mount();
      closingBehavior.enableConfirmation();
    }

    if (swipeBehavior.mount.isAvailable()) {
      swipeBehavior.mount();
      swipeBehavior.disableVertical();
    }

    if (viewport.mount.isAvailable()) {
      viewport.mount();
      viewport.expand();
    }

    if (themeParams.mount.isAvailable()) {
      themeParams.mount();
    }

    if (miniApp.mount.isAvailable()) {
      miniApp.mount();
      miniApp.setHeaderColor("#0F062A");
      miniApp.setBgColor("#0F062A");
      miniApp.setBottomBarColor("#0F062A");
    }

    if (backButton.mount.isAvailable()) {
      backButton.mount();
    }

    if (settingsButton.mount.isAvailable()) {
      settingsButton.mount();
    }

    return () => {
      closingBehavior.unmount();
      backButton.unmount();
      themeParams.unmount();
      miniApp.unmount();
    };
  }, []);

  const user = launchParams.tgWebAppData?.user;

  return (
    <div className="flex justify-center items-center gap-2 p-2 size-full">
      <h1 className="font-semibold text-xl">Welcome, {user?.first_name} 👋</h1>
      <p>Right now we're busy cooking something new for you! Stay tuned!</p>
    </div>
  );
}
