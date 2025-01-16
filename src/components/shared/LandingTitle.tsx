import staff from "./staff.svg";
import staffB from "./staff-b.svg";
// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import { ElProps } from "../../../types/types";
import { cva, VariantProps } from "class-variance-authority";

interface LandingTitleProps extends ElProps, VariantProps<typeof landingTitle> {
  text: string;
}
const landingTitle = cva("", {
  variants: {
    intent: {
      blue: "blue",
      yellow: "yellow",
    },
    defaultVariants: {
      intent: "yellow",
    },
  },
});

export default function LandingTitle({
  intent,
  extra,
  text,
  ...props
}: LandingTitleProps) {
  const staffEl =
    landingTitle({
      intent,
    }) == "yellow" ? (
      <ExportedImage src={staff} width={30} height={30} alt="." />
    ) : (
      <ExportedImage src={staffB} width={30} height={30} alt="." />
    );
  return (
    <div
      className={` flex gap-5 font-extrabold justify-center ${extra}`}
      {...props}
    >
      {staffEl}
      <h3 className="text-lg">{text}</h3>
      {staffEl}
    </div>
  );
}
