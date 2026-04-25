import AboutMe from "@/components/sections/about/About";
import Certifications from "@/components/sections/about/Certifications";
import ExperienceTimeline from "@/components/sections/about/Expierence";
import NowSection from "@/components/sections/about/Now";
import PersonalInterests from "@/components/sections/about/PersonalInterests";
import Skills from "@/components/sections/about/Skills";
import ContentContainer from "@/components/sections/ContentContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'Page detailing who I am',
}


export default function Page() {
  return (
    <>
      <ContentContainer>
        <AboutMe/>
      </ContentContainer>
      <ContentContainer>
        <ExperienceTimeline />
      </ContentContainer>
      <ContentContainer>
        <Skills />
      </ContentContainer>
      <ContentContainer>
        <PersonalInterests />
      </ContentContainer>
      <ContentContainer>
        <Certifications />
      </ContentContainer>
      <ContentContainer>
        <NowSection />
      </ContentContainer>
    </>
  )
}
