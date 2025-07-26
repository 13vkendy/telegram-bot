import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Start komandasi
bot.start((ctx) => {
  ctx.reply(
    `Salom, ${ctx.from.first_name}! IELTS Practice Botga xush kelibsiz.`,
    Markup.inlineKeyboard([
      [Markup.button.callback('📚 Reading Passages', 'reading')],
      [Markup.button.callback('ℹ️ Help', 'help')]
    ])
  );
});

// Reading menyusi
bot.action('reading', (ctx) => {
  ctx.editMessageText(
    'Quyidagi passagelardan birini tanlang:',
    Markup.inlineKeyboard([
      [Markup.button.url('📖 Passage 1', 'https://your-netlify-link.netlify.app')],
      [Markup.button.url('📖 Passage 2', 'https://your-netlify-link.netlify.app/passage2')],
      [Markup.button.callback('⬅️ Back', 'back')]
    ])
  );
});

// Help menyusi
bot.action('help', (ctx) => {
  ctx.editMessageText(
    'Botdan foydalanish oson:\n1️⃣ Passage tanlang\n2️⃣ Web sahifada highlight va test bajaring\n✅ Natijani ko‘ring!',
    Markup.inlineKeyboard([[Markup.button.callback('⬅️ Back', 'back')]])
  );
});

// Back
bot.action('back', (ctx) => {
  ctx.editMessageText(
    `Salom, ${ctx.from.first_name}! IELTS Practice Botga xush kelibsiz.`,
    Markup.inlineKeyboard([
      [Markup.button.callback('📚 Reading Passages', 'reading')],
      [Markup.button.callback('ℹ️ Help', 'help')]
    ])
  );
});

bot.launch();
console.log('✅ Bot ishga tushdi...');
