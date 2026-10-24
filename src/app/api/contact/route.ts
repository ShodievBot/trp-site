import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
  locale?: string;
};

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function POST(request: Request) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram env missing", {
        hasToken: Boolean(token),
        hasChatId: Boolean(chatId),
      });

      return NextResponse.json(
        {
          ok: false,
          error: "Telegram configuration is missing",
        },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const service = body.service?.trim();
    const message = body.message?.trim();
    const locale = body.locale?.trim() || "uz";

    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        {
          ok: false,
          error: "Required fields are missing",
        },
        { status: 400 }
      );
    }

    const text = `
<b>Yangi ariza / Новая заявка</b>

<b>Ism / Имя:</b> ${escapeHtml(name)}
<b>Telefon:</b> ${escapeHtml(phone)}
<b>Xizmat / Услуга:</b> ${escapeHtml(service)}
<b>Til / Язык:</b> ${escapeHtml(locale)}

<b>Xabar / Сообщение:</b>
${escapeHtml(message)}
`.trim();

    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok || !telegramData.ok) {
      console.error("Telegram API error:", telegramData);

      return NextResponse.json(
        {
          ok: false,
          error: "Telegram API error",
          telegram: telegramData,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Application sent successfully",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
