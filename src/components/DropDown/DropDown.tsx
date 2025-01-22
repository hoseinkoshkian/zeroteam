"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, Dispatch, SetStateAction } from "react";
import Link from "next/link";
type DropDownProps = {
  openDrop: string | null;
  setOpenDrop: Dispatch<SetStateAction<string | null>>;
  dropId: string;
  toggleDrop: any;
};
export default function DropDown({
  openDrop,
  //   setOpenDrop,
  dropId,
  toggleDrop,
}: DropDownProps) {
  //   const [drop, setDrop] = useState(false);
  const dropData = [
    "هوش مصنوعی",
    "بازار کار",
    "تجربه کاری",
    "system design",
    "تلمتری و بازاریابی عصبی",
  ];
  //   function toggleDrop() {
  //     setDrop((prev) => !prev);
  //   }
  return (
    <div id="drop-down" className="flex flex-col gap-3 w-full lg:w-44 relative">
      <button
        className="flex gap-2 items-center px-4 py-2 bg-z-border rounded-lg justify-between focus:outline focus-within:outline-2"
        onClick={()=> toggleDrop(dropId)}
      >
        <p>دسته بندی</p>
        {openDrop == dropId ? (
          <Icon icon={"ph:caret-up-bold"} width={16} height={16}></Icon>
        ) : (
          <Icon icon={"ph:caret-down-bold"} width={16} height={16}></Icon>
        )}
      </button>
      <div
        className={`drop-menu ${
          openDrop == dropId ? "" : "hidden"
        } flex flex-col border-2 rounded-lg divide-y-2 absolute top-12 bg-white z-50
          `}
      >
        {dropData.map((i) => (
          <Link
            href={"/"}
            className="list-none py-2 w-full px-4 hover:bg-z-border"
          >
            {i}
          </Link>
        ))}
      </div>
    </div>
  );
}
