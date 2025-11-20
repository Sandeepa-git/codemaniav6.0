"use client";

import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import Image from "next/image";

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
    name: "Codemania T-Shirt",
    price: "Rs. 2,500",
    availableSizes: ["M", "L", "XL"],
    frontImage: "/images/tshirt-front.png", // Replace with actual front image path
    backImage: "/images/tshirt-back.png",   // Replace with actual back image path
    description: "Official Codemania v6.0 T-shirt. Premium quality, comfortable fit, front and back design.",
    orderLink: "https://forms.gle/YOUR_GOOGLE_FORM_LINK"
  }
];

const SHOP = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="Merchandise" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
            Show Your Codemania Spirit
          </h2>
        </AnimationContainer>
      </div>

      {/* Products */}
      {PRODUCTS.map((product, index) => (
        <AnimationContainer key={index} animation="fadeUp" delay={0.4 + index * 0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Front & Back Images */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden bg-[#191919]">
                <Image
                  src={product.frontImage}
                  alt={`${product.name} Front`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden bg-[#191919]">
                <Image
                  src={product.backImage}
                  alt={`${product.name} Back`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6 text-left">
              <h3 className="text-3xl font-bold text-white">{product.name}</h3>
              <p className="text-2xl font-semibold text-primary">{product.price}</p>
              <p className="text-sm text-muted-foreground">{product.description}</p>

              {/* Available Sizes */}
              <div>
                <p className="text-sm font-medium text-white mb-2">Available Sizes:</p>
                <div className="flex gap-2 flex-wrap">
                  {product.availableSizes.map((size) => (
                    <span key={size} className="px-3 py-1 border border-muted-foreground rounded-full text-sm text-white">
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Order Button (small, like Register Now) */}
              <a
                href={product.orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition text-sm font-medium"
              >
                Order Now
              </a>
            </div>
          </div>
        </AnimationContainer>
      ))}
    </Wrapper>
  );
};

export default SHOP;
