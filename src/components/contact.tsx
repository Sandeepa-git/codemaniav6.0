"use client";

import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";
import { Mail, Phone, User } from "lucide-react";

const Contact = () => {
    const contacts = [
        {
            role: "PROJECT CO-CHAIRPERSON",
            name: "Ravishka Rathnayake",
            phone: "0713581934",
            email: "cit-24-01-0251@sltc.ac.lk"
        },
        {
            role: "PROJECT CO-CHAIRPERSON",
            name: "Sandeepa Wimalasiri",
            phone: "0750445861",
            email: "cit-24-01-0110@sltc.ac.lk"
        },
        {
            role: "Industry Outreach Team Head",
            name: "Tishan Arunalu",
            phone: "071-5520046",
            email: "cit-24-01-0563@sltc.ac.lk"
        },
        {
            role: "DELEGATE HANDLING HEAD",
            name: "Saneth Rasanjana",
            phone: "0722281161",
            email: "cit-24-01-0238@sltc.ac.lk"
        }
    ];

    return (
        <Wrapper id="contact" className="py-20 lg:py-32">
            <div className="flex flex-col items-center justify-center text-center">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Get in Touch" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-5xl font-medium mt-4 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        CONTACT US
                    </h2>
                </AnimationContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full">
                    {contacts.map((contact, index) => (
                        <AnimationContainer key={index} animation="fadeUp" delay={0.4 + index * 0.1}>
                            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm text-left hover:border-orange-500/50 transition-all duration-300">
                                <div className="p-3 rounded-xl bg-orange-500/10 w-fit mb-6">
                                    <User className="size-6 text-orange-500" />
                                </div>
                                <span className="text-orange-500 text-xs font-bold uppercase tracking-tight block mb-2">{contact.role}</span>
                                <h3 className="text-xl font-bold text-white mb-6">{contact.name}</h3>

                                <div className="space-y-4">
                                    <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                                        <Phone className="size-4 text-orange-500/60" />
                                        {contact.phone}
                                    </a>
                                    <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm break-all">
                                        <Mail className="size-4 text-orange-500/60" />
                                        {contact.email}
                                    </a>
                                </div>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default Contact;
