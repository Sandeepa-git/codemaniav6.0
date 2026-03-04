import EventTemplate from "@/components/event-template";
import TeamDetails from "@/components/team-details";
import AnimationContainer from "@/components/global/animation-container";
import { FileDown } from "lucide-react";
import Link from "next/link";

export default function VirtualDatathonPage() {
    return (
        <EventTemplate
            title="Virtual Datathon"
            backLink="/#competitions"
            tagline="Compete Online. Prove Your Skills. Earn Your Spot."
            intro="The Virtual Datathon is the official qualifier phase for Codemania v6.0. Teams will solve timed, data-centric problems to qualify for the 12-hour physical finale."
            status="Completed"
            date="February 21"
            actionButtonText="View Leaderboard"
            actionButtonLink="/leaderboard"
            showContacts={false}
            sidebar={
                <AnimationContainer animation="fadeLeft" delay={0.6}>
                    <div className="flex flex-col gap-4">
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] flex flex-col items-center text-center">
                            <h4 className="text-xl font-medium mb-6 text-white text-left w-full">Resources</h4>
                            <a
                                href="/VIRTUAL DATATHON GUIDELINES.pdf"
                                download
                                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-medium py-4 px-6 rounded-2xl transition-all duration-300 group"
                            >
                                <FileDown className="size-5 transition-transform group-hover:-translate-y-1" />
                                Download Guideline Book
                            </a>
                        </div>
                    </div>
                </AnimationContainer>
            }
        >
            <TeamDetails />
        </EventTemplate>
    );
}
