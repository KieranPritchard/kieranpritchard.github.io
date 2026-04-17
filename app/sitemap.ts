import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // You can fetch dynamic data here (e.g., from a CMS or database)
  // const posts = await fetch('https://api.example.com/posts').then(res => res.json())

    const baseRules = [
        {
            url: 'https://kieranpritchard.github.io',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://kieranpritchard.github.io/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ] as const

    // If you had dynamic posts, you would map them here:
    // const postRules = posts.map((post) => ({
    //   url: `https://kieranpritchard.github.io/blog/${post.slug}`,
    //   lastModified: post.updatedAt,
    // }))

    return [...baseRules]
}