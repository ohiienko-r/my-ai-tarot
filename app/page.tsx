"use client";

import { mainButton, useSignal, useLaunchParams } from "@tma.js/sdk-react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const launchParams = useLaunchParams();
  const isMainButtonVisible = useSignal(mainButton.isVisible);
  const [count, setCount] = useState(0);

  useEffect(() => {
    mainButton.setParams({
      text: `Натиснуто ${count} раз`,
      isVisible: true,
      isEnabled: true,
    });

    const handleClick = () => {
      setCount((prev) => prev + 1);
    };

    mainButton.onClick(handleClick);

    return () => {
      mainButton.offClick(handleClick);
    };
  }, [count]);

  const user = launchParams.tgWebAppData?.user;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Вітаємо в Mini App! 👋
      </h1>

      {user && (
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <p>
            <strong>Ім'я:</strong> {user.first_name} {user.last_name}
          </p>
          {user.username && (
            <p>
              <strong>Username:</strong> @{user.username}
            </p>
          )}
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          {user.language_code && (
            <p>
              <strong>Мова:</strong> {user.language_code}
            </p>
          )}
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: "18px", marginBottom: "12px" }}>
          Лічильник: <strong>{count}</strong>
        </p>
        <p style={{ color: "#666", fontSize: "14px" }}>
          Натисніть на головну кнопку внизу екрану
        </p>
        <p style={{ color: "#999", fontSize: "12px", marginTop: "8px" }}>
          Main Button {isMainButtonVisible ? "видима" : "прихована"}
        </p>
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "16px",
          border: "1px dashed #ccc",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ fontSize: "18px", marginBottom: "12px" }}>
          📱 Доступні компоненти SDK:
        </h2>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
          <li>mainButton - головна кнопка</li>
          <li>backButton - кнопка назад</li>
          <li>themeParams - параметри теми</li>
          <li>viewport - керування viewport</li>
          <li>initData - дані ініціалізації</li>
          <li>cloudStorage - хмарне сховище</li>
          <li>hapticFeedback - тактильний відгук</li>
          <li>popup - спливаючі вікна</li>
        </ul>
      </div>
    </div>
  );
}
