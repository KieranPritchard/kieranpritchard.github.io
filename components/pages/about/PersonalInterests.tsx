"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * PersonalInterests component: Showcases non-professional hobbies and tastes.
 * Uses a clean grid layout to match the rest of the portfolio's minimalist aesthetic.
 */
export default function PersonalInterests({ className }: Readonly<{ className?: string }>) {
    const musicList = [
        "Bring Me The Horizon", "Bad Omens", "Bilmuri", "Marilyn Manson", "Sleep Token", 
        "Linkin Park", "Evanescence", "Depeche Mode", "Panic! at the Disco", 
        "Fall Out Boy", "My Chemical Romance", "Paramore", "Halsey", 
        "Spiritbox", "Poppy", "NIN", "The Cure"
    ]

    const mediaList = [
        "Doctor Who", "Peaky Blinders", "Stranger Things", "Torchwood", 
        "Dexter", "AHS", "Futurama", "Helluva Boss", "Pokémon"
    ]

    // Animation variants for staggered entrance
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.4, ease: "easeOut" } 
        }
    }

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8", className)}>
            
            {/* Header: Section Title */}
            <motion.div 
                className="mb-16 space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <p className="text-xs font-mono uppercase tracking-widest text-primary">
                    - Interests
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Beyond the code.
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full mt-4" />
            </motion.div>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Soundtrack Section */}
                <motion.div className="space-y-6" variants={itemVariants}>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                        The Soundtrack
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Music is my primary fuel for focus. My rotation leans heavily into 
                        alternative, industrial, and emo-rock.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {musicList.map((artist) => (
                            <span key={artist} className="text-xs font-mono text-primary/80 border border-primary/20 px-2 py-1 rounded">
                                {artist}
                            </span>
                        ))}
                    </div>
                    <div className="pt-4 border-t border-border/50">
                        <h4 className="text-sm font-bold text-foreground mb-2">Physical Media</h4>
                        <p className="text-sm text-muted-foreground">
                            Collector of Vinyl and Blu-Ray, valuing high-fidelity audio and tangible media ownership.
                        </p>
                    </div>
                </motion.div>

                {/* Hobbies Section */}
                <motion.div className="space-y-6" variants={itemVariants}>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                        Hobbies & Media
                    </h3>
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-foreground">Film & TV</h4>
                        <div className="flex flex-wrap gap-2">
                            {mediaList.map((show) => (
                                <span key={show} className="text-xs font-medium text-foreground bg-muted px-2 py-1 rounded">
                                    {show}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-4 border-t border-border/50">
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-foreground">Creative</h4>
                            <p className="text-sm text-muted-foreground">Photography & Landscapes</p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-foreground">Active</h4>
                            <p className="text-sm text-muted-foreground">Gaming & CTF Events</p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-foreground">Technical</h4>
                            <p className="text-sm text-muted-foreground">Side Projects & Security</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}