# Contributing to Claude's Codes

Thank you for your interest in contributing! This guide will help you add new content or improve the site.

## Table of Contents

- [Adding Content](#adding-content)
  - [Adding a Prompt](#adding-a-prompt)
  - [Adding an MCP Server](#adding-an-mcp-server)
  - [Adding a Hook](#adding-a-hook)
  - [Adding a Skill](#adding-a-skill)
  - [Adding a Settings Example](#adding-a-settings-example)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)

## Adding Content

All content is stored as TypeScript files in the `src/data/` directory. Follow the patterns below to add new items.

### Adding a Prompt

1. Create a new file in `src/data/prompts/` (e.g., `rust.ts`)

```typescript
import { Prompt } from "@/lib/types";

export const rustPrompt: Prompt = {
  slug: "rust",                    // URL-friendly identifier
  title: "Rust Development",       // Display title
  description: "CLAUDE.md for Rust projects with cargo and best practices",
  tags: ["rust", "cargo", "systems"],
  featured: false,                 // Set to true for homepage feature
  author: {
    name: "Your Name",
    url: "https://github.com/yourusername",  // Optional
    avatar: "https://github.com/yourusername.png",  // Optional
  },
  content: `# Rust Project

Your CLAUDE.md content here...

## Tech Stack
- Rust with Cargo
- ...

## Conventions
- Use snake_case for variables
- ...
`,
};
```

2. Export it from `src/data/prompts/index.ts`:

```typescript
import { rustPrompt } from "./rust";

export const prompts: Prompt[] = [
  // ... existing prompts
  rustPrompt,
];
```

### Adding an MCP Server

1. Create a new file in `src/data/mcp-servers/` (e.g., `slack.ts`)

```typescript
import { MCPServer } from "@/lib/types";

export const slackServer: MCPServer = {
  slug: "slack",
  title: "Slack Integration",
  description: "Send messages and interact with Slack workspaces",
  tags: ["slack", "messaging", "communication"],
  featured: false,
  author: {
    name: "Your Name",
  },
  installCommand: "npm install -g @anthropic-ai/mcp-server-slack",  // Optional
  config: `{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-slack"],
      "env": {
        "SLACK_TOKEN": "your-slack-token"
      }
    }
  }
}`,
};
```

2. Export it from `src/data/mcp-servers/index.ts`

### Adding a Hook

1. Create a new file in `src/data/hooks/` (e.g., `auto-test.ts`)

```typescript
import { Hook } from "@/lib/types";

export const autoTestHook: Hook = {
  slug: "auto-test",
  title: "Auto Run Tests",
  description: "Automatically run tests after code changes",
  event: "PostToolUse",           // PreToolUse, PostToolUse, Notification, or Stop
  matcher: "Edit|Write",          // Optional: regex to match tool names
  tags: ["testing", "automation"],
  featured: false,
  author: {
    name: "Your Name",
  },
  script: `#!/bin/bash
# Your hook script here
npm test
`,
};
```

2. Export it from `src/data/hooks/index.ts`

### Adding a Skill

1. Create a new file in `src/data/skills/` (e.g., `deploy.ts`)

```typescript
import { Skill } from "@/lib/types";

export const deploySkill: Skill = {
  slug: "deploy",
  title: "Deploy to Production",
  description: "Automated deployment workflow",
  tags: ["deployment", "devops", "workflow"],
  featured: false,
  author: {
    name: "Your Name",
  },
  content: `# Deploy Skill

Automate your deployment process.

## Usage
\`\`\`
/deploy
\`\`\`

## What it does
1. Runs tests
2. Builds the project
3. Deploys to production
`,
};
```

2. Export it from `src/data/skills/index.ts`

### Adding a Settings Example

1. Create a new file in `src/data/settings/` (e.g., `minimal.ts`)

```typescript
import { SettingsExample } from "@/lib/types";

export const minimalSettings: SettingsExample = {
  slug: "minimal",
  title: "Minimal Configuration",
  description: "Bare minimum settings for getting started",
  tags: ["minimal", "beginner"],
  featured: false,
  author: {
    name: "Your Name",
  },
  config: `{
  "model": "claude-sonnet-4-20250514"
}`,
};
```

2. Export it from `src/data/settings/index.ts`

## Development Setup

1. Fork and clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/claudescodes.git
cd claudescodes
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open http://localhost:3000

5. Make your changes and test locally

6. Build to check for errors:

```bash
npm run build
```

## Pull Request Process

1. **Fork the repository** and create a new branch:

```bash
git checkout -b add-rust-prompt
```

2. **Make your changes** following the patterns above

3. **Test your changes** locally:

```bash
npm run build
npm run dev
```

4. **Commit your changes** with a clear message:

```bash
git commit -m "Add Rust development prompt"
```

5. **Push to your fork**:

```bash
git push origin add-rust-prompt
```

6. **Open a Pull Request** with:
   - Clear title describing the addition
   - Description of what you added
   - Screenshots if relevant

## Code Style

- Use TypeScript for all code
- Follow existing patterns in the codebase
- Use meaningful variable and file names
- Keep content accurate and helpful
- Test that your content renders correctly

## Content Guidelines

When adding new content:

- **Be accurate**: Ensure configurations and commands work correctly
- **Be helpful**: Include clear descriptions and usage instructions
- **Be complete**: Include all necessary information (install commands, environment variables, etc.)
- **Be original**: Don't copy content without attribution

## Questions?

- Open an issue for bugs or feature requests
- Start a discussion for questions or ideas

Thank you for contributing!
