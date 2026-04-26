import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Example of using an API key from Netlify environment variables.
 * In Vite, variables must be prefixed with VITE_ to be available in the browser.
 */
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI: GoogleGenerativeAI | null = null;

export function getGemini() {
  if (!API_KEY) {
    console.warn("VITE_GEMINI_API_KEY is not defined in environment variables.");
    return null;
  }
  
  if (!genAI) {
    genAI = new GoogleGenerativeAI(API_KEY);
  }
  return genAI;
}
