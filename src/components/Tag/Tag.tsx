import Link from "next/link";

// import React from 'react'
type TagStyles = "regular" | "report";
type TagProps = { text: string; style: TagStyles };
export default function Tag({ text, style }: TagProps) {
  let tagStyle: string = "border-z-border hover:border-z-content";
  if (style == "report") {
    tagStyle = "border-red-600 hover:bg-red-100 font-semibold text-red-600";
  }
  // switch (style) {
  //   case "regular":
  //     tagStyle = "border-z-border hover:border-z-content";
  //     break;
  //   case "report":
  //     tagStyle = "border-red-600 hover:bg-red-200";
  //   default:
  //     tagStyle = "border-z-border hover:border-z-content";
  //     break;
  // }
  return (
    <Link
      href={"/"}
      className={`search-tag cursor-pointer px-3 py-2 border-2 rounded-xl w-fit ${tagStyle}`}
    >
      {text}
    </Link>
  );
}
