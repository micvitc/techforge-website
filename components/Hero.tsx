import React from "react";
import { Code2, Rocket, Users } from "lucide-react";
import AuroraText from "./magicui/aurora-text";
import Image from "next/image";
function App() {
    return (
        <>
            <div
                id="hero"
                className="min-h-screen scroll-mt-20 bg-black flex items-center justify-center relative overflow-hidden"
            >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black"></div>

                {/* Minimal animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-zinc-800/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-zinc-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-6 py-16 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in">
                                    Code.
                                    <br />
                                    Innovate.
                                    <br />
                                    <AuroraText className="text-white p-1 rounded-md">
                                        Transform.
                                    </AuroraText>
                                    {/* <AuroraText>beautiful</AuroraText> */}
                                </h1>
                                <p className="text-zinc-400 text-lg md:text-xl max-w-lg">
                                    Join TechForge 2025 - 48 hours of coding,
                                    collaboration, and groundbreaking
                                    innovations. Be part of the next generation
                                    of tech visionaries.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg transition-all hover:bg-zinc-200 hover:scale-105 focus:ring-4 focus:ring-white/30 animate-fade-in-up">
                                    Register Now
                                </button>
                                <button className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-lg font-semibold text-lg transition-all hover:bg-zinc-800 focus:ring-4 focus:ring-white/30 backdrop-blur-sm animate-fade-in-up delay-100">
                                    Learn More
                                </button>
                            </div>

                            <div className="flex gap-8 text-zinc-400">
                                <div className="flex flex-col md:flex-row items-start gap-2">
                                    <Users className="w-6 h-6" />
                                    <span>1000+ Hackers</span>
                                </div>
                                <div className="flex flex-col md:flex-row items-start gap-2">
                                    <Code2 className="w-6 h-6" />
                                    <span>50+ Projects</span>
                                </div>
                                <div className="flex flex-col md:flex-row items-start gap-2">
                                    <Rocket className="w-6 h-6" />
                                    <span>$50K Prizes</span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent rounded-3xl backdrop-blur-sm"></div>
                                <Image
                                    src={"/hack.png"}
                                    alt="Hackathon Collaboration"
                                    className="rounded-xl shadow-2xl animate-float grayscale contrast-125 brightness-75"
                                    width={450}
                                    height={450}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Minimal grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
            </div>
        </>
    );
}

export default App;
