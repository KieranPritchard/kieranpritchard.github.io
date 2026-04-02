import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Holds the types for each of the props
interface LinkButtonProps {
    kind?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    text: string
    link: string
    className?: string
}

// Creates a button where a link can be be used
export function LinkButton({ kind = "default", text, link, className }: Readonly<LinkButtonProps>) {
    // Returns a button with each of the props
    return (
        <Button variant={kind} asChild className={cn(className)}>
            <Link href={link}>
                {text}
            </Link>
        </Button>
    )
}
