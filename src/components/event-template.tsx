"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Wrapper from "@/components/global/wrapper";
import AnimationContainer from "@/components/global/animation-container";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, CheckCircle2, User, Lock } from "lucide-react";
import Image from "next/image";

interface EventPageProps {
    title: string;
    tagline: string;
    intro: string;
    status: string;
    date: string;
    takeaways?: { title: string; description: string }[];
    showContacts?: boolean;
    registrationClosed?: boolean;
    hideStatus?: boolean;
    regLink?: string;
    hideRegisterButton?: boolean;
    actionButtonText?: string;
    actionButtonLink?: string;
    lockUntil?: string;
    sidebar?: React.ReactNode;
    children?: React.ReactNode;
}

const EventTemplate = ({
    title,
    tagline,
    intro,
    status,
    date,
    takeaways,
    showContacts = true,
    registrationClosed = false,
    hideStatus = false,
    regLink,
    hideRegisterButton = true,
    actionButtonText,
    actionButtonLink,
    lockUntil,
    sidebar,
    children
}: EventPageProps) => {
    const [isLocked, setIsLocked] = useState(true);
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const checkLock = () => {
            const now = new Date();
            const unlockDate = lockUntil ? new Date(lockUntil) : new Date("2024-01-01T19:00:00");
            const diff = unlockDate.getTime() - now.getTime();

            if (diff <= 0) {
                setIsLocked(false);
                setTimeLeft("");
            } else {
                setIsLocked(true);
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                setTimeLeft(`${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
            }
        };
        checkLock();
        const interval = setInterval(checkLock, 1000);
        return () => clearInterval(interval);
    }, [lockUntil]);

    const contacts = [
        { name: "Ravishka Rathnayake", role: "Co-Chair", img: "/images/ravishka.jpg" },
        { name: "Sandeepa Vimukthi", role: "Co-Chair", img: "/images/sandeepa.jpg" },
        { name: "Chanupa Niduwara", role: "Industry Outreach Team Head", img: "/images/chanupa.jpg" },
        { name: "Saneth Rasanjana", role: "Delegate Handling", img: "/images/saneth.jpg" }
    ];

    return (
        <main className="min-h-screen bg-[#101010] text-white flex flex-col pt-20">
            <Navbar />

            <Wrapper className="py-20 flex-1">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-12 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <AnimationContainer animation="fadeUp" delay={0.2}>
                            <h1 className="text-4xl md:text-6xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                {title}
                            </h1>
                            <p className="text-orange-500 text-xl font-medium mb-8">
                                {tagline}
                            </p>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.3}>
                            <p className="text-gray-400 text-lg leading-relaxed mb-12">
                                {intro}
                            </p>
                        </AnimationContainer>

                        {takeaways && (
                            <AnimationContainer animation="fadeUp" delay={0.4}>
                                <h3 className="text-2xl font-medium mb-8 text-white">Key Takeaways / Process</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {takeaways.map((item, idx) => (
                                        <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-orange-500/30 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <CheckCircle2 className="size-6 text-orange-500 shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="font-medium text-lg mb-2">{item.title}</h4>
                                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AnimationContainer>
                        )}

                        {children}
                    </div>

                    <div className="space-y-8">
                        {/* Status Card */}
                        {!hideStatus && (
                            <AnimationContainer animation="fadeLeft" delay={0.5}>
                                <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-600 to-orange-400 text-white shadow-xl shadow-orange-600/20">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="size-6" />
                                            <span className="font-medium uppercase tracking-widest text-sm">Status</span>
                                        </div>
                                        {actionButtonText && (
                                            <span className="text-orange-50 opacity-90 text-sm font-medium">{date}</span>
                                        )}
                                    </div>
                                    {status && <h4 className="text-3xl font-medium mb-2">{status}</h4>}
                                    {!actionButtonText && (
                                        <p className="text-orange-50 opacity-90 text-lg font-medium">{date}</p>
                                    )}

                                    {actionButtonText && actionButtonLink ? (
                                        isLocked ? (
                                            <div className="space-y-6 mt-8">
                                                <div className="text-center space-y-1">
                                                    <p className="text-orange-100/60 text-xs uppercase tracking-[0.2em] font-medium">Starts In</p>
                                                    <p className="text-4xl font-bold tabular-nums tracking-tight">{timeLeft}</p>
                                                </div>
                                                <Button disabled className="w-full bg-white text-orange-600/50 cursor-not-allowed font-medium rounded-xl py-4 md:py-6 text-base md:text-lg">
                                                    <Lock className="w-5 h-5 mr-2" />
                                                    {actionButtonText}
                                                </Button>
                                            </div>
                                        ) : (
                                            <Link href={actionButtonLink} target="_blank">
                                                <Button className="w-full mt-8 bg-white text-orange-600 hover:bg-orange-50 font-medium rounded-xl py-4 md:py-6 text-base md:text-lg transition-all duration-300">
                                                    {actionButtonText}
                                                </Button>
                                            </Link>
                                        )
                                    ) : hideRegisterButton ? null : regLink ? (
                                        <Link href={regLink} target="_blank">
                                            <Button className="w-full mt-8 bg-white text-orange-600 hover:bg-orange-50 font-medium rounded-xl py-4 md:py-6 text-base md:text-lg">
                                                Register Now
                                            </Button>
                                        </Link>
                                    ) : registrationClosed ? (
                                        <Button disabled className="w-full mt-8 bg-neutral-800 text-gray-400 cursor-not-allowed font-medium rounded-xl py-4 md:py-6 text-base md:text-lg border border-neutral-700">
                                            <Lock className="w-5 h-5 mr-2" />
                                            Coming Soon
                                        </Button>
                                    ) : isLocked ? (
                                        <Button disabled className="w-full mt-8 bg-white/20 text-white cursor-not-allowed font-medium rounded-xl py-4 md:py-6 text-base md:text-lg border border-white/10 hover:bg-white/20">
                                            <Lock className="w-5 h-5 mr-2" />
                                            Opening Soon
                                        </Button>
                                    ) : (
                                        <Button disabled className="w-full mt-8 bg-neutral-800 text-gray-400 cursor-not-allowed font-medium rounded-xl py-4 md:py-6 text-base md:text-lg border border-neutral-700">
                                            <Lock className="w-5 h-5 mr-2" />
                                            Registration Closed
                                        </Button>
                                    )}
                                </div>
                            </AnimationContainer>
                        )}

                        {/* Sidebar content */}
                        {sidebar}

                        {/* Contacts Card */}
                        {showContacts && (
                            <AnimationContainer animation="fadeLeft" delay={0.6}>
                                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08]">
                                    <h4 className="text-xl font-medium mb-6 text-white">Contact Section</h4>
                                    <div className="space-y-4">
                                        {contacts.map((contact, idx) => (
                                            <div key={idx} className="flex items-center gap-4 group">
                                                <div className="relative size-12 rounded-full overflow-hidden border border-white/10 group-hover:border-orange-500 transition-colors">
                                                    <Image
                                                        src={contact.img}
                                                        alt={contact.name}
                                                        fill
                                                        className="object-cover object-top"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-sm">{contact.name}</p>
                                                    <p className="text-xs text-gray-500 uppercase">{contact.role}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimationContainer>
                        )}
                    </div>
                </div>
            </Wrapper>

            <Footer />
        </main>
    );
};

export default EventTemplate;
