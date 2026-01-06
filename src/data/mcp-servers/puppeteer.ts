import { MCPServer } from "@/lib/types";

export const puppeteerServer: MCPServer = {
  slug: "puppeteer",
  title: "Puppeteer Browser",
  description: "Automate browser interactions for web scraping and testing",
  tags: ["browser", "puppeteer", "automation", "scraping"],
  author: {
    name: "Anthropic",
    url: "https://github.com/anthropics",
  },
  repositoryUrl: "https://github.com/anthropics/mcp-servers/tree/main/src/puppeteer",
  documentationUrl: "https://github.com/anthropics/mcp-servers#puppeteer",
  installCommand: "npm install -g @anthropic-ai/mcp-server-puppeteer",
  config: `{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-puppeteer"]
    }
  }
}`,
};
