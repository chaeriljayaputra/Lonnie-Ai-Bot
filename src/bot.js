import makeWASocket from "@whiskeysockets/baileys";
import { askAI } from "./ai.js";

export async function startBot() {
  const sock = makeWASocket();

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;

    const text = msg.message.conversation || "";
    const from = msg.key.remoteJid;

    // kalau ada pertanyaan
    if (text) {
      const reply = await askAI(text);

      await sock.sendMessage(from, {
        text: reply,
      });
    }
  });
}
