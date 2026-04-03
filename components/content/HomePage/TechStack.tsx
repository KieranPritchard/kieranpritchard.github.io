"use client"

import { motion } from "framer-motion"
import { 
    SiReact, 
    SiJavascript, 
    SiTailwindcss, 
    SiNodedotjs, 
    SiHtml5, 
    SiCss,
    SiGithub,
    SiPython,
    SiGo,
    SiBootstrap,
    SiGit,
    SiKalilinux,
    SiDocker
} from "@icons-pack/react-simple-icons"
import { cn } from "@/lib/utils"

const SKILLS = [
    { name: "HTML", Icon: SiHtml5},
    { name: "CSS", Icon: SiCss},
    { name: "JavaScript", Icon: SiJavascript},
    { name: "Python", Icon: SiPython},
    { name: "Go", Icon: SiGo},
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Bootstrap", Icon: SiBootstrap},
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "GitHub", Icon: SiGithub },
    { name: "Git", Icon: SiGit },
    { name: "Kali Linux", Icon: SiKalilinux },
    { name: "Docker", Icon: SiDocker }
]

export default function TechStack({ className }: { className?: string }) {
    return (
        <section className={cn("w-full py-12 overflow-hidden", className)}>
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                {/* Header matches your Intro component style */}
                <div className="flex flex-col gap-2 mb-10">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        Tech Stack
                    </h2>
                    <div className="h-1 w-12 bg-primary rounded-full" />
                </div>

                {/* This wrapper is the key to preventing sidebar layout breakage */}
                <div className="relative w-full overflow-hidden">
                    {/* Fading gradient masks for a smooth "fade in/out" look */}
                    <div className="absolute inset-y-0 left-0 w-12 z-10 bg-linear-to-r from-background to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-12 z-10 bg-linear-to-l from-background to-transparent" />

                    <motion.div 
                        className="flex w-max gap-8 py-2"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {/* Double the list for seamless infinite looping */}
                        {[...SKILLS, ...SKILLS].map((skill, index) => (
                            <div 
                                key={index} 
                                className="flex items-center gap-3 shrink-0 px-5 py-3 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/50 transition-all group"
                            >
                                <skill.Icon 
                                    className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" 
                                />
                                <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}