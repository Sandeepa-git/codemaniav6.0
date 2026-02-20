"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [displayedText, setDisplayedText] = useState("");
    const pathname = usePathname();

    // We'll treat the text as a sequence of "actions"
    // Each action is a character to append
    // 'PAUSE' actions are just waiting cycles

    // Using simple Space for separation for now, but we can handle the visual split in the render
    const fullTextSequence = [
        ...Array.from("THINK TWICE"),
        "PAUSE", "PAUSE", "PAUSE", "PAUSE", // 4 pauses * 100ms = 400ms
        ...Array.from(" "), // Space between phrase
        ...Array.from("CODE ONCE")
    ];

    // Effect 1: Handle Body Overflow (Scroll Locking) separately
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
            if (!window.location.hash) {
                window.scrollTo(0, 0);
            }
        } else {
            // Unlock immediately when loading becomes false, 
            // allowing scroll during the exit animation if desired
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [loading]);

    // Effect 2: Handle Typing Animation (Run on mount and pathname change)
    useEffect(() => {
        setLoading(true);
        setDisplayedText("");

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex >= fullTextSequence.length) {
                clearInterval(interval);
                // Wait a bit after finishing before closing
                setTimeout(() => setLoading(false), 1000);
                return;
            }

            const char = fullTextSequence[currentIndex];

            if (char === "PAUSE") {
                // Do nothing, just wait one tick
            } else {
                setDisplayedText((prev) => prev + char);
            }

            currentIndex++;
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [pathname]); // Run on pathname change

    return (
        <AnimatePresence>
            {loading && <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] cursor-default select-none"
            >
                <div className="relative max-w-[90vw] text-center">
                    <motion.h1
                        className="text-lg sm:text-3xl md:text-5xl lg:text-6xl tracking-wide sm:tracking-widest font-medium font-mono text-orange-500 leading-tight whitespace-pre-wrap break-words"
                    >
                        {displayedText}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-1.5 h-[1.1em] bg-orange-500 ml-1 align-bottom"
                        />
                    </motion.h1>
                </div>
            </motion.div>
            }
        </AnimatePresence >
    );
};

export default LoadingScreen;
