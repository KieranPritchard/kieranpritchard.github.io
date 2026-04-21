// app/blog/page.tsx
import AboutMe from "@/components/content/blog/AboutMe"
import TrendingTopics from "@/components/content/blog/TrendingTopics"
import BlogList from "@/components/content/blog/BlogList"
import { Metadata } from 'next'
import ContentContainer from "@/components/content/ContentContainer"
import type { BlogSummary } from "@/types/blog"
import  WhoAmI from "@/components/content/blog/Widgets/WhoAmI"
import TagCloud from "@/components/content/blog/Widgets/TagCloud"
import { getAllBlogs } from "@/lib/blogs"

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Unfinished',
}

export default async function Page() {
    // Stores the blogs
    const blogs = getAllBlogs()
    
    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 space-y-12">
            {/* Top Section */}
            <ContentContainer>
                <AboutMe />
            </ContentContainer>
            <ContentContainer>
                <TrendingTopics />
            </ContentContainer>

            {/* Layout Wrapper: Switches from column (mobile) to row (md+) */}
            <div className="flex flex-col md:flex-row gap-12 items-start">
                
                {/* Sidebar Column: Fixed width, won't shrink */}
                <aside className="w-full md:w-75 shrink-0 md:sticky md:top-24 space-y-8">
                    <WhoAmI />
                    <TagCloud posts={blogs} />
                </aside>
                
                {/* Main Content Column: Fills remaining space */}
                <main className="flex-1 w-full">
                    <BlogList posts={blogs} />
                </main>
            </div>
        </div>
    )
}