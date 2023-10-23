"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Bell, Link, Plus, Search, User } from "lucide-react";
import { type Session } from "next-auth";
import { useUIStore } from "~/store/uiStore";
import { Button } from "../ui/button";

type PageHeaderSecondSectionProps = {
  session: Session | null;
};

export function PageHeaderSecondSection({
  session,
}: PageHeaderSecondSectionProps) {
  "use client";
  const { fullWidthSearch, showFullWidthSearch } = useUIStore();

  return (
    <div
      className={`flex-shrink-0 md:gap-2 ${
        fullWidthSearch ? "hidden" : "flex"
      }`}
    >
      <Button
        onClick={() => showFullWidthSearch()}
        size="icon"
        variant="ghost"
        className="md:hidden"
      >
        <Search />
      </Button>
      <Button size="icon" variant="ghost">
        <Plus />
      </Button>
      <Button size="icon" variant="ghost">
        <Bell />
      </Button>
      {session ? (
        <Link href={"/api/auth/signout"}>
          <Avatar>
            <AvatarImage src={session.user.image ?? undefined} />
            <AvatarFallback>
              {session.user.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Link>
      ) : (
        <Link href={"/api/auth/signin"}>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
        </Link>
      )}
    </div>
  );
}
