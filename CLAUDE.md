# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 static content directory site for Claude Code configurations. The site showcases prompts, MCP servers, hooks, skills, plugins, agents, and how-to guides.

### Data Layer

All content is defined as TypeScript objects in `src/data/`:
- `prompts/` - CLAUDE.md templates for different tech stacks
- `mcp-servers/` - Model Context Protocol server configurations
- `hooks/` - Pre/post tool-use automation scripts
- `skills/` - Custom slash commands and workflows
- `plugins/` - Official and community plugins
- `agents/` - Specialized agent configurations
- `how-to/` - Tutorials and guides

Each content type has an `index.ts` that exports an array of all items. Types are defined in `src/lib/types.ts`.

### Page Structure

Uses Next.js App Router with:
- `src/app/[content-type]/page.tsx` - List pages for each content type
- `src/app/[content-type]/[slug]/page.tsx` - Detail pages using dynamic routes

### Adding Content

1. Create a TypeScript file in the appropriate `src/data/[content-type]/` directory
2. Export from `src/data/[content-type]/index.ts`
3. Follow the interface defined in `src/lib/types.ts`

See CONTRIBUTING.md for detailed examples of each content type.

## Key Types

```typescript
// Content types: "prompt" | "mcp-server" | "hook" | "skill" | "plugin" | "agent" | "how-to"
// Hook events: "PreToolUse" | "PostToolUse" | "Notification" | "Stop"
// Agent categories: "development" | "data-ai" | "infrastructure" | "quality-testing" | "security" | "business" | "specialization"
```

## Tech Stack

- Next.js 16 with App Router
- React 19
- Tailwind CSS 4 with tw-animate-css
- shadcn/ui components (in `src/components/ui/`)
- TypeScript
