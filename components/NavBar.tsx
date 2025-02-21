"use client";
import React, { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const clubs = [
    {
        name: "Microsoft Innovations Club",
        logo: "",
        site: "",
    },
    {
        name: "Business Innovations Club",
        logo: "",
        site: "",
    },
    {
        name: "Event Management Club",
        logo: "",
        site: "",
    },
];

const Navbar = ({}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const Links = [
        { label: "Event", href: "#event" },
        { label: "Speakers & Jury", href: "#jury" },
        { label: "Sponsors", href: "#sponsors" },
        { label: "Organizing Clubs", href: "" },
    ];

    return (
        <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                <Code2 className="w-5 h-5 text-black" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                TechForge
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Navigation Links */}
                        <div className="flex space-x-6">
                            {Links.map((link, index) => (
                                <React.Fragment key={index}>
                                    {link.label === "Organizing Clubs" ? (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-medium focus:outline-none">
                                                {link.label}
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="bg-zinc-900 border-zinc-800 text-zinc-400">
                                                {clubs.map((club, idx) => (
                                                    <DropdownMenuItem
                                                        key={idx}
                                                        className="hover:bg-zinc-800 cursor-pointer"
                                                    >
                                                        {club.name}
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold transition-all hover:bg-zinc-200 hover:scale-105 focus:ring-4 focus:ring-white/30">
                            Join Hackathon
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-zinc-400 hover:text-white transition-colors"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden bg-zinc-900/90 backdrop-blur-lg`}
            >
                <div className="px-4 pt-2 pb-3 space-y-1">
                    <div className="flex flex-col space-y-3">
                        {Links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-4">
                        <button className="w-full px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold transition-all hover:bg-zinc-200 hover:scale-105 focus:ring-4 focus:ring-white/30">
                            Join Hackathon
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
