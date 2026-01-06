import { Plugin } from "@/lib/types";

export const featureDevPlugin: Plugin = {
  slug: "feature-dev",
  title: "Feature Development",
  description: "Guided feature development with codebase understanding and architecture focus",
  tags: ["feature", "development", "architecture", "official"],
  featured: true,
  author: {
    name: "Anthropic",
    url: "https://github.com/anthropics",
  },
  repositoryUrl: "https://github.com/anthropics/claude-code",
  documentationUrl: "https://docs.anthropic.com/en/docs/claude-code/plugins",
  installCommand: "claude plugins add feature-dev@claude-plugins-official",
  config: `{
  "enabledPlugins": {
    "feature-dev@claude-plugins-official": true
  }
}`,
};
