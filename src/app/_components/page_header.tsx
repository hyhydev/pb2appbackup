/* eslint-disable @next/next/no-img-element */
import { Menu } from "lucide-react";
import { getServerAuthSession } from "~/server/auth";
import { Button } from "./ui/button";

export async function PageHeader({ children }: { children: React.ReactNode }) {
  const session = await getServerAuthSession();

  return (
    <>
      <div className="flex justify-between gap-10 lg:gap-20">
        <div className="flex flex-shrink-0 items-center gap-4">
          <Button variant={"ghost"}>
            <Menu />
          </Button>
          <a href="/">
            <img
              src={"https://i.imgur.com/oIMyQmn.png"}
              alt="logo"
              className="h-12"
            />
          </a>
        </div>
        <div>Signed in as {session?.user.name}</div>
      </div>
      <div>{children}</div>
    </>
  );
}
