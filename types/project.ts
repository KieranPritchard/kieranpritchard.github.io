export type ProjectCategory = "web" | "security" | "automation"

export type ProjectFrontmatter = {
  title: string
  slug: string
  category: ProjectCategory
  description: string
  tags: string[]
  link: string
  github: string
  /** ISO date string for the article-style header */
  date: string
  coverImage?: string
  coverAlt?: string
}

export type ProjectSummary = ProjectFrontmatter

export type ProjectDoc = ProjectFrontmatter & {
  content: string
}
