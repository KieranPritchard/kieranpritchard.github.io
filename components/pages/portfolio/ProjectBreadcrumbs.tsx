import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Defines the shape of an individual breadcrumb item
type Crumb = { label: string; href?: string }

/**
 * ProjectBreadcrumbs component to render a hierarchical navigation trail.
 * Automatically handles separators and applies active styling to the final item.
 */
export function ProjectBreadcrumbs({ items, className }: Readonly<{ items: Crumb[]; className?: string }>) {
  return (
    /* Main navigation wrapper with accessibility label */
    <nav aria-label="Breadcrumb" className={cn("text-sm text-muted-foreground", className)}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {/* Separator Icon: Renders for every item except the first one */}
              {index > 0 && <ChevronRight className="size-3.5 shrink-0 opacity-60" aria-hidden />}
              
              {/* Conditional Rendering: Links for intermediate steps, text for the current page */}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "font-medium text-foreground" : undefined}>{item.label}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}