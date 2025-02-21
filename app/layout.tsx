import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components Import
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollTracker from "@/components/ScrollTracker";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tech Forge",
    description: "Tech Forge Hackathon website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
            >
                <Navbar />
                <ScrollTracker>{children}</ScrollTracker>
                <Footer />
            </body>
        </html>
    );
}
