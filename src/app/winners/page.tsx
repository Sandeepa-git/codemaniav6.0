import EventTemplate from "@/components/event-template";
import WinnersTable from "@/components/winners-table";

export default function WinnersPage() {
    return (
        <EventTemplate
            title="Grand Finale"
            highlightedTitle="Winners"
            backLink="/#winners"
            tagline=""
            intro="Official results for Codemania v6.0 Grand Finale. Congratulations to all teams for their incredible performance."
            status="Completed"
            date="Feb 28 – Mar 1"
            showContacts={false}
            hideStatus={true}
            centered={true}
            badge="Rankings"
        >
            <WinnersTable />
        </EventTemplate>
    );
}
