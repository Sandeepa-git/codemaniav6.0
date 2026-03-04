import EventTemplate from "@/components/event-template";
import SelectedTeamsTable from "@/components/selected-teams-table";

export default function GrandFinalePage() {
    return (
        <EventTemplate
            title="Grand Finale"
            backLink="/#competitions"
            tagline="12 Hours. One Winner. Maximum Impact."
            intro="The Grand Finale is a 12-hour on-site datathon hosted at Sri Lanka Technology Campus. Top 15 teams from the Virtual Datathon compete to solve advanced, real-world-inspired challenges under live conditions."
            status="Completed"
            date="Feb 28 – Mar 1"
            showContacts={false}
            hideStatus={false}
            actionButtonText="View Winners & Results"
            actionButtonLink="/winners"
        >
            <SelectedTeamsTable />
        </EventTemplate>
    );
}
