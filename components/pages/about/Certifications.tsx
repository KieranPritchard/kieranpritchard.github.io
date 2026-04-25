"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ExternalLink, Award } from "lucide-react"

/**
 * Certifications Component
 * 
 * Displays a gallery of earned credentials and certifications in a grid.
 * Each certification includes the title, issuer, date, and a verification link.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default function Certifications({ className }: Readonly<{ className?: string }>) {
    /**
     * Data set for earned certifications.
     */
    const certs = [
        {
            title: "Networking Basics",
            issuer: "Cisco",
            date: "2026",
            link: "https://www.credly.com/badges/2043f345-bf54-41de-9814-4af729f2ae1a/linked_in_profile",
        },{
            title: "Miro essentials",
            issuer: "Miro",
            date: "2025",
            link: "https://www.credly.com/badges/b3b65929-44a0-4f26-8693-063afbb36d97/linked_in_profile",
        },
        {
            title: "Junior Cybersecurity Analyst Career Path",
            issuer: "Cisco",
            date: "2025",
            link: "https://www.credly.com/badges/911b0c2b-6962-44a5-b37d-2f0dc5a30419/linked_in_profile",
        },
        {
            title: "Operating Systems Basics",
            issuer: "Cisco",
            date: "2025",
            link: "https://www.credly.com/badges/72195a5c-7dc9-4ebd-8e31-c360290dac7e/linked_in_profile",
        },
        {
            title: "Computer Hardware Basics",
            issuer: "Cisco",
            date: "2025",
            link: "https://www.credly.com/badges/f594a8f1-43fc-4693-b9c1-e066814332ae/linked_in_profile",
        },
        {
            title: "AWS Educate Getting Started with Networking",
            issuer: "Amazon Web Services (AWS)",
            date: "2025",
            link: "https://www.credly.com/badges/7217d462-4138-48ca-85f7-bae69500444c/linked_in_profile",
        },
        {
            title: "AWS Educate Getting Started with Compute",
            issuer: "Amazon Web Services (AWS)",
            date: "2025",
            link: "https://www.credly.com/badges/a7580ec0-a90b-4206-b3fc-8b77b7bce671/linked_in_profile",
        },
        {
            title: "AWS Educate Getting Started with Storage",
            issuer: "Amazon Web Services (AWS)",
            date: "2025",
            link: "https://www.credly.com/badges/b5507684-1b68-4c9f-8bbd-3120ea65651c/linked_in_profile",
        },
        {
            title: "AWS Educate Introduction to Cloud 101",
            issuer: "Amazon Web Services (AWS)",
            date: "2025",
            link: "https://www.credly.com/badges/f91a4dbc-8835-41fb-81fb-a74d33304ae2/linked_in_profile",
        },
        {
            title: "Introduction to JavaScript",
            issuer: "Sololearn",
            date: "2024",
            link: "https://www.sololearn.com/en/certificates/CC-TMBKLXCV",
        },
        {
            title: "Introduction to cyber security stay safe online",
            issuer: "The Open University",
            date: "2024",
            link: "https://www.open.edu/openlearn/badges/badge.php?hash=02c3faa491713ae91ba2c6e2d345e93d4224af23",
        },
        {
            title: "Introduction to C++",
            issuer: "Sololearn",
            date: "2024",
            link: "https://www.sololearn.com/en/certificates/CC-36D2Z1ZB",
        },
        {
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

    /**
     * Grid variants for staggering entrance of certification cards.
     */
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    }

    /**
     * Individual card entrance variants.
     */
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    }

    return (
        <section
            id="certifications"
            className={cn("mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8", className)}
        >
            {/* Section Header */}
            <motion.div
                className="mb-16 space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <p className="text-xs font-mono uppercase tracking-widest text-primary">- Certifications</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Receipts.</h2>
                <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
            </motion.div>

            {/* Certification Grid */}
            <motion.div
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/50"
                    >
                        <div className="space-y-4">
                            {/* Decorative Icon Box */}
                            <div className="inline-flex items-center justify-center rounded-lg bg-primary/30 p-2.5 text-primary">
                                <Award className="h-5 w-5" />
                            </div>
                            
                            {/* Certification Title */}
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                                {cert.title}
                            </h3>
                            
                            {/* Metadata: Issuer and Year */}
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                                    {cert.issuer}
                                </span>
                                <span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
                            </div>
                        </div>

                        {/* External Link for Verification */}
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 flex items-center gap-2 text-xs font-bold text-primary hover:underline underline-offset-4"
                        >
                            Verify Credential
                            <ExternalLink className="h-3 w-3" />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}