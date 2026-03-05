"use client";

import { WINNERS } from "@/constants/winners";
import AnimationContainer from "@/components/global/animation-container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, ArrowRight } from "lucide-react";

export default function WinnersPreview() {
    const topThree = WINNERS.slice(0, 3);

    // Reorder: Rank 2, Rank 1, Rank 3 to place Rank 1 in the middle
    const podiumOrder = [topThree[1], topThree[0], topThree[2]];

    return (
        <section className="py-24 bg-[#101010] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
            </div>

            <AnimationContainer animation="fadeUp">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
                            Grand Finale <span className="text-orange-500">Winners</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Meet the elite innovators who conquered the ultimate data challenge. These teams pushed the boundaries of analytics and dominance to claim their spot at the top.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
                        {podiumOrder.map((team, idx) => {
                            const isFirst = team.rank === 1;
                            const Icon = isFirst ? Trophy : team.rank === 2 ? Medal : Star;
                            const accentColor = isFirst ? "from-yellow-400/20 to-orange-500/20" : team.rank === 2 ? "from-gray-300/20 to-gray-500/20" : "from-orange-800/20 to-orange-950/20";
                            const borderColor = isFirst ? "border-yellow-500/30" : team.rank === 2 ? "border-gray-400/30" : "border-orange-800/30";

                            return (
                                <motion.div
                                    key={team.teamId}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`relative h-full ${isFirst ? 'z-10 order-1 md:order-none' : team.rank === 2 ? 'z-0 order-2 md:order-none' : 'z-0 order-3 md:order-none'}`}
                                >
                                    <div className={`h-full group relative rounded-[2.5rem] border ${borderColor} bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] transition-all duration-500 ${isFirst ? 'md:scale-105 md:-translate-y-8 shadow-2xl shadow-black/50' : ''}`}>
                                        {/* Glass Highlight */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        <div className="relative p-6 sm:p-8 flex flex-col items-center text-center h-full">
                                            {/* Rank Badge Icon */}
                                            <div className={`mb-6 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                                                <Icon className={`w-8 h-8 ${isFirst ? "text-yellow-500" : team.rank === 2 ? "text-gray-400" : "text-orange-700"}`} />
                                            </div>

                                            {/* Image Container */}
                                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-white/20 transition-colors">
                                                {team.image ? (
                                                    <Image
                                                        src={team.image}
                                                        alt={team.teamName}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                                                        <Trophy className="w-12 h-12 text-zinc-800" />
                                                    </div>
                                                )}
                                                {/* Rank Label overlay on image */}
                                                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white">
                                                    Rank {team.rank}
                                                </div>
                                            </div>

                                            {/* Info */}
                                            <div className="space-y-2 flex-grow flex flex-col justify-end">
                                                <h3 className="text-2xl font-black text-white group-hover:text-orange-500 transition-colors tracking-tight">
                                                    {team.teamName}
                                                </h3>
                                                <p className="text-gray-400 font-medium text-sm">
                                                    {team.uni}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="flex justify-center mt-16">
                        <Link
                            href="/winners"
                            className="group flex items-center gap-2 px-10 py-5 rounded-full bg-white/5 hover:bg-orange-600 border border-white/10 hover:border-orange-500 transition-all duration-300 w-fit"
                        >
                            <span className="font-bold uppercase tracking-widest text-sm text-white">View Full Leaderboard</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
                        </Link>
                    </div>
                </div>
            </AnimationContainer>
        </section>
    );
}
