"use client";

import { cn } from "@/lib";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import Wrapper from "./global/wrapper";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Winners", link: "#winners" },
    { name: "Timeline", link: "#timeline" },
    { name: "Workshops", link: "#workshops" },
    { name: "Competitions", link: "#competitions" },
    { name: "Prizes", link: "#prizes" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 inset-x-0 z-50">
      {/* Desktop Navbar */}
      <motion.div
        ref={desktopRef}
        layout
        initial={false}
        animate={{
          width: visible ? "75%" : "100%",
          y: visible ? 20 : 0,
          backgroundColor: visible ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0)",
          borderWidth: visible ? "1px" : "0px",
          borderColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: visible ? "0 0 40px rgba(0, 0, 0, 0.8)" : "none",
          paddingLeft: visible ? "2rem" : "0rem",
          paddingRight: visible ? "2rem" : "0rem",
        }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 20,
          mass: 1
        }}
        className="hidden lg:flex self-start items-center justify-between py-2 rounded-full relative z-[50] mx-auto backdrop-blur-2xl min-w-[850px]"
      >
        <div className={cn(
          "flex items-center justify-between w-full mx-auto",
          visible ? "" : "lg:max-w-screen-xl px-4 lg:px-20"
        )}>
          {/* Logo */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/Logo 01.png" alt="Codemania Logo" width={140} height={50} className="object-contain" />
            </Link>
          </motion.div>

          {/* Links - Only on Homepage */}
          {isHomePage && (
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Action Button Space - Keeps logo left and links center/right if desired, or just empty */}
          {isHomePage && <div className="w-[140px]" />}
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        animate={{
          y: visible ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className={cn(
          "flex relative flex-col lg:hidden w-full justify-between items-center mx-auto py-4 z-50 transition-all duration-300",
          visible && "bg-black/80 backdrop-blur-lg w-11/12 border border-white/10 rounded-2xl px-4 mt-2"
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4 w-full">
          {/* Logo */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <Link href="/">
              <Image src="/images/Logo 01.png" alt="Codemania Logo" width={140} height={58} className="object-contain w-28 md:w-[140px] h-auto" />
            </Link>
          </motion.div>

          {/* Mobile Menu Icon - Simplified if needed */}
          {isHomePage && <div className="w-10" />}
        </Wrapper>
      </motion.div >
    </header >
  );
};

export default Navbar;
