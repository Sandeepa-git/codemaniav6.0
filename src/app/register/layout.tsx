import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
    title: "Register | Codemania v6.0",
    description: "Register your team for Codemania v6.0, the island-wide datathon for undergraduates."
});

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
