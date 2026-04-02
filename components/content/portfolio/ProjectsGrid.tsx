"use client"

import { useState } from "react"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { cn } from "@/lib/utils"
import type { ProjectSummary } from "@/types/project"
import { ArrowRight, Code, Shield, Zap } from "lucide-react"

/**
 * ProjectsGrid Component
 * Features a filtered tab system and a responsive grid of project cards.
 */
export default function ProjectsGrid({className,projects}: Readonly<{ className?: string; projects: ProjectSummary[] }>) {
    const [filter, setFilter] = useState("all")

    const filteredProjects =
        filter === "all" ? projects : projects.filter((project) => project.category === filter)

    return (
        /* Section Wrapper: Handles global spacing and max-width */
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8", className)}>
            {/* Header Section: Title and category navigation */}
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Featured Projects</h2>
                <div className="h-1 w-20 rounded-full bg-primary" />
                </div>

                {/* Filter Tabs: Controls the state for the grid display */}
                <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setFilter}>
                <TabsList className="grid w-full grid-cols-4 md:w-auto">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="web">Web</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="automation">Auto</TabsTrigger>
                </TabsList>
                </Tabs>
            </div>

            {/* Project Grid: Transitions height smoothly when filtering (optional) */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                /* Project Card: Individual container for each work item */
                <Card
                    key={project.slug}
                    className="flex flex-col overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg"
                >
                    {/* Header: Displays category icon and title */}
                    <CardHeader className="space-y-1">
                    <div className="mb-2 flex items-center justify-between">
                        {project.category === "security" && <Shield className="h-5 w-5 text-primary" />}
                        {project.category === "web" && <Code className="h-5 w-5 text-primary" />}
                        {project.category === "automation" && <Zap className="h-5 w-5 text-primary" />}
                        <Badge variant="outline" className="capitalize">
                        {project.category}
                        </Badge>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl">
                        <Link
                            href={`/portfolio/${project.slug}`}
                            className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                        >
                        {project.title}
                        </Link>
                    </CardTitle>
                    </CardHeader>

                    {/* Content: Project summary and tech stack badges */}
                    <CardContent className="flex-1 space-y-4">
                        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[10px] font-bold uppercase">
                                {tag}
                            </Badge>
                            ))}
                        </div>
                        <Link
                            href={`/portfolio/${project.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                        >
                            Read case study
                            <ArrowRight className="h-4 w-4" aria-hidden />
                        </Link>
                    </CardContent>

                    {/* Footer: Action buttons for repository and live viewing */}
                    <CardFooter className="gap-2 border-t bg-muted/20 p-4 flex-col">
                        <LinkButton
                            text="Case study"
                            link={`/portfolio/${project.slug}`}
                            kind="default"
                            className="w-full h-9 text-xs"
                        />
                        <div className="flex w-full gap-2">
                            <LinkButton
                                text="Source"
                                link={project.github}
                                kind="outline"
                                className="w-full h-9 text-xs"
                            />
                        </div>
                    </CardFooter>
                </Card>
                ))}
            </div>
        </section>
    )
}
