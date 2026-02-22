"use client";

import { useState, useEffect } from 'react';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import { Trophy, Medal, Timer, Award, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

interface LeaderboardEntry {
    rank: number;
    team: string;
    teamId: string;
    handle: string;
    leader: string;
    uni: string;
    score: string;
    status: string;
}

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchLeaderboard = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/leaderboard');
            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json();
            setLeaderboardData(data);
            setError(null);
        } catch (err) {
            setError('Unable to load rankings. Please try again later.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    return (
        <Wrapper className="py-12 lg:py-20 relative overflow-hidden">
            <div className="max-w-6xl mx-auto w-full mb-8 flex justify-between items-center">
                <Link href="/virtual-datathon" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group px-1 text-sm md:text-base">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Virtual Datathon
                </Link>
            </div>

            {/* Header Section */}
            <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24 px-4">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Rankings" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-4xl md:text-6xl lg:text-6xl font-folkra font-medium !leading-[1.1] text-white">
                        Top 15 Teams Selected for <span className="text-orange-500">Grand Finale</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                        Official results for Codemania v6.0 Virtual Datathon.
                    </p>
                </AnimationContainer>
            </div>

            {/* Standings Area */}
            <div className="max-w-6xl mx-auto px-4">
                {isLoading && leaderboardData.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <RefreshCw className="size-10 text-orange-500 animate-spin" />
                        <p className="text-gray-500 animate-pulse">Loading Official Results...</p>
                    </div>
                ) : error ? (
                    <div className="p-10 rounded-3xl bg-red-500/5 border border-red-500/20 text-center">
                        <p className="text-red-400 mb-4">{error}</p>
                        <button
                            onClick={fetchLeaderboard}
                            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-6 py-2 rounded-xl transition-all"
                        >
                            Retry Load
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {leaderboardData.map((item, idx) => (
                            <AnimationContainer key={`${item.rank}-${idx}`} animation="fadeUp" delay={0.1}>
                                <div className={`group/card flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8 rounded-[2rem] border transition-all duration-500 ${item.rank === 1
                                    ? 'bg-orange-500/10 border-orange-500/30 shadow-2xl shadow-orange-500/10'
                                    : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                                    }`}>

                                    {/* Rank & Points Group */}
                                    <div className="flex items-center justify-between md:justify-start gap-6">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner ${item.rank === 1 ? 'bg-orange-500 text-black' : 'bg-white/5 text-gray-400 border border-white/5'
                                            }`}>
                                            {item.rank}
                                        </div>
                                        <div className="md:hidden text-right">
                                            <div className="text-orange-500 font-bold text-3xl tabular-nums">{item.score}</div>
                                        </div>
                                    </div>

                                    {/* Team Info Group */}
                                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h4 className="text-xl md:text-2xl font-medium text-white truncate group-hover/card:text-orange-500 transition-colors">{item.team}</h4>
                                            </div>
                                            <p className="text-gray-400 text-sm md:text-base font-medium flex items-center gap-2">
                                                <Trophy className="size-3.5 text-orange-500/50" />
                                                {item.uni}
                                            </p>
                                        </div>

                                        <div className="flex flex-col justify-center gap-2 py-2 lg:py-0 border-t border-white/5 lg:border-t-0">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-600 uppercase tracking-widest mb-0.5">Team Leader</span>
                                                <span className="text-sm md:text-base text-gray-300 font-medium truncate">{item.leader}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-600 uppercase tracking-widest mb-0.5">Team ID</span>
                                                <span className="text-sm md:text-base text-orange-500/80 font-mono truncate">{item.teamId}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop Points */}
                                    <div className="hidden md:block text-right shrink-0 pl-8 border-l border-white/5">
                                        <div className="text-orange-500 font-bold text-4xl tabular-nums leading-none">{item.score}</div>
                                    </div>
                                </div>
                            </AnimationContainer>
                        ))}
                    </div>
                )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 text-orange-500/5 rotate-12 -z-10 group-hover:scale-110 transition-transform duration-700">
                <Trophy size={300} />
            </div>
            <div className="absolute -bottom-12 -left-12 text-orange-500/5 -rotate-12 -z-10 group-hover:scale-110 transition-transform duration-700">
                <Award size={300} />
            </div>

        </Wrapper>
    );
};

export default Leaderboard;
