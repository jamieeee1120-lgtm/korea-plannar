
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getHipsterAdvice = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `
          你是一位精通韓國首爾與釜山的「文青旅行專家」。
          你的風格簡約、有質感、像 MUJI 的品牌形象。
          你的任務是根據使用者的問題，提供具備設計感、藝文氣息的小眾景點建議。
          請保持回覆精簡，並使用繁體中文。
          如果使用者問到關於行程的建議，請優先考慮那些有獨立選物店、老屋改建、或是優質咖啡廳的地方。
        `,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，我的思緒暫時斷線了。請稍後再問我關於旅行的靈感。";
  }
};
