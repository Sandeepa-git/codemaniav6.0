"use client";

import { useEffect, useState } from "react";
import AnimationContainer from "./global/animation-container";
import Images from "./global/images";
import Wrapper from "./global/wrapper";
import Marquee from "./ui/marquee";
import Link from "next/link";
import Image from "next/image";
import SectionBadge from "./ui/section-badge";
import { ShoppingBag, ArrowRight, User } from "lucide-react";







// ------------------------------------------------------
// HERO SECTION
// ------------------------------------------------------
const Hero = () => {
  const [gifKey, setGifKey] = useState("");

  useEffect(() => {
    // Generate a unique key on mount to force GIF restart
    setGifKey(`?t=${Date.now()}`);
  }, []);

  const companies = [
    Images.comp1,
    Images.comp2,
    Images.comp3,
    Images.comp4,
    Images.comp5,
    Images.comp6,
  ];

  const valueProps = [
    {
      title: "Build Data-Driven Skills",
      description: "Gain hands-on experience in data preprocessing, machine learning, and analytical problem solving through structured workshops and competitive challenges."
    },
    {
      title: "Compete in a Island-wide Datathon",
      description: "Battle against top undergraduate teams from universities across Sri Lanka in a two-phase competition — virtual qualifiers and a 12-hour physical grand finale."
    },
    {
      title: "Earn Recognition & Rewards",
      description: "Win from a prize pool of over LKR 60,000, earn certificates, and gain island-wide recognition for your technical excellence."
    }
  ];

  return (
    <Wrapper className="pt-20 lg:pt-32 relative min-h-screen w-full flex-1 overflow-hidden bg-[#101010]">
      <div className="flex flex-col lg:flex-row w-full h-full px-4 sm:px-6 lg:px-0 items-center justify-between relative min-h-[60vh] lg:min-h-0">

        {/* Mobile-Only Background Image Layer */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden lg:hidden">
          <div className="absolute inset-0 bg-[#101010]/60 z-10" />
          <Image
            src={`/owl-play-once.gif${gifKey}`}
            alt="Owl Background"
            fill
            priority
            unoptimized
            className="object-cover object-center opacity-50 mix-blend-screen"
          />
          <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-[#101010] to-transparent z-20 w-1/4"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-600/10 blur-[80px] rounded-full animate-pulse z-0"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-6 sm:gap-8 py-10 lg:py-16 w-full lg:w-3/5 z-20 lg:z-10 relative">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Codemania v6.0" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-folkra font-normal leading-tight text-white lg:text-gray-300 tracking-tight drop-shadow-xl lg:drop-shadow-none">
              Decode the Data. <br /> Dominate the Challenge.
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <p className="text-sm sm:text-lg text-gray-300 lg:text-gray-400 max-w-xl leading-relaxed drop-shadow-md lg:drop-shadow-none">
              Codemania v6.0: Where Data Meets Competition. The ultimate island-wide datathon for undergraduate innovators across Sri Lanka.
            </p>
          </AnimationContainer>



        </div>

        {/* Desktop-Only Right Image */}
        <div className="hidden lg:flex w-full lg:w-2/5 justify-center lg:justify-end relative h-[350px] sm:h-[450px] lg:h-[600px] mt-12 lg:mt-0">
          <AnimationContainer animation="fadeUp" delay={0.5} className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#101010] via-transparent to-transparent z-20 w-1/3 hidden lg:block"></div>
            <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-[#101010] to-transparent z-20 w-1/3 hidden lg:block"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#101010] to-transparent z-20"></div>
            <Image
              src={`/owl-play-once.gif${gifKey}`}
              alt="Owl"
              fill
              priority
              unoptimized
              className="object-cover rounded-3xl opacity-30 sm:opacity-50 mix-blend-screen"
            />
            {/* Glowing effect following owl eyes theme */}
            <div className="absolute top-[40%] right-[30%] w-32 h-32 bg-orange-600/20 blur-[80px] rounded-full animate-pulse"></div>
          </AnimationContainer>
        </div>

      </div>

      {/* Value Propositions - now wider and slightly smaller text */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-0 pb-20 w-full px-4 sm:px-6 lg:px-0">
        {valueProps.map((prop, idx) => (
          <AnimationContainer key={idx} animation="fadeUp" delay={1 + idx * 0.1}>
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 text-left h-full">
              <h3 className="text-lg font-normal text-orange-500 mb-2">{prop.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{prop.description}</p>
            </div>
          </AnimationContainer>
        ))}
      </div>


    </Wrapper>
  );
};

export default Hero;
