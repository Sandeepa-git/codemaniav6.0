"use client";

import { Trophy } from "lucide-react";
import { SELECTED_TEAMS } from "@/constants/selected-teams";
import AnimationContainer from "@/components/global/animation-container";

export default function SelectedTeamsTable() {
    return (
        <AnimationContainer animation="fadeUp" delay={0.7}>
            <div className="mt-16">
                <h3 className="text-2xl font-medium mb-2 text-white">All Qualified Teams</h3>
                <div className="space-y-3">
                    {SELECTED_TEAMS.map((team, idx) => (
                        <div
                            key={team.teamId}
                            className="group/card flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 md:p-6 rounded-2xl border transition-all duration-500 bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                        >
                            {/* Rank Badge */}
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 bg-white/5 text-gray-400 border border-white/5">
                                {team.rank}
                            </div>

                            {/* Team Info */}
                            <div className="flex-1 min-w-0">
                                <h4 className="text-lg md:text-xl font-medium text-white group-hover/card:text-orange-500 transition-colors">
                                    {team.teamName}
                                </h4>
                                <p className="text-gray-400 text-xs md:text-sm flex items-center gap-2 mt-0.5">
                                    <Trophy className="size-3 text-orange-500/50 shrink-0" />
                                    <span>{team.uni}</span>
                                </p>
                            </div>

                            {/* Leader */}
                            <div className="hidden lg:flex flex-col gap-1 min-w-0 flex-1">
                                <span className="text-[10px] text-gray-600 uppercase tracking-widest">Team Leader</span>
                                <span className="text-sm text-gray-300">{team.leader}</span>
                            </div>

                            {/* Team ID */}
                            <div className="hidden md:flex flex-col gap-1 shrink-0">
                                <span className="text-[10px] text-gray-600 uppercase tracking-widest">Team ID</span>
                                <span className="text-sm text-orange-500/80 font-mono">{team.teamId}</span>
                            </div>

                            {/* Score */}
                            <div className="sm:text-right shrink-0 sm:pl-4 sm:border-l border-white/5">
                                <div className="text-orange-500 font-bold text-2xl md:text-3xl tabular-nums leading-none">{team.points}</div>
                                <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-0.5">Points</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimationContainer>
    );
}
