import ContentContainer from "@/components/content/ContentContainer"
import Contact from "@/components/content/contact/Contact"
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

