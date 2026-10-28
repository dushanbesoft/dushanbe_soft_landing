"use client";

import Script from "next/script";

export default function LiveChatWidget() {
  return (
    <Script
      id="livechat-widget"
      src="https://core.livechat.tj/widget/IgW317eT_p"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== "undefined" && typeof window.onload === "function") {
          const init = window.onload;
          window.onload = null;
          init.call(window, new Event("load"));
        }
      }}
    />
  );
}
