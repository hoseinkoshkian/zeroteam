"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import DropDowns from "@components/DropDown/DropDowns";
import { useState } from "react";
export default function SearchBar() {
  const [dropVisibility, setDropVisibility] = useState(false);
  function toggleFilter() {
    setDropVisibility((prev) => !prev);
  }
  return (
    <div id="search-in-blog" className="flex flex-col gap-4">
      <div id="searchbar" className="flex gap-2">
        <input
          type="text"
          placeholder="کاوش کن ..."
          className="placeholder:text-z-poor-content font-bold w-full px-3 bg-z-border focus:outline focus:outline-2 rounded-lg "
        />
        <Icon
          icon={"ph:funnel-bold"}
          width={48}
          height={48}
          className="text-z-poor-content p-3 bg-z-border rounded-lg flex-shrink-0 cursor-pointer"
          onClick={toggleFilter}
        ></Icon>
        <Icon
          icon={"ph:magnifying-glass-bold"}
          width={48}
          height={48}
          className="text-z-poor-content p-3 bg-z-border rounded-lg flex-shrink-0 cursor-pointer focus:outline focus:outline-2"
        ></Icon>
      </div>
      <DropDowns visibility={dropVisibility}></DropDowns>
    </div>
  );
}
