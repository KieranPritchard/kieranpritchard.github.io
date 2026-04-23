"use client"

import { createContext, useContext, useState, ReactNode } from "react";

// Stores the context for the animation state
const MotionContext = createContext({
    isAnimationEnabled: true, // Stores wheter the animation is enabled or not
    toggleAnimation: () => {}, 
})

export const MotionProvider = ({children}: {children: ReactNode}) => {
    // Stores state for animation enabed
    const [isAnimationEnabled, setIsAnimationEnabled] = useState(true)
    // Switches between the two states
    const toggleAnimation = () => setIsAnimationEnabled((prev) => !prev)

    return (
        <MotionContext.Provider value={{ isAnimationEnabled, toggleAnimation}}>
            {children}
        </MotionContext.Provider>
    )
}

// Exports the provider
export const useMotionPreference = () => useContext(MotionContext)