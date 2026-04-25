'use client'
import { MotionConfig } from "framer-motion";
import { useMotionPreference } from "./MotionProvider";

/**
 * A wrapper component that configures Framer Motion's reduced motion settings
 * based on the user's animation preference from MotionContext.
 * 
 * @param children - The child components to be wrapped by the motion config.
 */
export const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
    const { isAnimationEnabled } = useMotionPreference();
    
    return (
        <MotionConfig 
            key={isAnimationEnabled ? 'on' : 'off'} 
            reducedMotion={isAnimationEnabled ? 'never' : 'always'}
        >
            {children}
        </MotionConfig>
    );
};

