"use client";

import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import Image from "next/image";
import PhotoshootMarquee from "./photoshoot-marquee";
import { ArrowLeft, ArrowRight, ShoppingBag, Check, Package, Maximize2 } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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

      {/* Product Showcase */}
      <div className="space-y-20 lg:space-y-32">
        {PRODUCTS.map((product, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">

            {/* 01. Visual Presentation (Left 7 Columns) */}
            <div className={`lg:col-span-7 group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <AnimationContainer animation={index % 2 === 1 ? "fadeLeft" : "fadeRight"} delay={0.4}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] bg-neutral-900 border border-white/5 overflow-hidden group-hover:border-orange-500/30 transition-all duration-700 shadow-2xl mx-4 lg:mx-0 cursor-zoom-in">
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
              </AnimationContainer>
            </div>

            {/* 02. Product Specs (Right 5 Columns) */}
            <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <AnimationContainer animation={index % 2 === 1 ? "fadeRight" : "fadeLeft"} delay={0.5}>
                <div className="p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden mx-4 lg:mx-0">
                  <div className="absolute top-0 right-0 p-6 md:p-8 text-orange-500/10 opacity-50">
                    {product.isBundle ? <Package className="w-16 h-16 md:w-24 md:h-24" /> : <ShoppingBag className="w-16 h-16 md:w-24 md:h-24" />}
                  </div>

                  <h3 className="text-2xl md:text-4xl font-folkra font-medium text-white mb-2 leading-tight pr-12">
                    {product.name}
                  </h3>
                  <p className="text-orange-400 text-xs md:text-sm uppercase tracking-widest font-bold mb-4 md:mb-6">
                    {product.tagline}
                  </p>

                  <div className="text-3xl md:text-5xl font-medium text-white mb-6 md:mb-8 font-folkra tracking-tight">
                    {product.price}
                  </div>

                  <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 pb-8 md:pb-10 border-b border-white/5">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                        <div className="p-1 rounded-full bg-orange-500/20 flex-shrink-0">
                          <Check className="size-2.5 md:size-3 text-orange-500" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6 md:space-y-8">
                    {product.availableSizes && (
                      <div>
                        <div className="flex justify-between items-center mb-3 md:mb-4">
                          <p className="text-xs md:text-sm font-medium text-white uppercase tracking-[3px]">Available Sizes</p>
                          {product.sizeChartImages && product.sizeChartImages.length > 0 && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <button className="text-[10px] md:text-xs text-orange-500 hover:text-orange-400 underline underline-offset-4">
                                  View Size Chart
                                </button>
                              </DialogTrigger>
                              <DialogContent className="w-[95vw] max-w-4xl bg-neutral-900 border border-white/10 max-h-[85vh] overflow-y-auto p-4 md:p-6 text-white">
                                <DialogHeader className="mb-2">
                                  <DialogTitle>Size Chart</DialogTitle>
                                </DialogHeader>
                                <div className="flex flex-col gap-6">
                                  {product.sizeChartImages.map((img, i) => (
                                    <div key={i} className="w-full">
                                      <Image
                                        src={img}
                                        alt={`Size Chart ${i + 1}`}
                                        width={1200}
                                        height={1200}
                                        className="w-full h-auto rounded-lg border border-white/5"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {product.availableSizes.map((size) => (
                            <div key={size} className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] md:text-xs font-medium text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-default transition-all duration-300">
                              {size}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      href={product.orderLink}
                      target="_blank"
                      className="group/order flex items-center justify-center gap-3 md:gap-4 w-full py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] font-bold text-base md:text-lg transition-all duration-500 shadow-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-orange-500/25 hover:scale-[1.02]"
                    >
                      Order Now
                      <ArrowRight className="size-5 md:size-6 group-hover/order:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimationContainer>
            </div>

          </div>
        ))}
      </div>
    </Wrapper >
  );
};

export default SHOP;
