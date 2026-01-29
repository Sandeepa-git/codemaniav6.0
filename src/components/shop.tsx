"use client";

import { useState, useEffect } from "react";
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import Image from "next/image";
import { ArrowLeft, ArrowRight, ShoppingBag, Check, Lock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Product {
  name: string;
  price: string;
  availableSizes: string[];
  frontImage: string;
  backImage: string;
  description: string;
  orderLink: string;
}

const PRODUCTS: Product[] = [
  {
    name: "Codemania v6.0 Official T-Shirt",
    price: "Rs. 2,500",
    availableSizes: ["M", "L", "XL", "XXL"],
    frontImage: "/images/tshirt-front.png",
    backImage: "/images/tshirt-back.png",
    description: "Engineered for tech enthusiasts. This limited-edition jersey features premium breathable fabric with high-density Codemania v6.0 structural prints.",
    orderLink: "https://forms.gle/YOUR_GOOGLE_FORM_LINK"
  }
];

const SHOP = () => {
  // Countdown State
  const [timeRemaining, setTimeRemaining] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);
  const [isLocked, setIsLocked] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Target Date: February 20, 2026, 12:00 AM (00:00:00)
    const targetDate = new Date("2026-02-20T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setIsLocked(false);
        setTimeRemaining(null);
        setIsModalOpen(false); // Close modal if it was open
      } else {
        setIsLocked(true);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeRemaining({ days, hours, minutes, seconds });
      }
    };

    const timerId = setInterval(updateTimer, 1000);
    updateTimer(); // Initial check

    return () => clearInterval(timerId);
  }, []);

  if (isLocked) {
    return (
      <Wrapper className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20 relative overflow-hidden">
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group px-1 text-sm md:text-base">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="flex flex-col items-center gap-8 z-10">
          <div className="size-24 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 animate-pulse shadow-[0_0_30px_rgba(234,88,12,0.2)]">
            <ShoppingBag className="size-10 text-orange-500" />
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-folkra font-medium text-white mb-6 tracking-tight">
              Dropping <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">Soon</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
              The exclusive Codemania v6.0 merchandise collection is coming soon.
            </p>
          </div>



          <div className="mt-12 flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 backdrop-blur-md">
            <Lock className="w-4 h-4" />
            <span>Store is currently locked</span>
          </div>
        </div>
      </Wrapper>
    );
  }

  const handleOrderClick = (e: React.MouseEvent) => {
    if (isLocked) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <Wrapper className="py-24 lg:py-40">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto w-full mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group px-1 text-sm md:text-base">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="flex flex-col items-center text-center gap-6 mb-24">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="Official Gear" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-folkra font-medium !leading-[1.1] text-white">
            Wear the <span className="text-orange-500">Legend</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Limited edition Codemania v6.0 merchandise designed for those who decode the impossible.
          </p>
        </AnimationContainer>
      </div>

      {/* Product Showcase */}
      <div className="space-y-32">
        {PRODUCTS.map((product, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

            {/* 01. Visual Presentation (Left 7 Columns) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-8 skew-y-0 group">
              <AnimationContainer animation="fadeRight" delay={0.4}>
                <div className="relative aspect-[3/4] rounded-[2.5rem] bg-neutral-900 border border-white/5 overflow-hidden group-hover:border-orange-500/30 transition-all duration-700 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src={product.frontImage}
                    alt={`${product.name} Front`}
                    fill
                    className="object-contain p-8 scale-90 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 uppercase tracking-widest font-bold">
                    Front View
                  </div>
                </div>
              </AnimationContainer>

              <AnimationContainer animation="fadeRight" delay={0.5}>
                <div className="relative aspect-[3/4] rounded-[2.5rem] bg-neutral-900 border border-white/5 overflow-hidden mt-8 sm:mt-16 group-hover:border-orange-500/30 transition-all duration-700 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src={product.backImage}
                    alt={`${product.name} Back`}
                    fill
                    className="object-contain p-8 scale-90 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 uppercase tracking-widest font-bold">
                    Back View
                  </div>
                </div>
              </AnimationContainer>
            </div>

            {/* 02. Product Specs (Right 5 Columns) */}
            <div className="lg:col-span-5">
              <AnimationContainer animation="fadeLeft" delay={0.6}>
                <div className="p-8 sm:p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-orange-500/10">
                    <ShoppingBag size={120} />
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-folkra font-medium text-white mb-4 leading-tight">
                    {product.name}
                  </h3>

                  <div className="text-4xl font-bold text-orange-500 mb-8 font-folkra">
                    {product.price}
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed mb-10 pb-10 border-b border-white/5">
                    {product.description}
                  </p>

                  <div className="space-y-8">
                    <div>
                      <p className="text-sm font-bold text-white uppercase tracking-[3px] mb-4">Available Sizes</p>
                      <div className="flex gap-3 flex-wrap">
                        {product.availableSizes.map((size) => (
                          <div key={size} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-default transition-all duration-300">
                            {size}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="p-1 rounded-full bg-orange-500/20"><Check className="size-3 text-orange-500" /></div>
                        Premium Cotton Blend (180 GSM)
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="p-1 rounded-full bg-orange-500/20"><Check className="size-3 text-orange-500" /></div>
                        High-Density Screen Print
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        if (isLocked) {
                          setIsModalOpen(true);
                        } else {
                          window.open(product.orderLink, '_blank');
                        }
                      }}
                      className={`group/order flex items-center justify-center gap-4 w-full py-5 rounded-[2rem] font-black text-lg transition-all duration-500 shadow-xl ${isLocked
                        ? "bg-neutral-800 text-gray-400 cursor-not-allowed border border-white/10 hover:border-orange-500/50"
                        : "bg-white text-black hover:bg-orange-500 hover:text-white"
                        }`}
                    >
                      {isLocked ? "Dropping Soon" : "Process Order"}
                      {isLocked ? (
                        <Lock className="size-6" />
                      ) : (
                        <ArrowRight className="size-6 group-hover/order:translate-x-2 transition-transform" />
                      )}
                    </button>
                  </div>
                </div>
              </AnimationContainer>
            </div>

          </div>
        ))}
      </div>

      {/* Dropout Countdown Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-neutral-900/95 border border-white/10 backdrop-blur-xl sm:rounded-[2rem] max-w-md p-8 shadow-2xl">
          <DialogHeader className="flex flex-col items-center text-center space-y-4">
            <div className="size-16 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-2">
              <ShoppingBag className="size-8 text-orange-500" />
            </div>
            <DialogTitle className="text-3xl font-black text-white font-folkra leading-tight">
              Merchandise Dropping Soon <span className="text-orange-500">🚀</span>
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-base">
              Our merch officially drops on <span className="text-white font-bold">February 20</span>. <br /> Get ready to grab yours!
            </DialogDescription>
          </DialogHeader>

          {timeRemaining && (
            <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-8 w-full">
              {[
                { label: "DAYS", value: timeRemaining.days },
                { label: "HRS", value: timeRemaining.hours },
                { label: "MINS", value: timeRemaining.minutes },
                { label: "SECS", value: timeRemaining.seconds }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <span className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 w-full">
            <Button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-white text-black hover:bg-gray-200 font-bold rounded-xl py-6 text-base"
            >
              Got it, I'll be ready!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Wrapper>
  );
};

export default SHOP;
