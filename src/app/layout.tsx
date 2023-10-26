import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { ClerkProvider } from "@clerk/nextjs";
import { SidebarProvider } from "~/contexts/SidebarContext";
import { TRPCReactProvider } from "~/trpc/react";
import { PageHeader } from "./_components/header/page_header";
import { Sidebar } from "./_components/sidebar/sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Playbook",
  description: "Community contributed plays",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <SidebarProvider>
        <html lang="en">
          <body className={`font-sans ${inter.variable}`}>
            <TRPCReactProvider headers={headers()}>
              <PageHeader />
              <div className="flex-grow-1 grid grid-cols-[auto,1fr] overflow-auto">
                <Sidebar />
                {children}
              </div>
            </TRPCReactProvider>
          </body>
        </html>
      </SidebarProvider>
    </ClerkProvider>
  );
}
