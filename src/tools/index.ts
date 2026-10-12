import { createSdkMcpServer, type SdkMcpToolDefinition } from "@anthropic-ai/claude-agent-sdk";

export const SERVER_NAME = "anticoruptie";

// O unealtă nouă = un fișier în src/tools/ + un rând în această listă.
export const TOOLS: SdkMcpToolDefinition<any>[] = [];

export const server = createSdkMcpServer({ name: SERVER_NAME, version: "0.1.0", tools: TOOLS });
