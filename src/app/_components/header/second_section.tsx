"use client";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { Bell, LogIn, Plus, Search } from "lucide-react";
import { useUIStore } from "~/store/uiStore";
import { Button } from "../ui/button";

export function PageHeaderSecondSection() {
  const { isSignedIn, isLoaded } = useAuth();
  const { fullWidthSearch, showFullWidthSearch } = useUIStore();

  return (
    <div
      className={`mr-2 flex-shrink-0 items-center md:gap-2 ${
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
      {!isLoaded ? (
        <div>Loading...</div>
      ) : isSignedIn ? (
        <div className="ml-2 cursor-pointer">
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <div className="ml-2 cursor-pointer">
          <SignInButton afterSignInUrl="/" afterSignUpUrl="/">
            <LogIn />
          </SignInButton>
        </div>
      )}
    </div>
  );
}
