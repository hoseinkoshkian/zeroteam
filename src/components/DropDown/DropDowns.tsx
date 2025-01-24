"use client";
import { useState, useEffect, useRef } from "react";
import DropDown from "./DropDown";

export default function DropDowns({ visibility }: { visibility: Boolean }) {
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  //   const dropdownRef = useRef<HTMLDivElement>(null);
  function toggleDrop(id: string) {
    setOpenDrop((prevId) => (prevId === id ? null : id));
  }
  //   useEffect(() => {
  //     const handleClickOutside = (event: MouseEvent) => {
  //       if (
  //         dropdownRef.current &&
  //         !dropdownRef.current.contains(event.target as Node)
  //       ) {
  //         setOpenDrop(null);
  //       }
  //     };
  //     document.addEventListener("click", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //     };
  //   }, []);

  return (
    <>
      {visibility && (
        <div className="flex flex-col gap-4 lg:flex-row">
          {["", "", ""].map((_, i) => (
            <DropDown
              key={i}
              dropId={String(i + 1)}
              openDrop={openDrop}
              setOpenDrop={setOpenDrop}
              toggleDrop={toggleDrop}
              //   dropdownRef={dropdownRef}
            />
          ))}
        </div>
      )}
    </>
  );
}
