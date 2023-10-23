/* eslint-disable @next/next/no-img-element */
"use client";

import { Menu } from "lucide-react";
import { useUIStore } from "~/store/uiStore";
import { Button } from "../ui/button";

export function PageHeaderFirstSection() {
  "use client";
  const { fullWidthSearch } = useUIStore();
  // const { toggle } = useSidebarContext();

  return (
    <div
      className={`flex-shrink-0 items-center gap-4 ${
        fullWidthSearch ? "hidden" : "flex"
      }`}
    >
      {/* <Button onClick={toggle} variant="ghost" size="icon"> */}
      <Button variant="ghost" size="icon">
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
  );
}
