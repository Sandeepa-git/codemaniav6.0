import { Toaster } from "@/components/ui/sonner";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";

import Navbar from "@/components/navbar";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/folkra" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-[#101010] text-foreground font-base antialiased overflow-x-hidden dark",
          base.variable,
          heading.variable
        )}
      >
        <Navbar />
        <Toaster richColors theme="dark" position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
