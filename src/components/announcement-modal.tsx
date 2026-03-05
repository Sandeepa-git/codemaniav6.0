"use client";

import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib";

export default function AnnouncementModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1500); // Small delay for better UX
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent
                hideClose={true}
                className="max-w-[90vw] sm:max-w-[500px] p-0 overflow-hidden border-none bg-transparent shadow-2xl z-[200]"
            >
                <DialogTitle className="sr-only">Event Completion Announcement</DialogTitle>
                <DialogDescription className="sr-only">
                    Celebrating the successful completion of Codemania v6.0.
                </DialogDescription>

                <div className="relative group overflow-hidden rounded-[2.5rem] bg-neutral-950 border border-white/5 backdrop-blur-3xl p-8 sm:p-12 text-center">

                    {/* Animated Background Glows */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/20 rounded-full blur-[80px] animate-pulse" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-600/10 rounded-full blur-[80px] animate-pulse" />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo placeholder / Title */}
                        <h2 className="text-4xl sm:text-5xl font-folkra font-medium text-white mb-6 tracking-tight">
                            Codemania <span className="text-orange-500">v6.0</span>
                        </h2>

                        <div className="space-y-4 mb-10">
                            <p className="text-xl sm:text-2xl font-medium text-gray-200 leading-tight">
                                Chapter 6 has ended successfully...!
                            </p>

                            <div className="h-px w-12 bg-orange-500/30 mx-auto" />

                            <p className="text-gray-400 font-medium">
                                Stay tuned for the next chapter
                            </p>

                            <div className="pt-4">
                                <p className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 animate-gradient-x flex items-center justify-center gap-3">
                                    Congratulations to our winners!
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            <Link href="/winners" onClick={handleClose} className="w-full">
                                <Button className="w-full py-6 sm:py-8 rounded-2xl bg-white text-black hover:bg-orange-500 hover:text-white transition-all duration-500 text-lg font-bold shadow-xl shadow-black/20 group/btn">
                                    See Winners
                                    <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Close Button (X) */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-300 z-50 group/close"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/close:rotate-90 transition-transform duration-300">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    {/* Decorative Border Glow */}
                    <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] group-hover:border-orange-500/20 transition-colors duration-[1.5s]" />
                </div>
            </DialogContent>
        </Dialog>
    );
}
