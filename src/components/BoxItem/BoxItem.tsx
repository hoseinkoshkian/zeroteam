import { cva, VariantProps } from "class-variance-authority";
// import { ReactElement } from "react";
import { ElProps } from "src/types/types";
// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";

import lamp from "./lamp.svg";
import customer from "./customer.svg";
import time from "./time.svg";
import tool from "./tool.svg";
import { ReactElement } from "react";

interface BoxProps extends VariantProps<typeof boxItemStyles>, ElProps {
  title: string;
  text: string;
  size: number;
  icon: string;
}
const boxItemStyles = cva(
  "box-item flex flex-col gap-2 bg-z-blue px-12 pt-10 pb-24 rounded-2xl relative z-50",
  {
    variants: {
      intent: {
        blue: "bg-z-blue text-white",
        yellow: "bg-z-yellow",
      },
      defaultVariants: {
        intent: "bg-z-blue",
      },
    },
  }
);
export default function BoxItem({
  intent,
  title,
  text,
  size,
  extra,
  icon,
}: BoxProps) {
  // console.log(size)
  let iconEl: ReactElement = <></>;
  switch (icon) {
    case "tool":
      iconEl = (
        <ExportedImage
          alt="tool-icon"
          src={tool}
          height="100"
          width="100"
          className="absolute left-[5%] top-[65%] z-0"
        ></ExportedImage>
      );
      break;

    case "lamp":
      iconEl = (
        <ExportedImage
          alt="lamp-icon"
          src={lamp}
          height="100"
          width="100"
          className="absolute left-[5%] top-[50%] z-0"
        ></ExportedImage>
      );
      break;

    case "customer":
      iconEl = (
        <ExportedImage
          alt="customer-icon"
          src={customer}
          height="100"
          width="100"
          className="absolute left-[5%] top-[65%] z-0"
        ></ExportedImage>
      );
      break;

    case "time":
      iconEl = (
        <ExportedImage
          alt="time-icon"
          src={time}
          height="100"
          width="100"
          className="absolute left-[5%] top-[65%] z-0"
        ></ExportedImage>
      );
      break;

    default:
      iconEl = (
        <ExportedImage
          alt="lamp-icon"
          src={time}
          height="100"
          width="100"
          className="absolute left-[5%] top-[50%] z-0"
        ></ExportedImage>
      );
      break;
  }
  return (
    <div
      className={`${boxItemStyles({
        intent,
      })} w-[${size}px] ${extra}`}
    >
      <h3 className="font-extrabold text-xl z-10">{title}</h3>
      <h4>{text}</h4>
      {iconEl}
    </div>
  );
}
