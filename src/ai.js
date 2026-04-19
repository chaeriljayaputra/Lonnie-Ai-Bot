import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api.arcee.ai/api/v1",
  apiKey: process.env.ARCEE_API_KEY,
});

export async function askAI(userMessage) {
  const completion = await openai.chat.completions.create({
    model: "trinity-mini",
    messages: [
      {
        role: "system",
        content: `
Kamu adalah AI assistant milik accang.

Tugas kamu:
- Jawab pertanyaan tentang website, jasa, dan coding
- Promosikan jasa accang secara halus
- Gunakan bahasa santai tapi profesional

Info:
Nama: accang
TikTok: @qrnlay
Website: https://accang.vercel.app

Jasa:
- Landing page
- Portfolio
- Website custom
- Bot (WA, Telegram, TikTok, FF, dll)
- Script Illegal

Jawaban harus menarik, singkat, dan menjual.
        `,
      },
      { role: "user", content: userMessage },
    ],
  });

  return completion.choices[0].message.content;
}
