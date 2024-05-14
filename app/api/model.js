export const getmodel = ({userPrompt}) => {
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    async function run() {
        const prompt = "Let's assume you are AI Prompt Engineer, enhance this prompt: Dog riding a horse on pluto";

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
    }

    run();
}

