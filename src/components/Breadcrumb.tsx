"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  // console.log(paths)
  const isRender = paths.some(Boolean);
  if (!isRender) {
    return <></>;
  }
  return (
    <nav
      aria-label="breadcrumb"
      className="container mx-auto overflow-x-auto whitespace-nowrap text-nowrap py-3 text-sm flex gap-2 items-center border-y border-z-border sm:border-none mb-5"
    >
      {paths.map((p) => (
        <Link
          href={"/"}
          className="text-zinc-500 hover:underline hover:underline-offset-2 hover:decoration-z-blue hover:decoration-2"
        >
          {p}
        </Link>
      ))}
      <Link
        href={"/"}
        className="text-zinc-500 hover:underline hover:underline-offset-2 hover:decoration-z-blue hover:decoration-2"
      >
        خانه
      </Link>
      <div className="next">
        <Icon
          icon="ph:caret-left-bold"
          width={20}
          height={20}
          className="text-z-blue flex-grow"
        />
      </div>
      <Link href={"/"} className="text-z-content hover:link-sm font-semibold">
        سینمبتسمنیبت
      </Link>
    </nav>
  );
}
