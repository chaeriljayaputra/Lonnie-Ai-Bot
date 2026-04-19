import express from "express";
import { startBot } from "./bot.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Lonnie bot aktif 🚀");
});

app.listen(PORT, () => {
  console.log("Server jalan di port", PORT);
  startBot();
});
