/**
 * Represents the categories a blog post can belong to.
 * Note: 'developement' is included to maintain compatibility with existing content.
 */
export type BlogCategory =
  | "development"
  | "developement"
  | "web"
  | "security"
  | "ai"
  | "review"

/**
 * Metadata extracted from the blog post's markdown frontmatter.
 */
export type BlogFrontmatter = {
    /** The title of the blog post. */
    title: string
    /** The unique slug used for the blog URL. */
    slug: string
    /** The category of the blog post. */
    category: BlogCategory
    /** A brief summary of the blog post. */
    description: string
    /** A list of tags associated with the blog post. */
    tags: string[]
    /** ISO date string representing when the post was published. */
    date: string
    /** Estimated reading time (e.g., "5 min read"). */
    readingTime: string
    /** Optional URL for the post's cover image. */
    coverImage?: string
    /** Optional alt text for the post's cover image. */
    coverAlt?: string
}

/**
 * Represents a blog post summary, used in listings and widgets.
 * Currently equivalent to BlogFrontmatter.
 */
export type BlogSummary = BlogFrontmatter

/**
 * Represents a full blog document, including its markdown content.
 */
export type BlogDoc = BlogFrontmatter & {
    /** The full markdown content of the blog post. */
    content: string
}