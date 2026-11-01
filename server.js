import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";
import rl from "readline/promises";
dotenv.config();

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const LLM = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.API_KEY_GROQ,
});

while (true) {
  const input = await readline.question("Enter your asking question: ");
  const response = await LLM.stream([
    {
      role: "user",
      content: input,
    },
  ]);
  for await (const chunks of response) {
    process.stdout.write(chunks.content);
  }
  process.stdout.write("\n");
}
