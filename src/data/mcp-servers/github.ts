import { MCPServer } from "@/lib/types";

export const githubServer: MCPServer = {
  slug: "github",
  title: "GitHub Server",
  description: "Interact with GitHub repositories, issues, pull requests, and more",
  tags: ["github", "git", "vcs", "official"],
  featured: true,
  author: {
    name: "Anthropic",
    url: "https://github.com/anthropics",
  },
  repositoryUrl: "https://github.com/anthropics/mcp-servers/tree/main/src/github",
  documentationUrl: "https://github.com/anthropics/mcp-servers#github",
  installCommand: "npm install -g @anthropic-ai/mcp-server-github",
  config: `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-github"],
      "env": {
        "GITHUB_TOKEN": "your-github-token"
      }
    }
  }
}`,
};
