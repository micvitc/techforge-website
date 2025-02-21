"use client";

import React from "react";

const MarqueeText = () => {
    const items = [
        "Artificial Intelligence",
        "Machine Learning",
        "Blockchain",
        "App Development",
        "Web Development",
    ];

    return (
        <div className="w-full overflow-hidden bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] py-3">
            <div className="animate-marquee whitespace-nowrap">
                {[...items, ...items, ...items, ...items].map((item, index) => (
                    <React.Fragment key={index}>
                        <span className="mx-4 text-lg font-semibold text-white">
                            {item}
                        </span>
                        <span className="text-white">•</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default MarqueeText;
