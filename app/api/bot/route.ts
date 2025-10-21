import { webhookCallback } from "grammy";
import { bot } from "@/lib/bot";

const handleUpdate = webhookCallback(bot, "std/http");

export const POST = async (req: Request) => {
  try {
    const res = await handleUpdate(req);
    return res;
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response("Error", { status: 500 });
  }
};
