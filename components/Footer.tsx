import React from "react";
import { Code2, Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-zinc-800/50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-xl font-bold text-white">
                        TechForge
                    </span>
                </div>
                <p className="text-zinc-400 text-sm max-w-md">
                    Join the next generation of innovators at TechForge 2025. 48
                    hours of coding, collaboration, and breakthrough
                    innovations.
                </p>
                <div className="flex space-x-4 mt-4">
                    <Link
                        href="/"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Twitter className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-zinc-800/50 text-center">
                <p className="text-zinc-400 text-sm">
                    © 2025 TechForge. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
