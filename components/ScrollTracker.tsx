import React from "react";
import { ScrollProgress } from "./magicui/scroll-progress";

export default function ScrollTracker({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="z-10 rounded-lg">
            <ScrollProgress className="top-[65px]" />
            <h2 className="pb-4 font-bold">{children}</h2>
        </div>
    );
}
