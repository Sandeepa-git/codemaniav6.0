import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
    title: "Merchandise | Codemania v6.0",
    description: "Get your exclusive Codemania v6.0 swag. Limited edition t-shirts and more."
});

export default function MerchandiseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
