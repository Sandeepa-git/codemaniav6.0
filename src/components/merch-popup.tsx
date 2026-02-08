"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MerchPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if popup has been shown in this session
        // Check if popup has been shown in this session
        const hasShown = sessionStorage.getItem("merchPopupShown_v2");

        if (!hasShown) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem("merchPopupShown_v2", "true");
            }, 1000); // Show after 1 second

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-45%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-45%" }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="fixed left-1/2 top-1/2 z-[101] w-[90%] max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute right-4 top-4 z-[110] rounded-full bg-black/50 p-2 text-white/70 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="relative aspect-[16/9] w-full bg-neutral-950">
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />

                            <Image
                                src="/images/merch/blackout-collection.png"
                                alt="Codemania Merchandise"
                                fill
                                className="object-contain p-8"
                                priority
                            />

                            {/* Floating Badge */}
                            <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-500 border border-orange-500/20 backdrop-blur-md">
                                <ShoppingBag className="h-3 w-3" />
                                <span>NEW ARRIVAL</span>
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl font-folkra tracking-wide">
                                Official <span className="text-orange-500">Merch</span> Drop
                            </h3>
                            <p className="mb-6 text-sm text-gray-400 md:text-base">
                                Gear up with the exclusive Codemania v6.0 detailed lineup. Limited verify edition available now.
                            </p>

                            <div className="flex gap-4">
                                <Link href="/merchandise" className="w-full">
                                    <Button
                                        onClick={handleClose}
                                        className="group w-full bg-orange-500 text-black hover:bg-orange-600 border-none transition-all duration-300"
                                        size="lg"
                                    >
                                        Grab Yours
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MerchPopup;
