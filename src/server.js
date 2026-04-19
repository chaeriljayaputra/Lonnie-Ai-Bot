import express from "express";
import { startBot } from "./bot.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Bot aktif 🚀");
});

app.listen(PORT, () => {
  console.log("Server jalan");
  startBot();
});
