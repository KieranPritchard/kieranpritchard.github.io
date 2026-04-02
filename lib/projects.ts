import "server-only"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { ProjectCategory, ProjectDoc, ProjectSummary } from "@/types/project"

const contentDir = path.join(process.cwd(), "content/projects")

function isProjectCategory(value: unknown): value is ProjectCategory {
  return value === "web" || value === "security" || value === "automation"
}

function normalizeFrontmatter(data: Record<string, unknown>): ProjectDoc | null {
  const title = typeof data.title === "string" ? data.title : null
  const slug = typeof data.slug === "string" ? data.slug : null
  const category = data.category
  const description = typeof data.description === "string" ? data.description : null
  const tags = Array.isArray(data.tags) ? data.tags.filter((t): t is string => typeof t === "string") : null
  const link = typeof data.link === "string" ? data.link : null
  const github = typeof data.github === "string" ? data.github : null
  const date = typeof data.date === "string" ? data.date : null

  if (!title || !slug || !isProjectCategory(category) || !description || !tags?.length || !link || !github || !date) {
    return null
  }

  const coverImage = typeof data.coverImage === "string" ? data.coverImage : undefined
  const coverAlt = typeof data.coverAlt === "string" ? data.coverAlt : undefined

  return {
    title,
    slug,
    category,
    description,
    tags,
    link,
    github,
    date,
    coverImage,
    coverAlt,
    content: "",
  }
}

export function getProjectFileSlugs(): string[] {
  if (!fs.existsSync(contentDir)) {
    return []
  }

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => path.basename(file, ".md"))
}

export function getProjectBySlug(slug: string): ProjectDoc | null {
  const fullPath = path.join(contentDir, `${slug}.md`)
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const raw = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(raw)
  const base = normalizeFrontmatter(data as Record<string, unknown>)
  if (!base) {
    return null
  }

  if (base.slug !== slug) {
    return null
  }

  return { ...base, content }
}

function projectSummaryFromDoc(doc: ProjectDoc): ProjectSummary {
  const { title, slug, category, description, tags, link, github, date, coverImage, coverAlt } = doc
  return { title, slug, category, description, tags, link, github, date, coverImage, coverAlt }
}

export function getAllProjects(): ProjectSummary[] {
  const items = getProjectFileSlugs()
    .map((fileSlug) => getProjectBySlug(fileSlug))
    .filter((doc): doc is ProjectDoc => doc !== null)
    .map(projectSummaryFromDoc)

  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
