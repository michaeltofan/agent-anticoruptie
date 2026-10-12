import { describe, expect, it } from "vitest";
import { buildOptions } from "../src/options.js";
import { SERVER_NAME, TOOLS } from "../src/tools/index.js";

describe("baza agentului", () => {
  const options = buildOptions();

  it("nu expune nicio unealtă încorporată", () => {
    expect(options.tools).toEqual([]);
  });

  it("nu încarcă setări din sistemul de fișiere", () => {
    expect(options.settingSources).toEqual([]);
  });

  it("are memoria automată oprită", () => {
    expect(options.env?.CLAUDE_CODE_DISABLE_AUTO_MEMORY).toBe("1");
  });

  it("refuză orice nu e aprobat dinainte", () => {
    expect(options.permissionMode).toBe("dontAsk");
  });

  it("are un singur server MCP, cel al registrului", () => {
    expect(Object.keys(options.mcpServers ?? {})).toEqual([SERVER_NAME]);
  });

  it("aprobă dinainte doar uneltele registrului", () => {
    expect(options.allowedTools).toEqual([`mcp__${SERVER_NAME}__*`]);
  });

  it("are nume de unelte unice", () => {
    const names = TOOLS.map((t) => t.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
