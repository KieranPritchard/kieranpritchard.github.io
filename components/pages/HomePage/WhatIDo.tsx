"use client"

import { motion } from "framer-motion"
import { Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { Lock, Code, HandHelping } from "lucide-react"

/**
 * WhatIDo component: Displays cards which provide information about what i do
*/
export default function WhatIDo({ className }: Readonly<{ className?: string }>) {
    // Stores data relating to professional services and expertise
    const items = [
        {
            title: "Ethical Hacking",
            description: "I actively compete in CTF challenges and develop custom automation tools and scripts to enhance security workflows.",
            icon: Lock
        },
        {
            title: "Software Development",
            description: "While specializing in software development for my T-Level course, I also build independent projects and custom digital solutions.",
            icon: Code
        },
        {
            title: "IT Support",
            description: "Experienced in providing technical assistance within professional IT environments, ensuring seamless support for team members.",
            icon: HandHelping
        }
    ]

    // Animation variants for the grid items: StaggerChildren set to 0.1 for a faster cascade
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    // Individual card animation: Defines the entry point and duration
        const cardVariants: Variants = {
            hidden: { opacity: 0, y: 20 },
            visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.5, ease: "easeOut" } 
            },
        }

    return(
        // Returns the what i do section
        <section
            id="what-i-do"
            className={cn(
                "mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8 overflow-hidden",
                className
            )}
        >
            {/* Header: Title section with sliding entrance and expanding underline */}
            <motion.div
                className="mb-12 space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Heading  */}
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    What I Do
                </h2>
                {/* Animated divider */}
                <motion.div 
                    className="h-1 bg-primary rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                />
            </motion.div>

            {/* Certification Grid: Dynamically generates cards with framer-motion stagger logic */}
            <motion.div 
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {items.map((item, index) => (
                    <motion.div 
                        key={index}
                        variants={cardVariants}
                        whileHover={{ 
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                        className="group relative flex flex-col items-center gap-4 rounded-2xl border border-border bg-muted/30 p-6 transition-colors duration-300 hover:bg-muted/50 hover:border-primary/50"
                    >
                        {/* Icon/Badge Area: Inverts colors and scales up on parent card hover */}
                        <div className="flex h-18 w-18 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                            <item.icon className="h-9 w-9" />
                        </div>

                        {/* Content: Title and Description*/}
                        <div className="space-y-1 text-center">
                            <h3 className="font-semibold text-xl text-foreground leading-tight group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground font-medium text-md">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}