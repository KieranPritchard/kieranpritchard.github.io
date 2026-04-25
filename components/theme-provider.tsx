"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

/**
 * Custom ThemeProvider component that wraps the NextThemesProvider.
 * It also includes a hotkey listener for toggling themes.
 * 
 * @param children - The child components to be wrapped by the provider.
 * @param props - Additional props passed to the NextThemesProvider.
 * @returns The ThemeProvider component.
 */
function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeHotkey />
      {children}
    </NextThemesProvider>
  )
}

/**
 * Checks if the current event target is an element where typing is happening.
 * Used to prevent theme toggling when the user is typing in an input.
 * 
 * @param target - The event target to check.
 * @returns True if the target is a typing element, false otherwise.
 */
function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

/**
 * Component that adds a global keyboard listener for the 'D' key to toggle between light and dark modes.
 * It ignores the key press if the user is typing in an input field or using modifier keys.
 * 
 * @returns null (this is a side-effect only component).
 */
function ThemeHotkey() {
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    /**
     * Global keydown event listener.
     */
    function onKeyDown(event: KeyboardEvent) {
      // Ignore if event was already handled or is a repeat key press
      if (event.defaultPrevented || event.repeat) {
        return
      }

      // Ignore if any modifier keys are pressed
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      // Only listen for the 'D' key
      if (event.key.toLowerCase() !== "d") {
        return
      }

      // Ignore if the user is currently typing in an input
      if (isTypingTarget(event.target)) {
        return
      }

      // Toggle the theme
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export { ThemeProvider }

