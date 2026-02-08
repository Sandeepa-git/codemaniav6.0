"use client";

import { REGISTRATION_DEADLINE } from "@/constants";
import { useClickOutside } from "@/hooks";
import { cn } from "@/lib";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Wrapper from "./global/wrapper";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Timeline", link: "#timeline" },
  { name: "Workshops", link: "#workshops" },
  { name: "Prizes", link: "#prizes" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [isRegOpen, setIsRegOpen] = useState(true);

  useEffect(() => {
    // Check registration status
    const checkStatus = () => {
      const now = new Date();
      // setIsRegOpen(now < REGISTRATION_DEADLINE);
      setIsRegOpen(false);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const mobileMenuRef = useClickOutside(() => {
    if (open) setOpen(false);
  });

  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  // Smooth scroll function
  const handleScroll = (link: string) => {
    if (link.startsWith("#")) {
      if (pathname === "/") {
        const el = document.querySelector(link);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = "/" + link;
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
          visible ? "gap-12" : "lg:max-w-screen-xl px-4 lg:px-20"
        )}>
          {/* Logo */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/Logo 01.png" alt="Codemania Logo" width={140} height={50} className="object-contain" />
            </Link>
          </motion.div>

          {/* Desktop Links */}
          {!pathname.startsWith("/register") && !pathname.startsWith("/workshops") && !pathname.startsWith("/leaderboard") && !pathname.startsWith("/merchandise") && (
            <div className={cn(
              "hidden lg:flex flex-row items-center justify-center gap-x-2 text-sm text-muted-foreground font-medium",
              !visible && "flex-1 absolute inset-0 w-max mx-auto"
            )}>
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
          )}

          {/* Register Button - Hidden */}
          {!pathname.startsWith("/register") && !pathname.startsWith("/workshops") && !pathname.startsWith("/leaderboard") && !pathname.startsWith("/merchandise") && isRegOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.7 }} className="hidden lg:block">
              <Link
                href="/register"
                className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white rounded-md px-6 py-2 shadow-md hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 whitespace-nowrap"
              >
                Register Now
              </Link>
            </motion.div>
          )}

          {/* New Button Desktop */}
          {!pathname.startsWith("/register") && !pathname.startsWith("/workshops") && !pathname.startsWith("/leaderboard") && !pathname.startsWith("/merchandise") && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.8 }} className="hidden lg:block ml-4">
              <Link
                href="/workshops/data-preprocessing"
                className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white rounded-md px-6 py-2 shadow-md hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 whitespace-nowrap"
              >
                Workshop 01
              </Link>
            </motion.div>
          )}

          {/* Workshop Registration Button - Workshop Pages Only */}
          {pathname === "/workshops/data-preprocessing" && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.8 }} className="hidden lg:block ml-4">
              <Link
                href="https://forms.gle/1HA4FjYAuWD5bFct7"
                target="_blank"
                className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white rounded-md px-6 py-2 shadow-md hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 whitespace-nowrap"
              >
                Registration
              </Link>
            </motion.div>
          )}
        </div>
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
          "flex relative flex-col lg:hidden w-full justify-between items-center mx-auto py-4 z-50 transition-all duration-300",
          visible && "bg-black/80 backdrop-blur-lg w-11/12 border border-white/10 rounded-2xl px-4 mt-2",
          open && "bg-neutral-950 border-transparent w-full mt-0 rounded-none"
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          {/* Logo */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <Link href="/">
              <Image src="/images/Logo 01.png" alt="Codemania Logo" width={140} height={58} className="object-contain w-28 md:w-[140px] h-auto" />
            </Link>
          </motion.div>

          {/* Hamburger Menu */}
          {!pathname.startsWith("/register") && !pathname.startsWith("/workshops") && !pathname.startsWith("/leaderboard") && !pathname.startsWith("/merchandise") && (
            <div className="flex items-center justify-center gap-x-4">
              {isRegOpen && (
                <Link
                  href="/register"
                  className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white rounded-md px-3 py-2 text-sm font-semibold shadow-md hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 whitespace-nowrap"
                >
                  Register Now
                </Link>
              )}
              {open ? (
                <XIcon className="text-black dark:text-white cursor-pointer" onClick={() => setOpen(false)} />
              ) : (
                <MenuIcon className="text-black dark:text-white cursor-pointer" onClick={() => setOpen(true)} />
              )}
            </div>
          )}

          {/* Workshop Mobile Header - Registration Button */}
          {pathname === "/workshops/data-preprocessing" && (
            <div className="flex items-center justify-center gap-x-4">
              <Link
                href="https://forms.gle/1HA4FjYAuWD5bFct7"
                target="_blank"
                className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white rounded-md px-3 py-2 text-sm font-semibold shadow-md hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 whitespace-nowrap"
              >
                Registration
              </Link>
            </div>
          )}

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

              {/* Register Now Mobile - Hidden */}
              {isRegOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ delay: 0.3, duration: 0.3 }}>
                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white rounded-md px-4 py-1.5 text-sm w-full text-center mt-4 shadow-md hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all duration-300"
                  >
                    Register Now
                  </Link>
                </motion.div>
              )}

              {/* New Button Mobile */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ delay: 0.4, duration: 0.3 }}>
                <Link
                  href="/workshops/data-preprocessing"
                  onClick={() => setOpen(false)}
                  className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white rounded-md px-4 py-1.5 text-sm w-full text-center mt-4 shadow-md hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 block"
                >
                  Workshop 01
                </Link>
              </motion.div>

              {/* Workshop Registration Button - Workshop Pages Only */}
              {pathname === "/workshops/data-preprocessing" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ delay: 0.4, duration: 0.3 }}>
                  <Link
                    href="https://forms.gle/1HA4FjYAuWD5bFct7"
                    target="_blank"
                    onClick={() => setOpen(false)}
                    className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white rounded-md px-4 py-1.5 text-sm w-full text-center mt-4 shadow-md hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 block"
                  >
                    Registration
                  </Link>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div >
    </header >
  );
};

export default Navbar;
