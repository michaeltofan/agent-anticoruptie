import type { Options } from "@anthropic-ai/claude-agent-sdk";
import { SERVER_NAME, server } from "./tools/index.js";

export function buildOptions(): Options {
  return {
    tools: [],                                    // nicio unealtă încorporată
    mcpServers: { [SERVER_NAME]: server },        // doar uneltele din registru
    allowedTools: [`mcp__${SERVER_NAME}__*`],     // aprobate dinainte
    settingSources: [],                           // fără CLAUDE.md, .claude/ sau setări de utilizator
    env: { ...process.env, CLAUDE_CODE_DISABLE_AUTO_MEMORY: "1" }, // fără memorie automată
    permissionMode: "dontAsk",                    // refuză orice nu e aprobat dinainte
  };
}
