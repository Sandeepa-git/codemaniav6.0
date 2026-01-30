import { Metadata } from "next";

export const generateMetadata = ({
    title = process.env.NEXT_PUBLIC_APP_NAME || "Codemania v6.0",
    description = "Codemania v6.0: Where Data Meets Competition. The ultimate island-wide datathon for undergraduate innovators across Sri Lanka.",
    image = "/images/owl.png",
    icons = [
        {
            rel: "apple-touch-icon",
            url: "/icons/favicon.png"
        },
        {
            rel: "icon",
            url: "/icons/favicon.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    ...(noIndex && { robots: { index: false, follow: false } }),
});
