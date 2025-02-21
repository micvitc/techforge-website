"use client";

import { MapPin, Calendar, Award, Cpu, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function GridCards() {
    return (
        <>
            <ul id="event" className="scroll-mt-20 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 my-10 mx-5">
                <GridItem
                    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                    icon={<MapPin className="h-4 w-4 text-white" />} // Icon for Venue
                    title="Venue: MG Auditorium at VIT Chennai"
                    description="Join us at the prestigious MG Auditorium, VIT Chennai, for an unforgettable hackathon experience. A state-of-the-art venue designed to inspire innovation and collaboration."
                />

                <GridItem
                    area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                    icon={<Calendar className="h-4 w-4 text-white" />} // Icon for Date
                    title="Date: 2nd to 4th April"
                    description="Mark your calendars! The hackathon will run from April 2nd to April 4th. Three days of intense coding, creativity, and innovation await you."
                />

                <GridItem
                    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                    icon={<Award className="h-4 w-4 text-white" />} // Icon for Prize Pool
                    title="Prize Pool: ₹10,000 INR"
                    description="Compete for an exciting prize pool of ₹10,000 INR! Showcase your skills, creativity, and teamwork to win big and make your mark in the tech community."
                />

                <GridItem
                    area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                    icon={<Cpu className="h-4 w-4 text-white" />} // Icon for Hardware & Software
                    title="Tech Hackathon: Hardware & Software Projects"
                    description="This hackathon is all about innovation! Whether you're into hardware, software, or both, bring your ideas to life. Build cutting-edge projects that solve real-world problems."
                />

                <GridItem
                    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                    icon={<Sparkles className="h-4 w-4 text-white" />} // Icon for Collaboration
                    title="What to Expect"
                    description="A platform to collaborate, learn, and innovate. Network with industry experts, attend workshops, and turn your ideas into reality. Let's build the future together!"
                />
            </ul>
        </>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full  bg-zinc-900/30 border border-gray-300/10  p-2  rounded-xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2 ">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                                {title}
                            </h3>
                            <h2
                                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-white"
                            >
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
