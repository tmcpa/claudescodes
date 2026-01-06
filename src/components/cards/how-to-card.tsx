import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HowTo } from "@/lib/types";
import { BookOpen, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface HowToCardProps {
  howTo: HowTo;
}

const difficultyColors = {
  beginner: "bg-green-500/10 text-green-500 border-green-500/20",
  intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  advanced: "bg-red-500/10 text-red-500 border-red-500/20",
};

export function HowToCard({ howTo }: HowToCardProps) {
  return (
    <Link href={`/how-to/${howTo.slug}`}>
      <Card className="h-full hover:bg-accent/50 transition-colors cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              <CardTitle className="text-lg">{howTo.title}</CardTitle>
            </div>
          </div>
          <CardDescription className="line-clamp-2">
            {howTo.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
            <Badge
              variant="outline"
              className={cn("capitalize", difficultyColors[howTo.difficulty])}
            >
              {howTo.difficulty}
            </Badge>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{howTo.timeToComplete}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {howTo.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {howTo.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{howTo.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
