import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, type, message } = body;

    // Basic server-side validation
    if (!name || !email || !type) {
      return NextResponse.json(
        { error: "Vul alle verplichte velden in." }, 
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram env vars missing");
      // In production you might want to fail gracefully or log this
      // For now we simulate success if env vars are missing (dev mode)
      // or return error if strict. Let's return error to prompt setup.
      return NextResponse.json(
        { error: "Server configuratie fout (Telegram)." }, 
        { status: 500 }
      );
    }

    const text = `
🌟 *Nieuwe Lead* 🌟

👤 *Naam:* ${name}
📧 *Email:* ${email}
📱 *Telefoon:* ${phone || "Niet opgegeven"}
🏠 *Type:* ${type}

💬 *Bericht:*
${message || "Geen bericht"}
    `;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API Error:", errorData);
      return NextResponse.json({ error: "Fout bij versturen naar Telegram" }, { status: 502 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Er is een onverwachte fout opgetreden." }, 
      { status: 500 }
    );
  }
}


