"use client";

import { useClickOutside } from "@/hooks";
import { cn } from "@/lib";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { RefObject, useRef, useState } from "react";
import Wrapper from "./global/wrapper";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "#about" },
  { name: "Timeline", link: "#timeline" },
  { name: "Rules & Prizes", link: "#rules" },
  { name: "Shop", link: "#shop" },
];

const Navbar = () => {
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);

  const mobileMenuRef = useClickOutside(() => {
    if (open) setOpen(false);
  });

  const { scrollY } = useScroll({
    target: desktopRef as RefObject<HTMLDivElement>,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  // Smooth scroll function
  const handleScroll = (link: string) => {
    if (link.startsWith("#")) {
      const el = document.querySelector(link);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For full page navigation ("/" etc.)
      window.location.href = link;
    }
    setOpen(false); // close mobile menu if open
  };

  return (
    <header className="fixed w-full top-0 inset-x-0 z-50">
      {/* Desktop Navbar */}
      <motion.div
        ref={desktopRef}
        animate={{ width: visible ? "40%" : "100%", y: visible ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 40 }}
        style={{ minWidth: "800px" }}
        className={cn(
          "hidden lg:flex bg-transparent self-start items-center justify-between py-4 rounded-full relative z-[50] mx-auto w-full backdrop-blur",
          visible && "bg-background/60 border border-t-foreground/20 border-b-foreground/10 border-x-foreground/15 w-full"
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/Logo 01.png" alt="Codemania Logo" width={140} height={50} className="object-contain" />
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex flex-row flex-1 absolute inset-0 items-center justify-center w-max mx-auto gap-x-2 text-sm text-muted-foreground font-medium">
            <AnimatePresence>
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 * index, duration: 0.4, ease: "easeInOut" }}
                >
                  <button
                    onClick={() => handleScroll(link.link)}
                    className="hover:text-foreground transition-all duration-300 hover:bg-accent rounded-md px-4 py-2"
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Register Button */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.7 }} className="ml-8 hidden lg:block">
            <Link
              href="/register"
              className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white rounded-md px-6 py-2 shadow-md hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              Register Now
            </Link>
          </motion.div>
        </Wrapper>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        animate={{
          y: visible ? 20 : 0,
          borderTopLeftRadius: open ? "0.75rem" : "2rem",
          borderTopRightRadius: open ? "0.75rem" : "2rem",
          borderBottomLeftRadius: open ? "0" : "2rem",
          borderBottomRightRadius: open ? "0" : "2rem",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className={cn(
          "flex relative flex-col lg:hidden w-full justify-between items-center mx-auto py-4 z-50",
          visible && "bg-neutral-950 w-11/12 border",
          open && "border-transparent"
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          {/* Logo */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <Link href="/">
              <Image src="/images/Logo 01.png" alt="Codemania Logo" width={140} height={58} className="object-contain" />
            </Link>
          </motion.div>

          {/* Hamburger Menu */}
          <div className="flex items-center justify-center gap-x-4">
            {open ? (
              <XIcon className="text-black dark:text-white cursor-pointer" onClick={() => setOpen(false)} />
            ) : (
              <MenuIcon className="text-black dark:text-white cursor-pointer" onClick={() => setOpen(true)} />
            )}
          </div>
        </Wrapper>

        {/* Mobile Links */}
        <AnimatePresence>
          {open && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex rounded-b-xl absolute top-16 bg-neutral-950 inset-x-0 z-50 flex-col items-start justify-start gap-4 w-full px-4 py-8 shadow-xl shadow-neutral-950"
            >
              {NAV_LINKS.map((navItem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: 0.05 * idx, duration: 0.35, ease: "easeOut" }}
                >
                  <button
                    onClick={() => handleScroll(navItem.link)}
                    className="relative text-neutral-300 hover:bg-neutral-800 w-full px-4 py-2 rounded-lg transition-colors duration-300 text-left"
                  >
                    {navItem.name}
                  </button>
                </motion.div>
              ))}

              {/* Register Now Mobile */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ delay: 0.3, duration: 0.3 }}>
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white rounded-md px-4 py-1.5 text-sm w-full text-center mt-4 shadow-md hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  Register Now
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;
