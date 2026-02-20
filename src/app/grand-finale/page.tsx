import EventTemplate from "@/components/event-template";

export default function GrandFinalePage() {
    return (
        <EventTemplate
            title="Grand Finale"
            tagline="12 Hours. One Team. Maximum Impact."
            intro="The Grand Finale is a 12-hour on-site datathon hosted at Sri Lanka Technological Campus. Top teams from the Virtual Datathon compete to solve advanced, real-world-inspired challenges under live conditions."
            status="Scheduled"
            date="Feb 28 – Mar 1"
            takeaways={[
                {
                    title: "Participation",
                    description: "Only the top 15 qualified teams from the Virtual Datathon."
                },
                {
                    title: "Challenges",
                    description: "Advanced datasets requiring analytical depth and innovative modeling."
                },
                {
                    title: "Leaderboard",
                    description: "Real-time scoring and updates throughout the competition."
                },
                {
                    title: "Judging",
                    description: "Based on analytical depth, model performance, solution impact, and presentation."
                }
            ]}
        />
    );
}
