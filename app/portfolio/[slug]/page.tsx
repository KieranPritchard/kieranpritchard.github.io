import Link from "next/link"
import { notFound } from "next/navigation"
import ContentContainer from "@/components/content/ContentContainer"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { ProjectArticleHeader } from "@/components/content/portfolio/ProjectArticleHeader"
import { ProjectBreadcrumbs } from "@/components/content/portfolio/ProjectBreadcrumbs"
import { ProjectMarkdown } from "@/components/content/portfolio/ProjectMarkdown"
import { getAllProjects, getProjectBySlug, getProjectFileSlugs } from "@/lib/projects"

export async function generateStaticParams() {
  return getProjectFileSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  return {
    title: `${project.title} · Portfolio`,
    description: project.description,
  }
}

export default async function Page({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const related = getAllProjects().filter((item) => item.slug !== project.slug).slice(0, 3)
  const { content, ...summary } = project

  return (
    <ContentContainer className="max-w-3xl pb-20">
      <ProjectBreadcrumbs
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title },
        ]}
      />

      <ProjectArticleHeader project={summary} className="mb-14" />

      <ProjectMarkdown content={content} />

      <div className="mt-16 flex flex-col gap-3 border-t pt-10 sm:flex-row">
        <LinkButton text="Source" link={project.github} kind="outline" className="sm:flex-1" />
        <LinkButton text="Live demo" link={project.link} kind="default" className="sm:flex-1" />
      </div>

      {related.length ? (
        <aside className="mt-16 rounded-xl border bg-muted/20 p-6">
          <h2 className="font-heading text-lg font-semibold">More projects</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {related.map((item) => (
              <li key={item.slug}>
                <Link className="text-primary hover:underline" href={`/portfolio/${item.slug}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </ContentContainer>
  )
}
