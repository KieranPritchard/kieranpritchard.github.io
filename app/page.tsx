import ContentContainer from "@/components/content/ContentContainer";
import About from "@/components/content/HomePage/About";
import Intro from "@/components/content/HomePage/Intro";
import TechStack from "@/components/content/HomePage/TechStack";
import WhatIDo from "@/components/content/HomePage/WhatIDo";
import FeaturedProjectsList from "@/components/content/portfolio/FeaturedProjects";
import { getAllProjects } from "@/lib/projects";

export default function Page() {
  // Fetches the projects
  const projects = getAllProjects()

  // Returns the content
  return (
    <>
      <ContentContainer>
        <Intro />
      </ContentContainer>
      <ContentContainer>
        <WhatIDo />
      </ContentContainer>
      <ContentContainer>
        <About />
      </ContentContainer>
      <ContentContainer>
        <FeaturedProjectsList projects={projects}/>
      </ContentContainer>
      <ContentContainer>
        <TechStack />
      </ContentContainer>
    </>
  )
}
