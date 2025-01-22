import { useState } from "react";
import DropDown from "./DropDown";
export default function DropDowns({ visibility }: { visibility: Boolean }) {
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  function toggleDrop(id: string) {
    setOpenDrop((prevId) => (prevId === id ? null : id));
  }
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
            />
          ))}
        </div>
      )}
    </>
  );
}
