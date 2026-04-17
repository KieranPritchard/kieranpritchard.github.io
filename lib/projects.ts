import "server-only"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { ProjectCategory, ProjectDoc, ProjectSummary } from "@/types/project"

// Stores the content directory path for ease of use
const contentDir = path.join(process.cwd(), "content/projects")

// Checks for the correct cataegory
function isProjectCategory(value: unknown): value is ProjectCategory {
  // Returns the correct value
  return value === "web" || value === "security" || value === "automation"
}

// Function to normalise frontmatter
function normalizeFrontmatter(data: Record<string, unknown>): ProjectDoc | null {
  // Stores front matter data if the correct data type is used
  const title = typeof data.title === "string" ? data.title : null
  const slug = typeof data.slug === "string" ? data.slug : null
  const category = data.category
  const description = typeof data.description === "string" ? data.description : null
  const tags = Array.isArray(data.tags) ? data.tags.filter((t): t is string => typeof t === "string") : null
  const link = typeof data.link === "string" ? data.link : null
  const github = typeof data.github === "string" ? data.github : null
  const date = typeof data.date === "string" ? data.date : null

  // Checks for if all the categorys are there if not returns null
  if (!title || !slug || !isProjectCategory(category) || !description || !tags?.length || !link || !github || !date) {
    return null
  }

  // Gets the cover image
  const coverImage = typeof data.coverImage === "string" ? data.coverImage : undefined
  // Gets the alt text
  const coverAlt = typeof data.coverAlt === "string" ? data.coverAlt : undefined

  // Returns the frontmatter
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

// Function to get the project file slugs
export function getProjectFileSlugs(): string[] {
  // Checks if the file does not exist
  if (!fs.existsSync(contentDir)) {
    // Returns an empty array
    return []
  }

  // Returns the file map
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md")) // Filters for md files
    .map((file) => path.basename(file, ".md"))
}

// Function to get the project by the slug
export function getProjectBySlug(slug: string): ProjectDoc | null {
  // Stores the full path
  const fullPath = path.join(contentDir, `${slug}.md`)
  
  // Checks if the file exists
  if (!fs.existsSync(fullPath)) {
    // Returns null
    return null
  }

  // Gets the raw file
  const raw = fs.readFileSync(fullPath, "utf8")
  // Gets the data and the content
  const { data, content } = matter(raw)
  // Gets the base of the file
  const base = normalizeFrontmatter(data as Record<string, unknown>)
  // Checks if it does not exist
  if (!base) {
    // Returns null
    return null
  }

  // Checks if there is not a slug
  if (base.slug !== slug) {
    return null
  }

  // Returns the base and content
  return { ...base, content }
}

// Gets the project summary from the doc
function projectSummaryFromDoc(doc: ProjectDoc): ProjectSummary {
  // Stores the project
  const { title, slug, category, description, tags, link, github, date, coverImage, coverAlt } = doc
  // Returns the project
  return { title, slug, category, description, tags, link, github, date, coverImage, coverAlt }
}

// Function to get all of the projects
export function getAllProjects(): ProjectSummary[] {
  // Stores the items
  const items = getProjectFileSlugs()
    // Maps them to by slug
    .map((fileSlug) => getProjectBySlug(fileSlug))
    // Filters for actual ones
    .filter((doc): doc is ProjectDoc => doc !== null)
    .map(projectSummaryFromDoc)

  // Sorts and returns the items
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
