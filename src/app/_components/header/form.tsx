"use client";

import { ArrowLeft, Search } from "lucide-react";
import { useUIStore } from "~/store/uiStore";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function PageHeaderForm() {
  const { fullWidthSearch, hideFullWidthSearch } = useUIStore();

  return (
    <form
      className={`flex-grow justify-center gap-4 ${
        fullWidthSearch ? "flex" : "hidden md:flex"
      }`}
    >
      {fullWidthSearch && (
        <Button
          onClick={() => hideFullWidthSearch()}
          type="button"
          size="icon"
          variant="ghost"
          className="flex-shrink-0"
        >
          <ArrowLeft />
        </Button>
      )}
      <div className="flex flex-grow">
        <Input
          type="search"
          placeholder="Search"
          className="rounded-r-none focus-visible:ring-transparent"
        />
        <Button className="rounded-l-none px-4 py-2">
          <Search />
        </Button>
      </div>
    </form>
  );
}
