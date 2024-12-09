"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
// import { useEffect, useState } from "react";
export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  const isRender = paths.some(Boolean);
  if (!isRender) {
    return <></>;
  }
  return (
    <nav
      aria-label="breadcrumb"
      className="container overflow-x-auto whitespace-nowrap text-nowrap py-3 text-sm flex gap-2 items-center border-y border-z-border lg:border-none"
    >
      {/* {paths.map((p) => p)} */}
      <Link href={"/"} className="text-zinc-500">
        خانه
      </Link>
      <div className="next">
        <Icon
          icon="ph:caret-circle-left-duotone"
          width={20}
          height={20}
          className="text-zinc-300 flex-grow"
        />
      </div>
      <Link href={"/"} className="text-zinc-500">
        پروژه ها
      </Link>
      <div className="next">
        <Icon
          icon="ph:caret-circle-left-duotone"
          width={20}
          height={20}
          className="text-zinc-300 flex-grow"
        />
      </div>
      <Link href={"/"} className="text-zinc-500">
        انجمن صنفی ایران
      </Link>
      <div className="next">
        <Icon
          icon="ph:caret-circle-left-duotone"
          width={20}
          height={20}
          className="text-zinc-300 flex-grow"
        />
      </div>
      <Link href={"/"} className="text-zinc-500">
        سینمبتسمنیبت
      </Link>
    </nav>
  );
}
