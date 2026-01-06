import { MCPServer } from "@/lib/types";

export const fetchServer: MCPServer = {
  slug: "fetch",
  title: "Fetch Server",
  description: "Make HTTP requests to fetch web content, APIs, and convert HTML to markdown",
  tags: ["http", "web", "api", "fetch", "official"],
  featured: false,
  author: {
    name: "Anthropic",
    url: "https://github.com/anthropics",
  },
  repositoryUrl: "https://github.com/anthropics/mcp-servers/tree/main/src/fetch",
  documentationUrl: "https://github.com/anthropics/mcp-servers#fetch",
  installCommand: "npm install -g @anthropic-ai/mcp-server-fetch",
  config: `{
  "mcpServers": {
    "fetch": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-fetch"]
    }
  }
}`,
};
