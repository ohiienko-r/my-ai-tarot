import { Bot } from "grammy";

export const bot = new Bot(process.env.BOT_TOKEN!);

bot.command("start", async (ctx) => {
  await ctx.reply(
    "👋 Hi! We're back and currently cooking something. Stay tuned!"
  );
});
