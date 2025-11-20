import { cn } from "@/lib";
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";

const RULES = () => {
    const rulesData = [
        {
            title: "Teaming",
            description: `
- Maximum 3 participants per team.
- One Team Leader for coordination.
- Each participant can belong to only one team.
            `
        },
        {
            title: "Registering",
            description: `
- Competitors must complete registration before 11:59 pm on January 28th using the provided form.
- Participation is open to undergraduate students of SLTC; IEEE membership is not required.
- Only registered teams are allowed to participate.
- Team members must present email confirmations received during the registration process.
- Registrations begin at 4:00 p.m., and participants must arrive at least 10 minutes before the start.
            `
        },
        {
            title: "Competition",
            description: `
- Competitors must attend physically.
- Challenges categorized into easy, intermediate, and hard levels.
- Participants must use provided HackerRank accounts and rename them as instructed.
- Challenges must be completed during the given time.
- Multiple attempts allowed with no penalties; valid submission must score higher than previous attempts.
- Competitors must solve challenges without outside help.
- Internet searches are allowed, but directly copying code is prohibited.
- All code will undergo plagiarism checks.
- Failure to adhere to rules results in immediate disqualification.
            `
        },
        {
            title: "Scoring & Winners",
            description: `
- Winners selected based on HackerRank scoring mechanism.
- Cash prizes awarded to the top 3 teams.
- Judges’ decisions are final and absolute.
            `
        },
        {
            title: "Prizes",
            description: `
<span class="text-yellow-400 text-lg font-semibold">1st Place: Rs. 30,000</span>  
<span class="text-gray-300 text-lg font-semibold">2nd Place: Rs. 20,000</span>  
<span class="text-orange-400 text-lg font-semibold">3rd Place: Rs. 10,000</span>
            `
        },
        {
            title: "Additional Rewards",
            description: `
- Gift prizes for the top 10 teams.
- All participants receive certificates of participation.
- Exclusive swags: T-shirts, wristbands, and sticker packs.
            `
        }
    ];

    return (
        <Wrapper className="py-20 lg:py-32 relative">
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-4 py-8 w-full">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Rules & Prizes" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        Are You Ready to Compete?
                    </h1>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Take the challenge and showcase your coding skills in Codemania v5.0!
                    </p>
                </AnimationContainer>
            </div>

            {/* Rules Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full pt-10">
                {rulesData.map((item, index) => (
                    <AnimationContainer key={index} animation="fadeUp" delay={0.5 + index * 0.2}>
                        <div
                            className={cn(
                                "flex flex-col justify-between h-full bg-gradient-to-b rounded-lg lg:rounded-2xl p-6 lg:p-8",
                                index % 2 === 0 ? "from-neutral-900 to-transparent" : "from-transparent to-neutral-900"
                            )}
                        >
                            <div className="flex items-center gap-x-4">
                                <AnimationContainer animation="scaleUp" delay={0.7 + index * 0.2}>
                                    <div className="size-10 rounded-full bg-gradient-to-b from-primary to-orange-400 flex items-center justify-center">
                                        <span className="text-lg font-medium text-white">{index + 1}</span>
                                    </div>
                                </AnimationContainer>
                                <h3 className="text-lg font-medium">{item.title}</h3>
                            </div>
                            <div className="space-y-4 w-full mt-4 flex-1">
                                <AnimationContainer animation="fadeUp" delay={0.9 + index * 0.2}>
                                    <p
                                        className="text-sm md:text-base text-muted-foreground whitespace-pre-line"
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                </AnimationContainer>
                            </div>
                        </div>
                    </AnimationContainer>
                ))}
            </div>
        </Wrapper>
    )
};

export default RULES;
