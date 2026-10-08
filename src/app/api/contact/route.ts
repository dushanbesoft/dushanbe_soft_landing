/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email = "—", phone, direction, message } = body;

    if (!name || !phone || !direction) {
      return NextResponse.json(
        { error: "Заполните все обязательные поля" },
        { status: 400 },
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_NOTIFY_CHAT_ID;
    // const alifLogin = process.env.ALIF_LOGIN;

    if (!botToken || !chatId) {
      const missingKeys = [];
      const brokenValues: Record<string, any> = {};
      
      if (!botToken) {
        missingKeys.push("TELEGRAM_BOT_TOKEN");
        brokenValues["TELEGRAM_BOT_TOKEN"] = botToken;
      }
      if (!chatId) {
        missingKeys.push("TELEGRAM_NOTIFY_CHAT_ID");
        brokenValues["TELEGRAM_NOTIFY_CHAT_ID"] = chatId;
      }

      const detailedError = `Внутренняя ошибка сервера (проблема с ключами: ${missingKeys.join(", ")})`;
      console.error(detailedError, brokenValues);
      
      return NextResponse.json(
        { 
          error: detailedError,
          brokenValues
        },
        { status: 500 },
      );
    }

    const text = `
<b>Новая заявка!</b>

<b>Имя:</b> ${name}
<b>Email:</b> ${email}
<b>Телефон:</b> ${phone}
<b>Направление:</b> ${direction}
<b>Сообщение:</b> ${message || "—"}
    `.trim();

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const telegramResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.text();
      console.error("Telegram API error:", errorData);
      return NextResponse.json(
        { error: "Ошибка при отправке сообщения в Telegram" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Заявка успешно отправлена" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error('API /contact error:', error);
    return NextResponse.json({ error: `Внутренняя ошибка сервера: ${error.message}` }, { status: 500 });
  }
}
