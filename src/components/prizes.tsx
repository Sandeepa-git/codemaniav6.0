"use client";

import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";
import { Trophy } from "lucide-react";
import Image from "next/image";

const Prizes = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Desktop Image Section (Left) */}
                <AnimationContainer animation="fadeRight" delay={0.2} className="hidden lg:block relative w-full h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src="/images/prizes-enhanced.png"
                        alt="Codemania Prizes"
                        fill
                        unoptimized
                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </AnimationContainer>

                {/* Content Section (Right) */}
                <div className="relative w-full rounded-[2rem] lg:rounded-none overflow-hidden lg:overflow-visible border border-white/10 lg:border-none bg-neutral-900/50 lg:bg-transparent p-8 lg:p-0">

                    {/* Mobile Background Image (Low Opacity) */}
                    <div className="absolute inset-0 lg:hidden z-0">
                        <Image
                            src="/images/prizes-enhanced.png"
                            alt="Background"
                            fill
                            unoptimized
                            className="object-cover object-top opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#101010]/80 via-[#101010]/60 to-[#101010]/90" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                        <AnimationContainer animation="fadeUp" delay={0.2}>
                            <SectionBadge title="Prize Pool & Awards" />
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.3}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400 leading-tight">
                                Over LKR 60,000 <br className="hidden lg:block" /> in Prizes & Recognition
                            </h2>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.4} className="w-full">
                            <div className="flex flex-col gap-4 mt-2">
                                <h3 className="text-xl sm:text-2xl font-bold text-orange-500 flex items-center justify-center lg:justify-start gap-2">
                                    <Trophy className="w-6 h-6" />
                                    What’s at Stake
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-loose">
                                    Top-performing teams of Codemania v6.0 will be recognized for their analytical accuracy, innovation, and data-driven decision making. Winners will receive cash prizes, certificates, and island-wide recognition for their performance.
                                </p>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

            </div>
        </Wrapper>
    );
};

export default Prizes;
