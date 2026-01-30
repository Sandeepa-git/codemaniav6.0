"use client";

import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import { cn } from "@/lib";


const TIMELINE = () => {
    const timelineData = [
        {
            title: "Registrations & Promotions",
            date: "January 30, 2026",
            phase: "Checkpoint 01"
        },
        {
            title: "DATA PREPROCESSING & AUGMENTATION",
            date: "February 11, 2026",
            phase: "Workshops 01"
        },
        {
            title: "INTRODUCTION TO MACHINE LEARNING & DATA-DRIVEN THINKING",
            date: "February 16, 2026",
            phase: "Workshops 02"
        },
        {
            title: "VIRTUAL DATATHON (QUALIFIER)",
            date: "February 21, 2026",
            phase: "Checkpoint 04"
        },
        {
            title: "12-HOUR PHYSICAL GRAND FINALE DATATHON",
            date: "Feb 28, 2026 - Mar 01, 2026",
            phase: "Checkpoint 05"
        },
        {
            title: "AWARD CEREMONY",
            date: "Mar 01, 2026",
            phase: "Checkpoint 06"
        }
    ];

    return (
        <Wrapper className="py-20 lg:py-32">
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-4 mb-24">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Event Timeline" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-5xl font-medium mt-4 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        From Learning to the Final Datathon.
                    </h2>
                </AnimationContainer>
            </div>

            {/* Vertical Timeline Pipeline */}
            <div className="relative max-w-5xl mx-auto px-4">

                {/* Central Vertical Line (Desktop/Mobile) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-600/0 via-orange-500 to-orange-400/0 -translate-x-1/2 -z-10 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                    <div className="absolute inset-0 bg-white/10 animate-pulse rounded-full" />
                </div>

                <div className="flex flex-col gap-12 md:gap-24 relative">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className="w-full relative"
                        >
                            <div className={cn(
                                "flex items-center justify-center w-full relative",
                                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                            )}>
                                {/* Card Side */}
                                <div className={cn(
                                    "w-1/2 flex items-center",
                                    index % 2 === 0 ? "justify-end pr-3 xs:pr-6 sm:pr-8 md:pr-16" : "justify-start pl-3 xs:pl-6 sm:pl-8 md:pl-16"
                                )}>
                                    <div className={cn(
                                        "bg-neutral-900/40 border border-white/5 backdrop-blur-2xl rounded-[1rem] xs:rounded-[1.5rem] sm:rounded-[2.5rem] p-3 xs:p-4 sm:p-8 md:p-10 w-full max-w-sm shadow-2xl transition-all duration-500 hover:border-orange-500/40 hover:-translate-y-2 group relative overflow-hidden",
                                        index % 2 === 0 ? "text-right" : "text-left"
                                    )}>
                                        <div className="absolute -inset-px bg-gradient-to-br from-orange-500/10 to-transparent rounded-[1rem] xs:rounded-[1.5rem] sm:rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <span className="text-orange-500 text-[8px] xs:text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] xs:tracking-[0.2em] mb-1 xs:mb-2 sm:mb-4 block">{item.phase}</span>
                                        <h3 className="text-sm xs:text-base sm:text-xl lg:text-2xl font-medium text-white group-hover:text-orange-400 transition-colors leading-tight break-words hyphens-auto">
                                            {item.title}
                                        </h3>
                                        <div className={cn(
                                            "h-px w-4 xs:w-6 sm:w-10 bg-orange-500/20 my-2 xs:my-3 sm:my-5 transition-all group-hover:w-8 xs:group-hover:w-16",
                                            index % 2 === 0 ? "ml-auto" : "mr-auto"
                                        )} />
                                        <p className="text-[9px] xs:text-[10px] sm:text-sm md:text-base text-gray-400 font-medium tracking-tight bg-white/5 inline-block px-2 xs:px-3 sm:px-4 py-0.5 xs:py-1 sm:py-1.5 rounded-full whitespace-nowrap">{item.date}</p>
                                    </div>

                                    {/* Connecting Line (Branch - Static) */}
                                    <div className={cn(
                                        "absolute top-1/2 h-px bg-gradient-to-r from-orange-500 via-orange-500/20 to-transparent z-0 hidden md:block",
                                        index % 2 === 0
                                            ? "right-[50%] left-[calc(100%-8rem)] sm:left-[calc(100%-10rem)]"
                                            : "left-[50%] right-[calc(100%-8rem)] sm:right-[calc(100%-10rem)]"
                                    )} />
                                </div>

                                {/* Central Node - Static Glow */}
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-30">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-neutral-950 border border-orange-500/60 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all duration-500 group-hover:scale-125 relative">
                                        {/* Outer Glow Aura (Static) */}
                                        <div className="absolute inset-[-8px] rounded-full bg-orange-600/10 blur-xl" />
                                    </div>

                                    {/* Core glowing dot */}
                                    <div className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 rounded-full bg-orange-500 shadow-[0_0_20px_#f97316,0_0_40px_rgba(249,115,22,0.6)] z-40" />
                                </div>

                                {/* Empty Side Spacer */}
                                <div className="block w-1/2" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default TIMELINE;
