import { Plugin } from "@/lib/types";

export const swiftLspPlugin: Plugin = {
  slug: "swift-lsp",
  title: "Swift LSP",
  description: "Language Server Protocol support for Swift development with code intelligence",
  tags: ["swift", "lsp", "ios", "macos", "official"],
  featured: false,
  author: {
    name: "Anthropic",
    url: "https://github.com/anthropics",
  },
  installCommand: "claude plugins add swift-lsp@claude-plugins-official",
  config: `{
  "enabledPlugins": {
    "swift-lsp@claude-plugins-official": true
  }
}`,
};
