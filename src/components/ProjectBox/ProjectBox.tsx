import ExportedImage from "next-image-export-optimizer";
import macStandImg from "@assets/mac-stand.png";
import sampleImg from "@assets/sample-mockup-mask.png.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
type ProjectBox = {
  prName: string;
  prYear: string;
  zStyle: "yellow" | "blue";
};

export default function ProjectBox() {
  return (
    <Link
      href={"/"}
      className="p-10 border-2 border-z-border rounded-xl w-96 flex flex-col gap-5 group hover:border-z-yellow hover:bg-z-low-yellow hover:scale-105"
    >
      <div className="mac-mockup w-fit relative flex flex-col justify-center items-center ">
        <ExportedImage
          src={sampleImg.src}
          alt="macbook-mockup"
          width={800}
          height={509}
          className="w-[90%] border-b-[12px] border-b-gray-800 rounded-t-xl ring-[4px] ring-gray-800"
        />
        <ExportedImage
          src={macStandImg.src}
          alt="macbook-mockup"
          width={800}
          height={504}
        />
        <div className="camera w-10 h-2 bg-gray-800 rounded-b-sm absolute top-0"></div>
      </div>
      <div className="title-info flex justify-center gap-5 group-hover:text-z-yellow">
        <h2 className=" font-extrabold shrink grow-0 truncate">
          پارت لند اسپادانا - جناب بصیری
        </h2>
        <Icon
          icon={"ph:star-four-fill"}
          width={24}
          height={24}
          className="text-z-yellow"
        ></Icon>
        <p className=" font-extrabold text-z-poor-content grow shrink-0">
          سال ۱۴۰۲
        </p>
      </div>
    </Link>
  );
}
