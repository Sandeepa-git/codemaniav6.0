import { NextResponse } from 'next/server';
import { SELECTED_TEAMS } from '@/constants/selected-teams';

export async function GET() {
    try {
        // Map the static data to our display structure
        const leaderboard = SELECTED_TEAMS.map((entry) => {
            return {
                rank: entry.rank,
                handle: entry.handle,
                team: entry.teamName,
                teamId: entry.teamId,
                leader: entry.leader,
                uni: entry.uni,
                score: entry.points.toString(),
                status: entry.rank === 1 ? "Winner" : entry.rank === 2 ? "Runner Up" : entry.rank === 3 ? "2nd Runner Up" : "Qualifiers"
            };
        });

        return NextResponse.json(leaderboard);
    } catch (error: any) {
        console.error('Leaderboard Process Error:', error.message);
        return NextResponse.json({ error: 'Failed to process leaderboard' }, { status: 500 });
    }
}
