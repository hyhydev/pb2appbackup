"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useUIStore } from "~/store/uiStore";
import { Button } from "../ui/button";

export function PageHeaderFirstSection() {
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
      <Link href="/">
        <Image
          src="https://i.imgur.com/oIMyQmn.png"
          alt="logo"
          width={48}
          height={48}
          className="h-12"
        />
      </Link>
    </div>
  );
}
