"use client";

import Script from "next/script";

export default function LiveChatWidget() {
  return (
    <Script
      id="livechat-widget"
      src="https://core.livechat.tj/widget/IgW317eT_p"
      strategy="afterInteractive"
      onLoad={() => {
        // Скрипт виджета инициализируется через `window.onload = function() { ... }`.
        // В Next.js к моменту загрузки скрипта событие load браузера уже завершилось,
        // поэтому браузер никогда не вызовет window.onload автоматически.
        // Вызываем инициализацию вручную:
        if (typeof window !== "undefined" && typeof window.onload === "function") {
          const init = window.onload;
          window.onload = null;
          init.call(window, new Event("load"));
        }
      }}
    />
  );
}
