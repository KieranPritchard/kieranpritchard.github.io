"use client"

import { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import TerminalLab from "./TerminalLab"

/**
 * InteractiveLabs Component: A specialized section dedicated to hands-on 
 * technical demonstrations. It acts as a structural wrapper for custom 
 * lab components like the TerminalLab emulator.
 */
export default function InteractiveLabs({ className }: { className?: string }) {

    // Orchestrates the entrance of the lab components to ensure a smooth, 
    // non-jarring load of complex UI elements like terminal windows.
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    return (
        <section className={cn("mx-auto w-full max-w-6xl px-4 py-16 md:px-6 overflow-hidden", className)}>
            {/* Section Header: Standardized branding with the primary underline reveal */}
            <motion.div 
                className="mb-12 space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Interactive Labs
                </h2>
                <motion.div 
                    className="h-1 bg-primary rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                />
            </motion.div>

            {/* Lab Execution Area: Responsive flex container for hosting multiple interactive modules */}
            <motion.div 
                className="flex flex-col gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Main terminal emulator component */}
                <TerminalLab />
            </motion.div>
        </section>
    )
}