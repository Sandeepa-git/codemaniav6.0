"use client";

import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";
import { Button } from "./ui/button";
import Link from "next/link";
import Marquee from "./ui/marquee";
import Images from "./global/images";

const Partners = () => {
    const partners = [
        Images.comp1,
        Images.comp2,
        Images.comp3,
        Images.comp4,
        Images.comp5,
        Images.comp6,
    ];

    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center justify-center text-center">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Sponsors & Partners" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-5xl font-medium mt-4 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        OUR SPONSORS AND PARTNERS
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4} className="w-full mt-16 px-4">
                    <div className="w-full py-10 bg-white/[0.02] border-y border-white/[0.05] relative overflow-hidden">
                        <Marquee className="[--duration:30s] [--gap:4rem]">
                            {partners.map((Logo, i) => (
                                <div key={i} className="flex items-center justify-center h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    <Logo className="w-auto h-8 sm:h-12" />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </AnimationContainer>

                <div className="mt-32 max-w-3xl w-full p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-neutral-900 to-black border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] -z-10"></div>

                    <AnimationContainer animation="fadeUp" delay={0.5}>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">Let’s Make Meaningful Impact</h3>
                        <p className="text-gray-400 text-lg mb-10">
                            Interested in partnering with Codemania v6.0? Let’s collaborate to empower the next generation of data-driven innovators.
                        </p>
                        <Link href="#contact">
                            <Button size="lg" className="rounded-full px-10 bg-white text-black hover:bg-gray-200 font-bold">
                                Contact Us
                            </Button>
                        </Link>
                    </AnimationContainer>
                </div>
            </div>
        </Wrapper>
    );
};

export default Partners;
