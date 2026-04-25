import "server-only"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { ProjectCategory, ProjectDoc, ProjectSummary } from "@/types/project"

/**
 * Absolute path to the directory containing project content files.
 */
const contentDir = path.join(process.cwd(), "content/projects")

/**
 * Type guard to check if a value is a valid ProjectCategory.
 * 
 * @param value - The value to check.
 * @returns True if the value is a valid ProjectCategory, false otherwise.
 */
function isProjectCategory(value: unknown): value is ProjectCategory {
  return value === "web" || value === "security" || value === "automation"
}

/**
 * Normalizes and validates frontmatter data from a project markdown file.
 * 
 * @param data - The raw frontmatter data from gray-matter.
 * @returns A validated ProjectDoc object (metadata only, no content) or null if required fields are missing.
 */
function normalizeFrontmatter(data: Record<string, unknown>): ProjectDoc | null {
  // Extract and validate basic fields
  const title = typeof data.title === "string" ? data.title : null
  const slug = typeof data.slug === "string" ? data.slug : null
  const category = data.category
  const description = typeof data.description === "string" ? data.description : null
  const tags = Array.isArray(data.tags) ? data.tags.filter((t): t is string => typeof t === "string") : null
  const link = typeof data.link === "string" ? data.link : null
  const github = typeof data.github === "string" ? data.github : null
  const date = typeof data.date === "string" ? data.date : null

  // Ensure all mandatory fields are present
  if (!title || !slug || !isProjectCategory(category) || !description || !tags?.length || !link || !github || !date) {
    return null
  }

  // Optional fields
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

/**
 * Retrieves all project file slugs (filenames without extension) from the content directory.
 * 
 * @returns An array of slugs as strings.
 */
export function getProjectFileSlugs(): string[] {
  if (!fs.existsSync(contentDir)) {
    return []
  }

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => path.basename(file, ".md"))
}

/**
 * Fetches a single project by its slug.
 * 
 * @param slug - The unique identifier for the project.
 * @returns The project data (ProjectDoc) or null if not found or invalid.
 */
export function getProjectBySlug(slug: string): ProjectDoc | null {
  const fullPath = path.join(contentDir, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  // Read and parse markdown file
  const raw = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(raw)
  
  // Normalize and validate the frontmatter
  const base = normalizeFrontmatter(data as Record<string, unknown>)
  
  if (!base) {
    return null
  }

  // Security check: ensure the slug in frontmatter matches the requested slug
  if (base.slug !== slug) {
    return null
  }

  return { ...base, content }
}

/**
 * Converts a full ProjectDoc to a ProjectSummary by removing the content field.
 * 
 * @param doc - The full project document.
 * @returns A summary object containing metadata only.
 */
function projectSummaryFromDoc(doc: ProjectDoc): ProjectSummary {
  const { title, slug, category, description, tags, link, github, date, coverImage, coverAlt } = doc
  return { title, slug, category, description, tags, link, github, date, coverImage, coverAlt }
}

/**
 * Retrieves all projects, sorted by date in descending order.
 * 
 * @returns An array of ProjectSummary objects.
 */
export function getAllProjects(): ProjectSummary[] {
  const items = getProjectFileSlugs()
    .map((fileSlug) => getProjectBySlug(fileSlug))
    .filter((doc): doc is ProjectDoc => doc !== null)
    .map(projectSummaryFromDoc)

  // Sort by date: newest first
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

