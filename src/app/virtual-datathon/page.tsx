import EventTemplate from "@/components/event-template";
import TeamDetails from "@/components/team-details";

export default function VirtualDatathonPage() {
    return (
        <EventTemplate
            title="Virtual Datathon"
            tagline="Compete Online. Prove Your Skills. Earn Your Spot."
            intro="The Virtual Datathon is the official qualifier phase for Codemania v6.0. Teams will solve timed, data-centric problems to qualify for the 12-hour physical finale."
            status="Scheduled"
            date="February 21"
        >
            <TeamDetails />
        </EventTemplate>
    );
}
