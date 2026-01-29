"use client";

import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import { Trophy, Medal, Timer, Award, ArrowLeft } from "lucide-react";
import Link from "next/link";

const LEADERBOARD_SKELETON = [
    { rank: 1, team: "Team Name", uni: "University Name", score: "---", status: "Winner" },
    { rank: 2, team: "Team Name", uni: "University Name", score: "---", status: "Runner Up" },
    { rank: 3, team: "Team Name", uni: "University Name", score: "---", status: "2nd Runner Up" },
];

const Leaderboard = () => {
    return (
        <Wrapper className="py-24 lg:py-40">
            <div className="max-w-5xl mx-auto w-full mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group px-1 text-sm md:text-base">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            {/* Header Section */}
            <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Rankings" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-folkra font-medium !leading-[1.1] text-white">
                        The Hall of <span className="text-orange-500">Fame</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                        Rankings will be dynamically updated as teams compete through the heats and grand finale.
                    </p>
                </AnimationContainer>
            </div>

            {/* Standings Table Area */}
            <div className="max-w-5xl mx-auto relative group overflow-hidden pl-4 pr-4 rounded-[2rem]">

                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 z-50 flex items-center justify-center p-8 backdrop-blur-[6px] rounded-[3.5rem] bg-black/40 border border-white/5 group-hover:bg-black/20 transition-all duration-700">
                    <AnimationContainer animation="scaleUp" delay={0.5}>
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="w-24 h-24 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center animate-pulse">
                                <Timer className="size-10 text-orange-500" />
                            </div>
                            <h3 className="text-4xl sm:text-5xl font-folkra font-medium text-white">Updating Soon</h3>
                            <p className="text-gray-400 text-lg max-w-md">
                                The official rankings of Codemania v6.0 will be published here after the final scores are validated.
                            </p>
                            <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
                        </div>
                    </AnimationContainer>
                </div>

                {/* Background Skeleton Design */}
                <div className="opacity-20 space-y-4">
                    {LEADERBOARD_SKELETON.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 sm:gap-6 p-4 sm:p-10 rounded-3xl bg-neutral-900/50 border border-white/5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl font-bold text-gray-500 shrink-0">
                                {item.rank}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="h-6 w-32 sm:w-48 bg-white/10 rounded-lg mb-2" />
                                <div className="h-4 w-20 sm:w-32 bg-white/5 rounded-lg" />
                            </div>
                            <div className="text-right shrink-0">
                                <div className="h-8 w-16 sm:w-20 bg-white/10 rounded-lg" />
                            </div>
                        </div>
                    ))}
                    {[4, 5, 6].map((i) => (
                        <div key={i} className="flex items-center gap-6 p-4 px-10 rounded-2xl bg-neutral-900/30 border border-white/5">
                            <div className="w-8 h-8 text-gray-700 font-bold">{i}</div>
                            <div className="flex-1 h-4 bg-white/5 rounded-md max-w-[200px]" />
                            <div className="h-4 bg-white/5 rounded-md w-16" />
                        </div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 text-orange-500/5 rotate-12 -z-10 group-hover:scale-110 transition-transform duration-700">
                    <Trophy size={300} />
                </div>
                <div className="absolute -bottom-12 -left-12 text-orange-500/5 -rotate-12 -z-10 group-hover:scale-110 transition-transform duration-700">
                    <Award size={300} />
                </div>
            </div>

            {/* Prize Quick Links / Teaser */}
            <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <AnimationContainer animation="fadeUp" delay={0.6}>
                    <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
                        <div className="p-4 rounded-2xl bg-yellow-500/10 mb-6">
                            <Medal className="size-8 text-yellow-500" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Champion</h4>
                        <p className="text-gray-500 text-sm">Most Innovative & Efficient Solution</p>
                    </div>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.7}>
                    <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
                        <div className="p-4 rounded-2xl bg-gray-300/10 mb-6">
                            <Medal className="size-8 text-gray-300" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Runner Up</h4>
                        <p className="text-gray-500 text-sm">Exceptional Analytical Performance</p>
                    </div>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.8}>
                    <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
                        <div className="p-4 rounded-2xl bg-orange-800/20 mb-6">
                            <Medal className="size-8 text-orange-700" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">2nd Runner Up</h4>
                        <p className="text-gray-500 text-sm">Strategic Data Visualization Expert</p>
                    </div>
                </AnimationContainer>
            </div>
        </Wrapper>
    );
};

export default Leaderboard;
