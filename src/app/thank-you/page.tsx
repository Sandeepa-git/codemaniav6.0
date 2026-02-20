import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/global/wrapper";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-[#101010] text-white flex flex-col relative overflow-hidden">
            <Navbar />

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

            <Wrapper className="flex-1 flex flex-col items-center justify-center text-center px-4 py-32">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8 animate-bounce">
                    <CheckCircle2 className="w-14 h-14 text-green-500" />
                </div>

                <h1 className="text-4xl md:text-6xl font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Thank You for Registering!
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                    Your registration for <span className="text-orange-500 font-medium">Codemania v6.0</span> has been received successfully.
                    We've sent a confirmation email to the team leader. Stay tuned for further updates!
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 h-14 px-8 text-lg rounded-2xl group">
                            Back to Home
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Wrapper>

            <Footer />
        </main>
    );
}
