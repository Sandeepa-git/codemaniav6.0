"use client";

import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const IMAGES = [
    "/images/Codemania Photoshoot/1.jpg",
    "/images/Codemania Photoshoot/2.jpg",
    "/images/Codemania Photoshoot/3.jpg",
    "/images/Codemania Photoshoot/4.jpg",
    "/images/Codemania Photoshoot/5.jpg",
    "/images/Codemania Photoshoot/6.jpg",
    "/images/Codemania Photoshoot/7.jpg",
    "/images/Codemania Photoshoot/8.jpg",
    "/images/Codemania Photoshoot/9.jpg",
    "/images/Codemania Photoshoot/10.jpg",
    "/images/Codemania Photoshoot/11.jpg",
    "/images/Codemania Photoshoot/12.jpg",
    "/images/Codemania Photoshoot/13.jpg",
    "/images/Codemania Photoshoot/14.jpg",
    "/images/Codemania Photoshoot/15.jpg",
    "/images/Codemania Photoshoot/16.jpg",
    "/images/Codemania Photoshoot/17.jpg",
    "/images/Codemania Photoshoot/18.jpg",
    "/images/Codemania Photoshoot/19.jpg",
    "/images/Codemania Photoshoot/20.jpg",
    "/images/Codemania Photoshoot/21.jpg",
    "/images/Codemania Photoshoot/22.jpg",
    "/images/Codemania Photoshoot/23.jpg",
    "/images/Codemania Photoshoot/24.jpg",
];

const PhotoshootMarquee = () => {
    return (
        <div className="w-full relative">
            <Marquee pauseOnHover className="[--duration:60s] [--gap:1.5rem]">
                {IMAGES.map((src, index) => (
                    <div
                        key={index}
                        className="relative lg:h-64 h-48 rounded-2xl overflow-hidden group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-orange-500/0 opacity-0 group-hover:opacity-10 transition-all duration-300 z-10" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={src}
                            alt={`Codemania Photoshoot ${index + 1}`}
                            className="h-full w-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default PhotoshootMarquee;
