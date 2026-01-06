import { MCPServer } from "@/lib/types";

export const sequentialThinkingServer: MCPServer = {
  slug: "sequential-thinking",
  title: "Sequential Thinking Server",
  description: "Dynamic problem-solving through iterative thought chains with branching and revision",
  tags: ["thinking", "reasoning", "problem-solving", "official"],
  featured: false,
  author: {
    name: "Anthropic",
    url: "https://github.com/anthropics",
  },
  repositoryUrl: "https://github.com/anthropics/mcp-servers/tree/main/src/sequentialthinking",
  documentationUrl: "https://github.com/anthropics/mcp-servers#sequentialthinking",
  installCommand: "npm install -g @anthropic-ai/mcp-server-sequential-thinking",
  config: `{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-sequential-thinking"]
    }
  }
}`,
};
