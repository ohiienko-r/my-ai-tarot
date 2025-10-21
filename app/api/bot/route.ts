import { webhookCallback } from "grammy";
import { bot } from "@/lib/bot";

const handleUpdate = webhookCallback(bot, "std/http");

export async function POST(req: Request) {
  try {
    return await handleUpdate(req);
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response("Error handling update", { status: 500 });
  }
}

export function GET() {
  return new Response("✅ Bot webhook is up!", { status: 200 });
}
