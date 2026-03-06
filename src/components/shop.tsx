import { useState, useEffect, useCallback } from 'react';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import { ArrowLeft, Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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

const SHOP = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null ? (prev + 1) % IMAGES.length : 0));
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null ? (prev - 1 + IMAGES.length) % IMAGES.length : IMAGES.length - 1));
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <Wrapper className="py-20 lg:py-40">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto w-full mb-8 px-4 md:px-0">
        <Link href="/#portals" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group px-1 text-sm md:text-base">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="flex flex-col items-center text-center gap-6 mb-16 lg:mb-24 px-4">

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-folkra font-medium !leading-[1.1] text-white">
            Merchandise  <span className="text-orange-500">Gallery</span>
          </h2>
        </AnimationContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
        {IMAGES.map((src, index) => (
          <AnimationContainer key={index} animation="fadeUp" delay={0.1 + (index % 3) * 0.1}>
            <div
              className="group relative aspect-[4/5] rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-orange-500/30 transition-all duration-700 shadow-2xl cursor-zoom-in"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

              {/* Zoom Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="bg-black/50 backdrop-blur-sm p-3 rounded-full border border-white/10 text-white">
                  <Maximize2 className="w-6 h-6" />
                </div>
              </div>

              <Image
                src={src}
                alt={`Codemania Photoshoot ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </AnimationContainer>
        ))}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent hideClose className="max-w-[100vw] w-screen h-screen bg-black/95 border-none p-0 flex items-center justify-center z-[100]">
          <DialogTitle className="sr-only">Photoshoot Gallery</DialogTitle>
          <DialogDescription className="sr-only">
            View Codemania v6.0 photoshoot images in fullscreen.
          </DialogDescription>
          {selectedIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
              {/* Main Image */}
              <div className="relative w-full h-full flex items-center justify-center animate-in fade-in zoom-in duration-300">
                <Image
                  src={IMAGES[selectedIndex]}
                  alt={`Codemania Photoshoot ${selectedIndex + 1}`}
                  fill
                  className="object-contain rounded-lg shadow-2xl shadow-orange-500/10"
                />
              </div>

              {/* Navigation Controls */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 md:left-8 p-3 md:p-4 rounded-full bg-white/5 hover:bg-orange-500 text-white hover:text-black border border-white/10 transition-all duration-300 group z-50 backdrop-blur-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-active:scale-90 transition-transform" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 md:right-8 p-3 md:p-4 rounded-full bg-white/5 hover:bg-orange-500 text-white hover:text-black border border-white/10 transition-all duration-300 group z-50 backdrop-blur-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-active:scale-90 transition-transform" />
              </button>

              {/* Close Button UI override (optional since Dialog has its own, but we might want a bigger one) */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-3 md:p-4 rounded-full bg-white/5 hover:bg-red-500 text-white border border-white/10 transition-all duration-300 group z-50 backdrop-blur-md"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Index Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-gray-400 backdrop-blur-md">
                {selectedIndex + 1} / {IMAGES.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Wrapper>
  );
};

export default SHOP;
