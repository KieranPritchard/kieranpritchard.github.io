import ContentContainer from "@/components/pages/ContentContainer";
import About from "@/components/pages/HomePage/About";
import Intro from "@/components/pages/HomePage/Intro";
import TechStack from "@/components/pages/HomePage/TechStack";
import WhatIDo from "@/components/pages/HomePage/WhatIDo";
import FeaturedProjectsList from "@/components/pages/portfolio/FeaturedProjects";
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
