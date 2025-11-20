"use client";

import { useEffect, useState } from "react";
import AnimationContainer from "./global/animation-container";
import Images from "./global/images";
import Wrapper from "./global/wrapper";
import Marquee from "./ui/marquee";
import SectionBadge from "./ui/section-badge";

// ------------------------------------------------------
// COUNTDOWN COMPONENT
// ------------------------------------------------------
interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown = () => {
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 60);
    return date;
  });

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return {};

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const format = (num?: number) =>
    num !== undefined ? num.toString().padStart(2, "0") : "00";

  if (!mounted) return null;

  return (
    <div className="font-mono text-3xl sm:text-5xl md:text-7xl flex flex-wrap items-center gap-2 sm:gap-6 md:gap-8 tracking-widest text-orange-500 drop-shadow-lg select-none">
      {Object.keys(timeLeft).length ? (
        <>
          {/* days */}
          <div className="flex flex-col items-center">
            <span>{format(timeLeft.days)}</span>
            <span className="text-[9px] sm:text-sm text-gray-400 uppercase mt-1">
              days
            </span>
          </div>

          <span className="opacity-50 mb-3 sm:mb-6">:</span>

          {/* hours */}
          <div className="flex flex-col items-center">
            <span>{format(timeLeft.hours)}</span>
            <span className="text-[9px] sm:text-sm text-gray-400 uppercase mt-1">
              hours
            </span>
          </div>

          <span className="opacity-50 mb-3 sm:mb-6">:</span>

          {/* minutes */}
          <div className="flex flex-col items-center">
            <span>{format(timeLeft.minutes)}</span>
            <span className="text-[9px] sm:text-sm text-gray-400 uppercase mt-1">
              mins
            </span>
          </div>

          <span className="opacity-50 mb-3 sm:mb-6">:</span>

          {/* seconds */}
          <div className="flex flex-col items-center">
            <span>{format(timeLeft.seconds)}</span>
            <span className="text-[9px] sm:text-sm text-gray-400 uppercase mt-1">
              secs
            </span>
          </div>
        </>
      ) : (
        <div className="text-2xl md:text-5xl">Hackathon Started!</div>
      )}
    </div>
  );
};

// ------------------------------------------------------
// HERO SECTION
// ------------------------------------------------------
const Hero = () => {
  const companies = [
    Images.comp1,
    Images.comp2,
    Images.comp3,
    Images.comp4,
    Images.comp5,
    Images.comp6,
  ];

  return (
    <Wrapper className="pt-20 lg:pt-32 relative min-h-screen w-full flex-1 overflow-hidden bg-[#101010]">
      <div className="flex flex-col lg:flex-row w-full h-full lg:gap-16 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-start justify-center gap-8 sm:gap-10 py-10 lg:py-16 w-full max-w-4xl mx-auto lg:mx-0">
          
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="THINK TWICE, CODE ONCE" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Welcome to <br className="hidden sm:block" /> Hackathon 2025
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <p className="text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed">
              Join the brightest minds to innovate, build, and revolutionize
              tech. Don’t miss out on the most exciting hackathon of the year.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.8}>
            <Countdown />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={1}>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              Trusted by Industry Leaders
            </p>

            <div className="w-full relative max-w-[90vw] sm:max-w-lg">
              <Marquee className="[--duration:40s] [--gap:2rem] select-none">
                {companies.map((Logo, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center h-12 sm:h-16"
                  >
                    <Logo className="w-auto h-5 sm:h-6 opacity-70 hover:opacity-100 transition" />
                  </div>
                ))}
              </Marquee>

              {/* EDGE GRADIENTS */}
              <div className="pointer-events-none absolute inset-y-0 -right-1 w-1/4 bg-gradient-to-l from-[#101010]"></div>
              <div className="pointer-events-none absolute inset-y-0 -left-1 w-1/4 bg-gradient-to-r from-[#101010]"></div>
            </div>
          </AnimationContainer>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
