"use client";

import React, { useState } from "react";
import {
    Menu,
    X,
    Sun,
    Moon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); 

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    const Links = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Speakers & Jury",
            href: "/",
        },
        {
            label: "Organizing Clubs",
            href: "/",
        },
        {
            label : "Prizes",
            href : "/"
        },
    ];

    return (
        <nav
            className={`sticky w-full top-0 z-50 transition-colors duration-200 ${"transparent backdrop-blur-lg shadow-sm"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src={"mic_logo.svg"}
                                alt=""
                                height={25}
                                width={25}
                            />
                            <span
                                className={`text-xl font-bold ${
                                    isDarkMode ? "text-white" : "text-gray-900"
                                }`}
                            >
                                Tech Forge
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Navigation Links */}
                        <ul className="">
                            {Links.map((link, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className={`nav-link ${
                                            isDarkMode
                                                ? "text-gray-300 hover:text-white button-dark"
                                                : "text-gray-700 button"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </ul>

                        {/* CTA Button */}
                        <button
                            className={`px-4 py-2 rounded-md hover:opacity-[90%] text-sm font-medium transition-colors ${"bg-gradient"}`}
                        >
                            Join Hackathon
                        </button>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors ${
                                isDarkMode
                                    ? "bg-gray-800 hover:bg-gray-700"
                                    : "bg-gray-100 hover:bg-gray-200"
                            }`}
                        >
                            {isDarkMode ? (
                                <Sun className="h-5 w-5 text-yellow-500" />
                            ) : (
                                <Moon className="h-5 w-5 text-gray-600" />
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors ${
                                isDarkMode
                                    ? "bg-gray-800 hover:bg-gray-700"
                                    : "bg-gray-100 hover:bg-gray-200"
                            }`}
                        >
                            {isDarkMode ? (
                                <Sun className="h-5 w-5 text-yellow-500" />
                            ) : (
                                <Moon className="h-5 w-5 text-gray-600" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`focus:outline-none ${
                                isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
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
                className={`md:hidden transition-all duration-200 ease-in-out ${
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden ${
                    isDarkMode ? "transparent backdrop-blur-md" : "bg-white"
                }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <ul className="flex flex-col">
                        {Links.map((link, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className={`nav-link ${
                                        isDarkMode
                                            ? "text-gray-300 hover:text-white button-dark"
                                            : "text-gray-700 button"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </ul>
                    <div className="px-3 py-2">
                        <button
                            className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${"bg-gradient"}`}
                        >
                            Join Hackathon
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
