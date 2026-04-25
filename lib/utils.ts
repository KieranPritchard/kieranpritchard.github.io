import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges CSS class names using clsx and tailwind-merge.
 * This ensures that Tailwind classes are correctly overridden when merged.
 * 
 * @param inputs - A list of class values to be merged.
 * @returns A string of merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calculates the estimated reading time for a given content string.
 * Uses a standard average of 200 words per minute.
 * 
 * @param content - The text content to analyze.
 * @returns A formatted string indicating the reading time (e.g., "5 min read").
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

