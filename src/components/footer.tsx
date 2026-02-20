import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";

const QUICK_LINKS = [
    { label: "About", href: "/#about" },
    { label: "Timeline", href: "/#timeline" },
    { label: "Workshops", href: "/#workshops" },
    { label: "Competitions", href: "/#competitions" },
    { label: "Prizes", href: "/#prizes" },
];

const SOCIAL_LINKS = [
    { icon: Facebook, href: "https://web.facebook.com/sltcieeecs/?_rdc=1&_rdr#" },
    { icon: Instagram, href: "https://www.instagram.com/sltcieeecs/?hl=en" },
    { icon: Linkedin, href: "https://linkedin.com/company/sltcieeecs?originalSubdomain=lk" },
    { icon: Youtube, href: "https://youtube.com/playlist?list=PLEuhnn5mTJsGbcFqRC5ZZUS8x2oYqcVkB&si=BbqcvrqoF9NVJKZc" },
];

const Footer = () => {
    return (
        <footer className="relative border-t border-white/5 pt-16 pb-8 w-full overflow-hidden bg-black">
            <Wrapper>
                <div className="grid gap-12 xl:grid-cols-3">
                    <AnimationContainer animation="fadeRight" delay={0.4}>
                        <div className="flex flex-col items-start justify-start md:max-w-[400px]">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/Logo 01.png"
                                    alt="Codemania Logo"
                                    width={140}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-gray-400 mt-6 text-sm leading-relaxed">
                                Decode the Data. Dominate the Challenge.
                                <br />
                                Organized by IEEE Computer Society Student Branch Chapter of SLTC.
                            </p>
                            <div className="flex items-center gap-4 mt-8">
                                {SOCIAL_LINKS.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="text-gray-400 hover:text-orange-500 transition-colors bg-white/5 p-2 rounded-lg"
                                    >
                                        <social.icon className="size-5" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </AnimationContainer>

                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div>
                            <h3 className="text-white font-medium mb-6">Quick Links</h3>
                            <ul className="space-y-4 text-sm text-gray-400">
                                {QUICK_LINKS.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-orange-500 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-medium mb-6">Contact</h3>
                            <p className="text-sm text-gray-400">
                                Have questions?
                                <br />
                                <a href="mailto:cit-24-01-0251@sltc.ac.lk" className="text-orange-500 hover:underline">Reach out to us</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        © 2026 Codemania v6.0. All rights reserved.
                    </p>
                </div>
            </Wrapper>
        </footer>
    );
};

export default Footer;
