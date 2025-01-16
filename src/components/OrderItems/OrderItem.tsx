// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import reqs from "./reqs.svg";
import design from "./design.png";
import develop from "./develop.png";
import support from "./support.png";
import PN from "persian-number";
import * as motion from "motion/react-client";

import { cva, VariantProps } from "class-variance-authority";
import { ElProps } from "src/types/types";
type ButtonVariantProps = VariantProps<typeof OrderItemStyles>;
interface OrderItem extends VariantProps<typeof OrderItemStyles>, ElProps {
  title: string;
  text: string;
  number: number;
  dir: boolean;
}
// type imgTypes = "reqs" | "design" | "develop" | "suppurt";
const OrderItemStyles = cva("", {
  variants: {
    img: {
      reqs: reqs.src,
      design: design.src,
      develop: develop.src,
      support: support.src,
    },
  },
});

export default function OrderItem({
  img,
  title,
  text,
  number,
  dir,
  extra,
  ...props
}: OrderItem) {
  return (
    <>
      {/* desktop */}
      <div
        id="order-item-container"
        className={`hidden lg:h-[200px] relative lg:w-[80%] lg:flex justify-center lg:items-stretch  mx-auto ${
          dir ? "" : "flex-row-reverse"
        }`}
        {...props}
      >
        <div className="absolute top-0 rounded-[50%] bg-white z-10  min-w-12 min-h-12 w-12 h-12 border-4 border-z-blue flex-grow  flex justify-center items-center  text-z-blue text-xl font-semibold">
          {PN.convertEnToPe(number)}
        </div>

        <div className="w-1/2">
          <div
            className={`w-full flex justify-between items-center  relative ${
              dir ? "" : "flex-row-reverse"
            }`}
          >
            <h5 className="bg-z-blue min-w-fit px-5 py-2 rounded-lg text-white font-bold">
              {title}
            </h5>
            {/* <motion.div
              className="h-[4px] bg-z-blue border-none outline-none"
              // whileInView={{ width: 0 }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              // transition={{ duration: 2, ease: "easeInOut" }}
            /> */}
            <hr className="h-[4px] w-full bg-z-blue border-none outline-none" />
          </div>

          <div className={`leading-loose text-justify w-full p-8 hyphens-none`}>{text}</div>
        </div>
        <div className="w-1/2 px-4 py-2 ">
          <ExportedImage
            className="mx-auto "
            alt="zeroteam-logo"
            src={OrderItemStyles({ img })}
            height={150}
            width={150}
          ></ExportedImage>
        </div>
        <div
          className={`absolute h-full w-1 left-1/2 top-0 bg-z-yellow z-1`}
        ></div>
      </div>
      {/* mobile */}
      <div
        id="order-item-container"
        className={`lg:hidden w-[95%] relative flex-col justify-center items-center  mx-auto ${
          dir ? "" : "flex-row-reverse"
        }`}
        {...props}
      >
        <div
          className={`absolute -top-1 rounded-[50%] bg-white z-10  min-w-12 min-h-12 w-12 h-12 border-4 border-z-blue flex-grow  flex justify-center items-center text-z-blue text-xl font-semibold ${
            dir ? "left-0" : "right-0"
          }`}
        >
          {PN.convertEnToPe(number)}
        </div>

        <div className="">
          <div
            className={`w-full flex justify-between items-center  relative ${
              dir ? "" : "flex-row-reverse"
            } `}
          >
            <h5 className="bg-z-blue min-w-fit px-5 py-2 rounded-lg text-white flex-grow z-50 font-bold">
              {title}
            </h5>
            <hr className="h-[4px] w-full bg-z-blue border-none outline-none" />
          </div>

          <div
            className={`leading-loose text-justify ${
              dir ? "pr-5 pl-12" : "pl-5 pr-12"
            }  py-5 flex flex-col gap-4`}
          >
            {text}
            <ExportedImage
              className="mx-auto "
              alt="zeroteam-logo"
              src={OrderItemStyles({ img })}
              height={150}
              width={150}
            ></ExportedImage>
          </div>
        </div>
        <div
          className={`absolute h-full w-1 ${
            dir ? "left-[22px]" : "right-[22px]"
          } top-0 bg-z-yellow z-1`}
        ></div>
      </div>
    </>
  );
}
export { type ButtonVariantProps };
