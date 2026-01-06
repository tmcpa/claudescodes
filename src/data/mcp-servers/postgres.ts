import { MCPServer } from "@/lib/types";

export const postgresServer: MCPServer = {
  slug: "postgres",
  title: "PostgreSQL Server",
  description: "Query and manage PostgreSQL databases with read-only access by default",
  tags: ["database", "postgres", "sql"],
  featured: true,
  author: {
    name: "Model Context Protocol",
    url: "https://github.com/modelcontextprotocol",
  },
  repositoryUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/postgres",
  documentationUrl: "https://github.com/modelcontextprotocol/servers#postgres",
  installCommand: "npm install -g @modelcontextprotocol/server-postgres",
  config: `{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://user:password@localhost:5432/database"
      ]
    }
  }
}`,
};
