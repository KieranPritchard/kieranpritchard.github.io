import ContentContainer from "@/components/content/ContentContainer"
import ProjectsGrid from "@/components/content/portfolio/ProjectsGrid"
import { getAllProjects } from "@/lib/projects"

export default async function Page() {
    const projects = getAllProjects()

    return (
        <ContentContainer>
            <ProjectsGrid projects={projects} />
        </ContentContainer>
    )
}
