// This service now communicates with your own backend server, which in turn calls the Gemini API.
// This is a more secure practice as your API key is not exposed on the client-side.

import { ChatMessage } from "../types";

/**
 * Sends a message to the backend /gemini endpoint and returns the AI's response.
 * @param message The user's message.
 * @param history The recent chat history.
 * @returns A promise that resolves to the Gemini model's response text.
 */
export const sendMessageToGemini = async (
  message: string,
  history: ChatMessage[]
): Promise<string> => {
  try {
    const formattedHistory = history.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, history: formattedHistory }),
    });
    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }
    const data = await response.json();
    const geminiResponse = data.response;
    return geminiResponse;
  } catch (error) {
    console.error("Failed to send message:", error);
    return "Sorry, I'm having trouble connecting to the AI service right now. Please try again later.";
  }
};
