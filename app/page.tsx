import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import Hero from "@/components/Hero";
import GridCards from "@/components/GridCards";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Kawai from "@/components/Kawai";

const Home = () => {
    return (
        <div>
            <Hero />
            <GridCards />
            <Speakers />
            <Sponsors />
            <Kawai />

            {/* Floating Button */}
            <Link
                href={"#hero"}
                className="fixed bottom-6 right-6 p-3 bg-zinc-600/50 border border-zinc-600/60  hover:opacity-[85%] text-white rounded-full shadow-lg transition-all"
            >
                <ArrowUp size={24} />
            </Link>
        </div>
    );
};

export default Home;
