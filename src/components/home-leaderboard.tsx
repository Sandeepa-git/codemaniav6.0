"use client";

import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import { Trophy, Crown, Medal, Star, ArrowRight } from "lucide-react";
import { SELECTED_TEAMS } from '@/constants/selected-teams';
import Link from "next/link";

const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="size-5 text-yellow-400" />;
    if (rank === 2) return <Medal className="size-5 text-gray-300" />;
    if (rank === 3) return <Medal className="size-5 text-amber-600" />;
    return null;
};

const getRankStyle = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-500/15 to-orange-500/10 border-yellow-500/30 shadow-lg shadow-yellow-500/5';
    if (rank === 2) return 'bg-gradient-to-r from-gray-400/10 to-gray-500/5 border-gray-400/20';
    if (rank === 3) return 'bg-gradient-to-r from-amber-700/10 to-amber-600/5 border-amber-600/20';
    return 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]';
};

const getRankBadgeStyle = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-br from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-500/30';
    if (rank === 2) return 'bg-gradient-to-br from-gray-300 to-gray-400 text-black';
    if (rank === 3) return 'bg-gradient-to-br from-amber-600 to-amber-700 text-white';
    return 'bg-white/5 text-gray-400 border border-white/5';
};

const HomeLeaderboard = () => {
    return (
        <Wrapper className="py-20 lg:py-32 relative overflow-hidden">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24 px-4">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Grand Finale" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-4xl md:text-6xl lg:text-6xl font-folkra font-medium !leading-[1.1] text-white">
                        Final <span className="text-orange-500">15 Teams</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-xl mt-4 md:mt-6 max-w-2xl mx-auto">
                        These top-performing teams have been selected for the Codemania v6.0 Grand Finale.
                        <span className="text-orange-500 font-medium mt-1 md:mt-2 block">
                            Based on Virtual Datathon rankings.
                        </span>
                    </p>
                </AnimationContainer>
            </div>

            {/* Top 3 Podium */}
            <div className="max-w-5xl mx-auto px-4 mb-12 md:mb-16">
                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {/* 2nd Place */}
                        <div className="order-2 md:order-1 md:mt-8">
                            <div className="relative p-6 md:p-8 rounded-[2rem] bg-gradient-to-b from-gray-400/10 to-transparent border border-gray-400/20 text-center group hover:border-gray-400/40 transition-all duration-500">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-300 to-gray-400 text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    2nd Place
                                </div>
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-black text-2xl font-bold mt-4 mb-4 shadow-lg">
                                    2
                                </div>
                                <h3 className="text-xl md:text-2xl font-folkra font-medium text-white mb-1">{SELECTED_TEAMS[1].teamName}</h3>
                                <p className="text-gray-400 text-xs md:text-sm mb-3">{SELECTED_TEAMS[1].uni}</p>
                                <div className="text-gray-300 font-bold text-3xl md:text-4xl tabular-nums font-folkra">{SELECTED_TEAMS[1].points}</div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Points</p>
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-0.5">Team Leader</p>
                                    <p className="text-sm text-gray-300 truncate">{SELECTED_TEAMS[1].leader}</p>
                                </div>
                            </div>
                        </div>

                        {/* 1st Place */}
                        <div className="order-1 md:order-2">
                            <div className="relative p-6 md:p-8 rounded-[2rem] bg-gradient-to-b from-yellow-500/15 to-orange-500/5 border border-yellow-500/30 text-center group hover:border-yellow-500/50 transition-all duration-500 shadow-2xl shadow-orange-500/10">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-yellow-500/30">
                                    🏆 Champion
                                </div>
                                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black text-3xl font-bold mt-4 mb-4 shadow-xl shadow-yellow-500/30">
                                    1
                                </div>
                                <h3 className="text-2xl md:text-3xl font-folkra font-medium text-white mb-1">{SELECTED_TEAMS[0].teamName}</h3>
                                <p className="text-gray-400 text-xs md:text-sm mb-3">{SELECTED_TEAMS[0].uni}</p>
                                <div className="text-orange-500 font-bold text-4xl md:text-5xl tabular-nums font-folkra">{SELECTED_TEAMS[0].points}</div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Points</p>
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-0.5">Team Leader</p>
                                    <p className="text-sm text-gray-300 truncate">{SELECTED_TEAMS[0].leader}</p>
                                </div>
                            </div>
                        </div>

                        {/* 3rd Place */}
                        <div className="order-3 md:mt-12">
                            <div className="relative p-6 md:p-8 rounded-[2rem] bg-gradient-to-b from-amber-700/10 to-transparent border border-amber-600/20 text-center group hover:border-amber-600/40 transition-all duration-500">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    3rd Place
                                </div>
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white text-2xl font-bold mt-4 mb-4 shadow-lg">
                                    3
                                </div>
                                <h3 className="text-xl md:text-2xl font-folkra font-medium text-white mb-1">{SELECTED_TEAMS[2].teamName}</h3>
                                <p className="text-gray-400 text-xs md:text-sm mb-3">{SELECTED_TEAMS[2].uni}</p>
                                <div className="text-amber-500 font-bold text-3xl md:text-4xl tabular-nums font-folkra">{SELECTED_TEAMS[2].points}</div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Points</p>
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-0.5">Team Leader</p>
                                    <p className="text-sm text-gray-300 truncate">{SELECTED_TEAMS[2].leader}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </div>

            {/* View All Link */}
            <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="flex justify-center mt-8">
                    <Link
                        href="/grand-finale"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-500 text-gray-300 hover:text-white"
                    >
                        <span className="font-medium">View All 15 Teams</span>
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </AnimationContainer>

            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 text-orange-500/[0.03] rotate-12 -z-10 pointer-events-none">
                <Trophy size={400} />
            </div>
            <div className="absolute -bottom-20 -left-20 text-orange-500/[0.03] -rotate-12 -z-10 pointer-events-none">
                <Star size={350} />
            </div>
        </Wrapper>
    );
};

export default HomeLeaderboard;
