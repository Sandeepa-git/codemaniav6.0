"use client";

import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Trophy, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

const Portals = () => {
    return (
        <Wrapper className="py-16 sm:py-24 lg:py-32">
            <div className="flex justify-center max-w-7xl mx-auto px-4">

                {/* 01. Leaderboard Portal - Hidden for now
                <AnimationContainer animation="fadeRight" delay={0.2}>
                    <div className="group relative p-6 sm:p-8 lg:p-12 rounded-3xl sm:rounded-[3.5rem] bg-neutral-900/60 border border-white/5 backdrop-blur-2xl overflow-hidden min-h-[380px] sm:h-[450px] flex flex-col justify-end transition-all duration-700 hover:border-orange-500/40 shadow-2xl">

                        <div className="absolute top-[-15%] sm:top-[-10%] right-[-15%] sm:right-[-10%] text-orange-500/5 rotate-12 transition-all duration-700 group-hover:scale-110 group-hover:text-orange-500/10">
                            <Trophy size={280} className="sm:w-[400px] sm:h-[400px]" strokeWidth={1} />
                        </div>

                        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" />

                        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 py-1 sm:py-1.5 px-3 sm:px-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                            Ranking Portal
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-folkra font-medium text-white mb-4 sm:mb-6 leading-tight">
                                See Who Rose <br /> to the <span className="text-orange-500">Top</span>
                            </h3>
                            <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-medium mb-6 sm:mb-10 max-w-md leading-relaxed">
                                Explore the final rankings and top-performing teams of Codemania v6.0.
                            </p>

                            <Link href="/leaderboard" className="group/btn inline-flex items-center gap-2 sm:gap-3 py-3 sm:py-4 px-6 sm:px-8 rounded-full bg-white text-black font-medium text-sm sm:text-base group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                                View Leaderboard
                                <ArrowRight className="size-4 sm:size-5 group-hover/btn:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </div>
                </AnimationContainer>
                */}

                {/* 02. Merchandise Portal */}
                <AnimationContainer animation="fadeUp" delay={0.3} className="w-full max-w-6xl">
                    <div className="group relative p-8 sm:p-12 lg:p-16 rounded-[2.5rem] sm:rounded-[4rem] bg-neutral-900/60 border border-white/5 backdrop-blur-2xl overflow-hidden min-h-[450px] w-full flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 hover:border-orange-500/40 shadow-2xl">

                        {/* Background Design Element */}
                        <div className="absolute top-[-15%] sm:top-[-10%] right-[-15%] sm:right-[-10%] text-orange-500/5 -rotate-12 transition-all duration-700 group-hover:scale-110 group-hover:text-orange-500/10 z-0">
                            <ShoppingBag size={400} className="sm:w-[500px] sm:h-[500px]" strokeWidth={1} />
                        </div>

                        {/* Animated Glow Grid Path */}
                        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.03] group-hover:opacity-[0.07] transition-opacity z-0" />

                        {/* Left Content */}
                        <div className="relative z-10 flex flex-col items-start text-left w-full lg:w-3/5">
                            <h3 className="text-4xl sm:text-5xl lg:text-7xl font-folkra font-medium text-white mb-6 sm:mb-8 leading-[1.1]">
                                Codemania <br /> <span className="text-orange-500">Merchandise</span>
                            </h3>
                            <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl font-medium mb-8 sm:mb-12 max-w-xl leading-relaxed">
                                Own exclusive Codemania v6.0 gear designed for competitors.
                            </p>

                            <Link href="/merchandise" className="group/btn inline-flex items-center gap-2 sm:gap-4 py-4 sm:py-5 px-8 sm:px-12 rounded-full bg-white text-black font-semibold text-base sm:text-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-black/20">
                                View Gallery
                                <ArrowRight className="size-5 sm:size-6 group-hover/btn:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        {/* Right Image with Blending */}
                        <div className="relative z-10 w-full lg:w-2/5 h-[300px] lg:h-[500px] overflow-hidden group/img">
                            {/* Blending Overlays */}
                            <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
                            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-neutral-900/10 via-transparent to-transparent hidden lg:block" />
                            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-l from-neutral-900/60 via-transparent to-transparent" />
                            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
                            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-neutral-900/40 via-transparent to-transparent" />

                            {/* Hover Highlight Overlay */}
                            <div className="absolute inset-0 bg-orange-500/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <img
                                src="/images/Codemania Photoshoot/2.jpg"
                                alt="Codemania Merchandise"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] opacity-60 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </div>
                </AnimationContainer>

            </div>
        </Wrapper>
    );
};

export default Portals;
