export interface Author {
  name: string;
  url?: string;
  avatar?: string;
}

export interface SourceLinks {
  sourceUrl?: string; // Direct link to the actual file (e.g., SKILL.md, README)
  repositoryUrl?: string; // Link to parent repository for attribution
  documentationUrl?: string; // Link to official documentation
}

export interface Prompt extends SourceLinks {
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  author: Author;
  featured?: boolean;
}

export interface MCPServer extends SourceLinks {
  slug: string;
  title: string;
  description: string;
  config: string;
  installCommand?: string;
  tags: string[];
  author: Author;
  featured?: boolean;
}

export interface Hook extends SourceLinks {
  slug: string;
  title: string;
  description: string;
  event: "PreToolUse" | "PostToolUse" | "Notification" | "Stop";
  matcher?: string;
  script: string;
  tags: string[];
  author: Author;
  featured?: boolean;
}

export interface Skill extends SourceLinks {
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  author: Author;
  featured?: boolean;
}

export interface Plugin extends SourceLinks {
  slug: string;
  title: string;
  description: string;
  installCommand: string;
  config?: string;
  tags: string[];
  author: Author;
  featured?: boolean;
}

export interface HowTo extends SourceLinks {
  slug: string;
  title: string;
  description: string;
  content: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  timeToComplete: string;
  tags: string[];
  author: Author;
  featured?: boolean;
}

export type ContentItem = Prompt | MCPServer | Hook | Skill | Plugin | HowTo;
