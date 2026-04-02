import { LinkButton } from "@/components/Buttons/LinkButton"
import { cn } from "@/lib/utils"
import { Award, ExternalLink } from "lucide-react"

/**
 * Certifications Component
 * Displays professional credentials and badges in a responsive grid.
 * Matches the visual language of the AboutMe section.
 */
export default function Certifications({ className }: Readonly<{ className?: string }>) {
    const certs = [
        {
            title: "Miro essentials",
            issuer: "Miro",
            date: "2025",
            link: "https://www.credly.com/badges/b3b65929-44a0-4f26-8693-063afbb36d97/linked_in_profile",
        },{
            title: "Junior Cybersecurity Analyst Career Path",
            issuer: "Cisco",
            date: "2025",
            link: "https://www.credly.com/badges/911b0c2b-6962-44a5-b37d-2f0dc5a30419/linked_in_profile",
        },{
            title: "Operating Systems Basics",
            issuer: "Cisco",
            date: "2025",
            link: "https://www.credly.com/badges/72195a5c-7dc9-4ebd-8e31-c360290dac7e/linked_in_profile",
        },{
            title: "Computer Hardware Basics",
            issuer: "Cisco",
            date: "2025",
            link: "https://www.credly.com/badges/f594a8f1-43fc-4693-b9c1-e066814332ae/linked_in_profile",
        },{
            title: "AWS Educate Getting Started with Networking",
            issuer: "Amazon Web Services (AWS)",
            date: "2025",
            link: "https://www.credly.com/badges/7217d462-4138-48ca-85f7-bae69500444c/linked_in_profile",
        },{
            title: "AWS Educate Getting Started with Compute",
            issuer: "Amazon Web Services (AWS)",
            date: "2025",
            link: "https://www.credly.com/badges/a7580ec0-a90b-4206-b3fc-8b77b7bce671/linked_in_profile",
        },{
            title: "AWS Educate Getting Started with Storage",
            issuer: "Amazon Web Services (AWS)",
            date: "2025",
            link: "https://www.credly.com/badges/b5507684-1b68-4c9f-8bbd-3120ea65651c/linked_in_profile",
        },{
            title: "AWS Educate Introduction to Cloud 101",
            issuer: "Amazon Web Services (AWS)",
            date: "2025",
            link: "https://www.credly.com/badges/f91a4dbc-8835-41fb-81fb-a74d33304ae2/linked_in_profile",
        },{
            title: "Introduction to JavaScript",
            issuer: "Sololearn",
            date: "2024",
            link: "https://www.sololearn.com/en/certificates/CC-TMBKLXCV",
        },{
            title: "Introduction to cyber security stay safe online",
            issuer: "The Open University",
            date: "2024",
            link: "https://www.open.edu/openlearn/badges/badge.php?hash=02c3faa491713ae91ba2c6e2d345e93d4224af23",
        },{
            title: "Introduction to C++",
            issuer: "Sololearn",
            date: "2024",
            link: "https://www.sololearn.com/en/certificates/CC-36D2Z1ZB",
        },{
            title: "Introduction to CSS",
            issuer: "Sololearn",
            date: "2024",
            link: "https://www.sololearn.com/en/certificates/CC-RL7RDSPS",
        },
        {
            title: "Introduction to HTML",
            issuer: "Sololearn",
            date: "2023",
            link: "https://www.sololearn.com/en/certificates/CC-TMBKLXCV",
        },
        {
            title: "Introduction to Python",
            issuer: "SoloLearn",
            date: "2023",
            link: "https://www.sololearn.com/en/certificates/CC-0S7TV3M2",
        }
    ]

    return (
        <section 
            id="certifications"
            className={cn(
                "mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8",
                className
            )}
        >
            {/* Header: Consistent with AboutMe styling */}
            <div className="mb-12 space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Certifications
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            {/* Certification Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certs.map((cert, index) => (
                    <div 
                        key={index}
                        className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-6 transition-all duration-300 hover:bg-muted/50 hover:shadow-lg"
                    >
                        {/* Icon/Badge Area */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Award className="h-6 w-6" />
                        </div>

                        {/* Content */}
                        <div className="space-y-1">
                            <h3 className="font-semibold text-xl text-foreground">
                                {cert.title}
                            </h3>
                            <p className="text-muted-foreground font-medium">
                                {cert.issuer}
                            </p>
                            <p className="text-sm text-muted-foreground/70">
                                Issued {cert.date}
                            </p>
                        </div>

                        {/* External Link Overlay or Button */}
                        <a 
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                        >
                            View Credential
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}