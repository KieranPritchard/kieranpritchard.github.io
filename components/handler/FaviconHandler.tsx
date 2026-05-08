"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function FaviconHandler() {
    const { resolvedTheme } = useTheme()

    useEffect(() => {
    const icons = document.querySelectorAll('link[rel*="icon"]') as NodeListOf<HTMLLinkElement>
    
    icons.forEach(icon => {
        // Logic to switch based on filename or a data attribute
        if (resolvedTheme === "dark") {
            icon.href = icon.href.replace('light', 'dark')
        } else {
            icon.href = icon.href.replace('dark', 'light')
        }
    })
    }, [resolvedTheme])

  return null // This component doesn't render anything
}