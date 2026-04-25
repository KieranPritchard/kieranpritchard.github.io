/**
 * Represents the categories a project can belong to.
 */
export type ProjectCategory = "web" | "security" | "automation"

/**
 * Metadata extracted from the project's markdown frontmatter.
 */
export type ProjectFrontmatter = {
  /** The title of the project. */
  title: string
  /** The unique slug used for the project URL. */
  slug: string
  /** The category of the project. */
  category: ProjectCategory
  /** A brief summary of the project. */
  description: string
  /** A list of technologies or tags associated with the project. */
  tags: string[]
  /** Link to the live project or demo. */
  link: string
  /** Link to the project's GitHub repository. */
  github: string
  /** ISO date string representing when the project was completed or published. */
  date: string
  /** Optional URL for the project's cover image. */
  coverImage?: string
  /** Optional alt text for the project's cover image. */
  coverAlt?: string
}

/**
 * Represents a project summary, used in listings and grids.
 * Currently equivalent to ProjectFrontmatter.
 */
export type ProjectSummary = ProjectFrontmatter

/**
 * Represents a full project document, including its markdown content.
 */
export type ProjectDoc = ProjectFrontmatter & {
  /** The full markdown content of the project page. */
  content: string
}

