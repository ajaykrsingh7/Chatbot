const { GoogleGenerativeAI } = require("@google/generative-ai");
const Chat = require("../models/Chat.model"); 
const genAI = new GoogleGenerativeAI(process.env.GEMINI__AI_API);

const isHindi = (text = "") => /[\u0900-\u097F]/.test(text);

exports.generateChat = async function (req, res) {
  try {
    const query = (req.query.q || "").trim();
    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    const userId = req.userId;
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    const askInHindi = isHindi(query);
    const prompt = `
You are an Ayurvedic expert.

Rules:
Act as an Ayurvedic expert. Answer this query strictly using Ayurvedic knowledge only. If not Ayurvedic, say:
  "I am an Ayurvedic assistant and can not answer non-Ayurvedic questions..."

Language Instructions:
1. If the user's input is in **English**, reply in **English** only.
2. If the user's input is in **Hindi script** (Devanagari), reply in two parts:
   - First in **Hindi script**
   - Then the same answer in **Roman Hindi (Hinglish)**

User's query: ${query}
`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
    const result = await model.generateContentStream(prompt);

    let fullResponse = ""; 

    for await (const chunk of result.stream) {
      const text = chunk.text();
      fullResponse += text; 
      res.write(`data: ${text}\n\n`);
    }

    
    await Chat.create({
      user: userId,
      query,
      response: fullResponse,
    });

    res.write("event: done\ndata: end\n\n");
    res.end();
  } catch (error) {
    console.error("Chat error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
