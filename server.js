import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";
import rl from "readline/promises";
import { tool, createAgent } from "langchain";
import * as z from "zod";
dotenv.config();

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const event = [];

const createEventTool = tool(
  async function ({ date, tittle, description }) {
    event.push({
      date,
      tittle,
      description,
    });
    return "event created successfully";
  },
  {
    name: "createEvent",
    description: "Create an event with a date, title, and description",
    schema: z.object({
      date: z.string(),
      tittle: z.string(),
      description: z.string(),
    }),
  },
);

const getEventTool = tool(
  async function ({}) {
    return event;
  },
  {
    name: "getEvent",
    Description: "Get all events",
    schema: z.object({}),
  },
);

const LLM = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.API_KEY_GROQ,
});

const agent = createAgent({
  model: LLM,
  tools: [createEventTool, getEventTool],
});

while (true) {
  const input = await readline.question("Enter your questions: ");

  const stream = await agent.stream(
    {
      messages: [
        {
          role: "user",
          content: input,
        },
      ],
    },
    { streamMode: "messages" },
  );

  for await (const [chunks, matadata] of stream) {
    process.stdout.write(chunks.content);
  }

  process.stdout.write("\n");
}
