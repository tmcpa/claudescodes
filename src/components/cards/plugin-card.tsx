import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plugin } from "@/lib/types";
import { Puzzle } from "lucide-react";

interface PluginCardProps {
  plugin: Plugin;
}

export function PluginCard({ plugin }: PluginCardProps) {
  return (
    <Link href={`/plugins/${plugin.slug}`}>
      <Card className="h-full hover:bg-accent/50 transition-colors cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Puzzle className="h-5 w-5 text-muted-foreground" />
              <CardTitle className="text-lg">{plugin.title}</CardTitle>
            </div>
          </div>
          <CardDescription className="line-clamp-2">
            {plugin.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1">
            {plugin.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {plugin.tags.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{plugin.tags.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
