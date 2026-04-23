"use client"
import { useMotionPreference } from "../MotionContext";
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react";

export const AnimationToggle = () => {
    const { isAnimationEnabled, toggleAnimation } = useMotionPreference();

    return (
        <Button className="rounded-lg" variant={"outline"} size="icon" onClick={toggleAnimation}>
            <Clock />
        </Button>
    );
};
