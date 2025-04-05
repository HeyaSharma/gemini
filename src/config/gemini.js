import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyAMpb2ylI0NjsOLoZaq7pHj6VzSaCBuMzs";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  const responseText = await result.response.text(); 

  console.log(responseText);
  return responseText; 
}

export default run;
