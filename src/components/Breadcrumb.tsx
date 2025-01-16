"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { breadcrumbTranslation } from "src/breadcrumbTranslation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  const translatedBreadcrumb = paths.map((item) => breadcrumbTranslation[item]);

  return (
    <nav
      aria-label="breadcrumb"
      className="container mx-auto overflow-x-auto whitespace-nowrap text-nowrap py-3 text-sm flex gap-2 items-center border-y border-z-border sm:border-none mb-5"
    >
      <Link
        key={0}
        href={"/"}
        className="text-zinc-500 hover:underline hover:underline-offset-2 hover:decoration-z-blue hover:decoration-2"
      >
        صفحه اصلی
      </Link>
      <div className="next">
        <Icon
          icon="ph:caret-left-bold"
          width={20}
          height={20}
          className="text-z-blue flex-grow"
        />
      </div>
      {translatedBreadcrumb.map((peice, i, arr) => {
        const final = arr.length - 1 == i;
        if (final) {
          return (
            <Link
              key={i + 1}
              href={`/${paths[i]}`}
              className="text-z-content hover:link-sm font-semibold"
            >
              {peice}
            </Link>
          );
        } else {
          return (
            <>
              <Link
                key={i + 1}
                href={`/${paths[i]}`}
                className="text-zinc-500 hover:underline hover:underline-offset-2 hover:decoration-z-blue hover:decoration-2"
              >
                {peice}
              </Link>
              <div className="next">
                <Icon
                  icon="ph:caret-left-bold"
                  width={20}
                  height={20}
                  className="text-z-blue flex-grow"
                />
              </div>
            </>
          );
        }
      })}
    </nav>
  );
}
