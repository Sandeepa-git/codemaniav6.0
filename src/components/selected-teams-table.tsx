import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { SELECTED_TEAMS } from "@/constants/selected-teams";
import AnimationContainer from "@/components/global/animation-container";

export default function SelectedTeamsTable() {
    return (
        <AnimationContainer animation="fadeUp" delay={0.7}>
            <div className="mt-16">
                <h3 className="text-2xl font-medium mb-8 text-white">Selected Teams for Grand Finale</h3>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-white/[0.08] hover:bg-white/[0.04]">
                                <TableHead className="text-gray-400 font-medium tracking-wider text-xs">Team Name</TableHead>
                                <TableHead className="text-gray-400 font-medium tracking-wider text-xs whitespace-nowrap">Team ID</TableHead>
                                <TableHead className="text-gray-400 font-medium tracking-wider text-xs">Team Head</TableHead>
                                <TableHead className="text-gray-400 font-medium tracking-wider text-xs">University</TableHead>
                                <TableHead className="text-gray-400 font-medium tracking-wider text-xs">HackerRank Username</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {SELECTED_TEAMS.map((team, index) => (
                                <TableRow key={index} className="border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                                    <TableCell className="font-medium text-white">{team.teamName}</TableCell>
                                    <TableCell className="text-orange-500 font-mono text-sm">{team.teamId}</TableCell>
                                    <TableCell className="text-gray-300">{team.leader}</TableCell>
                                    <TableCell className="text-gray-400 text-sm">{team.uni}</TableCell>
                                    <TableCell className="text-gray-500 text-xs font-mono">{team.handle}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AnimationContainer>
    );
}
