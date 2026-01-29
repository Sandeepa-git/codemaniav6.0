import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
    title: "Leaderboard | Codemania v6.0",
    description: "Check the latest rankings and scores of teams competing in Codemania v6.0."
});

export default function LeaderboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
