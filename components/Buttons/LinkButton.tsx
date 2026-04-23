"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

// Define the shape of our props for type safety
interface LinkButtonProps {
    kind?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    text: string
    link: string
    className?: string
}

/**
 * BaseLinkButton: The functional component logic.
 * We use forwardRef to expose the underlying DOM element, 
 * which is a requirement for motion() to attach animation listeners.
 */
const BaseLinkButton = React.forwardRef<HTMLDivElement, LinkButtonProps>(
    ({ kind = "default", text, link, className }, ref) => {
        return (
            <div ref={ref} className={cn("inline-block", className)}>
                {/* asChild forces the Button to pass its styles and behavior to the child (Link).
                    We nest the Icon inside the Link to ensure the entire area is a single 
                    accessible interactive element.
                */}
                <Button size={"lg"} variant={kind} asChild className="w-full rounded-md">
                    <Link href={link}>
                        {text}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        )
    }
)

// Set a display name for easier debugging in React DevTools
BaseLinkButton.displayName = "BaseLinkButton"

/**
 * LinkButton: The exported Motion-enhanced component.
 * By wrapping the BaseLinkButton in motion(), it inherits Framer Motion 
 * properties (initial, animate, whileHover, etc.) automatically.
 */
export const LinkButton = motion(BaseLinkButton)