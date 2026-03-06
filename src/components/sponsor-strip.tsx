import Marquee from "./ui/marquee";
import Image from "next/image";
import AnimationContainer from "./global/animation-container";

const SponsorStrip = () => {
    // Replace these paths with your actual logo images in the public/images folder
    const sponsors = [
        "/images/sponsors/1.png",
        "/images/sponsors/2.png",
        "/images/sponsors/3.png",
        "/images/sponsors/4.png",
        "/images/sponsors/5.png",
        "/images/sponsors/6.png",
        "/images/sponsors/7.png",
    ];

    return (
        <div className="w-full relative bg-[#0a0a0a] py-12 border-y border-white/[0.05] overflow-hidden z-20">
            <AnimationContainer animation="fadeUp" delay={0.2}>
                <h3 className="text-center text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.3em] text-gray-500 mb-10">
                    Our Proud Sponsors & Partners
                </h3>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.3}>
                <Marquee className="[--duration:30s] [--gap:5rem] sm:[--gap:8rem]">
                    {sponsors.map((logoPath, idx) => (
                        <div key={idx} className="flex items-center justify-center h-16 transition-all duration-300">
                            <Image
                                src={logoPath}
                                alt={`Sponsor ${idx + 1}`}
                                width={120}
                                height={48}
                                className="w-auto h-8 sm:h-12 object-contain transition-all duration-300"
                            />
                        </div>
                    ))}
                </Marquee>
            </AnimationContainer>
        </div>
    );
};

export default SponsorStrip;
