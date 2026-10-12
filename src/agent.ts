import { query } from "@anthropic-ai/claude-agent-sdk";
import { buildOptions } from "./options.js";

const prompt = process.argv.slice(2).join(" ").trim();
if (!prompt) {
  console.error('Folosire: npm start -- "<întrebare>"');
  process.exit(1);
}

for await (const message of query({ prompt, options: buildOptions() })) {
  if (message.type === "assistant") {
    for (const block of message.message.content) {
      if (block.type === "tool_use") {
        console.log(`[unealtă] ${block.name} ${JSON.stringify(block.input)}`);
      }
    }
  } else if (message.type === "result") {
    if (message.subtype === "success") {
      console.log(message.result);
    } else {
      console.error(`Rulare eșuată: ${message.subtype}`);
      process.exitCode = 1;
    }
  }
}
