"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";
import NumberFlow from "@number-flow/react";

const Stats = () => {
    const stats = [
        {
            label: "Universities",
            value: "25+",
        },
        {
            label: "Teams",
            value: "200+",
        },
        {
            label: "Participants",
            value: "600+",
        },
    ];

    return (
        <Wrapper className="py-20">
            <div className="flex flex-col items-center justify-center text-center">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Event Scale" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-5xl font-medium mt-4 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        Island-wide Exposure. A Platform for Top Talent.
                    </h2>
                </AnimationContainer>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-5xl">
                    {stats.map((stat, index) => (
                        <StatItem key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

const StatItem = ({ stat, index }: { stat: { label: string, value: string }, index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const numericValue = parseInt(stat.value);

    return (
        <AnimationContainer animation="fadeUp" delay={0.4 + index * 0.1}>
            <div ref={ref} className="flex flex-col items-center justify-center p-8 sm:p-12 rounded-[2rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm group hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex items-baseline gap-1 text-5xl md:text-7xl font-folkra font-medium text-orange-500 mb-2">
                    <NumberFlow
                        value={isInView ? numericValue : 1}
                        style={{ '--number-flow-duration': '4s' } as React.CSSProperties}
                    />
                    <span className="text-3xl md:text-4xl opacity-80">+</span>
                </div>
                <span className="text-gray-400 text-sm sm:text-base font-medium uppercase tracking-[0.2em]">{stat.label}</span>
            </div>
        </AnimationContainer>
    );
};

export default Stats;
