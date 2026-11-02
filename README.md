# GenAI Testing

A simple AI-powered event assistant built using **JavaScript, LangChain, and Groq**. It uses an AI agent to understand user requests and perform tasks through custom tools.

## Features

- **AI Integration:** Uses Groq's `openai/gpt-oss-120b` model.
- **Create Events:** Create events by providing a date, title, and description.
- **Get Events:** Retrieve all previously created events.
- **Tool Calling:** Uses LangChain tools to allow the AI agent to perform actions.
- **Streaming Responses:** Displays AI responses directly in the terminal.
- **Interactive CLI:** Accepts user questions through Node.js Readline.

## Tech Stack

- JavaScript (ES Modules)
- Node.js
- LangChain
- Groq API
- Zod
- dotenv
- Readline

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Vinay-Maurya-999/GenAI-testing.git
```

### 2. Navigate to the Project

```bash
cd GenAI-testing
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
API_KEY_GROQ=your_groq_api_key
```

Get your API key from [Groq Console](https://console.groq.com/).

### 5. Run the Project

```bash
npm run dev
```

## Available Tools

| Tool | Description |
|---|---|
| `createEvent` | Creates an event with a date, title, and description. |
| `getEvent` | Returns all events stored during the current application run. |

## Project Structure

```text
GenAI-testing/
│
├── server.js
├── package.json
├── package-lock.json
├── .env
└── .gitignore
```

## How It Works

1. The application accepts a question from the terminal.
2. LangChain sends the user's message to the Groq-powered AI agent.
3. The agent decides whether to use an available tool.
4. The selected tool creates or retrieves event data.
5. The AI response is streamed back to the terminal.

**Note:** Events are currently stored in an in-memory array, so they are cleared when the application restarts.

## Learning Goals

This project is part of my learning journey in Generative AI. It helps me understand:

- LLM integration with LangChain
- AI agents and tool calling
- Structured tool inputs using Zod
- Streaming AI responses
- Working with environment variables

---

**Author:** Vinay Maurya

**GitHub:** [Vinay-Maurya-999](https://github.com/Vinay-Maurya-999)
