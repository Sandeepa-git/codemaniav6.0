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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl w-full pt-32 px-4">
                        {podiumTeams.map((team, idx) => {
                            const isFirst = team.rank === 1;
                            const Icon = isFirst ? Trophy : team.rank === 2 ? Medal : Star;

                            // Interactive colors matching WinnersPreview
                            const accentColor = isFirst
                                ? "from-yellow-500/50 to-transparent"
                                : team.rank === 2
                                    ? "from-zinc-500/50 to-transparent"
                                    : "from-orange-900/50 to-transparent";

                            const borderColor = isFirst
                                ? "border-yellow-500/50"
                                : team.rank === 2
                                    ? "border-zinc-500/30"
                                    : "border-orange-900/40";

                            const iconColor = isFirst
                                ? "text-yellow-500"
                                : team.rank === 2
                                    ? "text-gray-400"
                                    : "text-orange-700";

                            return (
                                <motion.div
                                    key={team.teamId}
                                    initial={{ opacity: 0, y: 20, scale: 1 }}
                                    animate={{
                                        opacity: 1,
                                        y: isFirst ? -80 : 0,
                                        scale: isFirst ? 1.05 : 1
                                    }}
                                    transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                                    className={`group relative rounded-[2.5rem] border ${borderColor} bg-white/[0.02] hover:bg-white/[0.04] flex flex-col items-center transition-all duration-500 overflow-hidden
                                        ${isFirst ? 'z-10 shadow-2xl shadow-black/50 order-1 md:order-none' : team.rank === 2 ? 'order-2 md:order-none' : 'order-3 md:order-none'}`}
                                >
                                    {/* Glass Highlight Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Image Container - Balanced Rectangle */}
                                    <div className="relative z-10 w-full aspect-[3/2] overflow-hidden border-b border-white/10 group-hover:border-white/20 transition-colors">
                                        {team.image ? (
                                            <Image
                                                src={team.image}
                                                alt={team.teamName}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                                                <Trophy className="w-8 h-8 text-zinc-800" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Section (Icon + Details) */}
                                    <div className="flex-1 flex flex-col items-center text-center justify-center p-6 sm:p-8 space-y-4">
                                        {/* Icon Box */}
                                        <div className={`relative z-10 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                                            <Icon className={`w-6 h-6 ${iconColor}`} />
                                        </div>

                                        {/* Info */}
                                        <div className="relative z-10 space-y-2">
                                            <div className="space-y-0.5">
                                                <h3 className={`text-2xl font-medium transition-colors tracking-tight leading-none text-white group-hover:text-orange-500`}>
                                                    {team.teamName}
                                                </h3>
                                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors font-medium text-[10px]">
                                                    {team.uni}
                                                </p>
                                            </div>

                                            {/* Team ID & Points */}
                                            <div className="flex flex-col items-center gap-1.5 pt-1">
                                                <div className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20">
                                                    <span className="text-[9px] font-mono text-orange-500 uppercase tracking-widest">
                                                        ID: {team.teamId}
                                                    </span>
                                                </div>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-xl font-black text-white tabular-nums">
                                                        {team.points.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </span>
                                                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Pts</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <h4 className="text-white font-medium text-lg">{team.teamName}</h4>
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
