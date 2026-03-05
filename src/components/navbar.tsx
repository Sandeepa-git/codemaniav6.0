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
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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
        initial={{ y: 0 }}
        animate={{
          y: visible ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className={cn(
          "flex lg:hidden w-full flex-col justify-between items-center mx-auto py-4 z-[60] transition-all duration-300 relative",
          visible && "bg-black/90 backdrop-blur-xl w-11/12 border border-white/10 shadow-2xl shadow-black/50 rounded-2xl px-4 mt-2",
          !visible && "px-4"
        )}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <Link href="/" className="flex items-center">
              <Image src="/images/Logo 01.png" alt="Codemania Logo" width={120} height={45} className="object-contain w-24 md:w-32 h-auto" priority />
            </Link>
          </motion.div>

          {/* Mobile Menu Icon */}
          {isHomePage && (
            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-400 hover:text-white transition-colors"
              >
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {isHomePage && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-4 w-full bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl py-6 px-4"
          >
            <div className="flex flex-col gap-5 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-zinc-300 hover:text-white transition-colors w-full text-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div >
    </header >
  );
};

export default Navbar;
