"use client";

import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";
import { ArrowRight, Database, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Workshops = () => {
    const workshops = [
        {
            id: "01",
            date: "February 11",
            title: "Data Preprocessing & Augmentation",
            description: "Learn how to handle raw datasets, clean and transform data, and apply augmentation techniques to prepare data for analysis and modeling.",
            icon: <Database className="size-8 text-orange-500" />,
            link: "/workshops/data-preprocessing"
        },
        {
            id: "02",
            date: "February 16",
            title: "Introduction to Machine Learning & Data-Driven Thinking",
            description: "Build on the basics by introducing machine learning concepts and data-driven thinking to solve real-world problems.",
            icon: <BrainCircuit className="size-8 text-orange-500" />,
            link: "/workshops/intro-to-ml"
        }
    ];

    return (
        <Wrapper className="py-20">
            <div className="flex flex-col items-center justify-center text-center">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Capacity Building" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-5xl font-medium mt-4 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        Level Up Your Data Skills
                    </h2>
                </AnimationContainer>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full max-w-5xl">
                    {workshops.map((workshop, index) => (
                        <AnimationContainer key={index} animation="fadeUp" delay={0.5 + index * 0.1}>
                            <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 text-left flex flex-col h-full group">
                                <div className="p-4 rounded-2xl bg-orange-500/10 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {workshop.icon}
                                </div>
                                <span className="text-orange-500 font-mono font-bold mb-2">Status: Scheduled - {workshop.date}</span>
                                <h3 className="text-2xl font-bold text-white mb-4">{workshop.title}</h3>
                                <p className="text-gray-400 mb-8 flex-1">{workshop.description}</p>
                                <Link href={workshop.link}>
                                    <Button variant="outline" className="rounded-full border-orange-500/20 hover:bg-orange-500 hover:text-white transition-all group/btn">
                                        Read More
                                        <ArrowRight className="size-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>

                <AnimationContainer animation="fadeUp" delay={0.6}>
                    <Link href="/register">
                        <Button size="lg" className="mt-8 px-8 py-6 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white font-bold text-lg shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_40px_rgba(234,88,12,0.6)] hover:scale-105 transition-all duration-300">
                            Register Now
                            <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </AnimationContainer>
            </div>
        </Wrapper>
    );
};

export default Workshops;
