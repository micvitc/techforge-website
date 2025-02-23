"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
    year: number;
    month: number; // 1-based month (e.g., 1 for January, 2 for February, etc.)
    day: number;
}

export default function Counter({ year, month, day }: CountdownTimerProps) {
    const targetDate = new Date(year, month - 1, day);

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return `${days}d.${hours.toString().padStart(2, "0")}h.${minutes
                .toString()
                .padStart(2, "0")}m.${seconds.toString().padStart(2, "0")}s`;
        } else {
            return "Hackathon has begun!";
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000); // Update every second

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="text-4xl md:text-6xl font-mono font-bold text-zinc-500">
            {timeLeft}
        </div>
    );
}
