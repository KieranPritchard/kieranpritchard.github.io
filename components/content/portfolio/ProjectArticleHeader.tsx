import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import type { ProjectSummary } from "@/types/project"
import { cn } from "@/lib/utils"

function formatArticleDate(iso: string) {
  const parsed = new Date(iso)
  if (Number.isNaN(parsed.getTime())) {
    return iso
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed)
}

export function ProjectArticleHeader({
  project,
  className,
}: Readonly<{ project: ProjectSummary; className?: string }>) {
  return (
    <header className={cn("space-y-8", className)}>
      <div className="space-y-4 border-b border-border pb-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={project.date}>{formatArticleDate(project.date)}</time>
          <span aria-hidden className="text-border">
            ·
          </span>
          <Badge variant="secondary" className="capitalize">
            {project.category}
          </Badge>
        </div>

        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {project.title}
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {project.coverImage ? (
        <figure className="overflow-hidden rounded-xl border bg-muted/30">
          <div className="relative aspect-[21/9] w-full sm:aspect-[2.4/1]">
            <Image
              src={project.coverImage}
              alt={project.coverAlt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>
        </figure>
      ) : null}
    </header>
  )
}
