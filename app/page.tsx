import ContentContainer from "@/components/sections/ContentContainer";
import Intro from "@/components/sections/HomePage/Intro";
import TechStack from "@/components/sections/HomePage/TechStack";
import ThingsIBuilt from "@/components/sections/HomePage/ThingsIBuilt";
import WhatIDo from "@/components/sections/HomePage/WhatIDo";
import { getAllProjects } from "@/lib/projects";

/**
 * HomePage Component
 * 
 * The main landing page of the portfolio. 
 * Orchestrates multiple sections including the Intro/Hero, Disciplines (What I Do),
 * Featured Projects (Things I Built), and the Tech Stack marquee.
 */
export default function Page() {
  /**
   * Fetch all portfolio projects for use in the Intro and ThingsIBuilt sections.
   */
  const projects = getAllProjects()

  return (
    <>
      {/* Intro Section: Hero area with primary call-to-action */}
      <ContentContainer>
        <Intro projects={projects}/>
      </ContentContainer>

      {/* Disciplines Section: Highlighting core areas of expertise */}
      <ContentContainer>
        <WhatIDo />
      </ContentContainer>

      {/* Featured Projects Section: Showcasing selected work */}
      <ContentContainer>
        <ThingsIBuilt projects={projects} />
      </ContentContainer>

      {/* Tech Stack Section: Infinite marquee of tools and technologies */}
      <ContentContainer>
        <TechStack />
      </ContentContainer>
    </>
  )
}

