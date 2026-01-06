"use client";

import { useState } from "react";
import { HowToCard } from "@/components/cards/how-to-card";
import { Search } from "@/components/search";
import { Badge } from "@/components/ui/badge";
import { howTos, getAllHowToTags } from "@/data/how-to";
import { cn } from "@/lib/utils";

const difficulties = ["beginner", "intermediate", "advanced"] as const;

export default function HowToPage() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const allTags = getAllHowToTags();

  const filteredHowTos = howTos.filter((howTo) => {
    const matchesSearch =
      search === "" ||
      howTo.title.toLowerCase().includes(search.toLowerCase()) ||
      howTo.description.toLowerCase().includes(search.toLowerCase()) ||
      howTo.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

    const matchesTag = selectedTag === null || howTo.tags.includes(selectedTag);
    const matchesDifficulty = selectedDifficulty === null || howTo.difficulty === selectedDifficulty;

    return matchesSearch && matchesTag && matchesDifficulty;
  });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">How To Guides</h1>
        <p className="text-muted-foreground">
          Learn how to get the most out of Claude Code with step-by-step tutorials
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:max-w-xs">
            <Search
              placeholder="Search guides..."
              value={search}
              onChange={setSearch}
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground mr-2">Difficulty:</span>
            <Badge
              variant={selectedDifficulty === null ? "default" : "secondary"}
              className={cn(
                "cursor-pointer hover:bg-primary/80",
                selectedDifficulty === null && "bg-primary"
              )}
              onClick={() => setSelectedDifficulty(null)}
            >
              All
            </Badge>
            {difficulties.map((difficulty) => (
              <Badge
                key={difficulty}
                variant={selectedDifficulty === difficulty ? "default" : "secondary"}
                className={cn(
                  "cursor-pointer capitalize",
                  selectedDifficulty === difficulty
                    ? "bg-primary hover:bg-primary/80"
                    : "hover:bg-accent"
                )}
                onClick={() => setSelectedDifficulty(difficulty === selectedDifficulty ? null : difficulty)}
              >
                {difficulty}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground mr-2">Topic:</span>
            <Badge
              variant={selectedTag === null ? "default" : "secondary"}
              className={cn(
                "cursor-pointer hover:bg-primary/80",
                selectedTag === null && "bg-primary"
              )}
              onClick={() => setSelectedTag(null)}
            >
              All
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "secondary"}
                className={cn(
                  "cursor-pointer",
                  selectedTag === tag
                    ? "bg-primary hover:bg-primary/80"
                    : "hover:bg-accent"
                )}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHowTos.map((howTo) => (
            <HowToCard key={howTo.slug} howTo={howTo} />
          ))}
        </div>

        {filteredHowTos.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No guides found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
}
