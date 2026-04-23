// components/AnimationWrapper.tsx
'use client'
import { MotionConfig } from "framer-motion";
import { useMotionPreference } from "./MotionContext";

export const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
    const { isAnimationEnabled } = useMotionPreference();
    return (
        <MotionConfig key={isAnimationEnabled ? 'on' : 'off'} reducedMotion={isAnimationEnabled ? 'never' : 'always'}>
            {children}
        </MotionConfig>
    );
};
