// app/blog/page.tsx
import AboutMe from "@/components/sections/blog/AboutMe"
import TrendingTopics from "@/components/sections/blog/TrendingTopics"
import BlogList from "@/components/sections/blog/BlogList"
import { Metadata } from 'next'
import ContentContainer from "@/components/sections/ContentContainer"
import type { BlogSummary } from "@/types/blog"
import  WhoAmI from "@/components/sections/blog/Widgets/WhoAmI"
import TagCloud from "@/components/sections/blog/Widgets/TagCloud"
import { getAllBlogs } from "@/lib/blogs"

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Unfinished',
}

export default async function Page() {
    // Stores the blogs
    const blogs = getAllBlogs()
    
    return (
        <ContentContainer>
            <BlogList posts={blogs} />
        </ContentContainer>
    )
}