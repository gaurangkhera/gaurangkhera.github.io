import { cn } from "@/lib/utils";
import React from "react";

export default function Heading({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <h1 className={cn("relative pb-3 z-10  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  mt-20 font-bold", className)}>
            {children}
        </h1>
    )
}