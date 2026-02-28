"use client";

import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import Image from "next/image";
import PhotoshootMarquee from "./photoshoot-marquee";
import { ArrowLeft, Maximize2 } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Product {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  image: string;
  availableSizes?: string[]; // Optional for bundles if sizes are mixed or standard
  orderLink: string;
  isBundle?: boolean;
  sizeChartImages?: string[];
}

const PRODUCTS: Product[] = [
  {
    name: "Codemania Blackout Collection",
    price: "LKR 3,600",
    tagline: "The Ultimate Fan Experience",
    features: [
      "Codemania Founder's Cut Polo",
      "Codemania Midnight Drop Tee",
      "Codemania Wristband",
      "Codemania Sticker Pack"
    ],
    image: "/images/merch/blackout-collection.png",
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    orderLink: "https://docs.google.com/forms/u/2/d/e/1FAIpQLScvpKUzFc-2S-Y_ZfVUDNn0gqI0IeY6BOOPfZIsEBUs8iBntQ/viewform?usp=send_form",
    isBundle: true,
    sizeChartImages: ["/images/merch/size-chart-tee.png", "/images/merch/size-chart-polo.png"]
  },
  {
    name: "Codemania Sentinel Pack",
    price: "LKR 2,350",
    tagline: "Professional & Sleek",
    features: [
      "Codemania Founder's Cut Polo",
      "Codemania Wristband",
      "Codemania Sticker Pack"
    ],
    image: "/images/merch/sentinel-pack.png",
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    orderLink: "https://docs.google.com/forms/u/2/d/e/1FAIpQLScvpKUzFc-2S-Y_ZfVUDNn0gqI0IeY6BOOPfZIsEBUs8iBntQ/viewform?usp=send_form",
    isBundle: true,
    sizeChartImages: ["/images/merch/size-chart-polo.png"]
  },
  {
    name: "Codemania Urban Night Pack",
    price: "LKR 2,250",
    tagline: "Street-Ready Essentials",
    features: [
      "Codemania Midnight Drop Tee",
      "Codemania Wristband",
      "Codemania Sticker Pack"
    ],
    image: "/images/merch/urban-night-pack.png",
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    orderLink: "https://docs.google.com/forms/u/2/d/e/1FAIpQLScvpKUzFc-2S-Y_ZfVUDNn0gqI0IeY6BOOPfZIsEBUs8iBntQ/viewform?usp=send_form",
    isBundle: true,
    sizeChartImages: ["/images/merch/size-chart-tee.png"]
  },
  {
    name: "Codemania Founder's Cut",
    price: "LKR 1,800",
    tagline: "Premium Embroidered Polo",
    features: [
      "Classic Pique Knit Fabric",
      "High-Quality Embroidery",
      "Clean. Elite. Professional."
    ],
    image: "/images/merch/founders-cut.png",
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    orderLink: "https://docs.google.com/forms/u/2/d/e/1FAIpQLScvpKUzFc-2S-Y_ZfVUDNn0gqI0IeY6BOOPfZIsEBUs8iBntQ/viewform?usp=send_form",
    isBundle: false,
    sizeChartImages: ["/images/merch/size-chart-polo.png"]
  },
  {
    name: "Codemania Midnight Drop",
    price: "LKR 1,700",
    tagline: "Street-Style Datathon Tee",
    features: [
      "Premium Cotton Blend",
      "Heavyweight Fabric",
      "Bold Urban Aesthetic"
    ],
    image: "/images/merch/midnight-drop.png",
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    orderLink: "https://docs.google.com/forms/u/2/d/e/1FAIpQLScvpKUzFc-2S-Y_ZfVUDNn0gqI0IeY6BOOPfZIsEBUs8iBntQ/viewform?usp=send_form",
    isBundle: false,
    sizeChartImages: ["/images/merch/size-chart-tee.png"]
  }
];

const SHOP = () => {

  return (
    <Wrapper className="py-20 lg:py-40">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto w-full mb-8 px-4 md:px-0">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group px-1 text-sm md:text-base">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="flex flex-col items-center text-center gap-6 mb-16 lg:mb-24 px-4">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="Official Merchandise" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-folkra font-medium !leading-[1.1] text-white">
            The <span className="text-orange-500">Collection</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl mt-4 md:mt-6 max-w-2xl mx-auto">
            Gear up with the exclusive Codemania v6.0 detailed lineup. <br className="hidden md:block" />
            <span className="text-orange-500 font-medium mt-1 md:mt-2 block">Choose your loadout.</span>
          </p>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4} className="w-full mt-8">
          <PhotoshootMarquee />
        </AnimationContainer>
      </div>

      {/* Product Showcase - Images Only */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {PRODUCTS.map((product, index) => (
          <AnimationContainer key={index} animation="fadeUp" delay={0.3 + index * 0.1}>
            <div className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] bg-neutral-900 border border-white/5 overflow-hidden group-hover:border-orange-500/30 transition-all duration-700 shadow-2xl cursor-zoom-in">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                    {/* Zoom Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <div className="bg-black/50 backdrop-blur-sm p-3 rounded-full border border-white/10 text-white">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                    </div>

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 md:p-8 scale-95 group-hover:scale-100 transition-transform duration-700"
                    />
                    {product.isBundle && (
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 py-1.5 px-3 md:py-2 md:px-4 rounded-full bg-orange-500 text-black text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg shadow-orange-500/20 z-20">
                        Bundle Deal
                      </div>
                    )}
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full bg-transparent border-none p-0 shadow-none">
                  <div className="relative w-full h-[80vh] flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <p className="text-center text-white font-medium mt-4 text-lg">{product.name}</p>
            </div>
          </AnimationContainer>
        ))}
      </div>
    </Wrapper >
  );
};

export default SHOP;
