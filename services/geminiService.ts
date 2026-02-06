import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-3-flash-preview';

/**
 * Provides a hint for the user based on the current board state.
 */
export const getHint = async (
  solution: string,
  guesses: string[]
): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key not configured.";
  }

  try {
    const prompt = `
      You are a helper for a Wordle-like game.
      The secret word is "${solution}".
      The user has already guessed: ${guesses.join(", ")}.
      
      Provide a helpful but subtle hint to help them guess the word.
      Do NOT mention the word itself.
      Keep the hint under 20 words.
      Translate the hint into Japanese.
    `;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });

    return response.text || "ヒントを取得できませんでした。";
  } catch (error) {
    console.error("Gemini Hint Error:", error);
    return "現在AIヒントを利用できません。";
  }
};

/**
 * Checks if a word is a valid English word using AI.
 * Returns true if valid, false otherwise.
 */
export const checkWordValidity = async (word: string): Promise<boolean> => {
  if (!process.env.API_KEY) {
    return false;
  }

  try {
    const prompt = `
      Is "${word}" a valid 5-letter English word found in standard dictionaries (like Oxford, Merriam-Webster, or Scrabble dictionaries)?
      Ignore proper nouns if they are not commonly used as general words.
      Respond with ONLY the word "TRUE" or "FALSE".
    `;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });

    const text = response.text?.trim().toUpperCase();
    return text === "TRUE";
  } catch (error) {
    console.error("Gemini Validation Error:", error);
    return false;
  }
}

/**
 * Provides the definition of the word after the game ends.
 */
export const getWordDefinition = async (word: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "";
  }

  try {
    const prompt = `
      Provide a detailed explanation for the English word "${word}" in Japanese.
      You MUST include the following sections:
      1. 【発音】: The Katakana pronunciation of the word.
      2. 【意味】: The definition/meaning in Japanese.
      3. 【例文】: One short example sentence in English with its Japanese translation.
      
      Ensure the Katakana pronunciation is accurate and at the very beginning.
      Format it neatly for display in a web app.
    `;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });

    return response.text || "定義を取得できませんでした。";
  } catch (error) {
    console.error("Gemini Definition Error:", error);
    return "定義の読み込みに失敗しました。";
  }
};