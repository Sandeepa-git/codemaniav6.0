"use client";

import { Trophy, Medal, Star } from "lucide-react";
import { WINNERS } from "@/constants/winners";
import AnimationContainer from "@/components/global/animation-container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WinnersTable() {
    const topThree = WINNERS.slice(0, 3);
    const restOfWinners = WINNERS.slice(3);

    // Podium Order: 2nd, 1st, 3rd to place Winner in the middle
    const podiumTeams = [topThree[1], topThree[0], topThree[2]];

    return (
        <div className="mt-16 space-y-20">
            {/* Podium Section */}
            <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-6xl w-full pt-10 px-4">
                        {podiumTeams.map((team, idx) => {
                            const isFirst = team.rank === 1;
                            const Icon = isFirst ? Trophy : team.rank === 2 ? Medal : Star;
                            const cardBg = isFirst ? "bg-[#292211]" : "bg-[#111111]";
                            const borderColor = isFirst ? "border-[#4a3e1d]" : "border-[#1a1a1a]";
                            const iconColor = isFirst ? "text-[#facc15]" : team.rank === 2 ? "text-[#9ca3af]" : "text-[#d97706]";
                            const iconBoxBg = "bg-white/5 border border-white/10";

                            return (
                                <motion.div
                                    key={team.teamId}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + idx * 0.1 }}
                                    className={`relative rounded-[2rem] border-2 ${borderColor} ${cardBg} p-8 flex flex-col items-center text-center transition-all duration-500
                                        ${isFirst ? 'md:scale-[1.08] md:-translate-y-8 z-10 shadow-2xl shadow-black/50' : 'md:scale-95'}`}
                                >
                                    {/* Icon Box */}
                                    <div className={`mb-8 p-4 rounded-2xl ${iconBoxBg}`}>
                                        <Icon className={`w-8 h-8 ${iconColor}`} />
                                    </div>

                                    {/* Image Container */}
                                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 border border-white/10">
                                        {team.image ? (
                                            <Image
                                                src={team.image}
                                                alt={team.teamName}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                                                <Trophy className="w-12 h-12 text-zinc-800" />
                                            </div>
                                        )}
                                        {/* Rank Label */}
                                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white">
                                            Rank {team.rank}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="space-y-3">
                                        <h3 className={`text-3xl font-black transition-colors tracking-tight leading-none ${isFirst ? 'text-orange-500' : 'text-white'}`}>
                                            {team.teamName}
                                        </h3>
                                        <p className="text-gray-500 font-medium text-sm">
                                            {team.uni}
                                        </p>
                                    </div>

                                    {/* Points - Hidden in the specific card view requested but keeping for data completeness if needed, or removing to match image */}
                                    {/* I will remove it to match the image exactly */}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </AnimationContainer>

            {/* Remaining Leaderboard Section */}
            <AnimationContainer animation="fadeUp" delay={0.9}>
                <div className="max-w-5xl mx-auto space-y-4 pt-20 border-t border-white/5">
                    <div className="space-y-3">
                        {restOfWinners.map((team) => (
                            <div
                                key={team.teamId}
                                className="group/card flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 md:p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                            >
                                {/* Rank */}
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold bg-white/5 text-gray-400 border border-white/5">
                                    {team.rank}
                                </div>

                                {/* Team Info */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-bold text-lg">{team.teamName}</h4>
                                    <p className="text-gray-500 text-xs mt-0.5">{team.uni}</p>
                                </div>

                                {/* Leader */}
                                <div className="hidden lg:flex flex-col gap-1 flex-1">
                                    <span className="text-[10px] text-gray-600 uppercase tracking-widest leading-none">Leader</span>
                                    <span className="text-sm text-gray-400">{team.leader}</span>
                                </div>

                                {/* Team ID */}
                                <div className="hidden md:flex flex-col gap-1 shrink-0 px-6">
                                    <span className="text-[10px] text-gray-600 uppercase tracking-widest leading-none">Team ID</span>
                                    <span className="text-xs font-mono text-orange-500/70">{team.teamId}</span>
                                </div>

                                {/* Points */}
                                <div className="sm:text-right shrink-0 sm:pl-6 sm:border-l border-white/5">
                                    <div className="text-xl font-black text-white tabular-nums">
                                        {team.points.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </div>
                                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">Points</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimationContainer>
        </div>
    );
}
