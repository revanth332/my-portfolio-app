const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
const { SYSTEM_INSTRUCTION } = require("../system-instruction");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) return res.status(400).send({ error: "Message is required" });

    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest", // Use the specific model
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({ history: history || [] });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    res.send({ response: text });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to get response" });
  }
});

app.get("/api", (req, res) => {
  res.send("Backend is running!");
});

module.exports = app;
