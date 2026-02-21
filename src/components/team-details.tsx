import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { TEAMS } from "@/constants/teams";
import AnimationContainer from "@/components/global/animation-container";

export default function TeamDetails() {
    return (
        <AnimationContainer animation="fadeUp" delay={0.7}>
            <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-8 text-white">Registered Teams</h3>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-white/[0.08] hover:bg-white/[0.04]">
                                <TableHead className="text-gray-400 font-semibold tracking-wider text-xs">Team Name</TableHead>
                                <TableHead className="text-gray-400 font-semibold tracking-wider text-xs whitespace-nowrap">Team ID</TableHead>
                                <TableHead className="text-gray-400 font-semibold tracking-wider text-xs">Team Head</TableHead>
                                <TableHead className="text-gray-400 font-semibold tracking-wider text-xs">HackerRank Username</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {TEAMS.map((team, index) => (
                                <TableRow key={index} className="border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                                    <TableCell className="font-medium text-white">{team.teamName}</TableCell>
                                    <TableCell className="text-orange-500 font-mono text-sm">{team.token}</TableCell>
                                    <TableCell className="text-gray-300">{team.member}</TableCell>
                                    <TableCell className="text-gray-500 text-xs font-mono">{team.hackerRankUser}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AnimationContainer>
    );
}
