# 🚀 AI-Powered Portfolio

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Gemini API](https://img.shields.io/badge/AI-Google%20Gemini-blueviolet)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

A modern personal portfolio website designed to showcase my skills and projects. The highlight of this application is a **custom AI Chat Assistant** powered by Google's Gemini 1.5 Flash model. 

The AI is "context-aware"—it has been fed my resume and professional background via system instructions, allowing visitors to have a natural conversation to learn more about my expertise.

## ✨ Features

- **Interactive AI Chatbot:** Ask questions like "What are his skills?" or "Tell me about his experience at X company?" and get accurate, context-aware answers.
- **Resume Context Injection:** Uses a specialized system prompt to strictly ground the AI's answers in factual resume data.
- **Modern UI/UX:** Responsive design enabling seamless interaction on mobile and desktop.
- **Serverless Backend:** Hosted on Vercel Functions for scalability and performance.

## 🛠️ Tech Stack

**Frontend:**
- React/Vite
- Fetch API for backend communication

**Backend:**
- Node.js & Express
- Google Generative AI SDK (`@google/generative-ai`)
- Vercel Serverless Functions

**AI Model:**
- Gemini 1.5 Flash (Optimized for speed and efficiency)

## 📂 Folder Structure

This project follows a monorepo structure deployed on Vercel:

```text
/
├── api/                  # Serverless Backend
│   └── index.js          # Express app & Gemini integration
├── client/               # Frontend Source Code
│   ├── dist/             # Production build artifacts
│   └── src/              # React/Frontend components
├── system-instruction.js # The resume data/context for the AI
├── vercel.json           # Vercel routing configuration
└── package.json          # Root dependencies
