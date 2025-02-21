import type { Metadata } from "next";
import "./globals.css";


import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
    subsets: ["latin"],
    display: "swap",
});

// Components Import
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollTracker from "@/components/ScrollTracker";

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
                className={`${workSans.className} antialiased bg-black`}
            >
                <Navbar />
                <ScrollTracker>{children}</ScrollTracker>
                <Footer />
            </body>
        </html>
    );
}
