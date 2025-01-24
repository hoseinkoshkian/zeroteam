"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, Dispatch, SetStateAction, useRef, useEffect } from "react";
import Link from "next/link";
type DropDownProps = {
  openDrop: string | null;
  setOpenDrop: Dispatch<SetStateAction<string | null>>;
  dropId: string;
  toggleDrop: any;
  //   dropdownRef: React.Ref<HTMLDivElement>;
};
export default function DropDown({
  openDrop,
  dropId,
  setOpenDrop,
  toggleDrop,
}: DropDownProps) {
  const _isOpen = openDrop == dropId;

  const dropdownRef = useRef<HTMLDivElement>(null);
  //   console.log(dropdownRef.current);
  useEffect(() => {
    console.log("ldkjdfskl");
    const handleClickOutside = (event: MouseEvent) => {
      //   if (!(dropdownRef.current == event.target)) {
      //     setOpenDrop(null);
      //   }
      //   setOpenDrop(null);
      console.log("click outside");
    };
    document.addEventListener("click", handleClickOutside);
    // return () => {
    //   document.removeEventListener("click", handleClickOutside);
    // };
  }, []);
  const dropData = [
    "هوش مصنوعی",
    "بازار کار",
    "تجربه کاری",
    "system design",
    "تلمتری و بازاریابی عصبی",
  ];
  return (
    <div
      id="drop-down"
      className="flex flex-col gap-3 w-full lg:w-44 relative"
      ref={dropdownRef}
    >
      <button
        className="flex gap-2 items-center px-4 py-2 bg-z-border rounded-lg justify-between focus:outline focus-within:outline-2"
        onClick={() => toggleDrop(dropId)}
      >
        <p>دسته بندی</p>
        {_isOpen ? (
          <Icon icon={"ph:caret-up-bold"} width={16} height={16}></Icon>
        ) : (
          <Icon icon={"ph:caret-down-bold"} width={16} height={16}></Icon>
        )}
      </button>
      <div
        className={`drop-menu ${
          _isOpen ? "" : "hidden"
        } flex flex-col border-2 rounded-lg divide-y-2 absolute top-12 bg-white z-50 overflow-y-scroll h-44 scrollbar-thin
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
