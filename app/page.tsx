import React from "react";
import Hero from "@/components/Hero";
import GridCards from "@/components/GridCards";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const Home = () => {
    return (
        <div>
            <Hero />
            <GridCards />
            <Link
                href={"#hero"}
                className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-[85%] text-white rounded-full shadow-lg hover:bg-blue-600 transition-all"
            >
                <ArrowUp size={24} />
            </Link>
        </div>
    );
};

export default Home;
