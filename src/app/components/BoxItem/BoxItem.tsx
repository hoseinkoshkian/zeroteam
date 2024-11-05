import { cva, VariantProps } from "class-variance-authority";
// import { ReactElement } from "react";
import { ElProps } from "src/types/types";
import Image from "next/image";
import lamp from "./lamp.svg";
interface BoxProps extends VariantProps<typeof boxItemStyles>, ElProps {
  title: string;
  text: string;
  size: number;
}
const boxItemStyles = cva(
  "box-item flex flex-col gap-2 bg-z-blue px-12 py-10 rounded-2xl relative z-50",
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
}: BoxProps) {
  return (
    <div
      className={`${boxItemStyles({
        intent,
      })} w-[${size}px] ${extra}`}
    >
      <h3 className="font-extrabold text-xl z-10">{title}</h3>
      <h4>{text}</h4>
      <Image alt="lamp-icon" src={lamp} height="80" width="80" className="absolute left-[5%] z-0"></Image>
    </div>
  );
}
