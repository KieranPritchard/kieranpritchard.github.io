import ContentContainer from "@/components/sections/ContentContainer"
import Contact from "@/components/sections/contact/Contact"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Page of my contact details',
}

export default function Page() {
  return (
    <ContentContainer>
      <Contact />
    </ContentContainer>
  )
}

