
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres un experto senior en ciberseguridad y hacking ético de "NEURAL-SEC GLOBAL". 
Tu empresa opera para todo el mundo, con raíces e innovación de Argentina ("De Argentina para el mundo").
Tu tono es profesional, innovador, tecnológico y seguro. 
Asesoras sobre protección de datos corporativos, hacking ético global y seguridad Web3/Cripto.
Enfatiza la importancia de la prevención y la ciber-resiliencia en un mundo interconectado.
No des instrucciones para realizar hacks ilegales. 
Tus respuestas deben ser concisas, en negrita para resaltar conceptos clave, y siempre proyectar una visión global.
`;

export const getSecurityAdvice = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Disculpas, el nodo de IA de **Neural-Sec Global** está experimentando alta carga. Por favor, reintenta o contacta a ops@neural-sec.global";
  }
};
