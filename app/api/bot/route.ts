import { webhookCallback } from "grammy";
import { bot } from "@/lib/bot";

const handleUpdate = webhookCallback(bot, "std/http");

export async function POST(request: Request) {
  try {
    return await handleUpdate(request);
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export function GET() {
  return new Response("This endpoint is for Telegram Webhook (POST only).", {
    status: 405,
  });
}
